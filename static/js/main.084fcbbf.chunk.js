(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,t,a){},147:function(e,t,a){},157:function(e,t,a){},161:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(17),r=a.n(i),c=(a(85),a(3)),s=a(4),l=a(6),A=a(5),u=a(7),m=a(163),d=a(162),g=(a(87),a(89),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(A.a)(t).call(this,e))).getRandomNumberBetween=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.start=function(){a.changeToRed(),setTimeout(a.changeToGreen,1e3*a.getRandomNumberBetween(1,2))},a.end=function(){a.changeToBlue(),a.setState({instructions:"Information recorded!"})},a.changeToBlue=function(){a.setState({instructions:"Tap to Start"})},a.changeToRed=function(){a.setState({color:"#D63D1B",instructions:"".concat(a.maxTaps-a.state.count," more, Tap when screen turns green!"),lastStartTime:Date.now()})},a.changeToGreen=function(){a.setState({color:"#35CA4D",instructions:"Tap!",lastStartTime:Date.now()})},a.incrementCount=function(){a.setState(function(e){return{count:a.state.count+1}})},a.addReactionTime=function(e){a.props.addData(e)},a.handleClick=function(e){"#4AA6FC"===a.state.color?(a.start(),a.incrementCount()):"#D63D1B"===a.state.color?a.addReactionTime(Date.now()-a.state.lastStartTime):(a.incrementCount(),a.addReactionTime(Date.now()-a.state.lastStartTime),a.state.count<a.props.maxTaps?a.start():a.end())},a.state={count:0,color:"#4AA6FC",instructions:"Tap to Start",analysis:{mean:null,variance:null}},a.maxTaps=10,a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.createElement("div",{style:{background:this.state.color},onClick:this.handleClick,id:"gameArea"},this.state.instructions)}}]),t}(n.Component)),h=(a(91),a(71)),p=a.n(h),f=(a(93),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={cameraOn:!0,image:null},a.toggleCamera=function(){var e=a.state.cameraOn;a.setState({cameraOn:!e})},a.onTakePhoto=function(e){a.toggleCamera(),console.log(e),a.setState({image:e}),a.props.addSelfie(e)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.state.cameraOn?n.createElement(p.a,{style:{borderRadius:"0.5rem 0.5rem 0 0",width:"100%"},onTakePhoto:function(t){e.onTakePhoto(t)}}):n.createElement(n.Fragment,null,n.createElement("div",null,n.createElement("img",{className:"selfie",alt:"",src:this.state.image})));return n.createElement("div",null,n.createElement("div",{className:"cameraWindow"},t))}}]),t}(n.Component));a(95);function v(){new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=").play()}var E=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={event:{},data:[],isRecording:!1,startButton:!0,buttonMessage:"Start!"},a.orientation=function(e){var t=e.alpha,n=e.beta,o=e.gamma,i=a.props.addData;a.state.isRecording&&i({alpha:t,beta:n,gamma:o}),a.setState({event:{alpha:t,beta:n,gamma:o}})},a.startRecording=function(){a.setState({startButton:!1}),setTimeout(function(){return a.setState({buttonMessage:"Game Starting in 3..."})},0),setTimeout(function(){return a.setState({buttonMessage:"Game Starting in 2..."})},1e3),setTimeout(function(){return a.setState({buttonMessage:"Game Starting in 1..."})},2e3),setTimeout(function(){return a.setState({buttonMessage:"Information recorded!"})},3e3),setTimeout(function(){return a.setState({isRecording:!0})},3e3),setTimeout(a.props.toggleDone,13e3),setTimeout(v,13e3),setTimeout(v,13100),setTimeout(v,13200),setTimeout(function(){return a.setState({isRecording:!1})},13e3)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){window.DeviceOrientationEvent?window.addEventListener("deviceorientation",this.orientation,!1):console.log("DeviceOrientationEvent is not supported")}},{key:"componentWillUnmount",value:function(){window.DeviceOrientationEvent?window.removeEventListener("deviceorientation",this.orientation,!1):console.log("DeviceOrientationEvent is not supported")}},{key:"render",value:function(){var e=this.state.event,t=e.beta,a=e.gamma;return n.createElement("div",{className:"stack"},n.createElement("div",{className:"instructions"},n.createElement("p",{className:"instruction"},n.createElement("span",null,"Step 1:")," Stand on your left leg."),n.createElement("p",{className:"instruction"},n.createElement("span",null,"Step 2: "),"Hold your phone in your dominant hand."),n.createElement("p",{className:"instruction"},n.createElement("span",null,"Step 3: ")," Extend arms out to the side with palms down."),n.createElement("p",{className:"instruction"},n.createElement("span",null,"Step 4: ")," Wait for completion sound."),n.createElement("p",{className:"instruction"},"When you are ready, please press the Start button to begin the Balance test."),!this.state.isRecording&&n.createElement(d.a,{disabled:!this.state.startButton,type:"primary",icon:"play",onClick:this.startRecording},this.state.buttonMessage)),n.createElement("div",null,n.createElement("img",{alt:"",width:"100px",src:"balance.svg",style:{margin:"1rem",transform:"translate3d(".concat(a/180*50,"px, ").concat(Math.abs(t)/180*50,"px, 0)")}})))}}]),t}(n.Component),b=(a(145),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return n.createElement("div",{className:"stack"},n.createElement("h1",null,n.createElement("em",null,"uSober")),n.createElement("div",{className:"icons"},n.createElement("img",{src:"selfie.svg",width:"20%",alt:""}),n.createElement("img",{src:"tap.svg",width:"20%",alt:""}),n.createElement("img",{src:"balance2.svg",width:"20%",alt:""})),n.createElement("div",{className:"instructions"},n.createElement("p",null,"Using a multi stage process we aim to infer how likely it is you are cognitively impaired. Using computer vision, artificial intelligence, and data interpolation."),n.createElement("p",{className:"tos"},'The information is provided "as is" without warranty of any kind.')))}}]),t}(n.Component)),w=(a(147),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={reaction:null},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.state.reaction,n.createElement("div",{className:"stack"},n.createElement("h1",null,n.createElement("em",null,"Results")),n.createElement("h1",null,Math.round(Math.max(0,Math.min(100,100*this.getResults()))),"%"),n.createElement("p",null,n.createElement("span",null,"likelihood of being cognitively impaired.")),n.createElement("div",{className:"icons"},n.createElement("img",{src:"selfie.svg",width:"20%",alt:""}),n.createElement("img",{src:"tap.svg",width:"20%",alt:""}),n.createElement("img",{src:"balance2.svg",width:"20%",alt:""})),this.state.reaction,n.createElement("div",{className:"instructions"}))}},{key:"getResults",value:function(){var e=this.props,t=e.balanceData,a=e.reactionData,n=a.reduce(function(e,t){return e+t})/a.length,o=t.length>0?t.reduce(function(e,t){return{gamma:e.gamma+t.gamma,beta:e.beta+t.beta,alpha:e.alpha+t.alpha}}):{gamma:0,alpha:0,beta:0};o.gamma=o.gamma/t.length,o.beta=o.beta/t.length,o.alpha=o.alpha/t.alpha;var i={};i.gamma=t.reduce(function(e,t){return e+Math.abs(t.gamma-o.gamma)},0)||0,i.beta=t.reduce(function(e,t){return e+Math.abs(t.beta-o.beta)},0)||0,i.alpha=t.reduce(function(e,t){return e+Math.abs(t.alpha-o.alpha)},0)||0;var r=i.gamma+i.beta+i.alpha;return console.log("Balance Mean",o),console.log("Balance Variance",i),console.log("Sway",r),(r/1e4+(n-450)/40/3)/2}}]),t}(n.Component)),S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(A.a)(t)).call.apply(e,[this].concat(o)))).state={step:1,selfieData:null,reactionData:[],balanceData:[],isBalanceDone:!1},a.toggleBalanceDone=function(){a.setState({isBalanceDone:!0})},a.isNextDisabled=function(){var e=a.state,t=e.step,n=e.selfieData,o=e.reactionData,i=e.isBalanceDone;return 1!==t&&(2===t?!n:3===t?!(o.length>=10):4===t?!i:5!==t&&void 0)},a.nextStep=function(){var e=a.state.step%5+1;a.setState({step:e})},a.prevStep=function(){var e=Math.max(0,a.state.step-1);a.setState({step:e})},a.addBalance=function(e){a.setState({balanceData:a.state.balanceData.concat(e)}),console.log(a.state.balanceData.length)},a.addReaction=function(e){a.setState({reactionData:a.state.reactionData.concat(e)}),console.log(a.state.reactionData.length)},a.addSelfie=function(e){a.setState({selfieData:e}),console.log(a.state.selfieData)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.step,a=e.reactionData,o=e.balanceData,i=null;switch(t){case 1:i=n.createElement(b,null);break;case 2:i=n.createElement(f,{addSelfie:this.addSelfie});break;case 3:i=n.createElement(g,{maxTaps:10,data:a,addData:this.addReaction});break;case 4:i=n.createElement(E,{data:o,addData:this.addBalance,toggleDone:this.toggleBalanceDone});break;case 5:i=n.createElement(w,{reactionData:this.state.reactionData,balanceData:this.state.balanceData});break;default:i=null}return n.createElement(n.Fragment,null,n.createElement("div",{className:"main-container"},n.createElement("div",{className:"steps"},n.createElement(m.a,{initial:0,size:"small",current:t-1},n.createElement(m.a.Step,{title:"Description",description:"Readme please \ud83d\ude0a"}),n.createElement(m.a.Step,{title:"Selfie",description:"Ai on selfies \ud83e\udd33"}),n.createElement(m.a.Step,{title:"Speed Game",description:"Fast enough?\u26a1"}),n.createElement(m.a.Step,{title:"Balance",description:"Left Leg only \u2696"}),n.createElement(m.a.Step,{title:"Results",description:"uSober bro? \ud83c\udf7a"}))),n.createElement("div",{className:"card"},i,n.createElement("div",{className:"footer"},n.createElement("p",{className:"nextLabel"},5===t?"Restart":"Next"),n.createElement(d.a,{type:"primary",size:"large",icon:"right",shape:"circle",disabled:this.isNextDisabled(),onClick:this.nextStep})))))}}]),t}(n.Component),D=(a(157),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(A.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement(S,null)}}]),t}(n.Component)),k=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function y(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(o.a.createElement(D,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/web",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/web","/service-worker.js");k?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):y(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):y(t,e)})}}()},80:function(e,t,a){e.exports=a(161)},85:function(e,t,a){},87:function(e,t,a){},89:function(e,t,a){},91:function(e,t,a){},95:function(e,t,a){}},[[80,2,1]]]);
//# sourceMappingURL=main.084fcbbf.chunk.js.map