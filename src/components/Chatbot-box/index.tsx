"use client";

import React, { useState } from "react";
import ChatbotHeader from "./Chatbot-header";
import ChatbotBody from "./ChatBot-body";
import ChatBotFooter from "./Chatbot-footer";
import { ChatBotBoxIProps, messageIProps } from "@/types/message-types";
import { IoClose } from "react-icons/io5";

const ChatbotBox = ({ show,setShow }: ChatBotBoxIProps) => {
	const [messages, setMessage] = useState<messageIProps[]>([]);
	const [botLoading,setBotLoading]=useState<boolean>(false);

	const hideChatBox=()=>{
		setShow(false)
	}
	return (
		<div
			className={`absolute right-4 ${show?'bottom-8 opacity-100 visible':'bottom-0 opacity-0 invisible'} transition-all duration-500 w-72 h-auto rounded-md shadow-xl`}
		>
			<button
				className={`absolute -top-3 -right-3 p-1 w-6 h-6 rounded-full flex justify-center items-center text-slate-200 bg-danger-500`}
				onClick={hideChatBox}
			>
				<IoClose className={`w-full h-full`} />
			</button>
			<ChatbotHeader />
			<ChatbotBody messages={messages} chatLoading={botLoading} />
			<ChatBotFooter setLoading={setBotLoading} setMessage={setMessage} />
		</div>
	);
};

export default ChatbotBox;
