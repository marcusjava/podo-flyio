(this["webpackJsonpfront-antd"]=this["webpackJsonpfront-antd"]||[]).push([[19],{1070:function(e,t,n){"use strict";n.r(t);var a=n(81),r=n.n(a),i=n(112),o=n(64),s=n(0),l=n.n(s),c=n(603),u=n(362),p=n(234),m=n(360),d=n(1078),f=n(359),h=n(357),g=n(1080),v=n(479),k=n(446),b=n(82),y=n(34),E=n.n(y),O=n(44),w=n(453),S=n(548),C=n.n(S),I=n(422),x=n(26),j=n(102),M=n.n(j),D=n(103),N=c.a.Option;t.default=function(){var e=Object(s.useState)(null),t=Object(o.a)(e,2),n=t[0],a=t[1],y=Object(s.useState)([]),S=Object(o.a)(y,2),j=S[0],P=S[1],F=Object(s.useState)([]),R=Object(o.a)(F,2),V=R[0],T=R[1],L=u.a.useForm(),B=Object(o.a)(L,1)[0],U=Object(x.g)(),q=Object(O.useDispatch)(),A=Object(O.useSelector)((function(e){return e.client.client})),Y=A.success,z=A.error,W=function(){var e=Object(i.a)(r.a.mark((function e(){var t;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados");case 2:t=e.sent,P(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return B.setFieldsValue({address:{city:void 0}}),e.next=3,E.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(t,"/municipios"));case 3:n=e.sent,T(n.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(s.useEffect)((function(){return W(),function(){q({type:"CLEAR_CLIENT_STATE"})}}),[]),Object(s.useEffect)((function(){Y&&(p.b.success("Cliente salvo com sucesso"),B.resetFields(),U.goBack()),Object.keys(z).length>0&&(p.b.error("Ocorreu um erro",[z.message]),B.setFields([{name:z.path,errors:[z.message]}]))}),[z,Y]);var J=function(){var e=Object(i.a)(r.a.mark((function e(t){var a,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=D.b().shape({name:D.d().required("Nome obrigatorio"),address:D.b().shape({street:D.d().required("Rua obrigatoria"),neighborhood:D.d().required("Bairro obrigatorio"),city:D.d().required("Cidade obrigatoria"),state:D.d().required("Estado obrigatoria")})}),e.next=4,a.validate(t,{abortEarly:!1});case 4:(i=new FormData).append("id",t.id),i.append("thumbnail",n),i.append("name",t.name),i.append("email",t.email||""),i.append("contact",t.contact),i.append("instagram",t.instagram||""),i.append("cpf",t.cpf),i.append("nasc",M()(t.nasc).format("YYYY-MM-DD")),i.append("address",JSON.stringify(t.address)),i.append("occupation",t.occupation||""),i.append("sex",t.sex||""),i.append("etnia",t.etnia||""),q(Object(I.c)(i)),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),e.t0 instanceof D.a&&e.t0.inner.forEach((function(e){B.setFields([{name:e.path,errors:[e.message]}])}));case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}();return l.a.createElement(m.a,{md:16},l.a.createElement(d.a,{bordered:!1},l.a.createElement(u.a,{name:"client",form:B,onFinish:J},l.a.createElement(f.a,{justify:"center"},l.a.createElement(m.a,{span:4,style:{textAlign:"center",marginTop:"15px"}},l.a.createElement(w.a,{onFileUpload:a}))),l.a.createElement(u.a.Item,{name:"id"},l.a.createElement(h.a,{type:"hidden"})),l.a.createElement(u.a.Item,null,l.a.createElement(u.a.Item,{name:"name",label:"Nome",style:{display:"inline-block",width:"50%",marginRight:"45px"},rules:[{required:!0,message:"Informe o Nome"}]},l.a.createElement(h.a,null)),l.a.createElement(u.a.Item,{name:"email",label:"Email",style:{display:"inline-block",width:"40%"},rules:[{required:!1,message:"Informe o Email",type:"email"}]},l.a.createElement(h.a,null))),l.a.createElement(u.a.Item,null,l.a.createElement(u.a.Item,{name:"cpf",label:"CPF",style:{display:"inline-block",width:"16%",marginRight:"25px"}},l.a.createElement(C.a,{mask:"99999999999"},(function(e){return l.a.createElement(h.a,e)}))),l.a.createElement(u.a.Item,{name:"contact",label:"Contato",style:{display:"inline-block",width:"16%",marginRight:"25px"},rules:[{required:!0,message:"Informe o contato"}]},l.a.createElement(C.a,{mask:"99 99999-9999"},(function(e){return l.a.createElement(h.a,e)}))),l.a.createElement(u.a.Item,{style:{display:"inline-block",width:"15%",marginRight:"30px"},rules:[{required:!0,message:"Informe a Data Nascimento"}],name:"nasc",label:"Nasc."},l.a.createElement(g.a,{format:"DD/MM/YYYY"})),l.a.createElement(u.a.Item,{name:"instagram",label:"Instagram",style:{display:"inline-block",width:"30%"}},l.a.createElement(h.a,null))),l.a.createElement(u.a.Item,null,l.a.createElement(u.a.Item,{name:["address","street"],label:"Rua",style:{display:"inline-block",width:"50%",marginRight:"45px"},rules:[{required:!0,message:"Informe a Rua"}]},l.a.createElement(h.a,null)),l.a.createElement(u.a.Item,{name:["address","neighborhood"],label:"Bairro",style:{display:"inline-block",width:"30%"},rules:[{required:!0,message:"Informe o Bairro"}]},l.a.createElement(h.a,null))),l.a.createElement(u.a.Item,null,l.a.createElement(u.a.Item,{name:["address","state"],label:"Estado",style:{display:"inline-block",width:"6%",marginRight:"15px"},rules:[{required:!0,message:"Informe o Estado"}]},l.a.createElement(c.a,{showSearch:!0,onChange:function(e){return function(e){X(e)}(e)},notFoundContent:0===j.length?l.a.createElement(v.a,{size:"small"}):null},j.map((function(e){return l.a.createElement(N,{key:e.id,value:e.sigla},e.sigla)})))),l.a.createElement(u.a.Item,{name:["address","city"],label:"Cidade",style:{display:"inline-block",width:"calc(44% - 15px)",marginRight:"45px"},rules:[{required:!0,message:"Informe a Cidade"}]},l.a.createElement(c.a,{showSearch:!0,placeholder:"Selecione",disabled:0===V.length,notFoundContent:0===V.length?l.a.createElement(v.a,{size:"small"}):null},V.map((function(e){return l.a.createElement(N,{key:e.id,value:e.nome},e.nome)})))),l.a.createElement(u.a.Item,{name:["address","cep"],label:"CEP",style:{display:"inline-block",width:"10%"}},l.a.createElement(C.a,{mask:"99999999"},(function(e){return l.a.createElement(h.a,e)})))),l.a.createElement(u.a.Item,null,l.a.createElement(u.a.Item,{name:"occupation",label:"Profiss\xe3o",style:{display:"inline-block",width:"35%",marginRight:"15px"}},l.a.createElement(h.a,null)),l.a.createElement(u.a.Item,{name:"sex",label:"Sexo",style:{display:"inline-block",width:"calc(15% - 15px)",marginRight:"45px"}},l.a.createElement(c.a,{placeholder:"Selecione"},l.a.createElement(N,{key:"Masculino"},"Masculino"),l.a.createElement(N,{key:"Feminino"},"Feminino"))),l.a.createElement(u.a.Item,{name:"etnia",label:"Etnia",style:{display:"inline-block",width:"calc(15% - 8px)"}},l.a.createElement(c.a,{placeholder:"Selecione"},l.a.createElement(N,{key:"Branco"},"Branco"),l.a.createElement(N,{key:"Pardo"},"Pardo"),l.a.createElement(N,{key:"Negro"},"Negro"),l.a.createElement(N,{key:"Amarelo"},"Amarelo"),l.a.createElement(N,{key:"Indigena"},"Indigena")))),l.a.createElement(f.a,{justify:"end"},l.a.createElement(m.a,null,l.a.createElement(k.b,null,l.a.createElement(b.a,{type:"primary",htmlType:"submit"},"Salvar"),l.a.createElement(b.a,{type:"danger",htmlType:"button",onClick:function(){return U.goBack()}},"Cancelar")))))))}},422:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return c}));var a=n(8),r=n(72),i=n(34),o=n.n(i),s=function(e){return function(t){return t({type:a.j}),o.a.post("/clients/register",e).then((function(e){t({type:a.k,payload:e.data})})).catch((function(e){t({type:a.i,payload:e.response.data}),r.toastr.error(e.response.data.message)}))}},l=function(e){return function(t){return t({type:a.j}),o.a.get("/clients/".concat(e)).then((function(e){t({type:a.k,payload:e.data})})).catch((function(e){t({type:a.i,payload:e.response.data}),r.toastr.error(e.response.data.message)}))}},c=function(e){return function(t){return t({type:a.g}),o.a.get("/clients",{params:e}).then((function(e){t({type:a.h,payload:e.data})})).catch((function(e){t({type:a.f,payload:e.response.data})}))}}},451:function(e,t,n){var a=n(165),r=n(462),i=n(452),o=Math.max,s=Math.min;e.exports=function(e,t,n){var l,c,u,p,m,d,f=0,h=!1,g=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function k(t){var n=l,a=c;return l=c=void 0,f=t,p=e.apply(a,n)}function b(e){return f=e,m=setTimeout(E,t),h?k(e):p}function y(e){var n=e-d;return void 0===d||n>=t||n<0||g&&e-f>=u}function E(){var e=r();if(y(e))return O(e);m=setTimeout(E,function(e){var n=t-(e-d);return g?s(n,u-(e-f)):n}(e))}function O(e){return m=void 0,v&&l?k(e):(l=c=void 0,p)}function w(){var e=r(),n=y(e);if(l=arguments,c=this,d=e,n){if(void 0===m)return b(d);if(g)return clearTimeout(m),m=setTimeout(E,t),k(d)}return void 0===m&&(m=setTimeout(E,t)),p}return t=i(t)||0,a(n)&&(h=!!n.leading,u=(g="maxWait"in n)?o(i(n.maxWait)||0,t):u,v="trailing"in n?!!n.trailing:v),w.cancel=function(){void 0!==m&&clearTimeout(m),f=0,l=d=c=m=void 0},w.flush=function(){return void 0===m?p:O(r())},w}},453:function(e,t,n){"use strict";var a=n(64),r=n(0),i=n.n(r),o=n(1061),s=n(82),l=(n(454),n(776));t.a=function(e){var t=e.onFileUpload,n=e.imageURL,c=Object(r.useState)([]),u=Object(a.a)(c,2),p=u[0],m=u[1],d=Object(r.useState)(""),f=Object(a.a)(d,2),h=f[0],g=f[1];Object(r.useEffect)((function(){return n&&g(n),function(){m([])}}),[n]);var v={beforeUpload:function(e){var n=URL.createObjectURL(e);return g(n),t(e),!1},fileList:p};return i.a.createElement(o.a,Object.assign({name:"avatar",listType:"picture-card",className:"avatar-uploader"},v,{multi:!1}),h?i.a.createElement("img",{src:h,alt:"Avatar",style:{height:"150px",width:"150px"}}):i.a.createElement(s.a,null,i.a.createElement(l.a,null)))}},454:function(e,t,n){},479:function(e,t,n){"use strict";var a=n(2),r=n(3),i=n(11),o=n(12),s=n(14),l=n(15),c=n(0),u=n(6),p=n.n(u),m=n(23),d=n(451),f=n.n(d),h=n(43),g=n(37),v=n(16),k=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},b=(Object(g.a)("small","default","large"),null);var y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var o;Object(i.a)(this,n),(o=t.call(this,e)).debouncifyUpdateSpinning=function(e){var t=(e||o.props).delay;t&&(o.cancelExistingSpin(),o.updateSpinning=f()(o.originalUpdateSpinning,t))},o.updateSpinning=function(){var e=o.props.spinning;o.state.spinning!==e&&o.setState({spinning:e})},o.renderSpin=function(e){var t,n=e.getPrefixCls,i=e.direction,s=o.props,l=s.prefixCls,u=s.className,d=s.size,f=s.tip,h=s.wrapperClassName,g=s.style,y=k(s,["prefixCls","className","size","tip","wrapperClassName","style"]),E=o.state.spinning,O=n("spin",l),w=p()(O,(t={},Object(r.a)(t,"".concat(O,"-sm"),"small"===d),Object(r.a)(t,"".concat(O,"-lg"),"large"===d),Object(r.a)(t,"".concat(O,"-spinning"),E),Object(r.a)(t,"".concat(O,"-show-text"),!!f),Object(r.a)(t,"".concat(O,"-rtl"),"rtl"===i),t),u),S=Object(m.a)(y,["spinning","delay","indicator"]),C=c.createElement("div",Object(a.a)({},S,{style:g,className:w}),function(e,t){var n=t.indicator,a="".concat(e,"-dot");return null===n?null:Object(v.b)(n)?Object(v.a)(n,{className:p()(n.props.className,a)}):Object(v.b)(b)?Object(v.a)(b,{className:p()(b.props.className,a)}):c.createElement("span",{className:p()(a,"".concat(e,"-dot-spin"))},c.createElement("i",{className:"".concat(e,"-dot-item")}),c.createElement("i",{className:"".concat(e,"-dot-item")}),c.createElement("i",{className:"".concat(e,"-dot-item")}),c.createElement("i",{className:"".concat(e,"-dot-item")}))}(O,o.props),f?c.createElement("div",{className:"".concat(O,"-text")},f):null);if(o.isNestedPattern()){var I=p()("".concat(O,"-container"),Object(r.a)({},"".concat(O,"-blur"),E));return c.createElement("div",Object(a.a)({},S,{className:p()("".concat(O,"-nested-loading"),h)}),E&&c.createElement("div",{key:"loading"},C),c.createElement("div",{className:I,key:"container"},o.props.children))}return C};var s=e.spinning,l=function(e,t){return!!e&&!!t&&!isNaN(Number(t))}(s,e.delay);return o.state={spinning:s&&!l},o.originalUpdateSpinning=o.updateSpinning,o.debouncifyUpdateSpinning(e),o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.updateSpinning()}},{key:"componentDidUpdate",value:function(){this.debouncifyUpdateSpinning(),this.updateSpinning()}},{key:"componentWillUnmount",value:function(){this.cancelExistingSpin()}},{key:"cancelExistingSpin",value:function(){var e=this.updateSpinning;e&&e.cancel&&e.cancel()}},{key:"isNestedPattern",value:function(){return!(!this.props||"undefined"===typeof this.props.children)}},{key:"render",value:function(){return c.createElement(h.a,null,this.renderSpin)}}],[{key:"setDefaultIndicator",value:function(e){b=e}}]),n}(c.Component);y.defaultProps={spinning:!0,size:"default",wrapperClassName:""},t.a=y},548:function(e,t,n){e.exports=n(549)},549:function(e,t,n){"use strict";var a,r=(a=n(0))&&"object"==typeof a&&"default"in a?a.default:a,i=n(28);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function s(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),a=0;a<n.length;a++){var r=n[a],i=Object.getOwnPropertyDescriptor(t,r);i&&i.configurable&&void 0===e[r]&&Object.defineProperty(e,r,i)}}(e.prototype.constructor=e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var c=function(e,t,n,a,r,i,o,s){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[n,a,r,i,o,s],u=0;(l=new Error(t.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function u(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var a=e.createTextRange();a.collapse(!0),a.moveStart("character",t),a.moveEnd("character",n-t),a.select()}}var p={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function m(e,t,n){var a="",r="",i=null,o=[];if(void 0===t&&(t="_"),null==n&&(n=p),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var s=!1;return e.split("").forEach((function(e){s=!s&&"\\"===e||(s||!n[e]?(o.push(a.length),a.length===o.length-1&&(r+=e)):i=a.length+1,a+=e,!1)})),{maskChar:t,formatChars:n,prefix:r,mask:a,lastEditablePosition:i,permanents:o}}function d(e,t){return-1!==e.permanents.indexOf(t)}function f(e,t,n){var a=e.mask,r=e.formatChars;if(!n)return!1;if(d(e,t))return a[t]===n;var i=r[a[t]];return new RegExp(i).test(n)}function h(e,t){return t.split("").every((function(t,n){return d(e,n)||!f(e,n,t)}))}function g(e,t){var n=e.maskChar,a=e.prefix;if(!n){for(;t.length>a.length&&d(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var r=a.length,i=t.length;i>=a.length;i--){var o=t[i];if(!d(e,i)&&f(e,i,o)){r=i+1;break}}return r}function v(e,t){return g(e,t)===e.mask.length}function k(e,t){var n=e.maskChar,a=e.mask,r=e.prefix;if(!n){for((t=b(e,"",t,0)).length<r.length&&(t=r);t.length<a.length&&d(e,t.length);)t+=a[t.length];return t}if(t)return b(e,k(e,""),t,0);for(var i=0;i<a.length;i++)d(e,i)?t+=a[i]:t+=n;return t}function b(e,t,n,a){var r=e.mask,i=e.maskChar,o=e.prefix,s=n.split(""),l=v(e,t);return!i&&a>t.length&&(t+=r.slice(t.length,a)),s.every((function(n){for(;u=n,d(e,c=a)&&u!==r[c];){if(a>=t.length&&(t+=r[a]),s=n,i&&d(e,a)&&s===i)return!0;if(++a>=r.length)return!1}var s,c,u;return!f(e,a,n)&&n!==i||(a<t.length?t=i||l||a<o.length?t.slice(0,a)+n+t.slice(a+1):(t=t.slice(0,a)+n+t.slice(a),k(e,t)):i||(t+=n),++a<r.length)})),t}function y(e,t){for(var n=e.mask,a=t;a<n.length;++a)if(!d(e,a))return a;return null}function E(e){return e||0===e?e+"":""}function O(e,t,n,a,r){var i=e.mask,o=e.prefix,s=e.lastEditablePosition,l=t,c="",u=0,p=0,m=Math.min(r.start,n.start);return n.end>r.start?p=(u=function(e,t,n,a){var r=e.mask,i=e.maskChar,o=n.split(""),s=a;return o.every((function(t){for(;o=t,d(e,n=a)&&o!==r[n];)if(++a>=r.length)return!1;var n,o;return(f(e,a,t)||t===i)&&a++,a<r.length})),a-s}(e,0,c=l.slice(r.start,n.end),m))?r.length:0:l.length<a.length&&(p=a.length-l.length),l=a,p&&(1!==p||r.length||(m=r.start===n.start?y(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!d(e,n))return n;return null}(e,n.start)),l=function(e,t,n,a){var r=n+a,i=e.maskChar,o=e.mask,s=e.prefix,l=t.split("");if(i)return l.map((function(t,a){return a<n||r<=a?t:d(e,a)?o[a]:i})).join("");for(var c=r;c<l.length;c++)d(e,c)&&(l[c]="");return n=Math.max(s.length,n),l.splice(n,r-n),t=l.join(""),k(e,t)}(e,l,m,p)),l=b(e,l,c,m),(m+=u)>=i.length?m=i.length:m<o.length&&!u?m=o.length:m>=o.length&&m<s&&u&&(m=y(e,m)),c||(c=null),{value:l=k(e,l),enteredString:c,selection:{start:m,end:m}}}function w(e){return"function"==typeof e}function S(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function C(e){return(S()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function I(e){(S()||clearTimeout)(e)}var x=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=C(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(I(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=i.findDOMNode(l(l(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=g(n.maskOptions,n.value),t=y(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,a){void 0===a&&(a={});var r=n.getInputDOMNode(),i=n.isFocused();r&&i&&(a.deferred||u(r,e,t),null!==n.selectionDeferId&&I(n.selectionDeferId),n.selectionDeferId=C((function(){n.selectionDeferId=null,u(r,e,t)})),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var a=document.selection.createRange();a.parentElement()===e&&(t=-a.moveStart("character",-e.value.length),n=-a.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,a=e.maskChar,r=e.permanents,i=e.formatChars;return{mask:t,maskChar:a,permanents:r,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:i}},n.isInputAutofilled=function(e,t,a,r){var i=n.getInputDOMNode();try{if(i.matches(":-webkit-autofill"))return!0}catch(c){}return!n.focused||r.end<a.length&&t.end===e.length},n.onChange=function(e){var t=l(l(n)).beforePasteState,a=l(l(n)).previousSelection,r=n.props.beforeMaskedValueChange,i=n.getInputValue(),o=n.value,s=n.getSelection();n.isInputAutofilled(i,s,o,a)&&(o=k(n.maskOptions,""),a={start:0,end:0,length:0}),t&&(a=t.selection,o=t.value,s={start:a.start+i.length,end:a.start+i.length,length:0},i=o.slice(0,a.start)+i+o.slice(a.end),n.beforePasteState=null);var c=O(n.maskOptions,i,s,o,a),u=c.enteredString,p=c.selection,m=c.value;if(w(r)){var d=r({value:m,selection:p},{value:o,selection:a},u,n.getBeforeMaskedValueChangeConfig());m=d.value,p=d.selection}n.setInputValue(m),w(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(p.start,p.end,{deferred:!0}):n.setSelection(p.start,p.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions,r=a.mask,i=a.prefix;if(n.focused=!0,n.mounted=!0,r){if(n.value)g(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var o=k(n.maskOptions,i),s=k(n.maskOptions,o),l=g(n.maskOptions,s),c=y(n.maskOptions,l),u={start:c,end:c};if(w(t)){var p=t({value:s,selection:u},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());s=p.value,u=p.selection}var m=s!==n.getInputValue();m&&n.setInputValue(s),m&&w(n.props.onChange)&&n.props.onChange(e),n.setSelection(u.start,u.end)}n.runSaveSelectionLoop()}w(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,a=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,a&&!n.props.alwaysShowMask&&h(n.maskOptions,n.value)){var r="";w(t)&&(r=t({value:r,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var i=r!==n.getInputValue();i&&n.setInputValue(r),i&&w(n.props.onChange)&&n.props.onChange(e)}w(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),n.focused){var a=Math.abs(t.clientX-n.mouseDownX),r=Math.abs(t.clientY-n.mouseDownY),i=Math.max(a,r),o=(new Date).getTime()-n.mouseDownTime;(i<=10&&o<=200||i<=5&&o<=300)&&n.setCursorToEnd()}}))}w(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){w(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&w(n.props.inputRef)&&n.props.inputRef(e)};var a=t.mask,r=t.maskChar,o=t.formatChars,s=t.alwaysShowMask,c=t.beforeMaskedValueChange,p=t.defaultValue,d=t.value;n.maskOptions=m(a,r,o),null==p&&(p=""),null==d&&(d=p);var f=E(d);if(n.maskOptions.mask&&(s||f)&&(f=k(n.maskOptions,f),w(c))){var v=t.value;null==t.value&&(v=p),f=c({value:f,selection:null},{value:v=E(v),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=f,n}s(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,a=t.alwaysShowMask,r=t.mask,i=t.maskChar,o=t.formatChars,s=this.maskOptions,l=a||this.isFocused(),c=null!=this.props.value,u=c?E(this.props.value):this.value,p=e?e.start:null;if(this.maskOptions=m(r,i,o),this.maskOptions.mask){!s.mask&&this.isFocused()&&this.runSaveSelectionLoop();var d=this.maskOptions.mask&&this.maskOptions.mask!==s.mask;if(s.mask||c||(u=this.getInputValue()),(d||this.maskOptions.mask&&(u||l))&&(u=k(this.maskOptions,u)),d){var f=g(this.maskOptions,u);(null===p||f<p)&&(p=v(this.maskOptions,u)?f:y(this.maskOptions,f))}!this.maskOptions.mask||!h(this.maskOptions,u)||l||c&&this.props.value||(u="");var b={start:p,end:p};if(w(n)){var O=n({value:u,selection:b},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());u=O.value,b=O.selection}this.value=u;var S=this.getInputValue()!==this.value;S?(this.setInputValue(this.value),this.forceUpdate()):d&&this.forceUpdate();var C=!1;null!=b.start&&null!=b.end&&(C=!e||e.start!==b.start||e.end!==b.end),(C||S)&&this.setSelection(b.start,b.end)}else s.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&I(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),a=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],0<=t.indexOf(n)||(r[n]=e[n]);return r}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){w(n)||c(!1);var i=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],s=o({},a);i.forEach((function(e){return delete s[e]})),e=n(s),i.filter((function(t){return null!=e.props[t]&&e.props[t]!==a[t]})).length&&c(!1)}else e=r.createElement("input",o({ref:this.handleRef},a));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(a.disabled||a.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),null!=a.value&&(l.value=this.value)),e=r.cloneElement(e,l)},t}(r.Component);e.exports=x}}]);
//# sourceMappingURL=19.2304c160.chunk.js.map