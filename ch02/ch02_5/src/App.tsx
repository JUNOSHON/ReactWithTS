import React from 'react';
import logo from './logo.svg';
import './App.css';
import EventListener from './pages/EventListener';
import OnClick from './pages/OnClick'
import ReactOnClick from './pages/ReactOnClick'
import DispatchEvent from './pages/DispatchEvent'
import EventBubbling from './pages/EventBubbling'
import StopPropagation from './pages/StopPropagation'
import VariousInputs from './pages/VariousInputs'
import OnChange from './pages/OnChange'
import FileInput from './pages/FileInput'
import DragDrop from './pages/DragDrop'
import FileDrop from './pages/FileDrop';


function App() {
  return (
  <div>
    <FileDrop></FileDrop>
    <DragDrop></DragDrop>
    <FileInput></FileInput>
    <OnChange></OnChange>
    <VariousInputs></VariousInputs>
    <StopPropagation></StopPropagation>
    <EventBubbling></EventBubbling>
    <DispatchEvent></DispatchEvent>
    <ReactOnClick></ReactOnClick>
    <OnClick></OnClick>
    <EventListener></EventListener>
  </div>
  );
}

export default App;
