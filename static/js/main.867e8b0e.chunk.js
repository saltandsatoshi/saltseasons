(this["webpackJsonpsalt-and-satoshi"]=this["webpackJsonpsalt-and-satoshi"]||[]).push([[0],{375:function(e,t,n){},388:function(e,t){},390:function(e,t){},404:function(e,t){},405:function(e,t){},426:function(e,t){},428:function(e,t){},664:function(e,t){},666:function(e,t){},673:function(e,t){},674:function(e,t){},703:function(e,t){},739:function(e,t,n){"use strict";n.r(t);var a=n(4),s=n(2),r=n.n(s),i=n(36),c=n.n(i),o=(n(375),n(52)),l=n(772),u=n(6),d=n.n(u),p=n(53),b=n(33),h=n(325),f=n(326),j=n(327),m=n(329),y={eip1152contractAddress:"0xd07dc4262bcdbf85190c01c996b4c06a461d2430",minterAddress:"0x1efcb24f92daa1e04ba52e3d891beecee00c629d",firebaseConfig:{apiKey:"AIzaSyC8DwM9z-H9cSTCqHR4UGEvW86jL63sre0",projectId:"saltandsatoshi"},INFURA_JSON_RPC_API:{1:"https://mainnet.infura.io/v3/663207cc32894545b804fbc519d9fa2a",4:"https://rinkeby.infura.io/v3/663207cc32894545b804fbc519d9fa2a",42:"https://kovan.infura.io/v3/663207cc32894545b804fbc519d9fa2a"},SELLER_CONTRACT_ADDRESS:{42:"0xD837F0658c74191056f222b3aCf3995e75AA3703"},SALTY_CONTRACT_ADDRESS:{1:"0xf157b7ba35089c9b0f02c24bbe1e03855dbe5c1f",4:"0x400a31BA7E9D428040B20eaBDb329E54124f4013",42:"0x0532b555269d3a993ea1ea4184c3ef97f11c5e8f"},MIN_SALTY:n(39).a.from("69000000000000000000")},x=12e3,O=new h.a({supportedChainIds:[1,4,42]}),v=new f.a({rpc:{1:y.INFURA_JSON_RPC_API[1]},bridge:"https://bridge.walletconnect.org",qrcode:!0,pollingInterval:x}),g=new j.a({chainId:1,url:y.INFURA_JSON_RPC_API[1],pollingInterval:x}),w=new m.a({chainId:1,url:y.INFURA_JSON_RPC_API[1],pollingInterval:x,manifestEmail:"dummy@abc.xyz",manifestAppUrl:"http://localhost:1234"});var C=n(9),k=n(10),S=n(15),N=n(14),T=function(e){Object(S.a)(n,e);var t=Object(N.a)(n);function n(){return Object(C.a)(this,n),t.apply(this,arguments)}return Object(k.a)(n,[{key:"render",value:function(){var e=this.props.innerWidth||"200px",t=this.props.innerWidth||"200px";return Object(a.jsx)("div",{style:{height:this.props.height,width:this.props.width,display:"flex"},dangerouslySetInnerHTML:{__html:'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;display:block;" width="'.concat(e,'" height="').concat(t,'" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">\n          <g transform="translate(50 50)">\n            <g transform="scale(0.26)">\n              <g transform="translate(-50 -50)">\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="0.7575757575757576s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#f72585" d="M50 50L50 0A50 50 0 0 1 100 50Z"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.0101010101010102s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#7209b7" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(90 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="1.5151515151515151s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#3a0ca3" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(180 50 50)"></path>\n                </g>\n                <g>\n                  <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" values="0 50 50;360 50 50" keyTimes="0;1" dur="3.0303030303030303s"></animateTransform>\n                  <path fill-opacity="0.8" fill="#4361ee" d="M50 50L50 0A50 50 0 0 1 100 50Z" transform="rotate(270 50 50)"></path>\n                </g>\n              </g>\n            </g>\n          </g>\n          </svg>')}})}}]),n}(r.a.Component),I=n(776),_={1:"Mainnet",4:"Rinkeby",42:"Kovan"},A=function(e){e.children;var t=e.theConnector,n=e.title,s=Object(o.b)(),r=(s.connector,s.activate);return Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),r(t),!1},children:Object(a.jsx)("span",{className:"label",children:n})})};var M=function(){var e=Object(o.b)(),t=e.chainId,n=e.account,s=e.deactivate,r=(e.active,e.error);return n?Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),!1},children:Object(a.jsx)("span",{className:"label",children:n})})}),1!==t&&Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),!1},children:Object(a.jsx)("span",{className:"label",children:_[t]})})}),Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.stopPropagation(),e.preventDefault(),s(),!1},children:Object(a.jsx)("span",{className:"label",children:"Logout"})})})]}),r&&Object(a.jsxs)("p",{id:"text34",className:"style2",children:["\u26a0\ufe0f ",r.message]})]}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:O,title:"Metamask"})}),Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:g,title:"Ledger"})}),Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:w,title:"Trezor"})}),Object(a.jsx)("li",{children:Object(a.jsx)(A,{theConnector:v,title:"Walletconnect"})})]}),r&&Object(a.jsx)(I.a,{style:{fontWeight:"normal",color:"#878E99"},className:"style2 with-cool-font",label:r.message,color:"primary"})]})},F=n(208);n(726);F.a.initializeApp(y.firebaseConfig);var R=F.a.firestore().collection("saltseasons");function P(e){return E.apply(this,arguments)}function E(){return(E=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.where("chainId","==",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){var t=e.data();return t.id=e.id,t})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return D.apply(this,arguments)}function D(){return(D=Object(p.a)(d.a.mark((function e(t){var n,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R.where("id","==",t).get();case 2:return n=e.sent,a=n.docs.map((function(e){var t=e.data();return t.id=e.id,t})),e.abrupt("return",a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var U=n(775),H=n(771),Y=n(333),z=n.n(Y),B=n(336);var J={TokenId:"20272",getJsonRpcProvider:function(e,t){return new B.a(e,t)}},W=n(145),q='[{"inputs":[{"internalType":"uint256","name":"_initialPrice","type":"uint256"},{"internalType":"uint256","name":"_priceStep","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[],"name":"Pause","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payee","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"}],"name":"Sent","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"payer","type":"address"},{"indexed":false,"internalType":"address","name":"nftAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"TokenPurchase","type":"event"},{"anonymous":false,"inputs":[],"name":"Unpause","type":"event"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"destroy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"priceStep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_nftAddress","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"purchaseToken","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_payee","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"sendTo","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"}]';var G={contractABI:q,getContract:function(e,t){return new W.a(e,q,t)}};var Z={getContract:function(e,t){return new W.a(e,'[ { "constant": true, "inputs": [], "name": "name", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_spender", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "approve", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_from", "type": "address" }, { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transferFrom", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [ { "name": "", "type": "uint8" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" } ], "name": "balanceOf", "outputs": [ { "name": "balance", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [ { "name": "", "type": "string" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [ { "name": "_to", "type": "address" }, { "name": "_value", "type": "uint256" } ], "name": "transfer", "outputs": [ { "name": "", "type": "bool" } ], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [ { "name": "_owner", "type": "address" }, { "name": "_spender", "type": "address" } ], "name": "allowance", "outputs": [ { "name": "", "type": "uint256" } ], "payable": false, "stateMutability": "view", "type": "function" }, { "payable": true, "stateMutability": "payable", "type": "fallback" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "owner", "type": "address" }, { "indexed": true, "name": "spender", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [ { "indexed": true, "name": "from", "type": "address" }, { "indexed": true, "name": "to", "type": "address" }, { "indexed": false, "name": "value", "type": "uint256" } ], "name": "Transfer", "type": "event" } ]',t)}};var K={isMobile:function(){return window.innerWidth<750}},$=n(337);var Q=function(e){var t=Object($.a)(e.number);return e.showFirstDigitsNumber&&(t=t.slice(0,e.showFirstDigitsNumber)),e.ticker?Object(a.jsx)(a.Fragment,{children:"".concat(e.ticker," ").concat(t)}):Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{style:{fontFamily:"Roboto"},children:"\u039e"}),"\xa0",t]})},V=n(335),X=n.n(V),ee=n(774),te=n(765),ne=n(766),ae=n(767),se=n(768),re=n(769),ie=n(770);var ce=function(e){var t=r.a.useState(!0),n=Object(b.a)(t,2),s=n[0],i=n[1];switch(e.state){case"MINING":return Object(a.jsxs)(ee.a,{open:!0,children:[Object(a.jsx)(te.a,{children:"Please wait"}),Object(a.jsx)(ne.a,{style:{padding:30},children:Object(a.jsx)(ae.a,{})})]});case"FAILED":return Object(a.jsxs)(ee.a,{open:s,onClose:function(){return i(!1)},children:[Object(a.jsx)(te.a,{children:"Oops"}),Object(a.jsx)(ne.a,{style:{padding:30},children:Object(a.jsx)("p",{})}),Object(a.jsx)(se.a,{style:{padding:30},children:Object(a.jsx)(re.a,{onClick:function(){return i(!1)},children:"Close"})})]});case"SUCCESS":return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(ee.a,{open:s,onClose:function(){return i(!1)},maxWidth:"lg",children:[Object(a.jsx)(te.a,{children:"Hooray! You are now the owner of a unique Salt Season NFT."}),Object(a.jsxs)(ne.a,{style:{padding:30},children:[Object(a.jsx)(X.a,{width:window.innerWidth||300,height:200}),Object(a.jsx)("p",{children:"As a buyer of the Genesis Salt Season, you'll receive an airdrop of $SALTY proportionate to the value of ETH spent."}),Object(a.jsx)("br",{}),Object(a.jsx)("p",{children:"You can now choose to redeem your NFT's physical counterpart... or not? It's all up to you."})]}),Object(a.jsx)(se.a,{style:{padding:30},children:Object(a.jsx)(ie.a,{href:"https://saltandsatoshi.com/#redeem",children:"Redeem"})})]})})}},oe=function(e){Object(S.a)(n,e);var t=Object(N.a)(n);function n(e){var a;return Object(C.a)(this,n),(a=t.call(this,e)).state={loading:!0},a}return Object(k.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("div",{style:{display:"block",height:this.props.height,width:this.props.width,backgroundColor:this.props.backgroundColor},children:[Object(a.jsx)("div",{style:{position:"absolute",top:0,left:0,height:this.props.height,width:this.props.width},children:Object(a.jsx)(T,{height:this.props.height,width:this.props.width})}),Object(a.jsx)("div",{style:{position:"absolute",top:0,left:0,backgroundImage:"url(".concat(this.props.imageUrl,")"),backgroundPosition:"center",backgroundSize:"contain",backgroundRepeat:"no-repeat",height:this.props.height,width:this.props.width}})]})}}]),n}(r.a.Component);function le(e){return"bar"===new URLSearchParams(window.location.search).get("foo")&&e||1}var ue=function(e){var t=e.saltSeason,n=J.getJsonRpcProvider(y.INFURA_JSON_RPC_API[t.chainId],t.chainId),s=Object(o.b)(),i=s.account,c=s.library,l=s.chainId,u=r.a.useState(void 0),h=Object(b.a)(u,2),f=h[0],j=h[1];r.a.useEffect((function(){if(void 0===f){var e=G.getContract(t.sellerContractAddress,n);j(e)}}),[f]);var m=r.a.useState(void 0),x=Object(b.a)(m,2),O=x[0],v=x[1];r.a.useEffect((function(){if(void 0===O&&i&&c){var e=c.getSigner(i),n=G.getContract(t.sellerContractAddress,e);v(n)}}),[O,i]);var g=r.a.useState(void 0),w=Object(b.a)(g,2),C=w[0],k=w[1];r.a.useEffect((function(){C||f&&Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.currentPrice();case 2:t=e.sent,k(t);case 4:case"end":return e.stop()}}),e)})))()}),[C,f]);var S=r.a.useState(void 0),N=Object(b.a)(S,2),A=N[0],M=N[1];r.a.useEffect((function(){A||f&&Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.priceStep();case 2:t=e.sent,M(t);case 4:case"end":return e.stop()}}),e)})))()}),[A,f]);var F=r.a.useState(void 0),R=Object(b.a)(F,2),P=R[0],E=R[1];r.a.useEffect((function(){f&&void 0===P&&f.queryFilter(f.filters.TokenPurchase()).then((function(e){E(e)}))}),[f,P]);var L=r.a.useState(void 0),D=Object(b.a)(L,2),Y=D[0],B=D[1];r.a.useEffect((function(){if(void 0===Y&&l){var e=Z.getContract(y.SALTY_CONTRACT_ADDRESS[le(l)],n);B(e)}}),[Y,l]);var W=r.a.useState(void 0),q=Object(b.a)(W,2),$=q[0],V=q[1];r.a.useEffect((function(){Y&&i&&void 0===$&&Object(p.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Y.balanceOf(i);case 2:t=e.sent,V(t);case 4:case"end":return e.stop()}}),e)})))()}),[Y,$]);var X=r.a.useState(void 0),ee=Object(b.a)(X,2),te=ee[0],ne=ee[1],ae=r.a.useState(void 0),se=Object(b.a)(ae,2),re=se[0],ie=se[1],ue=r.a.useState(!1),de=Object(b.a)(ue,2),pe=de[0],be=de[1],he=function(){var e=Object(p.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}throw"Connect to blockchain (no account)";case 2:if(C){e.next=4;break}throw"Connect to blockchain (no contract data)";case 4:if(O){e.next=6;break}throw"Connect to blockchain (no contract)";case 6:if(ye){e.next=8;break}throw"Season is over";case 8:return e.next=10,O.purchaseToken(t.erc721ContractAddress,ye,{value:C});case 10:return n=e.sent,ie("MINING"),e.next=14,n.wait(1);case 14:if(0!==e.sent.status){e.next=17;break}throw"Transaction was reverted";case 17:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),fe=(P||[]).length,je=t.tokenIds.length<=fe,me=void 0!==P&&!!C,ye=je?void 0:t.tokenIds[fe],xe=!!$&&$.gte(y.MIN_SALTY),Oe=K.isMobile(),ve=t.chainId===l,ge=1===l&&"mainnet_season1"!==t.id;return Object(a.jsxs)("div",{children:[Object(a.jsxs)(U.a,{display:"flex",flexDirection:Oe?"column":"row",justifyContent:"center",style:{marginBottom:"5em",width:"100%"},children:[Object(a.jsx)("div",{style:Oe?{padding:"1em"}:{flexGrow:1,width:"50%"},children:Object(a.jsx)(z.a,{showThumbnails:!1,showPlayButton:!1,showFullscreenButton:!1,items:t.posterUrls.map((function(e){return{original:e}})),renderItem:function(e){return Object(a.jsx)(oe,{imageUrl:e.original,height:"500px",width:"100%"})}})}),Object(a.jsxs)("div",{style:Oe?{padding:"1em"}:{flexGrow:1,width:"50%",padding:"0 3em"},className:"with-cool-font",children:[Object(a.jsxs)("p",{style:{fontSize:"2em",color:"#fff"},children:["Season ",t.number]}),Object(a.jsx)("br",{}),Object(a.jsx)("h5",{children:t.title}),Object(a.jsx)("br",{}),Object(a.jsx)("div",{style:{fontWeight:"normal",color:"#878E99",textAlign:"justify",fontSize:"smaller"},className:"style2 with-cool-font",dangerouslySetInnerHTML:{__html:t.descriptionHtml}}),Object(a.jsx)("br",{}),ge&&Object(a.jsx)(U.a,{display:"flex",flexDirection:"row",justifyContent:"between",children:Object(a.jsx)("ul",{id:"buttons02",className:"style1 buttons",children:Object(a.jsx)("li",{children:Object(a.jsxs)("a",{className:"button n01",onClick:function(e){return e.preventDefault(),!1},children:[Object(a.jsx)("span",{className:"label",children:"Coming soon"}),Object(a.jsx)(H.a,{style:{marginRight:"0.5em"},children:"query_builder"})]})})})}),!ge&&Object(a.jsxs)(a.Fragment,{children:[me&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("p",{children:["Edition of ",t.tokenIds.length]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Current: ",t.tokenIds.length-P.length]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Price ",!!C&&Object(a.jsx)(Q,{number:C,showFirstDigitsNumber:5})]}),Object(a.jsx)("br",{}),Object(a.jsxs)("p",{children:["Price increment",Object(a.jsx)("sup",{children:"*"})," ",!!A&&Object(a.jsx)(Q,{number:A,showFirstDigitsNumber:5})]}),Object(a.jsx)("br",{}),!!A&&Object(a.jsxs)("p",{style:{fontSize:"small",color:"#878E99"},children:[Object(a.jsx)("sup",{children:"*"}),"\xa0The price begins at\xa0",Object(a.jsx)(Q,{number:C.sub(A.mul(P.length)),showFirstDigitsNumber:5}),"\xa0 and will increase by\xa0",Object(a.jsx)(Q,{number:A,showFirstDigitsNumber:5}),"\xa0 after each purchase to an end price of\xa0",Object(a.jsx)(Q,{number:C.add(A.mul(t.tokenIds.length-P.length-1)),showFirstDigitsNumber:5})]}),Object(a.jsx)("br",{})]}),Object(a.jsxs)(U.a,{display:"flex",flexDirection:"row",justifyContent:"between",children:[!me&&Object(a.jsx)(T,{height:"200px",width:"200px"}),me&&Object(a.jsxs)(a.Fragment,{children:[!ve&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)("ul",{id:"buttons02",className:"style1 buttons",children:Object(a.jsx)("li",{children:Object(a.jsx)("a",{href:"#",className:"button n01",onClick:function(e){return e.preventDefault(),!1},children:Object(a.jsxs)("span",{className:"label",children:["Please switch to ",_[t.chainId]]})})})})}),ve&&Object(a.jsxs)(a.Fragment,{children:[je&&Object(a.jsx)("ul",{id:"buttons02",className:"style1 buttons",children:Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"#",className:"button n01",onClick:function(e){return e.preventDefault(),!1},children:[Object(a.jsx)("span",{className:"label",children:"Season is over"}),Object(a.jsx)(H.a,{style:{marginRight:"0.5em"},children:"done"})]})})}),!je&&Object(a.jsxs)("ul",{id:"buttons02",className:"style1 buttons",children:[Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"#",className:"button n01",onClick:function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.stopPropagation(),t.preventDefault(),xe){e.next=4;break}return e.abrupt("return",!1);case 4:return ne(void 0),e.prev=5,be(!0),e.next=9,he();case 9:ie("MINING"),e.next=18;break;case 12:return e.prev=12,e.t0=e.catch(5),ie(void 0),console.error("[ERROR]",e.t0),ne("".concat(e.t0.message||e.t0)),e.abrupt("return",!1);case 18:return e.prev=18,be(!1),e.finish(18);case 21:return ie("SUCCESS"),e.abrupt("return",!1);case 23:case"end":return e.stop()}}),e,null,[[5,12,18,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[!1===xe&&Object(a.jsxs)(a.Fragment,{children:["You must have ",Object(a.jsx)(Q,{number:y.MIN_SALTY,ticker:"$SALTY "})]}),!0===xe&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("span",{className:"label",children:"Purchase"}),Object(a.jsx)(H.a,{style:{marginRight:"0.5em"},children:"shopping_cart"})]})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://saltandsatoshi.com/#redeem",target:"_blank",className:"button n01",children:[Object(a.jsx)("span",{className:"label",children:"Redeem"}),Object(a.jsx)(H.a,{style:{marginRight:"0.5em"},children:"local_shipping"})]})})]})]})]})]})]}),te&&Object(a.jsx)(I.a,{label:te,color:"secondary"})]})]}),!!re&&Object(a.jsx)(ce,{state:re}),pe&&Object(a.jsx)("div",{className:"metmask-hint",children:Object(a.jsx)("span",{children:"Please confirm a pending Ethereum transaction."})})]})};var de=function(){var e=Object(o.b)(),t=e.connector,n=e.chainId,i=r.a.useState(),c=Object(b.a)(i,2),l=c[0],u=c[1];r.a.useEffect((function(){l&&l===t&&u(void 0)}),[l,t]),function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(o.b)(),n=t.active,a=t.error,r=t.activate;Object(s.useEffect)((function(){var t=window.ethereum;if(t&&t.on&&!n&&!a&&!e){var s=function(){console.log("Handling 'connect' event"),r(O)},i=function(e){console.log("Handling 'chainChanged' event with payload",e),r(O)},c=function(e){console.log("Handling 'accountsChanged' event with payload",e),e.length>0&&r(O)},o=function(e){console.log("Handling 'networkChanged' event with payload",e),r(O)};return t.on("connect",s),t.on("chainChanged",i),t.on("accountsChanged",c),t.on("networkChanged",o),function(){t.removeListener&&(t.removeListener("connect",s),t.removeListener("chainChanged",i),t.removeListener("accountsChanged",c),t.removeListener("networkChanged",o))}}}),[n,a,e,r])}(!function(){var e=Object(o.b)(),t=e.activate,n=e.active,a=Object(s.useState)(!1),r=Object(b.a)(a,2),i=r[0],c=r[1];return Object(s.useEffect)((function(){O.isAuthorized().then((function(e){e?t(O,void 0,!0).catch((function(){c(!0)})):c(!0)}))}),[t]),Object(s.useEffect)((function(){!i&&n&&c(!0)}),[i,n]),i}()||!!l);var h=r.a.useState(n),f=Object(b.a)(h,2),j=f[0],m=f[1];r.a.useEffect((function(){j&&j!==n&&g(void 0),m(n)}),[j,n]);var y=r.a.useState(void 0),x=Object(b.a)(y,2),v=x[0],g=x[1];return r.a.useEffect((function(){v||Object(p.a)(d.a.mark((function e(){var t,a,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.hash){e.next=8;break}return t=window.location.hash.slice(1),e.next=4,L(t);case 4:a=e.sent,g(a),e.next=13;break;case 8:return console.log("currentChain(chainId)",le(n)),e.next=11,P(le(n));case 11:s=e.sent,g(s);case 13:case"end":return e.stop()}}),e)})))()}),[v,n]),v?(document.querySelector("#main > .inner").style.paddingLeft=0,document.querySelector("#main > .inner").style.paddingRight=0,Object(a.jsxs)("div",{children:[Object(a.jsx)("section",{id:"redemption-section",children:Object(a.jsx)("div",{id:"container19",className:"container default full screen",style:{minHeight:"auto"},children:Object(a.jsx)("div",{className:"wrapper",children:Object(a.jsx)("div",{className:"inner",style:{padding:"3em 0em 1em 0em"},children:Object(a.jsx)(M,{})})})})}),Object(a.jsx)(U.a,{display:"flex",flexDirection:"column",style:{marginTop:"3em",color:"lightgray"},children:v.map((function(e){return Object(a.jsx)(ue,{saltSeason:e},e.id)}))})]})):Object(a.jsx)(T,{height:"200px",width:"200px"})};function pe(e){return new l.a(e)}var be=function(){return Object(a.jsx)(o.a,{getLibrary:pe,children:Object(a.jsx)(de,{})})},he=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,994)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),r(e),i(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(be,{})}),document.getElementById("root")),he()}},[[739,1,2]]]);
//# sourceMappingURL=main.867e8b0e.chunk.js.map