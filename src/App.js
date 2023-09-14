import { useEffect } from 'react';
import './App.css';
import {CV_image} from './components/CV_image';
import {Title} from './components/Title';
import {Text} from './components/Text';
import {Loading} from './components/Loading';
import {Header} from './components/Header';
import {List} from './components/List';
import {SkillsList} from './components/Skills';


function App() {

  return (
    <div className="App lg:px-60 md:flex-row p-5 flex gap-5 flex-col flex-wrap justify-center">
      <div className='circle_blur bg-gradient-to-b from-rose-500 via-purple-500 to-indigo-500 from-40%'></div>

      <Header/>
      <div className='w-full flex flex-col z-12 lg:flex-row'>
        <CV_image/>
        <Title/>
      </div>
      
      <div className='md:flex-row flex gap-5 flex-col flex-wrap justify-center'>
        <Text title="Who am i?" content="I'm Ahmed from Cairo, Egypt. I'm an engineering student at Cairo uni"/>
        <Text title="What i do?" content="I'm a software engineer, doing full stack development" />
      
        <SkillsList title="Front End" skills={[
          {name:'html5', color: 'text-orange-600'},
          {name:'css3', color: 'text-blue-500'},
          {name:'js', color: 'text-amber-400'},
          {name: 'react', color: 'text-sky-500'}
        ]}/>

        <SkillsList title="Back End" skills={[
          {name: 'node', color: 'text-lime-600'}
        ]}/>

        <Text title="How about my experience?" content={<List list={[
          'Started to learn how to code at 15.',
          'Was the leader of engineering applications project (Was light tracker), I designed the and programmed the arduino circuit',
          'Work with LIM team',
        ]}/>}/>
        <Text title="Is coding all i do?" content={"Nope. I make EDM music for fun. This is some of my tracks on Soundcloud & Spotify"} icons={[
          {title:'soundcloud', url:'https://soundcloud.com/ahmed-mustafa15'},
          {title:'spotify', url:'https://open.spotify.com/artist/0CeEZopMujxKAWqWQdM6tH?si=OgCWu6cgRF2frfSpBHXZTA'}
        ]}/>
      </div>

    </div>
  );
}

export default App;
