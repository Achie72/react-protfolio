import React, {useEffect, useState} from 'react';
import AboutSection from './components/AboutSection';
import LinkCard from './components/LinkCard';
import { 
  FaGithub
} from 'react-icons/fa';
import {
  SiKofi
} from 'react-icons/si'
import './App.css';
import GameCard, { GameCardProps } from './components/GameCard';
import gameData from './gamecard-list.json'


const App: React.FC = () => {

  const [gamedata, setGameData] = useState<GameCardProps[]>([])

  useEffect(() => {
    setGameData(gameData)
  }, [])

  return(
    <main className="home-page" >
      <AboutSection />
      <div className="link-list">
        <LinkCard title="My Ko-fi page" url="https://ko-fi.com/achiegamedev" description="Devlogs, Reviews and much more" icon={<SiKofi/>}/>
        <LinkCard title="GitHub" url="https://github.com/Achie72" description="Check out my code projects" icon={<FaGithub/>}/>
      </div>
      <p></p>
      <div className="gamecard-list">
        {gamedata.map((game, key) =>
          <GameCard key={key } {...game}/>
        )}
      </div>

    </main>
  )
}

export default App;
