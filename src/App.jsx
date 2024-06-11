import { useRef } from 'react'
import './App.css'
import About from './pages/About/About'
import Body from './pages/Body/Body'
import Nav from './pages/nav/nav'
import Teachers from './pages/teachers/Teachers'

function App() {

  const aboutRef = useRef(null)
  const aboutscroll = () => {
    aboutRef.current.scrollIntoView({behavior : "smooth"})
  }
  const teachersRef = useRef(null)
  const teachersScroll = ()=>{
    teachersRef.current.scrollIntoView({behavior : "smooth"})
  }
  return (
    <>
    <Nav aboutscroll={aboutscroll} teachersScroll={teachersScroll}/>
    <Body/>
    <About ref={aboutRef}/>
    <Teachers ref={teachersRef}/>
    </>
  )
}

export default App
