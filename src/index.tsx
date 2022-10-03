import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './s-1-main/app/App';
import { store } from './s-1-main/m-2-bll/store';

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <HashRouter>
//         <App />
//       </HashRouter>
//     </Provider>
//   </React.StrictMode>,
// );

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
       <HashRouter>
         <App />
       </HashRouter>
     </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// const root = createRoot(document.getElementById('root') as HTMLElement);

// root.render(
//   <StrictMode>
//     <Provider store={store}>
//       <HashRouter>
//         <App />
//       </HashRouter>
//     </Provider>
//   </StrictMode>,
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
