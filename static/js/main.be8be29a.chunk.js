(this["webpackJsonpsalt-and-satoshi"]=this["webpackJsonpsalt-and-satoshi"]||[]).push([[0],{374:function(e,t,n){},387:function(e,t){},389:function(e,t){},403:function(e,t){},404:function(e,t){},425:function(e,t){},427:function(e,t){},663:function(e,t){},665:function(e,t){},672:function(e,t){},673:function(e,t){},702:function(e,t){},738:function(e,t,n){"use strict";n.r(t);var a=n(6),r=n(2),s=n.n(r),i=n(36),c=n.n(i),o=(n(374),n(54)),l=n(769),u=n(5),d=n.n(u),p=n(47),h=n(38),j=n(325),b=n(326),f=n(327),m=n(329),x={eip1152contractAddress:"0xd07dc4262bcdbf85190c01c996b4c06a461d2430",minterAddress:"0x1efcb24f92daa1e04ba52e3d891beecee00c629d",firebaseConfig:{apiKey:"AIzaSyC8DwM9z-H9cSTCqHR4UGEvW86jL63sre0",projectId:"saltandsatoshi"},INFURA_JSON_RPC_API:{1:"https://mainnet.infura.io/v3/663207cc32894545b804fbc519d9fa2a",42:"https://kovan.infura.io/v3/663207cc32894545b804fbc519d9fa2a"},SELLER_CONTRACT_ADDRESS:{42:"0xD837F0658c74191056f222b3aCf3995e75AA3703"}},y=12e3,O=new j.a({supportedChainIds:[1,42]}),g=new b.a({rpc:{1:x.INFURA_JSON_RPC_API[1]},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:y}),v=new f.a({chainId:1,url:x.INFURA_JSON_RPC_API[1],pollingInterval:y}),w=new m.a({chainId:1,url:x.INFURA_JSON_RPC_API[1],pollingInterval:y,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"});var C=n(9),k=n(10),S=n(15),N=n(14),T=function(e){Object(S.a)(n,e);var t=Object(N.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"render",value:function(){var e=this.props.innerWidth||"200px",t=this.props.innerWidth||"200px";return Object(a.jsx)("div",{style:{height:this.props.height,width:this.props.width,display:"flex"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="'.concat(e,'" height="').concat(t,'" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n          <g transform="translate(50 50)">\n            <g transform="scale(0.26)">\n              <g transform="translate(-50 -50)">\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.7575757575757576s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#f72585" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.0101010101010102s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#7209b7" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5151515151515151s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#3a0ca3" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="3.0303030303030303s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#4361ee" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)"></path>\n                </g>\n              </g>\n            </g>\n          </g>\n          </svg>')}})}}]),n}(s.a.Component),I=n(773),P=function(e){e.children;var t=e.theConnector,n=e.title,r=Object(o.b)(),s=(r.connector,r.activate);return Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),s(t),!1},children:Object(a.jsx)("span",{className:"label",children:n})})};var A=function(){var e=Object(o.b)(),t=e.chainId,n=e.account,r=e.deactivate,s=(e.active,e.error);return n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),!1},children:Object(a.jsx)("span",{className:"label",children:n})})}),1!==t&&Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),!1},children:Object(a.jsxs)("span",{className:"label",children:["Network: ",t]})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),r(),!1},children:Object(a.jsx)("span",{className:"label",children:"Logout"})})})]}),s&&Object(a.jsxs)("p",{id:"text34",className:"style2",children:["\u26a0\ufe0f ",s.message]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[Object(a.jsx)("li",{children:Object(a.jsx)(P,{theConnector:O,title:"Metamask"})}),Object(a.jsx)("li",{children:Object(a.jsx)(P,{theConnector:v,title:"Ledger"})}),Object(a.jsx)("li",{children:Object(a.jsx)(P,{theConnector:w,title:"Trezor"})}),Object(a.jsx)("li",{children:Object(a.jsx)(P,{theConnector:g,title:"Walletconnect"})})]}),s&&Object(a.jsx)(I.a,{style:{fontWeight:"normal",color:"#878E99"},className:"style2 with-cool-font",label:s.message,color:"primary"})]})},_=n(207);n(725);_.a.initializeApp(x.firebaseConfig);var M=_.a.firestore().collection("saltseasons");function R(e){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.where("chainId","==",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){var t=e.data();return t.id=e.id,t})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=n(772),F=n(768),U=n(333),z=n.n(U),D=n(336);var H={TokenId:"20272",getJsonRpcProvider:function(e,t){return new D.a(e,t)}},W=n(337),J='[{"inputs":[{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_priceStep","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"Sent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"destroy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceStep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"purchaseToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_payee","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]';var q={contractABI:J,getContract:function(e,t){return new W.a(e,J,t)}};var B={isMobile:function(){return window.innerWidth<750}},G=n(338);var Z=function(e){return Object(a.jsx)(a.Fragment,{children:"\u039e".concat(Object(G.a)(e.number))})},Y=n(335),K=n.n(Y),Q=n(771),V=n(762),X=n(763),$=n(764),ee=n(765),te=n(766),ne=n(767);var ae=function(e){var t=s.a.useState(!0),n=Object(h.a)(t,2),r=n[0],i=n[1];switch(e.state){case"MINING":return Object(a.jsxs)(Q.a,{open:!0,children:[Object(a.jsx)(V.a,{children:"Please wait"}),Object(a.jsx)(X.a,{style:{padding:30},children:Object(a.jsx)($.a,{})})]});case"FAILED":return Object(a.jsxs)(Q.a,{open:r,onClose:function(){return i(!1)},children:[Object(a.jsx)(V.a,{children:"Oops"}),Object(a.jsx)(X.a,{style:{padding:30},children:Object(a.jsx)("p",{})}),Object(a.jsx)(ee.a,{style:{padding:30},children:Object(a.jsx)(te.a,{onClick:function(){return i(!1)},children:"Close"})})]});case"SUCCESS":return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(Q.a,{open:r,onClose:function(){return i(!1)},maxWidth:"lg",children:[Object(a.jsx)(V.a,{children:"Hooray!"}),Object(a.jsxs)(X.a,{style:{padding:30},children:[Object(a.jsx)(K.a,{}),Object(a.jsx)("p",{children:"You are the owner of unique SaltSeason"}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Now you can ",Object(a.jsx)("a",{href:"https://redeem.saltandsatoshi.com/",children:"redeem"})," your purchase"]})]}),Object(a.jsx)(ee.a,{style:{padding:30},children:Object(a.jsx)(ne.a,{href:"https://redeem.saltandsatoshi.com/",children:"Redeem"})})]})})}},re=function(e){Object(S.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(k.a)(n,[{key:"componentDidMount",value:function(){var e=Object(p.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.preloadImage();case 2:this.setState({loading:!1});case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"preloadImage",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t=this;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise((function(e,n){var a=new window.Image;a.onload=function(){e(0)},a.onerror=n,a.src=t.props.imageUrl})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.loading?Object(a.jsx)(T,{height:this.props.height,width:this.props.width}):Object(a.jsx)("div",{style:{backgroundImage:"url(".concat(this.props.imageUrl,")"),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:this.props.height,width:this.props.width}})}}]),n}(s.a.Component);var se=function(e){var t=e.saltSeason,n=H.getJsonRpcProvider(x.INFURA_JSON_RPC_API[t.chainId],t.chainId),r=Object(o.b)(),i=r.account,c=r.library,l=s.a.useState(void 0),u=Object(h.a)(l,2),j=u[0],b=u[1];s.a.useEffect((function(){if(void 0===j){var e=q.getContract(t.sellerContractAddress,n);b(e)}}),[j]);var f=s.a.useState(void 0),m=Object(h.a)(f,2),y=m[0],O=m[1];s.a.useEffect((function(){if(void 0===y&&i&&c){var e=c.getSigner(i),n=q.getContract(t.sellerContractAddress,e);O(n)}}),[y,i]);var g=s.a.useState(void 0),v=Object(h.a)(g,2),w=v[0],C=v[1];s.a.useEffect((function(){w||j&&Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.currentPrice();case 2:t=e.sent,C(t);case 4:case"end":return e.stop()}}),e)})))()}),[w,j]);var k=s.a.useState(void 0),S=Object(h.a)(k,2),N=S[0],P=S[1];s.a.useEffect((function(){N||j&&Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.priceStep();case 2:t=e.sent,P(t);case 4:case"end":return e.stop()}}),e)})))()}),[N,j]);var A=s.a.useState(void 0),_=Object(h.a)(A,2),M=_[0],R=_[1];s.a.useEffect((function(){j&&void 0===M&&j.queryFilter(j.filters.TokenPurchase).then((function(e){R(e.filter((function(e){return"TokenPurchase"===e.event})))}))}),[j,M]);var E=s.a.useState(void 0),U=Object(h.a)(E,2),D=U[0],W=U[1],J=s.a.useState(void 0),G=Object(h.a)(J,2),Y=G[0],K=G[1],Q=(M||[]).length,V=t.tokenIds.length<=Q,X=void 0!==M&&!!w,$=V?void 0:t.tokenIds[Q],ee=s.a.useState(!1),te=Object(h.a)(ee,2),ne=te[0],se=te[1],ie=function(){var e=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}throw"Connect to blockchain (no account)";case 2:if(w){e.next=4;break}throw"Connect to blockchain (no contract data)";case 4:if(y){e.next=6;break}throw"Connect to blockchain (no contract)";case 6:if($){e.next=8;break}throw"Season is over";case 8:return e.next=10,y.purchaseToken(t.erc721ContractAddress,$,{value:w});case 10:return n=e.sent,K("MINING"),e.next=14,n.wait(1);case 14:if(0!==e.sent.status){e.next=17;break}throw"Transaction was reverted";case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ce=B.isMobile(),oe=1===t.chainId;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(L.a,{display:"flex",flexDirection:ce?"column":"row",justifyContent:"center",style:{marginBottom:"5em",width:"100%"},children:[Object(a.jsx)("div",{style:ce?{padding:"1em"}:{flexGrow:1,width:"50%"},children:Object(a.jsx)(z.a,{showThumbnails:!1,showPlayButton:!1,items:t.posterUrls.map((function(e){return{original:e}})),renderItem:function(e){return Object(a.jsx)(re,{imageUrl:e.original,height:"500px",width:"100%"})}})}),Object(a.jsxs)("div",{style:ce?{padding:"1em"}:{flexGrow:1,width:"50%",padding:"0 3em"},className:"with-cool-font",children:[Object(a.jsxs)("p",{style:{fontSize:"2em",color:"#fff"},children:["Season ",t.number]}),Object(a.jsx)("br",{}),Object(a.jsx)("h5",{children:t.title}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{style:{fontWeight:"normal",color:"#878E99",textAlign:"justify",fontSize:"smaller"},className:"style2 with-cool-font",dangerouslySetInnerHTML:{__html:t.descriptionHtml}}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Edition of ",t.tokenIds.length]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Price ",w?Object(a.jsx)(Z,{number:w}):Object(a.jsx)(T,{height:"200px",width:"200px"})]}),Object(a.jsx)("br",{}),!!N&&!!w&&!!M&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Price increment",Object(a.jsx)("sup",{children:"*"})," ",Object(a.jsx)(Z,{number:N})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{style:{fontSize:"small",color:"#878E99"},children:[Object(a.jsx)("sup",{children:"*"}),"\xa0The price begins at ",Object(a.jsx)(Z,{number:w.sub(N.mul(M.length))})," and will increase by ",Object(a.jsx)(Z,{number:N})," after each purchase to an end price of ",Object(a.jsx)(Z,{number:w.add(N.mul(t.tokenIds.length-M.length))})]}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(L.a,{display:"flex",flexDirection:"row",justifyContent:"between",children:[!X&&Object(a.jsx)(T,{height:"200px",width:"200px"}),X&&Object(a.jsxs)(a.Fragment,{children:[V&&Object(a.jsx)("ul",{id:"buttons02",className:"style1 buttons",children:Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"#",className:"button n01",children:[Object(a.jsx)("span",{className:"label",children:"Season is over"}),Object(a.jsx)(F.a,{style:{marginRight:"0.5em"},children:"done"})]})})}),!V&&Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[oe&&Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"#",className:"button n01",onClick:function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),t.preventDefault(),e.abrupt("return",!1);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(a.jsx)("span",{className:"label",children:"Coming soon"}),Object(a.jsx)(F.a,{style:{marginRight:"0.5em"},children:"access_time"})]})}),!oe&&Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"#",className:"button n01",onClick:function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.stopPropagation(),W(void 0),e.prev=2,se(!0),e.next=6,ie();case 6:K("MINING"),e.next=15;break;case 9:return e.prev=9,e.t0=e.catch(2),K(void 0),console.error("[ERROR]",e.t0),W("".concat(e.t0.message||e.t0)),e.abrupt("return",!1);case 15:return e.prev=15,se(!1),e.finish(15);case 18:return K("SUCCESS"),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[2,9,15,18]])})));return function(t){return e.apply(this,arguments)}}(),children:[Object(a.jsx)("span",{className:"label",children:"Purchase"}),Object(a.jsx)(F.a,{style:{marginRight:"0.5em"},children:"shopping_cart"})]})}),!oe&&Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://redeem.saltandsatoshi.com/",target:"_blank",className:"button n01",children:[Object(a.jsx)("span",{className:"label",children:"Redeem"}),Object(a.jsx)(F.a,{style:{marginRight:"0.5em"},children:"local_shipping"})]})})]})]})]}),D&&Object(a.jsx)(I.a,{label:D,color:"secondary"})]})]}),Y&&Object(a.jsx)(ae,{state:Y}),ne&&Object(a.jsx)("div",{className:"metmask-hint",children:Object(a.jsx)("span",{children:"Please confirm a pending Ethereum transaction."})})]})};var ie=function(){var e=Object(o.b)(),t=e.connector,n=e.chainId,i=s.a.useState(),c=Object(h.a)(i,2),l=c[0],u=c[1];s.a.useEffect((function(){l&&l===t&&u(void 0)}),[l,t]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o.b)(),n=t.active,a=t.error,s=t.activate;Object(r.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var r=function(){console.log("Handling 'connect' event"),s(O)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),s(O)},c=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&s(O)},o=function(e){console.log("Handling 'networkChanged' event with payload",e),s(O)};return t.on("connect",r),t.on("chainChanged",i),t.on("accountsChanged",c),t.on("networkChanged",o),function(){t.removeListener&&(t.removeListener("connect",r),t.removeListener("chainChanged",i),t.removeListener("accountsChanged",c),t.removeListener("networkChanged",o))}}}),[n,a,e,s])}(!function(){var e=Object(o.b)(),t=e.activate,n=e.active,a=Object(r.useState)(!1),s=Object(h.a)(a,2),i=s[0],c=s[1];return Object(r.useEffect)((function(){O.isAuthorized().then((function(e){e?t(O,void 0,!0).catch((function(){c(!0)})):c(!0)}))}),[t]),Object(r.useEffect)((function(){!i&&n&&c(!0)}),[i,n]),i}()||!!l);var j=s.a.useState(n),b=Object(h.a)(j,2),f=b[0],m=b[1];s.a.useEffect((function(){f&&f!==n&&v(void 0),m(n)}),[f,n]);var x=s.a.useState(void 0),y=Object(h.a)(x,2),g=y[0],v=y[1];return s.a.useEffect((function(){g||Object(p.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(n||1);case 2:t=e.sent,window.location.hash&&(a=window.location.hash.slice(1),t.some((function(e){return e.id===a}))&&(t=t.filter((function(e){return e.id===a})))),v(t);case 5:case"end":return e.stop()}}),e)})))()}),[g,n]),g?(document.querySelector("#main > .inner").style.paddingLeft=0,document.querySelector("#main > .inner").style.paddingRight=0,Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{id:"redemption-section",children:Object(a.jsx)("div",{id:"container19",className:"container default full screen",style:{minHeight:"auto"},children:Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsxs)("div",{className:"inner",style:{padding:"3em 0em 1em 0em"},children:[Object(a.jsx)("h2",{id:"text33",style:{fontWeight:"normal",textTransform:"none",color:"#fff"},className:"with-cool-font",children:"Salt Seasons"}),Object(a.jsxs)("div",{style:{fontWeight:"normal",color:"#878E99"},className:"style2 with-cool-font",children:[Object(a.jsx)("p",{children:"Welcome to Salt Seasons - join us on the quest to close the divide between physical and digital collections."}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:'The first Salt Season, "Can\'t Be Stopped" consists of two editions of 20 unique collectible hoodies, each linked 1:1 to an NFT which is verifiable via an NFC tag.'})]}),Object(a.jsx)(A,{})]})})})}),Object(a.jsxs)(L.a,{display:"flex",flexDirection:"column",style:{marginTop:"3em",color:"lightgray"},children:[g.map((function(e){return Object(a.jsx)(se,{saltSeason:e})})),0==g.length&&Object(a.jsx)(F.a,{style:{margin:"auto",fontSize:"xxx-large"},children:"access_time"})]})]})):Object(a.jsx)(T,{height:"200px",width:"200px"})};function ce(e){return new l.a(e)}var oe=function(){return Object(a.jsx)(o.a,{getLibrary:ce,children:Object(a.jsx)(ie,{})})},le=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,991)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),s(e),i(e)}))};c.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(oe,{})}),document.getElementById("root")),le()}},[[738,1,2]]]);
//# sourceMappingURL=main.be8be29a.chunk.js.map