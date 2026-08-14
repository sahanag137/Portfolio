import os
import logging
import html
import resend

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)


def send_contact_email(name: str, sender_email: str, message_body: str) -> tuple[bool, str]:
    """
    Sends portfolio contact messages using the Resend email API.
    """

    receiver_email = os.getenv("MAIL_RECEIVER")
    resend_api_key = os.getenv("RESEND_API_KEY")

    if not resend_api_key:
        logger.error("RESEND_API_KEY is not configured.")
        return False, "Email service is not configured."

    if not receiver_email:
        logger.error("MAIL_RECEIVER is not configured.")
        return False, "Receiver email is not configured."

    try:
        resend.api_key = resend_api_key

        safe_name = html.escape(name)
        safe_email = html.escape(sender_email)
        safe_message = html.escape(message_body)

        params = {
            "from": "onboarding@resend.dev",
            "to": [receiver_email],
            "subject": f"[Portfolio Contact] New message from {name}",
            "reply_to": sender_email,
            "text": f"""
New portfolio contact message

Name: {name}
Email: {sender_email}

Message:
----------------------------------------
{message_body}
----------------------------------------
""",
            "html": f"""
<!DOCTYPE html>
<html>
<body style="font-family: sans-serif; background:#FAF8F5; color:#1C1C1E; padding:20px;">
    <div style="background:#FFFFFF; border:2px dashed #1C1C1E;
                padding:24px; border-radius:8px; max-width:600px; margin:auto;">

        <h2 style="border-bottom:2px solid #1C1C1E; padding-bottom:8px;">
            ✏️ New Portfolio Sketchbook Message
        </h2>

        <p><strong>From:</strong><br>{safe_name}</p>

        <p><strong>Sender Email:</strong><br>
            <a href="mailto:{safe_email}">{safe_email}</a>
        </p>

        <p><strong>Message:</strong></p>

        <div style="background:#F4F1EA; padding:12px;
                    border-left:4px solid #1C1C1E;
                    white-space:pre-wrap;">
            {safe_message}
        </div>

        <p style="font-size:12px; color:#8E8E93; margin-top:24px;">
            Sent via Sahana G Portfolio Flask Backend API.
        </p>

    </div>
</body>
</html>
"""
        }

        resend.Emails.send(params)

        logger.info(f"Email successfully sent to {receiver_email}")

        return True, "Message sent successfully!"

    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False, "Failed to deliver email."

