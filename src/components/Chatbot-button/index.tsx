import { ChatbotButtonIprops } from "@/types/message-types";
import React from "react";
import { IoChatbubbles } from "react-icons/io5";

const ChatbotButton = ({show,setShow}:ChatbotButtonIprops) => {
	const showChatBox=()=>{
		setShow(true);
	}
	return (
		<button
			className={`absolute right-5 bottom-5 w-8 h-8 p-1 rounded-full animate-bounce bg-gradient-to-tl from-primary-400 to-secondary-400 text-slate-200`}
			onClick={showChatBox}
		>
			<IoChatbubbles className={`w-full h-full`} />
		</button>
	);
};

export default ChatbotButton;

