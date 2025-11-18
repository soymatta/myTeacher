import React from 'react';
import ContactList from './ContactList';
import MessageArea from './MessageArea';
import type { Contact, Message } from '../data/types';

const MOCK_CONTACT: Contact = {
  id: 1,
  name: 'Isabel',
  status: 'Lorem ipsum...',
  avatarUrl: 'https://i.pravatar.cc/150?img=1', 
};

const MOCK_MESSAGES: Message[] = [
  { id: 1, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', isSender: false },
  { id: 3, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', isSender: false },
  { id: 5, content: 'Lorem ipsum dolor sit amet, consect', isSender: false },
  { id: 7, content: 'Lorem ipsum dolor sit amet, consect', isSender: false },

  { id: 2, content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', isSender: true },
  { id: 4, content: 'Lorem ipsum dolor sit amet.', isSender: true },
  { id: 6, content: 'Lorem ipsum dolor sit amet, consect', isSender: true },
];

const Messages: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      
      <ContactList contacts={[MOCK_CONTACT]} selectedContact={MOCK_CONTACT} />

      <div className="flex-grow relative">
        <MessageArea messages={MOCK_MESSAGES} contactName={MOCK_CONTACT.name} />
      </div>
      
      <div className="w-1 bg-gray-200 h-full flex-shrink-0">
         <div className="w-full h-1/4 bg-gray-400 rounded-full mt-1"></div>
      </div>
    </div>
  );
};

export default Messages;