import React from 'react';
import logo from './logo.svg';
import './App.css';
import P from './P';

function App() {
  // const texts = [<p key="1">hello</p>,<p key="2">world</p>]
  // return (
  //   <div>{texts}</div>
  // );key 사용

  const texts= ['hello', 'world'].map((text,index)=> <P key={index} children={text}></P>)
  return <div children={texts}></div>
}

export default App;
