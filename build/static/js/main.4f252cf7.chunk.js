(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{44:function(e,t,a){e.exports=a(88)},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},58:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},65:function(e,t,a){},66:function(e,t,a){},84:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(15),o=a.n(s),c=(a(49),a(50),a(3)),i=a(4),l=a(6),u=a(5),m=a(18),p=(a(51),a(52),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar"},r.a.createElement("input",{placeholder:"Search",className:"search-input",type:"search"}),r.a.createElement("button",{className:"search-button"},r.a.createElement("i",{className:"fas fa-search"})))}}]),a}(n.Component)),f=(a(53),a(9));var d=function(){return localStorage.removeItem("token"),{type:"LOGOUT",payload:!1}},h=a(19),b=(a(58),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{onClick:this.props.itemAction,className:"nav-item",to:this.props.itemRoute,ref:this.props.itemRef,name:this.props.itemName},r.a.createElement("span",{className:"nav-item-icon"},this.props.itemIcon),r.a.createElement("span",{className:"nav-item-text"},this.props.itemText))}}]),a}(n.Component)),v=(a(60),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).itemRef=r.a.createRef(),e.handleItemClick=function(){e.props.sideNavRef.current.classList.remove("open-close-nav"),"logout"===e.itemRef.current.name&&e.props.logout()},e.display=function(t){return t?r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{itemRoute:"/profile",itemIcon:r.a.createElement("i",{className:"far fa-user-circle"}),itemText:"Account",itemAction:e.handleItemClick,itemRef:e.itemRef,itemName:"account"}),r.a.createElement(b,{itemRoute:"/login",itemIcon:r.a.createElement("i",{className:"fas fa-user-slash"}),itemText:"Logout",itemAction:e.handleItemClick,itemRef:e.itemRef,itemName:"logout"})):r.a.createElement(r.a.Fragment,null,r.a.createElement(b,{itemRoute:"/login",itemIcon:r.a.createElement("i",{className:"fas fa-users"}),itemText:"Login",itemAction:e.handleItemClick,itemRef:e.itemRef,itemName:"login"}),r.a.createElement(b,{itemRoute:"/register",itemIcon:r.a.createElement("i",{className:"fas fa-user-plus"}),itemText:"Register",itemAction:e.handleItemClick,itemRef:e.itemRef,itemName:"register"}))},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{ref:this.props.sideNavRef,className:"side-nav"},this.display(this.props.isAuth))}}]),a}(n.Component)),E=Object(f.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{logout:d})(v),g=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).sideNavRef=r.a.createRef(),e.handleClick=function(){e.sideNavRef.current.classList.toggle("open-close-nav")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("span",{onClick:this.handleClick,className:"user-icon"},this.props.authenticated?r.a.createElement("i",{className:"fas fa-user"}):r.a.createElement("i",{className:"fas fa-user-alt-slash"})),r.a.createElement(E,{sideNavRef:this.sideNavRef}))}}]),a}(n.Component),O=Object(f.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{logout:d})(g),y=(a(61),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).buttonRef=r.a.createRef(),e.handleClick=function(){e.buttonRef.current.classList.remove("lower-button-click"),e.buttonRef.current.offsetWidth,e.buttonRef.current.classList.add("lower-button-click")},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,{to:this.props.navigateTo,ref:this.buttonRef,onClick:this.handleClick,className:"lower-button ".concat(this.props.desktopclass," ").concat(this.props.mobileclass)},r.a.createElement("span",{className:"button-icon"},this.props.icon),r.a.createElement("span",{className:"button-text"},this.props.text))}}]),a}(n.Component)),N=(a(62),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"right-menu"},r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-cloud-upload-alt"}),text:"uploads",navigateTo:"/uploads"}),r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-broadcast-tower"}),text:"stations",navigateTo:"/stations"}),r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-assistive-listening-systems"}),text:"playlists",navigateTo:"/playlists"}),r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-heart"}),text:"likes",navigateTo:"/likes"}),r.a.createElement(O,{authenticated:this.props.isAuth})),r.a.createElement("div",{className:"mobile-user"},r.a.createElement(O,{authenticated:this.props.isAuth})))}}]),a}(n.Component)),j=Object(f.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{})(N),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"navbar",className:"navbar"},r.a.createElement(h.a,{to:"/",className:"brand-word"},r.a.createElement("i",{className:"fab fa-mix"}),"iom"),r.a.createElement(p,null),r.a.createElement(j,null))}}]),a}(n.Component),R=(a(63),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{id:"lower-menu",className:"lower-menu"},r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-cloud-upload-alt"}),text:"uploads",mobileclass:"lower-button-mobile",navigateTo:"/uploads"}),r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-assistive-listening-systems"}),text:"playlists",mobileclass:"lower-button-mobile",navigateTo:"/playlist"}),r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-heart"}),text:"likes",mobileclass:"lower-button-mobile",navigateTo:"/likes"}),r.a.createElement(y,{icon:r.a.createElement("i",{className:"fas fa-broadcast-tower"}),text:"stations",mobileclass:"lower-button-mobile",navigateTo:"/stations"}))}}]),a}(n.Component)),w=a(23),x=a(14),I=a.n(x),C=a(16),T=(a(65),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("input",{placeholder:this.props.InputPlaceHolder,className:"form-input",type:this.props.inputType,onChange:this.props.onInputChange,name:this.props.inputName,value:this.props.inputValue})}}]),a}(n.Component)),A=(a(66),a(41)),S=a.n(A).a.create({baseURL:"http://localhost:3001/api"}),_=a(13),L=a(10),P=Object(L.a)(),U=function(e){return function(){var t=Object(C.a)(I.a.mark((function t(a){var n;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,S.post("/users/login",e);case 3:n=t.sent,localStorage.setItem("token",n.data.token),a({type:"LOGIN",payload:n.data.token}),P.push("/"),_.b.success("login successfully",{position:_.b.POSITION.TOP_CENTER,closeButton:!1}),t.next=15;break;case 10:t.prev=10,t.t0=t.catch(0),console.dir(t.t0),a({type:"LOGIN",payload:!1}),401===t.t0.response.status&&_.b.error("invalid password or username",{position:_.b.POSITION.TOP_CENTER});case 15:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()},F=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:""},e.toastId=null,e.handleSubmit=function(){var t=Object(C.a)(I.a.mark((function t(a){var n,r,s;return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),t.prev=1,"registerForm"!==a.target.name){t.next=9;break}return t.next=5,S.post("/users/register",{username:e.state.username,password:e.state.password});case 5:P.push("/login"),e.toastId=_.b.success("registration was successful"),t.next=10;break;case 9:"loginForm"===a.target.name&&(n=e.state,r=n.username,s=n.password,e.props.login({username:r,password:s}));case 10:t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),400===t.t0.response.status&&t.t0.response.data.alreadyRegistered&&(_.b.isActive(e.toastId)||(e.toastId=_.b.error(t.t0.response.data.message)));case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(w.a)({},t.target.name,t.target.value))},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.props.isAuth&&P.push("/")}},{key:"componentDidUpdate",value:function(){this.props.isAuth&&P.push("/")}},{key:"render",value:function(){return r.a.createElement("div",{className:"login-form"},r.a.createElement("form",{name:this.props.formName,onSubmit:this.handleSubmit,className:"form-content"},r.a.createElement(T,{onInputChange:this.handleChange,InputPlaceHolder:"Username",inputType:"text",inputName:"username",inputValue:this.state.username}),r.a.createElement(T,{onInputChange:this.handleChange,InputPlaceHolder:"Password",inputType:"password",inputName:"password",inputValue:this.state.password}),r.a.createElement("button",{type:"submit",className:"form-button"},r.a.createElement("span",{className:"button-icon"},this.props.buttonIcon),r.a.createElement("span",{className:"button-text"},this.props.buttontext))))}}]),a}(n.Component),H=Object(f.b)((function(e){return{isAuth:e.authReducer.isAuth}}),{login:U})(F),D=(a(84),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(H,{buttonIcon:r.a.createElement("i",{className:"fas fa-user-lock"}),buttontext:"login",formName:"loginForm"})}}]),a}(n.Component)),G=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(H,{buttonIcon:r.a.createElement("i",{className:"fas fa-user-minus"}),buttontext:"register",formName:"registerForm"})}}]),a}(n.Component),V=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,"Home page")}}]),a}(n.Component),B=Object(f.b)(null,{})(V),M=a(42),J=a.n(M),X=function(){var e=localStorage.getItem("token");if(!e)return{type:"IS_AUTH",payload:!1};try{var t=J()(e),a=Date.now()/1e3;return t.exp>a?{type:"IS_AUTH",payload:e}:{type:"IS_AUTH",payload:!1}}catch(n){return localStorage.removeItem("token"),{type:"IS_AUTH",payload:!1}}};a(87);var W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).fileInputRef=r.a.createRef(),e.handleFileChange=function(){var e=Object(C.a)(I.a.mark((function e(t){var a,n;return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.dir(t.target.files[0]),(a=new FormData).append("cover-image",t.target.files[0]),e.next=6,S.post("/users/uploads",a);case 6:n=e.sent,console.log(n),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log("olgy error uploading");case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}(),e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"upload"},r.a.createElement("div",{className:"upload-options"},r.a.createElement("button",{className:"upload-options-button",type:"button"},r.a.createElement("span",{className:"options-icon"},r.a.createElement("i",{className:"fas fa-arrow-alt-circle-up"})),r.a.createElement("span",{className:"options-text"},"upload a single")),r.a.createElement("button",{className:"upload-options-button",type:"button"},r.a.createElement("span",{className:"options-icon"},r.a.createElement("i",{className:"fab fa-creative-commons-sampling-plus"})),r.a.createElement("span",{className:"options-text"},"upload an album")),r.a.createElement("button",{className:"upload-options-button my-uploads-button",type:"button"},r.a.createElement("span",{className:"options-icon"},r.a.createElement("i",{className:"fas fa-cubes"})),r.a.createElement("span",{className:"options-text my-uploads-text"},"my uploads"))),r.a.createElement("form",null,r.a.createElement("input",{onChange:this.handleFileChange,ref:this.fileInputRef,type:"file"})),r.a.createElement("audio",{controls:!0,src:"http://localhost:3001/api/users/sound/754337dd-7f16-4715-ac65-96a7221ce9a7kite san blame.mp3",type:"audio/mpeg"},"Your browser does not support the audio tag."))}}]),a}(n.Component),Y=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(m.b,{history:P},r.a.createElement("div",{id:"app-react-root",style:{display:"grid",gridTemplateColumns:"100%",gridTemplateRows:"max-content 1fr",paddingTop:"75px",height:"100vh"}},r.a.createElement("div",{id:"app-head",style:{gridRow:"1/2"}},r.a.createElement(k,null),r.a.createElement(R,null)),r.a.createElement("div",{id:"app-body",style:{gridRowStart:"2",gridRowEnd:"-1"}},r.a.createElement(m.c,null,r.a.createElement(m.a,{path:"/",exact:!0,component:B}),r.a.createElement(m.a,{path:"/uploads",exact:!0,component:W}),r.a.createElement(m.a,{path:"/login",exact:!0,component:D}),r.a.createElement(m.a,{path:"/register",exact:!0,component:G}),r.a.createElement(m.a,{render:function(){return r.a.createElement("div",null,"not found")}})))))}}]),a}(n.Component),q=a(43),z=a(17),K=a(24),Q={isAuth:!1},Z=Object(z.c)({authReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_AUTH":case"LOGOUT":case"LOGIN":return Object(K.a)({},e,{isAuth:t.payload});default:return e}}});_.b.configure({autoClose:2e3,bodyClassName:"toast-body",className:"entire-toast",transition:_.a,position:_.b.POSITION.TOP_CENTER,closeButton:!1,draggablePercent:40});var $=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.d,ee=Object(z.e)(Z,{authReducer:{isAuth:X().payload}},$(Object(z.a)(q.a)));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:ee},r.a.createElement(Y,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.4f252cf7.chunk.js.map