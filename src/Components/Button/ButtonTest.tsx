import { useState } from "react";
import { ButtonConstant } from "Constants/testConstants";
import Button from ".";

const ButtonTest = () => {
  const [text, setText] = useState(ButtonConstant.BUTTON_TEXT1);
  const handleToggle = () => {
    text === ButtonConstant.BUTTON_TEXT1
      ? setText(ButtonConstant.BUTTON_TEXT)
      : setText(ButtonConstant.BUTTON_TEXT1);
  };
  return (
    <Button onClick={handleToggle} data-testid={ButtonConstant.BUTTON_ID}>
      {text}
    </Button>
  );
};

export default ButtonTest;
