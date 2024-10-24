import styled from "styled-components";
import React, { useState } from "react";
import Rules from "./Rules.jsx";
const Game = () => {
  const arrNum = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState();
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);

  function getRandomNum(min, max) {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  }
  const setDice = () => {
    if (!selectNum) {
      setError("You have not selected any number");
      return;
    }
    const randomNum = getRandomNum(1, 7);
    setCurrentDice(randomNum);

    if (selectNum === randomNum) {
      setScore((prev) => prev + randomNum);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectNum(undefined);
  };
  const numHandler = (val) => {
    setSelectNum(val);
    setError("");
  };
  const reset = () => {
    setScore(0);
  };
  return (
    <Main>
      <Upper>
        <div>
          <Snum>{score}</Snum>
          <Stext>Total Score</Stext>
        </div>
        <Error>{error}</Error>
        <Boxes>
          {arrNum.map((val, i) => (
            <Box
              isSelected={val === selectNum}
              key={i}
              onClick={() => numHandler(val)}
            >
              {val}
            </Box>
          ))}
        </Boxes>
      </Upper>
      <Selectnum>Select Number</Selectnum>
      <Lower>
        <Dimage
          onClick={setDice}
          src={`/images/dice_${currentDice}.png`}
        ></Dimage>
        <Head1>Click on Dice to roll</Head1>
        <Button1 onClick={reset}>Reset Score</Button1>
        <Button2 onClick={() => setShowRules((prev) => !prev)}>
          {showRules ? "Hide" : "Show"} Rules
        </Button2>
        {showRules && <Rules />}
      </Lower>
    </Main>
  );
};

export default Game;

const Upper = styled.div`
  display: flex;
  /* gap:50vw; */
  align-items: center;
  justify-content: space-between;
  margin: 2vh 5vw;
  font-size: 40px;
`;

const Boxes = styled.div`
  display: flex;
  justify-content: space-between;
  /* background-color: blue; */
  /* gap: 15px; */
`;
const Box = styled.div`
  border: 2px solid black;
  padding: 5px;
  width: 64px;
  margin: 5px;
  text-align: center;
  font-size: 35px;
  cursor: pointer;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  transition: 0.2s background ease-in;
`;
const Snum = styled.div`
  font-size: 70px;
  text-align: center;
  line-height: 60px;
  margin-top: 26px;
`;
const Stext = styled.div`
  font-size: 26px;
`;
const Selectnum = styled.div`
  font-size: 26px;
  font-weight: 600;
  position: absolute;
  right: 5vw;
  top: 15vh;
`;
const Lower = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 13vh;
  /* margin-bottom:8vh; */
`;
const Dimage = styled.img`
  height: 30vh;
  width: 14vw;
`;
const Main = styled.div`
  position: relative;
`;
const Head1 = styled.div`
  font-size: 22px;
  font-weight: 600;
`;
const Button1 = styled.button`
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  color: black;
  width: 14vw;
  height: 7vh;
  border-radius: 4px;
  font-size: 17px;
  font-weight: 600;
  transition: 0.3s background ease-in;
  &:hover {
    border: 2px solid black;
    color: white;
    font-weight: 500;
    background-color: black;
    transition: 0.2s background ease-in;
  }
`;
const Button2 = styled.button`
  border: none;
  background-color: black;
  cursor: pointer;
  color: white;
  width: 14vw;
  height: 7vh;
  border-radius: 4px;
  font-size: 17px;
  transition: 0.3s background ease-in;
  &:hover {
    border: 2px solid black;
    font-weight: 600;
    color: black;
    background-color: white;
    transition: 0.2s background ease-in;
  }
`;
const Error = styled.p`
  position: absolute;
  right: 5vw;
  top: -1vh;
  font-size: 22px;
  color: red;
  font-weight: 500;
`;
