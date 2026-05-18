import { useState } from "react";
import { LOCAL_STORAGE_KEY, PlayParameters } from "../../PlayParameters";
import MyChat from "../../MyChat";
import "../../styles/generics.css";
import "../../styles/App.css";
import Header from "../../Header";


const emptyParameters: PlayParameters = {
  storyId: 29564,
  apiKey: process.env.REACT_APP_CHARISMA_API_KEY || "",
  version: 4,
  startGraphReferenceId: "e9236191-1542-40ad-b45f-f8c911dd8126",
  charismaUrl: "https://play.charisma.ai",
};

const emptyParametersString = JSON.stringify(emptyParameters);

function Bletchley() {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [conversationParameters, setConversationParameters] = useState(
    JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || emptyParametersString,
    ) as PlayParameters,
  );

  const endUrl = "https://pickles-playtest.netlify.app/phone3";

  const sufficientParameters =
    conversationParameters.storyId && conversationParameters.apiKey;

console.log("hello", conversationParameters)

  return (
    <div className="App">
      <div className="appContainer">
        {sufficientParameters && !confirmed ? (
          <>
            <Header connectionStatus="" />
            <span className="button-wrapper">
              <button onClick={() => setConfirmed(true)}>Confirm</button>
            </span>
            <footer className="fake" />
          </>
        ) : null}
        {confirmed ? (
          <MyChat conversationParameters={conversationParameters} endUrl={endUrl} />
        ) : null}
      </div>
    </div>
  );
}

export default Bletchley;
