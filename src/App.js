import React, { useState } from 'react';
import styled from 'styled-components';
import RealId from './real-id.jpg';
import HomeScreen from './screens/home.PNG';


const ImageHolder = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  background-size: cover;
`;

const IdLink = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
  top: 42vh;
  left: 26vw;
`

const BatteryHider = styled.div`
 width: 100vw;
  height: 6vh;
  background-color: #bddcf7;
  position: absolute;
  top: 0px;
  left: 0px;
`

const HomeLink = styled.div`
  width: 90px;
  height: 90px;
  position: absolute;
`

const NameHolder = styled.div`
  position: absolute;
  top: 17vh;
  left: 10vw;
  color: white;
  width: 60vw;
  background-color: #747474;
  font-size: 24px;
`

const HomeScreenName = styled.div`
  position: absolute;
  top: 12vh; 
  width: 30vw;
  height: 5vh;
  color: #4f555c;
  background-color: #bddcf7;
  font-weight: 510;
  font-size: 24px;
  left: 19px;
`

const InitialsHolder = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  top: 8vh;
  right: 5vw;
  width: 8vh;
  height: 8vh;
  background-color: #e17134;
  color: white;
  border-radius: 50%;
`

const NameHider = styled.div`
  position: absolute;
  top: 17vh;
  left: 10vw;
  width: 80vw;
  height: 7vh;
  color: #747474;
`

const CardNumber = styled.div`
  display: flex;
  position: absolute;
  top: 60.5vh;
  height: 8vh;
  width: 100vw;
  background-color: #747474;
  justify-content: center;

  color: white;
  font-size: 14px;
`

function App() {
  const [screen, setScreen] = useState('id');
  const [name, setName] = useState('John Doe');
  const [college, setCollege] = useState('Derwent')

  switch (screen) {
    case 'home':
      return (
        <ImageHolder style={{ backgroundImage: `url("${HomeScreen}")` }}>
          <BatteryHider></BatteryHider>
          <HomeScreenName>
            {name.split(' ')[0]}
          </HomeScreenName>
          <InitialsHolder onClick={() => setScreen("input")}>
            {name.split(' ')[0][0]}{name.split(' ')[1][0]}
          </InitialsHolder>
          <IdLink onClick={() => setScreen('id')}></IdLink>
        </ImageHolder>
      );
    case 'id':
      return (
        <ImageHolder style={{ backgroundImage: `url("${RealId}")` }}>
          <HomeLink onClick={() => setScreen('home')}></HomeLink>
          <NameHider />
          <BatteryHider></BatteryHider>
          <NameHolder>
            {name} <br />
            {college}
          </NameHolder>
          <CardNumber>
            Card Number 2801600{Math.floor(Math.random() * 7000000)}
          </CardNumber>
        </ImageHolder>
      )
    case 'input':
      return (
        <>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /> <br />
          <input type="text" value={college} onChange={(e) => setCollege(e.target.value)} /> <br />
          <button onClick={() => setScreen('home')}>Submit</button>
        </>
      )
  }
}

export default App;
