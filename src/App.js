import './App.css';
import UltimateTickTacToe from './UltimateTickTacToe'

function App() {
  return (
    <div className="container">
      <div className="content">
      <div className="header">
            <div className="title">Ultimate Tick Tac Toe</div>
        </div>
        <UltimateTickTacToe />
      </div>
      <div className="footer">
        <div className="info">Made by <a href="https://www.linkedin.com/in/james-n-tumber">James Tumber</a></div>
      </div>
    </div>
  );
}

export default App;
