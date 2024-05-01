import { useEffect, useState } from "react";
import { FaMicrophone as MicrophoneIcon } from "react-icons/fa";

type MicrophoneStatus = "off" | "starting" | "on" | "stopping";

const microphoneColours: Record<MicrophoneStatus, string> = {
  off: "white",
  starting: "grey",
  on: "red",
  stopping: "pink",
};

type ReactiveMicrophoneIconProps = {
  microphoneIsOn: boolean;
  isRecording: boolean;
};

const ReactiveMicrophoneIcon = ({
  microphoneIsOn,
  isRecording,
}: ReactiveMicrophoneIconProps) => {
  const [microphoneStatus, setMicrophoneStatus] =
    useState<MicrophoneStatus>("off");

  useEffect(() => {
    if (microphoneIsOn) {
      if (isRecording) {
        setMicrophoneStatus("on");
      } else {
        setMicrophoneStatus("stopping");
      }
    } else if (isRecording) {
      setMicrophoneStatus("starting");
    } else {
      setMicrophoneStatus("off");
    }
  }, [isRecording, microphoneIsOn]);

  const microphoneColour = microphoneColours[microphoneStatus];

  return (
    <>
      <div>
        <MicrophoneIcon
          size={80}
          color={microphoneColour}
          data-testid="microphone-icon"
        />
      </div>
    </>
  );
};

export default ReactiveMicrophoneIcon;
