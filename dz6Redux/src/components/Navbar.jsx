
import { useDispatch, useSelector } from "react-redux"
import {toggleMode } from "../store/ThemeSlice"

import'../App.css'

const Navbar = () => {
  const dispatch = useDispatch()
  const selector = useSelector(state=>state.theme.isDarkMode)
  const themeMode = () =>{
dispatch(toggleMode())
  }
  return (
    <div className={selector?'div-nav-dark':'div-nav-light'}>
      <a href={'/'}>home</a>
    <button
      onClick={themeMode}
      className={selector ? 'darkMode ' : 'lightMode'}
    >
      {selector ? 'dark' : 'light'}
    </button>
  </div>
  )
}

export default Navbar
