import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import RetroCard from '../components/ui/RetroCard';
import RetroButton from '../components/ui/RetroButton';
import TypingEffect from '../components/ui/TypingEffect';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<null | 'success' | 'error'>(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };
  
  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formState.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Invalid email format';
    }
    
    if (!formState.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formState.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formState.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitStatus('success');
        setFormState({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Reset status after 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <div className="min-h-screen bg-amber-50 dark:bg-zinc-900 pt-16 pb-16">
      <div className="max-w-5xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-serif text-amber-800 dark:text-amber-400 mb-4">
            Get In Touch
          </h1>
          <p className="text-amber-900 dark:text-amber-300 max-w-2xl mx-auto">
            Have a project in mind? Feel free to reach out. I'm currently available for freelance work.
          </p>
          <div className="w-24 h-1 bg-amber-800 dark:bg-amber-600 mx-auto mt-6"></div>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Contact Info */}
          <div className="w-full lg:w-1/3">
            <RetroCard variant="terminal" className="mb-8 p-6 sticky top-24">
              <h2 className="text-xl font-bold mb-6 font-mono">$ contact --info</h2>
              
              <div className="space-y-6 font-mono">
                <div className="flex items-start">
                  <Mail className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lime-400 mb-1">Email:</p>
                    <a href="mailto:hello@example.com" className="text-sm hover:underline">
                      <TypingEffect
                        text="hello@example.com"
                        speed={50}
                      />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lime-400 mb-1">Phone:</p>
                    <a href="tel:+1234567890" className="text-sm hover:underline">
                      <TypingEffect
                        text="+1 (234) 567-890"
                        speed={50}
                        delay={1000}
                      />
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-lime-400 mb-1">Location:</p>
                    <p className="text-sm">
                      <TypingEffect
                        text="San Francisco, CA"
                        speed={50}
                        delay={2000}
                      />
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-lime-500/30">
                <p className="text-sm mb-4">
                  <TypingEffect
                    text="Expected response time: 24-48 hours"
                    speed={40}
                    delay={3000}
                  />
                </p>
              </div>
            </RetroCard>
          </div>
          
          {/* Contact Form */}
          <div className="w-full lg:w-2/3">
            <RetroCard variant="primary" className="p-6">
              <h2 className="text-xl font-bold mb-6 font-serif text-amber-800 dark:text-amber-400">
                Send Me a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900/30 border-2 border-green-500 text-green-700 dark:text-green-300">
                  <p className="font-mono">
                    Thank you for your message! I'll get back to you as soon as possible.
                  </p>
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 dark:bg-red-900/30 border-2 border-red-500 text-red-700 dark:text-red-300">
                  <p className="font-mono">
                    Oops! Something went wrong. Please try again later.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block mb-2 font-mono text-amber-800 dark:text-amber-400">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    className={`
                      w-full p-3 bg-amber-100 dark:bg-zinc-800 
                      border-2 ${errors.name ? 'border-red-500' : 'border-amber-800 dark:border-amber-600'} 
                      text-amber-900 dark:text-amber-300 font-mono
                      focus:outline-none focus:border-amber-600 dark:focus:border-amber-500
                    `}
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm font-mono">
                      {errors.name}
                    </p>
                  )}
                </div>
                
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block mb-2 font-mono text-amber-800 dark:text-amber-400">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`
                      w-full p-3 bg-amber-100 dark:bg-zinc-800 
                      border-2 ${errors.email ? 'border-red-500' : 'border-amber-800 dark:border-amber-600'} 
                      text-amber-900 dark:text-amber-300 font-mono
                      focus:outline-none focus:border-amber-600 dark:focus:border-amber-500
                    `}
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm font-mono">
                      {errors.email}
                    </p>
                  )}
                </div>
                
                {/* Subject Field */}
                <div>
                  <label htmlFor="subject" className="block mb-2 font-mono text-amber-800 dark:text-amber-400">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formState.subject}
                    onChange={handleChange}
                    className={`
                      w-full p-3 bg-amber-100 dark:bg-zinc-800 
                      border-2 ${errors.subject ? 'border-red-500' : 'border-amber-800 dark:border-amber-600'} 
                      text-amber-900 dark:text-amber-300 font-mono
                      focus:outline-none focus:border-amber-600 dark:focus:border-amber-500
                    `}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm font-mono">
                      {errors.subject}
                    </p>
                  )}
                </div>
                
                {/* Message Field */}
                <div>
                  <label htmlFor="message" className="block mb-2 font-mono text-amber-800 dark:text-amber-400">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    className={`
                      w-full p-3 bg-amber-100 dark:bg-zinc-800 
                      border-2 ${errors.message ? 'border-red-500' : 'border-amber-800 dark:border-amber-600'} 
                      text-amber-900 dark:text-amber-300 font-mono
                      focus:outline-none focus:border-amber-600 dark:focus:border-amber-500
                    `}
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-red-600 dark:text-red-400 text-sm font-mono">
                      {errors.message}
                    </p>
                  )}
                </div>
                
                {/* Submit Button */}
                <div>
                  <RetroButton
                    type="submit"
                    variant="neon"
                    size="lg"
                    className="w-full flex justify-center items-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <span className="animate-spin mr-2">⟳</span> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="w-4 h-4 mr-2" /> Send Message
                      </span>
                    )}
                  </RetroButton>
                </div>
              </form>
            </RetroCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;