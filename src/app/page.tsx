'use client';

import ChatbotBox from "@/components/Chatbot-box";
import ChatbotButton from "@/components/Chatbot-button";
import ThemeFrame from "@/components/ThemeButton";
import { useState } from "react";

export default function Home() {
	const [showChatbox, setShowChatBox] = useState<boolean>(false);
	return (
		<div className={`w-full h-[100vh] relative`}>
			<ThemeFrame />
			<ChatbotButton show={showChatbox} setShow={setShowChatBox} />
			<ChatbotBox show={showChatbox} setShow={setShowChatBox} />
		</div>
	);
}
