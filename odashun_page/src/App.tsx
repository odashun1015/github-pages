import './App.css';
import Button from '@mui/material/Button';
import { useEffect, useState } from 'react';

function App() {
  // useStateの引数はcountの初期値となる
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `You clicked ${count} time`
  });
  return (
    <div>
      <h1>サンプル</h1>
      <p>You clicked {count} times</p>
      <Button variant="contained" onClick={() => setCount(count + 1)}>
        Click me
      </Button>
    </div>
  );
}

export default App;
