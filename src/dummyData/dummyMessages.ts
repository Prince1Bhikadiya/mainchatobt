import { FromTypeEnum, messageIProps } from "@/types/message-types";

export const dummyMessages: messageIProps[] = [
	{
		message: "Hello! How can I assist you today?",
		from: FromTypeEnum.BOT,
	},
	{
		message: "Hi, I need some information about your services.",
		from: FromTypeEnum.USER,
	},
	{
		message:
			"Sure, we offer a wide range of services including web development, mobile app development, and more. How can I help you specifically?",
		from: FromTypeEnum.BOT,
	},
	{
		message: "Can you tell me more about your web development services?",
		from: FromTypeEnum.USER,
	},
	{
		message:
			"We provide full-stack web development using the latest technologies such as React, Node.js, and MongoDB. Do you have a specific project in mind?",
		from: FromTypeEnum.BOT,
	},
	{
		message: "Yes, I'm looking to build an e-commerce platform.",
		from: FromTypeEnum.USER,
	},
	{
		message:
			"That sounds great! We have experience building e-commerce platforms with features like payment integration, user authentication, and product management. Would you like to schedule a meeting to discuss further?",
		from: FromTypeEnum.BOT,
	},
	{
		message: "Yes, that would be perfect. When are you available?",
		from: FromTypeEnum.USER,
	},
	{
		message:
			"I'm available for a meeting tomorrow at 10 AM. Does that work for you?",
		from: FromTypeEnum.BOT,
	},
	{
		message: "Yes, 10 AM works for me. Thank you!",
		from: FromTypeEnum.USER,
	},
	{
		message:
			"Great! I've scheduled a meeting for tomorrow at 10 AM. Looking forward to speaking with you!",
		from: FromTypeEnum.BOT,
	},
	{
		message: "Looking forward to it. Have a great day!",
		from: FromTypeEnum.USER,
	},
	{
		message: "You too! Goodbye!",
		from: FromTypeEnum.BOT,
	},
];