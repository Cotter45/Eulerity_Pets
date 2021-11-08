import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ModalProvider } from './context/Modal';
import ReactDOM from 'react-dom';

import configureStore from './store';
import App from './App';

import './index.css';


const store = configureStore();

if (process.env.NODE_ENV !== "production") {

  window.store = store;
}

function Root() {

  const isTouch = () => {
        if ('ontouchstart' in window) {
            return true;
        }
        return false;
    }

    const backendForDND = isTouch() ? TouchBackend : HTML5Backend;

  return (
    <ModalProvider>
      <Provider store={store}>
          <BrowserRouter>
            <DndProvider backend={backendForDND}>
              <App />
            </DndProvider>
          </BrowserRouter>
      </Provider>
    </ModalProvider>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
);
