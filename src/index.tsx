import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { AuthorizationStatus, Setting } from './const/const';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App
      cardsCount={Setting.CardsCount}
      authStatus={AuthorizationStatus.NoAuth}
    />
  </React.StrictMode>
);
