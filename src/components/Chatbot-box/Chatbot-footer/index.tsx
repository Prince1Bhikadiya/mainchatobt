import {
  ChatBoxFooterIprops,
  FromTypeEnum,
  messageIProps,
} from "@/types/message-types";
import getBotResponse, { fetchResponseFromPythonModal } from "@/utils/getBotResponse";
import React, { useState } from "react";
import { RiAttachment2 } from "react-icons/ri";
import { TbSend } from "react-icons/tb";

const ChatBotFooter = ({ setMessage,setLoading }: ChatBoxFooterIprops) => {
  const [text, setText] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  const sendMessage = async () => {
    if (text.trim()) {
      const newMessage: messageIProps = {
        message: text,
        from: FromTypeEnum.USER,
      };
      setMessage((prevMessages) => [...prevMessages, newMessage]);
      await handleBotResponse(newMessage.message)
      setText('');
    }
  };

  const handleBotResponse = async (message: string) => {
    setLoading(true)
    // const botResponse = await getBotResponse(message);
    const botResponse = await fetchResponseFromPythonModal(message);
    setMessage((prevMessages) => [...prevMessages, botResponse]);
    setLoading(false);
  };
  

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && text.trim()) {
      sendMessage();
    }
  };

  return (
    <div className="w-full h-auto px-3 py-2 bg-gradient-to-tr from-primary-400 to-secondary-400 flex justify-between items-center gap-5 rounded-b-md">
      <input
        className="w-full h-7 bg-gradient-to-tr from-primary-100 to-secondary-100 border-none outline-none rounded-full px-3 text-xs"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Type a message..."
      />
      <div className="w-auto h-auto flex justify-center items-center gap-1">
        <button className="w-5 min-w-5 h-5 text-slate-200">
          <RiAttachment2 className="w-full h-full" />
        </button>
        <button
          className="w-5 min-w-5 h-5 text-slate-200"
          disabled={text.length === 0}
          onClick={sendMessage}
        >
          <TbSend className="w-full h-full" />
        </button>
      </div>
    </div>
  );
};

export default ChatBotFooter;
