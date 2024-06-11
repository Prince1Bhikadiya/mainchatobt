import { ChatBodyIprops, messageIProps } from "@/types/message-types";
import React, { useRef, useEffect } from "react";
import { MesaagesBox } from "./MessageBox";
import ChatLoading from "@/components/common/loading";

const ChatbotBody = ({ messages,chatLoading }: ChatBodyIprops) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="w-full h-64 px-3 py-1 overflow-y-auto scroll dark:bg-slate-900">
      {messages.map((items: messageIProps, index: number) => (
        <MesaagesBox key={index} message={items.message} from={items.from} />
      ))}
	  {chatLoading&&<ChatLoading />}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatbotBody;
