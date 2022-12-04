import { Input } from 'antd';
import { useState } from 'react';
import './App.css';
import ClassComponent from './components/ClassComponent';
import FunctionComponent from './components/FunctionComponent';
import FunctionComponentWithMemo from './components/FunctionComponentWithMemo';
import PureComponentTest from './components/PureComponent';

function App() {
  const [something, setSomething] = useState('');
  const [anotherSmt, setAnotherSmt] = useState('');

  function handleSomethingChange (e) {
    setSomething(e.target.value);
  }

  function handleAntSomethingChange (e) {
    setAnotherSmt(e.target.value);
  }

  return (
    <div>
      <div>
        <Input key="inputSmt" placeholder='Please enter something' onChange={handleSomethingChange}/>
        <Input key="anotherSmt" placeholder='Please enter another something' onChange={handleAntSomethingChange}/>
        <h2>ParentComponent</h2>
        <h3>Props value: {anotherSmt}</h3>
      </div>
      <hr/>
      <ClassComponent name={something}/>
      <PureComponentTest name={something}/>
      <FunctionComponent name={something}/>
      <FunctionComponentWithMemo name={something}/>
    </div>
  );
}

export default App;
