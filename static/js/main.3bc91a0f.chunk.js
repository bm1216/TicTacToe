(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(2),s=r(4),i=r(3),u=r(5),l=r(8),c=r(0),o=r.n(c),h=r(7),m=r.n(h);r(15);function d(e){return o.a.createElement("button",{className:"square",onClick:e.onClick,style:{background:e.isWinner?"green":"white"}}," ",e.value)}function p(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var n=Object(l.a)(t[r],3),a=n[0],s=n[1],i=n[2];if(e[a]&&e[a]===e[s]&&e[a]===e[i])return{result:e[a],winners:t[r]}}return null}var b=function(e){function t(){return Object(n.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(a.a)(t,[{key:"renderSquare",value:function(e){var t=this,r=!1;return this.props.winner?this.props.winner.winners.includes(e)&&(r=!0):r=!1,o.a.createElement(d,{value:this.props.squares[e],onClick:function(){return t.props.onClick(e)},isWinner:r})}},{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"board-row"},this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)),o.a.createElement("div",{className:"board-row"},this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)),o.a.createElement("div",{className:"board-row"},this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)))}}]),t}(o.a.Component),v=function(e){function t(e){var r;return Object(n.a)(this,t),(r=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},r}return Object(u.a)(t,e),Object(a.a)(t,[{key:"handleClick",value:function(e){var t=this.state.history.slice(0,this.state.stepNumber+1),r=t[t.length-1].squares.slice();p(r)||r[e]||(r[e]=this.state.xIsNext?"X":"O",this.setState({history:t.concat([{squares:r}]),stepNumber:t.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function(e){this.setState({stepNumber:e,xIsNext:e%2===0})}},{key:"render",value:function(){var e,t=this,r=this.state.history,n=r[this.state.stepNumber],a=p(n.squares),s=r.map((function(e,r){var n=r?"Go to move #"+r:"Go to game start";return o.a.createElement("li",{key:r},o.a.createElement("button",{style:{fontWeight:t.state.stepNumber===r?"bold":"normal"},onClick:function(){return t.jumpTo(r)}},n))}));return e=a?"Winner: "+a.result:n.squares.every((function(e){return null!=e}))?"It's a Draw!":"Next player: "+(this.state.xIsNext?"X":"O"),o.a.createElement("div",{className:"game"},o.a.createElement("div",{className:"game-board"},o.a.createElement(b,{squares:n.squares,onClick:function(e){return t.handleClick(e)},winner:p(n.squares)})),o.a.createElement("div",{className:"game-info"},o.a.createElement("div",null,e),o.a.createElement("ol",null,s)))}}]),t}(o.a.Component);m.a.render(o.a.createElement(v,null),document.getElementById("root"))},15:function(e,t,r){},9:function(e,t,r){e.exports=r(10)}},[[9,1,2]]]);
//# sourceMappingURL=main.3bc91a0f.chunk.js.map