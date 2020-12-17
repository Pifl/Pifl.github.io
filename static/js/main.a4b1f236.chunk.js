(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n(1),c=n.n(i),a=n(8),s=n.n(a),o=(n(14),n(15),n(5)),l=n(3),u=n(4),h=n(7),d=n(6),v=(n(16),function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(l.a)(this,n),(r=t.call(this,e)).state={color:""},r}return Object(u.a)(n,[{key:"mouseOver",value:function(e,t){e.target.style.backgroundColor=t?"red":"blue"}},{key:"mouseOut",value:function(e,t,n){e.target.style.backgroundColor=this.colorSelection(t,n)}},{key:"colorSelection",value:function(e,t){var n=t;return"X"===e?n="red":"O"===e&&(n="blue"),n}},{key:"render",value:function(){var e=this,t={backgroundColor:this.colorSelection(this.props.value,this.state.color),color:"white",fontSize:"16px"};return Object(r.jsx)("button",{className:"square",style:t,onClick:function(){return e.props.handleClick(e.props.parent,e.props.index)},onMouseOver:function(t){return e.mouseOver(t,e.props.xIsNext)},onMouseOut:function(t){return e.mouseOut(t,e.props.value,e.state.color)},children:this.props.value})}}]),n}(c.a.Component));function x(e){var t={border:"medium rgba(0, 0, 0, 0) solid"};return e.parent===e.active&&(t.border="medium green dashed"),Object(r.jsx)("div",{className:"ticTacToe-board",style:t,children:e.squares.map((function(t,n){return Object(r.jsx)(v,{parent:e.parent,index:n,handleClick:e.handleClick,value:t,xIsNext:e.xIsNext},n)}))})}function b(e){return e.squares.map((function(t,n){return Object(r.jsx)(x,{parent:n,handleClick:e.handleClick,squares:t,xIsNext:e.xIsNext,active:e.active},n)}))}function j(e){var t=Array(81).fill(null);e.squares.forEach((function(e,n){e.forEach((function(e,r){t[m(n,r)]=e}))}));var n=e.position+.2,i=m(e.lastMove.parent,e.lastMove.child),c={outline:""};return e.highlighted&&(c.outline="medium solid red"),Object(r.jsx)("div",{onClick:e.onClick,className:"history-board",style:c,children:t.map((function(e,t){var c={border:"thin black solid",backgroundColor:"",opacity:n,outline:"",zIndex:-1};return c.backgroundColor="X"===e?"red":"O"===e?"blue":"",t===i&&(c.outline="medium solid green",c.zIndex=1),Object(r.jsx)("div",{style:c},t)}))})}var f=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var r;Object(l.a)(this,n),(r=t.call(this,e)).handleResize=function(e){var t=Math.floor(window.innerWidth/110);r.setState({maxCount:t})};Math.floor(window.innerWidth/110);return r.state={status:null,history:[{squares:Array(9).fill(null).map((function(){return Array(9).fill(null)})),xIsNext:!0,active:-1,lastMove:{parent:-1,child:-1}}],historyIndex:0,maxCount:100},r}return Object(u.a)(n,[{key:"componentDidMount",value:function(){}},{key:"checkLocalVictory",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(o.a)(t[n],3),i=r[0],c=r[1],a=r[2];if(e[i]&&e[i]===e[c]&&e[i]===e[a])return e[i]}return null}},{key:"checkBoardVictory",value:function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(o.a)(t[n],3),i=r[0],c=r[1],a=r[2];if(this.checkLocalVictory(e[i])&&this.checkLocalVictory(e[i])===this.checkLocalVictory(e[c])&&this.checkLocalVictory(e[i])===this.checkLocalVictory(e[a]))return this.checkLocalVictory(e[i])}return null}},{key:"handleClick",value:function(e,t){var n=this.state.history.slice(0,this.state.historyIndex+1),r=n[this.state.historyIndex],i=r.squares.slice().map((function(e){return e.slice()}));if(!(e!==r.active&&-1!==r.active||i[e][t]||this.checkLocalVictory(i[e])||this.checkBoardVictory(i))){i[e][t]=r.xIsNext?"X":"O";var c=this.checkLocalVictory(i[e]);"X"===c?i[e]=["X",null,"X",null,"X",null,"X",null,"X"]:"O"===c&&(i[e]=["O","O","O","O",null,"O","O","O","O"]);var a=t;this.checkLocalVictory(i[a])&&(a=-1),this.setState({history:n.concat([{squares:i,xIsNext:!r.xIsNext,active:a,lastMove:{parent:e,child:t}}]),historyIndex:this.state.historyIndex+1})}}},{key:"rewind",value:function(e){this.setState({historyIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.history,n=t[this.state.historyIndex],i=n.squares,c=this.checkBoardVictory(i),a={background:"rgb(105, 105, 105)"},s="No Winner Yet!";"X"===c?(a.background="rgb(218, 55, 55)",s="X is the Winner!"):"O"===c&&(a.background="rgb(12, 44, 150)",s="O is the Winner!");var o=Math.min(this.state.maxCount,t.length);return Object(r.jsxs)("div",{className:"ultimateTicTacToe",children:[Object(r.jsx)("div",{className:"infobox",children:Object(r.jsx)("div",{style:a,className:"status",children:s})}),Object(r.jsx)("div",{className:"ultimateTicTacToe-board",children:Object(r.jsx)(b,{squares:i,handleClick:function(t,n){return e.handleClick(t,n)},xIsNext:n.xIsNext,active:n.active})}),Object(r.jsx)("div",{className:"ultimateTicTacToe-history",children:t.slice(-o).map((function(t,n){var i=Math.max(e.state.history.length-e.state.maxCount+n,n);return Object(r.jsx)(j,{highlighted:i===e.state.historyIndex,onClick:function(){return e.rewind(i)},position:n/o,squares:t.squares,lastMove:t.lastMove},n)}))})]})}}]),n}(c.a.Component);function m(e,t){var n=t%3+e%3*3;return 9*(Math.floor(t/3)+3*Math.floor(e/3))+n}var y=function(){return Object(r.jsxs)("div",{className:"container",children:[Object(r.jsxs)("div",{className:"content",children:[Object(r.jsx)("div",{className:"header",children:Object(r.jsx)("div",{className:"title",children:"Ultimate Tic Tac Toe"})}),Object(r.jsx)(f,{})]}),Object(r.jsx)("div",{className:"footer",children:Object(r.jsxs)("div",{className:"info",children:["Made by ",Object(r.jsx)("a",{href:"https://www.linkedin.com/in/james-n-tumber",children:"James Tumber"})]})})]})};s.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a4b1f236.chunk.js.map