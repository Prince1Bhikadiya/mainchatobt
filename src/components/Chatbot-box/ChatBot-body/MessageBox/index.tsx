import { FromTypeEnum, messageIProps } from "@/types/message-types";

export const MesaagesBox = ({ message, from }: messageIProps) => {
	return (
		<div
    
            className={`w-full h-auto grid grid-cols-1 gap-2 my-2 ${
              from === FromTypeEnum.BOT ? " place-items-start" : "place-items-end"
            }`}
          >
            <span
              className={`flex items-start w-auto max-w-[80%] relative p-2 rounded-lg ${
                from === FromTypeEnum.BOT
                  ? "bg-foreground-200"
                  : "bg-gradient-to-tr from-secondary-400 to-primary-400 text-slate-200"
              } text-xs`}
            >
              {message}
            </span>
          </div>
	);
};