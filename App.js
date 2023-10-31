
import './App.css';

function Welcome(props) {
  return <h1>Olá, {props.nome}</h1>;
}

function App() {
  return (
    
    <div className="App">
      <Welcome nome="Alice" />
      <Welcome nome="Bob" />
      <Welcome nome="Charlie" />
        
    </div>
    
  );
}

export default App;
