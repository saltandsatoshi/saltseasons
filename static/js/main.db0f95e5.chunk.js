(this["webpackJsonpsalt-and-satoshi"]=this["webpackJsonpsalt-and-satoshi"]||[]).push([[0],{374:function(e,t,n){},387:function(e,t){},389:function(e,t){},403:function(e,t){},404:function(e,t){},425:function(e,t){},427:function(e,t){},663:function(e,t){},665:function(e,t){},672:function(e,t){},673:function(e,t){},702:function(e,t){},738:function(e,t,n){"use strict";n.r(t);var a=n(6),i=n(2),r=n.n(i),s=n(36),c=n.n(s),o=(n(374),n(53)),l=n(769),u=n(5),d=n.n(u),p=n(56),h=n(38),f=n(325),b=n(326),j=n(327),m=n(329),y={eip1152contractAddress:"0xd07dc4262bcdbf85190c01c996b4c06a461d2430",minterAddress:"0x1efcb24f92daa1e04ba52e3d891beecee00c629d",firebaseConfig:{apiKey:"AIzaSyC8DwM9z-H9cSTCqHR4UGEvW86jL63sre0",projectId:"saltandsatoshi"},INFURA_JSON_RPC_API:{1:"https://mainnet.infura.io/v3/663207cc32894545b804fbc519d9fa2a",42:"https://kovan.infura.io/v3/663207cc32894545b804fbc519d9fa2a"},SELLER_CONTRACT_ADDRESS:{42:"0xD837F0658c74191056f222b3aCf3995e75AA3703"}},O=12e3,x=new f.a({supportedChainIds:[1,42]}),g=new b.a({rpc:{1:y.INFURA_JSON_RPC_API[1]},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:O}),v=new j.a({chainId:1,url:y.INFURA_JSON_RPC_API[1],pollingInterval:O}),w=new m.a({chainId:1,url:y.INFURA_JSON_RPC_API[1],pollingInterval:O,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"});var C=n(9),T=n(10),S=n(15),k=n(14),N=function(e){Object(S.a)(n,e);var t=Object(k.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(T.a)(n,[{key:"render",value:function(){var e=this.props.innerWidth||"200px",t=this.props.innerWidth||"200px";return Object(a.jsx)("div",{style:{height:this.props.height,width:this.props.width,display:"flex"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="'.concat(e,'" height="').concat(t,'" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n          <g transform="translate(50 50)">\n            <g transform="scale(0.26)">\n              <g transform="translate(-50 -50)">\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.7575757575757576s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#f72585" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.0101010101010102s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#7209b7" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5151515151515151s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#3a0ca3" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="3.0303030303030303s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#4361ee" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)"></path>\n                </g>\n              </g>\n            </g>\n          </g>\n          </svg>')}})}}]),n}(r.a.Component),I=n(773),A=function(e){e.children;var t=e.theConnector,n=e.title,i=Object(o.b)(),r=(i.connector,i.activate);return Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),r(t),!1},children:Object(a.jsx)("span",{className:"label",children:n})})};var P=function(){var e=Object(o.b)(),t=e.chainId,n=e.account,i=e.deactivate,r=(e.active,e.error);return n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),!1},children:Object(a.jsx)("span",{className:"label",children:n})})}),1!==t&&Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),!1},children:Object(a.jsxs)("span",{className:"label",children:["Network: ",t]})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),i(),!1},children:Object(a.jsx)("span",{className:"label",children:"Logout"})})})]}),r&&Object(a.jsxs)("p",{id:"text34",className:"style2",children:["\u26a0\ufe0f ",r.message]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:x,title:"Metamask"})}),Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:v,title:"Ledger"})}),Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:w,title:"Trezor"})}),Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:g,title:"Walletconnect"})})]}),r&&Object(a.jsx)(I.a,{style:{fontWeight:"normal",color:"#878E99"},className:"style2 with-cool-font",label:r.message,color:"primary"})]})},_=n(207);n(725);_.a.initializeApp(y.firebaseConfig);var M=_.a.firestore().collection("saltseasons");function E(e){return L.apply(this,arguments)}function L(){return(L=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.where("chainId","==",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){var t=e.data();return t.id=e.id,t})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var R=n(772),F=n(768),U=n(333),H=n.n(U),D=n(336);var z={TokenId:"20272",getJsonRpcProvider:function(e,t){return new D.a(e,t)}},J=n(337),W='[{"inputs":[{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_priceStep","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"Sent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"destroy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceStep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"purchaseToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_payee","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]';var q={contractABI:W,getContract:function(e,t){return new J.a(e,W,t)}};var B={isMobile:function(){return window.innerWidth<750}};n(338);var G=n(335),Z=n.n(G),Y=n(771),K=n(762),Q=n(763),V=n(764),X=n(765),$=n(766),ee=n(767);var te=function(e){var t=r.a.useState(!0),n=Object(h.a)(t,2),i=n[0],s=n[1];switch(e.state){case"MINING":return Object(a.jsxs)(Y.a,{open:!0,children:[Object(a.jsx)(K.a,{children:"Please wait"}),Object(a.jsx)(Q.a,{style:{padding:30},children:Object(a.jsx)(V.a,{})})]});case"FAILED":return Object(a.jsxs)(Y.a,{open:i,onClose:function(){return s(!1)},children:[Object(a.jsx)(K.a,{children:"Oops"}),Object(a.jsx)(Q.a,{style:{padding:30},children:Object(a.jsx)("p",{})}),Object(a.jsx)(X.a,{style:{padding:30},children:Object(a.jsx)($.a,{onClick:function(){return s(!1)},children:"Close"})})]});case"SUCCESS":return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(Y.a,{open:i,onClose:function(){return s(!1)},maxWidth:"lg",children:[Object(a.jsx)(K.a,{children:"Hooray!"}),Object(a.jsxs)(Q.a,{style:{padding:30},children:[Object(a.jsx)(Z.a,{}),Object(a.jsx)("p",{children:"You are the owner of unique SaltSeason"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Now you can ",Object(a.jsx)("a",{href:"https://redeem.saltandsatoshi.com/",children:"redeem"})," your purchase"]})]}),Object(a.jsx)(X.a,{style:{padding:30},children:Object(a.jsx)(ee.a,{href:"https://redeem.saltandsatoshi.com/",children:"Redeem"})})]})})}},ne=function(e){Object(S.a)(n,e);var t=Object(k.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(T.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:{display:"block",height:this.props.height,width:this.props.width,backgroundColor:this.props.backgroundColor},children:[Object(a.jsx)("div",{style:{position:"absolute",top:0,left:0,height:this.props.height,width:this.props.width},children:Object(a.jsx)(N,{height:this.props.height,width:this.props.width})}),Object(a.jsx)("div",{style:{position:"absolute",top:0,left:0,backgroundImage:"url(".concat(this.props.imageUrl,")"),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:this.props.height,width:this.props.width}})]})}}]),n}(r.a.Component);var ae=function(e){var t=e.saltSeason,n=z.getJsonRpcProvider(y.INFURA_JSON_RPC_API[t.chainId],t.chainId),i=Object(o.b)(),s=i.account,c=i.library,l=r.a.useState(void 0),u=Object(h.a)(l,2),f=u[0],b=u[1];r.a.useEffect((function(){if(void 0===f){var e=q.getContract(t.sellerContractAddress,n);b(e)}}),[f]);var j=r.a.useState(void 0),m=Object(h.a)(j,2),O=m[0],x=m[1];r.a.useEffect((function(){if(void 0===O&&s&&c){var e=c.getSigner(s),n=q.getContract(t.sellerContractAddress,e);x(n)}}),[O,s]);var g=r.a.useState(void 0),v=Object(h.a)(g,2),w=v[0],C=v[1];r.a.useEffect((function(){w||f&&Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.currentPrice();case 2:t=e.sent,C(t);case 4:case"end":return e.stop()}}),e)})))()}),[w,f]);var T=r.a.useState(void 0),S=Object(h.a)(T,2),k=S[0],N=S[1];r.a.useEffect((function(){k||f&&Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.priceStep();case 2:t=e.sent,N(t);case 4:case"end":return e.stop()}}),e)})))()}),[k,f]);var A=r.a.useState(void 0),P=Object(h.a)(A,2),_=P[0],M=P[1];r.a.useEffect((function(){f&&void 0===_&&f.queryFilter(f.filters.TokenPurchase).then((function(e){M(e.filter((function(e){return"TokenPurchase"===e.event})))}))}),[f,_]);var E=r.a.useState(void 0),L=Object(h.a)(E,2),U=L[0],D=(L[1],r.a.useState(void 0)),J=Object(h.a)(D,2),W=J[0],G=(J[1],(_||[]).length),Z=t.tokenIds.length<=G,Y=(Z||t.tokenIds[G],r.a.useState(!1)),K=Object(h.a)(Y,2),Q=K[0],V=(K[1],B.isMobile());return t.chainId,Object(a.jsxs)("div",{children:[Object(a.jsxs)(R.a,{display:"flex",flexDirection:V?"column":"row",justifyContent:"center",style:{marginBottom:"5em",width:"100%"},children:[Object(a.jsx)("div",{style:V?{padding:"1em"}:{flexGrow:1,width:"50%"},children:Object(a.jsx)(H.a,{showThumbnails:!1,showPlayButton:!1,items:t.posterUrls.map((function(e){return{original:e}})),renderItem:function(e){return Object(a.jsx)(ne,{imageUrl:e.original,height:"500px",width:"100%"})}})}),Object(a.jsxs)("div",{style:V?{padding:"1em"}:{flexGrow:1,width:"50%",padding:"0 3em"},className:"with-cool-font",children:[Object(a.jsxs)("p",{style:{fontSize:"2em",color:"#fff"},children:["Season ",t.number]}),Object(a.jsx)("br",{}),Object(a.jsx)("h5",{children:t.title}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{style:{fontWeight:"normal",color:"#878E99",textAlign:"justify",fontSize:"smaller"},className:"style2 with-cool-font",dangerouslySetInnerHTML:{__html:t.descriptionHtml}}),Object(a.jsx)("br",{}),!1,Object(a.jsx)(R.a,{display:"flex",flexDirection:"row",justifyContent:"between",children:Object(a.jsx)("ul",{id:"buttons02",className:"style1 buttons",children:Object(a.jsx)("li",{children:Object(a.jsxs)("a",{className:"button n01",onClick:function(e){return e.preventDefault(),!1},children:[Object(a.jsx)("span",{className:"label",children:"Coming soon"}),Object(a.jsx)(F.a,{style:{marginRight:"0.5em"},children:"query_builder"})]})})})}),U&&Object(a.jsx)(I.a,{label:U,color:"secondary"})]})]}),W&&Object(a.jsx)(te,{state:W}),Q&&Object(a.jsx)("div",{className:"metmask-hint",children:Object(a.jsx)("span",{children:"Please confirm a pending Ethereum transaction."})})]})};var ie=function(){var e=Object(o.b)(),t=e.connector,n=e.chainId,s=r.a.useState(),c=Object(h.a)(s,2),l=c[0],u=c[1];r.a.useEffect((function(){l&&l===t&&u(void 0)}),[l,t]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o.b)(),n=t.active,a=t.error,r=t.activate;Object(i.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var i=function(){console.log("Handling 'connect' event"),r(x)},s=function(e){console.log("Handling 'chainChanged' event with payload",e),r(x)},c=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&r(x)},o=function(e){console.log("Handling 'networkChanged' event with payload",e),r(x)};return t.on("connect",i),t.on("chainChanged",s),t.on("accountsChanged",c),t.on("networkChanged",o),function(){t.removeListener&&(t.removeListener("connect",i),t.removeListener("chainChanged",s),t.removeListener("accountsChanged",c),t.removeListener("networkChanged",o))}}}),[n,a,e,r])}(!function(){var e=Object(o.b)(),t=e.activate,n=e.active,a=Object(i.useState)(!1),r=Object(h.a)(a,2),s=r[0],c=r[1];return Object(i.useEffect)((function(){x.isAuthorized().then((function(e){e?t(x,void 0,!0).catch((function(){c(!0)})):c(!0)}))}),[t]),Object(i.useEffect)((function(){!s&&n&&c(!0)}),[s,n]),s}()||!!l);var f=r.a.useState(n),b=Object(h.a)(f,2),j=b[0],m=b[1];r.a.useEffect((function(){j&&j!==n&&v(void 0),m(n)}),[j,n]);var y=r.a.useState(void 0),O=Object(h.a)(y,2),g=O[0],v=O[1];return r.a.useEffect((function(){g||Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return 42,e.next=3,E(42);case 3:t=e.sent,window.location.hash&&(n=window.location.hash.slice(1),t.some((function(e){return e.id===n}))&&(t=t.filter((function(e){return e.id===n})))),v(t);case 6:case"end":return e.stop()}}),e)})))()}),[g,n]),g?(document.querySelector("#main > .inner").style.paddingLeft=0,document.querySelector("#main > .inner").style.paddingRight=0,Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{id:"redemption-section",children:Object(a.jsx)("div",{id:"container19",className:"container default full screen",style:{minHeight:"auto"},children:Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)("div",{className:"inner",style:{padding:"3em 0em 1em 0em"},children:Object(a.jsx)(P,{})})})})}),Object(a.jsx)(R.a,{display:"flex",flexDirection:"column",style:{marginTop:"3em",color:"lightgray"},children:g.map((function(e){return Object(a.jsx)(ae,{saltSeason:e})}))})]})):Object(a.jsx)(N,{height:"200px",width:"200px"})};function re(e){return new l.a(e)}var se=function(){return Object(a.jsx)(o.a,{getLibrary:re,children:Object(a.jsx)(ie,{})})},ce=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,991)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),i(e),r(e),s(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(se,{})}),document.getElementById("root")),ce()}},[[738,1,2]]]);
//# sourceMappingURL=main.db0f95e5.chunk.js.map