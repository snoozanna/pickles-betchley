import { useEffect, useState } from "react";
import { SpeechRecognitionResponse } from "@charisma-ai/react";
import TapButton from "./TapButton";
import RecognisedSpeechPlayerInput from "./RecognisedSpeechPlayerInput";
import TypedPlayerInput from "./TypedPlayerInput";

type InputControlsProps = {
  speechIsRecording: boolean;
  speechRecognitionResponse: SpeechRecognitionResponse | null;
  playthroughStartSpeechRecognition: () => void;
  playthroughStopSpeechRecognition: () => void;
  onSubmitText: (text: string) => void;
  onTap: () => void;
  inputType: "tap" | "text-input" | undefined;
  shouldShowControls: boolean;
  selectedInputType: string;
};

const InputControls = ({
  speechIsRecording,
  speechRecognitionResponse,
  playthroughStartSpeechRecognition,
  playthroughStopSpeechRecognition,
  onSubmitText,
  onTap,
  inputType,
  shouldShowControls,
  selectedInputType,
}: InputControlsProps) => {
  const [speechRecognitionRequested, setSpeechRecognitionRequested] =
    useState(false);

  useEffect(() => {
    if (speechRecognitionRequested) {
      playthroughStartSpeechRecognition();
    } else {
      playthroughStopSpeechRecognition();
    }
  }, [speechRecognitionRequested]);

  return (
    <div className="inputControls">
      {shouldShowControls && (
        <>
          {selectedInputType === "speech" && (
            <>
              <RecognisedSpeechPlayerInput
                speechRecognitionResponse={speechRecognitionResponse}
                microphoneIsOn={speechIsRecording}
                sendStartMicrophoneRequest={() =>
                  setSpeechRecognitionRequested(true)
                }
                sendStopMicrophoneRequest={() => {
                  setSpeechRecognitionRequested(false);
                }}
                sendText={onSubmitText}
              />
            </>
          )}
          {selectedInputType === "typing" && (
            <>
              <TypedPlayerInput onSubmitText={onSubmitText} />
            </>
          )}
        </>
      )}

      {shouldShowControls && inputType === "tap" && (
        <TapButton
          onClick={() => {
            onTap();
          }}
        />
      )}
    </div>
  );
};

export default InputControls;
