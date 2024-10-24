import styled from "styled-components";
const Rules = () => {
  return (
    <GameRules>
      <h1>How to Play Game</h1>
      <p>Select any number</p>
      <p>Click on dice</p>
      <p>
        After clicking on dice if selected number is equal to dice number you
        will get the points as dice
      </p>
      <p>If you get wrong guess than 2 points will be deducted</p>
    </GameRules>
  );
};

export default Rules;

const GameRules = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 95vw;
background-color: #fbf1f1;
padding:10px 20px;
border-radius:6px;
  p {
    font-size: 19px;
    margin-bottom: 6px;
  }
  h1 {
    margin-bottom: 6px;
  }
`;
