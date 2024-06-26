import { SpeechRecognitionResponse } from "@charisma-ai/react";
import { useEffect, useState } from "react";
import ReactiveMicrophoneIcon from "./ReactiveMicrophoneIcon";

type RecognisedSpeechPlayerInputProps = {
  speechRecognitionResponse: SpeechRecognitionResponse | null;
  microphoneIsOn: boolean;
  sendStartMicrophoneRequest: () => void;
  sendStopMicrophoneRequest: () => void;
  sendText?: (text: string) => void;
};

const RecognisedSpeechPlayerInput = ({
  speechRecognitionResponse,
  microphoneIsOn,
  sendStartMicrophoneRequest,
  sendStopMicrophoneRequest,
  sendText,
}: RecognisedSpeechPlayerInputProps) => {
  const [active, setActive] = useState(false);
  const [confirmedText, setConfirmedText] = useState("");
  const [volatileText, setVolatileText] = useState("");
  const [countdown, setCountdown] = useState(0);

  let fullText = confirmedText;
  if (volatileText) {
    fullText = [confirmedText, volatileText].join(" ").trim();
  }

  const handleRequestActive = () => {
    setConfirmedText("");
    setVolatileText("");
    setCountdown(0);
    setActive(true);
    sendStartMicrophoneRequest();
  };

  const handleRequestStop = () => {
    setActive(false);
    sendStopMicrophoneRequest();
    if (sendText && fullText) {
      setCountdown(1);
    }
  };

  

  useEffect(() => {
    if (speechRecognitionResponse) {
      const newText = speechRecognitionResponse.text;

      if (!speechRecognitionResponse.isFinal) {
        setVolatileText(newText);
        return;
      }

      let newFullText = confirmedText;

      if (newText) {
        newFullText = newFullText ? newFullText.concat(" ", newText) : newText;
        setConfirmedText(newFullText);
      }
      setVolatileText("");
    }
  }, [speechRecognitionResponse]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (countdown > 0 && sendText) {
      if (countdown < 0.01) {
        sendText(fullText);
        setCountdown(0);
      } else {
        timer = setInterval(() => {
          setCountdown((previousCountdown) => previousCountdown - 0.01);
        }, 10);
      }
    }
    return () => clearInterval(timer);
  }, [countdown]);

  return (
    <>
        <input
          value={fullText}
          style={{
            backdropFilter: "blur(1px)",
            height: 35,
            fontSize: 30,
            position: "relative",
            minWidth: "400px",
            color:"white"
          }}
          disabled
        />
        <ReactiveMicrophoneIcon
          microphoneIsOn={microphoneIsOn}
          shiftPressed={active}
        />
         {active ?
         <button
         className={`holdbtn ${active ? "listen" : ""}`}
         onClick={() => handleRequestStop()}
      >
       <span>Send message</span> 
      </button>
      : 
     
    <button
    className={`holdbtn ${active ? "listen" : ""}`}
    onClick={() => handleRequestActive()}
 >
  <span>Click to speak</span> 
 </button>
}
   
      {!!countdown && (
        <>
          {".".repeat(Math.floor(countdown * 50))}
          <br />
        </>
      )}
     
    </>
  );
};

export default RecognisedSpeechPlayerInput;