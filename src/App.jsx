import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import RowPost from './components/RowPost/RowPost';
import { action, originals } from './urls';

function App() {
 

  return (
    <>
      <NavBar/>
      <Banner/>
      
      <RowPost url={originals}title='NetFlix Originals'/>
      <RowPost url={action}title='Action' isSmall/>
    </>
  )
}

export default App
