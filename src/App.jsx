import './App.css'
import Main from './components/Main'
import WorkSpace from './components/WorkSpace'
import SideBar from './components/sideBar'
import TopBar from './components/topBar'

function App() {
 

  return (
      <div className="app">
        <WorkSpace>
            <TopBar>TOP BAR</TopBar>
            <SideBar>SIDE BAR</SideBar>
            <Main>MAIN BAR</Main>
        </WorkSpace>
      </div>
  )
}

export default App
