import styled from "styled-components";

const Home = ({toggle}) => {
  return (
    <Container className="home">
      <div className="dices">
        <Image src="/images/dices.png"></Image>
      </div>
      <div className="text">
        <Head1>DICE GAME</Head1>
        <Button onClick={toggle}>PLAY NOW</Button>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  margin: 0 auto;
  /* width: 100vw; */
  max-width:1180px;
  /* text-align: center; */
  /* background-color:blue; */
`;
const Image = styled.img`
  height: 55vh;
  width: 33vw;
`;
const Head1 = styled.h1`
  font-size: 70px;
  letter-spacing: 4px;
  font-weight: 700;
  white-space: nowrap;
`;
const Button = styled.button`
  border: none;
  background-color: black;
  cursor: pointer;
  color: white;
  width: 14vw;
  height: 7vh;
  border-radius: 4px;
  font-size: 17px;
  margin-left: 200px;
  transition: 0.3s background ease-in;

  &:hover {
    border: 2px solid black;
    color: black;
    background-color: white;
    transition: 0.2s background ease-in;
  }
`;
