import React from "react";
import { sendChatMessageAPI } from "../../../utils/api";

type Message = {
  type: "bot" | "user";
  text: string;
};

export default function ChatGPTPage() {
  const [messageInput, setMessageInput] = React.useState("");
  const [messages, setMessages] = React.useState<Array<Message>>([]);

  async function sendMessage(text: string) {
    setMessages(
      (prev): Array<Message> => [...prev, { type: "bot", text: "...." }]
    );
    const { chat_response } = await sendChatMessageAPI({ prompt: text });

    // find the last bot message and replace it with the new one
    setMessages((prev): Array<Message> => {
      const lastBotMessageIndex = prev
        .map((message) => message.type)
        .lastIndexOf("bot");
      const newMessages = [...prev];
      newMessages[lastBotMessageIndex] = {
        type: "bot",
        text: chat_response,
      };
      return newMessages;
    });
  }

  function sendChatHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessages(
      (prev): Array<Message> => [...prev, { type: "user", text: messageInput }]
    );
    sendMessage(messageInput);
    setMessageInput("");
  }

  React.useEffect(() => {
    sendMessage("Hello");
  }, []);

  return (
    <form className="relative flex h-full w-full" onSubmit={sendChatHandler}>
      <div className="h-full w-full overflow-y-auto">
        <div className="w-full border-b border-b-gray-300 p-4 font-semibold">
          Currently Chatting with GPT-3.5
        </div>
        <div className=" flex-1 overflow-y-auto px-5 pb-24">
          {messages.map((message: Message, index) =>
            message.type === "user" ? (
              <div className="ml-20 mt-5 flex flex-row-reverse" key={index}>
                <div className="rounded-b-xl rounded-tl-xl bg-blue-200 p-4 shadow-lg">
                  {message.text}
                </div>
              </div>
            ) : (
              <div className="mr-20 mt-5 flex flex-row" key={index}>
                <div className="rounded-b-xl rounded-tr-xl bg-gray-200 p-4 shadow-lg">
                  {message.text}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <input
        className="absolute bottom-10 right-1/2 h-10 w-11/12 translate-x-1/2 rounded-full border-2 py-2 pl-3 outline-none"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
    </form>
  );
}
