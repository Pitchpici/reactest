(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(29)},2:function(e){e.exports=[{id:1,name:"Simba",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG4.png"},{id:2,name:"Nala",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG79.png"},{id:3,name:"Pumba",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG74.png"},{id:4,name:"Timon",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG73.png"},{id:5,name:"Mufasa",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG26.png"},{id:6,name:"Scar",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG55.png"},{id:7,name:"Baboon",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG50.png"},{id:8,name:"Scar",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG97.png"},{id:9,name:"Nala",image:"http://pngimg.com/uploads/lion_king/lion_king_PNG14.png"}]},22:function(e,t,a){},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(10),i=a.n(c),o=(a(22),a(11)),s=a(12),l=a(15),m=a(13),g=a(16),u=a(2),p=(a(23),function(e){return r.a.createElement("div",{className:"wrapper"},e.children)}),d=(a(24),function(e){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"img-container"},r.a.createElement("a",{onClick:function(){return e.selectCharacter(e.name)},className:0===e.currentScore?"imgStyle imgStylePrevious":"imgStyle"},r.a.createElement("img",{className:"cusImg",alt:e.name,src:e.image}))))}),h=a(31),k=a(32),S=(a(25),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={currentScore:0,bestScore:0,message:"Click an image to begin.",characters:u,unselectedCharacters:u},a.mixtiles=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),n=e[t];e[t]=e[a],e[a]=n}},a.handleButtonClick=function(e){e.preventDefault(),a.setState({currentScore:0,bestScore:0,message:"Click an image to begin.",allCharacters:u,unselectedCharacters:u})},a.selectCharacter=function(e){var t=a.state.unselectedCharacters.find(function(t){return t.name===e});if(console.log(t),void 0===t)a.setState({message:"You guessed incorrectly!",bestScore:a.state.currentScore>a.state.bestScore?a.state.currentScore:a.state.bestScore,currentScore:0,allCharacters:u,unselectedCharacters:u});else{var n=a.state.unselectedCharacters.filter(function(t){return t.name!==e});a.setState({message:"You guessed correctly!",currentScore:a.state.currentScore+1,allCharacters:u,unselectedCharacters:n})}a.mixtiles(u)},a}return Object(g.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null,r.a.createElement("h2",{className:"App-title"},"CLICKY GAME"),r.a.createElement("p",{className:"message"},"+++++++++++++++++++++++++++++++"),r.a.createElement("p",{className:"message"},this.state.message),r.a.createElement("p",{className:"message"},"+++++++++++++++++++++++++++++++"),r.a.createElement("p",{className:"message"},"Current Score: ",this.state.currentScore),r.a.createElement("p",{className:"message"},"Top Score: ",this.state.bestScore),r.a.createElement(k.a,{color:"danger",onClick:this.handleButtonClick}," Start Over "))),r.a.createElement(p,null,this.state.characters.map(function(t){return r.a.createElement(d,{key:t.id,name:t.name,image:t.image,currentScore:e.state.currentScore,selectCharacter:e.selectCharacter})})))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(28);i.a.render(r.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[17,1,2]]]);
//# sourceMappingURL=main.546ba754.chunk.js.map