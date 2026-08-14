export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactApiResponse {
  success: boolean;
  message: string;
}

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:5000';

export const sendContactMessage = async (data: ContactFormData): Promise<ContactApiResponse> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        message: result.message || 'Failed to send message. Please try again.',
      };
    }

    return {
      success: true,
      message: result.message || 'Message sent successfully!',
    };
  } catch (error) {
    console.error('Contact API call failed:', error);
    return {
      success: false,
      message: 'Network error or backend API unavailable. Please try again later.',
    };
  }
};
