(function(t){function e(e){for(var r,o,s=e[0],c=e[1],l=e[2],f=0,d=[];f<s.length;f++)o=s[f],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},a={app:0},i=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),a={class:"app__inside"},i=Object(r["f"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"cog",class:"svg-inline--fa fa-cog fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[Object(r["f"])("defs",null,[Object(r["f"])("linearGradient",{id:"gradient",x1:"0%",y1:"50%",x2:"100%",y2:"0%"},[Object(r["f"])("stop",{offset:"0%",style:{"stop-color":"rgb(217, 26, 255)"}}),Object(r["f"])("stop",{offset:"100%",style:{"stop-color":"rgb(26, 110, 255)"}})])]),Object(r["f"])("path",{fill:"url(#gradient)",d:"M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"})],-1),o={class:"board-task"},s={class:"error task-list__error"},c={class:"input-task__error error"},l=Object(r["f"])("button",{type:"submit",class:"button--basic button--add button"}," Add task ",-1);function u(t,e){var n=Object(r["i"])("tasks-list");return Object(r["g"])(),Object(r["e"])("div",a,[Object(r["f"])(r["b"],{name:"rotate-fade"},{default:Object(r["m"])((function(){return[Object(r["n"])(Object(r["f"])("button",{class:"button button--icon gears",onClick:e[1]||(e[1]=function(e){return t.play=!t.play})},[i],512),[[r["l"],t.play]])]})),_:1}),Object(r["f"])("main",{class:["board",{rolling:t.rolling,blur:!t.play}],onClick:e[2]||(e[2]=function(){return t.roll.apply(t,arguments)})},[Object(r["f"])("span",o,Object(r["j"])(t.rolledTask),1),(Object(r["g"])(!0),Object(r["e"])(r["a"],null,Object(r["h"])(t.backgroundArray,(function(t,e){return Object(r["g"])(),Object(r["e"])("div",{class:"background",style:t,key:e},null,4)})),128))],2),Object(r["f"])("form",{class:["form",{hide:t.play}],onSubmit:e[6]||(e[6]=Object(r["o"])((function(){return t.addTask.apply(t,arguments)}),["prevent"]))},[Object(r["f"])("button",{type:"button",class:"button--basic button button--clear",onClick:e[3]||(e[3]=function(){return t.clear.apply(t,arguments)})}," Clear all "),Object(r["f"])("button",{type:"button",class:"button--prime button button--roll",onClick:e[4]||(e[4]=function(){return t.start.apply(t,arguments)})}," Lets roll "),Object(r["f"])(n,{"onList-change":t.onListChange,list:t.tasksList},null,8,["onList-change","list"]),Object(r["f"])(r["b"],{name:"slide-fade"},{default:Object(r["m"])((function(){return[Object(r["n"])(Object(r["f"])("span",s,"Please, add at least two tasks.",512),[[r["l"],t.errorNumber]])]})),_:1}),Object(r["n"])(Object(r["f"])("input",{ref:"inputTask",class:["input-task input",{"input--error":t.errorLength}],placeholder:"Input task",type:"text","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.mainTask=e})},null,2),[[r["k"],t.mainTask]]),Object(r["f"])(r["b"],{name:"slide-fade"},{default:Object(r["m"])((function(){return[Object(r["n"])(Object(r["f"])("span",c,"Please, enter at least one character.",512),[[r["l"],t.errorLength]])]})),_:1}),l],34)])}n("99af"),n("fb6a"),n("498a");function f(t,e){var n=Object(r["i"])("task");return Object(r["g"])(),Object(r["e"])(r["c"],{tag:"ul",name:"slide-left",class:"task-list"},{default:Object(r["m"])((function(){return[(Object(r["g"])(!0),Object(r["e"])(r["a"],null,Object(r["h"])(t.reverseList,(function(e){var a=e.cont,i=e.id;return Object(r["g"])(),Object(r["e"])(n,{active:t.active,task:a,id:i,"onDelete-task":t.onDeleteTask,"onChange-task":t.onChange,"onChange-active":t.changeActive,key:"#".concat(i)},null,8,["active","task","id","onDelete-task","onChange-task","onChange-active"])})),128))]})),_:1})}n("c740"),n("a434");var d=Object(r["f"])("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"trash-alt",class:"svg-inline--fa fa-trash-alt fa-w-14",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512"},[Object(r["f"])("path",{fill:"currentColor",d:"M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"})],-1);function h(t,e){return Object(r["g"])(),Object(r["e"])("li",{onClick:e[5]||(e[5]=function(e){return t.$emit("change-active",t.id)}),class:["task",{edit:t.edit}]},[Object(r["n"])(Object(r["f"])("input",{type:"text",readonly:!t.edit,class:["task__text input",{readonly:!t.edit,"input--error":t.error}],"onUpdate:modelValue":e[1]||(e[1]=function(e){return t.propTask=e}),size:t.taskLength,maxlength:t.maxLength,onKeyup:e[2]||(e[2]=function(){return t.typingTimer.apply(t,arguments)}),onKeydown:e[3]||(e[3]=function(){return t.clearTimeout.apply(t,arguments)})},null,42,["readonly","size","maxlength"]),[[r["k"],t.propTask]]),Object(r["f"])("button",{type:"button",class:"button button--basic button--square",onClick:e[4]||(e[4]=function(e){return t.$emit("delete-task",t.id)})},[d])],2)}n("d3b7"),n("25f0");var b={name:"TasksListElement",props:["task","id","active"],data:function(){return{readonly:!0,propTask:this.task,error:!1,timer:null,interval:1e3,maxLength:115}},computed:{edit:function(){return this.active==this.id},taskLength:function(){return this.propTask.length}},methods:{typingTimer:function(){clearTimeout(this.timer),this.timer=setTimeout(this.changeEmmit,this.interval)},clearTimeout:function(t){function e(){return t.apply(this,arguments)}return e.toString=function(){return t.toString()},e}((function(){clearTimeout(this.timer)})),changeEmmit:function(){this.taskLength>0?(this.error=!1,this.$emit("change-task",this.propTask,this.id)):this.error=!0}}};b.render=h;var p=b,g={props:["list"],name:"TasksList",data:function(){return{tasksList:[],active:null}},computed:{reverseList:function(){return this.tasksList.slice().reverse()},index:function(t){return this.tasksList.findIndex((function(e){return e.id==t}))}},methods:{changeActive:function(t){this.active=t},onDeleteTask:function(t){var e=this.tasksList.findIndex((function(e){return e.id==t}));this.tasksList.splice(e,1)},onChange:function(t,e){var n=t.trim();if(n.length>0){var r=this.tasksList.findIndex((function(t){return t.id==e}));this.tasksList[r].cont=t}}},created:function(){this.tasksList=this.list},watch:{tasksList:{deep:!0,handler:function(){this.$emit("list-change",this.tasksList)}},list:function(){this.tasksList=this.list}},components:{task:p}};g.render=f;var k=g,m={name:"App",data:function(){return{mainTask:"",tasksList:[],taskIndex:0,rolledTask:"Click to roll",errorLength:!1,errorNumber:!1,play:!1,rolling:!1,backgroundArray:[{backgroundImage:"linear-gradient(to right top, rgb(121, 255, 26), rgb(26, 26, 255))",opacity:1},{backgroundImage:"linear-gradient(to right top, rgb(121, 255, 26), rgb(26, 26, 255))",opacity:1}]}},methods:{onListChange:function(t){this.rolledTask="Click to roll",this.tasksList=t,1==this.errorNumber&&this.tasksList.length>1&&(this.errorNumber=!1)},clear:function(){this.tasksList=[]},addTask:function(){var t=this.mainTask;t=t.trim(),this.$refs.inputTask.focus(),t.length>0?(t=t.charAt(0).toUpperCase()+t.slice(1),this.tasksList.push({cont:t,id:this.taskIndex}),this.mainTask="",this.errorLength=!1,this.taskIndex++):this.errorLength=!0},start:function(){this.tasksList.length>1?(this.errorNumber=!1,this.play=!0):this.errorNumber=!0},roll:function(){var t=this;if(1!=this.rolling){var e=this.tasksList.length,n=Math.floor(Math.random()*e),r=Math.floor(360*Math.random()),a=Math.floor(360*Math.random());this.rolling=!0,this.backgroundArray[0].backgroundImage="linear-gradient(to top right, hsl(\n          ".concat(r,"\n          , 100%, 55%), hsl(\n          ").concat(a,"\n          , 100%, 55%))"),this.backgroundArray[0].opacity=1,this.backgroundArray[1].opacity=0,setTimeout((function(){return t.rolledTask=t.tasksList[n].cont}),500),setTimeout((function(){t.backgroundArray.reverse(),t.rolling=!1}),1e3)}}},components:{TasksList:k}};n("64be");m.render=u;var v=m,j=n("9483");Object(j["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),Object(r["d"])(v).mount("#app")},"64be":function(t,e,n){"use strict";n("c894")},c894:function(t,e,n){}});
//# sourceMappingURL=app.33c69f71.js.map