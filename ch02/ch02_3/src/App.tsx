import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArrowComponent from './Arrowcomponent';

// function App() {
//   return (
//     <h1>functin component</h1>
//   );
// } function 키워드 함수 컴포넌트
// const App = () => {
//   return <h1>function component</h1> 화살표 함수 컴포넌트
// }

export default function App(){
  return(
    <ul>  
    <ArrowComponent href="https://twitter.com" text="go to Twitter"></ArrowComponent>
  </ul>
  )
 

}
