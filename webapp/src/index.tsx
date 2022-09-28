import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  </BrowserRouter>
);

ReactDOM.render(<App />, document.getElementById('app'));
