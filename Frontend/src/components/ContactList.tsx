import React from 'react';
import type { Contact } from '../data/types';

interface ContactListProps {
  contacts: Contact[];
  selectedContact: Contact;
}

const ContactItem: React.FC<{ contact: Contact; isSelected: boolean }> = ({ contact, isSelected }) => (
  <div
    className={`flex items-center p-3 cursor-pointer ${
      isSelected ? 'bg-gray-100 border-r-4 border-blue-500' : 'hover:bg-gray-50'
    }`}
  >
    <img
      src={contact.avatarUrl}
      alt={contact.name}
      className="w-10 h-10 rounded-full object-cover mr-3"
    />
    <div className="flex flex-col">
      <span className="font-semibold text-gray-800">{contact.name}</span>
      <span className="text-sm text-gray-500">{contact.status}</span>
    </div>
  </div>
);

const ContactList: React.FC<ContactListProps> = ({ contacts, selectedContact }) => {
  return (
    <div className="flex flex-col h-full w-full max-w-xs bg-white border-r border-gray-200 flex-shrink-0">
      <div className="p-3 border-b border-gray-200 flex items-center justify-between">
        <div className="flex items-center">
          <span className="font-semibold text-gray-800 mr-1">Todos mis contactos</span>
          <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </div>
        <button className="p-1 text-gray-500 hover:text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </button>
      </div>

      <div className="overflow-y-auto">
        <ContactItem contact={selectedContact} isSelected={true} />
      </div>
    </div>
  );
};

export default ContactList;