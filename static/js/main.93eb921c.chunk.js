(this["webpackJsonpreact-chess"]=this["webpackJsonpreact-chess"]||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var i=a(0),s=a(2),n=a.n(s),r=a(20),o=a.n(r),c=(a(26),a(10)),l=(a(27),a(5)),u=a(6),d=a(4),b=a(8),h=a(7),j=a(1),p=a.n(j),v=(a(30),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){return Object(l.a)(this,a),t.call(this,e)}return Object(u.a)(a,[{key:"render",value:function(){var e="/pieces/".concat(this.props.color).concat(this.props.piece,".png");return Object(i.jsx)("img",{className:"piece",src:e,alt:"chess piece"})}}]),a}(s.Component)),m=(a(31),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).state={},i.wasClicked=i.wasClicked.bind(Object(d.a)(i)),i}return Object(u.a)(a,[{key:"render",value:function(){var e=null;this.props.pieceName&&this.props.pieceColor&&(e=Object(i.jsx)(v,{color:this.props.pieceColor,piece:this.props.pieceName}));var t=this.props.selected?"orangeSquare":this.props.color;return Object(i.jsx)("button",{className:t,onClick:this.wasClicked,children:e})}},{key:"wasClicked",value:function(){this.props.setPosition(this.props.rowCord,this.props.colCord)}}]),a}(s.Component)),f={1:"Pawn",3:"Knight",4:"Bishop",5:"Rook",9:"Queen",10:"King"},O={0:"white",1:"black"},x=[2,2],q="https://e5nuoi3g98.execute-api.us-east-1.amazonaws.com/Test/",E=a(9),g=a.n(E),N=function(e){return g()({method:"get",url:"".concat(q,"nextmove"),params:{board:e}}).then((function(e){return e}),(function(e){return e}))};a(49);function P(e,t){return e[t[0]][t[1]][0]}function C(e,t,a){var i=a[0]-t[0]===a[1]-t[1]||a[0]-t[0]===-1*(a[1]-t[1]);if(!i)return!1;for(var s=(a[0]-t[0])/Math.abs(a[0]-t[0]),n=(a[1]-t[1])/Math.abs(a[1]-t[1]),r=!0,o=1;o<Math.abs(a[1]-t[1]);o++)2!==P(e,[t[0]+o*s,t[1]+o*n])&&(r=!1);return i&&0!==P(e,a)&&r}function w(e,t,a){var i=0,s=0;if(a[0]-t[0]!==0&&a[1]-t[1]!==0)return!1;a[0]-t[0]===0?s=a[1]-t[1]>0?1:-1:i=a[0]-t[0]>0?1:-1;var n=!0;if(0!==i)for(var r=1;r<Math.abs(a[0]-t[0]);r++)2!==P(e,[t[0]+r*i,t[1]])&&(n=!1);else for(var o=1;o<Math.abs(a[1]-t[1]);o++)2!==P(e,[t[0],t[1]+o*s])&&(n=!1);return 0!==P(e,a)&&n}function S(e,t,a,i,s){var n=!1;return 1===t?n=function(e,t,a,i){var s=!1,n=[t[0]-1,t[1]];return!(!p.a.isEqual(i[3],[t[0],t[1]+1])||!p.a.isEqual(a,[i[3][0]-1,i[3][1]]))||!(!p.a.isEqual(i[3],[t[0],t[1]-1])||!p.a.isEqual(a,[i[3][0]-1,i[3][1]]))||(p.a.isEqual([t[0]-2,t[1]],a)&&(s=2===P(e,n)&&2===P(e,a)&&6===t[0]),p.a.isEqual([t[0]-1,t[1]],a)?s=2===P(e,a):(p.a.isEqual([t[0]-1,t[1]+1],a)||p.a.isEqual([t[0]-1,t[1]-1],a))&&(s=1===P(e,a)),s)}(e,a,i,s):3===t?n=function(e,t,a){return(p.a.isEqual([t[0]-1,t[1]+2],a)||p.a.isEqual([t[0]-1,t[1]-2],a)||p.a.isEqual([t[0]+1,t[1]+2],a)||p.a.isEqual([t[0]+1,t[1]-2],a)||p.a.isEqual([t[0]-2,t[1]+1],a)||p.a.isEqual([t[0]-2,t[1]-1],a)||p.a.isEqual([t[0]+2,t[1]+1],a)||p.a.isEqual([t[0]+2,t[1]-1],a))&&0!==P(e,a)}(e,a,i):4===t?n=C(e,a,i):5===t?n=w(e,a,i):9===t?n=w(e,a,i)||C(e,a,i):10===t&&(n=function(e,t,a,i){var s=i[0];if(p.a.isEqual(a,[7,6])&&p.a.isEqual(t,[7,4])&&s)return 2===P(e,[7,5])&&2===P(e,[7,6]);if(p.a.isEqual(a,[7,2])&&p.a.isEqual(t,[7,4])&&s)return 2===P(e,[7,1])&&2===P(e,[7,2])&&2===P(e,[7,3]);var n=!1;return Math.abs(a[0]-t[0])<2&&Math.abs(a[1]-t[1])<2&&(n=0!==P(e,a)),n}(e,a,i,s)),n}function M(e,t,a){var i=a[0]-t[0]===a[1]-t[1]||a[0]-t[0]===-1*(a[1]-t[1]);if(!i)return!1;for(var s=(a[0]-t[0])/Math.abs(a[0]-t[0]),n=(a[1]-t[1])/Math.abs(a[1]-t[1]),r=!0,o=1;o<Math.abs(a[1]-t[1]);o++)2!==P(e,[t[0]+o*s,t[1]+o*n])&&(r=!1);return i&&1!==P(e,a)&&r}function k(e,t,a){var i=0,s=0;if(a[0]-t[0]!==0&&a[1]-t[1]!==0)return!1;a[0]-t[0]===0?s=a[1]-t[1]>0?1:-1:i=a[0]-t[0]>0?1:-1;var n=!0;if(0!==i)for(var r=1;r<Math.abs(a[0]-t[0]);r++)2!==P(e,[t[0]+r*i,t[1]])&&(n=!1);else for(var o=1;o<Math.abs(a[1]-t[1]);o++)2!==P(e,[t[0],t[1]+o*s])&&(n=!1);return 1!==P(e,a)&&n}function y(e,t,a,i,s){var n=!1;return 1===t?n=function(e,t,a,i){var s=!1,n=[t[0]+1,t[1]];return!(!p.a.isEqual(i[3],[t[0],t[1]+1])||!p.a.isEqual(a,[i[3][0]+1,i[3][1]]))||!(!p.a.isEqual(i[3],[t[0],t[1]-1])||!p.a.isEqual(a,[i[3][0]+1,i[3][1]]))||(p.a.isEqual([t[0]+2,t[1]],a)&&(s=2===P(e,n)&&2===P(e,a)&&1===t[0]),p.a.isEqual([t[0]+1,t[1]],a)?s=2===P(e,a):(p.a.isEqual([t[0]+1,t[1]+1],a)||p.a.isEqual([t[0]+1,t[1]-1],a))&&(s=0===P(e,a)),s)}(e,a,i,s):3===t?n=function(e,t,a){return(p.a.isEqual([t[0]-1,t[1]+2],a)||p.a.isEqual([t[0]-1,t[1]-2],a)||p.a.isEqual([t[0]+1,t[1]+2],a)||p.a.isEqual([t[0]+1,t[1]-2],a)||p.a.isEqual([t[0]-2,t[1]+1],a)||p.a.isEqual([t[0]-2,t[1]-1],a)||p.a.isEqual([t[0]+2,t[1]+1],a)||p.a.isEqual([t[0]+2,t[1]-1],a))&&1!==P(e,a)}(e,a,i):4===t?n=M(e,a,i):5===t?n=k(e,a,i):9===t?n=k(e,a,i)||M(e,a,i):10===t&&(n=function(e,t,a,i){var s=i[1];if(p.a.isEqual(a,[0,6])&&p.a.isEqual(t,[0,4])&&s)return 2===P(e,[0,5])&&2===P(e,[0,6]);if(p.a.isEqual(a,[0,2])&&p.a.isEqual(t,[0,4])&&s)return 2===P(e,[0,1])&&2===P(e,[0,2])&&2===P(e,[0,3]);var n=!1;return Math.abs(a[0]-t[0])<2&&Math.abs(a[1]-t[1])<2&&(n=1!==P(e,a)),n}(e,a,i,s)),n}function B(e,t,a){var i=e.slice();return i[t[0]][t[1]]=a,i}function F(e,t,a,i){return p.a.isEqual(e[t[0]][t[1]],[0,10])&&p.a.isEqual(t,[7,4])&&p.a.isEqual(a,[7,6])?function(e){var t=B(e,[7,4],x),a=B(t,[7,5],[0,5]),i=B(a,[7,6],[0,10]);return B(i,[7,7],x)}(e):p.a.isEqual(e[t[0]][t[1]],[0,10])&&p.a.isEqual(t,[7,4])&&p.a.isEqual(a,[7,2])?function(e){var t=B(e,[7,0],x),a=B(t,[7,2],[0,10]),i=B(a,[7,3],[0,5]);return B(i,[7,4],x)}(e):p.a.isEqual(e[t[0]][t[1]],[1,10])&&p.a.isEqual(t,[0,4])&&p.a.isEqual(a,[0,6])?function(e){var t=B(e,[0,4],x),a=B(t,[0,5],[1,5]),i=B(a,[0,6],[1,10]);return B(i,[0,7],x)}(e):p.a.isEqual(e[t[0]][t[1]],[1,10])&&p.a.isEqual(t,[0,4])&&p.a.isEqual(a,[0,2])?function(e){var t=B(e,[0,0],x),a=B(t,[0,2],[1,10]),i=B(a,[0,3],[1,5]);return B(i,[0,4],x)}(e):p.a.isEqual(i[3],[t[0],t[1]+1])&&p.a.isEqual(e[t[0]][t[1]],[0,1])||p.a.isEqual(i[3],[t[0],t[1]-1])&&p.a.isEqual(e[t[0]][t[1]],[0,1])?I(e,t,a):p.a.isEqual(i[3],[t[0],t[1]+1])&&p.a.isEqual(e[t[0]][t[1]],[1,1])||p.a.isEqual(i[3],[t[0],t[1]-1])&&p.a.isEqual(e[t[0]][t[1]],[1,1])?L(e,t,a):function(e,t,a){var i=e[t[0]][t[1]].slice();return B(B(e,a,i),t,x)}(e,t,a)}function I(e,t,a){var i=B(e,t,x),s=B(i,[3,a[1]],x);return B(s,a,[0,1])}function L(e,t,a){var i=B(e,t,x),s=B(i,[4,a[1]],x);return B(s,a,[1,1])}var D=function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var s;Object(l.a)(this,a),(s=t.call(this,e)).setPosition=function(e,t){if(s.state.initialPosition){if(p.a.isEqual(s.state.initialPosition,[e,t]))return void s.setState({initialPosition:null});if(!1===function(e,t,a,i,s,n){var r=!1;return 0===a?r=S(e,t,i,s,n):1===a&&(r=y(e,t,i,s,n)),r&&n[2]===a}(s.state.piecePositions,s.state.piecePositions[s.state.initialPosition[0]][s.state.initialPosition[1]][1],s.state.piecePositions[s.state.initialPosition[0]][s.state.initialPosition[1]][0],s.state.initialPosition,[e,t],s.state.auxBoardState))return;var a=F(s.state.piecePositions,s.state.initialPosition,[e,t],s.state.auxBoardState),i=s.state.auxBoardState.slice();1===a[e][t][1]&&2===Math.abs(s.state.initialPosition[0]-e)?i[3]=[e,t]:i[3]=null,s.setState({auxBoardState:i}),N(s.hashPosition()).then((function(e){s.props.setBestMove(e)})),s.setState({initialPosition:null,piecePositions:a});var n=(i[2]+1)%2;i[2]=n,s.setState({auxBoardState:i})}else p.a.isEqual(s.state.piecePositions[e][t],x)||s.setState({initialPosition:[e,t]})},s.buildBoard=function(){return Object(i.jsx)("table",{className:"board",children:Object(i.jsx)("tbody",{className:"board",children:function e(t,a){for(var n=[],r=function(r){if("r"===t){var o=e("c",r),c=Object(i.jsx)("tr",{children:o},r);n.push(c)}else{var l=a%2===r%2?"whiteSquare":"blackSquare";n.push(function(e,t){var n=null,o=null;O.hasOwnProperty(s.state.piecePositions[e][t][0])&&(o=O[s.state.piecePositions[e][t][0]],n=f[s.state.piecePositions[e][t][1]]);var c=!!p.a.isEqual([e,t],s.state.initialPosition);return Object(i.jsx)("th",{className:"squareContainer",children:Object(i.jsx)(m,{selected:c,rowCord:a,colCord:r,color:l,pieceColor:o,pieceName:n,setPosition:s.setPosition})},r)}(a,r))}},o=0;o<8;o+=1)r(o);return n}("r")})})},s.hashCode=function(e){var t=0;if(0===e.length)return t;for(var a=0;a<e.length;a++){t=(t<<5)-t+e.charCodeAt(a),t&=t}return t},s.state={piecePositions:[[[1,5],[1,3],[1,4],[1,9],[1,10],[1,4],[1,3],[1,5]],[[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]],[[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]],[[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]],[[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]],[[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2],[2,2]],[[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1],[0,1]],[[0,5],[0,3],[0,4],[0,9],[0,10],[0,4],[0,3],[0,5]]],auxBoardState:[!0,!0,0,null],initialPosition:null},s.setPosition=s.setPosition.bind(Object(d.a)(s)),s.hashPosition=s.hashPosition.bind(Object(d.a)(s));var n=s.state.piecePositions.toString()+"|"+s.state.auxBoardState.toString(),r=s.hashCode(n);return s.props.setPositionHash(r),s}return Object(u.a)(a,[{key:"hashPosition",value:function(){var e=this.state.piecePositions.toString()+"|"+this.state.auxBoardState.toString(),t=this.hashCode(e);return this.props.setPositionHash(t),t}},{key:"render",value:function(){return this.buildBoard()}}]),a}(s.Component),T=(a(50),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).submitMove=function(e){e.preventDefault();for(var t=document.getElementById("moveForm").elements,a={},s=0;s<t.length;s++){var n=t[s];a[n.id]=n.value}return a.board=i.props.boardState.toString(),g()({method:"post",url:"".concat(q,"postmove"),data:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((function(e){return e}),(function(e){return e}))},i.state={},i.submitMove=i.submitMove.bind(Object(d.a)(i)),i}return Object(u.a)(a,[{key:"render",value:function(){return Object(i.jsxs)("form",{id:"moveForm",onSubmit:this.submitMove,encType:"multipart/form-data",children:[Object(i.jsx)("div",{className:"formTitle",children:Object(i.jsx)("h2",{children:"Create Trap"})}),Object(i.jsxs)("div",{className:"moveFormDiv",children:[Object(i.jsxs)("div",{className:"inputDiv",children:[Object(i.jsx)("label",{className:"formLabel",htmlFor:"risk",children:"Trap Name:"}),Object(i.jsx)("input",{className:"formInput",id:"name",required:!0,type:"text",placeholder:"Trap Name"}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"inputDiv",children:[Object(i.jsx)("label",{className:"formLabel",htmlFor:"desc",children:"Description:"}),Object(i.jsx)("br",{}),Object(i.jsx)("textarea",{required:!0,id:"desc",name:"dexc",rows:"7",cols:"30"})]}),Object(i.jsxs)("div",{className:"inputDiv",children:[Object(i.jsx)("label",{className:"formLabel",htmlFor:"reward",children:"Initial Piece Position"}),Object(i.jsx)("input",{className:"formInput",required:!0,id:"pos1",type:"text",placeholder:"f7, Ke1, etc."}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"inputDiv",children:[Object(i.jsx)("label",{className:"formLabel",htmlFor:"reward",children:"Final Piece Position"}),Object(i.jsx)("input",{className:"formInput",required:!0,id:"pos2",type:"text",placeholder:"f6, e2, etc."}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"inputDiv",children:[Object(i.jsx)("label",{className:"formLabel",htmlFor:"risk",children:"Risk Level:"}),Object(i.jsxs)("select",{className:"formInput",id:"risk",name:"risklist",form:"moveForm",children:[Object(i.jsx)("option",{value:"low",children:"Low"}),Object(i.jsx)("option",{value:"medium",children:"Medium"}),Object(i.jsx)("option",{value:"high",children:"High"}),"="]}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"inputDiv",children:[Object(i.jsx)("label",{className:"formLabel",htmlFor:"reward",children:"Reward Level:"}),Object(i.jsxs)("select",{className:"formInput",id:"reward",name:"rewardlist",form:"moveForm",children:[Object(i.jsx)("option",{value:"low",children:"Low"}),Object(i.jsx)("option",{value:"medium",children:"Medium"}),Object(i.jsx)("option",{value:"high",children:"High"})]}),Object(i.jsx)("br",{})]}),Object(i.jsxs)("div",{className:"inputDiv",children:[Object(i.jsx)("label",{className:"formLabel",htmlFor:"color",children:"Color to Play:"}),Object(i.jsxs)("select",{className:"formInput",id:"color",name:"colorlist",form:"moveForm",children:[Object(i.jsx)("option",{value:"white",children:"White"}),Object(i.jsx)("option",{value:"black",children:"Black"})]}),Object(i.jsx)("br",{})]})]}),Object(i.jsx)("div",{className:"submitContainer",children:Object(i.jsx)("input",{className:"submitButton",required:!0,type:"submit",value:"Submit"})})]})}}]),a}(s.Component)),H=(a(51),function(e){Object(b.a)(a,e);var t=Object(h.a)(a);function a(e){var i;return Object(l.a)(this,a),(i=t.call(this,e)).printBestMove=function(){var e=[];if(i.props.bestMove.data){for(var t=i.props.bestMove.data.length,a=[],s=[],n=[],r=[],o=[],c=[],l=0;l<t;l++)a.push(i.props.bestMove.data[l].trap.S),s.push(i.props.bestMove.data[l].risk.S),n.push(i.props.bestMove.data[l].reward.S),r.push(i.props.bestMove.data[l].initialPosition.S),o.push(i.props.bestMove.data[l].finalPosition.S),c.push(i.props.bestMove.data[l].desc.S);for(var u=0;u<t;u++)e.push({name:a[u],risk:s[u],reward:n[u],initialPos:r[u],finalPos:o[u],desc:c[u]})}return e},i.state={},i.printBestMove=i.printBestMove.bind(Object(d.a)(i)),i}return Object(u.a)(a,[{key:"render",value:function(){for(var e=this.printBestMove(),t=e.length,a=[],s=0;s<t;s++)console.log(e[s].name),a.push(Object(i.jsx)("div",{className:"trapBox",children:Object(i.jsx)("div",{className:"trapBorderExperiment",children:Object(i.jsxs)("div",{className:"trapContent",children:[Object(i.jsx)("h4",{className:"trapTitle",children:e[s].name}),Object(i.jsxs)("div",{className:"trapInfoContainer",children:[Object(i.jsxs)("p",{className:"trapInfo",children:[e[s].initialPos," -> ",e[s].finalPos]}),Object(i.jsxs)("p",{className:"trapInfo",children:["Risk: ",e[s].risk,", Reward: ",e[s].reward,"  "]}),Object(i.jsx)("p",{className:"trapInfo",children:e[s].desc})]})]})})},s+1));return a.push(Object(i.jsx)("div",{},t+1)),Object(i.jsxs)("div",{className:"infoContainer",children:[Object(i.jsx)("div",{className:"infoTitle",children:Object(i.jsx)("h2",{children:"Available Traps"})}),Object(i.jsx)("div",{className:"infoContentContainer",children:a})]})}}]),a}(s.Component)),R=(a(52),function(e){var t=e.id,a=e.name,s=e.checked,n=e.onChange,r=e.optionLabels,o=e.small,c=e.disabled;return Object(i.jsxs)("div",{className:"toggle-switch"+(o?" small-switch":""),children:[Object(i.jsx)("input",{type:"checkbox",name:a,className:"toggle-switch-checkbox",id:t,checked:s,onChange:function(e){return n(e.target.checked)},disabled:c}),t?Object(i.jsxs)("label",{className:"toggle-switch-label",htmlFor:t,tabIndex:c?-1:1,onKeyDown:function(e){!function(e){32===e.keyCode&&(e.preventDefault(),n(!s))}(e)},children:[Object(i.jsx)("span",{className:c?"toggle-switch-inner toggle-switch-disabled":"toggle-switch-inner","data-yes":r[0],"data-no":r[1],tabIndex:-1}),Object(i.jsx)("span",{className:c?"toggle-switch-switch toggle-switch-disabled":"toggle-switch-switch",tabIndex:-1})]}):null]})});R.defaultProps={optionLabels:["Play","Create"]};var K=R;var A=function(){var e=Object(s.useState)(0),t=Object(c.a)(e,2),a=t[0],n=t[1],r=Object(s.useState)(0),o=Object(c.a)(r,2),l=o[0],u=o[1],d=Object(s.useState)(!0),b=Object(c.a)(d,2),h=b[0],j=b[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"leftSide",children:Object(i.jsx)(D,{setPositionHash:n,setBestMove:u})}),Object(i.jsxs)("div",{className:"rightSide",children:[!1===h?Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"formComponentContainer",children:Object(i.jsx)(T,{boardState:a})})}):Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{className:"infoComponentContainer",children:Object(i.jsx)(H,{bestMove:l})})}),Object(i.jsx)("div",{className:"toggleContainer",children:Object(i.jsx)(K,{id:"functionToggle",checked:h,onChange:j})})]})]})},J=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,54)).then((function(t){var a=t.getCLS,i=t.getFID,s=t.getFCP,n=t.getLCP,r=t.getTTFB;a(e),i(e),s(e),n(e),r(e)}))};o.a.render(Object(i.jsx)(n.a.StrictMode,{children:Object(i.jsx)(A,{})}),document.getElementById("root")),J()}},[[53,1,2]]]);
//# sourceMappingURL=main.93eb921c.chunk.js.map