import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { sendContactMessage } from '../services/contactService';
import { PencilUnderline, SketchArrow, SketchStar } from './SketchDoodles';
import { Mail, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setResponseMessage('Please fill in all form fields before sending.');
      return;
    }

    setStatus('loading');
    setResponseMessage('');

    const result = await sendContactMessage({
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim(),
    });

    if (result.success) {
      setStatus('success');
      setResponseMessage(result.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setStatus('error');
      setResponseMessage(result.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative bg-crosshatch">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-sans text-[#1C1C1E] inline-block relative">
            Let's Build Something.
            <PencilUnderline className="w-full h-3 mt-1" />
          </h2>
          <p className="text-lg font-sans text-[#5A5A5E] mt-3">
            Have an idea, opportunity, or just want to talk tech?
          </p>
        </div>

        {/* Contact Notebook Card */}
        <div className="sketch-box p-6 sm:p-10 bg-[#FFFFFF] notebook-lines shadow-sketch-lg relative">
          
          {/* Top Tape Graphic */}
          <div className="flex justify-between items-center pb-6 mb-6 border-b-2 border-dashed border-[#1C1C1E]">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-[#1C1C1E]" />
              <span className="font-mono text-sm font-bold text-[#1C1C1E]">
                POST /api/contact
              </span>
            </div>

            {/* Email display */}
            <div className="flex items-center space-x-1.5 font-hand text-lg text-[#1C1C1E]">
              <span>Direct Email:</span>
              <a
                href={`mailto:${PORTFOLIO_DATA.personal.email}`}
                className="underline hover:text-[#5A5A5E] font-bold"
              >
                {PORTFOLIO_DATA.personal.email}
              </a>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-sm font-bold font-sans text-[#1C1C1E] uppercase tracking-wider mb-2">
                Your Name <span className="text-[#8E8E93]">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. Ada Lovelace"
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-[#FAF8F5] border-2 border-[#1C1C1E] rounded-md font-sans text-[#1C1C1E] focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#1C1C1E] transition-all disabled:opacity-50"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-bold font-sans text-[#1C1C1E] uppercase tracking-wider mb-2">
                Your Email <span className="text-[#8E8E93]">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. visitor@example.com"
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-[#FAF8F5] border-2 border-[#1C1C1E] rounded-md font-sans text-[#1C1C1E] focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#1C1C1E] transition-all disabled:opacity-50"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-sm font-bold font-sans text-[#1C1C1E] uppercase tracking-wider mb-2">
                Your Message <span className="text-[#8E8E93]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Share your thoughts, project ideas, or question..."
                disabled={status === 'loading'}
                className="w-full px-4 py-3 bg-[#FAF8F5] border-2 border-[#1C1C1E] rounded-md font-sans text-[#1C1C1E] focus:outline-none focus:bg-[#FFFFFF] focus:ring-2 focus:ring-[#1C1C1E] transition-all disabled:opacity-50 resize-y"
                required
              />
            </div>

            {/* Feedback Alert Messages */}
            {status === 'success' && (
              <div className="sketch-box p-4 bg-[#F4F1EA] border-2 border-[#1C1C1E] flex items-center space-x-3 text-[#1C1C1E]">
                <CheckCircle2 className="w-6 h-6 text-[#1C1C1E] flex-shrink-0" />
                <div>
                  <h4 className="font-bold font-sans text-sm">Success!</h4>
                  <p className="font-hand text-lg">{responseMessage}</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="sketch-box p-4 bg-[#FFFFFF] border-2 border-[#1C1C1E] border-dashed flex items-center space-x-3 text-[#1C1C1E]">
                <AlertCircle className="w-6 h-6 text-[#1C1C1E] flex-shrink-0" />
                <div>
                  <h4 className="font-bold font-sans text-sm">Error Sending Message</h4>
                  <p className="font-hand text-lg text-[#5A5A5E]">{responseMessage}</p>
                </div>
              </div>
            )}

            {/* Submit Button & Handwritten "say hi →" */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button
                type="submit"
                disabled={status === 'loading'}
                className="sketch-button px-8 py-3.5 bg-[#1C1C1E] text-[#FFFFFF] font-bold text-base font-sans inline-flex items-center space-x-2 hover:bg-[#2A2A2E] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <div className="flex items-center space-x-2">
                <SketchArrow direction="right" className="w-8 h-6 text-[#1C1C1E]" />
                <span className="font-hand text-2xl font-bold text-[#1C1C1E] rotate-[-2deg]">
                  say hi →
                </span>
              </div>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
};
