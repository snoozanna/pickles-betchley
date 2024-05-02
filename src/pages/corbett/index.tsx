import { useState } from "react";
import { LOCAL_STORAGE_KEY, PlayParameters } from "../../PlayParameters";
import MyChat from "../../MyChat";
import "../../styles/generics.css";
import "../../styles/App.css";
import Header from "../../Header";

const emptyParameters: PlayParameters = {
  storyId: 29564,
  apiKey: "6bb93106-673e-47e0-9eed-57f7551e7c44",
  version: 1,
  startGraphReferenceId: "adbc4d96-a0b2-4bd8-885d-c056673921e6",
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

  const endUrl = "./final";

  const sufficientParameters =
    conversationParameters.storyId && conversationParameters.apiKey;

  return (
    <div className="App">
      <div className="appContainer">
        {sufficientParameters && !confirmed ? (
          <>
            <Header connectionStatus="" />
            <span className="button-wrapper">
              <button onClick={() => setConfirmed(true)}>Confirm</button>
            </span>
            <footer  className="fake"/>
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
