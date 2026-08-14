import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')

def validate_contact_input(data):
    """
    Validates contact form input payload.
    Returns: (is_valid: bool, error_message: str or None)
    """
    if not isinstance(data, dict):
        return False, "Invalid payload format. Expected JSON object."
        
    name = data.get('name', '').strip() if isinstance(data.get('name'), str) else ''
    email = data.get('email', '').strip() if isinstance(data.get('email'), str) else ''
    message = data.get('message', '').strip() if isinstance(data.get('message'), str) else ''
    
    if not name:
        return False, "Please enter your name."
        
    if len(name) < 2:
        return False, "Name must be at least 2 characters long."
        
    if len(name) > 100:
        return False, "Name is too long (maximum 100 characters)."
        
    if not email:
        return False, "Please enter your email address."
        
    if not EMAIL_REGEX.match(email):
        return False, "Please enter a valid email address."
        
    if not message:
        return False, "Please enter your message."
        
    if len(message) < 5:
        return False, "Message is too short (at least 5 characters required)."
        
    if len(message) > 5000:
        return False, "Message exceeds the maximum limit of 5000 characters."
        
    return True, None
