import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import logging
from config import Config

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

def send_contact_email(name: str, sender_email: str, message_body: str) -> tuple[bool, str]:
    """
    Sends a contact email to Sahana via SMTP using configured credentials.
    If credentials are not set, logs the message cleanly for local development.
    Returns (success: bool, detail_message: str).
    """
    receiver_email = Config.MAIL_RECEIVER
    
    # Dev Mode Fallback check if credentials are missing
    if not Config.MAIL_USERNAME or not Config.MAIL_PASSWORD:
        logger.info("=== [DEV MODE - CONTACT FORM SUBMISSION RECEIVED] ===")
        logger.info(f"From: {name} <{sender_email}>")
        logger.info(f"To: {receiver_email}")
        logger.info(f"Message: {message_body}")
        logger.info("=====================================================")
        return True, "Message received (Development Mode: logged to console)."

    try:
        # Create email message container
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"[Portfolio Contact] New message from {name}"
        msg['From'] = Config.MAIL_USERNAME
        msg['To'] = receiver_email
        msg['Reply-To'] = sender_email

        # Plain text content
        text_content = f"""
You have received a new contact message from your developer portfolio sketchbook website:

Name: {name}
Sender Email: {sender_email}

Message:
----------------------------------------
{message_body}
----------------------------------------

Reply directly to this email to respond to {name} ({sender_email}).
"""

        # HTML formatted content matching portfolio theme
        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: sans-serif; background-color: #FAF8F5; color: #1C1C1E; padding: 20px; }}
        .card {{ background: #FFFFFF; border: 2px dashed #1C1C1E; padding: 24px; border-radius: 8px; max-width: 600px; margin: 0 auto; }}
        .header {{ font-size: 20px; font-weight: bold; border-bottom: 2px solid #1C1C1E; padding-bottom: 8px; margin-bottom: 16px; }}
        .field {{ margin-bottom: 12px; }}
        .label {{ font-size: 12px; text-transform: uppercase; color: #6E6E73; letter-spacing: 1px; font-weight: bold; }}
        .val {{ font-size: 16px; color: #1C1C1E; font-weight: bold; }}
        .msg-box {{ background: #F4F1EA; border-left: 4px solid #1C1C1E; padding: 12px; margin-top: 16px; font-size: 15px; line-height: 1.5; white-space: pre-wrap; }}
        .footer {{ font-size: 12px; color: #8E8E93; margin-top: 24px; text-align: center; border-top: 1px solid #E5E2DA; padding-top: 12px; }}
    </style>
</head>
<body>
    <div class="card">
        <div class="header">✏️ New Portfolio Sketchbook Message</div>
        <div class="field">
            <div class="label">From</div>
            <div class="val">{name}</div>
        </div>
        <div class="field">
            <div class="label">Sender Email</div>
            <div class="val"><a href="mailto:{sender_email}">{sender_email}</a></div>
        </div>
        <div class="field">
            <div class="label">Message Content</div>
            <div class="msg-box">{message_body}</div>
        </div>
        <div class="footer">
            Sent via Sahana G Portfolio Flask Backend API. Reply directly to hit {sender_email}.
        </div>
    </div>
</body>
</html>
"""

        part1 = MIMEText(text_content, 'plain')
        part2 = MIMEText(html_content, 'html')
        msg.attach(part1)
        msg.attach(part2)

        # Connect to SMTP Server
        server = smtplib.SMTP(Config.MAIL_SERVER, Config.MAIL_PORT, timeout=10)
        if Config.MAIL_USE_TLS:
            server.starttls()
            
        server.login(Config.MAIL_USERNAME, Config.MAIL_PASSWORD)
        server.sendmail(Config.MAIL_USERNAME, [receiver_email], msg.as_string())
        server.quit()
        
        logger.info(f"Email successfully dispatched to {receiver_email}")
        return True, "Message sent successfully!"

    except Exception as e:
        logger.error(f"Failed to send email: {str(e)}")
        return False, "Failed to deliver email through mail server."
