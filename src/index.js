import { createRoot } from 'react-dom/client';
// import { Provider } from 'react-redux';
// import store from "./store";
// import App from './App14'

import Router from './router'


const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  // <Provider store={store}>
  //  <App />
  // </Provider>
  <Router />
)

// createRoot(document.getElementById('root')).render(<App />)

// setTimeout(() => {
//   root.render(<input></input>)
// }, 3000);