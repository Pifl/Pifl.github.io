import './App.css';
import UltimateTicTacToe from './UltimateTicTacToe'

function App() {
  return (
    <div className="container">
      <div className="content">
      <div className="header">
            <div className="title">Ultimate Tic Tac Toe</div>
        </div>
        <UltimateTicTacToe />
      </div>
      <div className="footer">
        <div className="info">Made by <a href="https://www.linkedin.com/in/james-n-tumber">James Tumber</a></div>
      </div>
    </div>
  );
}

export default App;
