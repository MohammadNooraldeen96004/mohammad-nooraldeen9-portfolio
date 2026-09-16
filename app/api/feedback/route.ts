import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const feedbackEmail = process.env.FEEDBACK_TO_EMAIL;

    if (!apiKey || !feedbackEmail) {
      console.error("Missing feedback email environment variables");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        }
      );
    }

    const body = await request.json();

    const message =
      typeof body.message === "string"
        ? body.message.trim()
        : "";

    if (!message) {
      return NextResponse.json(
        {
          error: "Message is required.",
        },
        {
          status: 400,
        }
      );
    }

    if (message.length > 1000) {
      return NextResponse.json(
        {
          error: "Message is too long.",
        },
        {
          status: 400,
        }
      );
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Feedback <onboarding@resend.dev>",

      to: [feedbackEmail],

      subject: "New Anonymous Portfolio Feedback",

      text: `
You received new anonymous feedback from your portfolio.

----------------------------------------

${message}

----------------------------------------

Submitted: ${new Date().toLocaleString("en-US", {
        timeZone: "Asia/Amman",
      })}

Source: Mohammad Nooraldeen Portfolio
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Failed to send feedback.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Feedback API error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}