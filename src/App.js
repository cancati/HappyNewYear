import Counter from './Counter'

function App() {
  let deadline = "january, 01, 2022";
  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: '#282c34'}}>
    
      <Counter deadline={deadline} />
      </header>
    </div>
  );
}

export default App;
