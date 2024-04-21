import { useState } from "react";
import PlaySetup from "./PlaySetup";
import { LOCAL_STORAGE_KEY, PlayParameters } from "./PlayParameters";
import MyChat from "./MyChat";
import "./styles/generics.css";
import "./styles/App.css";
import Header from "./Header";
import Footer from "./Footer";

const emptyParameters: PlayParameters = {
  storyId: 29564,
  apiKey: "6bb93106-673e-47e0-9eed-57f7551e7c44",
  version: 1,
  startGraphReferenceId: "e9236191-1542-40ad-b45f-f8c911dd8126",
  charismaUrl: "https://play.charisma.ai",
};

const emptyParametersString = JSON.stringify(emptyParameters);

function App() {
  const [confirmed, setConfirmed] = useState<boolean>(false);
  const [conversationParameters, setConversationParameters] = useState(
    JSON.parse(
      localStorage.getItem(LOCAL_STORAGE_KEY) || emptyParametersString,
    ) as PlayParameters,
  );

  const sufficientParameters =
    conversationParameters.storyId && conversationParameters.apiKey;

  return (
    <div className="App">
      <div className="appContainer">
        {/* <PlaySetup
        conversationParameters={conversationParameters}
        setConversationParameters={(args) => {
          setConversationParameters(args);
          localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(args));
        }}
        disabled={confirmed}
      /> */}

        {sufficientParameters && !confirmed ? (
          <>
            <Header connectionStatus="" />
            <span className="button-wrapper">
              <button onClick={() => setConfirmed(true)}>Confirm</button>
            </span>
            <footer />
          </>
        ) : null}
        {confirmed ? (
          <MyChat conversationParameters={conversationParameters} />
        ) : null}
      </div>
    </div>
  );
}

export default App;
