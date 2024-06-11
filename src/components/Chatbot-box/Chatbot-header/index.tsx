import { Image } from "@nextui-org/image";
import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiErrorWarningLine } from "react-icons/ri";
import bot from '../../../assets/bot.png'

const ChatbotHeader = () => {
	return (
		<div
			className={`w-full h-auto px-3 py-3 bg-gradient-to-tr from-primary-400 to-secondary-400 flex justify-between items-center gap-5 rounded-t-md`}
		>
			<div className={`flex justify-center items-center gap-2`}>
				<Image
					width={40}
					alt="Chatbot Image"
					src={bot.src}
				/>
				<span
					className={`font-sans text-base font-[400] text-slate-200`}
				>
					Chatbot
				</span>
			</div>
			<div className={`flex justify-center items-center gap-2`}>
				<button>
					<RiErrorWarningLine className={`w-4 h-4 text-slate-200`} />
				</button>
				<button>
					<BsThreeDotsVertical className={`w-4 h-4 text-slate-200`} />
				</button>
			</div>
		</div>
	);
};

export default ChatbotHeader;
