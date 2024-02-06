import React, { useContext } from "react";
import Key from "./Key";
import { AppContext } from "../App";
import Letter from "./Letter";
import Button from "react-bootstrap/Button";


function Wordle() {
  const { onEnter, disabledLetters,correctLetters } = useContext(AppContext);

  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "Ğ", "Ü"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ş", "İ"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M", "Ö", "Ç"];

  return (
    <div className="game">
      <div className="board">
        {" "}
        <div className="_row">
          <Letter letterPos={0} attemptVal={0} />
          <Letter letterPos={1} attemptVal={0} />
          <Letter letterPos={2} attemptVal={0} />
          <Letter letterPos={3} attemptVal={0} />
          <Letter letterPos={4} attemptVal={0} />
        </div>
        <div className="_row">
          <Letter letterPos={0} attemptVal={1} />
          <Letter letterPos={1} attemptVal={1} />
          <Letter letterPos={2} attemptVal={1} />
          <Letter letterPos={3} attemptVal={1} />
          <Letter letterPos={4} attemptVal={1} />
        </div>
        <div className="_row">
          <Letter letterPos={0} attemptVal={2} />
          <Letter letterPos={1} attemptVal={2} />
          <Letter letterPos={2} attemptVal={2} />
          <Letter letterPos={3} attemptVal={2} />
          <Letter letterPos={4} attemptVal={2} />
        </div>
        <div className="_row">
          <Letter letterPos={0} attemptVal={3} />
          <Letter letterPos={1} attemptVal={3} />
          <Letter letterPos={2} attemptVal={3} />
          <Letter letterPos={3} attemptVal={3} />
          <Letter letterPos={4} attemptVal={3} />
        </div>
        <div className="_row">
          <Letter letterPos={0} attemptVal={4} />
          <Letter letterPos={1} attemptVal={4} />
          <Letter letterPos={2} attemptVal={4} />
          <Letter letterPos={3} attemptVal={4} />
          <Letter letterPos={4} attemptVal={4} />
        </div>
        <div className="_row">
          <Letter letterPos={0} attemptVal={5} />
          <Letter letterPos={1} attemptVal={5} />
          <Letter letterPos={2} attemptVal={5} />
          <Letter letterPos={3} attemptVal={5} />
          <Letter letterPos={4} attemptVal={5} />
        </div>
      </div>
      <div className="keyboard">
        <div className="line_1">
          {keys1.map((key) => {
            return (
              <Key keyVal={key} disabled={disabledLetters.includes(key)} correctDisabled={correctLetters.includes(key)} />
            );
          })}
        </div>
        <div className="line_2">
          {keys2.map((key) => {
            return (
              <Key keyVal={key} disabled={disabledLetters.includes(key)} correctDisabled={correctLetters.includes(key)} />
            );
          })}
        </div>
        <div className="line_3">
          <Key keyVal={"ENTER"} bigKey />
          {keys3.map((key) => {
            return (
              <Key keyVal={key} disabled={disabledLetters.includes(key)} correctDisabled={correctLetters.includes(key)} />
            );
          })}
          <Key keyVal={"DELETE"} bigKey />
        </div>
      </div>

      <Button variant="light" onClick={onEnter}>
        Check Your Guess
      </Button>{" "}
     
    </div>
  );
}

export default Wordle;
