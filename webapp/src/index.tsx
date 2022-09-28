import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from './pages';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
  </BrowserRouter>
);

const appContainer = document.getElementById('app') as Element;
const root = createRoot(appContainer);

root.render(<App />);
