import React, { FC } from "react";
import RecordingIndicator from "./RecordingIndicator";
import RecordingSwitch from "./RecordingSwitch";
import "./styles/Footer.css"; // Assuming you have a separate CSS file for Footer

type FooterProps = {
  service: string;
  inputValue: string;
  type: (value: string) => void; // Function that takes a string parameter and returns void
  reply: (params: { text: string }) => void; // Function that takes an object parameter with 'text' property and returns void
};

const Footer: FC<FooterProps> = ({ service, inputValue, type, reply }) => {
  return (
    <footer>
      {/* <span className="button-wrapper"> */}
      {/* <button>
          <a
            href="https://deft-gaufre-490f8b.netlify.app/phone3.html"
            rel="noreferrer"
            target="_blank"
          >
            Exit
          </a>
        </button> */}
      {/* </span> */}

      <div className="inputWrapper">
        <input
          className="typeInput"
          onChange={({ currentTarget: { value } }) => type(value)}
          value={inputValue}
          onKeyDown={({ key }) => {
            if (key === "Enter") {
              reply({ text: inputValue });
            }
          }}
        />{" "}
      </div>
      {/* <RecordingSwitch service={service} /> */}
    </footer>
  );
};

export default Footer;
