// import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Homepage/Home'
import { useSelector } from 'react-redux'

function App() {
  const themeMode = useSelector(state => state.theme.themeMode)
  // console.log(themeMode, "--themeMode");

  return (
    <div className={`bg-primary text-primary ${themeMode}`}>

    <Home/>
     
    </div>
  )
}

export default App
