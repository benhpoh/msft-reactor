import reactor from './assets/reactor.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={reactor} alt="reactor" />
        <h3>
          Implementing Azure Front Door with Multi-Region AKS Clusters
        </h3>
        <h5>
          By <a target="https://github.com/bradmccoydev">Brad McCoy</a> & <a target="https://github.com/benhpoh">Ben Poh</a>
        </h5>
        
        <p>Region: Secondary</p>
      </header>
    </div>
  );
}

export default App;
