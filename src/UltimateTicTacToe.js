import React from 'react';
import './UltimateTicTacToe.css';

class Square extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ""
        };
    }

    mouseOver(e, xIsNext){
        if (xIsNext)
            e.target.style.backgroundColor = "red";
        else
            e.target.style.backgroundColor = "blue";
    }

    mouseOut(e, value, defaultColor){
        e.target.style.backgroundColor = this.colorSelection(value, defaultColor);
    }

    colorSelection(value, defaultColor){
        let color = defaultColor;
        if (value === "X") {
            color = "red"
        } else if (value === "O") {
            color = "blue"
        }
        return color;
    }

    render() {
        
        let style = {
            backgroundColor: this.colorSelection(this.props.value, this.state.color),
            color: "white",
            fontSize: "16px"
        }
        
        return (<button className="square" style={style} onClick={() => this.props.handleClick(this.props.parent, this.props.index)} onMouseOver={(e) => this.mouseOver(e, this.props.xIsNext)} onMouseOut={(e) => this.mouseOut(e, this.props.value, this.state.color)}>
            {this.props.value}
        </button>)
    }
}

function TicTacToeBoard(props) {
    let active = props.parent === props.active;
    let style = {
        border: "medium rgba(0, 0, 0, 0) solid"
    };
    if (active) {
        style.border = "medium green dashed"
    }
    return (<div className="ticTacToe-board" style={style}>
        {props.squares.map((square, index) => <Square key={index} parent={props.parent} index={index} handleClick={props.handleClick} value={square} xIsNext={props.xIsNext}/>)}
    </div>)
}

function ParentBoard(props) {
    return (props.squares.map((square, index) => 
    <TicTacToeBoard key={index} parent={index} handleClick={props.handleClick} squares={square}  xIsNext={props.xIsNext} active={props.active}/>))

}

function HistoryBoard(props) {
    let squares = Array(81).fill(null);
    props.squares.forEach((element, index) => {
        element.forEach((square, sIndex) => {
            let a = (sIndex % 3) + (index % 3) * 3;
            let b = Math.floor(sIndex / 3) + Math.floor(index / 3) * 3;        
            let newIndex = (b * 9) + a;
            squares[newIndex] = square;
        })
    });
    
    const opacity = props.position + 0.2; 

    return(<div onClick={props.onClick} className="history-board">
        {squares.map((element, index) => {
            let style = {
                border: "thin black solid",
                backgroundColor: "",
                opacity: opacity
            }
            if (element === "X") {
                style.backgroundColor = "red"
            } else if (element === "O") {
                style.backgroundColor = "blue"
            } else {
                style.backgroundColor = "";
            }
            return (<div key={index} style={style}></div>)})}
    </div>)
}

class UltimateTicTacToe extends React.Component {

    constructor(props) {
        super(props);
        let maxCount = Math.floor(window.innerWidth / 110);
        this.state = {
            status: null,
            history: [{
                    squares: Array(9).fill(null).map(() => Array(9).fill(null)),
                    xIsNext: true,
                    active: -1
                }
            ],
            maxCount: maxCount
        };
    }

    handleResize = (e) => {
        let maxCount = Math.floor(window.innerWidth / 110);
        this.setState({
            maxCount: maxCount
        })
    };

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
    }
    
    checkLocalVictory(squares){
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
            }
          }
          return null;
    }

    checkBoardVictory(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (this.checkLocalVictory(squares[a]) && this.checkLocalVictory(squares[a]) === this.checkLocalVictory(squares[b]) && this.checkLocalVictory(squares[a]) === this.checkLocalVictory(squares[c])) {
                return this.checkLocalVictory(squares[a]);
            }
          }
          return null;
    }

    handleClick(parent, child){
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = deepSlice(current.squares);
        // Only allow moves within current active board but only if active not equal to -1
        // If square has already been set, do nothing
        // If board being played has already been won, do nothing
        // If entire board has been won, do nothing
        if ((parent !== current.active && current.active !== -1) || squares[parent][child] || this.checkLocalVictory(squares[parent]) || this.checkBoardVictory(squares)) {
            return;
        }
        squares[parent][child] = current.xIsNext ? 'X' : 'O';
        
        const OBoard = ['O','O','O','O',null,'O','O','O','O'];
        const XBoard = ['X',null, 'X', null, 'X', null, 'X', null, 'X'];

        const localVictor = this.checkLocalVictory(squares[parent]);
        if (localVictor === 'X'){
            squares[parent] = XBoard;
        } else if (localVictor === 'O'){
            squares[parent] = OBoard;
        }
        let active = child;
        if (this.checkLocalVictory(squares[active]))
            active = -1;
        this.setState({
            history: history.concat([{
                       squares: squares,
                       xIsNext: !current.xIsNext,
                        active: active
                    }])
        })
    }

    rewind(i){
        const index = Math.max(this.state.history.length - this.state.maxCount + i, i);
        const history = this.state.history;
        this.setState({
            history: history.slice(0, index + 1)
        })
    }

    render() {
        const history = this.state.history;
        const current = history[history.length - 1];
        const squares = current.squares;

        let winner = this.checkBoardVictory(squares)
        let statusStyle = {
            background: "rgb(105, 105, 105)"
        }
        let statusText = "No Winner Yet!"
        if (winner === 'X') {
            statusStyle.background = "rgb(218, 55, 55)";
            statusText = "X is the Winner!"
        } else if (winner === 'O') {
            statusStyle.background = "rgb(12, 44, 150)";
            statusText = "O is the Winner!"
        }
        let count = Math.min(this.state.maxCount, history.length);
        return (
            <div className="ultimateTicTacToe">
                <div className="infobox">
                    <div style={statusStyle} className="status">
                        {statusText}
                    </div>
                </div>
                <div className="ultimateTicTacToe-board">
                    <ParentBoard squares={squares} handleClick={(i , j) => this.handleClick(i, j)} xIsNext={current.xIsNext} active={current.active}/>
                </div>
                <div className="ultimateTicTacToe-history">
                    {history.slice(-count).map((element, index) => <HistoryBoard key={index} onClick={() => this.rewind(index)} position={index/count} squares={element.squares}/>)}
                </div>
            </div>
        );
    }
    
}export default UltimateTicTacToe 

function deepSlice(array){
    return array.slice().map( function(row){ return row.slice(); });
}