(this.webpackJsonpghpages=this.webpackJsonpghpages||[]).push([[0],{24:function(e,t,n){},25:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var i=n(1),r=n.n(i),o=n(17),c=n.n(o),s=(n(24),n(10)),d=n(2),l=n(4),a=(n(25),n(0));function j(){return Object(a.jsxs)("div",{className:"nav",children:[Object(a.jsx)(l.c,{to:"/",className:"navl",children:"Tordano"}),Object(a.jsx)(l.c,{to:"/airdrop",className:"navl",children:"Airdrop"}),Object(a.jsx)(l.c,{to:"/mining",className:"navl",children:"Mining"}),Object(a.jsx)(l.c,{to:"/governance",className:"navl",children:"Voting"}),Object(a.jsx)(l.c,{to:"/compliance",className:"navl",children:"Compliance"}),Object(a.jsx)(l.c,{to:"/stats",className:"navl",children:"Stats"}),Object(a.jsx)(l.c,{to:"/info",className:"navl",children:"Info"})]})}var x=n(9),h=n(19),b=(n(32),[{txnNo:"12345",txnTime:"5 hours ago"},{txnNo:"12346",txnTime:"5 hours ago"},{txnNo:"12347",txnTime:"5 hours ago"},{txnNo:"12348",txnTime:"5 hours ago"},{txnNo:"12349",txnTime:"6 hours ago"},{txnNo:"12350",txnTime:"6 hours ago"},{txnNo:"12351",txnTime:"6 hours ago"},{txnNo:"12352",txnTime:"7 hours ago"},{txnNo:"12353",txnTime:"7 hours ago"},{txnNo:"12354",txnTime:"7 hours ago"},{txnNo:"12355",txnTime:"8 hours ago"}]);function p(){var e=Object(i.useState)(""),t=Object(x.a)(e,2),n=(t[0],t[1],Object(i.useState)("".concat(Math.floor(2e3*Math.random())))),r=Object(x.a)(n,2),o=r[0],c=(r[1],Object(i.useState)(["ADA","DAI","cDAI","USDC","USDT","WBTC"])),s=Object(x.a)(c,2),d=(s[0],s[1],Object(i.useState)("69.69.69.69")),j=Object(x.a)(d,2),p=j[0],u=j[1];return Object(i.useEffect)((function(){fetch("https://api.ipify.org?format=json",{headers:{accept:"application/json","content-type":"application/json"}}).then((function(e){return e.json()})).then((function(e){console.log("res",e),u(e.ip)})).catch((function(e){return console.error("Problem fetching my IP",e)}))})),Object(a.jsxs)("div",{className:"homePage",children:[Object(a.jsxs)("div",{style:{border:"1px solid #d7dadc",borderRadius:"2px",height:"40vh",width:"30vw"},className:"deposits",children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",borderBottom:"1px solid #d7dadc"},children:[Object(a.jsx)("div",{style:{border:"1px solid pink",alignSelf:"center",fontSize:"18px",fontWeight:"bold"},children:"Deposit"}),Object(a.jsx)("div",{style:{border:"1px solid pink",alignSelf:"center",fontSize:"18px",fontWeight:"bold"},children:"Withdraw"})]}),Object(a.jsx)("div",{children:"Token"}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",border:"1px solid green",padding:"0 1vw",margin:"0 .5vw",borderRadius:"2px"},children:[Object(a.jsx)("div",{children:"ADA"}),Object(a.jsx)("div",{className:"classN2"})]}),Object(a.jsx)("div",{children:"Amount"}),Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-evenly",border:"1px solid orange"},children:[Object(a.jsxs)("div",{style:{border:"1px solid dodgerblue",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)("div",{style:{height:"13px",width:"13px",borderRadius:"50%",backgroundColor:"orange"}}),Object(a.jsx)("div",{children:"0.1 ADA"})]}),Object(a.jsxs)("div",{style:{border:"1px solid dodgerblue",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)("div",{style:{height:"13px",width:"13px",borderRadius:"50%",backgroundColor:"orange"}}),Object(a.jsx)("div",{children:"1 ADA"})]}),Object(a.jsxs)("div",{style:{border:"1px solid dodgerblue",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)("div",{style:{height:"13px",width:"13px",borderRadius:"50%",backgroundColor:"orange"}}),Object(a.jsx)("div",{children:"10 ADA"})]}),Object(a.jsxs)("div",{style:{border:"1px solid dodgerblue",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)("div",{style:{height:"13px",width:"13px",borderRadius:"50%",backgroundColor:"orange"}}),Object(a.jsx)("div",{children:"100 ADA"})]})]}),Object(a.jsx)(l.b,{to:"/account",style:{width:"40%",alignSelf:"center",color:"#d7dadc",textDecoration:"none",border:"1px solid green",padding:"1vw 1vh",textAlign:"center",borderRadius:"2px"},children:"Connect"})]}),Object(a.jsxs)("div",{style:{border:"1px solid #d7dadc",borderRadius:"2px",height:"40vh",width:"30vw"},className:"statistics",children:[Object(a.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"Statistics"}),Object(a.jsx)("div",{children:"Anonymity set"}),Object(a.jsxs)("div",{children:[o," equal user deposits"]}),Object(a.jsx)("div",{children:"latest deposits"}),Object(a.jsx)("div",{style:{display:"flex",flexDirection:"column",flexWrap:"wrap",border:"1px solid lawngreen",height:"150px",margin:"5px 0 0 0"},children:b.map((function(e,t){return Object(a.jsxs)("div",{style:{textAlign:"center",backgroundColor:"".concat(t%2===1?"#1a1a1a":"transparent")},children:[e.txnNo,". ",e.txnTime]},Object(h.a)(4))}))}),Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"space-between"},children:[Object(a.jsx)("div",{children:"Your IP"}),Object(a.jsx)("div",{children:p})]})]})]})}function u(e){return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(a.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Early Tordano Adopters token airdrop"}),Object(a.jsx)("div",{children:"Every address that has used the Tordano protocol before 11400000 block has received TORD token vouchers (vTORD) that can be redeemed for TORD tokens (one-to-one) below. The more you contributed to the early adoption of Tordano, the more vTORD you have received. These vouchers are only valid for one year."})]})}function v(e){return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(a.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Tordano anonymity mining"}),Object(a.jsx)("div",{children:"To claim your rewards, please set up a mining account."}),Object(a.jsx)("button",{style:{width:"10vw",margin:"5vh 0",alignSelf:"center",color:"#d7dadc",textDecoration:"none",border:"1px solid green",padding:"1vw 1vh",textAlign:"center",borderRadius:"2px",backgroundColor:"transparent"},children:"Connect"}),Object(a.jsx)("div",{children:"Connect with recovery key"}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"center",flexGrow:"0"},children:[Object(a.jsxs)("div",{style:{borderRight:"1px solid #d7dadc"},children:[Object(a.jsx)("div",{style:{height:"50px",border:"1px solid red"},children:"IMG"}),Object(a.jsx)("div",{children:"Use Tordano"}),Object(a.jsx)("div",{children:"Deposit into and withdraw from ETH anonymity pools. Earn more AP the longer you stay in the pool."}),Object(a.jsx)(l.b,{to:"/",children:"Read more"})]}),Object(a.jsxs)("div",{style:{borderRight:"1px solid #d7dadc"},children:[Object(a.jsx)("div",{style:{height:"50px",border:"1px solid red"},children:"IMG"}),Object(a.jsx)("div",{children:"Claim rewards"}),Object(a.jsx)("div",{children:"Accumulate Anonymity Points (AP) by submitting spent notes to the mining protocol."}),Object(a.jsx)(l.b,{to:"/",children:"Read more"})]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{style:{height:"50px",border:"1px solid red"},children:"IMG"}),Object(a.jsx)("div",{children:"Swap AP to TORN"}),Object(a.jsx)("div",{children:"Exchange Anonymity Points for TORN tokens to participate in Tordano governance."}),Object(a.jsx)(l.b,{to:"/",children:"Read more"})]})]})]})}function O(e){var t=Object(i.useState)(""),n=Object(x.a)(t,2),r=n[0],o=n[1];return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(a.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Compliance"}),Object(a.jsx)("div",{children:"Maintaining financial privacy is essential to preserving our freedoms."}),Object(a.jsx)("div",{children:"However, it should not come at the cost of non-compliance. With Tordano, you can always provide cryptographically verified proof of transactional history using the Ethereum address you used to deposit or withdraw funds. This might be necessary to show the origin of assets held in your withdrawal address."}),Object(a.jsx)("div",{children:"To generate a compliance report, please enter your Tordano Note below."}),Object(a.jsxs)("div",{style:{margin:"2vh 0",border:"1px solid green"},children:[Object(a.jsx)("div",{children:"Note"}),Object(a.jsx)("input",{type:"text",name:"noteInput",value:r,onChange:function(e){o(e.target.value)},placeholder:"Please enter your note",style:{color:"#d7dadc",backgroundColor:"#1a1a1a",border:"1px solid #1a1a1a",borderRadius:"2px",width:"98%"}})]})]})}function g(e){return Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",textAlign:"center",margin:"10vh 15vw"},children:[Object(a.jsx)("div",{style:{fontSize:"25px",margin:"5vh 0"},children:"Voting"}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-evenly",width:"60%",border:"1px solid red"},children:[Object(a.jsx)("div",{children:"Available Balance"}),Object(a.jsx)("div",{children:"Manage"}),Object(a.jsx)("div",{children:"Voting Power"})]})]})}var y=function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(j,{}),Object(a.jsx)(d.a,{exact:!0,path:"/",render:function(e){return Object(a.jsx)(p,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{path:"/airdrop",render:function(e){return Object(a.jsx)(u,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{path:"/mining",render:function(e){return Object(a.jsx)(v,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{path:"/governance",render:function(e){return Object(a.jsx)(g,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{path:"/compliance",render:function(e){return Object(a.jsx)(O,Object(s.a)({},e))}}),Object(a.jsx)(d.a,{path:"/stats",render:function(e){return Object(a.jsx)("div",{children:"stats"})}})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),o(e),c(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(l.a,{children:Object(a.jsx)(y,{})})}),document.getElementById("root")),f()}},[[33,1,2]]]);
//# sourceMappingURL=main.5bf2ddcd.chunk.js.map