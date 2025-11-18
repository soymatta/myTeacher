import React from 'react';
import type { Message } from '../data/types';

const Icon = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <button className={`p-2 text-gray-500 hover:text-gray-700 ${className}`}>
    {children}
  </button>
);

interface MessageAreaProps {
  messages: Message[];
  contactName: string;
}

const MessageArea: React.FC<MessageAreaProps> = ({ messages, contactName }) => {
  const renderMessageBubble = (message: Message) => {
    const isSender = message.isSender;
    
    const bubbleClasses = isSender
      ? 'bg-blue-500 text-white rounded-xl rounded-tr-none ml-auto'
      : 'bg-blue-100 text-gray-800 rounded-xl rounded-tl-none mr-auto';

    const containerClasses = isSender
      ? 'flex justify-end'
      : 'flex justify-start';

    return (
      <div key={message.id} className={`${containerClasses} mb-2`}>
        <div className={`max-w-xs sm:max-w-sm lg:max-w-md p-3 shadow-md ${bubbleClasses}`}>
          {message.content}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col h-full bg-white border-l border-gray-200">
      <div className="p-4 border-b border-gray-200 flex-shrink-0">
      </div>

      <div className="flex-grow p-4 overflow-y-auto space-y-3">
        {messages.map(renderMessageBubble)}
        <div className="absolute top-0 right-0 w-1 bg-gray-200 h-full"></div>
      </div>

      <div className="p-4 border-t border-gray-200 flex-shrink-0">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Escribe aquí..."
            className="flex-grow p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Icon className="ml-2">😊</Icon>
          <Icon>📎</Icon>
          <Icon>🖼️</Icon>
        </div>
      </div>
    </div>
  );
};

export default MessageArea;