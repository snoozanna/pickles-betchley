import { StoredMessage } from "@charisma-ai/react";
import "./styles/MessagesView.css";

type MessageViewProps = {
  messages: StoredMessage[];
};

const MessagesView = ({ messages }: MessageViewProps) => {
  return (
    <>
      {messages.map((message, index) => {
        if (message.type === "player") {
          console.log("message", message);
          const text = `YOU: ${message.message.text}`;
          return (
            <div key={index} className="messageWrapper messagePlayer">
              <p>{text}</p>
            </div>
          );
        }
        if (message.type === "character") {
          const text = message.message.text;
          const character = `${message.message.character?.name || "???"}`;
          return (
            <>
              <span>{character}</span>
              <div key={index} className="messageWrapper messageChar">
                <p>{text}</p>
              </div>
            </>
          );
        }
        return (
          <div>
            A message was sent that did not have type "player" or "character".
          </div>
        );
      })}
    </>
  );
};

export default MessagesView;
