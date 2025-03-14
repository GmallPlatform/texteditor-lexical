"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const t=require("./index-CuK9MUGs.cjs"),c=require("react"),L=require("./useLexicalNodeSelection.prod-sIqzeWoO.cjs"),a=require("lexical");function K(e){const n=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const r in e)if(r!=="default"){const i=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:()=>e[r]})}}return n.default=e,Object.freeze(n)}const M=K(c);function B(...e){return e.filter(Boolean).join(" ")}function W({"data-test-id":e,children:n,className:r,onClick:i,disabled:d,small:o,title:s}){return t.jsxRuntimeExports.jsx("button",{disabled:d,className:B("Button__root",d&&"Button__disabled",o&&"Button__small",r),onClick:i,title:s,"aria-label":s,...e&&{"data-test-id":e},children:n})}function Y({children:e,label:n,className:r,...i}){return t.jsxRuntimeExports.jsxs("div",{className:"Input__wrapper",children:[t.jsxRuntimeExports.jsx("label",{style:{marginTop:"-1em"},className:"Input__label",children:n}),t.jsxRuntimeExports.jsx("select",{...i,className:r||"select",children:e})]})}function F({defaultSelection:e}){const[n]=t.o();return c.useEffect(()=>{n.focus(()=>{const r=document.activeElement,i=n.getRootElement();i===null||r!==null&&i.contains(r)||i.focus({preventScroll:!0})},{defaultSelection:e})},[e,n]),null}function N(e,n){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},N(e,n)}var D={error:null},q=function(e){var n,r;function i(){for(var o,s=arguments.length,u=new Array(s),p=0;p<s;p++)u[p]=arguments[p];return(o=e.call.apply(e,[this].concat(u))||this).state=D,o.resetErrorBoundary=function(){for(var f,g=arguments.length,x=new Array(g),m=0;m<g;m++)x[m]=arguments[m];o.props.onReset==null||(f=o.props).onReset.apply(f,x),o.reset()},o}r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,N(n,r),i.getDerivedStateFromError=function(o){return{error:o}};var d=i.prototype;return d.reset=function(){this.setState(D)},d.componentDidCatch=function(o,s){var u,p;(u=(p=this.props).onError)==null||u.call(p,o,s)},d.componentDidUpdate=function(o,s){var u,p,f,g,x=this.state.error,m=this.props.resetKeys;x!==null&&s.error!==null&&((f=o.resetKeys)===void 0&&(f=[]),(g=m)===void 0&&(g=[]),f.length!==g.length||f.some(function(h,l){return!Object.is(h,g[l])}))&&((u=(p=this.props).onResetKeysChange)==null||u.call(p,o.resetKeys,m),this.reset())},d.render=function(){var o=this.state.error,s=this.props,u=s.fallbackRender,p=s.FallbackComponent,f=s.fallback;if(o!==null){var g={error:o,resetErrorBoundary:this.resetErrorBoundary};if(M.isValidElement(f))return f;if(typeof u=="function")return u(g);if(p)return M.createElement(p,g);throw new Error("react-error-boundary requires either a fallback, fallbackRender, or FallbackComponent prop")}return this.props.children},i}(M.Component);function U({children:e,onError:n}){return t.jsxRuntimeExports.jsx(q,{fallback:t.jsxRuntimeExports.jsx("div",{style:{border:"1px solid #f00",color:"#f00",padding:"8px"},children:"An error was thrown."}),onError:n,children:e})}const I=[["Cat","rgb(125, 50, 0)"],["Dog","rgb(100, 0, 0)"],["Rabbit","rgb(150, 0, 0)"],["Frog","rgb(200, 0, 0)"],["Fox","rgb(200, 75, 0)"],["Hedgehog","rgb(0, 75, 0)"],["Pigeon","rgb(0, 125, 0)"],["Squirrel","rgb(75, 100, 0)"],["Bear","rgb(125, 100, 0)"],["Tiger","rgb(0, 0, 150)"],["Leopard","rgb(0, 0, 200)"],["Zebra","rgb(0, 0, 250)"],["Wolf","rgb(0, 100, 150)"],["Owl","rgb(0, 100, 100)"],["Gull","rgb(100, 0, 100)"],["Squid","rgb(150, 0, 150)"]],A=I[Math.floor(Math.random()*I.length)],z=c.createContext({clientID:0,color:A[1],isCollabActive:!1,name:A[0],yjsDocMap:new Map});function Z(e,n){return c.useContext(z)}function k(e){const n=e.transform();return n!==null?new Set([n]):new Set}function G({initialEditor:e,children:n,initialNodes:r,initialTheme:i,skipCollabChecks:d}){const o=c.useRef(!1),s=c.useContext(t.r);s==null&&function(h,...l){const E=new URL("https://lexical.dev/docs/error"),_=new URLSearchParams;_.append("code",h);for(const j of l)_.append("v",j);throw E.search=_.toString(),Error(`Minified Lexical error #${h}; visit ${E.toString()} for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`)}(9);const[u,{getTheme:p}]=s,f=c.useMemo(()=>{const h=i||p()||void 0,l=t.t(s,h);if(h!==void 0&&(e._config.theme=h),e._parentEditor=u,r)for(let E of r){let _=null,j=null;if(typeof E!="function"){const v=E;E=v.replace,_=v.with,j=v.withKlass||null}const O=e._nodes.get(E.getType());e._nodes.set(E.getType(),{exportDOM:O?O.exportDOM:void 0,klass:E,replace:_,replaceWithKlass:j,transforms:k(E)})}else{const E=e._nodes=new Map(u._nodes);for(const[_,j]of E)e._nodes.set(_,{exportDOM:j.exportDOM,klass:j.klass,replace:j.replace,replaceWithKlass:j.replaceWithKlass,transforms:k(j.klass)})}return e._config.namespace=u._config.namespace,e._editable=u._editable,[e,l]},[]),{isCollabActive:g,yjsDocMap:x}=Z(),m=d||o.current||x.has(e.getKey());return c.useEffect(()=>{m&&(o.current=!0)},[m]),c.useEffect(()=>u.registerEditableListener(h=>{e.setEditable(h)}),[e,u]),t.jsxRuntimeExports.jsx(t.r.Provider,{value:f,children:!g||m?n:null})}const H=new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/);function V(e){return e==="https://"||H.test(e)}function J({hasLinkAttributes:e=!1}){return t.jsxRuntimeExports.jsx(t.d,{validateUrl:V,attributes:e?{rel:"noopener noreferrer",target:"_blank"}:void 0})}function Q({className:e,placeholder:n,placeholderClassName:r}){return t.jsxRuntimeExports.jsx(t.x,{className:e??"ContentEditable__root","aria-placeholder":n,placeholder:t.jsxRuntimeExports.jsx("div",{className:r??"ContentEditable__placeholder",children:n})})}const T=new Set;function X(e){if(!T.has(e))throw new Promise(n=>{const r=new Image;r.src=e,r.onload=()=>{T.add(e),n(null)}})}function ee({altText:e,className:n,imageRef:r,src:i,width:d,height:o,position:s}){return X(i),t.jsxRuntimeExports.jsx("img",{className:n||void 0,src:i,alt:e,ref:r,"data-position":s,style:{display:"block",height:o,width:d},draggable:"false"})}function te({activeEditor:e,nodeKey:n,onClose:r}){const d=e.getEditorState().read(()=>a.$getNodeByKey(n)),[o,s]=c.useState(d.getAltText()),[u,p]=c.useState(d.getShowCaption()),[f,g]=c.useState(d.getPosition()),x=l=>{p(l.target.checked)},m=l=>{g(l.target.value)},h=()=>{const l={altText:o,position:f,showCaption:u};d&&e.update(()=>{d.update(l)}),r()};return t.jsxRuntimeExports.jsxs(t.jsxRuntimeExports.Fragment,{children:[t.jsxRuntimeExports.jsx("div",{style:{marginBottom:"1em"},children:t.jsxRuntimeExports.jsx(t.TextInput,{label:"Alt Text",placeholder:"Descriptive alternative text",onChange:s,value:o,"data-test-id":"image-modal-alt-text-input"})}),t.jsxRuntimeExports.jsxs(Y,{style:{marginBottom:"1em",width:"208px"},value:f,label:"Position",name:"position",id:"position-select",onChange:m,children:[t.jsxRuntimeExports.jsx("option",{value:"left",children:"Left"}),t.jsxRuntimeExports.jsx("option",{value:"right",children:"Right"}),t.jsxRuntimeExports.jsx("option",{value:"full",children:"Full Width"})]}),t.jsxRuntimeExports.jsxs("div",{className:"Input__wrapper",children:[t.jsxRuntimeExports.jsx("input",{id:"caption",type:"checkbox",checked:u,onChange:x}),t.jsxRuntimeExports.jsx("label",{htmlFor:"caption",children:"Show Caption"})]}),t.jsxRuntimeExports.jsx(t.DialogActions,{children:t.jsxRuntimeExports.jsx(W,{"data-test-id":"image-modal-file-upload-btn",onClick:()=>h(),children:"Confirm"})})]})}function ne({src:e,altText:n,nodeKey:r,width:i,height:d,showCaption:o,caption:s,position:u}){console.log("InlineImageComponent");const[p]=t.useModal(),f=c.useRef(null),g=c.useRef(null),[x,m,h]=L.u(r),[l]=t.o(),[E,_]=c.useState(null),j=c.useRef(null),O=t.a(),v=c.useCallback(C=>{const R=a.$getSelection();return x&&a.$isNodeSelection(R)&&(C.preventDefault(),x&&a.$isNodeSelection(R)&&l.update(()=>{R.getNodes().forEach(S=>{t.$isInlineImageNode(S)&&S.remove()})})),!1},[l,x]),y=c.useCallback(C=>{const R=a.$getSelection(),b=g.current;if(x&&a.$isNodeSelection(R)&&R.getNodes().length===1){if(o)return a.$setSelection(null),C.preventDefault(),s.focus(),!0;if(b!==null&&b!==document.activeElement)return C.preventDefault(),b.focus(),!0}return!1},[s,x,o]),w=c.useCallback(C=>j.current===s||g.current===C.target?(a.$setSelection(null),l.update(()=>{m(!0);const R=l.getRootElement();R!==null&&R.focus()}),!0):!1,[s,l,m]);c.useEffect(()=>{let C=!0;const R=t.$(l.registerUpdateListener(({editorState:b})=>{C&&_(b.read(()=>a.$getSelection()))}),l.registerCommand(a.SELECTION_CHANGE_COMMAND,(b,S)=>(j.current=S,!1),a.COMMAND_PRIORITY_LOW),l.registerCommand(a.CLICK_COMMAND,b=>{const S=b;return S.target===f.current?(S.shiftKey?m(!x):(h(),m(!0)),!0):!1},a.COMMAND_PRIORITY_LOW),l.registerCommand(a.DRAGSTART_COMMAND,b=>b.target===f.current?(b.preventDefault(),!0):!1,a.COMMAND_PRIORITY_LOW),l.registerCommand(a.KEY_DELETE_COMMAND,v,a.COMMAND_PRIORITY_LOW),l.registerCommand(a.KEY_BACKSPACE_COMMAND,v,a.COMMAND_PRIORITY_LOW),l.registerCommand(a.KEY_ENTER_COMMAND,y,a.COMMAND_PRIORITY_LOW),l.registerCommand(a.KEY_ESCAPE_COMMAND,w,a.COMMAND_PRIORITY_LOW));return()=>{C=!1,R()}},[h,l,x,r,v,y,w,m]);const $=x&&a.$isNodeSelection(E),P=x&&O;return t.jsxRuntimeExports.jsxs(c.Suspense,{fallback:null,children:[t.jsxRuntimeExports.jsxs(t.jsxRuntimeExports.Fragment,{children:[t.jsxRuntimeExports.jsx("span",{draggable:$,children:t.jsxRuntimeExports.jsx(ee,{className:P?`focused ${a.$isNodeSelection(E)?"draggable":""}`:null,src:e,altText:n,imageRef:f,width:i,height:d,position:u})}),o&&t.jsxRuntimeExports.jsx("span",{className:"image-caption-container",children:t.jsxRuntimeExports.jsxs(G,{initialEditor:s,children:[t.jsxRuntimeExports.jsx(F,{}),t.jsxRuntimeExports.jsx(J,{}),t.jsxRuntimeExports.jsx(t.h,{contentEditable:t.jsxRuntimeExports.jsx(Q,{placeholder:"Enter a caption...",placeholderClassName:"InlineImageNode__placeholder",className:"InlineImageNode__contentEditable"}),ErrorBoundary:U})]})})]}),p]})}exports.UpdateInlineImageDialog=te;exports.default=ne;
