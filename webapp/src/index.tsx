import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { store } from './store'
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

root.render(
  <Provider store={store} >
    <App />
  </Provider>
);
