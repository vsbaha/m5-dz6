import { useSelector } from "react-redux"
import Navbar from "./components/Navbar"
import Page from "./page/Page"
import './App.css'

const App = () => {
  const select = useSelector(state=>state.theme.isDarkMode)
  return (
    <div className={select ? 'darks' : 'lights'} >
      <Navbar />
       
      <Page/>
    </div>
  )
}

export default App
