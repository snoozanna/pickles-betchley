import { useState } from "react";
import send from "./assets/img/send.png";

type TypedPlayerInputProps = {
  onSubmitText: (text: string) => void;
};

const TypedPlayerInput = ({ onSubmitText }: TypedPlayerInputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== "") {
      onSubmitText(inputValue.trim());
      setInputValue(""); // Clear input after submission
    }
  };

  return (
    <>
      <input
        className="reply"
        placeholder="Type your reply..."
        value={inputValue}
        onChange={handleInputChange}
      />
        <div className="micBtnWrapper">
      <button onClick={handleSubmit} ><img src={send} alt="Send icon"/> </button>
      </div>
    </>
  );
};

export default TypedPlayerInput;
