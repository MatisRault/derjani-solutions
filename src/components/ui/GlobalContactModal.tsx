"use client";

import React from 'react';
import { useContactModal } from '@/contexts/ContactModalContext';
import ContactModal from './ContactModal';

const GlobalContactModal = () => {
  const { isContactModalOpen, closeContactModal } = useContactModal();

  return (
    <ContactModal 
      isOpen={isContactModalOpen} 
      onClose={closeContactModal} 
    />
  );
};

export default GlobalContactModal;