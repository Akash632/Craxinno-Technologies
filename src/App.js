import './App.css';
import Graph from './components/Graph';
import Amount from './features/Amount';

function App() {
  console.log('App');
  return (
    <div className="App">
      <Amount/>
      <Graph/>
    </div>
  );
}

export default App;
