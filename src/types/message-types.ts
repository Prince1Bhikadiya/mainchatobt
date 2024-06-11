import { Dispatch, SetStateAction } from "react";

export enum FromTypeEnum {
	BOT = "BOT",
	USER = "USER",
}

export interface messageIProps {
	message: any;
	from: FromTypeEnum;
}

export interface ChatBodyIprops {
	chatLoading:boolean;
	messages: messageIProps[];
}

export interface ChatbotButtonIprops {
	show: boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}

export interface ChatBoxFooterIprops {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
	setMessage: React.Dispatch<React.SetStateAction<messageIProps[]>>;
}

export interface ChatBotBoxIProps {
	show:boolean;
	setShow: Dispatch<SetStateAction<boolean>>;
}
