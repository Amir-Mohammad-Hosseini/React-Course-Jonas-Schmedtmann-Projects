import { useState } from "react";
import Button from "./Button";

const Box = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChangeVisibility = () => {
    setIsOpen((prevStatus) => !prevStatus);
  };
  return (
    <div className="box">
      <Button onShow={handleChangeVisibility} isOpen={isOpen} />
      {isOpen && children}
    </div>
  );
};

export default Box;
