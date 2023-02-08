import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as D from './data';

const CE = React.createElement ;


const children = D.makeArray(10).map((notUsed, index) => (
  <div key={index}>

    <p>{D.randomId()}</p>
    <p>{D.randomName()}</p>
    <p>{D.randomJobTitle()}</p>
    <p>{D.randomSentence()}</p>
    <img src={D.randomAvatar()} width = {100} height ={100}/>

  </div>
))


const rootVirtualDOM = <div>{children}</div>
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(rootVirtualDOM);