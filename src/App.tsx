import { FC } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import AuthContextProvider from './contexts/AuthContext';
import Home from './pages/Home';
import NewRoom from './pages/NewRoom';

const App: FC = () => (
  <BrowserRouter>
    <AuthContextProvider>
      <Route path="/" exact component={Home} />
      <Route path="/rooms/new" component={NewRoom} />
    </AuthContextProvider>
  </BrowserRouter>
);

export default App;
