import React, { FC } from "react";
import RecordingIndicator from "./RecordingIndicator";
import RecordingSwitch from "./RecordingSwitch";
import "./styles/SpeakerControls.css"; // Assuming you have a separate CSS file for Footer
import speak from "./assets/img/speak.png";
import keyboard from "./assets/img/keyboard.png";
import audio from "./assets/img/audio.png";
import audiooff from "./assets/img/audiooff.png";

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

const Footer: FC<FooterProps> = ({
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
    <div className="speakerControls">
      <div className="micBtnWrapper">
        <button
     
          onClick={() => {
            setPlayerChoseMicrophone(!playerChoseMicrophone);
            setSelectedInputType(
              selectedInputType === "typing" ? "speech" : "typing",
            );
          }}
          disabled={!shouldShowControls}
        >
          {!playerChoseMicrophone ? <img src={keyboard} /> : <img src={speak} />}
        </button>
        {!playerChoseMicrophone ? <span>Write</span> : <span>Speak</span>}
      </div>
      {/* <div className="micBtnWrapper">
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
          {areCharacterVoicesOn ? <img src={audiooff} /> : <img src={audio} />}
        </button>
        <span>Voices</span>
      </div> */}
      {/* <RecordingSwitch service={service} /> */}
    </div>
  );
};

export default Footer;
