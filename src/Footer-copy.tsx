import React, { FC } from "react";
import RecordingIndicator from "./RecordingIndicator";
import RecordingSwitch from "./RecordingSwitch";
import "./styles/Footer.css"; // Assuming you have a separate CSS file for Footer

type FooterProps = {
  setPlayerChoseMicrophone: any;
  playerChoseMicrophone: any;
  setSelectedInputType: any;
  selectedInputType: any;
  shouldShowControls: any;
  areCharacterVoicesOn: any;
  setAreCharacterVoicesOn: any;
  speaker: any;
};

const Footer2: FC<FooterProps> = ({
  // service,
  // inputValue,
  // type,
  // reply,
  setPlayerChoseMicrophone,
  playerChoseMicrophone,
  setSelectedInputType,
  selectedInputType,
  shouldShowControls,
  areCharacterVoicesOn,
  setAreCharacterVoicesOn,
  speaker,
}) => {
  return (
    <footer>
      <button
        style={{ margin: "0px 10px" }}
        onClick={() => {
          setPlayerChoseMicrophone(!playerChoseMicrophone);
          setSelectedInputType(
            selectedInputType === "typing" ? "speech" : "typing",
          );
        }}
        disabled={!shouldShowControls}
      >
        {playerChoseMicrophone ? "Switch to Type" : "Use microphone"}
      </button>
      <button
        onClick={() => {
          if (areCharacterVoicesOn) {
            setAreCharacterVoicesOn(false);
            speaker.changeIsActive((isActive: boolean) => !isActive);
          } else {
            speaker.changeIsActive((isActive: boolean) => !isActive);
            setAreCharacterVoicesOn(true);
          }
        }}
      >
        Toggle character voices: {areCharacterVoicesOn ? "Off" : "On"}
      </button>
    </footer>
  );
};

export default Footer2;
