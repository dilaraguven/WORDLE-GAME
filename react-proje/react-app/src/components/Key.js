import React, { useContext } from "react";
import { AppContext } from "../App";
import { correctWord } from "../Words";



function Key({ keyVal, bigKey, disabled, correctDisabled }) {

  const { onEnter, onDelete, onSelectLetter } =
    useContext(AppContext);

  

  const selectLetter = () => {
    if (keyVal == "ENTER") {
      onEnter();
    } else if (keyVal == "DELETE") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      id={
        bigKey
          ? "big"
          : disabled
          ? "disabled"
          : correctDisabled && "disabled_correct"
      }
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;
