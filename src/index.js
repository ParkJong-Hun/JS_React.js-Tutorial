import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './practice/ch1/helloWorld';
import PropsTutorial from './practice/ch1/props';
import StateTutorial from './practice/ch1/state';
import Component from './practice/ch2/component'
import Effect from './practice/ch3/effect'

ReactDOM.render(
  <React.StrictMode>
    <HelloWorld />
    <PropsTutorial string="Hello World!"/>
    <StateTutorial />
    <Component comment="hi"/>
    <Effect />
  </React.StrictMode>,
  document.getElementById('root')
);
