(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,a){},32:function(e,t,a){e.exports=a(41)},41:function(e,t,a){"use strict";a.r(t);var n,i=a(0),r=a.n(i),c=a(25),l=a.n(c),o=a(5),u=a(17),s=a(8),d=a(30),p=a(1),m=a(43),f=a(42),h=Object(f.a)({APP:{STATE:{CHECK:void 0,LOAD:void 0,SET:void 0},CREATE_TASK:{ADD:void 0},EDIT_TASK:{TITLE:[function(e){return{title:e}},function(e,t,a){return{id:t,filterPriority:a}}],PRIORITY:[function(e){return{priority:e}},function(e,t,a){return{id:t,filterPriority:a}}],DESCRIPTION:[function(e){return{description:e}},function(e,t,a){return{id:t,filterPriority:a}}],EXECUTION_DATE:[function(e){return{executionDate:e}},function(e,t,a){return{id:t,filterPriority:a}}],EXECUTION_TIME:[function(e){return{executionTime:e}},function(e,t,a){return{id:t,filterPriority:a}}]},COMPLETED_TASK:{COMPLETED:[function(e){return{completed:e}},function(e,t,a){return{id:t,filterPriority:a}}],COMPLETED_DATE:[function(e){return{completedDate:e}},function(e,t,a){return{id:t,filterPriority:a}}],COMPLETED_TIME:[function(e){return{completedTime:e}},function(e,t,a){return{id:t,filterPriority:a}}]},OVERDUE_TASK:{OVERDUE:[function(e){return{overdue:e}},function(e,t){return{id:t}}]},DELETED_TASK:{DELETE:[function(e){return{deleteTask:e}},function(e,t,a){return{id:t,filterPriority:a}}]},FILTERED_TASK:{ALL:void 0,P1:void 0,P2:void 0,P3:void 0}}}),O=h.app.state.set,k=h.app.state.check,E=h.app.state.load,T=h.app.createTask.add,b=(h.app.createTask.p1,h.app.createTask.p2,h.app.createTask.p3,h.app.editTask.title),y=h.app.editTask.description,v=h.app.editTask.priority,D=h.app.editTask.executionDate,j=h.app.editTask.executionTime,C=h.app.deletedTask.delete,x=h.app.completedTask.completed,_=h.app.completedTask.completedDate,P=h.app.completedTask.completedTime,g=h.app.overdueTask.overdue,N=h.app.filteredTask.all,S=h.app.filteredTask.p1,w=h.app.filteredTask.p2,A=h.app.filteredTask.p3,I=Object(m.a)((n={},Object(s.a)(n,E,function(e,t){return Object(p.a)({},e,{task:t.payload.task,filter:t.payload.filter,filteredTask:t.payload.filteredTask})}),Object(s.a)(n,T,function(e,t){return Object(p.a)({},e,{task:Object(d.a)(e.task).concat([t.payload])})}),Object(s.a)(n,v,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{priority:t.payload.priority}):e})})}),Object(s.a)(n,b,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{title:t.payload.title}):e})})}),Object(s.a)(n,y,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{description:t.payload.description}):e})})}),Object(s.a)(n,D,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{executionDate:t.payload.executionDate}):e})})}),Object(s.a)(n,j,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{executionTime:t.payload.executionTime}):e})})}),Object(s.a)(n,C,function(e,t){return Object(p.a)({},e,{task:e.task.filter(function(e){return e.id!==t.meta.id})})}),Object(s.a)(n,x,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{isCompleted:t.payload.completed}):e})})}),Object(s.a)(n,_,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{completedDate:t.payload.completedDate}):e})})}),Object(s.a)(n,P,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{completedTime:t.payload.completedTime}):e})})}),Object(s.a)(n,g,function(e,t){return Object(p.a)({},e,{task:e.task.map(function(e){return e.id===t.meta.id?Object(p.a)({},e,{isOverdue:t.payload.overdue}):e})})}),Object(s.a)(n,N,function(e,t){return Object(p.a)({},e,{filteredTask:[],filter:t.payload})}),Object(s.a)(n,S,function(e,t){return Object(p.a)({},e,{filter:t.payload,filteredTask:e.task.filter(function(e){return e.priority===t.payload})})}),Object(s.a)(n,w,function(e,t){return Object(p.a)({},e,{filter:t.payload,filteredTask:e.task.filter(function(e){return e.priority===t.payload})})}),Object(s.a)(n,A,function(e,t){return Object(p.a)({},e,{filter:t.payload,filteredTask:e.task.filter(function(e){return e.priority===t.payload})})}),n),{task:[],filter:"All",filteredTask:[]}),K=Object(u.c)({TODO:I}),B=function(e){return e.TODO.task},L=JSON.parse(localStorage.getItem("state")),F={task:[],filter:"All",filteredTask:[]},M=function(e){return function(t){return function(a){switch(a.type){case k.toString():null!==L?e.dispatch(E(L.TODO)):e.dispatch(E(F));break;case O.toString():localStorage.setItem("state",JSON.stringify(e.getState()));break;default:return t(a)}return t(a)}}},R=a(2),U=a(3),X=a(6),V=a(4),J=a(7),q=(a(11),function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).handleOnClickAll=function(){(0,a.props.filteredAll)("All")},a.handleOnClickP1=function(){(0,a.props.filteredP1)("P1")},a.handleOnClickP2=function(){(0,a.props.filteredP2)("P2")},a.handleOnClickP3=function(){(0,a.props.filteredP3)("P3")},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"task-filter"},r.a.createElement("button",{className:"task-filter__btn",onClick:this.handleOnClickAll},"All"),r.a.createElement("button",{className:"task-filter__btn",onClick:this.handleOnClickP1},"P1"),r.a.createElement("button",{className:"task-filter__btn",onClick:this.handleOnClickP2},"P2"),r.a.createElement("button",{className:"task-filter__btn",onClick:this.handleOnClickP3},"P3"))}}]),t}(i.PureComponent)),H={filteredAll:N,filteredP1:S,filteredP2:w,filteredP3:A},Y=Object(o.b)(function(e){return{task:B(e)}},H)(q),W=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).state={currentTitleEdit:null,title:a.props.text},a.handleOnChangeTitle=function(e){var t=e.target.value;a.setState({title:t})},a.handleOnClickTitle=function(e){var t=a.props.id;a.setState({currentTitleEdit:t})},a.handleOnBlurTitle=function(e){var t=a.props,n=t.editTitle,i=t.id,r=t.filtered,c=t.priority;n(a.state.title,i,c),r(),a.setState({currentTitleEdit:null})},a.handleOnKeyDownTitle=function(e){var t=a.props,n=t.editTitle,i=t.id,r=t.filtered,c=t.priority,l=a.state.title;13===e.keyCode&&(n(l,i,c),r(),a.setState({currentTitleEdit:null}))},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,n=this.state,i=n.currentTitleEdit,c=n.title;return r.a.createElement(r.a.Fragment,null,i===t?r.a.createElement("input",{className:"task__edit--title",name:"title",value:c,onChange:this.handleOnChangeTitle,onKeyDown:this.handleOnKeyDownTitle,onBlur:this.handleOnBlurTitle,autoFocus:!0,type:"text"}):r.a.createElement("h1",{className:"task__title",onClick:this.handleOnClickTitle},a))}}]),t}(i.PureComponent),z={editTitle:b},G=Object(o.b)(function(e){return{}},z)(W),Q=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).state={currentDescriptionEdit:null,description:a.props.text},a.handleOnChangeDescription=function(e){var t=e.target.value;a.setState({description:t})},a.handleOnClickDescription=function(e){var t=a.props.id;a.setState({currentDescriptionEdit:t})},a.handleOnBlurDescription=function(e){var t=a.props,n=t.editDescription,i=t.id,r=t.filtered,c=t.priority;n(a.state.description,i,c),r(),a.setState({currentDescriptionEdit:null})},a.handleOnKeyDownDescription=function(e){var t=a.props,n=t.editDescription,i=t.id,r=t.filtered,c=t.priority,l=a.state.description;13===e.keyCode&&(n(l,i,c),r(),a.setState({currentDescriptionEdit:null}))},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,n=this.state,i=n.currentDescriptionEdit,c=n.description;return r.a.createElement(r.a.Fragment,null,i===t?r.a.createElement("textarea",{className:"task__edit--description",name:"description",value:c,onChange:this.handleOnChangeDescription,onKeyDown:this.handleOnKeyDownDescription,onBlur:this.handleOnBlurDescription,autoFocus:!0}):r.a.createElement("p",{className:"task__description",onClick:this.handleOnClickDescription},a))}}]),t}(i.PureComponent),Z={editDescription:y},$=Object(o.b)(function(e){return{}},Z)(Q),ee=function(e){return r.a.createElement("select",{name:"task-priority",onChange:e.onChange,onSelect:e.onSelected,onBlur:e.onBlur,autoFocus:!0},r.a.createElement("option",{value:"P1"},"P1"),r.a.createElement("option",{value:"P2"},"P2"),r.a.createElement("option",{value:"P3"},"P3"))},te=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).state={currentPriorityEdit:null,priority:""},a.handleOnChangePriority=function(e){var t=e.target.value;a.setState({priority:t})},a.handleOnClickPriority=function(e){var t=a.props.id;a.setState({currentPriorityEdit:t})},a.handleOnBlurPriority=function(e){var t=e.target.value,n=a.props,i=n.editPriority,r=n.filtered;i(t,a.state.currentPriorityEdit),r(),a.setState({currentPriorityEdit:null,currentPriorityValue:""})},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){var e=this.props,t=e.id,a=e.text,n=this.state.currentPriorityEdit;return r.a.createElement(r.a.Fragment,null,n===t?r.a.createElement(ee,{onChange:this.handleOnChangePriority,onBlur:this.handleOnBlurPriority}):r.a.createElement("p",{className:"task__priority task__priority--".concat(a.toLowerCase()),onClick:this.handleOnClickPriority},a))}}]),t}(i.PureComponent),ae={editPriority:v},ne=Object(o.b)(function(e){return{}},ae)(te),ie=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).state={currentExecutionDateEdit:null},a.handleOnChangeExecutionDate=function(e){var t=e.target.value;a.setState({executionDate:t})},a.handleOnClickExecutionDate=function(e){var t=a.props.id;a.setState({currentExecutionDateEdit:t})},a.handleOnBlurExecutionDate=function(e){var t=a.props,n=t.editExecutionDate,i=t.id,r=t.filtered,c=t.priority;n(a.state.executionDate,i,c),r(),a.setState({currentExecutionDateEdit:null})},a.handleOnKeyDownExecutionDate=function(e){var t=a.props,n=t.editExecutionDate,i=t.id,r=t.filtered,c=t.priority,l=a.state.executionDate;13===e.keyCode&&(n(l,i,c),r(),a.setState({currentExecutionDateEdit:null}))},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){var e=this.state.currentExecutionDateEdit,t=this.props,a=t.id,n=t.text;return r.a.createElement("li",{className:"execution__item"},e===a?r.a.createElement("input",{className:"task__edit--date",name:"executionDate",onChange:this.handleOnChangeExecutionDate,onKeyDown:this.handleOnKeyDownExecutionDate,onBlur:this.handleOnBlurExecutionDate,autoFocus:!0,type:"date"}):r.a.createElement("span",{className:"execution__date",onClick:this.handleOnClickExecutionDate},"Date: ",n))}}]),t}(i.PureComponent),re={editExecutionDate:D},ce=Object(o.b)(function(e){return{}},re)(ie),le=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).state={currentExecutionTimeEdit:null},a.handleOnChangeExecutionTime=function(e){var t=e.target.value;a.setState({executionTime:t})},a.handleOnClickExecutionTime=function(e){var t=a.props.id;a.setState({currentExecutionTimeEdit:t})},a.handleOnBlurExecutionTime=function(e){var t=a.props,n=t.editExecutionTime,i=t.id,r=t.filtered,c=t.priority;n(a.state.executionTime,i,c),r(),a.setState({currentExecutionTimeEdit:null})},a.handleOnKeyDownExecutionTime=function(e){var t=a.props,n=t.editExecutionTime,i=t.id,r=t.filtered,c=t.priority,l=a.state.executionTime;13===e.keyCode&&(n(l,i,c),r(),a.setState({currentExecutionTimeEdit:null}))},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){var e=this.state.currentExecutionTimeEdit,t=this.props,a=t.id,n=t.text;return r.a.createElement("li",{className:"execution__item"},e===a?r.a.createElement("input",{className:"task__edit--time",name:"executionTime",onChange:this.handleOnChangeExecutionTime,onKeyDown:this.handleOnKeyDownExecutionTime,onBlur:this.handleOnBlurExecutionTime,autoFocus:!0,type:"time"}):r.a.createElement("span",{className:"execution__date",onClick:this.handleOnClickExecutionTime},"Time: ",n))}}]),t}(i.PureComponent),oe={editExecutionTime:j},ue=Object(o.b)(function(e){return{}},oe)(le),se=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).handleOnClickCompleted=function(e){var t=a.props,n=t.id,i=t.getDate,r=t.completedTask,c=t.completedTaskDate,l=t.completedTaskTime,o=t.task,u=t.filtered,s=i(),d=s.year,p=s.month,m=s.date,f=s.hours,h=s.minutes,O=o.findIndex(function(e){return e.id===n});o[O].isCompleted?(r(!1,n),c("",n),l("",n),u()):(r(!0,n),c("".concat(d,"-").concat(p,"-").concat(m),n),l("- ".concat(f,":").concat(h),n),u())},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){var e=this.props,t=e.date,a=e.time;return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",{className:"task__completed-date"},"Date completed: ",t," ",a),r.a.createElement("button",{className:"task__completed-btn",onClick:this.handleOnClickCompleted},"Completed"))}}]),t}(i.PureComponent),de={completedTask:x,completedTaskDate:_,completedTaskTime:P},pe=Object(o.b)(function(e){return{task:B(e)}},de)(se),me=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).handleOnClickDelete=function(e){var t=a.props,n=t.deleteTask,i=t.id,r=t.priority,c=t.filtered;n(!0,i,r),c()},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:"task__delete-btn",onClick:this.handleOnClickDelete},"Delete"))}}]),t}(i.PureComponent),fe={deleteTask:C},he=Object(o.b)(function(e){return{}},fe)(me),Oe=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).checkOverdueTask=function(){var e=a.props.task,t=a.props.overdueTask,n=a.getDate(),i=n.year,r=n.month,c=n.date,l=n.hours,o=n.minutes,u=+"".concat(i).concat(r).concat(c),s=+"".concat(l).concat(o);e.filter(function(e){return!1===e.isCompleted}).map(function(e){return{date:""!==e.executionDate&&void 0!==e.executionDate?parseInt(e.executionDate.replace(/[^\d+]/g,""),10):"",time:""!==e.executionTime&&void 0!==e.executionTime?parseInt(e.executionTime.replace(/[^\d+]/g,""),10):"",id:e.id}}).forEach(function(e){""===e.date&&""===e.time?t(!1,e.id):e.date<u?t(!0,e.id):e.date===u?e.time>s||""===e.time?t(!1,e.id):t(!0,e.id):t(!1,e.id)})},a.getDate=function(){var e=(new Date).getFullYear(),t=(new Date).getDate();t<10&&(t="0".concat(t));var a=(new Date).getMonth()+1;a<10&&(a="".concat(a));var n=(new Date).getHours();n<10&&(n="0".concat(n));var i=(new Date).getMinutes();return i<10&&(i="0".concat(i)),{year:e,date:t,month:a,hours:n,minutes:i}},a.filteredOnChangeTask=function(){var e=a.props,t=e.filter,n=e.filteredP1,i=e.filteredP2,r=e.filteredP3,c="P1",l="P2",o="P3";switch(t){case c:n(c);break;case l:i(l);break;case o:r(o);break;default:return null}},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.setState;window.addEventListener("unload",function(){t()}),this.getProps=setTimeout(function(){e.overdueTask=setInterval(e.checkOverdueTask,6e4)},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.overdueTask),clearTimeout(this.getProps)}},{key:"render",value:function(){var e=this,t=this.props,a=t.filter,n=t.task,i=t.filteredTask,c=[];return c="All"!==a?i:n,r.a.createElement("section",{className:"task-list"},r.a.createElement(Y,null),c.map(function(t){return r.a.createElement("div",{className:"task ".concat(t.isCompleted?"task--completed":""," ").concat(t.isOverdue?"task--overdue":""),key:t.id},r.a.createElement(ne,{id:t.id,text:t.priority,filtered:e.filteredOnChangeTask}),r.a.createElement(he,{id:t.id,priority:t.priority,filtered:e.filteredOnChangeTask}),r.a.createElement(G,{id:t.id,text:t.title,priority:t.priority,filtered:e.filteredOnChangeTask}),r.a.createElement($,{id:t.id,text:t.description,priority:t.priority,filtered:e.filteredOnChangeTask}),r.a.createElement("div",{className:"task__execution"},r.a.createElement("p",{className:"task__execution-title"},"Execution:"),r.a.createElement("ul",{className:"task__execution-list"},r.a.createElement(ce,{id:t.id,text:t.executionDate,filtered:e.filteredOnChangeTask}),r.a.createElement(ue,{id:t.id,text:t.executionTime,filtered:e.filteredOnChangeTask}))),r.a.createElement(pe,{id:t.id,date:t.completedDate,time:t.completedTime,getDate:e.getDate,filtered:e.filteredOnChangeTask}))}))}}]),t}(i.PureComponent),ke={overdueTask:g,filteredP2:w,filteredP1:S,filteredP3:A,setState:O},Ee=Object(o.b)(function(e){return{task:B(e),filter:function(e){return e.TODO.filter}(e),filteredTask:function(e){return e.TODO.filteredTask}(e)}},ke)(Oe),Te=function(e){return r.a.createElement("h3",{className:e.class},e.children)},be=function(e){function t(){var e,a;Object(R.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(X.a)(this,(e=Object(V.a)(t)).call.apply(e,[this].concat(i)))).state={id:Date.now(),title:"",description:"",priority:"",executionDate:"",executionTime:"",isCompleted:!1,isOverdue:!1,completedDate:"",completedTime:""},a.handleOnChange=function(e){var t=e.target,n=t.value,i=t.name;a.setState(Object(s.a)({},i,n))},a.handleOnClickAddTask=function(e){var t=a.props.createTask,n=a.state,i=n.title,r=n.description,c=n.priority,l=n.id;""!==i&&""!==r&&""!==c&&(e.preventDefault(),t(a.state),a.setState({id:l+1,title:"",description:"",priority:"",executionDate:"",executionTime:""}))},a}return Object(J.a)(t,e),Object(U.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.checkState)()}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,n=e.priority,i=e.executionDate,c=e.executionTime;return r.a.createElement("section",{className:"creating-task"},r.a.createElement("form",{className:"",method:"#"},r.a.createElement("div",{className:"add-title"},r.a.createElement("label",{className:"add-title__label"},r.a.createElement(Te,{class:"add-title__text"},"Title task: "),r.a.createElement("input",{className:"add-title__field",type:"text",placeholder:"Enter title",name:"title",value:t,onChange:this.handleOnChange,required:!0}))),r.a.createElement("div",{className:"add-description"},r.a.createElement("label",{className:"add-description__label"},r.a.createElement(Te,{class:"add-description__text"},"Description task: "),r.a.createElement("textarea",{className:"add-description__textarea",placeholder:"Enter description",name:"description",value:a,onChange:this.handleOnChange,required:!0}))),r.a.createElement("div",{className:"add-priority"},r.a.createElement("label",{className:"add-priority__label"},r.a.createElement(Te,{class:"add-priority__text"},"Priority task: "),r.a.createElement("select",{className:"add-priority__field",name:"priority",value:n,onChange:this.handleOnChange,required:!0},r.a.createElement("option",{value:"",disabled:!0}),r.a.createElement("option",{value:"P1"},"P1"),r.a.createElement("option",{value:"P2"},"P2"),r.a.createElement("option",{value:"P3"},"P3")))),r.a.createElement("div",{className:"add-date"},r.a.createElement("label",{className:"add-date__label"},r.a.createElement(Te,{class:"add-description__text"},"Execution date: "),r.a.createElement("input",{className:"add-date__field",name:"executionDate",value:i,onChange:this.handleOnChange,type:"date"}),r.a.createElement("input",{className:"add-date__field",name:"executionTime",value:c,onChange:this.handleOnChange,type:"time"}))),r.a.createElement("button",{className:"creating-task__btn",onClick:this.handleOnClickAddTask},"Add Task")))}}]),t}(i.PureComponent),ye={checkState:k,createTask:T},ve=Object(o.b)(function(){return{}},ye)(be),De=function(e){return r.a.createElement("header",{className:"header"},r.a.createElement("h1",{className:"header__title"},e.children))},je=function(e){function t(){return Object(R.a)(this,t),Object(X.a)(this,Object(V.a)(t).apply(this,arguments))}return Object(J.a)(t,e),Object(U.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(De,null,"Todo List"),r.a.createElement("main",{className:"main"},r.a.createElement(ve,null),r.a.createElement(Ee,null)))}}]),t}(i.PureComponent);a.d(t,"store",function(){return xe});var Ce,xe=Object(u.e)(K,Ce,Object(u.d)(Object(u.a)(M),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));l.a.render(r.a.createElement(o.a,{store:xe},r.a.createElement(je,null)),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.b6d35d00.chunk.js.map