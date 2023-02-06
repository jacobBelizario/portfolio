import { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom'
import { Navbar } from './components/layout/Navbar';
import { Landing } from './components/layout/Landing';
import { Experience } from './components/Info/Experience';
import { Skills } from './components/Info/Skills';
import { Education } from './components/Info/Education';

const App = () =>  
    <Router>
      <Fragment>
        <Navbar/>
        <Routes>
              <Route path="/" element={<Landing/>}/>
              <Route path="/skills" element={<Skills/>}/>
              <Route path="/experience" element={<Experience/>}/>
              <Route path="/education" element={<Education/>}/>
        </Routes>
      </Fragment>
    </Router>
export default App;
