import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  const phoneNumber = "919876543210"; // Replace with actual number
  const message = encodeURIComponent("Hello! I am interested in joining your educational centre. Can you provide more details?");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappUrl} 
      className="whatsapp-float" 
      target="_blank" 
      rel="noopener noreferrer"
      aria-label="Contact on WhatsApp"
    >
      <MessageCircle size={32} />
      <span className="tooltip">Chat with us</span>
    </a>
  );
};

export default WhatsAppButton;
