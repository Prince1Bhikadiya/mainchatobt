import React from 'react';

const ChatLoading = () => {
  return (
    <div className="w-full flex items-center justify-start py-3">
      <div className="flex items-center bg-foreground-200 h-auto p-2 rounded">
        <div className="h-1 w-1 bg-slate-200 rounded-full mr-1 animate-bounce"></div>
        <div className="h-1 w-1 bg-slate-200 rounded-full mr-1 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
        <div className="h-1 w-1 bg-slate-200 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
      </div>
    </div>
  );
};

export default ChatLoading;
