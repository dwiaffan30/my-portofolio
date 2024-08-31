// import Home from "./pages/Home";
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
// import Second from './components/second'
// import Pertama from './pages/pertama'
import Home from './pages/Home'
import Kedua from './pages/Kedua'
// import Pertama from "./pages/pertama";

export default function App() {
  return(
    <>
    {/* <Home/> */}
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Kedua' element={<Kedua/>} />
      </Routes>
    </Router>
    </>
  )
}

