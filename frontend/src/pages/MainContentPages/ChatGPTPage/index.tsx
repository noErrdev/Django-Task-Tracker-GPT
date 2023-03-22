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
    const { chat_response } = await sendChatMessageAPI({ prompt: text });
    setMessages(
      (prev): Array<Message> => [...prev, { type: "bot", text: chat_response }]
    );
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
    <form
      className="relative flex min-h-screen flex-col items-center"
      onSubmit={sendChatHandler}
    >
      <div className="w-full border-b border-b-gray-300 p-4 font-semibold">
        Currently Chatting with GPT-3
      </div>
      <div className="w-full p-5">
        {messages.map((message: Message, index) =>
          message.type === "user" ? (
            <div className="ml-20 mt-5 flex flex-row-reverse" key={index}>
              <div className="rounded-b-xl rounded-tl-xl bg-blue-200 p-4 shadow-lg">
                {message.text}
              </div>
            </div>
          ) : (
            <div className="mr-20 mt-5 flex flex-row" key={index}>
              <div className="rounded-b-xl rounded-tr-xl bg-gray-100 p-4 shadow-lg">
                {message.text}
              </div>
            </div>
          )
        )}
      </div>
      <input
        className="absolute bottom-10 mx-2 h-10 w-11/12 rounded-full border-2 border-gray-300 p-3 outline-none focus:border-gray-400"
        value={messageInput}
        onChange={(e) => setMessageInput(e.target.value)}
      />
    </form>
  );
}
