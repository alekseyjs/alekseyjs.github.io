(this.webpackJsonpghpages=this.webpackJsonpghpages||[]).push([[0],{32:function(n,t,e){},40:function(n,t,e){"use strict";e.r(t);var i,a=e(0),o=e.n(a),c=e(22),s=e.n(c),r=e(20),l=e(2),d=(e(32),e(7)),p=e(8),h=e(10),b=e(9),x=e(1),j=function(n){Object(h.a)(e,n);var t=Object(b.a)(e);function e(){return Object(d.a)(this,e),t.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{style:{fontSize:"20px"},children:"Docs"})})}}]),e}(a.Component),u=function(n){Object(h.a)(e,n);var t=Object(b.a)(e);function e(){return Object(d.a)(this,e),t.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{style:{fontSize:"20px"},children:"Home"})})}}]),e}(a.Component),f=function(n){Object(h.a)(e,n);var t=Object(b.a)(e);function e(){return Object(d.a)(this,e),t.apply(this,arguments)}return Object(p.a)(e,[{key:"render",value:function(){return Object(x.jsx)("div",{children:Object(x.jsx)("div",{style:{fontSize:"20px"},children:"About"})})}}]),e}(a.Component),m=e(23),g=e(11),O=e(24).a.header(i||(i=Object(m.a)(["\n  width: 100%;\n  border-bottom: 10px solid #222;\n  z-index: 1;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  //padding: 0px 100px 0;\n  height: 140px;\n  margin-bottom: 60px;\n  background: #f8f8f8;\n\n  .logo a {\n    padding-top: 33px;\n\t\tpadding-left: 15px;\n    display: flex;\n    flex-direction: column;\n    clear: both;\n    padding-bottom: 30px;\n    text-decoration: none;\n    p {\n      width: 500px;\n      display: block;\n    }\n    em {\n      font-size: 0.5em;\n      float: left;\n      display: block;\n      img {\n        display: inline-block;\n        margin-top: 5px;\n        width: 15px;\n        float: left;\n      }\n      .letterhead {\n        display: inline-block;\n        line-height: 260%;\n        float: left;\n      }\n    }\n  }\n  .gray {\n    color: #ccc;\n  }\n  a {\n    color: #222;\n    opacity: 0.55;\n    transition: all 0.6s;\n    color: #222;\n    font-size: 1em;\n  }\n  a:hover {\n    opacity: 1;\n  }\n  .fa-bars {\n    display: none;\n    color: #222;\n    font-size: 2rem;\n  }\n  nav {\n    ul {\n      display: flex;\n      justify-content: space-between;\n\t\t\tlist-style-type: none;\n    }\n    li {\n      margin: 0 15px;\n      justify-content: space-between;\n      font-size: 1em;\n    }\n    a {\n      font-size: 1em;\n      text-decoration: none;\n      .active {\n        color: tomato;\n      }\n    }\n    a.active {\n      color: #222;\n    }\n  }\n  @media only screen and (max-width: 600px) {\n    height: auto;\n    min-height: 50px;\n    display: block;\n    position: relative;\n    .logo {\n      width: 100%;\n      display: block;\n      padding-top: 20px;\n\t\t\tpadding-left: 15px;\n      margin: 0px;\n      margin-left: -5px;\n      a {\n        padding: 20px 0px;\n      }\n    }\n    .fa-bars {\n      display: inline-block;\n      position: absolute;\n      top: 10px;\n      right: 10px;\n      cursor: pointer;\n      font-size: 2rem;\n\t\t\theight: 50px;\n\t\t\twidth: 50px;\n    }\n    ul.collapsed {\n      width: 100%;\n      display: flex;\n      flex-direction: column;\n      justify-content: space-between;\n      flex-wrap: wrap;\n      overflow: hidden;\n      max-height: 0;\n      -moz-transition-duration: 0.4s;\n      -webkit-transition-duration: 0.4s;\n      -o-transition-duration: 0.4s;\n      transition-duration: 0.4s;\n      -moz-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n      -webkit-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n      -o-transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n      transition-timing-function: cubic-bezier(0, 1, 0.5, 1);\n      &.is-expanded {\n        overflow: hidden;\n        max-height: 500px; /* approximate max height */\n        -moz-transition-duration: 0.4s;\n        -webkit-transition-duration: 0.4s;\n        -o-transition-duration: 0.4s;\n        transition-duration: 0.4s;\n        -moz-transition-timing-function: ease-in;\n        -webkit-transition-timing-function: ease-in;\n        -o-transition-timing-function: ease-in;\n        transition-timing-function: ease-in;\n      }\n      li {\n        padding: 15px 10px;\n        margin: 0px 0px;\n        width: 100%;\n      }\n    }\n  }\n"]))),v=function(n){Object(h.a)(e,n);var t=Object(b.a)(e);function e(n){var i;return Object(d.a)(this,e),(i=t.call(this,n)).state={isExpanded:!1},i}return Object(p.a)(e,[{key:"handleToggle",value:function(n){n.preventDefault(),this.setState({isExpanded:!this.state.isExpanded})}},{key:"render",value:function(){var n=this,t=this.state.isExpanded;return Object(x.jsxs)(O,{children:[Object(x.jsx)("div",{className:"logo",children:Object(x.jsx)(g.b,{to:"/",children:Object(x.jsx)("em",{children:Object(x.jsx)("div",{className:"letterhead",children:Object(x.jsx)("span",{className:"name",children:"logo"})})})})}),Object(x.jsxs)("nav",{className:"nav",children:[Object(x.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",height:"329",viewBox:"0 0 424 329",width:"424",className:"fa fa-bars",style:{transform:"scale(0.3)"},onClick:function(t){return n.handleToggle(t)},children:Object(x.jsxs)("g",{fill:"#fff",children:[Object(x.jsx)("path",{d:"m0 0h424v51h-424z"}),Object(x.jsx)("path",{d:"m0 139h424v51h-424z"}),Object(x.jsx)("path",{d:"m0 278h424v51h-424z"})]})}),Object(x.jsxs)("ul",{className:"collapsed ".concat(t?"is-expanded":""),children:[Object(x.jsx)("a",{target:"_blank",href:"https://exchange.pancakeswap.finance/#/swap?outputCurrency=",style:{paddingRight:"10px"},children:"Buy"}),Object(x.jsx)(g.c,{exact:!0,to:"/about",style:{textDecoration:"none",color:"#009900"},activeStyle:{color:"#FF8000"},children:Object(x.jsx)("li",{children:"About"})}),Object(x.jsx)(g.c,{activeClassName:"active",to:"/docs",children:Object(x.jsx)("li",{children:"Docs"})})]})]})]})}}]),e}(a.Component);var y=function(){return setTimeout((function(){console.log("window.inner.width",window.innerWidth)}),100),Object(x.jsxs)("div",{className:"App",children:[Object(x.jsx)(v,{}),Object(x.jsx)(l.a,{exact:!0,path:"/",render:function(){return Object(x.jsx)(u,{})}}),Object(x.jsx)(l.a,{exact:!0,path:"/about",render:function(n){return Object(x.jsx)(f,Object(r.a)({},n))}}),Object(x.jsx)(l.a,{exact:!0,path:"/docs",render:function(n){return Object(x.jsx)(j,Object(r.a)({},n))}})]})},w=function(n){n&&n instanceof Function&&e.e(3).then(e.bind(null,41)).then((function(t){var e=t.getCLS,i=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;e(n),i(n),a(n),o(n),c(n)}))};s.a.render(Object(x.jsx)(o.a.StrictMode,{children:Object(x.jsx)(g.a,{basename:"",children:Object(x.jsx)(y,{})})}),document.getElementById("root")),w()}},[[40,1,2]]]);
//# sourceMappingURL=main.61bb33d6.chunk.js.map