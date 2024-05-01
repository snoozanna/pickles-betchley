import { StoredMessage } from "@charisma-ai/react";
import "./styles/MessagesView.css";

type MessageViewProps = {
  messages: any[];
};

const MessagesView = ({ messages }: MessageViewProps) => {
  return (
    <>
    <div className="messageContainer">
      {messages.map((message, index) => {
        if (message.type === "player") {
          const text = message.text;
          const player = `You`;
          return (
            <div className="playerWrapper">
              <span>{player}</span>
              <div key={index} className="messageWrapper messagePlayer">
                <p>{text}</p>
              </div>
            </div>
          );
        }
        if (message.type === "character") {
          const text = message.text;
          const character = `${message.character?.name || "???"}`;
          return (
            <div className="charWrapper">
              <span>{character}</span>
              <div key={index} className="messageWrapper messageChar">
                <p>{text}</p>
              </div>
            </div>
          );
        }
        return (
          <div>
            A message was sent that did not have type "player" or "character".
          </div>
        );
      })}
      </div>
    </>
  );
};

export default MessagesView;
