/*! jQuery v1.10.2 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery.min.map
*/
(function(e,t){var n,r,i=typeof t,o=e.location,a=e.document,s=a.documentElement,l=e.jQuery,u=e.$,c={},p=[],f="1.10.2",d=p.concat,h=p.push,g=p.slice,m=p.indexOf,y=c.toString,v=c.hasOwnProperty,b=f.trim,x=function(e,t){return new x.fn.init(e,t,r)},w=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=/\S+/g,C=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,N=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,k=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,E=/^[\],:{}\s]*$/,S=/(?:^|:|,)(?:\s*\[)+/g,A=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,j=/"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,D=/^-ms-/,L=/-([\da-z])/gi,H=function(e,t){return t.toUpperCase()},q=function(e){(a.addEventListener||"load"===e.type||"complete"===a.readyState)&&(_(),x.ready())},_=function(){a.addEventListener?(a.removeEventListener("DOMContentLoaded",q,!1),e.removeEventListener("load",q,!1)):(a.detachEvent("onreadystatechange",q),e.detachEvent("onload",q))};x.fn=x.prototype={jquery:f,constructor:x,init:function(e,n,r){var i,o;if(!e)return this;if("string"==typeof e){if(i="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:N.exec(e),!i||!i[1]&&n)return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e);if(i[1]){if(n=n instanceof x?n[0]:n,x.merge(this,x.parseHTML(i[1],n&&n.nodeType?n.ownerDocument||n:a,!0)),k.test(i[1])&&x.isPlainObject(n))for(i in n)x.isFunction(this[i])?this[i](n[i]):this.attr(i,n[i]);return this}if(o=a.getElementById(i[2]),o&&o.parentNode){if(o.id!==i[2])return r.find(e);this.length=1,this[0]=o}return this.context=a,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return g.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,n,r,i,o,a,s=arguments[0]||{},l=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[1]||{},l=2),"object"==typeof s||x.isFunction(s)||(s={}),u===l&&(s=this,--l);u>l;l++)if(null!=(o=arguments[l]))for(i in o)e=s[i],r=o[i],s!==r&&(c&&r&&(x.isPlainObject(r)||(n=x.isArray(r)))?(n?(n=!1,a=e&&x.isArray(e)?e:[]):a=e&&x.isPlainObject(e)?e:{},s[i]=x.extend(c,a,r)):r!==t&&(s[i]=r));return s},x.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=l),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){if(e===!0?!--x.readyWait:!x.isReady){if(!a.body)return setTimeout(x.ready);x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(a,[x]),x.fn.trigger&&x(a).trigger("ready").off("ready"))}},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray||function(e){return"array"===x.type(e)},isWindow:function(e){return null!=e&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?c[y.call(e)]||"object":typeof e},isPlainObject:function(e){var n;if(!e||"object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!v.call(e,"constructor")&&!v.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(r){return!1}if(x.support.ownLast)for(n in e)return v.call(e,n);for(n in e);return n===t||v.call(e,n)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||a;var r=k.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:function(n){return e.JSON&&e.JSON.parse?e.JSON.parse(n):null===n?n:"string"==typeof n&&(n=x.trim(n),n&&E.test(n.replace(A,"@").replace(j,"]").replace(S,"")))?Function("return "+n)():(x.error("Invalid JSON: "+n),t)},parseXML:function(n){var r,i;if(!n||"string"!=typeof n)return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(o){r=t}return r&&r.documentElement&&!r.getElementsByTagName("parsererror").length||x.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&x.trim(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(D,"ms-").replace(L,H)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,a=M(e);if(n){if(a){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(a){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:b&&!b.call("\ufeff\u00a0")?function(e){return null==e?"":b.call(e)}:function(e){return null==e?"":(e+"").replace(C,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(M(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){var r;if(t){if(m)return m.call(t,e,n);for(r=t.length,n=n?0>n?Math.max(0,r+n):n:0;r>n;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,o=0;if("number"==typeof r)for(;r>o;o++)e[i++]=n[o];else while(n[o]!==t)e[i++]=n[o++];return e.length=i,e},grep:function(e,t,n){var r,i=[],o=0,a=e.length;for(n=!!n;a>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,a=M(e),s=[];if(a)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(s[s.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(s[s.length]=r);return d.apply([],s)},guid:1,proxy:function(e,n){var r,i,o;return"string"==typeof n&&(o=e[n],n=e,e=o),x.isFunction(e)?(r=g.call(arguments,2),i=function(){return e.apply(n||this,r.concat(g.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):t},access:function(e,n,r,i,o,a,s){var l=0,u=e.length,c=null==r;if("object"===x.type(r)){o=!0;for(l in r)x.access(e,n,l,r[l],!0,a,s)}else if(i!==t&&(o=!0,x.isFunction(i)||(s=!0),c&&(s?(n.call(e,i),n=null):(c=n,n=function(e,t,n){return c.call(x(e),n)})),n))for(;u>l;l++)n(e[l],r,s?i:i.call(e[l],l,n(e[l],r)));return o?e:c?n.call(e):u?n(e[0],r):a},now:function(){return(new Date).getTime()},swap:function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i}}),x.ready.promise=function(t){if(!n)if(n=x.Deferred(),"complete"===a.readyState)setTimeout(x.ready);else if(a.addEventListener)a.addEventListener("DOMContentLoaded",q,!1),e.addEventListener("load",q,!1);else{a.attachEvent("onreadystatechange",q),e.attachEvent("onload",q);var r=!1;try{r=null==e.frameElement&&a.documentElement}catch(i){}r&&r.doScroll&&function o(){if(!x.isReady){try{r.doScroll("left")}catch(e){return setTimeout(o,50)}_(),x.ready()}}()}return n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){c["[object "+t+"]"]=t.toLowerCase()});function M(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}r=x(a),function(e,t){var n,r,i,o,a,s,l,u,c,p,f,d,h,g,m,y,v,b="sizzle"+-new Date,w=e.document,T=0,C=0,N=st(),k=st(),E=st(),S=!1,A=function(e,t){return e===t?(S=!0,0):0},j=typeof t,D=1<<31,L={}.hasOwnProperty,H=[],q=H.pop,_=H.push,M=H.push,O=H.slice,F=H.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},B="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",P="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",W=R.replace("w","w#"),$="\\["+P+"*("+R+")"+P+"*(?:([*^$|!~]?=)"+P+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+W+")|)|)"+P+"*\\]",I=":("+R+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+$.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+P+"+|((?:^|[^\\\\])(?:\\\\.)*)"+P+"+$","g"),X=RegExp("^"+P+"*,"+P+"*"),U=RegExp("^"+P+"*([>+~]|"+P+")"+P+"*"),V=RegExp(P+"*[+~]"),Y=RegExp("="+P+"*([^\\]'\"]*)"+P+"*\\]","g"),J=RegExp(I),G=RegExp("^"+W+"$"),Q={ID:RegExp("^#("+R+")"),CLASS:RegExp("^\\.("+R+")"),TAG:RegExp("^("+R.replace("w","w*")+")"),ATTR:RegExp("^"+$),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+P+"*(even|odd|(([+-]|)(\\d*)n|)"+P+"*(?:([+-]|)"+P+"*(\\d+)|))"+P+"*\\)|)","i"),bool:RegExp("^(?:"+B+")$","i"),needsContext:RegExp("^"+P+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+P+"*((?:-\\d)?\\d*)"+P+"*\\)|)(?=[^-]|$)","i")},K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,et=/^(?:input|select|textarea|button)$/i,tt=/^h\d$/i,nt=/'|\\/g,rt=RegExp("\\\\([\\da-f]{1,6}"+P+"?|("+P+")|.)","ig"),it=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{M.apply(H=O.call(w.childNodes),w.childNodes),H[w.childNodes.length].nodeType}catch(ot){M={apply:H.length?function(e,t){_.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function at(e,t,n,i){var o,a,s,l,u,c,d,m,y,x;if((t?t.ownerDocument||t:w)!==f&&p(t),t=t||f,n=n||[],!e||"string"!=typeof e)return n;if(1!==(l=t.nodeType)&&9!==l)return[];if(h&&!i){if(o=Z.exec(e))if(s=o[1]){if(9===l){if(a=t.getElementById(s),!a||!a.parentNode)return n;if(a.id===s)return n.push(a),n}else if(t.ownerDocument&&(a=t.ownerDocument.getElementById(s))&&v(t,a)&&a.id===s)return n.push(a),n}else{if(o[2])return M.apply(n,t.getElementsByTagName(e)),n;if((s=o[3])&&r.getElementsByClassName&&t.getElementsByClassName)return M.apply(n,t.getElementsByClassName(s)),n}if(r.qsa&&(!g||!g.test(e))){if(m=d=b,y=t,x=9===l&&e,1===l&&"object"!==t.nodeName.toLowerCase()){c=mt(e),(d=t.getAttribute("id"))?m=d.replace(nt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",u=c.length;while(u--)c[u]=m+yt(c[u]);y=V.test(e)&&t.parentNode||t,x=c.join(",")}if(x)try{return M.apply(n,y.querySelectorAll(x)),n}catch(T){}finally{d||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,n,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>o.cacheLength&&delete t[e.shift()],t[n]=r}return t}function lt(e){return e[b]=!0,e}function ut(e){var t=f.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ct(e,t){var n=e.split("|"),r=e.length;while(r--)o.attrHandle[n[r]]=t}function pt(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function dt(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return lt(function(t){return t=+t,lt(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}s=at.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},r=at.support={},p=at.setDocument=function(e){var n=e?e.ownerDocument||e:w,i=n.defaultView;return n!==f&&9===n.nodeType&&n.documentElement?(f=n,d=n.documentElement,h=!s(n),i&&i.attachEvent&&i!==i.top&&i.attachEvent("onbeforeunload",function(){p()}),r.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),r.getElementsByTagName=ut(function(e){return e.appendChild(n.createComment("")),!e.getElementsByTagName("*").length}),r.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),r.getById=ut(function(e){return d.appendChild(e).id=b,!n.getElementsByName||!n.getElementsByName(b).length}),r.getById?(o.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){return e.getAttribute("id")===t}}):(delete o.find.ID,o.filter.ID=function(e){var t=e.replace(rt,it);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),o.find.TAG=r.getElementsByTagName?function(e,n){return typeof n.getElementsByTagName!==j?n.getElementsByTagName(e):t}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},o.find.CLASS=r.getElementsByClassName&&function(e,n){return typeof n.getElementsByClassName!==j&&h?n.getElementsByClassName(e):t},m=[],g=[],(r.qsa=K.test(n.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||g.push("\\["+P+"*(?:value|"+B+")"),e.querySelectorAll(":checked").length||g.push(":checked")}),ut(function(e){var t=n.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&g.push("[*^$]="+P+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(r.matchesSelector=K.test(y=d.webkitMatchesSelector||d.mozMatchesSelector||d.oMatchesSelector||d.msMatchesSelector))&&ut(function(e){r.disconnectedMatch=y.call(e,"div"),y.call(e,"[s!='']:x"),m.push("!=",I)}),g=g.length&&RegExp(g.join("|")),m=m.length&&RegExp(m.join("|")),v=K.test(d.contains)||d.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},A=d.compareDocumentPosition?function(e,t){if(e===t)return S=!0,0;var i=t.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(t);return i?1&i||!r.sortDetached&&t.compareDocumentPosition(e)===i?e===n||v(w,e)?-1:t===n||v(w,t)?1:c?F.call(c,e)-F.call(c,t):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,t){var r,i=0,o=e.parentNode,a=t.parentNode,s=[e],l=[t];if(e===t)return S=!0,0;if(!o||!a)return e===n?-1:t===n?1:o?-1:a?1:c?F.call(c,e)-F.call(c,t):0;if(o===a)return pt(e,t);r=e;while(r=r.parentNode)s.unshift(r);r=t;while(r=r.parentNode)l.unshift(r);while(s[i]===l[i])i++;return i?pt(s[i],l[i]):s[i]===w?-1:l[i]===w?1:0},n):f},at.matches=function(e,t){return at(e,null,null,t)},at.matchesSelector=function(e,t){if((e.ownerDocument||e)!==f&&p(e),t=t.replace(Y,"='$1']"),!(!r.matchesSelector||!h||m&&m.test(t)||g&&g.test(t)))try{var n=y.call(e,t);if(n||r.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(i){}return at(t,f,null,[e]).length>0},at.contains=function(e,t){return(e.ownerDocument||e)!==f&&p(e),v(e,t)},at.attr=function(e,n){(e.ownerDocument||e)!==f&&p(e);var i=o.attrHandle[n.toLowerCase()],a=i&&L.call(o.attrHandle,n.toLowerCase())?i(e,n,!h):t;return a===t?r.attributes||!h?e.getAttribute(n):(a=e.getAttributeNode(n))&&a.specified?a.value:null:a},at.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},at.uniqueSort=function(e){var t,n=[],i=0,o=0;if(S=!r.detectDuplicates,c=!r.sortStable&&e.slice(0),e.sort(A),S){while(t=e[o++])t===e[o]&&(i=n.push(o));while(i--)e.splice(n[i],1)}return e},a=at.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=a(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=a(t);return n},o=at.selectors={cacheLength:50,createPseudo:lt,match:Q,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(rt,it),e[3]=(e[4]||e[5]||"").replace(rt,it),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||at.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&at.error(e[0]),e},PSEUDO:function(e){var n,r=!e[5]&&e[2];return Q.CHILD.test(e[0])?null:(e[3]&&e[4]!==t?e[2]=e[4]:r&&J.test(r)&&(n=mt(r,!0))&&(n=r.indexOf(")",r.length-n)-r.length)&&(e[0]=e[0].slice(0,n),e[2]=r.slice(0,n)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(rt,it).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=N[e+" "];return t||(t=RegExp("(^|"+P+")"+e+"("+P+"|$)"))&&N(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=at.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,l){var u,c,p,f,d,h,g=o!==a?"nextSibling":"previousSibling",m=t.parentNode,y=s&&t.nodeName.toLowerCase(),v=!l&&!s;if(m){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?m.firstChild:m.lastChild],a&&v){c=m[b]||(m[b]={}),u=c[e]||[],d=u[0]===T&&u[1],f=u[0]===T&&u[2],p=d&&m.childNodes[d];while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[T,d,f];break}}else if(v&&(u=(t[b]||(t[b]={}))[e])&&u[0]===T)f=u[1];else while(p=++d&&p&&p[g]||(f=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(v&&((p[b]||(p[b]={}))[e]=[T,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=o.pseudos[e]||o.setFilters[e.toLowerCase()]||at.error("unsupported pseudo: "+e);return r[b]?r(t):r.length>1?(n=[e,e,"",t],o.setFilters.hasOwnProperty(e.toLowerCase())?lt(function(e,n){var i,o=r(e,t),a=o.length;while(a--)i=F.call(e,o[a]),e[i]=!(n[i]=o[a])}):function(e){return r(e,0,n)}):r}},pseudos:{not:lt(function(e){var t=[],n=[],r=l(e.replace(z,"$1"));return r[b]?lt(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:lt(function(e){return function(t){return at(e,t).length>0}}),contains:lt(function(e){return function(t){return(t.textContent||t.innerText||a(t)).indexOf(e)>-1}}),lang:lt(function(e){return G.test(e||"")||at.error("unsupported lang: "+e),e=e.replace(rt,it).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===d},focus:function(e){return e===f.activeElement&&(!f.hasFocus||f.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!o.pseudos.empty(e)},header:function(e){return tt.test(e.nodeName)},input:function(e){return et.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},o.pseudos.nth=o.pseudos.eq;for(n in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})o.pseudos[n]=ft(n);for(n in{submit:!0,reset:!0})o.pseudos[n]=dt(n);function gt(){}gt.prototype=o.filters=o.pseudos,o.setFilters=new gt;function mt(e,t){var n,r,i,a,s,l,u,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,l=[],u=o.preFilter;while(s){(!n||(r=X.exec(s)))&&(r&&(s=s.slice(r[0].length)||s),l.push(i=[])),n=!1,(r=U.exec(s))&&(n=r.shift(),i.push({value:n,type:r[0].replace(z," ")}),s=s.slice(n.length));for(a in o.filter)!(r=Q[a].exec(s))||u[a]&&!(r=u[a](r))||(n=r.shift(),i.push({value:n,type:a,matches:r}),s=s.slice(n.length));if(!n)break}return t?s.length:s?at.error(e):k(e,l).slice(0)}function yt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function vt(e,t,n){var r=t.dir,o=n&&"parentNode"===r,a=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||o)return e(t,n,i)}:function(t,n,s){var l,u,c,p=T+" "+a;if(s){while(t=t[r])if((1===t.nodeType||o)&&e(t,n,s))return!0}else while(t=t[r])if(1===t.nodeType||o)if(c=t[b]||(t[b]={}),(u=c[r])&&u[0]===p){if((l=u[1])===!0||l===i)return l===!0}else if(u=c[r]=[p],u[1]=e(t,n,s)||i,u[1]===!0)return!0}}function bt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,a=[],s=0,l=e.length,u=null!=t;for(;l>s;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),u&&t.push(s));return a}function wt(e,t,n,r,i,o){return r&&!r[b]&&(r=wt(r)),i&&!i[b]&&(i=wt(i,o)),lt(function(o,a,s,l){var u,c,p,f=[],d=[],h=a.length,g=o||Nt(t||"*",s.nodeType?[s]:s,[]),m=!e||!o&&t?g:xt(g,f,e,s,l),y=n?i||(o?e:h||r)?[]:a:m;if(n&&n(m,y,s,l),r){u=xt(y,d),r(u,[],s,l),c=u.length;while(c--)(p=u[c])&&(y[d[c]]=!(m[d[c]]=p))}if(o){if(i||e){if(i){u=[],c=y.length;while(c--)(p=y[c])&&u.push(m[c]=p);i(null,y=[],u,l)}c=y.length;while(c--)(p=y[c])&&(u=i?F.call(o,p):f[c])>-1&&(o[u]=!(a[u]=p))}}else y=xt(y===a?y.splice(h,y.length):y),i?i(null,a,y,l):M.apply(a,y)})}function Tt(e){var t,n,r,i=e.length,a=o.relative[e[0].type],s=a||o.relative[" "],l=a?1:0,c=vt(function(e){return e===t},s,!0),p=vt(function(e){return F.call(t,e)>-1},s,!0),f=[function(e,n,r){return!a&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;i>l;l++)if(n=o.relative[e[l].type])f=[vt(bt(f),n)];else{if(n=o.filter[e[l].type].apply(null,e[l].matches),n[b]){for(r=++l;i>r;r++)if(o.relative[e[r].type])break;return wt(l>1&&bt(f),l>1&&yt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&Tt(e.slice(l,r)),i>r&&Tt(e=e.slice(r)),i>r&&yt(e))}f.push(n)}return bt(f)}function Ct(e,t){var n=0,r=t.length>0,a=e.length>0,s=function(s,l,c,p,d){var h,g,m,y=[],v=0,b="0",x=s&&[],w=null!=d,C=u,N=s||a&&o.find.TAG("*",d&&l.parentNode||l),k=T+=null==C?1:Math.random()||.1;for(w&&(u=l!==f&&l,i=n);null!=(h=N[b]);b++){if(a&&h){g=0;while(m=e[g++])if(m(h,l,c)){p.push(h);break}w&&(T=k,i=++n)}r&&((h=!m&&h)&&v--,s&&x.push(h))}if(v+=b,r&&b!==v){g=0;while(m=t[g++])m(x,y,l,c);if(s){if(v>0)while(b--)x[b]||y[b]||(y[b]=q.call(p));y=xt(y)}M.apply(p,y),w&&!s&&y.length>0&&v+t.length>1&&at.uniqueSort(p)}return w&&(T=k,u=C),x};return r?lt(s):s}l=at.compile=function(e,t){var n,r=[],i=[],o=E[e+" "];if(!o){t||(t=mt(e)),n=t.length;while(n--)o=Tt(t[n]),o[b]?r.push(o):i.push(o);o=E(e,Ct(i,r))}return o};function Nt(e,t,n){var r=0,i=t.length;for(;i>r;r++)at(e,t[r],n);return n}function kt(e,t,n,i){var a,s,u,c,p,f=mt(e);if(!i&&1===f.length){if(s=f[0]=f[0].slice(0),s.length>2&&"ID"===(u=s[0]).type&&r.getById&&9===t.nodeType&&h&&o.relative[s[1].type]){if(t=(o.find.ID(u.matches[0].replace(rt,it),t)||[])[0],!t)return n;e=e.slice(s.shift().value.length)}a=Q.needsContext.test(e)?0:s.length;while(a--){if(u=s[a],o.relative[c=u.type])break;if((p=o.find[c])&&(i=p(u.matches[0].replace(rt,it),V.test(s[0].type)&&t.parentNode||t))){if(s.splice(a,1),e=i.length&&yt(s),!e)return M.apply(n,i),n;break}}}return l(e,f)(i,t,!h,n,V.test(e)),n}r.sortStable=b.split("").sort(A).join("")===b,r.detectDuplicates=S,p(),r.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(f.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ct("type|href|height|width",function(e,n,r){return r?t:e.getAttribute(n,"type"===n.toLowerCase()?1:2)}),r.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ct("value",function(e,n,r){return r||"input"!==e.nodeName.toLowerCase()?t:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||ct(B,function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&i.specified?i.value:e[n]===!0?n.toLowerCase():null}),x.find=at,x.expr=at.selectors,x.expr[":"]=x.expr.pseudos,x.unique=at.uniqueSort,x.text=at.getText,x.isXMLDoc=at.isXML,x.contains=at.contains}(e);var O={};function F(e){var t=O[e]={};return x.each(e.match(T)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?O[e]||F(e):x.extend({},e);var n,r,i,o,a,s,l=[],u=!e.once&&[],c=function(t){for(r=e.memory&&t,i=!0,a=s||0,s=0,o=l.length,n=!0;l&&o>a;a++)if(l[a].apply(t[0],t[1])===!1&&e.stopOnFalse){r=!1;break}n=!1,l&&(u?u.length&&c(u.shift()):r?l=[]:p.disable())},p={add:function(){if(l){var t=l.length;(function i(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&p.has(n)||l.push(n):n&&n.length&&"string"!==r&&i(n)})})(arguments),n?o=l.length:r&&(s=t,c(r))}return this},remove:function(){return l&&x.each(arguments,function(e,t){var r;while((r=x.inArray(t,l,r))>-1)l.splice(r,1),n&&(o>=r&&o--,a>=r&&a--)}),this},has:function(e){return e?x.inArray(e,l)>-1:!(!l||!l.length)},empty:function(){return l=[],o=0,this},disable:function(){return l=u=r=t,this},disabled:function(){return!l},lock:function(){return u=t,r||p.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!l||i&&!u||(t=t||[],t=[e,t.slice?t.slice():t],n?u.push(t):c(t)),this},fire:function(){return p.fireWith(this,arguments),this},fired:function(){return!!i}};return p},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var a=o[0],s=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[a+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var a=o[2],s=o[3];r[o[1]]=a.add,s&&a.add(function(){n=s},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=a.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=g.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),a=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?g.call(arguments):r,n===s?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},s,l,u;if(r>1)for(s=Array(r),l=Array(r),u=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(a(t,u,n)).fail(o.reject).progress(a(t,l,s)):--i;return i||o.resolveWith(u,n),o.promise()}}),x.support=function(t){var n,r,o,s,l,u,c,p,f,d=a.createElement("div");if(d.setAttribute("className","t"),d.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=d.getElementsByTagName("*")||[],r=d.getElementsByTagName("a")[0],!r||!r.style||!n.length)return t;s=a.createElement("select"),u=s.appendChild(a.createElement("option")),o=d.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t.getSetAttribute="t"!==d.className,t.leadingWhitespace=3===d.firstChild.nodeType,t.tbody=!d.getElementsByTagName("tbody").length,t.htmlSerialize=!!d.getElementsByTagName("link").length,t.style=/top/.test(r.getAttribute("style")),t.hrefNormalized="/a"===r.getAttribute("href"),t.opacity=/^0.5/.test(r.style.opacity),t.cssFloat=!!r.style.cssFloat,t.checkOn=!!o.value,t.optSelected=u.selected,t.enctype=!!a.createElement("form").enctype,t.html5Clone="<:nav></:nav>"!==a.createElement("nav").cloneNode(!0).outerHTML,t.inlineBlockNeedsLayout=!1,t.shrinkWrapBlocks=!1,t.pixelPosition=!1,t.deleteExpando=!0,t.noCloneEvent=!0,t.reliableMarginRight=!0,t.boxSizingReliable=!0,o.checked=!0,t.noCloneChecked=o.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!u.disabled;try{delete d.test}catch(h){t.deleteExpando=!1}o=a.createElement("input"),o.setAttribute("value",""),t.input=""===o.getAttribute("value"),o.value="t",o.setAttribute("type","radio"),t.radioValue="t"===o.value,o.setAttribute("checked","t"),o.setAttribute("name","t"),l=a.createDocumentFragment(),l.appendChild(o),t.appendChecked=o.checked,t.checkClone=l.cloneNode(!0).cloneNode(!0).lastChild.checked,d.attachEvent&&(d.attachEvent("onclick",function(){t.noCloneEvent=!1}),d.cloneNode(!0).click());for(f in{submit:!0,change:!0,focusin:!0})d.setAttribute(c="on"+f,"t"),t[f+"Bubbles"]=c in e||d.attributes[c].expando===!1;d.style.backgroundClip="content-box",d.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===d.style.backgroundClip;for(f in x(t))break;return t.ownLast="0"!==f,x(function(){var n,r,o,s="padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",l=a.getElementsByTagName("body")[0];l&&(n=a.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",l.appendChild(n).appendChild(d),d.innerHTML="<table><tr><td></td><td>t</td></tr></table>",o=d.getElementsByTagName("td"),o[0].style.cssText="padding:0;margin:0;border:0;display:none",p=0===o[0].offsetHeight,o[0].style.display="",o[1].style.display="none",t.reliableHiddenOffsets=p&&0===o[0].offsetHeight,d.innerHTML="",d.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",x.swap(l,null!=l.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===d.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(d,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(d,null)||{width:"4px"}).width,r=d.appendChild(a.createElement("div")),r.style.cssText=d.style.cssText=s,r.style.marginRight=r.style.width="0",d.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),typeof d.style.zoom!==i&&(d.innerHTML="",d.style.cssText=s+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=3===d.offsetWidth,d.style.display="block",d.innerHTML="<div></div>",d.firstChild.style.width="5px",t.shrinkWrapBlocks=3!==d.offsetWidth,t.inlineBlockNeedsLayout&&(l.style.zoom=1)),l.removeChild(n),n=d=o=r=null)}),n=s=l=u=r=o=null,t
}({});var B=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;function R(e,n,r,i){if(x.acceptData(e)){var o,a,s=x.expando,l=e.nodeType,u=l?x.cache:e,c=l?e[s]:e[s]&&s;if(c&&u[c]&&(i||u[c].data)||r!==t||"string"!=typeof n)return c||(c=l?e[s]=p.pop()||x.guid++:s),u[c]||(u[c]=l?{}:{toJSON:x.noop}),("object"==typeof n||"function"==typeof n)&&(i?u[c]=x.extend(u[c],n):u[c].data=x.extend(u[c].data,n)),a=u[c],i||(a.data||(a.data={}),a=a.data),r!==t&&(a[x.camelCase(n)]=r),"string"==typeof n?(o=a[n],null==o&&(o=a[x.camelCase(n)])):o=a,o}}function W(e,t,n){if(x.acceptData(e)){var r,i,o=e.nodeType,a=o?x.cache:e,s=o?e[x.expando]:x.expando;if(a[s]){if(t&&(r=n?a[s]:a[s].data)){x.isArray(t)?t=t.concat(x.map(t,x.camelCase)):t in r?t=[t]:(t=x.camelCase(t),t=t in r?[t]:t.split(" ")),i=t.length;while(i--)delete r[t[i]];if(n?!I(r):!x.isEmptyObject(r))return}(n||(delete a[s].data,I(a[s])))&&(o?x.cleanData([e],!0):x.support.deleteExpando||a!=a.window?delete a[s]:a[s]=null)}}}x.extend({cache:{},noData:{applet:!0,embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(e){return e=e.nodeType?x.cache[e[x.expando]]:e[x.expando],!!e&&!I(e)},data:function(e,t,n){return R(e,t,n)},removeData:function(e,t){return W(e,t)},_data:function(e,t,n){return R(e,t,n,!0)},_removeData:function(e,t){return W(e,t,!0)},acceptData:function(e){if(e.nodeType&&1!==e.nodeType&&9!==e.nodeType)return!1;var t=e.nodeName&&x.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),x.fn.extend({data:function(e,n){var r,i,o=null,a=0,s=this[0];if(e===t){if(this.length&&(o=x.data(s),1===s.nodeType&&!x._data(s,"parsedAttrs"))){for(r=s.attributes;r.length>a;a++)i=r[a].name,0===i.indexOf("data-")&&(i=x.camelCase(i.slice(5)),$(s,i,o[i]));x._data(s,"parsedAttrs",!0)}return o}return"object"==typeof e?this.each(function(){x.data(this,e)}):arguments.length>1?this.each(function(){x.data(this,e,n)}):s?$(s,e,x.data(s,e)):null},removeData:function(e){return this.each(function(){x.removeData(this,e)})}});function $(e,n,r){if(r===t&&1===e.nodeType){var i="data-"+n.replace(P,"-$1").toLowerCase();if(r=e.getAttribute(i),"string"==typeof r){try{r="true"===r?!0:"false"===r?!1:"null"===r?null:+r+""===r?+r:B.test(r)?x.parseJSON(r):r}catch(o){}x.data(e,n,r)}else r=t}return r}function I(e){var t;for(t in e)if(("data"!==t||!x.isEmptyObject(e[t]))&&"toJSON"!==t)return!1;return!0}x.extend({queue:function(e,n,r){var i;return e?(n=(n||"fx")+"queue",i=x._data(e,n),r&&(!i||x.isArray(r)?i=x._data(e,n,x.makeArray(r)):i.push(r)),i||[]):t},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),a=function(){x.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return x._data(e,n)||x._data(e,n,{empty:x.Callbacks("once memory").add(function(){x._removeData(e,t+"queue"),x._removeData(e,n)})})}}),x.fn.extend({queue:function(e,n){var r=2;return"string"!=typeof e&&(n=e,e="fx",r--),r>arguments.length?x.queue(this[0],e):n===t?this:this.each(function(){var t=x.queue(this,e,n);x._queueHooks(this,e),"fx"===e&&"inprogress"!==t[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,o=x.Deferred(),a=this,s=this.length,l=function(){--i||o.resolveWith(a,[a])};"string"!=typeof e&&(n=e,e=t),e=e||"fx";while(s--)r=x._data(a[s],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(l));return l(),o.promise(n)}});var z,X,U=/[\t\r\n\f]/g,V=/\r/g,Y=/^(?:input|select|textarea|button|object)$/i,J=/^(?:a|area)$/i,G=/^(?:checked|selected)$/i,Q=x.support.getSetAttribute,K=x.support.input;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return e=x.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,o,a=0,s=this.length,l="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,a=0,s=this.length,l=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(l)for(t=(e||"").match(T)||[];s>a;a++)if(n=this[a],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(U," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,r=0,o=x(this),a=e.match(T)||[];while(t=a[r++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===i||"boolean"===n)&&(this.className&&x._data(this,"__className__",this.className),this.className=this.className||e===!1?"":x._data(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(U," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,o=this[0];{if(arguments.length)return i=x.isFunction(e),this.each(function(n){var o;1===this.nodeType&&(o=i?e.call(this,n,x(this).val()):e,null==o?o="":"number"==typeof o?o+="":x.isArray(o)&&(o=x.map(o,function(e){return null==e?"":e+""})),r=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],r&&"set"in r&&r.set(this,o,"value")!==t||(this.value=o))});if(o)return r=x.valHooks[o.type]||x.valHooks[o.nodeName.toLowerCase()],r&&"get"in r&&(n=r.get(o,"value"))!==t?n:(n=o.value,"string"==typeof n?n.replace(V,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=x.find.attr(e,"value");return null!=t?t:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,a=o?null:[],s=o?i+1:r.length,l=0>i?s:o?i:0;for(;s>l;l++)if(n=r[l],!(!n.selected&&l!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;a.push(t)}return a},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),a=i.length;while(a--)r=i[a],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,n,r){var o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===i?x.prop(e,n,r):(1===s&&x.isXMLDoc(e)||(n=n.toLowerCase(),o=x.attrHooks[n]||(x.expr.match.bool.test(n)?X:z)),r===t?o&&"get"in o&&null!==(a=o.get(e,n))?a:(a=x.find.attr(e,n),null==a?t:a):null!==r?o&&"set"in o&&(a=o.set(e,r,n))!==t?a:(e.setAttribute(n,r+""),r):(x.removeAttr(e,n),t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(T);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)?K&&Q||!G.test(n)?e[r]=!1:e[x.camelCase("default-"+n)]=e[r]=!1:x.attr(e,n,""),e.removeAttribute(Q?n:r)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,n,r){var i,o,a,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return a=1!==s||!x.isXMLDoc(e),a&&(n=x.propFix[n]||n,o=x.propHooks[n]),r!==t?o&&"set"in o&&(i=o.set(e,r,n))!==t?i:e[n]=r:o&&"get"in o&&null!==(i=o.get(e,n))?i:e[n]},propHooks:{tabIndex:{get:function(e){var t=x.find.attr(e,"tabindex");return t?parseInt(t,10):Y.test(e.nodeName)||J.test(e.nodeName)&&e.href?0:-1}}}}),X={set:function(e,t,n){return t===!1?x.removeAttr(e,n):K&&Q||!G.test(n)?e.setAttribute(!Q&&x.propFix[n]||n,n):e[x.camelCase("default-"+n)]=e[n]=!0,n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,n){var r=x.expr.attrHandle[n]||x.find.attr;x.expr.attrHandle[n]=K&&Q||!G.test(n)?function(e,n,i){var o=x.expr.attrHandle[n],a=i?t:(x.expr.attrHandle[n]=t)!=r(e,n,i)?n.toLowerCase():null;return x.expr.attrHandle[n]=o,a}:function(e,n,r){return r?t:e[x.camelCase("default-"+n)]?n.toLowerCase():null}}),K&&Q||(x.attrHooks.value={set:function(e,n,r){return x.nodeName(e,"input")?(e.defaultValue=n,t):z&&z.set(e,n,r)}}),Q||(z={set:function(e,n,r){var i=e.getAttributeNode(r);return i||e.setAttributeNode(i=e.ownerDocument.createAttribute(r)),i.value=n+="","value"===r||n===e.getAttribute(r)?n:t}},x.expr.attrHandle.id=x.expr.attrHandle.name=x.expr.attrHandle.coords=function(e,n,r){var i;return r?t:(i=e.getAttributeNode(n))&&""!==i.value?i.value:null},x.valHooks.button={get:function(e,n){var r=e.getAttributeNode(n);return r&&r.specified?r.value:t},set:z.set},x.attrHooks.contenteditable={set:function(e,t,n){z.set(e,""===t?!1:t,n)}},x.each(["width","height"],function(e,n){x.attrHooks[n]={set:function(e,r){return""===r?(e.setAttribute(n,"auto"),r):t}}})),x.support.hrefNormalized||x.each(["href","src"],function(e,t){x.propHooks[t]={get:function(e){return e.getAttribute(t,4)}}}),x.support.style||(x.attrHooks.style={get:function(e){return e.style.cssText||t},set:function(e,t){return e.style.cssText=t+""}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.support.enctype||(x.propFix.enctype="encoding"),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,n){return x.isArray(n)?e.checked=x.inArray(x(e).val(),n)>=0:t}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var Z=/^(?:input|select|textarea)$/i,et=/^key/,tt=/^(?:mouse|contextmenu)|click/,nt=/^(?:focusinfocus|focusoutblur)$/,rt=/^([^.]*)(?:\.(.+)|)$/;function it(){return!0}function ot(){return!1}function at(){try{return a.activeElement}catch(e){}}x.event={global:{},add:function(e,n,r,o,a){var s,l,u,c,p,f,d,h,g,m,y,v=x._data(e);if(v){r.handler&&(c=r,r=c.handler,a=c.selector),r.guid||(r.guid=x.guid++),(l=v.events)||(l=v.events={}),(f=v.handle)||(f=v.handle=function(e){return typeof x===i||e&&x.event.triggered===e.type?t:x.event.dispatch.apply(f.elem,arguments)},f.elem=e),n=(n||"").match(T)||[""],u=n.length;while(u--)s=rt.exec(n[u])||[],g=y=s[1],m=(s[2]||"").split(".").sort(),g&&(p=x.event.special[g]||{},g=(a?p.delegateType:p.bindType)||g,p=x.event.special[g]||{},d=x.extend({type:g,origType:y,data:o,handler:r,guid:r.guid,selector:a,needsContext:a&&x.expr.match.needsContext.test(a),namespace:m.join(".")},c),(h=l[g])||(h=l[g]=[],h.delegateCount=0,p.setup&&p.setup.call(e,o,m,f)!==!1||(e.addEventListener?e.addEventListener(g,f,!1):e.attachEvent&&e.attachEvent("on"+g,f))),p.add&&(p.add.call(e,d),d.handler.guid||(d.handler.guid=r.guid)),a?h.splice(h.delegateCount++,0,d):h.push(d),x.event.global[g]=!0);e=null}},remove:function(e,t,n,r,i){var o,a,s,l,u,c,p,f,d,h,g,m=x.hasData(e)&&x._data(e);if(m&&(c=m.events)){t=(t||"").match(T)||[""],u=t.length;while(u--)if(s=rt.exec(t[u])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){p=x.event.special[d]||{},d=(r?p.delegateType:p.bindType)||d,f=c[d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),l=o=f.length;while(o--)a=f[o],!i&&g!==a.origType||n&&n.guid!==a.guid||s&&!s.test(a.namespace)||r&&r!==a.selector&&("**"!==r||!a.selector)||(f.splice(o,1),a.selector&&f.delegateCount--,p.remove&&p.remove.call(e,a));l&&!f.length&&(p.teardown&&p.teardown.call(e,h,m.handle)!==!1||x.removeEvent(e,d,m.handle),delete c[d])}else for(d in c)x.event.remove(e,d+t[u],n,r,!0);x.isEmptyObject(c)&&(delete m.handle,x._removeData(e,"events"))}},trigger:function(n,r,i,o){var s,l,u,c,p,f,d,h=[i||a],g=v.call(n,"type")?n.type:n,m=v.call(n,"namespace")?n.namespace.split("."):[];if(u=f=i=i||a,3!==i.nodeType&&8!==i.nodeType&&!nt.test(g+x.event.triggered)&&(g.indexOf(".")>=0&&(m=g.split("."),g=m.shift(),m.sort()),l=0>g.indexOf(":")&&"on"+g,n=n[x.expando]?n:new x.Event(g,"object"==typeof n&&n),n.isTrigger=o?2:3,n.namespace=m.join("."),n.namespace_re=n.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=t,n.target||(n.target=i),r=null==r?[n]:x.makeArray(r,[n]),p=x.event.special[g]||{},o||!p.trigger||p.trigger.apply(i,r)!==!1)){if(!o&&!p.noBubble&&!x.isWindow(i)){for(c=p.delegateType||g,nt.test(c+g)||(u=u.parentNode);u;u=u.parentNode)h.push(u),f=u;f===(i.ownerDocument||a)&&h.push(f.defaultView||f.parentWindow||e)}d=0;while((u=h[d++])&&!n.isPropagationStopped())n.type=d>1?c:p.bindType||g,s=(x._data(u,"events")||{})[n.type]&&x._data(u,"handle"),s&&s.apply(u,r),s=l&&u[l],s&&x.acceptData(u)&&s.apply&&s.apply(u,r)===!1&&n.preventDefault();if(n.type=g,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(h.pop(),r)===!1)&&x.acceptData(i)&&l&&i[g]&&!x.isWindow(i)){f=i[l],f&&(i[l]=null),x.event.triggered=g;try{i[g]()}catch(y){}x.event.triggered=t,f&&(i[l]=f)}return n.result}},dispatch:function(e){e=x.event.fix(e);var n,r,i,o,a,s=[],l=g.call(arguments),u=(x._data(this,"events")||{})[e.type]||[],c=x.event.special[e.type]||{};if(l[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),n=0;while((o=s[n++])&&!e.isPropagationStopped()){e.currentTarget=o.elem,a=0;while((i=o.handlers[a++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(i.namespace))&&(e.handleObj=i,e.data=i.data,r=((x.event.special[i.origType]||{}).handle||i.handler).apply(o.elem,l),r!==t&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,n){var r,i,o,a,s=[],l=n.delegateCount,u=e.target;if(l&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!=this;u=u.parentNode||this)if(1===u.nodeType&&(u.disabled!==!0||"click"!==e.type)){for(o=[],a=0;l>a;a++)i=n[a],r=i.selector+" ",o[r]===t&&(o[r]=i.needsContext?x(r,this).index(u)>=0:x.find(r,this,null,[u]).length),o[r]&&o.push(i);o.length&&s.push({elem:u,handlers:o})}return n.length>l&&s.push({elem:this,handlers:n.slice(l)}),s},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];s||(this.fixHooks[i]=s=tt.test(i)?this.mouseHooks:et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new x.Event(o),t=r.length;while(t--)n=r[t],e[n]=o[n];return e.target||(e.target=o.srcElement||a),3===e.target.nodeType&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,o):e},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,i,o,s=n.button,l=n.fromElement;return null==e.pageX&&null!=n.clientX&&(i=e.target.ownerDocument||a,o=i.documentElement,r=i.body,e.pageX=n.clientX+(o&&o.scrollLeft||r&&r.scrollLeft||0)-(o&&o.clientLeft||r&&r.clientLeft||0),e.pageY=n.clientY+(o&&o.scrollTop||r&&r.scrollTop||0)-(o&&o.clientTop||r&&r.clientTop||0)),!e.relatedTarget&&l&&(e.relatedTarget=l===e.target?n.toElement:l),e.which||s===t||(e.which=1&s?1:2&s?3:4&s?2:0),e}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==at()&&this.focus)try{return this.focus(),!1}catch(e){}},delegateType:"focusin"},blur:{trigger:function(){return this===at()&&this.blur?(this.blur(),!1):t},delegateType:"focusout"},click:{trigger:function(){return x.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):t},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==t&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=a.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]===i&&(e[r]=null),e.detachEvent(r,n))},x.Event=function(e,n){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?it:ot):this.type=e,n&&x.extend(this,n),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,t):new x.Event(e,n)},x.Event.prototype={isDefaultPrevented:ot,isPropagationStopped:ot,isImmediatePropagationStopped:ot,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=it,e&&(e.preventDefault?e.preventDefault():e.returnValue=!1)},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=it,e&&(e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=it,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.submitBubbles||(x.event.special.submit={setup:function(){return x.nodeName(this,"form")?!1:(x.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=x.nodeName(n,"input")||x.nodeName(n,"button")?n.form:t;r&&!x._data(r,"submitBubbles")&&(x.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),x._data(r,"submitBubbles",!0))}),t)},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&x.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){return x.nodeName(this,"form")?!1:(x.event.remove(this,"._submit"),t)}}),x.support.changeBubbles||(x.event.special.change={setup:function(){return Z.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(x.event.add(this,"propertychange._change",function(e){"checked"===e.originalEvent.propertyName&&(this._just_changed=!0)}),x.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),x.event.simulate("change",this,e,!0)})),!1):(x.event.add(this,"beforeactivate._change",function(e){var t=e.target;Z.test(t.nodeName)&&!x._data(t,"changeBubbles")&&(x.event.add(t,"change._change",function(e){!this.parentNode||e.isSimulated||e.isTrigger||x.event.simulate("change",this.parentNode,e,!0)}),x._data(t,"changeBubbles",!0))}),t)},handle:function(e){var n=e.target;return this!==n||e.isSimulated||e.isTrigger||"radio"!==n.type&&"checkbox"!==n.type?e.handleObj.handler.apply(this,arguments):t},teardown:function(){return x.event.remove(this,"._change"),!Z.test(this.nodeName)}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&a.addEventListener(e,r,!0)},teardown:function(){0===--n&&a.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,n,r,i,o){var a,s;if("object"==typeof e){"string"!=typeof n&&(r=r||n,n=t);for(a in e)this.on(a,n,r,e[a],o);return this}if(null==r&&null==i?(i=n,r=n=t):null==i&&("string"==typeof n?(i=r,r=t):(i=r,r=n,n=t)),i===!1)i=ot;else if(!i)return this;return 1===o&&(s=i,i=function(e){return x().off(e),s.apply(this,arguments)},i.guid=s.guid||(s.guid=x.guid++)),this.each(function(){x.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,x(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(o in e)this.off(o,n,e[o]);return this}return(n===!1||"function"==typeof n)&&(r=n,n=t),r===!1&&(r=ot),this.each(function(){x.event.remove(this,e,r,n)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,n){var r=this[0];return r?x.event.trigger(e,n,r,!0):t}});var st=/^.[^:#\[\.,]*$/,lt=/^(?:parents|prev(?:Until|All))/,ut=x.expr.match.needsContext,ct={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t,n=x(e,this),r=n.length;return this.filter(function(){for(t=0;r>t;t++)if(x.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e||[],!0))},filter:function(e){return this.pushStack(ft(this,e||[],!1))},is:function(e){return!!ft(this,"string"==typeof e&&ut.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],a=ut.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(a?a.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?x.inArray(this[0],x(e)):x.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function pt(e,t){do e=e[t];while(e&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return pt(e,"nextSibling")},prev:function(e){return pt(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return x.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(ct[e]||(i=x.unique(i)),lt.test(e)&&(i=i.reverse())),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,n,r){var i=[],o=e[n];while(o&&9!==o.nodeType&&(r===t||1!==o.nodeType||!x(o).is(r)))1===o.nodeType&&i.push(o),o=o[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function ft(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(st.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return x.inArray(e,t)>=0!==n})}function dt(e){var t=ht.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}var ht="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",gt=/ jQuery\d+="(?:null|\d+)"/g,mt=RegExp("<(?:"+ht+")[\\s/>]","i"),yt=/^\s+/,vt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bt=/<([\w:]+)/,xt=/<tbody/i,wt=/<|&#?\w+;/,Tt=/<(?:script|style|link)/i,Ct=/^(?:checkbox|radio)$/i,Nt=/checked\s*(?:[^=]|=\s*.checked.)/i,kt=/^$|\/(?:java|ecma)script/i,Et=/^true\/(.*)/,St=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,At={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:x.support.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},jt=dt(a),Dt=jt.appendChild(a.createElement("div"));At.optgroup=At.option,At.tbody=At.tfoot=At.colgroup=At.caption=At.thead,At.th=At.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===t?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||a).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Lt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(Ft(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&_t(Ft(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++){1===e.nodeType&&x.cleanData(Ft(e,!1));while(e.firstChild)e.removeChild(e.firstChild);e.options&&x.nodeName(e,"select")&&(e.options.length=0)}return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return 1===n.nodeType?n.innerHTML.replace(gt,""):t;if(!("string"!=typeof e||Tt.test(e)||!x.support.htmlSerialize&&mt.test(e)||!x.support.leadingWhitespace&&yt.test(e)||At[(bt.exec(e)||["",""])[1].toLowerCase()])){e=e.replace(vt,"<$1></$2>");try{for(;i>r;r++)n=this[r]||{},1===n.nodeType&&(x.cleanData(Ft(n,!1)),n.innerHTML=e);n=0}catch(o){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=d.apply([],e);var r,i,o,a,s,l,u=0,c=this.length,p=this,f=c-1,h=e[0],g=x.isFunction(h);if(g||!(1>=c||"string"!=typeof h||x.support.checkClone)&&Nt.test(h))return this.each(function(r){var i=p.eq(r);g&&(e[0]=h.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(l=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),r=l.firstChild,1===l.childNodes.length&&(l=r),r)){for(a=x.map(Ft(l,"script"),Ht),o=a.length;c>u;u++)i=l,u!==f&&(i=x.clone(i,!0,!0),o&&x.merge(a,Ft(i,"script"))),t.call(this[u],i,u);if(o)for(s=a[a.length-1].ownerDocument,x.map(a,qt),u=0;o>u;u++)i=a[u],kt.test(i.type||"")&&!x._data(i,"globalEval")&&x.contains(s,i)&&(i.src?x._evalUrl(i.src):x.globalEval((i.text||i.textContent||i.innerHTML||"").replace(St,"")));l=r=null}return this}});function Lt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function Ht(e){return e.type=(null!==x.find.attr(e,"type"))+"/"+e.type,e}function qt(e){var t=Et.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function _t(e,t){var n,r=0;for(;null!=(n=e[r]);r++)x._data(n,"globalEval",!t||x._data(t[r],"globalEval"))}function Mt(e,t){if(1===t.nodeType&&x.hasData(e)){var n,r,i,o=x._data(e),a=x._data(t,o),s=o.events;if(s){delete a.handle,a.events={};for(n in s)for(r=0,i=s[n].length;i>r;r++)x.event.add(t,n,s[n][r])}a.data&&(a.data=x.extend({},a.data))}}function Ot(e,t){var n,r,i;if(1===t.nodeType){if(n=t.nodeName.toLowerCase(),!x.support.noCloneEvent&&t[x.expando]){i=x._data(t);for(r in i.events)x.removeEvent(t,r,i.handle);t.removeAttribute(x.expando)}"script"===n&&t.text!==e.text?(Ht(t).text=e.text,qt(t)):"object"===n?(t.parentNode&&(t.outerHTML=e.outerHTML),x.support.html5Clone&&e.innerHTML&&!x.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):"input"===n&&Ct.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):"option"===n?t.defaultSelected=t.selected=e.defaultSelected:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}}x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=0,i=[],o=x(e),a=o.length-1;for(;a>=r;r++)n=r===a?this:this.clone(!0),x(o[r])[t](n),h.apply(i,n.get());return this.pushStack(i)}});function Ft(e,n){var r,o,a=0,s=typeof e.getElementsByTagName!==i?e.getElementsByTagName(n||"*"):typeof e.querySelectorAll!==i?e.querySelectorAll(n||"*"):t;if(!s)for(s=[],r=e.childNodes||e;null!=(o=r[a]);a++)!n||x.nodeName(o,n)?s.push(o):x.merge(s,Ft(o,n));return n===t||n&&x.nodeName(e,n)?x.merge([e],s):s}function Bt(e){Ct.test(e.type)&&(e.defaultChecked=e.checked)}x.extend({clone:function(e,t,n){var r,i,o,a,s,l=x.contains(e.ownerDocument,e);if(x.support.html5Clone||x.isXMLDoc(e)||!mt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(Dt.innerHTML=e.outerHTML,Dt.removeChild(o=Dt.firstChild)),!(x.support.noCloneEvent&&x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(r=Ft(o),s=Ft(e),a=0;null!=(i=s[a]);++a)r[a]&&Ot(i,r[a]);if(t)if(n)for(s=s||Ft(e),r=r||Ft(o),a=0;null!=(i=s[a]);a++)Mt(i,r[a]);else Mt(e,o);return r=Ft(o,"script"),r.length>0&&_t(r,!l&&Ft(e,"script")),r=s=i=null,o},buildFragment:function(e,t,n,r){var i,o,a,s,l,u,c,p=e.length,f=dt(t),d=[],h=0;for(;p>h;h++)if(o=e[h],o||0===o)if("object"===x.type(o))x.merge(d,o.nodeType?[o]:o);else if(wt.test(o)){s=s||f.appendChild(t.createElement("div")),l=(bt.exec(o)||["",""])[1].toLowerCase(),c=At[l]||At._default,s.innerHTML=c[1]+o.replace(vt,"<$1></$2>")+c[2],i=c[0];while(i--)s=s.lastChild;if(!x.support.leadingWhitespace&&yt.test(o)&&d.push(t.createTextNode(yt.exec(o)[0])),!x.support.tbody){o="table"!==l||xt.test(o)?"<table>"!==c[1]||xt.test(o)?0:s:s.firstChild,i=o&&o.childNodes.length;while(i--)x.nodeName(u=o.childNodes[i],"tbody")&&!u.childNodes.length&&o.removeChild(u)}x.merge(d,s.childNodes),s.textContent="";while(s.firstChild)s.removeChild(s.firstChild);s=f.lastChild}else d.push(t.createTextNode(o));s&&f.removeChild(s),x.support.appendChecked||x.grep(Ft(d,"input"),Bt),h=0;while(o=d[h++])if((!r||-1===x.inArray(o,r))&&(a=x.contains(o.ownerDocument,o),s=Ft(f.appendChild(o),"script"),a&&_t(s),n)){i=0;while(o=s[i++])kt.test(o.type||"")&&n.push(o)}return s=null,f},cleanData:function(e,t){var n,r,o,a,s=0,l=x.expando,u=x.cache,c=x.support.deleteExpando,f=x.event.special;for(;null!=(n=e[s]);s++)if((t||x.acceptData(n))&&(o=n[l],a=o&&u[o])){if(a.events)for(r in a.events)f[r]?x.event.remove(n,r):x.removeEvent(n,r,a.handle);
u[o]&&(delete u[o],c?delete n[l]:typeof n.removeAttribute!==i?n.removeAttribute(l):n[l]=null,p.push(o))}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}}),x.fn.extend({wrapAll:function(e){if(x.isFunction(e))return this.each(function(t){x(this).wrapAll(e.call(this,t))});if(this[0]){var t=x(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&1===e.firstChild.nodeType)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var Pt,Rt,Wt,$t=/alpha\([^)]*\)/i,It=/opacity\s*=\s*([^)]*)/,zt=/^(top|right|bottom|left)$/,Xt=/^(none|table(?!-c[ea]).+)/,Ut=/^margin/,Vt=RegExp("^("+w+")(.*)$","i"),Yt=RegExp("^("+w+")(?!px)[a-z%]+$","i"),Jt=RegExp("^([+-])=("+w+")","i"),Gt={BODY:"block"},Qt={position:"absolute",visibility:"hidden",display:"block"},Kt={letterSpacing:0,fontWeight:400},Zt=["Top","Right","Bottom","Left"],en=["Webkit","O","Moz","ms"];function tn(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=en.length;while(i--)if(t=en[i]+n,t in e)return t;return r}function nn(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function rn(e,t){var n,r,i,o=[],a=0,s=e.length;for(;s>a;a++)r=e[a],r.style&&(o[a]=x._data(r,"olddisplay"),n=r.style.display,t?(o[a]||"none"!==n||(r.style.display=""),""===r.style.display&&nn(r)&&(o[a]=x._data(r,"olddisplay",ln(r.nodeName)))):o[a]||(i=nn(r),(n&&"none"!==n||!i)&&x._data(r,"olddisplay",i?n:x.css(r,"display"))));for(a=0;s>a;a++)r=e[a],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[a]||"":"none"));return e}x.fn.extend({css:function(e,n){return x.access(this,function(e,n,r){var i,o,a={},s=0;if(x.isArray(n)){for(o=Rt(e),i=n.length;i>s;s++)a[n[s]]=x.css(e,n[s],!1,o);return a}return r!==t?x.style(e,n,r):x.css(e,n)},e,n,arguments.length>1)},show:function(){return rn(this,!0)},hide:function(){return rn(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){nn(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Wt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":x.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,a,s,l=x.camelCase(n),u=e.style;if(n=x.cssProps[l]||(x.cssProps[l]=tn(u,l)),s=x.cssHooks[n]||x.cssHooks[l],r===t)return s&&"get"in s&&(o=s.get(e,!1,i))!==t?o:u[n];if(a=typeof r,"string"===a&&(o=Jt.exec(r))&&(r=(o[1]+1)*o[2]+parseFloat(x.css(e,n)),a="number"),!(null==r||"number"===a&&isNaN(r)||("number"!==a||x.cssNumber[l]||(r+="px"),x.support.clearCloneStyle||""!==r||0!==n.indexOf("background")||(u[n]="inherit"),s&&"set"in s&&(r=s.set(e,r,i))===t)))try{u[n]=r}catch(c){}}},css:function(e,n,r,i){var o,a,s,l=x.camelCase(n);return n=x.cssProps[l]||(x.cssProps[l]=tn(e.style,l)),s=x.cssHooks[n]||x.cssHooks[l],s&&"get"in s&&(a=s.get(e,!0,r)),a===t&&(a=Wt(e,n,i)),"normal"===a&&n in Kt&&(a=Kt[n]),""===r||r?(o=parseFloat(a),r===!0||x.isNumeric(o)?o||0:a):a}}),e.getComputedStyle?(Rt=function(t){return e.getComputedStyle(t,null)},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s.getPropertyValue(n)||s[n]:t,u=e.style;return s&&(""!==l||x.contains(e.ownerDocument,e)||(l=x.style(e,n)),Yt.test(l)&&Ut.test(n)&&(i=u.width,o=u.minWidth,a=u.maxWidth,u.minWidth=u.maxWidth=u.width=l,l=s.width,u.width=i,u.minWidth=o,u.maxWidth=a)),l}):a.documentElement.currentStyle&&(Rt=function(e){return e.currentStyle},Wt=function(e,n,r){var i,o,a,s=r||Rt(e),l=s?s[n]:t,u=e.style;return null==l&&u&&u[n]&&(l=u[n]),Yt.test(l)&&!zt.test(n)&&(i=u.left,o=e.runtimeStyle,a=o&&o.left,a&&(o.left=e.currentStyle.left),u.left="fontSize"===n?"1em":l,l=u.pixelLeft+"px",u.left=i,a&&(o.left=a)),""===l?"auto":l});function on(e,t,n){var r=Vt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function an(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,a=0;for(;4>o;o+=2)"margin"===n&&(a+=x.css(e,n+Zt[o],!0,i)),r?("content"===n&&(a-=x.css(e,"padding"+Zt[o],!0,i)),"margin"!==n&&(a-=x.css(e,"border"+Zt[o]+"Width",!0,i))):(a+=x.css(e,"padding"+Zt[o],!0,i),"padding"!==n&&(a+=x.css(e,"border"+Zt[o]+"Width",!0,i)));return a}function sn(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=Rt(e),a=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=Wt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Yt.test(i))return i;r=a&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+an(e,t,n||(a?"border":"content"),r,o)+"px"}function ln(e){var t=a,n=Gt[e];return n||(n=un(e,t),"none"!==n&&n||(Pt=(Pt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(Pt[0].contentWindow||Pt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=un(e,t),Pt.detach()),Gt[e]=n),n}function un(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,n){x.cssHooks[n]={get:function(e,r,i){return r?0===e.offsetWidth&&Xt.test(x.css(e,"display"))?x.swap(e,Qt,function(){return sn(e,n,i)}):sn(e,n,i):t},set:function(e,t,r){var i=r&&Rt(e);return on(e,t,r?an(e,n,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x.support.opacity||(x.cssHooks.opacity={get:function(e,t){return It.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=x.isNumeric(t)?"alpha(opacity="+100*t+")":"",o=r&&r.filter||n.filter||"";n.zoom=1,(t>=1||""===t)&&""===x.trim(o.replace($t,""))&&n.removeAttribute&&(n.removeAttribute("filter"),""===t||r&&!r.filter)||(n.filter=$t.test(o)?o.replace($t,i):o+" "+i)}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,n){return n?x.swap(e,{display:"inline-block"},Wt,[e,"marginRight"]):t}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,n){x.cssHooks[n]={get:function(e,r){return r?(r=Wt(e,n),Yt.test(r)?x(e).position()[n]+"px":r):t}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight||!x.support.reliableHiddenOffsets&&"none"===(e.style&&e.style.display||x.css(e,"display"))},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+Zt[r]+t]=o[r]||o[r-2]||o[0];return i}},Ut.test(e)||(x.cssHooks[e+t].set=on)});var cn=/%20/g,pn=/\[\]$/,fn=/\r?\n/g,dn=/^(?:submit|button|image|reset|file)$/i,hn=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&hn.test(this.nodeName)&&!dn.test(e)&&(this.checked||!Ct.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(fn,"\r\n")}}):{name:t.name,value:n.replace(fn,"\r\n")}}).get()}}),x.param=function(e,n){var r,i=[],o=function(e,t){t=x.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t&&(n=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){o(this.name,this.value)});else for(r in e)gn(r,e[r],n,o);return i.join("&").replace(cn,"+")};function gn(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||pn.test(e)?r(e,i):gn(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)gn(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var mn,yn,vn=x.now(),bn=/\?/,xn=/#.*$/,wn=/([?&])_=[^&]*/,Tn=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Cn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Nn=/^(?:GET|HEAD)$/,kn=/^\/\//,En=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,Sn=x.fn.load,An={},jn={},Dn="*/".concat("*");try{yn=o.href}catch(Ln){yn=a.createElement("a"),yn.href="",yn=yn.href}mn=En.exec(yn.toLowerCase())||[];function Hn(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(T)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function qn(e,n,r,i){var o={},a=e===jn;function s(l){var u;return o[l]=!0,x.each(e[l]||[],function(e,l){var c=l(n,r,i);return"string"!=typeof c||a||o[c]?a?!(u=c):t:(n.dataTypes.unshift(c),s(c),!1)}),u}return s(n.dataTypes[0])||!o["*"]&&s("*")}function _n(e,n){var r,i,o=x.ajaxSettings.flatOptions||{};for(i in n)n[i]!==t&&((o[i]?e:r||(r={}))[i]=n[i]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,n,r){if("string"!=typeof e&&Sn)return Sn.apply(this,arguments);var i,o,a,s=this,l=e.indexOf(" ");return l>=0&&(i=e.slice(l,e.length),e=e.slice(0,l)),x.isFunction(n)?(r=n,n=t):n&&"object"==typeof n&&(a="POST"),s.length>0&&x.ajax({url:e,type:a,dataType:"html",data:n}).done(function(e){o=arguments,s.html(i?x("<div>").append(x.parseHTML(e)).find(i):e)}).complete(r&&function(e,t){s.each(r,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:yn,type:"GET",isLocal:Cn.test(mn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Dn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?_n(_n(e,x.ajaxSettings),t):_n(x.ajaxSettings,e)},ajaxPrefilter:Hn(An),ajaxTransport:Hn(jn),ajax:function(e,n){"object"==typeof e&&(n=e,e=t),n=n||{};var r,i,o,a,s,l,u,c,p=x.ajaxSetup({},n),f=p.context||p,d=p.context&&(f.nodeType||f.jquery)?x(f):x.event,h=x.Deferred(),g=x.Callbacks("once memory"),m=p.statusCode||{},y={},v={},b=0,w="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!c){c={};while(t=Tn.exec(a))c[t[1].toLowerCase()]=t[2]}t=c[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?a:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return b||(e=v[n]=v[n]||e,y[e]=t),this},overrideMimeType:function(e){return b||(p.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)m[t]=[m[t],e[t]];else C.always(e[C.status]);return this},abort:function(e){var t=e||w;return u&&u.abort(t),k(0,t),this}};if(h.promise(C).complete=g.add,C.success=C.done,C.error=C.fail,p.url=((e||p.url||yn)+"").replace(xn,"").replace(kn,mn[1]+"//"),p.type=n.method||n.type||p.method||p.type,p.dataTypes=x.trim(p.dataType||"*").toLowerCase().match(T)||[""],null==p.crossDomain&&(r=En.exec(p.url.toLowerCase()),p.crossDomain=!(!r||r[1]===mn[1]&&r[2]===mn[2]&&(r[3]||("http:"===r[1]?"80":"443"))===(mn[3]||("http:"===mn[1]?"80":"443")))),p.data&&p.processData&&"string"!=typeof p.data&&(p.data=x.param(p.data,p.traditional)),qn(An,p,n,C),2===b)return C;l=p.global,l&&0===x.active++&&x.event.trigger("ajaxStart"),p.type=p.type.toUpperCase(),p.hasContent=!Nn.test(p.type),o=p.url,p.hasContent||(p.data&&(o=p.url+=(bn.test(o)?"&":"?")+p.data,delete p.data),p.cache===!1&&(p.url=wn.test(o)?o.replace(wn,"$1_="+vn++):o+(bn.test(o)?"&":"?")+"_="+vn++)),p.ifModified&&(x.lastModified[o]&&C.setRequestHeader("If-Modified-Since",x.lastModified[o]),x.etag[o]&&C.setRequestHeader("If-None-Match",x.etag[o])),(p.data&&p.hasContent&&p.contentType!==!1||n.contentType)&&C.setRequestHeader("Content-Type",p.contentType),C.setRequestHeader("Accept",p.dataTypes[0]&&p.accepts[p.dataTypes[0]]?p.accepts[p.dataTypes[0]]+("*"!==p.dataTypes[0]?", "+Dn+"; q=0.01":""):p.accepts["*"]);for(i in p.headers)C.setRequestHeader(i,p.headers[i]);if(p.beforeSend&&(p.beforeSend.call(f,C,p)===!1||2===b))return C.abort();w="abort";for(i in{success:1,error:1,complete:1})C[i](p[i]);if(u=qn(jn,p,n,C)){C.readyState=1,l&&d.trigger("ajaxSend",[C,p]),p.async&&p.timeout>0&&(s=setTimeout(function(){C.abort("timeout")},p.timeout));try{b=1,u.send(y,k)}catch(N){if(!(2>b))throw N;k(-1,N)}}else k(-1,"No Transport");function k(e,n,r,i){var c,y,v,w,T,N=n;2!==b&&(b=2,s&&clearTimeout(s),u=t,a=i||"",C.readyState=e>0?4:0,c=e>=200&&300>e||304===e,r&&(w=Mn(p,C,r)),w=On(p,w,C,c),c?(p.ifModified&&(T=C.getResponseHeader("Last-Modified"),T&&(x.lastModified[o]=T),T=C.getResponseHeader("etag"),T&&(x.etag[o]=T)),204===e||"HEAD"===p.type?N="nocontent":304===e?N="notmodified":(N=w.state,y=w.data,v=w.error,c=!v)):(v=N,(e||!N)&&(N="error",0>e&&(e=0))),C.status=e,C.statusText=(n||N)+"",c?h.resolveWith(f,[y,N,C]):h.rejectWith(f,[C,N,v]),C.statusCode(m),m=t,l&&d.trigger(c?"ajaxSuccess":"ajaxError",[C,p,c?y:v]),g.fireWith(f,[C,N]),l&&(d.trigger("ajaxComplete",[C,p]),--x.active||x.event.trigger("ajaxStop")))}return C},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,n){return x.get(e,t,n,"script")}}),x.each(["get","post"],function(e,n){x[n]=function(e,r,i,o){return x.isFunction(r)&&(o=o||i,i=r,r=t),x.ajax({url:e,type:n,dataType:o,data:r,success:i})}});function Mn(e,n,r){var i,o,a,s,l=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),o===t&&(o=e.mimeType||n.getResponseHeader("Content-Type"));if(o)for(s in l)if(l[s]&&l[s].test(o)){u.unshift(s);break}if(u[0]in r)a=u[0];else{for(s in r){if(!u[0]||e.converters[s+" "+u[0]]){a=s;break}i||(i=s)}a=a||i}return a?(a!==u[0]&&u.unshift(a),r[a]):t}function On(e,t,n,r){var i,o,a,s,l,u={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)u[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!l&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=o,o=c.shift())if("*"===o)o=l;else if("*"!==l&&l!==o){if(a=u[l+" "+o]||u["* "+o],!a)for(i in u)if(s=i.split(" "),s[1]===o&&(a=u[l+" "+s[0]]||u["* "+s[0]])){a===!0?a=u[i]:u[i]!==!0&&(o=s[0],c.unshift(s[1]));break}if(a!==!0)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(p){return{state:"parsererror",error:a?p:"No conversion from "+l+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),x.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=a.head||x("head")[0]||a.documentElement;return{send:function(t,i){n=a.createElement("script"),n.async=!0,e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,t){(t||!n.readyState||/loaded|complete/.test(n.readyState))&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),n=null,t||i(200,"success"))},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(t,!0)}}}});var Fn=[],Bn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Fn.pop()||x.expando+"_"+vn++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(n,r,i){var o,a,s,l=n.jsonp!==!1&&(Bn.test(n.url)?"url":"string"==typeof n.data&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Bn.test(n.data)&&"data");return l||"jsonp"===n.dataTypes[0]?(o=n.jsonpCallback=x.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,l?n[l]=n[l].replace(Bn,"$1"+o):n.jsonp!==!1&&(n.url+=(bn.test(n.url)?"&":"?")+n.jsonp+"="+o),n.converters["script json"]=function(){return s||x.error(o+" was not called"),s[0]},n.dataTypes[0]="json",a=e[o],e[o]=function(){s=arguments},i.always(function(){e[o]=a,n[o]&&(n.jsonpCallback=r.jsonpCallback,Fn.push(o)),s&&x.isFunction(a)&&a(s[0]),s=a=t}),"script"):t});var Pn,Rn,Wn=0,$n=e.ActiveXObject&&function(){var e;for(e in Pn)Pn[e](t,!0)};function In(){try{return new e.XMLHttpRequest}catch(t){}}function zn(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}x.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&In()||zn()}:In,Rn=x.ajaxSettings.xhr(),x.support.cors=!!Rn&&"withCredentials"in Rn,Rn=x.support.ajax=!!Rn,Rn&&x.ajaxTransport(function(n){if(!n.crossDomain||x.support.cors){var r;return{send:function(i,o){var a,s,l=n.xhr();if(n.username?l.open(n.type,n.url,n.async,n.username,n.password):l.open(n.type,n.url,n.async),n.xhrFields)for(s in n.xhrFields)l[s]=n.xhrFields[s];n.mimeType&&l.overrideMimeType&&l.overrideMimeType(n.mimeType),n.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");try{for(s in i)l.setRequestHeader(s,i[s])}catch(u){}l.send(n.hasContent&&n.data||null),r=function(e,i){var s,u,c,p;try{if(r&&(i||4===l.readyState))if(r=t,a&&(l.onreadystatechange=x.noop,$n&&delete Pn[a]),i)4!==l.readyState&&l.abort();else{p={},s=l.status,u=l.getAllResponseHeaders(),"string"==typeof l.responseText&&(p.text=l.responseText);try{c=l.statusText}catch(f){c=""}s||!n.isLocal||n.crossDomain?1223===s&&(s=204):s=p.text?200:404}}catch(d){i||o(-1,d)}p&&o(s,c,p,u)},n.async?4===l.readyState?setTimeout(r):(a=++Wn,$n&&(Pn||(Pn={},x(e).unload($n)),Pn[a]=r),l.onreadystatechange=r):r()},abort:function(){r&&r(t,!0)}}}});var Xn,Un,Vn=/^(?:toggle|show|hide)$/,Yn=RegExp("^(?:([+-])=|)("+w+")([a-z%]*)$","i"),Jn=/queueHooks$/,Gn=[nr],Qn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Yn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),a=(x.cssNumber[e]||"px"!==o&&+r)&&Yn.exec(x.css(n.elem,e)),s=1,l=20;if(a&&a[3]!==o){o=o||a[3],i=i||[],a=+r||1;do s=s||".5",a/=s,x.style(n.elem,e,a+o);while(s!==(s=n.cur()/r)&&1!==s&&--l)}return i&&(a=n.start=+a||+r||0,n.unit=o,n.end=i[1]?a+(i[1]+1)*i[2]:+i[2]),n}]};function Kn(){return setTimeout(function(){Xn=t}),Xn=x.now()}function Zn(e,t,n){var r,i=(Qn[t]||[]).concat(Qn["*"]),o=0,a=i.length;for(;a>o;o++)if(r=i[o].call(n,t,e))return r}function er(e,t,n){var r,i,o=0,a=Gn.length,s=x.Deferred().always(function(){delete l.elem}),l=function(){if(i)return!1;var t=Xn||Kn(),n=Math.max(0,u.startTime+u.duration-t),r=n/u.duration||0,o=1-r,a=0,l=u.tweens.length;for(;l>a;a++)u.tweens[a].run(o);return s.notifyWith(e,[u,o,n]),1>o&&l?n:(s.resolveWith(e,[u]),!1)},u=s.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Xn||Kn(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,u.opts,t,n,u.opts.specialEasing[t]||u.opts.easing);return u.tweens.push(r),r},stop:function(t){var n=0,r=t?u.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)u.tweens[n].run(1);return t?s.resolveWith(e,[u,t]):s.rejectWith(e,[u,t]),this}}),c=u.props;for(tr(c,u.opts.specialEasing);a>o;o++)if(r=Gn[o].call(u,e,c,u.opts))return r;return x.map(c,Zn,u),x.isFunction(u.opts.start)&&u.opts.start.call(e,u),x.fx.timer(x.extend(l,{elem:e,anim:u,queue:u.opts.queue})),u.progress(u.opts.progress).done(u.opts.done,u.opts.complete).fail(u.opts.fail).always(u.opts.always)}function tr(e,t){var n,r,i,o,a;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=x.cssHooks[r],a&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(er,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Qn[n]=Qn[n]||[],Qn[n].unshift(t)},prefilter:function(e,t){t?Gn.unshift(e):Gn.push(e)}});function nr(e,t,n){var r,i,o,a,s,l,u=this,c={},p=e.style,f=e.nodeType&&nn(e),d=x._data(e,"fxshow");n.queue||(s=x._queueHooks(e,"fx"),null==s.unqueued&&(s.unqueued=0,l=s.empty.fire,s.empty.fire=function(){s.unqueued||l()}),s.unqueued++,u.always(function(){u.always(function(){s.unqueued--,x.queue(e,"fx").length||s.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(x.support.inlineBlockNeedsLayout&&"inline"!==ln(e.nodeName)?p.zoom=1:p.display="inline-block")),n.overflow&&(p.overflow="hidden",x.support.shrinkWrapBlocks||u.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Vn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show"))continue;c[r]=d&&d[r]||x.style(e,r)}if(!x.isEmptyObject(c)){d?"hidden"in d&&(f=d.hidden):d=x._data(e,"fxshow",{}),o&&(d.hidden=!f),f?x(e).show():u.done(function(){x(e).hide()}),u.done(function(){var t;x._removeData(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)a=Zn(f?d[r]:0,r,u),r in d||(d[r]=a.start,f&&(a.end=a.start,a.start="width"===r||"height"===r?1:0))}}function rr(e,t,n,r,i){return new rr.prototype.init(e,t,n,r,i)}x.Tween=rr,rr.prototype={constructor:rr,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=rr.propHooks[this.prop];return e&&e.get?e.get(this):rr.propHooks._default.get(this)},run:function(e){var t,n=rr.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):rr.propHooks._default.set(this),this}},rr.prototype.init.prototype=rr.prototype,rr.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},rr.propHooks.scrollTop=rr.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ir(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(nn).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),a=function(){var t=er(this,x.extend({},e),o);(i||x._data(this,"finish"))&&t.stop(!0)};return a.finish=a,i||o.queue===!1?this.each(a):this.queue(o.queue,a)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return"string"!=typeof e&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=null!=e&&e+"queueHooks",o=x.timers,a=x._data(this);if(n)a[n]&&a[n].stop&&i(a[n]);else for(n in a)a[n]&&a[n].stop&&Jn.test(n)&&i(a[n]);for(n=o.length;n--;)o[n].elem!==this||null!=e&&o[n].queue!==e||(o[n].anim.stop(r),t=!1,o.splice(n,1));(t||!r)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=x._data(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,a=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;a>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function ir(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=Zt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:ir("show"),slideUp:ir("hide"),slideToggle:ir("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=rr.prototype.init,x.fx.tick=function(){var e,n=x.timers,r=0;for(Xn=x.now();n.length>r;r++)e=n[r],e()||n[r]!==e||n.splice(r--,1);n.length||x.fx.stop(),Xn=t},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){Un||(Un=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(Un),Un=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){x.offset.setOffset(this,e,t)});var n,r,o={top:0,left:0},a=this[0],s=a&&a.ownerDocument;if(s)return n=s.documentElement,x.contains(n,a)?(typeof a.getBoundingClientRect!==i&&(o=a.getBoundingClientRect()),r=or(s),{top:o.top+(r.pageYOffset||n.scrollTop)-(n.clientTop||0),left:o.left+(r.pageXOffset||n.scrollLeft)-(n.clientLeft||0)}):o},x.offset={setOffset:function(e,t,n){var r=x.css(e,"position");"static"===r&&(e.style.position="relative");var i=x(e),o=i.offset(),a=x.css(e,"top"),s=x.css(e,"left"),l=("absolute"===r||"fixed"===r)&&x.inArray("auto",[a,s])>-1,u={},c={},p,f;l?(c=i.position(),p=c.top,f=c.left):(p=parseFloat(a)||0,f=parseFloat(s)||0),x.isFunction(t)&&(t=t.call(e,n,o)),null!=t.top&&(u.top=t.top-o.top+p),null!=t.left&&(u.left=t.left-o.left+f),"using"in t?t.using.call(e,u):i.css(u)}},x.fn.extend({position:function(){if(this[0]){var e,t,n={top:0,left:0},r=this[0];return"fixed"===x.css(r,"position")?t=r.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(n=e.offset()),n.top+=x.css(e[0],"borderTopWidth",!0),n.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-n.top-x.css(r,"marginTop",!0),left:t.left-n.left-x.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);x.fn[e]=function(i){return x.access(this,function(e,i,o){var a=or(e);return o===t?a?n in a?a[n]:a.document.documentElement[i]:e[i]:(a?a.scrollTo(r?x(a).scrollLeft():o,r?o:x(a).scrollTop()):e[i]=o,t)},e,i,arguments.length,null)}});function or(e){return x.isWindow(e)?e:9===e.nodeType?e.defaultView||e.parentWindow:!1}x.each({Height:"height",Width:"width"},function(e,n){x.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){x.fn[i]=function(i,o){var a=arguments.length&&(r||"boolean"!=typeof i),s=r||(i===!0||o===!0?"margin":"border");return x.access(this,function(n,r,i){var o;return x.isWindow(n)?n.document.documentElement["client"+e]:9===n.nodeType?(o=n.documentElement,Math.max(n.body["scroll"+e],o["scroll"+e],n.body["offset"+e],o["offset"+e],o["client"+e])):i===t?x.css(n,r,s):x.style(n,r,i,s)},n,a?i:t,a,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:(e.jQuery=e.$=x,"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}))})(window);

/*
Copyright 2012 Igor Vaynberg

Version: 3.4.5 Timestamp: Mon Nov  4 08:22:42 PST 2013

This software is licensed under the Apache License, Version 2.0 (the "Apache License") or the GNU
General Public License version 2 (the "GPL License"). You may choose either license to govern your
use of this software only upon the condition that you accept all of the terms of either the Apache
License or the GPL License.

You may obtain a copy of the Apache License and the GPL License at:

    http://www.apache.org/licenses/LICENSE-2.0
    http://www.gnu.org/licenses/gpl-2.0.html

Unless required by applicable law or agreed to in writing, software distributed under the
Apache License or the GPL Licesnse is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
CONDITIONS OF ANY KIND, either express or implied. See the Apache License and the GPL License for
the specific language governing permissions and limitations under the Apache License and the GPL License.
*/
(function ($) {
    if(typeof $.fn.each2 == "undefined") {
        $.extend($.fn, {
            /*
            * 4-10 times faster .each replacement
            * use it carefully, as it overrides jQuery context of element on each iteration
            */
            each2 : function (c) {
                var j = $([0]), i = -1, l = this.length;
                while (
                    ++i < l
                    && (j.context = j[0] = this[i])
                    && c.call(j[0], i, j) !== false //"this"=DOM, i=index, j=jQuery object
                );
                return this;
            }
        });
    }
})(jQuery);

(function ($, undefined) {
    "use strict";
    /*global document, window, jQuery, console */

    if (window.Select2 !== undefined) {
        return;
    }

    var KEY, AbstractSelect2, SingleSelect2, MultiSelect2, nextUid, sizer,
        lastMousePosition={x:0,y:0}, $document, scrollBarDimensions,

    KEY = {
        TAB: 9,
        ENTER: 13,
        ESC: 27,
        SPACE: 32,
        LEFT: 37,
        UP: 38,
        RIGHT: 39,
        DOWN: 40,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAGE_UP: 33,
        PAGE_DOWN: 34,
        HOME: 36,
        END: 35,
        BACKSPACE: 8,
        DELETE: 46,
        isArrow: function (k) {
            k = k.which ? k.which : k;
            switch (k) {
            case KEY.LEFT:
            case KEY.RIGHT:
            case KEY.UP:
            case KEY.DOWN:
                return true;
            }
            return false;
        },
        isControl: function (e) {
            var k = e.which;
            switch (k) {
            case KEY.SHIFT:
            case KEY.CTRL:
            case KEY.ALT:
                return true;
            }

            if (e.metaKey) return true;

            return false;
        },
        isFunctionKey: function (k) {
            k = k.which ? k.which : k;
            return k >= 112 && k <= 123;
        }
    },
    MEASURE_SCROLLBAR_TEMPLATE = "<div class='select2-measure-scrollbar'></div>",

    DIACRITICS = {"\u24B6":"A","\uFF21":"A","\u00C0":"A","\u00C1":"A","\u00C2":"A","\u1EA6":"A","\u1EA4":"A","\u1EAA":"A","\u1EA8":"A","\u00C3":"A","\u0100":"A","\u0102":"A","\u1EB0":"A","\u1EAE":"A","\u1EB4":"A","\u1EB2":"A","\u0226":"A","\u01E0":"A","\u00C4":"A","\u01DE":"A","\u1EA2":"A","\u00C5":"A","\u01FA":"A","\u01CD":"A","\u0200":"A","\u0202":"A","\u1EA0":"A","\u1EAC":"A","\u1EB6":"A","\u1E00":"A","\u0104":"A","\u023A":"A","\u2C6F":"A","\uA732":"AA","\u00C6":"AE","\u01FC":"AE","\u01E2":"AE","\uA734":"AO","\uA736":"AU","\uA738":"AV","\uA73A":"AV","\uA73C":"AY","\u24B7":"B","\uFF22":"B","\u1E02":"B","\u1E04":"B","\u1E06":"B","\u0243":"B","\u0182":"B","\u0181":"B","\u24B8":"C","\uFF23":"C","\u0106":"C","\u0108":"C","\u010A":"C","\u010C":"C","\u00C7":"C","\u1E08":"C","\u0187":"C","\u023B":"C","\uA73E":"C","\u24B9":"D","\uFF24":"D","\u1E0A":"D","\u010E":"D","\u1E0C":"D","\u1E10":"D","\u1E12":"D","\u1E0E":"D","\u0110":"D","\u018B":"D","\u018A":"D","\u0189":"D","\uA779":"D","\u01F1":"DZ","\u01C4":"DZ","\u01F2":"Dz","\u01C5":"Dz","\u24BA":"E","\uFF25":"E","\u00C8":"E","\u00C9":"E","\u00CA":"E","\u1EC0":"E","\u1EBE":"E","\u1EC4":"E","\u1EC2":"E","\u1EBC":"E","\u0112":"E","\u1E14":"E","\u1E16":"E","\u0114":"E","\u0116":"E","\u00CB":"E","\u1EBA":"E","\u011A":"E","\u0204":"E","\u0206":"E","\u1EB8":"E","\u1EC6":"E","\u0228":"E","\u1E1C":"E","\u0118":"E","\u1E18":"E","\u1E1A":"E","\u0190":"E","\u018E":"E","\u24BB":"F","\uFF26":"F","\u1E1E":"F","\u0191":"F","\uA77B":"F","\u24BC":"G","\uFF27":"G","\u01F4":"G","\u011C":"G","\u1E20":"G","\u011E":"G","\u0120":"G","\u01E6":"G","\u0122":"G","\u01E4":"G","\u0193":"G","\uA7A0":"G","\uA77D":"G","\uA77E":"G","\u24BD":"H","\uFF28":"H","\u0124":"H","\u1E22":"H","\u1E26":"H","\u021E":"H","\u1E24":"H","\u1E28":"H","\u1E2A":"H","\u0126":"H","\u2C67":"H","\u2C75":"H","\uA78D":"H","\u24BE":"I","\uFF29":"I","\u00CC":"I","\u00CD":"I","\u00CE":"I","\u0128":"I","\u012A":"I","\u012C":"I","\u0130":"I","\u00CF":"I","\u1E2E":"I","\u1EC8":"I","\u01CF":"I","\u0208":"I","\u020A":"I","\u1ECA":"I","\u012E":"I","\u1E2C":"I","\u0197":"I","\u24BF":"J","\uFF2A":"J","\u0134":"J","\u0248":"J","\u24C0":"K","\uFF2B":"K","\u1E30":"K","\u01E8":"K","\u1E32":"K","\u0136":"K","\u1E34":"K","\u0198":"K","\u2C69":"K","\uA740":"K","\uA742":"K","\uA744":"K","\uA7A2":"K","\u24C1":"L","\uFF2C":"L","\u013F":"L","\u0139":"L","\u013D":"L","\u1E36":"L","\u1E38":"L","\u013B":"L","\u1E3C":"L","\u1E3A":"L","\u0141":"L","\u023D":"L","\u2C62":"L","\u2C60":"L","\uA748":"L","\uA746":"L","\uA780":"L","\u01C7":"LJ","\u01C8":"Lj","\u24C2":"M","\uFF2D":"M","\u1E3E":"M","\u1E40":"M","\u1E42":"M","\u2C6E":"M","\u019C":"M","\u24C3":"N","\uFF2E":"N","\u01F8":"N","\u0143":"N","\u00D1":"N","\u1E44":"N","\u0147":"N","\u1E46":"N","\u0145":"N","\u1E4A":"N","\u1E48":"N","\u0220":"N","\u019D":"N","\uA790":"N","\uA7A4":"N","\u01CA":"NJ","\u01CB":"Nj","\u24C4":"O","\uFF2F":"O","\u00D2":"O","\u00D3":"O","\u00D4":"O","\u1ED2":"O","\u1ED0":"O","\u1ED6":"O","\u1ED4":"O","\u00D5":"O","\u1E4C":"O","\u022C":"O","\u1E4E":"O","\u014C":"O","\u1E50":"O","\u1E52":"O","\u014E":"O","\u022E":"O","\u0230":"O","\u00D6":"O","\u022A":"O","\u1ECE":"O","\u0150":"O","\u01D1":"O","\u020C":"O","\u020E":"O","\u01A0":"O","\u1EDC":"O","\u1EDA":"O","\u1EE0":"O","\u1EDE":"O","\u1EE2":"O","\u1ECC":"O","\u1ED8":"O","\u01EA":"O","\u01EC":"O","\u00D8":"O","\u01FE":"O","\u0186":"O","\u019F":"O","\uA74A":"O","\uA74C":"O","\u01A2":"OI","\uA74E":"OO","\u0222":"OU","\u24C5":"P","\uFF30":"P","\u1E54":"P","\u1E56":"P","\u01A4":"P","\u2C63":"P","\uA750":"P","\uA752":"P","\uA754":"P","\u24C6":"Q","\uFF31":"Q","\uA756":"Q","\uA758":"Q","\u024A":"Q","\u24C7":"R","\uFF32":"R","\u0154":"R","\u1E58":"R","\u0158":"R","\u0210":"R","\u0212":"R","\u1E5A":"R","\u1E5C":"R","\u0156":"R","\u1E5E":"R","\u024C":"R","\u2C64":"R","\uA75A":"R","\uA7A6":"R","\uA782":"R","\u24C8":"S","\uFF33":"S","\u1E9E":"S","\u015A":"S","\u1E64":"S","\u015C":"S","\u1E60":"S","\u0160":"S","\u1E66":"S","\u1E62":"S","\u1E68":"S","\u0218":"S","\u015E":"S","\u2C7E":"S","\uA7A8":"S","\uA784":"S","\u24C9":"T","\uFF34":"T","\u1E6A":"T","\u0164":"T","\u1E6C":"T","\u021A":"T","\u0162":"T","\u1E70":"T","\u1E6E":"T","\u0166":"T","\u01AC":"T","\u01AE":"T","\u023E":"T","\uA786":"T","\uA728":"TZ","\u24CA":"U","\uFF35":"U","\u00D9":"U","\u00DA":"U","\u00DB":"U","\u0168":"U","\u1E78":"U","\u016A":"U","\u1E7A":"U","\u016C":"U","\u00DC":"U","\u01DB":"U","\u01D7":"U","\u01D5":"U","\u01D9":"U","\u1EE6":"U","\u016E":"U","\u0170":"U","\u01D3":"U","\u0214":"U","\u0216":"U","\u01AF":"U","\u1EEA":"U","\u1EE8":"U","\u1EEE":"U","\u1EEC":"U","\u1EF0":"U","\u1EE4":"U","\u1E72":"U","\u0172":"U","\u1E76":"U","\u1E74":"U","\u0244":"U","\u24CB":"V","\uFF36":"V","\u1E7C":"V","\u1E7E":"V","\u01B2":"V","\uA75E":"V","\u0245":"V","\uA760":"VY","\u24CC":"W","\uFF37":"W","\u1E80":"W","\u1E82":"W","\u0174":"W","\u1E86":"W","\u1E84":"W","\u1E88":"W","\u2C72":"W","\u24CD":"X","\uFF38":"X","\u1E8A":"X","\u1E8C":"X","\u24CE":"Y","\uFF39":"Y","\u1EF2":"Y","\u00DD":"Y","\u0176":"Y","\u1EF8":"Y","\u0232":"Y","\u1E8E":"Y","\u0178":"Y","\u1EF6":"Y","\u1EF4":"Y","\u01B3":"Y","\u024E":"Y","\u1EFE":"Y","\u24CF":"Z","\uFF3A":"Z","\u0179":"Z","\u1E90":"Z","\u017B":"Z","\u017D":"Z","\u1E92":"Z","\u1E94":"Z","\u01B5":"Z","\u0224":"Z","\u2C7F":"Z","\u2C6B":"Z","\uA762":"Z","\u24D0":"a","\uFF41":"a","\u1E9A":"a","\u00E0":"a","\u00E1":"a","\u00E2":"a","\u1EA7":"a","\u1EA5":"a","\u1EAB":"a","\u1EA9":"a","\u00E3":"a","\u0101":"a","\u0103":"a","\u1EB1":"a","\u1EAF":"a","\u1EB5":"a","\u1EB3":"a","\u0227":"a","\u01E1":"a","\u00E4":"a","\u01DF":"a","\u1EA3":"a","\u00E5":"a","\u01FB":"a","\u01CE":"a","\u0201":"a","\u0203":"a","\u1EA1":"a","\u1EAD":"a","\u1EB7":"a","\u1E01":"a","\u0105":"a","\u2C65":"a","\u0250":"a","\uA733":"aa","\u00E6":"ae","\u01FD":"ae","\u01E3":"ae","\uA735":"ao","\uA737":"au","\uA739":"av","\uA73B":"av","\uA73D":"ay","\u24D1":"b","\uFF42":"b","\u1E03":"b","\u1E05":"b","\u1E07":"b","\u0180":"b","\u0183":"b","\u0253":"b","\u24D2":"c","\uFF43":"c","\u0107":"c","\u0109":"c","\u010B":"c","\u010D":"c","\u00E7":"c","\u1E09":"c","\u0188":"c","\u023C":"c","\uA73F":"c","\u2184":"c","\u24D3":"d","\uFF44":"d","\u1E0B":"d","\u010F":"d","\u1E0D":"d","\u1E11":"d","\u1E13":"d","\u1E0F":"d","\u0111":"d","\u018C":"d","\u0256":"d","\u0257":"d","\uA77A":"d","\u01F3":"dz","\u01C6":"dz","\u24D4":"e","\uFF45":"e","\u00E8":"e","\u00E9":"e","\u00EA":"e","\u1EC1":"e","\u1EBF":"e","\u1EC5":"e","\u1EC3":"e","\u1EBD":"e","\u0113":"e","\u1E15":"e","\u1E17":"e","\u0115":"e","\u0117":"e","\u00EB":"e","\u1EBB":"e","\u011B":"e","\u0205":"e","\u0207":"e","\u1EB9":"e","\u1EC7":"e","\u0229":"e","\u1E1D":"e","\u0119":"e","\u1E19":"e","\u1E1B":"e","\u0247":"e","\u025B":"e","\u01DD":"e","\u24D5":"f","\uFF46":"f","\u1E1F":"f","\u0192":"f","\uA77C":"f","\u24D6":"g","\uFF47":"g","\u01F5":"g","\u011D":"g","\u1E21":"g","\u011F":"g","\u0121":"g","\u01E7":"g","\u0123":"g","\u01E5":"g","\u0260":"g","\uA7A1":"g","\u1D79":"g","\uA77F":"g","\u24D7":"h","\uFF48":"h","\u0125":"h","\u1E23":"h","\u1E27":"h","\u021F":"h","\u1E25":"h","\u1E29":"h","\u1E2B":"h","\u1E96":"h","\u0127":"h","\u2C68":"h","\u2C76":"h","\u0265":"h","\u0195":"hv","\u24D8":"i","\uFF49":"i","\u00EC":"i","\u00ED":"i","\u00EE":"i","\u0129":"i","\u012B":"i","\u012D":"i","\u00EF":"i","\u1E2F":"i","\u1EC9":"i","\u01D0":"i","\u0209":"i","\u020B":"i","\u1ECB":"i","\u012F":"i","\u1E2D":"i","\u0268":"i","\u0131":"i","\u24D9":"j","\uFF4A":"j","\u0135":"j","\u01F0":"j","\u0249":"j","\u24DA":"k","\uFF4B":"k","\u1E31":"k","\u01E9":"k","\u1E33":"k","\u0137":"k","\u1E35":"k","\u0199":"k","\u2C6A":"k","\uA741":"k","\uA743":"k","\uA745":"k","\uA7A3":"k","\u24DB":"l","\uFF4C":"l","\u0140":"l","\u013A":"l","\u013E":"l","\u1E37":"l","\u1E39":"l","\u013C":"l","\u1E3D":"l","\u1E3B":"l","\u017F":"l","\u0142":"l","\u019A":"l","\u026B":"l","\u2C61":"l","\uA749":"l","\uA781":"l","\uA747":"l","\u01C9":"lj","\u24DC":"m","\uFF4D":"m","\u1E3F":"m","\u1E41":"m","\u1E43":"m","\u0271":"m","\u026F":"m","\u24DD":"n","\uFF4E":"n","\u01F9":"n","\u0144":"n","\u00F1":"n","\u1E45":"n","\u0148":"n","\u1E47":"n","\u0146":"n","\u1E4B":"n","\u1E49":"n","\u019E":"n","\u0272":"n","\u0149":"n","\uA791":"n","\uA7A5":"n","\u01CC":"nj","\u24DE":"o","\uFF4F":"o","\u00F2":"o","\u00F3":"o","\u00F4":"o","\u1ED3":"o","\u1ED1":"o","\u1ED7":"o","\u1ED5":"o","\u00F5":"o","\u1E4D":"o","\u022D":"o","\u1E4F":"o","\u014D":"o","\u1E51":"o","\u1E53":"o","\u014F":"o","\u022F":"o","\u0231":"o","\u00F6":"o","\u022B":"o","\u1ECF":"o","\u0151":"o","\u01D2":"o","\u020D":"o","\u020F":"o","\u01A1":"o","\u1EDD":"o","\u1EDB":"o","\u1EE1":"o","\u1EDF":"o","\u1EE3":"o","\u1ECD":"o","\u1ED9":"o","\u01EB":"o","\u01ED":"o","\u00F8":"o","\u01FF":"o","\u0254":"o","\uA74B":"o","\uA74D":"o","\u0275":"o","\u01A3":"oi","\u0223":"ou","\uA74F":"oo","\u24DF":"p","\uFF50":"p","\u1E55":"p","\u1E57":"p","\u01A5":"p","\u1D7D":"p","\uA751":"p","\uA753":"p","\uA755":"p","\u24E0":"q","\uFF51":"q","\u024B":"q","\uA757":"q","\uA759":"q","\u24E1":"r","\uFF52":"r","\u0155":"r","\u1E59":"r","\u0159":"r","\u0211":"r","\u0213":"r","\u1E5B":"r","\u1E5D":"r","\u0157":"r","\u1E5F":"r","\u024D":"r","\u027D":"r","\uA75B":"r","\uA7A7":"r","\uA783":"r","\u24E2":"s","\uFF53":"s","\u00DF":"s","\u015B":"s","\u1E65":"s","\u015D":"s","\u1E61":"s","\u0161":"s","\u1E67":"s","\u1E63":"s","\u1E69":"s","\u0219":"s","\u015F":"s","\u023F":"s","\uA7A9":"s","\uA785":"s","\u1E9B":"s","\u24E3":"t","\uFF54":"t","\u1E6B":"t","\u1E97":"t","\u0165":"t","\u1E6D":"t","\u021B":"t","\u0163":"t","\u1E71":"t","\u1E6F":"t","\u0167":"t","\u01AD":"t","\u0288":"t","\u2C66":"t","\uA787":"t","\uA729":"tz","\u24E4":"u","\uFF55":"u","\u00F9":"u","\u00FA":"u","\u00FB":"u","\u0169":"u","\u1E79":"u","\u016B":"u","\u1E7B":"u","\u016D":"u","\u00FC":"u","\u01DC":"u","\u01D8":"u","\u01D6":"u","\u01DA":"u","\u1EE7":"u","\u016F":"u","\u0171":"u","\u01D4":"u","\u0215":"u","\u0217":"u","\u01B0":"u","\u1EEB":"u","\u1EE9":"u","\u1EEF":"u","\u1EED":"u","\u1EF1":"u","\u1EE5":"u","\u1E73":"u","\u0173":"u","\u1E77":"u","\u1E75":"u","\u0289":"u","\u24E5":"v","\uFF56":"v","\u1E7D":"v","\u1E7F":"v","\u028B":"v","\uA75F":"v","\u028C":"v","\uA761":"vy","\u24E6":"w","\uFF57":"w","\u1E81":"w","\u1E83":"w","\u0175":"w","\u1E87":"w","\u1E85":"w","\u1E98":"w","\u1E89":"w","\u2C73":"w","\u24E7":"x","\uFF58":"x","\u1E8B":"x","\u1E8D":"x","\u24E8":"y","\uFF59":"y","\u1EF3":"y","\u00FD":"y","\u0177":"y","\u1EF9":"y","\u0233":"y","\u1E8F":"y","\u00FF":"y","\u1EF7":"y","\u1E99":"y","\u1EF5":"y","\u01B4":"y","\u024F":"y","\u1EFF":"y","\u24E9":"z","\uFF5A":"z","\u017A":"z","\u1E91":"z","\u017C":"z","\u017E":"z","\u1E93":"z","\u1E95":"z","\u01B6":"z","\u0225":"z","\u0240":"z","\u2C6C":"z","\uA763":"z"};

    $document = $(document);

    nextUid=(function() { var counter=1; return function() { return counter++; }; }());


    function stripDiacritics(str) {
        var ret, i, l, c;

        if (!str || str.length < 1) return str;

        ret = "";
        for (i = 0, l = str.length; i < l; i++) {
            c = str.charAt(i);
            ret += DIACRITICS[c] || c;
        }
        return ret;
    }

    function indexOf(value, array) {
        var i = 0, l = array.length;
        for (; i < l; i = i + 1) {
            if (equal(value, array[i])) return i;
        }
        return -1;
    }

    function measureScrollbar () {
        var $template = $( MEASURE_SCROLLBAR_TEMPLATE );
        $template.appendTo('body');

        var dim = {
            width: $template.width() - $template[0].clientWidth,
            height: $template.height() - $template[0].clientHeight
        };
        $template.remove();

        return dim;
    }

    /**
     * Compares equality of a and b
     * @param a
     * @param b
     */
    function equal(a, b) {
        if (a === b) return true;
        if (a === undefined || b === undefined) return false;
        if (a === null || b === null) return false;
        // Check whether 'a' or 'b' is a string (primitive or object).
        // The concatenation of an empty string (+'') converts its argument to a string's primitive.
        if (a.constructor === String) return a+'' === b+''; // a+'' - in case 'a' is a String object
        if (b.constructor === String) return b+'' === a+''; // b+'' - in case 'b' is a String object
        return false;
    }

    /**
     * Splits the string into an array of values, trimming each value. An empty array is returned for nulls or empty
     * strings
     * @param string
     * @param separator
     */
    function splitVal(string, separator) {
        var val, i, l;
        if (string === null || string.length < 1) return [];
        val = string.split(separator);
        for (i = 0, l = val.length; i < l; i = i + 1) val[i] = $.trim(val[i]);
        return val;
    }

    function getSideBorderPadding(element) {
        return element.outerWidth(false) - element.width();
    }

    function installKeyUpChangeEvent(element) {
        var key="keyup-change-value";
        element.on("keydown", function () {
            if ($.data(element, key) === undefined) {
                $.data(element, key, element.val());
            }
        });
        element.on("keyup", function () {
            var val= $.data(element, key);
            if (val !== undefined && element.val() !== val) {
                $.removeData(element, key);
                element.trigger("keyup-change");
            }
        });
    }

    $document.on("mousemove", function (e) {
        lastMousePosition.x = e.pageX;
        lastMousePosition.y = e.pageY;
    });

    /**
     * filters mouse events so an event is fired only if the mouse moved.
     *
     * filters out mouse events that occur when mouse is stationary but
     * the elements under the pointer are scrolled.
     */
    function installFilteredMouseMove(element) {
        element.on("mousemove", function (e) {
            var lastpos = lastMousePosition;
            if (lastpos === undefined || lastpos.x !== e.pageX || lastpos.y !== e.pageY) {
                $(e.target).trigger("mousemove-filtered", e);
            }
        });
    }

    /**
     * Debounces a function. Returns a function that calls the original fn function only if no invocations have been made
     * within the last quietMillis milliseconds.
     *
     * @param quietMillis number of milliseconds to wait before invoking fn
     * @param fn function to be debounced
     * @param ctx object to be used as this reference within fn
     * @return debounced version of fn
     */
    function debounce(quietMillis, fn, ctx) {
        ctx = ctx || undefined;
        var timeout;
        return function () {
            var args = arguments;
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function() {
                fn.apply(ctx, args);
            }, quietMillis);
        };
    }

    /**
     * A simple implementation of a thunk
     * @param formula function used to lazily initialize the thunk
     * @return {Function}
     */
    function thunk(formula) {
        var evaluated = false,
            value;
        return function() {
            if (evaluated === false) { value = formula(); evaluated = true; }
            return value;
        };
    };

    function installDebouncedScroll(threshold, element) {
        var notify = debounce(threshold, function (e) { element.trigger("scroll-debounced", e);});
        element.on("scroll", function (e) {
            if (indexOf(e.target, element.get()) >= 0) notify(e);
        });
    }

    function focus($el) {
        if ($el[0] === document.activeElement) return;

        /* set the focus in a 0 timeout - that way the focus is set after the processing
            of the current event has finished - which seems like the only reliable way
            to set focus */
        window.setTimeout(function() {
            var el=$el[0], pos=$el.val().length, range;

            $el.focus();

            /* make sure el received focus so we do not error out when trying to manipulate the caret.
                sometimes modals or others listeners may steal it after its set */
            if ($el.is(":visible") && el === document.activeElement) {

                /* after the focus is set move the caret to the end, necessary when we val()
                    just before setting focus */
                if(el.setSelectionRange)
                {
                    el.setSelectionRange(pos, pos);
                }
                else if (el.createTextRange) {
                    range = el.createTextRange();
                    range.collapse(false);
                    range.select();
                }
            }
        }, 0);
    }

    function getCursorInfo(el) {
        el = $(el)[0];
        var offset = 0;
        var length = 0;
        if ('selectionStart' in el) {
            offset = el.selectionStart;
            length = el.selectionEnd - offset;
        } else if ('selection' in document) {
            el.focus();
            var sel = document.selection.createRange();
            length = document.selection.createRange().text.length;
            sel.moveStart('character', -el.value.length);
            offset = sel.text.length - length;
        }
        return { offset: offset, length: length };
    }

    function killEvent(event) {
        event.preventDefault();
        event.stopPropagation();
    }
    function killEventImmediately(event) {
        event.preventDefault();
        event.stopImmediatePropagation();
    }

    function measureTextWidth(e) {
        if (!sizer){
            var style = e[0].currentStyle || window.getComputedStyle(e[0], null);
            sizer = $(document.createElement("div")).css({
                position: "absolute",
                left: "-10000px",
                top: "-10000px",
                display: "none",
                fontSize: style.fontSize,
                fontFamily: style.fontFamily,
                fontStyle: style.fontStyle,
                fontWeight: style.fontWeight,
                letterSpacing: style.letterSpacing,
                textTransform: style.textTransform,
                whiteSpace: "nowrap"
            });
            sizer.attr("class","select2-sizer");
            $("body").append(sizer);
        }
        sizer.text(e.val());
        return sizer.width();
    }

    function syncCssClasses(dest, src, adapter) {
        var classes, replacements = [], adapted;

        classes = dest.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") === 0) {
                    replacements.push(this);
                }
            });
        }
        classes = src.attr("class");
        if (classes) {
            classes = '' + classes; // for IE which returns object
            $(classes.split(" ")).each2(function() {
                if (this.indexOf("select2-") !== 0) {
                    adapted = adapter(this);
                    if (adapted) {
                        replacements.push(adapted);
                    }
                }
            });
        }
        dest.attr("class", replacements.join(" "));
    }


    function markMatch(text, term, markup, escapeMarkup) {
        var match=stripDiacritics(text.toUpperCase()).indexOf(stripDiacritics(term.toUpperCase())),
            tl=term.length;

        if (match<0) {
            markup.push(escapeMarkup(text));
            return;
        }

        markup.push(escapeMarkup(text.substring(0, match)));
        markup.push("<span class='select2-match'>");
        markup.push(escapeMarkup(text.substring(match, match + tl)));
        markup.push("</span>");
        markup.push(escapeMarkup(text.substring(match + tl, text.length)));
    }

    function defaultEscapeMarkup(markup) {
        var replace_map = {
            '\\': '&#92;',
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#47;'
        };

        return String(markup).replace(/[&<>"'\/\\]/g, function (match) {
            return replace_map[match];
        });
    }

    /**
     * Produces an ajax-based query function
     *
     * @param options object containing configuration paramters
     * @param options.params parameter map for the transport ajax call, can contain such options as cache, jsonpCallback, etc. see $.ajax
     * @param options.transport function that will be used to execute the ajax request. must be compatible with parameters supported by $.ajax
     * @param options.url url for the data
     * @param options.data a function(searchTerm, pageNumber, context) that should return an object containing query string parameters for the above url.
     * @param options.dataType request data type: ajax, jsonp, other datatatypes supported by jQuery's $.ajax function or the transport function if specified
     * @param options.quietMillis (optional) milliseconds to wait before making the ajaxRequest, helps debounce the ajax function if invoked too often
     * @param options.results a function(remoteData, pageNumber) that converts data returned form the remote request to the format expected by Select2.
     *      The expected format is an object containing the following keys:
     *      results array of objects that will be used as choices
     *      more (optional) boolean indicating whether there are more results available
     *      Example: {results:[{id:1, text:'Red'},{id:2, text:'Blue'}], more:true}
     */
    function ajax(options) {
        var timeout, // current scheduled but not yet executed request
            handler = null,
            quietMillis = options.quietMillis || 100,
            ajaxUrl = options.url,
            self = this;

        return function (query) {
            window.clearTimeout(timeout);
            timeout = window.setTimeout(function () {
                var data = options.data, // ajax data function
                    url = ajaxUrl, // ajax url string or function
                    transport = options.transport || $.fn.select2.ajaxDefaults.transport,
                    // deprecated - to be removed in 4.0  - use params instead
                    deprecated = {
                        type: options.type || 'GET', // set type of request (GET or POST)
                        cache: options.cache || false,
                        jsonpCallback: options.jsonpCallback||undefined,
                        dataType: options.dataType||"json"
                    },
                    params = $.extend({}, $.fn.select2.ajaxDefaults.params, deprecated);

                data = data ? data.call(self, query.term, query.page, query.context) : null;
                url = (typeof url === 'function') ? url.call(self, query.term, query.page, query.context) : url;

                if (handler && typeof handler.abort === "function") { handler.abort(); }

                if (options.params) {
                    if ($.isFunction(options.params)) {
                        $.extend(params, options.params.call(self));
                    } else {
                        $.extend(params, options.params);
                    }
                }

                $.extend(params, {
                    url: url,
                    dataType: options.dataType,
                    data: data,
                    success: function (data) {
                        // TODO - replace query.page with query so users have access to term, page, etc.
                        var results = options.results(data, query.page);
                        query.callback(results);
                    }
                });
                handler = transport.call(self, params);
            }, quietMillis);
        };
    }

    /**
     * Produces a query function that works with a local array
     *
     * @param options object containing configuration parameters. The options parameter can either be an array or an
     * object.
     *
     * If the array form is used it is assumed that it contains objects with 'id' and 'text' keys.
     *
     * If the object form is used ti is assumed that it contains 'data' and 'text' keys. The 'data' key should contain
     * an array of objects that will be used as choices. These objects must contain at least an 'id' key. The 'text'
     * key can either be a String in which case it is expected that each element in the 'data' array has a key with the
     * value of 'text' which will be used to match choices. Alternatively, text can be a function(item) that can extract
     * the text.
     */
    function local(options) {
        var data = options, // data elements
            dataText,
            tmp,
            text = function (item) { return ""+item.text; }; // function used to retrieve the text portion of a data item that is matched against the search

         if ($.isArray(data)) {
            tmp = data;
            data = { results: tmp };
        }

         if ($.isFunction(data) === false) {
            tmp = data;
            data = function() { return tmp; };
        }

        var dataItem = data();
        if (dataItem.text) {
            text = dataItem.text;
            // if text is not a function we assume it to be a key name
            if (!$.isFunction(text)) {
                dataText = dataItem.text; // we need to store this in a separate variable because in the next step data gets reset and data.text is no longer available
                text = function (item) { return item[dataText]; };
            }
        }

        return function (query) {
            var t = query.term, filtered = { results: [] }, process;
            if (t === "") {
                query.callback(data());
                return;
            }

            process = function(datum, collection) {
                var group, attr;
                datum = datum[0];
                if (datum.children) {
                    group = {};
                    for (attr in datum) {
                        if (datum.hasOwnProperty(attr)) group[attr]=datum[attr];
                    }
                    group.children=[];
                    $(datum.children).each2(function(i, childDatum) { process(childDatum, group.children); });
                    if (group.children.length || query.matcher(t, text(group), datum)) {
                        collection.push(group);
                    }
                } else {
                    if (query.matcher(t, text(datum), datum)) {
                        collection.push(datum);
                    }
                }
            };

            $(data().results).each2(function(i, datum) { process(datum, filtered.results); });
            query.callback(filtered);
        };
    }

    // TODO javadoc
    function tags(data) {
        var isFunc = $.isFunction(data);
        return function (query) {
            var t = query.term, filtered = {results: []};
            $(isFunc ? data() : data).each(function () {
                var isObject = this.text !== undefined,
                    text = isObject ? this.text : this;
                if (t === "" || query.matcher(t, text)) {
                    filtered.results.push(isObject ? this : {id: this, text: this});
                }
            });
            query.callback(filtered);
        };
    }

    /**
     * Checks if the formatter function should be used.
     *
     * Throws an error if it is not a function. Returns true if it should be used,
     * false if no formatting should be performed.
     *
     * @param formatter
     */
    function checkFormatter(formatter, formatterName) {
        if ($.isFunction(formatter)) return true;
        if (!formatter) return false;
        throw new Error(formatterName +" must be a function or a falsy value");
    }

    function evaluate(val) {
        return $.isFunction(val) ? val() : val;
    }

    function countResults(results) {
        var count = 0;
        $.each(results, function(i, item) {
            if (item.children) {
                count += countResults(item.children);
            } else {
                count++;
            }
        });
        return count;
    }

    /**
     * Default tokenizer. This function uses breaks the input on substring match of any string from the
     * opts.tokenSeparators array and uses opts.createSearchChoice to create the choice object. Both of those
     * two options have to be defined in order for the tokenizer to work.
     *
     * @param input text user has typed so far or pasted into the search field
     * @param selection currently selected choices
     * @param selectCallback function(choice) callback tho add the choice to selection
     * @param opts select2's opts
     * @return undefined/null to leave the current input unchanged, or a string to change the input to the returned value
     */
    function defaultTokenizer(input, selection, selectCallback, opts) {
        var original = input, // store the original so we can compare and know if we need to tell the search to update its text
            dupe = false, // check for whether a token we extracted represents a duplicate selected choice
            token, // token
            index, // position at which the separator was found
            i, l, // looping variables
            separator; // the matched separator

        if (!opts.createSearchChoice || !opts.tokenSeparators || opts.tokenSeparators.length < 1) return undefined;

        while (true) {
            index = -1;

            for (i = 0, l = opts.tokenSeparators.length; i < l; i++) {
                separator = opts.tokenSeparators[i];
                index = input.indexOf(separator);
                if (index >= 0) break;
            }

            if (index < 0) break; // did not find any token separator in the input string, bail

            token = input.substring(0, index);
            input = input.substring(index + separator.length);

            if (token.length > 0) {
                token = opts.createSearchChoice.call(this, token, selection);
                if (token !== undefined && token !== null && opts.id(token) !== undefined && opts.id(token) !== null) {
                    dupe = false;
                    for (i = 0, l = selection.length; i < l; i++) {
                        if (equal(opts.id(token), opts.id(selection[i]))) {
                            dupe = true; break;
                        }
                    }

                    if (!dupe) selectCallback(token);
                }
            }
        }

        if (original!==input) return input;
    }

    /**
     * Creates a new class
     *
     * @param superClass
     * @param methods
     */
    function clazz(SuperClass, methods) {
        var constructor = function () {};
        constructor.prototype = new SuperClass;
        constructor.prototype.constructor = constructor;
        constructor.prototype.parent = SuperClass.prototype;
        constructor.prototype = $.extend(constructor.prototype, methods);
        return constructor;
    }

    AbstractSelect2 = clazz(Object, {

        // abstract
        bind: function (func) {
            var self = this;
            return function () {
                func.apply(self, arguments);
            };
        },

        // abstract
        init: function (opts) {
            var results, search, resultsSelector = ".select2-results";

            // prepare options
            this.opts = opts = this.prepareOpts(opts);

            this.id=opts.id;

            // destroy if called on an existing component
            if (opts.element.data("select2") !== undefined &&
                opts.element.data("select2") !== null) {
                opts.element.data("select2").destroy();
            }

            this.container = this.createContainer();

            this.containerId="s2id_"+(opts.element.attr("id") || "autogen"+nextUid());
            this.containerSelector="#"+this.containerId.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, '\\$1');
            this.container.attr("id", this.containerId);

            // cache the body so future lookups are cheap
            this.body = thunk(function() { return opts.element.closest("body"); });

            syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);

            this.container.attr("style", opts.element.attr("style"));
            this.container.css(evaluate(opts.containerCss));
            this.container.addClass(evaluate(opts.containerCssClass));

            this.elementTabIndex = this.opts.element.attr("tabindex");

            // swap container for the element
            this.opts.element
                .data("select2", this)
                .attr("tabindex", "-1")
                .before(this.container)
                .on("click.select2", killEvent); // do not leak click events

            this.container.data("select2", this);

            this.dropdown = this.container.find(".select2-drop");

            syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);

            this.dropdown.addClass(evaluate(opts.dropdownCssClass));
            this.dropdown.data("select2", this);
            this.dropdown.on("click", killEvent);

            this.results = results = this.container.find(resultsSelector);
            this.search = search = this.container.find("input.select2-input");

            this.queryCount = 0;
            this.resultsPage = 0;
            this.context = null;

            // initialize the container
            this.initContainer();

            this.container.on("click", killEvent);

            installFilteredMouseMove(this.results);
            this.dropdown.on("mousemove-filtered touchstart touchmove touchend", resultsSelector, this.bind(this.highlightUnderEvent));

            installDebouncedScroll(80, this.results);
            this.dropdown.on("scroll-debounced", resultsSelector, this.bind(this.loadMoreIfNeeded));

            // do not propagate change event from the search field out of the component
            $(this.container).on("change", ".select2-input", function(e) {e.stopPropagation();});
            $(this.dropdown).on("change", ".select2-input", function(e) {e.stopPropagation();});

            // if jquery.mousewheel plugin is installed we can prevent out-of-bounds scrolling of results via mousewheel
            if ($.fn.mousewheel) {
                results.mousewheel(function (e, delta, deltaX, deltaY) {
                    var top = results.scrollTop();
                    if (deltaY > 0 && top - deltaY <= 0) {
                        results.scrollTop(0);
                        killEvent(e);
                    } else if (deltaY < 0 && results.get(0).scrollHeight - results.scrollTop() + deltaY <= results.height()) {
                        results.scrollTop(results.get(0).scrollHeight - results.height());
                        killEvent(e);
                    }
                });
            }

            installKeyUpChangeEvent(search);
            search.on("keyup-change input paste", this.bind(this.updateResults));
            search.on("focus", function () { search.addClass("select2-focused"); });
            search.on("blur", function () { search.removeClass("select2-focused");});

            this.dropdown.on("mouseup", resultsSelector, this.bind(function (e) {
                if ($(e.target).closest(".select2-result-selectable").length > 0) {
                    this.highlightUnderEvent(e);
                    this.selectHighlighted(e);
                }
            }));

            // trap all mouse events from leaving the dropdown. sometimes there may be a modal that is listening
            // for mouse events outside of itself so it can close itself. since the dropdown is now outside the select2's
            // dom it will trigger the popup close, which is not what we want
            this.dropdown.on("click mouseup mousedown", function (e) { e.stopPropagation(); });

            if ($.isFunction(this.opts.initSelection)) {
                // initialize selection based on the current value of the source element
                this.initSelection();

                // if the user has provided a function that can set selection based on the value of the source element
                // we monitor the change event on the element and trigger it, allowing for two way synchronization
                this.monitorSource();
            }

            if (opts.maximumInputLength !== null) {
                this.search.attr("maxlength", opts.maximumInputLength);
            }

            var disabled = opts.element.prop("disabled");
            if (disabled === undefined) disabled = false;
            this.enable(!disabled);

            var readonly = opts.element.prop("readonly");
            if (readonly === undefined) readonly = false;
            this.readonly(readonly);

            // Calculate size of scrollbar
            scrollBarDimensions = scrollBarDimensions || measureScrollbar();

            this.autofocus = opts.element.prop("autofocus");
            opts.element.prop("autofocus", false);
            if (this.autofocus) this.focus();

            this.nextSearchTerm = undefined;
        },

        // abstract
        destroy: function () {
            var element=this.opts.element, select2 = element.data("select2");

            this.close();

            if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }

            if (select2 !== undefined) {
                select2.container.remove();
                select2.dropdown.remove();
                element
                    .removeClass("select2-offscreen")
                    .removeData("select2")
                    .off(".select2")
                    .prop("autofocus", this.autofocus || false);
                if (this.elementTabIndex) {
                    element.attr({tabindex: this.elementTabIndex});
                } else {
                    element.removeAttr("tabindex");
                }
                element.show();
            }
        },

        // abstract
        optionToData: function(element) {
            if (element.is("option")) {
                return {
                    id:element.prop("value"),
                    text:element.text(),
                    element: element.get(),
                    css: element.attr("class"),
                    disabled: element.prop("disabled"),
                    locked: equal(element.attr("locked"), "locked") || equal(element.data("locked"), true)
                };
            } else if (element.is("optgroup")) {
                return {
                    text:element.attr("label"),
                    children:[],
                    element: element.get(),
                    css: element.attr("class")
                };
            }
        },

        // abstract
        prepareOpts: function (opts) {
            var element, select, idKey, ajaxUrl, self = this;

            element = opts.element;

            if (element.get(0).tagName.toLowerCase() === "select") {
                this.select = select = opts.element;
            }

            if (select) {
                // these options are not allowed when attached to a select because they are picked up off the element itself
                $.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function () {
                    if (this in opts) {
                        throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
                    }
                });
            }

            opts = $.extend({}, {
                populateResults: function(container, results, query) {
                    var populate, id=this.opts.id;

                    populate=function(results, container, depth) {

                        var i, l, result, selectable, disabled, compound, node, label, innerContainer, formatted;

                        results = opts.sortResults(results, container, query);

                        for (i = 0, l = results.length; i < l; i = i + 1) {

                            result=results[i];

                            disabled = (result.disabled === true);
                            selectable = (!disabled) && (id(result) !== undefined);

                            compound=result.children && result.children.length > 0;

                            node=$("<li></li>");
                            node.addClass("select2-results-dept-"+depth);
                            node.addClass("select2-result");
                            node.addClass(selectable ? "select2-result-selectable" : "select2-result-unselectable");
                            if (disabled) { node.addClass("select2-disabled"); }
                            if (compound) { node.addClass("select2-result-with-children"); }
                            node.addClass(self.opts.formatResultCssClass(result));

                            label=$(document.createElement("div"));
                            label.addClass("select2-result-label");

                            formatted=opts.formatResult(result, label, query, self.opts.escapeMarkup);
                            if (formatted!==undefined) {
                                label.html(formatted);
                            }

                            node.append(label);

                            if (compound) {

                                innerContainer=$("<ul></ul>");
                                innerContainer.addClass("select2-result-sub");
                                populate(result.children, innerContainer, depth+1);
                                node.append(innerContainer);
                            }

                            node.data("select2-data", result);
                            container.append(node);
                        }
                    };

                    populate(results, container, 0);
                }
            }, $.fn.select2.defaults, opts);

            if (typeof(opts.id) !== "function") {
                idKey = opts.id;
                opts.id = function (e) { return e[idKey]; };
            }

            if ($.isArray(opts.element.data("select2Tags"))) {
                if ("tags" in opts) {
                    throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + opts.element.attr("id");
                }
                opts.tags=opts.element.data("select2Tags");
            }

            if (select) {
                opts.query = this.bind(function (query) {
                    var data = { results: [], more: false },
                        term = query.term,
                        children, placeholderOption, process;

                    process=function(element, collection) {
                        var group;
                        if (element.is("option")) {
                            if (query.matcher(term, element.text(), element)) {
                                collection.push(self.optionToData(element));
                            }
                        } else if (element.is("optgroup")) {
                            group=self.optionToData(element);
                            element.children().each2(function(i, elm) { process(elm, group.children); });
                            if (group.children.length>0) {
                                collection.push(group);
                            }
                        }
                    };

                    children=element.children();

                    // ignore the placeholder option if there is one
                    if (this.getPlaceholder() !== undefined && children.length > 0) {
                        placeholderOption = this.getPlaceholderOption();
                        if (placeholderOption) {
                            children=children.not(placeholderOption);
                        }
                    }

                    children.each2(function(i, elm) { process(elm, data.results); });

                    query.callback(data);
                });
                // this is needed because inside val() we construct choices from options and there id is hardcoded
                opts.id=function(e) { return e.id; };
                opts.formatResultCssClass = function(data) { return data.css; };
            } else {
                if (!("query" in opts)) {

                    if ("ajax" in opts) {
                        ajaxUrl = opts.element.data("ajax-url");
                        if (ajaxUrl && ajaxUrl.length > 0) {
                            opts.ajax.url = ajaxUrl;
                        }
                        opts.query = ajax.call(opts.element, opts.ajax);
                    } else if ("data" in opts) {
                        opts.query = local(opts.data);
                    } else if ("tags" in opts) {
                        opts.query = tags(opts.tags);
                        if (opts.createSearchChoice === undefined) {
                            opts.createSearchChoice = function (term) { return {id: $.trim(term), text: $.trim(term)}; };
                        }
                        if (opts.initSelection === undefined) {
                            opts.initSelection = function (element, callback) {
                                var data = [];
                                $(splitVal(element.val(), opts.separator)).each(function () {
                                    var obj = { id: this, text: this },
                                        tags = opts.tags;
                                    if ($.isFunction(tags)) tags=tags();
                                    $(tags).each(function() { if (equal(this.id, obj.id)) { obj = this; return false; } });
                                    data.push(obj);
                                });

                                callback(data);
                            };
                        }
                    }
                }
            }
            if (typeof(opts.query) !== "function") {
                throw "query function not defined for Select2 " + opts.element.attr("id");
            }

            return opts;
        },

        /**
         * Monitor the original element for changes and update select2 accordingly
         */
        // abstract
        monitorSource: function () {
            var el = this.opts.element, sync, observer;

            el.on("change.select2", this.bind(function (e) {
                if (this.opts.element.data("select2-change-triggered") !== true) {
                    this.initSelection();
                }
            }));

            sync = this.bind(function () {

                // sync enabled state
                var disabled = el.prop("disabled");
                if (disabled === undefined) disabled = false;
                this.enable(!disabled);

                var readonly = el.prop("readonly");
                if (readonly === undefined) readonly = false;
                this.readonly(readonly);

                syncCssClasses(this.container, this.opts.element, this.opts.adaptContainerCssClass);
                this.container.addClass(evaluate(this.opts.containerCssClass));

                syncCssClasses(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass);
                this.dropdown.addClass(evaluate(this.opts.dropdownCssClass));

            });

            // IE8-10
            el.on("propertychange.select2", sync);

            // hold onto a reference of the callback to work around a chromium bug
            if (this.mutationCallback === undefined) {
                this.mutationCallback = function (mutations) {
                    mutations.forEach(sync);
                }
            }

            // safari, chrome, firefox, IE11
            observer = window.MutationObserver || window.WebKitMutationObserver|| window.MozMutationObserver;
            if (observer !== undefined) {
                if (this.propertyObserver) { delete this.propertyObserver; this.propertyObserver = null; }
                this.propertyObserver = new observer(this.mutationCallback);
                this.propertyObserver.observe(el.get(0), { attributes:true, subtree:false });
            }
        },

        // abstract
        triggerSelect: function(data) {
            var evt = $.Event("select2-selecting", { val: this.id(data), object: data });
            this.opts.element.trigger(evt);
            return !evt.isDefaultPrevented();
        },

        /**
         * Triggers the change event on the source element
         */
        // abstract
        triggerChange: function (details) {

            details = details || {};
            details= $.extend({}, details, { type: "change", val: this.val() });
            // prevents recursive triggering
            this.opts.element.data("select2-change-triggered", true);
            this.opts.element.trigger(details);
            this.opts.element.data("select2-change-triggered", false);

            // some validation frameworks ignore the change event and listen instead to keyup, click for selects
            // so here we trigger the click event manually
            this.opts.element.click();

            // ValidationEngine ignorea the change event and listens instead to blur
            // so here we trigger the blur event manually if so desired
            if (this.opts.blurOnChange)
                this.opts.element.blur();
        },

        //abstract
        isInterfaceEnabled: function()
        {
            return this.enabledInterface === true;
        },

        // abstract
        enableInterface: function() {
            var enabled = this._enabled && !this._readonly,
                disabled = !enabled;

            if (enabled === this.enabledInterface) return false;

            this.container.toggleClass("select2-container-disabled", disabled);
            this.close();
            this.enabledInterface = enabled;

            return true;
        },

        // abstract
        enable: function(enabled) {
            if (enabled === undefined) enabled = true;
            if (this._enabled === enabled) return;
            this._enabled = enabled;

            this.opts.element.prop("disabled", !enabled);
            this.enableInterface();
        },

        // abstract
        disable: function() {
            this.enable(false);
        },

        // abstract
        readonly: function(enabled) {
            if (enabled === undefined) enabled = false;
            if (this._readonly === enabled) return false;
            this._readonly = enabled;

            this.opts.element.prop("readonly", enabled);
            this.enableInterface();
            return true;
        },

        // abstract
        opened: function () {
            return this.container.hasClass("select2-dropdown-open");
        },

        // abstract
        positionDropdown: function() {
            var $dropdown = this.dropdown,
                offset = this.container.offset(),
                height = this.container.outerHeight(false),
                width = this.container.outerWidth(false),
                dropHeight = $dropdown.outerHeight(false),
                $window = $(window),
                windowWidth = $window.width(),
                windowHeight = $window.height(),
                viewPortRight = $window.scrollLeft() + windowWidth,
                viewportBottom = $window.scrollTop() + windowHeight,
                dropTop = offset.top + height,
                dropLeft = offset.left,
                enoughRoomBelow = dropTop + dropHeight <= viewportBottom,
                enoughRoomAbove = (offset.top - dropHeight) >= this.body().scrollTop(),
                dropWidth = $dropdown.outerWidth(false),
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight,
                aboveNow = $dropdown.hasClass("select2-drop-above"),
                bodyOffset,
                above,
                changeDirection,
                css,
                resultsListNode;

            // always prefer the current above/below alignment, unless there is not enough room
            if (aboveNow) {
                above = true;
                if (!enoughRoomAbove && enoughRoomBelow) {
                    changeDirection = true;
                    above = false;
                }
            } else {
                above = false;
                if (!enoughRoomBelow && enoughRoomAbove) {
                    changeDirection = true;
                    above = true;
                }
            }

            //if we are changing direction we need to get positions when dropdown is hidden;
            if (changeDirection) {
                $dropdown.hide();
                offset = this.container.offset();
                height = this.container.outerHeight(false);
                width = this.container.outerWidth(false);
                dropHeight = $dropdown.outerHeight(false);
                viewPortRight = $window.scrollLeft() + windowWidth;
                viewportBottom = $window.scrollTop() + windowHeight;
                dropTop = offset.top + height;
                dropLeft = offset.left;
                dropWidth = $dropdown.outerWidth(false);
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
                $dropdown.show();
            }

            if (this.opts.dropdownAutoWidth) {
                resultsListNode = $('.select2-results', $dropdown)[0];
                $dropdown.addClass('select2-drop-auto-width');
                $dropdown.css('width', '');
                // Add scrollbar width to dropdown if vertical scrollbar is present
                dropWidth = $dropdown.outerWidth(false) + (resultsListNode.scrollHeight === resultsListNode.clientHeight ? 0 : scrollBarDimensions.width);
                dropWidth > width ? width = dropWidth : dropWidth = width;
                enoughRoomOnRight = dropLeft + dropWidth <= viewPortRight;
            }
            else {
                this.container.removeClass('select2-drop-auto-width');
            }

            //console.log("below/ droptop:", dropTop, "dropHeight", dropHeight, "sum", (dropTop+dropHeight)+" viewport bottom", viewportBottom, "enough?", enoughRoomBelow);
            //console.log("above/ offset.top", offset.top, "dropHeight", dropHeight, "top", (offset.top-dropHeight), "scrollTop", this.body().scrollTop(), "enough?", enoughRoomAbove);

            // fix positioning when body has an offset and is not position: static
            if (this.body().css('position') !== 'static') {
                bodyOffset = this.body().offset();
                dropTop -= bodyOffset.top;
                dropLeft -= bodyOffset.left;
            }

            if (!enoughRoomOnRight) {
               dropLeft = offset.left + width - dropWidth;
            }

            css =  {
                left: dropLeft,
                width: width
            };

            if (above) {
                css.bottom = windowHeight - offset.top;
                css.top = 'auto';
                this.container.addClass("select2-drop-above");
                $dropdown.addClass("select2-drop-above");
            }
            else {
                css.top = dropTop;
                css.bottom = 'auto';
                this.container.removeClass("select2-drop-above");
                $dropdown.removeClass("select2-drop-above");
            }
            css = $.extend(css, evaluate(this.opts.dropdownCss));

            $dropdown.css(css);
        },

        // abstract
        shouldOpen: function() {
            var event;

            if (this.opened()) return false;

            if (this._enabled === false || this._readonly === true) return false;

            event = $.Event("select2-opening");
            this.opts.element.trigger(event);
            return !event.isDefaultPrevented();
        },

        // abstract
        clearDropdownAlignmentPreference: function() {
            // clear the classes used to figure out the preference of where the dropdown should be opened
            this.container.removeClass("select2-drop-above");
            this.dropdown.removeClass("select2-drop-above");
        },

        /**
         * Opens the dropdown
         *
         * @return {Boolean} whether or not dropdown was opened. This method will return false if, for example,
         * the dropdown is already open, or if the 'open' event listener on the element called preventDefault().
         */
        // abstract
        open: function () {

            if (!this.shouldOpen()) return false;

            this.opening();

            return true;
        },

        /**
         * Performs the opening of the dropdown
         */
        // abstract
        opening: function() {
            var cid = this.containerId,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid,
                mask;

            this.container.addClass("select2-dropdown-open").addClass("select2-container-active");

            this.clearDropdownAlignmentPreference();

            if(this.dropdown[0] !== this.body().children().last()[0]) {
                this.dropdown.detach().appendTo(this.body());
            }

            // create the dropdown mask if doesnt already exist
            mask = $("#select2-drop-mask");
            if (mask.length == 0) {
                mask = $(document.createElement("div"));
                mask.attr("id","select2-drop-mask").attr("class","select2-drop-mask");
                mask.hide();
                mask.appendTo(this.body());
                mask.on("mousedown touchstart click", function (e) {
                    var dropdown = $("#select2-drop"), self;
                    if (dropdown.length > 0) {
                        self=dropdown.data("select2");
                        if (self.opts.selectOnBlur) {
                            self.selectHighlighted({noFocus: true});
                        }
                        self.close({focus:true});
                        e.preventDefault();
                        e.stopPropagation();
                    }
                });
            }

            // ensure the mask is always right before the dropdown
            if (this.dropdown.prev()[0] !== mask[0]) {
                this.dropdown.before(mask);
            }

            // move the global id to the correct dropdown
            $("#select2-drop").removeAttr("id");
            this.dropdown.attr("id", "select2-drop");

            // show the elements
            mask.show();

            this.positionDropdown();
            this.dropdown.show();
            this.positionDropdown();

            this.dropdown.addClass("select2-drop-active");

            // attach listeners to events that can change the position of the container and thus require
            // the position of the dropdown to be updated as well so it does not come unglued from the container
            var that = this;
            this.container.parents().add(window).each(function () {
                $(this).on(resize+" "+scroll+" "+orient, function (e) {
                    that.positionDropdown();
                });
            });


        },

        // abstract
        close: function () {
            if (!this.opened()) return;

            var cid = this.containerId,
                scroll = "scroll." + cid,
                resize = "resize."+cid,
                orient = "orientationchange."+cid;

            // unbind event listeners
            this.container.parents().add(window).each(function () { $(this).off(scroll).off(resize).off(orient); });

            this.clearDropdownAlignmentPreference();

            $("#select2-drop-mask").hide();
            this.dropdown.removeAttr("id"); // only the active dropdown has the select2-drop id
            this.dropdown.hide();
            this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active");
            this.results.empty();


            this.clearSearch();
            this.search.removeClass("select2-active");
            this.opts.element.trigger($.Event("select2-close"));
        },

        /**
         * Opens control, sets input value, and updates results.
         */
        // abstract
        externalSearch: function (term) {
            this.open();
            this.search.val(term);
            this.updateResults(false);
        },

        // abstract
        clearSearch: function () {

        },

        //abstract
        getMaximumSelectionSize: function() {
            return evaluate(this.opts.maximumSelectionSize);
        },

        // abstract
        ensureHighlightVisible: function () {
            var results = this.results, children, index, child, hb, rb, y, more;

            index = this.highlight();

            if (index < 0) return;

            if (index == 0) {

                // if the first element is highlighted scroll all the way to the top,
                // that way any unselectable headers above it will also be scrolled
                // into view

                results.scrollTop(0);
                return;
            }

            children = this.findHighlightableChoices().find('.select2-result-label');

            child = $(children[index]);

            hb = child.offset().top + child.outerHeight(true);

            // if this is the last child lets also make sure select2-more-results is visible
            if (index === children.length - 1) {
                more = results.find("li.select2-more-results");
                if (more.length > 0) {
                    hb = more.offset().top + more.outerHeight(true);
                }
            }

            rb = results.offset().top + results.outerHeight(true);
            if (hb > rb) {
                results.scrollTop(results.scrollTop() + (hb - rb));
            }
            y = child.offset().top - results.offset().top;

            // make sure the top of the element is visible
            if (y < 0 && child.css('display') != 'none' ) {
                results.scrollTop(results.scrollTop() + y); // y is negative
            }
        },

        // abstract
        findHighlightableChoices: function() {
            return this.results.find(".select2-result-selectable:not(.select2-disabled, .select2-selected)");
        },

        // abstract
        moveHighlight: function (delta) {
            var choices = this.findHighlightableChoices(),
                index = this.highlight();

            while (index > -1 && index < choices.length) {
                index += delta;
                var choice = $(choices[index]);
                if (choice.hasClass("select2-result-selectable") && !choice.hasClass("select2-disabled") && !choice.hasClass("select2-selected")) {
                    this.highlight(index);
                    break;
                }
            }
        },

        // abstract
        highlight: function (index) {
            var choices = this.findHighlightableChoices(),
                choice,
                data;

            if (arguments.length === 0) {
                return indexOf(choices.filter(".select2-highlighted")[0], choices.get());
            }

            if (index >= choices.length) index = choices.length - 1;
            if (index < 0) index = 0;

            this.removeHighlight();

            choice = $(choices[index]);
            choice.addClass("select2-highlighted");

            this.ensureHighlightVisible();

            data = choice.data("select2-data");
            if (data) {
                this.opts.element.trigger({ type: "select2-highlight", val: this.id(data), choice: data });
            }
        },

        removeHighlight: function() {
            this.results.find(".select2-highlighted").removeClass("select2-highlighted");
        },

        // abstract
        countSelectableResults: function() {
            return this.findHighlightableChoices().length;
        },

        // abstract
        highlightUnderEvent: function (event) {
            var el = $(event.target).closest(".select2-result-selectable");
            if (el.length > 0 && !el.is(".select2-highlighted")) {
                var choices = this.findHighlightableChoices();
                this.highlight(choices.index(el));
            } else if (el.length == 0) {
                // if we are over an unselectable item remove all highlights
                this.removeHighlight();
            }
        },

        // abstract
        loadMoreIfNeeded: function () {
            var results = this.results,
                more = results.find("li.select2-more-results"),
                below, // pixels the element is below the scroll fold, below==0 is when the element is starting to be visible
                page = this.resultsPage + 1,
                self=this,
                term=this.search.val(),
                context=this.context;

            if (more.length === 0) return;
            below = more.offset().top - results.offset().top - results.height();

            if (below <= this.opts.loadMorePadding) {
                more.addClass("select2-active");
                this.opts.query({
                        element: this.opts.element,
                        term: term,
                        page: page,
                        context: context,
                        matcher: this.opts.matcher,
                        callback: this.bind(function (data) {

                    // ignore a response if the select2 has been closed before it was received
                    if (!self.opened()) return;


                    self.opts.populateResults.call(this, results, data.results, {term: term, page: page, context:context});
                    self.postprocessResults(data, false, false);

                    if (data.more===true) {
                        more.detach().appendTo(results).text(self.opts.formatLoadMore(page+1));
                        window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                    } else {
                        more.remove();
                    }
                    self.positionDropdown();
                    self.resultsPage = page;
                    self.context = data.context;
                    this.opts.element.trigger({ type: "select2-loaded", items: data });
                })});
            }
        },

        /**
         * Default tokenizer function which does nothing
         */
        tokenize: function() {

        },

        /**
         * @param initial whether or not this is the call to this method right after the dropdown has been opened
         */
        // abstract
        updateResults: function (initial) {
            var search = this.search,
                results = this.results,
                opts = this.opts,
                data,
                self = this,
                input,
                term = search.val(),
                lastTerm = $.data(this.container, "select2-last-term"),
                // sequence number used to drop out-of-order responses
                queryNumber;

            // prevent duplicate queries against the same term
            if (initial !== true && lastTerm && equal(term, lastTerm)) return;

            $.data(this.container, "select2-last-term", term);

            // if the search is currently hidden we do not alter the results
            if (initial !== true && (this.showSearchInput === false || !this.opened())) {
                return;
            }

            function postRender() {
                search.removeClass("select2-active");
                self.positionDropdown();
            }

            function render(html) {
                results.html(html);
                postRender();
            }

            queryNumber = ++this.queryCount;

            var maxSelSize = this.getMaximumSelectionSize();
            if (maxSelSize >=1) {
                data = this.data();
                if ($.isArray(data) && data.length >= maxSelSize && checkFormatter(opts.formatSelectionTooBig, "formatSelectionTooBig")) {
                    render("<li class='select2-selection-limit'>" + opts.formatSelectionTooBig(maxSelSize) + "</li>");
                    return;
                }
            }

            if (search.val().length < opts.minimumInputLength) {
                if (checkFormatter(opts.formatInputTooShort, "formatInputTooShort")) {
                    render("<li class='select2-no-results'>" + opts.formatInputTooShort(search.val(), opts.minimumInputLength) + "</li>");
                } else {
                    render("");
                }
                if (initial && this.showSearch) this.showSearch(true);
                return;
            }

            if (opts.maximumInputLength && search.val().length > opts.maximumInputLength) {
                if (checkFormatter(opts.formatInputTooLong, "formatInputTooLong")) {
                    render("<li class='select2-no-results'>" + opts.formatInputTooLong(search.val(), opts.maximumInputLength) + "</li>");
                } else {
                    render("");
                }
                return;
            }

            if (opts.formatSearching && this.findHighlightableChoices().length === 0) {
                render("<li class='select2-searching'>" + opts.formatSearching() + "</li>");
            }

            search.addClass("select2-active");

            this.removeHighlight();

            // give the tokenizer a chance to pre-process the input
            input = this.tokenize();
            if (input != undefined && input != null) {
                search.val(input);
            }

            this.resultsPage = 1;

            opts.query({
                element: opts.element,
                    term: search.val(),
                    page: this.resultsPage,
                    context: null,
                    matcher: opts.matcher,
                    callback: this.bind(function (data) {
                var def; // default choice

                // ignore old responses
                if (queryNumber != this.queryCount) {
                  return;
                }

                // ignore a response if the select2 has been closed before it was received
                if (!this.opened()) {
                    this.search.removeClass("select2-active");
                    return;
                }

                // save context, if any
                this.context = (data.context===undefined) ? null : data.context;
                // create a default choice and prepend it to the list
                if (this.opts.createSearchChoice && search.val() !== "") {
                    def = this.opts.createSearchChoice.call(self, search.val(), data.results);
                    if (def !== undefined && def !== null && self.id(def) !== undefined && self.id(def) !== null) {
                        if ($(data.results).filter(
                            function () {
                                return equal(self.id(this), self.id(def));
                            }).length === 0) {
                            data.results.unshift(def);
                        }
                    }
                }

                if (data.results.length === 0 && checkFormatter(opts.formatNoMatches, "formatNoMatches")) {
                    render("<li class='select2-no-results'>" + opts.formatNoMatches(search.val()) + "</li>");
                    return;
                }

                results.empty();
                self.opts.populateResults.call(this, results, data.results, {term: search.val(), page: this.resultsPage, context:null});

                if (data.more === true && checkFormatter(opts.formatLoadMore, "formatLoadMore")) {
                    results.append("<li class='select2-more-results'>" + self.opts.escapeMarkup(opts.formatLoadMore(this.resultsPage)) + "</li>");
                    window.setTimeout(function() { self.loadMoreIfNeeded(); }, 10);
                }

                this.postprocessResults(data, initial);

                postRender();

                this.opts.element.trigger({ type: "select2-loaded", items: data });
            })});
        },

        // abstract
        cancel: function () {
            this.close();
        },

        // abstract
        blur: function () {
            // if selectOnBlur == true, select the currently highlighted option
            if (this.opts.selectOnBlur)
                this.selectHighlighted({noFocus: true});

            this.close();
            this.container.removeClass("select2-container-active");
            // synonymous to .is(':focus'), which is available in jquery >= 1.6
            if (this.search[0] === document.activeElement) { this.search.blur(); }
            this.clearSearch();
            this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
        },

        // abstract
        focusSearch: function () {
            focus(this.search);
        },

        // abstract
        selectHighlighted: function (options) {
            var index=this.highlight(),
                highlighted=this.results.find(".select2-highlighted"),
                data = highlighted.closest('.select2-result').data("select2-data");

            if (data) {
                this.highlight(index);
                this.onSelect(data, options);
            } else if (options && options.noFocus) {
                this.close();
            }
        },

        // abstract
        getPlaceholder: function () {
            var placeholderOption;
            return this.opts.element.attr("placeholder") ||
                this.opts.element.attr("data-placeholder") || // jquery 1.4 compat
                this.opts.element.data("placeholder") ||
                this.opts.placeholder ||
                ((placeholderOption = this.getPlaceholderOption()) !== undefined ? placeholderOption.text() : undefined);
        },

        // abstract
        getPlaceholderOption: function() {
            if (this.select) {
                var firstOption = this.select.children('option').first();
                if (this.opts.placeholderOption !== undefined ) {
                    //Determine the placeholder option based on the specified placeholderOption setting
                    return (this.opts.placeholderOption === "first" && firstOption) ||
                           (typeof this.opts.placeholderOption === "function" && this.opts.placeholderOption(this.select));
                } else if (firstOption.text() === "" && firstOption.val() === "") {
                    //No explicit placeholder option specified, use the first if it's blank
                    return firstOption;
                }
            }
        },

        /**
         * Get the desired width for the container element.  This is
         * derived first from option `width` passed to select2, then
         * the inline 'style' on the original element, and finally
         * falls back to the jQuery calculated element width.
         */
        // abstract
        initContainerWidth: function () {
            function resolveContainerWidth() {
                var style, attrs, matches, i, l, attr;

                if (this.opts.width === "off") {
                    return null;
                } else if (this.opts.width === "element"){
                    return this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px';
                } else if (this.opts.width === "copy" || this.opts.width === "resolve") {
                    // check if there is inline style on the element that contains width
                    style = this.opts.element.attr('style');
                    if (style !== undefined) {
                        attrs = style.split(';');
                        for (i = 0, l = attrs.length; i < l; i = i + 1) {
                            attr = attrs[i].replace(/\s/g, '');
                            matches = attr.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i);
                            if (matches !== null && matches.length >= 1)
                                return matches[1];
                        }
                    }

                    if (this.opts.width === "resolve") {
                        // next check if css('width') can resolve a width that is percent based, this is sometimes possible
                        // when attached to input type=hidden or elements hidden via css
                        style = this.opts.element.css('width');
                        if (style.indexOf("%") > 0) return style;

                        // finally, fallback on the calculated width of the element
                        return (this.opts.element.outerWidth(false) === 0 ? 'auto' : this.opts.element.outerWidth(false) + 'px');
                    }

                    return null;
                } else if ($.isFunction(this.opts.width)) {
                    return this.opts.width();
                } else {
                    return this.opts.width;
               }
            };

            var width = resolveContainerWidth.call(this);
            if (width !== null) {
                this.container.css("width", width);
            }
        }
    });

    SingleSelect2 = clazz(AbstractSelect2, {

        // single

        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container"
            }).html([
                "<a href='javascript:void(0)' onclick='return false;' class='select2-choice' tabindex='-1'>",
                "   <span class='select2-chosen'>&nbsp;</span><abbr class='select2-search-choice-close'></abbr>",
                "   <span class='select2-arrow'><b></b></span>",
                "</a>",
                "<input class='select2-focusser select2-offscreen' type='text'/>",
                "<div class='select2-drop select2-display-none'>",
                "   <div class='select2-search'>",
                "       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'/>",
                "   </div>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // single
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.focusser.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // single
        opening: function () {
            var el, range, len;

            if (this.opts.minimumResultsForSearch >= 0) {
                this.showSearch(true);
            }

            this.parent.opening.apply(this, arguments);

            if (this.showSearchInput !== false) {
                // IE appends focusser.val() at the end of field :/ so we manually insert it at the beginning using a range
                // all other browsers handle this just fine

                this.search.val(this.focusser.val());
            }
            this.search.focus();
            // move the cursor to the end after focussing, otherwise it will be at the beginning and
            // new text will appear *before* focusser.val()
            el = this.search.get(0);
            if (el.createTextRange) {
                range = el.createTextRange();
                range.collapse(false);
                range.select();
            } else if (el.setSelectionRange) {
                len = this.search.val().length;
                el.setSelectionRange(len, len);
            }

            // initializes search's value with nextSearchTerm (if defined by user)
            // ignore nextSearchTerm if the dropdown is opened by the user pressing a letter
            if(this.search.val() === "") {
                if(this.nextSearchTerm != undefined){
                    this.search.val(this.nextSearchTerm);
                    this.search.select();
                }
            }

            this.focusser.prop("disabled", true).val("");
            this.updateResults(true);
            this.opts.element.trigger($.Event("select2-open"));
        },

        // single
        close: function (params) {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);

            params = params || {focus: true};
            this.focusser.removeAttr("disabled");

            if (params.focus) {
                this.focusser.focus();
            }
        },

        // single
        focus: function () {
            if (this.opened()) {
                this.close();
            } else {
                this.focusser.removeAttr("disabled");
                this.focusser.focus();
            }
        },

        // single
        isFocused: function () {
            return this.container.hasClass("select2-container-active");
        },

        // single
        cancel: function () {
            this.parent.cancel.apply(this, arguments);
            this.focusser.removeAttr("disabled");
            this.focusser.focus();
        },

        // single
        destroy: function() {
            $("label[for='" + this.focusser.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
        },

        // single
        initContainer: function () {

            var selection,
                container = this.container,
                dropdown = this.dropdown;

            if (this.opts.minimumResultsForSearch < 0) {
                this.showSearch(false);
            } else {
                this.showSearch(true);
            }

            this.selection = selection = container.find(".select2-choice");

            this.focusser = container.find(".select2-focusser");

            // rewrite labels from original element to focusser
            this.focusser.attr("id", "s2id_autogen"+nextUid());

            $("label[for='" + this.opts.element.attr("id") + "']")
                .attr('for', this.focusser.attr('id'));

            this.focusser.attr("tabindex", this.elementTabIndex);

            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                    return;
                }

                switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus: true});
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                }
            }));

            this.search.on("blur", this.bind(function(e) {
                // a workaround for chrome to keep the search field focussed when the scroll bar is used to scroll the dropdown.
                // without this the search field loses focus which is annoying
                if (document.activeElement === this.body().get(0)) {
                    window.setTimeout(this.bind(function() {
                        this.search.focus();
                    }), 0);
                }
            }));

            this.focusser.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e) || e.which === KEY.ESC) {
                    return;
                }

                if (this.opts.openOnEnter === false && e.which === KEY.ENTER) {
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DOWN || e.which == KEY.UP
                    || (e.which == KEY.ENTER && this.opts.openOnEnter)) {

                    if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) return;

                    this.open();
                    killEvent(e);
                    return;
                }

                if (e.which == KEY.DELETE || e.which == KEY.BACKSPACE) {
                    if (this.opts.allowClear) {
                        this.clear();
                    }
                    killEvent(e);
                    return;
                }
            }));


            installKeyUpChangeEvent(this.focusser);
            this.focusser.on("keyup-change input", this.bind(function(e) {
                if (this.opts.minimumResultsForSearch >= 0) {
                    e.stopPropagation();
                    if (this.opened()) return;
                    this.open();
                }
            }));

            selection.on("mousedown", "abbr", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                this.clear();
                killEventImmediately(e);
                this.close();
                this.selection.focus();
            }));

            selection.on("mousedown", this.bind(function (e) {

                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }

                if (this.opened()) {
                    this.close();
                } else if (this.isInterfaceEnabled()) {
                    this.open();
                }

                killEvent(e);
            }));

            dropdown.on("mousedown", this.bind(function() { this.search.focus(); }));

            selection.on("focus", this.bind(function(e) {
                killEvent(e);
            }));

            this.focusser.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            })).on("blur", this.bind(function() {
                if (!this.opened()) {
                    this.container.removeClass("select2-container-active");
                    this.opts.element.trigger($.Event("select2-blur"));
                }
            }));
            this.search.on("focus", this.bind(function(){
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");
            this.setPlaceholder();

        },

        // single
        clear: function(triggerChange) {
            var data=this.selection.data("select2-data");
            if (data) { // guard against queued quick consecutive clicks
                var evt = $.Event("select2-clearing");
                this.opts.element.trigger(evt);
                if (evt.isDefaultPrevented()) {
                    return;
                }
                var placeholderOption = this.getPlaceholderOption();
                this.opts.element.val(placeholderOption ? placeholderOption.val() : "");
                this.selection.find(".select2-chosen").empty();
                this.selection.removeData("select2-data");
                this.setPlaceholder();

                if (triggerChange !== false){
                    this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
                    this.triggerChange({removed:data});
                }
            }
        },

        /**
         * Sets selection based on source element's value
         */
        // single
        initSelection: function () {
            var selected;
            if (this.isPlaceholderOptionSelected()) {
                this.updateSelection(null);
                this.close();
                this.setPlaceholder();
            } else {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(selected){
                    if (selected !== undefined && selected !== null) {
                        self.updateSelection(selected);
                        self.close();
                        self.setPlaceholder();
                    }
                });
            }
        },

        isPlaceholderOptionSelected: function() {
            var placeholderOption;
            if (!this.getPlaceholder()) return false; // no placeholder specified so no option should be considered
            return ((placeholderOption = this.getPlaceholderOption()) !== undefined && placeholderOption.prop("selected"))
                || (this.opts.element.val() === "")
                || (this.opts.element.val() === undefined)
                || (this.opts.element.val() === null);
        },

        // single
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install the selection initializer
                opts.initSelection = function (element, callback) {
                    var selected = element.find("option").filter(function() { return this.selected });
                    // a single select box always has a value, no need to null check 'selected'
                    callback(self.optionToData(selected));
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var id = element.val();
                    //search in data by id, storing the actual matching item
                    var match = null;
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = equal(id, opts.id(el));
                            if (is_match) {
                                match = el;
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            callback(match);
                        }
                    });
                };
            }

            return opts;
        },

        // single
        getPlaceholder: function() {
            // if a placeholder is specified on a single select without a valid placeholder option ignore it
            if (this.select) {
                if (this.getPlaceholderOption() === undefined) {
                    return undefined;
                }
            }

            return this.parent.getPlaceholder.apply(this, arguments);
        },

        // single
        setPlaceholder: function () {
            var placeholder = this.getPlaceholder();

            if (this.isPlaceholderOptionSelected() && placeholder !== undefined) {

                // check for a placeholder option if attached to a select
                if (this.select && this.getPlaceholderOption() === undefined) return;

                this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(placeholder));

                this.selection.addClass("select2-default");

                this.container.removeClass("select2-allowclear");
            }
        },

        // single
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var selected = 0, self = this, showSearchInput = true;

            // find the selected element in the result list

            this.findHighlightableChoices().each2(function (i, elm) {
                if (equal(self.id(elm.data("select2-data")), self.opts.element.val())) {
                    selected = i;
                    return false;
                }
            });

            // and highlight it
            if (noHighlightUpdate !== false) {
                if (initial === true && selected >= 0) {
                    this.highlight(selected);
                } else {
                    this.highlight(0);
                }
            }

            // hide the search box if this is the first we got the results and there are enough of them for search

            if (initial === true) {
                var min = this.opts.minimumResultsForSearch;
                if (min >= 0) {
                    this.showSearch(countResults(data.results) >= min);
                }
            }
        },

        // single
        showSearch: function(showSearchInput) {
            if (this.showSearchInput === showSearchInput) return;

            this.showSearchInput = showSearchInput;

            this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !showSearchInput);
            this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !showSearchInput);
            //add "select2-with-searchbox" to the container if search box is shown
            $(this.dropdown, this.container).toggleClass("select2-with-searchbox", showSearchInput);
        },

        // single
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            var old = this.opts.element.val(),
                oldData = this.data();

            this.opts.element.val(this.id(data));
            this.updateSelection(data);

            this.opts.element.trigger({ type: "select2-selected", val: this.id(data), choice: data });

            this.nextSearchTerm = this.opts.nextSearchTerm(data, this.search.val());
            this.close();

            if (!options || !options.noFocus)
                this.focusser.focus();

            if (!equal(old, this.id(data))) { this.triggerChange({added:data,removed:oldData}); }
        },

        // single
        updateSelection: function (data) {

            var container=this.selection.find(".select2-chosen"), formatted, cssClass;

            this.selection.data("select2-data", data);

            container.empty();
            if (data !== null) {
                formatted=this.opts.formatSelection(data, container, this.opts.escapeMarkup);
            }
            if (formatted !== undefined) {
                container.append(formatted);
            }
            cssClass=this.opts.formatSelectionCssClass(data, container);
            if (cssClass !== undefined) {
                container.addClass(cssClass);
            }

            this.selection.removeClass("select2-default");

            if (this.opts.allowClear && this.getPlaceholder() !== undefined) {
                this.container.addClass("select2-allowclear");
            }
        },

        // single
        val: function () {
            var val,
                triggerChange = false,
                data = null,
                self = this,
                oldData = this.data();

            if (arguments.length === 0) {
                return this.opts.element.val();
            }

            val = arguments[0];

            if (arguments.length > 1) {
                triggerChange = arguments[1];
            }

            if (this.select) {
                this.select
                    .val(val)
                    .find("option").filter(function() { return this.selected }).each2(function (i, elm) {
                        data = self.optionToData(elm);
                        return false;
                    });
                this.updateSelection(data);
                this.setPlaceholder();
                if (triggerChange) {
                    this.triggerChange({added: data, removed:oldData});
                }
            } else {
                // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
                if (!val && val !== 0) {
                    this.clear(triggerChange);
                    return;
                }
                if (this.opts.initSelection === undefined) {
                    throw new Error("cannot call val() if initSelection() is not defined");
                }
                this.opts.element.val(val);
                this.opts.initSelection(this.opts.element, function(data){
                    self.opts.element.val(!data ? "" : self.id(data));
                    self.updateSelection(data);
                    self.setPlaceholder();
                    if (triggerChange) {
                        self.triggerChange({added: data, removed:oldData});
                    }
                });
            }
        },

        // single
        clearSearch: function () {
            this.search.val("");
            this.focusser.val("");
        },

        // single
        data: function(value) {
            var data,
                triggerChange = false;

            if (arguments.length === 0) {
                data = this.selection.data("select2-data");
                if (data == undefined) data = null;
                return data;
            } else {
                if (arguments.length > 1) {
                    triggerChange = arguments[1];
                }
                if (!value) {
                    this.clear(triggerChange);
                } else {
                    data = this.data();
                    this.opts.element.val(!value ? "" : this.id(value));
                    this.updateSelection(value);
                    if (triggerChange) {
                        this.triggerChange({added: value, removed:data});
                    }
                }
            }
        }
    });

    MultiSelect2 = clazz(AbstractSelect2, {

        // multi
        createContainer: function () {
            var container = $(document.createElement("div")).attr({
                "class": "select2-container select2-container-multi"
            }).html([
                "<ul class='select2-choices'>",
                "  <li class='select2-search-field'>",
                "    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>",
                "  </li>",
                "</ul>",
                "<div class='select2-drop select2-drop-multi select2-display-none'>",
                "   <ul class='select2-results'>",
                "   </ul>",
                "</div>"].join(""));
            return container;
        },

        // multi
        prepareOpts: function () {
            var opts = this.parent.prepareOpts.apply(this, arguments),
                self=this;

            // TODO validate placeholder is a string if specified

            if (opts.element.get(0).tagName.toLowerCase() === "select") {
                // install sthe selection initializer
                opts.initSelection = function (element, callback) {

                    var data = [];

                    element.find("option").filter(function() { return this.selected }).each2(function (i, elm) {
                        data.push(self.optionToData(elm));
                    });
                    callback(data);
                };
            } else if ("data" in opts) {
                // install default initSelection when applied to hidden input and data is local
                opts.initSelection = opts.initSelection || function (element, callback) {
                    var ids = splitVal(element.val(), opts.separator);
                    //search in data by array of ids, storing matching items in a list
                    var matches = [];
                    opts.query({
                        matcher: function(term, text, el){
                            var is_match = $.grep(ids, function(id) {
                                return equal(id, opts.id(el));
                            }).length;
                            if (is_match) {
                                matches.push(el);
                            }
                            return is_match;
                        },
                        callback: !$.isFunction(callback) ? $.noop : function() {
                            // reorder matches based on the order they appear in the ids array because right now
                            // they are in the order in which they appear in data array
                            var ordered = [];
                            for (var i = 0; i < ids.length; i++) {
                                var id = ids[i];
                                for (var j = 0; j < matches.length; j++) {
                                    var match = matches[j];
                                    if (equal(id, opts.id(match))) {
                                        ordered.push(match);
                                        matches.splice(j, 1);
                                        break;
                                    }
                                }
                            }
                            callback(ordered);
                        }
                    });
                };
            }

            return opts;
        },

        // multi
        selectChoice: function (choice) {

            var selected = this.container.find(".select2-search-choice-focus");
            if (selected.length && choice && choice[0] == selected[0]) {

            } else {
                if (selected.length) {
                    this.opts.element.trigger("choice-deselected", selected);
                }
                selected.removeClass("select2-search-choice-focus");
                if (choice && choice.length) {
                    this.close();
                    choice.addClass("select2-search-choice-focus");
                    this.opts.element.trigger("choice-selected", choice);
                }
            }
        },

        // multi
        destroy: function() {
            $("label[for='" + this.search.attr('id') + "']")
                .attr('for', this.opts.element.attr("id"));
            this.parent.destroy.apply(this, arguments);
        },

        // multi
        initContainer: function () {

            var selector = ".select2-choices", selection;

            this.searchContainer = this.container.find(".select2-search-field");
            this.selection = selection = this.container.find(selector);

            var _this = this;
            this.selection.on("click", ".select2-search-choice:not(.select2-locked)", function (e) {
                //killEvent(e);
                _this.search[0].focus();
                _this.selectChoice($(this));
            });

            // rewrite labels from original element to focusser
            this.search.attr("id", "s2id_autogen"+nextUid());
            $("label[for='" + this.opts.element.attr("id") + "']")
                .attr('for', this.search.attr('id'));

            this.search.on("input paste", this.bind(function() {
                if (!this.isInterfaceEnabled()) return;
                if (!this.opened()) {
                    this.open();
                }
            }));

            this.search.attr("tabindex", this.elementTabIndex);

            this.keydowns = 0;
            this.search.on("keydown", this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;

                ++this.keydowns;
                var selected = selection.find(".select2-search-choice-focus");
                var prev = selected.prev(".select2-search-choice:not(.select2-locked)");
                var next = selected.next(".select2-search-choice:not(.select2-locked)");
                var pos = getCursorInfo(this.search);

                if (selected.length &&
                    (e.which == KEY.LEFT || e.which == KEY.RIGHT || e.which == KEY.BACKSPACE || e.which == KEY.DELETE || e.which == KEY.ENTER)) {
                    var selectedChoice = selected;
                    if (e.which == KEY.LEFT && prev.length) {
                        selectedChoice = prev;
                    }
                    else if (e.which == KEY.RIGHT) {
                        selectedChoice = next.length ? next : null;
                    }
                    else if (e.which === KEY.BACKSPACE) {
                        this.unselect(selected.first());
                        this.search.width(10);
                        selectedChoice = prev.length ? prev : next;
                    } else if (e.which == KEY.DELETE) {
                        this.unselect(selected.first());
                        this.search.width(10);
                        selectedChoice = next.length ? next : null;
                    } else if (e.which == KEY.ENTER) {
                        selectedChoice = null;
                    }

                    this.selectChoice(selectedChoice);
                    killEvent(e);
                    if (!selectedChoice || !selectedChoice.length) {
                        this.open();
                    }
                    return;
                } else if (((e.which === KEY.BACKSPACE && this.keydowns == 1)
                    || e.which == KEY.LEFT) && (pos.offset == 0 && !pos.length)) {

                    this.selectChoice(selection.find(".select2-search-choice:not(.select2-locked)").last());
                    killEvent(e);
                    return;
                } else {
                    this.selectChoice(null);
                }

                if (this.opened()) {
                    switch (e.which) {
                    case KEY.UP:
                    case KEY.DOWN:
                        this.moveHighlight((e.which === KEY.UP) ? -1 : 1);
                        killEvent(e);
                        return;
                    case KEY.ENTER:
                        this.selectHighlighted();
                        killEvent(e);
                        return;
                    case KEY.TAB:
                        this.selectHighlighted({noFocus:true});
                        this.close();
                        return;
                    case KEY.ESC:
                        this.cancel(e);
                        killEvent(e);
                        return;
                    }
                }

                if (e.which === KEY.TAB || KEY.isControl(e) || KEY.isFunctionKey(e)
                 || e.which === KEY.BACKSPACE || e.which === KEY.ESC) {
                    return;
                }

                if (e.which === KEY.ENTER) {
                    if (this.opts.openOnEnter === false) {
                        return;
                    } else if (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) {
                        return;
                    }
                }

                this.open();

                if (e.which === KEY.PAGE_UP || e.which === KEY.PAGE_DOWN) {
                    // prevent the page from scrolling
                    killEvent(e);
                }

                if (e.which === KEY.ENTER) {
                    // prevent form from being submitted
                    killEvent(e);
                }

            }));

            this.search.on("keyup", this.bind(function (e) {
                this.keydowns = 0;
                this.resizeSearch();
            })
            );

            this.search.on("blur", this.bind(function(e) {
                this.container.removeClass("select2-container-active");
                this.search.removeClass("select2-focused");
                this.selectChoice(null);
                if (!this.opened()) this.clearSearch();
                e.stopImmediatePropagation();
                this.opts.element.trigger($.Event("select2-blur"));
            }));

            this.container.on("click", selector, this.bind(function (e) {
                if (!this.isInterfaceEnabled()) return;
                if ($(e.target).closest(".select2-search-choice").length > 0) {
                    // clicked inside a select2 search choice, do not open
                    return;
                }
                this.selectChoice(null);
                this.clearPlaceholder();
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.open();
                this.focusSearch();
                e.preventDefault();
            }));

            this.container.on("focus", selector, this.bind(function () {
                if (!this.isInterfaceEnabled()) return;
                if (!this.container.hasClass("select2-container-active")) {
                    this.opts.element.trigger($.Event("select2-focus"));
                }
                this.container.addClass("select2-container-active");
                this.dropdown.addClass("select2-drop-active");
                this.clearPlaceholder();
            }));

            this.initContainerWidth();
            this.opts.element.addClass("select2-offscreen");

            // set the placeholder if necessary
            this.clearSearch();
        },

        // multi
        enableInterface: function() {
            if (this.parent.enableInterface.apply(this, arguments)) {
                this.search.prop("disabled", !this.isInterfaceEnabled());
            }
        },

        // multi
        initSelection: function () {
            var data;
            if (this.opts.element.val() === "" && this.opts.element.text() === "") {
                this.updateSelection([]);
                this.close();
                // set the placeholder if necessary
                this.clearSearch();
            }
            if (this.select || this.opts.element.val() !== "") {
                var self = this;
                this.opts.initSelection.call(null, this.opts.element, function(data){
                    if (data !== undefined && data !== null) {
                        self.updateSelection(data);
                        self.close();
                        // set the placeholder if necessary
                        self.clearSearch();
                    }
                });
            }
        },

        // multi
        clearSearch: function () {
            var placeholder = this.getPlaceholder(),
                maxWidth = this.getMaxSearchWidth();

            if (placeholder !== undefined  && this.getVal().length === 0 && this.search.hasClass("select2-focused") === false) {
                this.search.val(placeholder).addClass("select2-default");
                // stretch the search box to full width of the container so as much of the placeholder is visible as possible
                // we could call this.resizeSearch(), but we do not because that requires a sizer and we do not want to create one so early because of a firefox bug, see #944
                this.search.width(maxWidth > 0 ? maxWidth : this.container.css("width"));
            } else {
                this.search.val("").width(10);
            }
        },

        // multi
        clearPlaceholder: function () {
            if (this.search.hasClass("select2-default")) {
                this.search.val("").removeClass("select2-default");
            }
        },

        // multi
        opening: function () {
            this.clearPlaceholder(); // should be done before super so placeholder is not used to search
            this.resizeSearch();

            this.parent.opening.apply(this, arguments);

            this.focusSearch();

            this.updateResults(true);
            this.search.focus();
            this.opts.element.trigger($.Event("select2-open"));
        },

        // multi
        close: function () {
            if (!this.opened()) return;
            this.parent.close.apply(this, arguments);
        },

        // multi
        focus: function () {
            this.close();
            this.search.focus();
        },

        // multi
        isFocused: function () {
            return this.search.hasClass("select2-focused");
        },

        // multi
        updateSelection: function (data) {
            var ids = [], filtered = [], self = this;

            // filter out duplicates
            $(data).each(function () {
                if (indexOf(self.id(this), ids) < 0) {
                    ids.push(self.id(this));
                    filtered.push(this);
                }
            });
            data = filtered;

            this.selection.find(".select2-search-choice").remove();
            $(data).each(function () {
                self.addSelectedChoice(this);
            });
            self.postprocessResults();
        },

        // multi
        tokenize: function() {
            var input = this.search.val();
            input = this.opts.tokenizer.call(this, input, this.data(), this.bind(this.onSelect), this.opts);
            if (input != null && input != undefined) {
                this.search.val(input);
                if (input.length > 0) {
                    this.open();
                }
            }

        },

        // multi
        onSelect: function (data, options) {

            if (!this.triggerSelect(data)) { return; }

            this.addSelectedChoice(data);

            this.opts.element.trigger({ type: "selected", val: this.id(data), choice: data });

            if (this.select || !this.opts.closeOnSelect) this.postprocessResults(data, false, this.opts.closeOnSelect===true);

            if (this.opts.closeOnSelect) {
                this.close();
                this.search.width(10);
            } else {
                if (this.countSelectableResults()>0) {
                    this.search.width(10);
                    this.resizeSearch();
                    if (this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize()) {
                        // if we reached max selection size repaint the results so choices
                        // are replaced with the max selection reached message
                        this.updateResults(true);
                    }
                    this.positionDropdown();
                } else {
                    // if nothing left to select close
                    this.close();
                    this.search.width(10);
                }
            }

            // since its not possible to select an element that has already been
            // added we do not need to check if this is a new element before firing change
            this.triggerChange({ added: data });

            if (!options || !options.noFocus)
                this.focusSearch();
        },

        // multi
        cancel: function () {
            this.close();
            this.focusSearch();
        },

        addSelectedChoice: function (data) {
            var enableChoice = !data.locked,
                enabledItem = $(
                    "<li class='select2-search-choice'>" +
                    "    <div></div>" +
                    "    <a href='#' onclick='return false;' class='select2-search-choice-close' tabindex='-1'></a>" +
                    "</li>"),
                disabledItem = $(
                    "<li class='select2-search-choice select2-locked'>" +
                    "<div></div>" +
                    "</li>");
            var choice = enableChoice ? enabledItem : disabledItem,
                id = this.id(data),
                val = this.getVal(),
                formatted,
                cssClass;

            formatted=this.opts.formatSelection(data, choice.find("div"), this.opts.escapeMarkup);
            if (formatted != undefined) {
                choice.find("div").replaceWith("<div>"+formatted+"</div>");
            }
            cssClass=this.opts.formatSelectionCssClass(data, choice.find("div"));
            if (cssClass != undefined) {
                choice.addClass(cssClass);
            }

            if(enableChoice){
              choice.find(".select2-search-choice-close")
                  .on("mousedown", killEvent)
                  .on("click dblclick", this.bind(function (e) {
                  if (!this.isInterfaceEnabled()) return;

                  $(e.target).closest(".select2-search-choice").fadeOut('fast', this.bind(function(){
                      this.unselect($(e.target));
                      this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus");
                      this.close();
                      this.focusSearch();
                  })).dequeue();
                  killEvent(e);
              })).on("focus", this.bind(function () {
                  if (!this.isInterfaceEnabled()) return;
                  this.container.addClass("select2-container-active");
                  this.dropdown.addClass("select2-drop-active");
              }));
            }

            choice.data("select2-data", data);
            choice.insertBefore(this.searchContainer);

            val.push(id);
            this.setVal(val);
        },

        // multi
        unselect: function (selected) {
            var val = this.getVal(),
                data,
                index;
            selected = selected.closest(".select2-search-choice");

            if (selected.length === 0) {
                throw "Invalid argument: " + selected + ". Must be .select2-search-choice";
            }

            data = selected.data("select2-data");

            if (!data) {
                // prevent a race condition when the 'x' is clicked really fast repeatedly the event can be queued
                // and invoked on an element already removed
                return;
            }

            while((index = indexOf(this.id(data), val)) >= 0) {
                val.splice(index, 1);
                this.setVal(val);
                if (this.select) this.postprocessResults();
            }

            var evt = $.Event("select2-removing");
            evt.val = this.id(data);
            evt.choice = data;
            this.opts.element.trigger(evt);

            if (evt.isDefaultPrevented()) {
                return;
            }

            selected.remove();

            this.opts.element.trigger({ type: "select2-removed", val: this.id(data), choice: data });
            this.triggerChange({ removed: data });
        },

        // multi
        postprocessResults: function (data, initial, noHighlightUpdate) {
            var val = this.getVal(),
                choices = this.results.find(".select2-result"),
                compound = this.results.find(".select2-result-with-children"),
                self = this;

            choices.each2(function (i, choice) {
                var id = self.id(choice.data("select2-data"));
                if (indexOf(id, val) >= 0) {
                    choice.addClass("select2-selected");
                    // mark all children of the selected parent as selected
                    choice.find(".select2-result-selectable").addClass("select2-selected");
                }
            });

            compound.each2(function(i, choice) {
                // hide an optgroup if it doesnt have any selectable children
                if (!choice.is('.select2-result-selectable')
                    && choice.find(".select2-result-selectable:not(.select2-selected)").length === 0) {
                    choice.addClass("select2-selected");
                }
            });

            if (this.highlight() == -1 && noHighlightUpdate !== false){
                self.highlight(0);
            }

            //If all results are chosen render formatNoMAtches
            if(!this.opts.createSearchChoice && !choices.filter('.select2-result:not(.select2-selected)').length > 0){
                if(!data || data && !data.more && this.results.find(".select2-no-results").length === 0) {
                    if (checkFormatter(self.opts.formatNoMatches, "formatNoMatches")) {
                        this.results.append("<li class='select2-no-results'>" + self.opts.formatNoMatches(self.search.val()) + "</li>");
                    }
                }
            }

        },

        // multi
        getMaxSearchWidth: function() {
            return this.selection.width() - getSideBorderPadding(this.search);
        },

        // multi
        resizeSearch: function () {
            var minimumWidth, left, maxWidth, containerLeft, searchWidth,
                sideBorderPadding = getSideBorderPadding(this.search);

            minimumWidth = measureTextWidth(this.search) + 10;

            left = this.search.offset().left;

            maxWidth = this.selection.width();
            containerLeft = this.selection.offset().left;

            searchWidth = maxWidth - (left - containerLeft) - sideBorderPadding;

            if (searchWidth < minimumWidth) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth < 40) {
                searchWidth = maxWidth - sideBorderPadding;
            }

            if (searchWidth <= 0) {
              searchWidth = minimumWidth;
            }

            this.search.width(Math.floor(searchWidth));
        },

        // multi
        getVal: function () {
            var val;
            if (this.select) {
                val = this.select.val();
                return val === null ? [] : val;
            } else {
                val = this.opts.element.val();
                return splitVal(val, this.opts.separator);
            }
        },

        // multi
        setVal: function (val) {
            var unique;
            if (this.select) {
                this.select.val(val);
            } else {
                unique = [];
                // filter out duplicates
                $(val).each(function () {
                    if (indexOf(this, unique) < 0) unique.push(this);
                });
                this.opts.element.val(unique.length === 0 ? "" : unique.join(this.opts.separator));
            }
        },

        // multi
        buildChangeDetails: function (old, current) {
            var current = current.slice(0),
                old = old.slice(0);

            // remove intersection from each array
            for (var i = 0; i < current.length; i++) {
                for (var j = 0; j < old.length; j++) {
                    if (equal(this.opts.id(current[i]), this.opts.id(old[j]))) {
                        current.splice(i, 1);
                        if(i>0){
                        	i--;
                        }
                        old.splice(j, 1);
                        j--;
                    }
                }
            }

            return {added: current, removed: old};
        },


        // multi
        val: function (val, triggerChange) {
            var oldData, self=this;

            if (arguments.length === 0) {
                return this.getVal();
            }

            oldData=this.data();
            if (!oldData.length) oldData=[];

            // val is an id. !val is true for [undefined,null,'',0] - 0 is legal
            if (!val && val !== 0) {
                this.opts.element.val("");
                this.updateSelection([]);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange({added: this.data(), removed: oldData});
                }
                return;
            }

            // val is a list of ids
            this.setVal(val);

            if (this.select) {
                this.opts.initSelection(this.select, this.bind(this.updateSelection));
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(oldData, this.data()));
                }
            } else {
                if (this.opts.initSelection === undefined) {
                    throw new Error("val() cannot be called if initSelection() is not defined");
                }

                this.opts.initSelection(this.opts.element, function(data){
                    var ids=$.map(data, self.id);
                    self.setVal(ids);
                    self.updateSelection(data);
                    self.clearSearch();
                    if (triggerChange) {
                        self.triggerChange(self.buildChangeDetails(oldData, self.data()));
                    }
                });
            }
            this.clearSearch();
        },

        // multi
        onSortStart: function() {
            if (this.select) {
                throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
            }

            // collapse search field into 0 width so its container can be collapsed as well
            this.search.width(0);
            // hide the container
            this.searchContainer.hide();
        },

        // multi
        onSortEnd:function() {

            var val=[], self=this;

            // show search and move it to the end of the list
            this.searchContainer.show();
            // make sure the search container is the last item in the list
            this.searchContainer.appendTo(this.searchContainer.parent());
            // since we collapsed the width in dragStarted, we resize it here
            this.resizeSearch();

            // update selection
            this.selection.find(".select2-search-choice").each(function() {
                val.push(self.opts.id($(this).data("select2-data")));
            });
            this.setVal(val);
            this.triggerChange();
        },

        // multi
        data: function(values, triggerChange) {
            var self=this, ids, old;
            if (arguments.length === 0) {
                 return this.selection
                     .find(".select2-search-choice")
                     .map(function() { return $(this).data("select2-data"); })
                     .get();
            } else {
                old = this.data();
                if (!values) { values = []; }
                ids = $.map(values, function(e) { return self.opts.id(e); });
                this.setVal(ids);
                this.updateSelection(values);
                this.clearSearch();
                if (triggerChange) {
                    this.triggerChange(this.buildChangeDetails(old, this.data()));
                }
            }
        }
    });

    $.fn.select2 = function () {

        var args = Array.prototype.slice.call(arguments, 0),
            opts,
            select2,
            method, value, multiple,
            allowedMethods = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
            valueMethods = ["opened", "isFocused", "container", "dropdown"],
            propertyMethods = ["val", "data"],
            methodsMap = { search: "externalSearch" };

        this.each(function () {
            if (args.length === 0 || typeof(args[0]) === "object") {
                opts = args.length === 0 ? {} : $.extend({}, args[0]);
                opts.element = $(this);

                if (opts.element.get(0).tagName.toLowerCase() === "select") {
                    multiple = opts.element.prop("multiple");
                } else {
                    multiple = opts.multiple || false;
                    if ("tags" in opts) {opts.multiple = multiple = true;}
                }

                select2 = multiple ? new MultiSelect2() : new SingleSelect2();
                select2.init(opts);
            } else if (typeof(args[0]) === "string") {

                if (indexOf(args[0], allowedMethods) < 0) {
                    throw "Unknown method: " + args[0];
                }

                value = undefined;
                select2 = $(this).data("select2");
                if (select2 === undefined) return;

                method=args[0];

                if (method === "container") {
                    value = select2.container;
                } else if (method === "dropdown") {
                    value = select2.dropdown;
                } else {
                    if (methodsMap[method]) method = methodsMap[method];

                    value = select2[method].apply(select2, args.slice(1));
                }
                if (indexOf(args[0], valueMethods) >= 0
                    || (indexOf(args[0], propertyMethods) && args.length == 1)) {
                    return false; // abort the iteration, ready to return first matched value
                }
            } else {
                throw "Invalid arguments to select2 plugin: " + args;
            }
        });
        return (value === undefined) ? this : value;
    };

    // plugin defaults, accessible to users
    $.fn.select2.defaults = {
        width: "copy",
        loadMorePadding: 0,
        closeOnSelect: true,
        openOnEnter: true,
        containerCss: {},
        dropdownCss: {},
        containerCssClass: "",
        dropdownCssClass: "",
        formatResult: function(result, container, query, escapeMarkup) {
            var markup=[];
            markMatch(result.text, query.term, markup, escapeMarkup);
            return markup.join("");
        },
        formatSelection: function (data, container, escapeMarkup) {
            return data ? escapeMarkup(data.text) : undefined;
        },
        sortResults: function (results, container, query) {
            return results;
        },
        formatResultCssClass: function(data) {return undefined;},
        formatSelectionCssClass: function(data, container) {return undefined;},
        formatNoMatches: function () { return "No matches found"; },
        formatInputTooShort: function (input, min) { var n = min - input.length; return "Please enter " + n + " more character" + (n == 1? "" : "s"); },
        formatInputTooLong: function (input, max) { var n = input.length - max; return "Please delete " + n + " character" + (n == 1? "" : "s"); },
        formatSelectionTooBig: function (limit) { return "You can only select " + limit + " item" + (limit == 1 ? "" : "s"); },
        formatLoadMore: function (pageNumber) { return "Loading more results..."; },
        formatSearching: function () { return "Searching..."; },
        minimumResultsForSearch: 0,
        minimumInputLength: 0,
        maximumInputLength: null,
        maximumSelectionSize: 0,
        id: function (e) { return e.id; },
        matcher: function(term, text) {
            return stripDiacritics(''+text).toUpperCase().indexOf(stripDiacritics(''+term).toUpperCase()) >= 0;
        },
        separator: ",",
        tokenSeparators: [],
        tokenizer: defaultTokenizer,
        escapeMarkup: defaultEscapeMarkup,
        blurOnChange: false,
        selectOnBlur: false,
        adaptContainerCssClass: function(c) { return c; },
        adaptDropdownCssClass: function(c) { return null; },
        nextSearchTerm: function(selectedObject, currentSearchTerm) { return undefined; }
    };

    $.fn.select2.ajaxDefaults = {
        transport: $.ajax,
        params: {
            type: "GET",
            cache: false,
            dataType: "json"
        }
    };

    // exports
    window.Select2 = {
        query: {
            ajax: ajax,
            local: local,
            tags: tags
        }, util: {
            debounce: debounce,
            markMatch: markMatch,
            escapeMarkup: defaultEscapeMarkup,
            stripDiacritics: stripDiacritics
        }, "class": {
            "abstract": AbstractSelect2,
            "single": SingleSelect2,
            "multi": MultiSelect2
        }
    };

}(jQuery));

/*
 AngularJS v1.2.11-build.2186+sha.766b3d5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(Z,Q,r){'use strict';function F(b){return function(){var a=arguments[0],c,a="["+(b?b+":":"")+a+"] http://errors.angularjs.org/1.2.11-build.2186+sha.766b3d5/"+(b?b+"/":"")+a;for(c=1;c<arguments.length;c++)a=a+(1==c?"?":"&")+"p"+(c-1)+"="+encodeURIComponent("function"==typeof arguments[c]?arguments[c].toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof arguments[c]?"undefined":"string"!=typeof arguments[c]?JSON.stringify(arguments[c]):arguments[c]);return Error(a)}}function rb(b){if(null==
b||Aa(b))return!1;var a=b.length;return 1===b.nodeType&&a?!0:D(b)||K(b)||0===a||"number"===typeof a&&0<a&&a-1 in b}function q(b,a,c){var d;if(b)if(L(b))for(d in b)"prototype"==d||("length"==d||"name"==d||b.hasOwnProperty&&!b.hasOwnProperty(d))||a.call(c,b[d],d);else if(b.forEach&&b.forEach!==q)b.forEach(a,c);else if(rb(b))for(d=0;d<b.length;d++)a.call(c,b[d],d);else for(d in b)b.hasOwnProperty(d)&&a.call(c,b[d],d);return b}function Pb(b){var a=[],c;for(c in b)b.hasOwnProperty(c)&&a.push(c);return a.sort()}
function Pc(b,a,c){for(var d=Pb(b),e=0;e<d.length;e++)a.call(c,b[d[e]],d[e]);return d}function Qb(b){return function(a,c){b(c,a)}}function $a(){for(var b=ka.length,a;b;){b--;a=ka[b].charCodeAt(0);if(57==a)return ka[b]="A",ka.join("");if(90==a)ka[b]="0";else return ka[b]=String.fromCharCode(a+1),ka.join("")}ka.unshift("0");return ka.join("")}function Rb(b,a){a?b.$$hashKey=a:delete b.$$hashKey}function t(b){var a=b.$$hashKey;q(arguments,function(a){a!==b&&q(a,function(a,c){b[c]=a})});Rb(b,a);return b}
function S(b){return parseInt(b,10)}function Sb(b,a){return t(new (t(function(){},{prototype:b})),a)}function w(){}function Ba(b){return b}function $(b){return function(){return b}}function z(b){return"undefined"===typeof b}function B(b){return"undefined"!==typeof b}function X(b){return null!=b&&"object"===typeof b}function D(b){return"string"===typeof b}function sb(b){return"number"===typeof b}function La(b){return"[object Date]"===Ma.call(b)}function K(b){return"[object Array]"===Ma.call(b)}function L(b){return"function"===
typeof b}function ab(b){return"[object RegExp]"===Ma.call(b)}function Aa(b){return b&&b.document&&b.location&&b.alert&&b.setInterval}function Qc(b){return!(!b||!(b.nodeName||b.on&&b.find))}function Rc(b,a,c){var d=[];q(b,function(b,g,f){d.push(a.call(c,b,g,f))});return d}function bb(b,a){if(b.indexOf)return b.indexOf(a);for(var c=0;c<b.length;c++)if(a===b[c])return c;return-1}function Na(b,a){var c=bb(b,a);0<=c&&b.splice(c,1);return a}function aa(b,a){if(Aa(b)||b&&b.$evalAsync&&b.$watch)throw Oa("cpws");
if(a){if(b===a)throw Oa("cpi");if(K(b))for(var c=a.length=0;c<b.length;c++)a.push(aa(b[c]));else{c=a.$$hashKey;q(a,function(b,c){delete a[c]});for(var d in b)a[d]=aa(b[d]);Rb(a,c)}}else(a=b)&&(K(b)?a=aa(b,[]):La(b)?a=new Date(b.getTime()):ab(b)?a=RegExp(b.source):X(b)&&(a=aa(b,{})));return a}function Tb(b,a){a=a||{};for(var c in b)b.hasOwnProperty(c)&&("$"!==c.charAt(0)&&"$"!==c.charAt(1))&&(a[c]=b[c]);return a}function ua(b,a){if(b===a)return!0;if(null===b||null===a)return!1;if(b!==b&&a!==a)return!0;
var c=typeof b,d;if(c==typeof a&&"object"==c)if(K(b)){if(!K(a))return!1;if((c=b.length)==a.length){for(d=0;d<c;d++)if(!ua(b[d],a[d]))return!1;return!0}}else{if(La(b))return La(a)&&b.getTime()==a.getTime();if(ab(b)&&ab(a))return b.toString()==a.toString();if(b&&b.$evalAsync&&b.$watch||a&&a.$evalAsync&&a.$watch||Aa(b)||Aa(a)||K(a))return!1;c={};for(d in b)if("$"!==d.charAt(0)&&!L(b[d])){if(!ua(b[d],a[d]))return!1;c[d]=!0}for(d in a)if(!c.hasOwnProperty(d)&&"$"!==d.charAt(0)&&a[d]!==r&&!L(a[d]))return!1;
return!0}return!1}function Ub(){return Q.securityPolicy&&Q.securityPolicy.isActive||Q.querySelector&&!(!Q.querySelector("[ng-csp]")&&!Q.querySelector("[data-ng-csp]"))}function cb(b,a){var c=2<arguments.length?va.call(arguments,2):[];return!L(a)||a instanceof RegExp?a:c.length?function(){return arguments.length?a.apply(b,c.concat(va.call(arguments,0))):a.apply(b,c)}:function(){return arguments.length?a.apply(b,arguments):a.call(b)}}function Sc(b,a){var c=a;"string"===typeof b&&"$"===b.charAt(0)?c=
r:Aa(a)?c="$WINDOW":a&&Q===a?c="$DOCUMENT":a&&(a.$evalAsync&&a.$watch)&&(c="$SCOPE");return c}function qa(b,a){return"undefined"===typeof b?r:JSON.stringify(b,Sc,a?"  ":null)}function Vb(b){return D(b)?JSON.parse(b):b}function Pa(b){"function"===typeof b?b=!0:b&&0!==b.length?(b=x(""+b),b=!("f"==b||"0"==b||"false"==b||"no"==b||"n"==b||"[]"==b)):b=!1;return b}function ga(b){b=A(b).clone();try{b.empty()}catch(a){}var c=A("<div>").append(b).html();try{return 3===b[0].nodeType?x(c):c.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,
function(a,b){return"<"+x(b)})}catch(d){return x(c)}}function Wb(b){try{return decodeURIComponent(b)}catch(a){}}function Xb(b){var a={},c,d;q((b||"").split("&"),function(b){b&&(c=b.split("="),d=Wb(c[0]),B(d)&&(b=B(c[1])?Wb(c[1]):!0,a[d]?K(a[d])?a[d].push(b):a[d]=[a[d],b]:a[d]=b))});return a}function Yb(b){var a=[];q(b,function(b,d){K(b)?q(b,function(b){a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))}):a.push(wa(d,!0)+(!0===b?"":"="+wa(b,!0)))});return a.length?a.join("&"):""}function tb(b){return wa(b,
!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function wa(b,a){return encodeURIComponent(b).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,a?"%20":"+")}function Tc(b,a){function c(a){a&&d.push(a)}var d=[b],e,g,f=["ng:app","ng-app","x-ng-app","data-ng-app"],h=/\sng[:\-]app(:\s*([\w\d_]+);?)?\s/;q(f,function(a){f[a]=!0;c(Q.getElementById(a));a=a.replace(":","\\:");b.querySelectorAll&&(q(b.querySelectorAll("."+a),c),q(b.querySelectorAll("."+
a+"\\:"),c),q(b.querySelectorAll("["+a+"]"),c))});q(d,function(a){if(!e){var b=h.exec(" "+a.className+" ");b?(e=a,g=(b[2]||"").replace(/\s+/g,",")):q(a.attributes,function(b){!e&&f[b.name]&&(e=a,g=b.value)})}});e&&a(e,g?[g]:[])}function Zb(b,a){var c=function(){b=A(b);if(b.injector()){var c=b[0]===Q?"document":ga(b);throw Oa("btstrpd",c);}a=a||[];a.unshift(["$provide",function(a){a.value("$rootElement",b)}]);a.unshift("ng");c=$b(a);c.invoke(["$rootScope","$rootElement","$compile","$injector","$animate",
function(a,b,c,d,e){a.$apply(function(){b.data("$injector",d);c(b)(a)})}]);return c},d=/^NG_DEFER_BOOTSTRAP!/;if(Z&&!d.test(Z.name))return c();Z.name=Z.name.replace(d,"");Ca.resumeBootstrap=function(b){q(b,function(b){a.push(b)});c()}}function db(b,a){a=a||"_";return b.replace(Uc,function(b,d){return(d?a:"")+b.toLowerCase()})}function ub(b,a,c){if(!b)throw Oa("areq",a||"?",c||"required");return b}function Qa(b,a,c){c&&K(b)&&(b=b[b.length-1]);ub(L(b),a,"not a function, got "+(b&&"object"==typeof b?
b.constructor.name||"Object":typeof b));return b}function xa(b,a){if("hasOwnProperty"===b)throw Oa("badname",a);}function vb(b,a,c){if(!a)return b;a=a.split(".");for(var d,e=b,g=a.length,f=0;f<g;f++)d=a[f],b&&(b=(e=b)[d]);return!c&&L(b)?cb(e,b):b}function wb(b){var a=b[0];b=b[b.length-1];if(a===b)return A(a);var c=[a];do{a=a.nextSibling;if(!a)break;c.push(a)}while(a!==b);return A(c)}function Vc(b){var a=F("$injector"),c=F("ng");b=b.angular||(b.angular={});b.$$minErr=b.$$minErr||F;return b.module||
(b.module=function(){var b={};return function(e,g,f){if("hasOwnProperty"===e)throw c("badname","module");g&&b.hasOwnProperty(e)&&(b[e]=null);return b[e]||(b[e]=function(){function b(a,d,e){return function(){c[e||"push"]([a,d,arguments]);return n}}if(!g)throw a("nomod",e);var c=[],d=[],l=b("$injector","invoke"),n={_invokeQueue:c,_runBlocks:d,requires:g,name:e,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:b("$provide","value"),constant:b("$provide",
"constant","unshift"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider","register"),directive:b("$compileProvider","directive"),config:l,run:function(a){d.push(a);return this}};f&&l(f);return n}())}}())}function Ra(b){return b.replace(Wc,function(a,b,d,e){return e?d.toUpperCase():d}).replace(Xc,"Moz$1")}function xb(b,a,c,d){function e(b){var e=c&&b?[this.filter(b)]:[this],m=a,k,l,n,p,s,C;if(!d||null!=b)for(;e.length;)for(k=e.shift(),
l=0,n=k.length;l<n;l++)for(p=A(k[l]),m?p.triggerHandler("$destroy"):m=!m,s=0,p=(C=p.children()).length;s<p;s++)e.push(Da(C[s]));return g.apply(this,arguments)}var g=Da.fn[b],g=g.$original||g;e.$original=g;Da.fn[b]=e}function O(b){if(b instanceof O)return b;if(!(this instanceof O)){if(D(b)&&"<"!=b.charAt(0))throw yb("nosel");return new O(b)}if(D(b)){var a=Q.createElement("div");a.innerHTML="<div>&#160;</div>"+b;a.removeChild(a.firstChild);zb(this,a.childNodes);A(Q.createDocumentFragment()).append(this)}else zb(this,
b)}function Ab(b){return b.cloneNode(!0)}function Ea(b){ac(b);var a=0;for(b=b.childNodes||[];a<b.length;a++)Ea(b[a])}function bc(b,a,c,d){if(B(d))throw yb("offargs");var e=la(b,"events");la(b,"handle")&&(z(a)?q(e,function(a,c){Bb(b,c,a);delete e[c]}):q(a.split(" "),function(a){z(c)?(Bb(b,a,e[a]),delete e[a]):Na(e[a]||[],c)}))}function ac(b,a){var c=b[eb],d=Sa[c];d&&(a?delete Sa[c].data[a]:(d.handle&&(d.events.$destroy&&d.handle({},"$destroy"),bc(b)),delete Sa[c],b[eb]=r))}function la(b,a,c){var d=
b[eb],d=Sa[d||-1];if(B(c))d||(b[eb]=d=++Yc,d=Sa[d]={}),d[a]=c;else return d&&d[a]}function cc(b,a,c){var d=la(b,"data"),e=B(c),g=!e&&B(a),f=g&&!X(a);d||f||la(b,"data",d={});if(e)d[a]=c;else if(g){if(f)return d&&d[a];t(d,a)}else return d}function Cb(b,a){return b.getAttribute?-1<(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+a+" "):!1}function Db(b,a){a&&b.setAttribute&&q(a.split(" "),function(a){b.setAttribute("class",ba((" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+ba(a)+" "," ")))})}function Eb(b,a){if(a&&b.setAttribute){var c=(" "+(b.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");q(a.split(" "),function(a){a=ba(a);-1===c.indexOf(" "+a+" ")&&(c+=a+" ")});b.setAttribute("class",ba(c))}}function zb(b,a){if(a){a=a.nodeName||!B(a.length)||Aa(a)?[a]:a;for(var c=0;c<a.length;c++)b.push(a[c])}}function dc(b,a){return fb(b,"$"+(a||"ngController")+"Controller")}function fb(b,a,c){b=A(b);9==b[0].nodeType&&(b=b.find("html"));for(a=K(a)?a:[a];b.length;){for(var d=
0,e=a.length;d<e;d++)if((c=b.data(a[d]))!==r)return c;b=b.parent()}}function ec(b){for(var a=0,c=b.childNodes;a<c.length;a++)Ea(c[a]);for(;b.firstChild;)b.removeChild(b.firstChild)}function fc(b,a){var c=gb[a.toLowerCase()];return c&&gc[b.nodeName]&&c}function Zc(b,a){var c=function(c,e){c.preventDefault||(c.preventDefault=function(){c.returnValue=!1});c.stopPropagation||(c.stopPropagation=function(){c.cancelBubble=!0});c.target||(c.target=c.srcElement||Q);if(z(c.defaultPrevented)){var g=c.preventDefault;
c.preventDefault=function(){c.defaultPrevented=!0;g.call(c)};c.defaultPrevented=!1}c.isDefaultPrevented=function(){return c.defaultPrevented||!1===c.returnValue};var f=Tb(a[e||c.type]||[]);q(f,function(a){a.call(b,c)});8>=M?(c.preventDefault=null,c.stopPropagation=null,c.isDefaultPrevented=null):(delete c.preventDefault,delete c.stopPropagation,delete c.isDefaultPrevented)};c.elem=b;return c}function Fa(b){var a=typeof b,c;"object"==a&&null!==b?"function"==typeof(c=b.$$hashKey)?c=b.$$hashKey():c===
r&&(c=b.$$hashKey=$a()):c=b;return a+":"+c}function Ta(b){q(b,this.put,this)}function hc(b){var a,c;"function"==typeof b?(a=b.$inject)||(a=[],b.length&&(c=b.toString().replace($c,""),c=c.match(ad),q(c[1].split(bd),function(b){b.replace(cd,function(b,c,d){a.push(d)})})),b.$inject=a):K(b)?(c=b.length-1,Qa(b[c],"fn"),a=b.slice(0,c)):Qa(b,"fn",!0);return a}function $b(b){function a(a){return function(b,c){if(X(b))q(b,Qb(a));else return a(b,c)}}function c(a,b){xa(a,"service");if(L(b)||K(b))b=n.instantiate(b);
if(!b.$get)throw Ua("pget",a);return l[a+h]=b}function d(a,b){return c(a,{$get:b})}function e(a){var b=[],c,d,g,h;q(a,function(a){if(!k.get(a)){k.put(a,!0);try{if(D(a))for(c=Va(a),b=b.concat(e(c.requires)).concat(c._runBlocks),d=c._invokeQueue,g=0,h=d.length;g<h;g++){var f=d[g],m=n.get(f[0]);m[f[1]].apply(m,f[2])}else L(a)?b.push(n.invoke(a)):K(a)?b.push(n.invoke(a)):Qa(a,"module")}catch(s){throw K(a)&&(a=a[a.length-1]),s.message&&(s.stack&&-1==s.stack.indexOf(s.message))&&(s=s.message+"\n"+s.stack),
Ua("modulerr",a,s.stack||s.message||s);}}});return b}function g(a,b){function c(d){if(a.hasOwnProperty(d)){if(a[d]===f)throw Ua("cdep",m.join(" <- "));return a[d]}try{return m.unshift(d),a[d]=f,a[d]=b(d)}catch(e){throw a[d]===f&&delete a[d],e;}finally{m.shift()}}function d(a,b,e){var g=[],h=hc(a),f,k,m;k=0;for(f=h.length;k<f;k++){m=h[k];if("string"!==typeof m)throw Ua("itkn",m);g.push(e&&e.hasOwnProperty(m)?e[m]:c(m))}a.$inject||(a=a[f]);return a.apply(b,g)}return{invoke:d,instantiate:function(a,
b){var c=function(){},e;c.prototype=(K(a)?a[a.length-1]:a).prototype;c=new c;e=d(a,c,b);return X(e)||L(e)?e:c},get:c,annotate:hc,has:function(b){return l.hasOwnProperty(b+h)||a.hasOwnProperty(b)}}}var f={},h="Provider",m=[],k=new Ta,l={$provide:{provider:a(c),factory:a(d),service:a(function(a,b){return d(a,["$injector",function(a){return a.instantiate(b)}])}),value:a(function(a,b){return d(a,$(b))}),constant:a(function(a,b){xa(a,"constant");l[a]=b;p[a]=b}),decorator:function(a,b){var c=n.get(a+h),
d=c.$get;c.$get=function(){var a=s.invoke(d,c);return s.invoke(b,null,{$delegate:a})}}}},n=l.$injector=g(l,function(){throw Ua("unpr",m.join(" <- "));}),p={},s=p.$injector=g(p,function(a){a=n.get(a+h);return s.invoke(a.$get,a)});q(e(b),function(a){s.invoke(a||w)});return s}function dd(){var b=!0;this.disableAutoScrolling=function(){b=!1};this.$get=["$window","$location","$rootScope",function(a,c,d){function e(a){var b=null;q(a,function(a){b||"a"!==x(a.nodeName)||(b=a)});return b}function g(){var b=
c.hash(),d;b?(d=f.getElementById(b))?d.scrollIntoView():(d=e(f.getElementsByName(b)))?d.scrollIntoView():"top"===b&&a.scrollTo(0,0):a.scrollTo(0,0)}var f=a.document;b&&d.$watch(function(){return c.hash()},function(){d.$evalAsync(g)});return g}]}function ed(b,a,c,d){function e(a){try{a.apply(null,va.call(arguments,1))}finally{if(C--,0===C)for(;y.length;)try{y.pop()()}catch(b){c.error(b)}}}function g(a,b){(function T(){q(E,function(a){a()});u=b(T,a)})()}function f(){v=null;R!=h.url()&&(R=h.url(),q(ha,
function(a){a(h.url())}))}var h=this,m=a[0],k=b.location,l=b.history,n=b.setTimeout,p=b.clearTimeout,s={};h.isMock=!1;var C=0,y=[];h.$$completeOutstandingRequest=e;h.$$incOutstandingRequestCount=function(){C++};h.notifyWhenNoOutstandingRequests=function(a){q(E,function(a){a()});0===C?a():y.push(a)};var E=[],u;h.addPollFn=function(a){z(u)&&g(100,n);E.push(a);return a};var R=k.href,H=a.find("base"),v=null;h.url=function(a,c){k!==b.location&&(k=b.location);l!==b.history&&(l=b.history);if(a){if(R!=a)return R=
a,d.history?c?l.replaceState(null,"",a):(l.pushState(null,"",a),H.attr("href",H.attr("href"))):(v=a,c?k.replace(a):k.href=a),h}else return v||k.href.replace(/%27/g,"'")};var ha=[],N=!1;h.onUrlChange=function(a){if(!N){if(d.history)A(b).on("popstate",f);if(d.hashchange)A(b).on("hashchange",f);else h.addPollFn(f);N=!0}ha.push(a);return a};h.baseHref=function(){var a=H.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};var V={},J="",ca=h.baseHref();h.cookies=function(a,b){var d,e,g,h;if(a)b===
r?m.cookie=escape(a)+"=;path="+ca+";expires=Thu, 01 Jan 1970 00:00:00 GMT":D(b)&&(d=(m.cookie=escape(a)+"="+escape(b)+";path="+ca).length+1,4096<d&&c.warn("Cookie '"+a+"' possibly not set or overflowed because it was too large ("+d+" > 4096 bytes)!"));else{if(m.cookie!==J)for(J=m.cookie,d=J.split("; "),V={},g=0;g<d.length;g++)e=d[g],h=e.indexOf("="),0<h&&(a=unescape(e.substring(0,h)),V[a]===r&&(V[a]=unescape(e.substring(h+1))));return V}};h.defer=function(a,b){var c;C++;c=n(function(){delete s[c];
e(a)},b||0);s[c]=!0;return c};h.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(w),!0):!1}}function fd(){this.$get=["$window","$log","$sniffer","$document",function(b,a,c,d){return new ed(b,d,a,c)}]}function gd(){this.$get=function(){function b(b,d){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,g(a.n,a.p),g(a,n),n=a,n.n=null)}function g(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(b in a)throw F("$cacheFactory")("iid",b);var f=0,h=t({},d,{id:b}),m={},k=d&&d.capacity||Number.MAX_VALUE,l={},n=null,p=null;
return a[b]={put:function(a,b){var c=l[a]||(l[a]={key:a});e(c);if(!z(b))return a in m||f++,m[a]=b,f>k&&this.remove(p.key),b},get:function(a){var b=l[a];if(b)return e(b),m[a]},remove:function(a){var b=l[a];b&&(b==n&&(n=b.p),b==p&&(p=b.n),g(b.n,b.p),delete l[a],delete m[a],f--)},removeAll:function(){m={};f=0;l={};n=p=null},destroy:function(){l=h=m=null;delete a[b]},info:function(){return t({},h,{size:f})}}}var a={};b.info=function(){var b={};q(a,function(a,e){b[e]=a.info()});return b};b.get=function(b){return a[b]};
return b}}function hd(){this.$get=["$cacheFactory",function(b){return b("templates")}]}function jc(b,a){var c={},d="Directive",e=/^\s*directive\:\s*([\d\w\-_]+)\s+(.*)$/,g=/(([\d\w\-_]+)(?:\:([^;]+))?;?)/,f=/^(on[a-z]+|formaction)$/;this.directive=function m(a,e){xa(a,"directive");D(a)?(ub(e,"directiveFactory"),c.hasOwnProperty(a)||(c[a]=[],b.factory(a+d,["$injector","$exceptionHandler",function(b,d){var e=[];q(c[a],function(c,g){try{var f=b.invoke(c);L(f)?f={compile:$(f)}:!f.compile&&f.link&&(f.compile=
$(f.link));f.priority=f.priority||0;f.index=g;f.name=f.name||a;f.require=f.require||f.controller&&f.name;f.restrict=f.restrict||"A";e.push(f)}catch(m){d(m)}});return e}])),c[a].push(e)):q(a,Qb(m));return this};this.aHrefSanitizationWhitelist=function(b){return B(b)?(a.aHrefSanitizationWhitelist(b),this):a.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a.imgSrcSanitizationWhitelist(b),this):a.imgSrcSanitizationWhitelist()};this.$get=["$injector","$interpolate",
"$exceptionHandler","$http","$templateCache","$parse","$controller","$rootScope","$document","$sce","$animate","$$sanitizeUri",function(a,b,l,n,p,s,C,y,E,u,R,H){function v(a,b,c,d,e){a instanceof A||(a=A(a));q(a,function(b,c){3==b.nodeType&&b.nodeValue.match(/\S+/)&&(a[c]=A(b).wrap("<span></span>").parent()[0])});var g=N(a,b,a,c,d,e);ha(a,"ng-scope");return function(b,c,d){ub(b,"scope");var e=c?Ga.clone.call(a):a;q(d,function(a,b){e.data("$"+b+"Controller",a)});d=0;for(var f=e.length;d<f;d++){var m=
e[d].nodeType;1!==m&&9!==m||e.eq(d).data("$scope",b)}c&&c(e,b);g&&g(b,e,e);return e}}function ha(a,b){try{a.addClass(b)}catch(c){}}function N(a,b,c,d,e,g){function f(a,c,d,e){var g,k,s,l,n,p,I;g=c.length;var C=Array(g);for(n=0;n<g;n++)C[n]=c[n];I=n=0;for(p=m.length;n<p;I++)k=C[I],c=m[n++],g=m[n++],s=A(k),c?(c.scope?(l=a.$new(),s.data("$scope",l)):l=a,(s=c.transclude)||!e&&b?c(g,l,k,d,V(a,s||b)):c(g,l,k,d,e)):g&&g(a,k.childNodes,r,e)}for(var m=[],k,s,l,n,p=0;p<a.length;p++)k=new Fb,s=J(a[p],[],k,0===
p?d:r,e),(g=s.length?ia(s,a[p],k,b,c,null,[],[],g):null)&&g.scope&&ha(A(a[p]),"ng-scope"),k=g&&g.terminal||!(l=a[p].childNodes)||!l.length?null:N(l,g?g.transclude:b),m.push(g,k),n=n||g||k,g=null;return n?f:null}function V(a,b){return function(c,d,e){var g=!1;c||(c=a.$new(),g=c.$$transcluded=!0);d=b(c,d,e);if(g)d.on("$destroy",cb(c,c.$destroy));return d}}function J(a,b,c,d,f){var k=c.$attr,m;switch(a.nodeType){case 1:T(b,ma(Ha(a).toLowerCase()),"E",d,f);var s,l,n;m=a.attributes;for(var p=0,C=m&&m.length;p<
C;p++){var y=!1,R=!1;s=m[p];if(!M||8<=M||s.specified){l=s.name;n=ma(l);W.test(n)&&(l=db(n.substr(6),"-"));var v=n.replace(/(Start|End)$/,"");n===v+"Start"&&(y=l,R=l.substr(0,l.length-5)+"end",l=l.substr(0,l.length-6));n=ma(l.toLowerCase());k[n]=l;c[n]=s=ba(s.value);fc(a,n)&&(c[n]=!0);S(a,b,s,n);T(b,n,"A",d,f,y,R)}}a=a.className;if(D(a)&&""!==a)for(;m=g.exec(a);)n=ma(m[2]),T(b,n,"C",d,f)&&(c[n]=ba(m[3])),a=a.substr(m.index+m[0].length);break;case 3:F(b,a.nodeValue);break;case 8:try{if(m=e.exec(a.nodeValue))n=
ma(m[1]),T(b,n,"M",d,f)&&(c[n]=ba(m[2]))}catch(E){}}b.sort(z);return b}function ca(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw ja("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return A(d)}function P(a,b,c){return function(d,e,g,f,m){e=ca(e[0],b,c);return a(d,e,g,f,m)}}function ia(a,c,d,e,g,f,m,n,p){function y(a,b,c,d){if(a){c&&(a=P(a,c,d));a.require=G.require;if(H===G||G.$$isolateScope)a=
kc(a,{isolateScope:!0});m.push(a)}if(b){c&&(b=P(b,c,d));b.require=G.require;if(H===G||G.$$isolateScope)b=kc(b,{isolateScope:!0});n.push(b)}}function R(a,b,c){var d,e="data",g=!1;if(D(a)){for(;"^"==(d=a.charAt(0))||"?"==d;)a=a.substr(1),"^"==d&&(e="inheritedData"),g=g||"?"==d;d=null;c&&"data"===e&&(d=c[a]);d=d||b[e]("$"+a+"Controller");if(!d&&!g)throw ja("ctreq",a,da);}else K(a)&&(d=[],q(a,function(a){d.push(R(a,b,c))}));return d}function E(a,e,g,f,p){function y(a,b){var c;2>arguments.length&&(b=a,
a=r);z&&(c=ca);return p(a,b,c)}var I,v,N,u,P,J,ca={},hb;I=c===g?d:Tb(d,new Fb(A(g),d.$attr));v=I.$$element;if(H){var T=/^\s*([@=&])(\??)\s*(\w*)\s*$/;f=A(g);J=e.$new(!0);ia&&ia===H.$$originalDirective?f.data("$isolateScope",J):f.data("$isolateScopeNoTemplate",J);ha(f,"ng-isolate-scope");q(H.scope,function(a,c){var d=a.match(T)||[],g=d[3]||c,f="?"==d[2],d=d[1],m,l,n,p;J.$$isolateBindings[c]=d+g;switch(d){case "@":I.$observe(g,function(a){J[c]=a});I.$$observers[g].$$scope=e;I[g]&&(J[c]=b(I[g])(e));
break;case "=":if(f&&!I[g])break;l=s(I[g]);p=l.literal?ua:function(a,b){return a===b};n=l.assign||function(){m=J[c]=l(e);throw ja("nonassign",I[g],H.name);};m=J[c]=l(e);J.$watch(function(){var a=l(e);p(a,J[c])||(p(a,m)?n(e,a=J[c]):J[c]=a);return m=a},null,l.literal);break;case "&":l=s(I[g]);J[c]=function(a){return l(e,a)};break;default:throw ja("iscp",H.name,c,a);}})}hb=p&&y;V&&q(V,function(a){var b={$scope:a===H||a.$$isolateScope?J:e,$element:v,$attrs:I,$transclude:hb},c;P=a.controller;"@"==P&&(P=
I[a.name]);c=C(P,b);ca[a.name]=c;z||v.data("$"+a.name+"Controller",c);a.controllerAs&&(b.$scope[a.controllerAs]=c)});f=0;for(N=m.length;f<N;f++)try{u=m[f],u(u.isolateScope?J:e,v,I,u.require&&R(u.require,v,ca),hb)}catch(G){l(G,ga(v))}f=e;H&&(H.template||null===H.templateUrl)&&(f=J);a&&a(f,g.childNodes,r,p);for(f=n.length-1;0<=f;f--)try{u=n[f],u(u.isolateScope?J:e,v,I,u.require&&R(u.require,v,ca),hb)}catch(B){l(B,ga(v))}}p=p||{};var N=-Number.MAX_VALUE,u,V=p.controllerDirectives,H=p.newIsolateScopeDirective,
ia=p.templateDirective;p=p.nonTlbTranscludeDirective;for(var T=!1,z=!1,t=d.$$element=A(c),G,da,U,F=e,O,M=0,na=a.length;M<na;M++){G=a[M];var Wa=G.$$start,S=G.$$end;Wa&&(t=ca(c,Wa,S));U=r;if(N>G.priority)break;if(U=G.scope)u=u||G,G.templateUrl||(x("new/isolated scope",H,G,t),X(U)&&(H=G));da=G.name;!G.templateUrl&&G.controller&&(U=G.controller,V=V||{},x("'"+da+"' controller",V[da],G,t),V[da]=G);if(U=G.transclude)T=!0,G.$$tlb||(x("transclusion",p,G,t),p=G),"element"==U?(z=!0,N=G.priority,U=ca(c,Wa,S),
t=d.$$element=A(Q.createComment(" "+da+": "+d[da]+" ")),c=t[0],ib(g,A(va.call(U,0)),c),F=v(U,e,N,f&&f.name,{nonTlbTranscludeDirective:p})):(U=A(Ab(c)).contents(),t.empty(),F=v(U,e));if(G.template)if(x("template",ia,G,t),ia=G,U=L(G.template)?G.template(t,d):G.template,U=Y(U),G.replace){f=G;U=A("<div>"+ba(U)+"</div>").contents();c=U[0];if(1!=U.length||1!==c.nodeType)throw ja("tplrt",da,"");ib(g,t,c);na={$attr:{}};U=J(c,[],na);var W=a.splice(M+1,a.length-(M+1));H&&ic(U);a=a.concat(U).concat(W);B(d,na);
na=a.length}else t.html(U);if(G.templateUrl)x("template",ia,G,t),ia=G,G.replace&&(f=G),E=w(a.splice(M,a.length-M),t,d,g,F,m,n,{controllerDirectives:V,newIsolateScopeDirective:H,templateDirective:ia,nonTlbTranscludeDirective:p}),na=a.length;else if(G.compile)try{O=G.compile(t,d,F),L(O)?y(null,O,Wa,S):O&&y(O.pre,O.post,Wa,S)}catch(Z){l(Z,ga(t))}G.terminal&&(E.terminal=!0,N=Math.max(N,G.priority))}E.scope=u&&!0===u.scope;E.transclude=T&&F;return E}function ic(a){for(var b=0,c=a.length;b<c;b++)a[b]=Sb(a[b],
{$$isolateScope:!0})}function T(b,e,g,f,k,s,n){if(e===k)return null;k=null;if(c.hasOwnProperty(e)){var p;e=a.get(e+d);for(var C=0,y=e.length;C<y;C++)try{p=e[C],(f===r||f>p.priority)&&-1!=p.restrict.indexOf(g)&&(s&&(p=Sb(p,{$$start:s,$$end:n})),b.push(p),k=p)}catch(v){l(v)}}return k}function B(a,b){var c=b.$attr,d=a.$attr,e=a.$$element;q(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&(d+=("style"===e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});q(b,function(b,g){"class"==g?(ha(e,b),a["class"]=(a["class"]?a["class"]+
" ":"")+b):"style"==g?(e.attr("style",e.attr("style")+";"+b),a.style=(a.style?a.style+";":"")+b):"$"==g.charAt(0)||a.hasOwnProperty(g)||(a[g]=b,d[g]=c[g])})}function w(a,b,c,d,e,g,f,m){var k=[],s,l,C=b[0],y=a.shift(),v=t({},y,{templateUrl:null,transclude:null,replace:null,$$originalDirective:y}),R=L(y.templateUrl)?y.templateUrl(b,c):y.templateUrl;b.empty();n.get(u.getTrustedResourceUrl(R),{cache:p}).success(function(n){var p,E;n=Y(n);if(y.replace){n=A("<div>"+ba(n)+"</div>").contents();p=n[0];if(1!=
n.length||1!==p.nodeType)throw ja("tplrt",y.name,R);n={$attr:{}};ib(d,b,p);var u=J(p,[],n);X(y.scope)&&ic(u);a=u.concat(a);B(c,n)}else p=C,b.html(n);a.unshift(v);s=ia(a,p,c,e,b,y,g,f,m);q(d,function(a,c){a==p&&(d[c]=b[0])});for(l=N(b[0].childNodes,e);k.length;){n=k.shift();E=k.shift();var H=k.shift(),ha=k.shift(),u=b[0];E!==C&&(u=Ab(p),ib(H,A(E),u));E=s.transclude?V(n,s.transclude):ha;s(l,n,u,d,E)}k=null}).error(function(a,b,c,d){throw ja("tpload",d.url);});return function(a,b,c,d,e){k?(k.push(b),
k.push(c),k.push(d),k.push(e)):s(l,b,c,d,e)}}function z(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function x(a,b,c,d){if(b)throw ja("multidir",b.name,c.name,a,ga(d));}function F(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:$(function(a,b){var c=b.parent(),e=c.data("$binding")||[];e.push(d);ha(c.data("$binding",e),"ng-binding");a.$watch(d,function(a){b[0].nodeValue=a})})})}function O(a,b){if("srcdoc"==b)return u.HTML;var c=Ha(a);if("xlinkHref"==
b||"FORM"==c&&"action"==b||"IMG"!=c&&("src"==b||"ngSrc"==b))return u.RESOURCE_URL}function S(a,c,d,e){var g=b(d,!0);if(g){if("multiple"===e&&"SELECT"===Ha(a))throw ja("selmulti",ga(a));c.push({priority:100,compile:function(){return{pre:function(c,d,m){d=m.$$observers||(m.$$observers={});if(f.test(e))throw ja("nodomevents");if(g=b(m[e],!0,O(a,e)))m[e]=g(c),(d[e]||(d[e]=[])).$$inter=!0,(m.$$observers&&m.$$observers[e].$$scope||c).$watch(g,function(a,b){"class"===e&&a!=b?m.$updateClass(a,b):m.$set(e,
a)})}}}})}}function ib(a,b,c){var d=b[0],e=b.length,g=d.parentNode,f,m;if(a)for(f=0,m=a.length;f<m;f++)if(a[f]==d){a[f++]=c;m=f+e-1;for(var k=a.length;f<k;f++,m++)m<k?a[f]=a[m]:delete a[f];a.length-=e-1;break}g&&g.replaceChild(c,d);a=Q.createDocumentFragment();a.appendChild(d);c[A.expando]=d[A.expando];d=1;for(e=b.length;d<e;d++)g=b[d],A(g).remove(),a.appendChild(g),delete b[d];b[0]=c;b.length=1}function kc(a,b){return t(function(){return a.apply(null,arguments)},a,b)}var Fb=function(a,b){this.$$element=
a;this.$attr=b||{}};Fb.prototype={$normalize:ma,$addClass:function(a){a&&0<a.length&&R.addClass(this.$$element,a)},$removeClass:function(a){a&&0<a.length&&R.removeClass(this.$$element,a)},$updateClass:function(a,b){this.$removeClass(lc(b,a));this.$addClass(lc(a,b))},$set:function(a,b,c,d){var e=fc(this.$$element[0],a);e&&(this.$$element.prop(a,b),d=e);this[a]=b;d?this.$attr[a]=d:(d=this.$attr[a])||(this.$attr[a]=d=db(a,"-"));e=Ha(this.$$element);if("A"===e&&"href"===a||"IMG"===e&&"src"===a)this[a]=
b=H(b,"src"===a);!1!==c&&(null===b||b===r?this.$$element.removeAttr(d):this.$$element.attr(d,b));(c=this.$$observers)&&q(c[a],function(a){try{a(b)}catch(c){l(c)}})},$observe:function(a,b){var c=this,d=c.$$observers||(c.$$observers={}),e=d[a]||(d[a]=[]);e.push(b);y.$evalAsync(function(){e.$$inter||b(c[a])});return b}};var da=b.startSymbol(),na=b.endSymbol(),Y="{{"==da||"}}"==na?Ba:function(a){return a.replace(/\{\{/g,da).replace(/}}/g,na)},W=/^ngAttr[A-Z]/;return v}]}function ma(b){return Ra(b.replace(id,
""))}function lc(b,a){var c="",d=b.split(/\s+/),e=a.split(/\s+/),g=0;a:for(;g<d.length;g++){for(var f=d[g],h=0;h<e.length;h++)if(f==e[h])continue a;c+=(0<c.length?" ":"")+f}return c}function jd(){var b={},a=/^(\S+)(\s+as\s+(\w+))?$/;this.register=function(a,d){xa(a,"controller");X(a)?t(b,a):b[a]=d};this.$get=["$injector","$window",function(c,d){return function(e,g){var f,h,m;D(e)&&(f=e.match(a),h=f[1],m=f[3],e=b.hasOwnProperty(h)?b[h]:vb(g.$scope,h,!0)||vb(d,h,!0),Qa(e,h,!0));f=c.instantiate(e,g);
if(m){if(!g||"object"!=typeof g.$scope)throw F("$controller")("noscp",h||e.name,m);g.$scope[m]=f}return f}}]}function kd(){this.$get=["$window",function(b){return A(b.document)}]}function ld(){this.$get=["$log",function(b){return function(a,c){b.error.apply(b,arguments)}}]}function mc(b){var a={},c,d,e;if(!b)return a;q(b.split("\n"),function(b){e=b.indexOf(":");c=x(ba(b.substr(0,e)));d=ba(b.substr(e+1));c&&(a[c]=a[c]?a[c]+(", "+d):d)});return a}function nc(b){var a=X(b)?b:r;return function(c){a||
(a=mc(b));return c?a[x(c)]||null:a}}function oc(b,a,c){if(L(c))return c(b,a);q(c,function(c){b=c(b,a)});return b}function md(){var b=/^\s*(\[|\{[^\{])/,a=/[\}\]]\s*$/,c=/^\)\]\}',?\n/,d={"Content-Type":"application/json;charset=utf-8"},e=this.defaults={transformResponse:[function(d){D(d)&&(d=d.replace(c,""),b.test(d)&&a.test(d)&&(d=Vb(d)));return d}],transformRequest:[function(a){return X(a)&&"[object File]"!==Ma.call(a)?qa(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:aa(d),
put:aa(d),patch:aa(d)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN"},g=this.interceptors=[],f=this.responseInterceptors=[];this.$get=["$httpBackend","$browser","$cacheFactory","$rootScope","$q","$injector",function(a,b,c,d,n,p){function s(a){function c(a){var b=t({},a,{data:oc(a.data,a.headers,d.transformResponse)});return 200<=a.status&&300>a.status?b:n.reject(b)}var d={transformRequest:e.transformRequest,transformResponse:e.transformResponse},g=function(a){function b(a){var c;q(a,function(b,
d){L(b)&&(c=b(),null!=c?a[d]=c:delete a[d])})}var c=e.headers,d=t({},a.headers),g,f,c=t({},c.common,c[x(a.method)]);b(c);b(d);a:for(g in c){a=x(g);for(f in d)if(x(f)===a)continue a;d[g]=c[g]}return d}(a);t(d,a);d.headers=g;d.method=Ia(d.method);(a=Gb(d.url)?b.cookies()[d.xsrfCookieName||e.xsrfCookieName]:r)&&(g[d.xsrfHeaderName||e.xsrfHeaderName]=a);var f=[function(a){g=a.headers;var b=oc(a.data,nc(g),a.transformRequest);z(a.data)&&q(g,function(a,b){"content-type"===x(b)&&delete g[b]});z(a.withCredentials)&&
!z(e.withCredentials)&&(a.withCredentials=e.withCredentials);return C(a,b,g).then(c,c)},r],h=n.when(d);for(q(u,function(a){(a.request||a.requestError)&&f.unshift(a.request,a.requestError);(a.response||a.responseError)&&f.push(a.response,a.responseError)});f.length;){a=f.shift();var k=f.shift(),h=h.then(a,k)}h.success=function(a){h.then(function(b){a(b.data,b.status,b.headers,d)});return h};h.error=function(a){h.then(null,function(b){a(b.data,b.status,b.headers,d)});return h};return h}function C(b,
c,g){function f(a,b,c){u&&(200<=a&&300>a?u.put(r,[a,b,mc(c)]):u.remove(r));m(b,a,c);d.$$phase||d.$apply()}function m(a,c,d){c=Math.max(c,0);(200<=c&&300>c?p.resolve:p.reject)({data:a,status:c,headers:nc(d),config:b})}function k(){var a=bb(s.pendingRequests,b);-1!==a&&s.pendingRequests.splice(a,1)}var p=n.defer(),C=p.promise,u,q,r=y(b.url,b.params);s.pendingRequests.push(b);C.then(k,k);(b.cache||e.cache)&&(!1!==b.cache&&"GET"==b.method)&&(u=X(b.cache)?b.cache:X(e.cache)?e.cache:E);if(u)if(q=u.get(r),
B(q)){if(q.then)return q.then(k,k),q;K(q)?m(q[1],q[0],aa(q[2])):m(q,200,{})}else u.put(r,C);z(q)&&a(b.method,r,c,f,g,b.timeout,b.withCredentials,b.responseType);return C}function y(a,b){if(!b)return a;var c=[];Pc(b,function(a,b){null===a||z(a)||(K(a)||(a=[a]),q(a,function(a){X(a)&&(a=qa(a));c.push(wa(b)+"="+wa(a))}))});return a+(-1==a.indexOf("?")?"?":"&")+c.join("&")}var E=c("$http"),u=[];q(g,function(a){u.unshift(D(a)?p.get(a):p.invoke(a))});q(f,function(a,b){var c=D(a)?p.get(a):p.invoke(a);u.splice(b,
0,{response:function(a){return c(n.when(a))},responseError:function(a){return c(n.reject(a))}})});s.pendingRequests=[];(function(a){q(arguments,function(a){s[a]=function(b,c){return s(t(c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){q(arguments,function(a){s[a]=function(b,c,d){return s(t(d||{},{method:a,url:b,data:c}))}})})("post","put");s.defaults=e;return s}]}function nd(b){return 8>=M&&"patch"===x(b)?new ActiveXObject("Microsoft.XMLHTTP"):new Z.XMLHttpRequest}function od(){this.$get=
["$browser","$window","$document",function(b,a,c){return pd(b,nd,b.defer,a.angular.callbacks,c[0])}]}function pd(b,a,c,d,e){function g(a,b){var c=e.createElement("script"),d=function(){c.onreadystatechange=c.onload=c.onerror=null;e.body.removeChild(c);b&&b()};c.type="text/javascript";c.src=a;M&&8>=M?c.onreadystatechange=function(){/loaded|complete/.test(c.readyState)&&d()}:c.onload=c.onerror=function(){d()};e.body.appendChild(c);return d}var f=-1;return function(e,m,k,l,n,p,s,C){function y(){u=f;
H&&H();v&&v.abort()}function E(a,d,e,g){r&&c.cancel(r);H=v=null;d=0===d?e?200:404:d;a(1223==d?204:d,e,g);b.$$completeOutstandingRequest(w)}var u;b.$$incOutstandingRequestCount();m=m||b.url();if("jsonp"==x(e)){var R="_"+(d.counter++).toString(36);d[R]=function(a){d[R].data=a};var H=g(m.replace("JSON_CALLBACK","angular.callbacks."+R),function(){d[R].data?E(l,200,d[R].data):E(l,u||-2);d[R]=Ca.noop})}else{var v=a(e);v.open(e,m,!0);q(n,function(a,b){B(a)&&v.setRequestHeader(b,a)});v.onreadystatechange=
function(){if(v&&4==v.readyState){var a=null,b=null;u!==f&&(a=v.getAllResponseHeaders(),b="response"in v?v.response:v.responseText);E(l,u||v.status,b,a)}};s&&(v.withCredentials=!0);C&&(v.responseType=C);v.send(k||null)}if(0<p)var r=c(y,p);else p&&p.then&&p.then(y)}}function qd(){var b="{{",a="}}";this.startSymbol=function(a){return a?(b=a,this):b};this.endSymbol=function(b){return b?(a=b,this):a};this.$get=["$parse","$exceptionHandler","$sce",function(c,d,e){function g(g,k,l){for(var n,p,s=0,C=[],
y=g.length,E=!1,u=[];s<y;)-1!=(n=g.indexOf(b,s))&&-1!=(p=g.indexOf(a,n+f))?(s!=n&&C.push(g.substring(s,n)),C.push(s=c(E=g.substring(n+f,p))),s.exp=E,s=p+h,E=!0):(s!=y&&C.push(g.substring(s)),s=y);(y=C.length)||(C.push(""),y=1);if(l&&1<C.length)throw pc("noconcat",g);if(!k||E)return u.length=y,s=function(a){try{for(var b=0,c=y,f;b<c;b++)"function"==typeof(f=C[b])&&(f=f(a),f=l?e.getTrusted(l,f):e.valueOf(f),null===f||z(f)?f="":"string"!=typeof f&&(f=qa(f))),u[b]=f;return u.join("")}catch(h){a=pc("interr",
g,h.toString()),d(a)}},s.exp=g,s.parts=C,s}var f=b.length,h=a.length;g.startSymbol=function(){return b};g.endSymbol=function(){return a};return g}]}function rd(){this.$get=["$rootScope","$window","$q",function(b,a,c){function d(d,f,h,m){var k=a.setInterval,l=a.clearInterval,n=c.defer(),p=n.promise,s=0,C=B(m)&&!m;h=B(h)?h:0;p.then(null,null,d);p.$$intervalId=k(function(){n.notify(s++);0<h&&s>=h&&(n.resolve(s),l(p.$$intervalId),delete e[p.$$intervalId]);C||b.$apply()},f);e[p.$$intervalId]=n;return p}
var e={};d.cancel=function(a){return a&&a.$$intervalId in e?(e[a.$$intervalId].reject("canceled"),clearInterval(a.$$intervalId),delete e[a.$$intervalId],!0):!1};return d}]}function sd(){this.$get=function(){return{id:"en-us",NUMBER_FORMATS:{DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{minInt:1,minFrac:0,maxFrac:3,posPre:"",posSuf:"",negPre:"-",negSuf:"",gSize:3,lgSize:3},{minInt:1,minFrac:2,maxFrac:2,posPre:"\u00a4",posSuf:"",negPre:"(\u00a4",negSuf:")",gSize:3,lgSize:3}],CURRENCY_SYM:"$"},DATETIME_FORMATS:{MONTH:"January February March April May June July August September October November December".split(" "),
SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),AMPMS:["AM","PM"],medium:"MMM d, y h:mm:ss a","short":"M/d/yy h:mm a",fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",mediumDate:"MMM d, y",shortDate:"M/d/yy",mediumTime:"h:mm:ss a",shortTime:"h:mm a"},pluralCat:function(b){return 1===b?"one":"other"}}}}function qc(b){b=b.split("/");for(var a=b.length;a--;)b[a]=
tb(b[a]);return b.join("/")}function rc(b,a,c){b=ya(b,c);a.$$protocol=b.protocol;a.$$host=b.hostname;a.$$port=S(b.port)||td[b.protocol]||null}function sc(b,a,c){var d="/"!==b.charAt(0);d&&(b="/"+b);b=ya(b,c);a.$$path=decodeURIComponent(d&&"/"===b.pathname.charAt(0)?b.pathname.substring(1):b.pathname);a.$$search=Xb(b.search);a.$$hash=decodeURIComponent(b.hash);a.$$path&&"/"!=a.$$path.charAt(0)&&(a.$$path="/"+a.$$path)}function oa(b,a){if(0===a.indexOf(b))return a.substr(b.length)}function Xa(b){var a=
b.indexOf("#");return-1==a?b:b.substr(0,a)}function Hb(b){return b.substr(0,Xa(b).lastIndexOf("/")+1)}function tc(b,a){this.$$html5=!0;a=a||"";var c=Hb(b);rc(b,this,b);this.$$parse=function(a){var e=oa(c,a);if(!D(e))throw Ib("ipthprfx",a,c);sc(e,this,b);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Yb(this.$$search),b=this.$$hash?"#"+tb(this.$$hash):"";this.$$url=qc(this.$$path)+(a?"?"+a:"")+b;this.$$absUrl=c+this.$$url.substr(1)};this.$$rewrite=function(d){var e;
if((e=oa(b,d))!==r)return d=e,(e=oa(a,e))!==r?c+(oa("/",e)||e):b+d;if((e=oa(c,d))!==r)return c+e;if(c==d+"/")return c}}function Jb(b,a){var c=Hb(b);rc(b,this,b);this.$$parse=function(d){var e=oa(b,d)||oa(c,d),e="#"==e.charAt(0)?oa(a,e):this.$$html5?e:"";if(!D(e))throw Ib("ihshprfx",d,a);sc(e,this,b);d=this.$$path;var g=/^\/?.*?:(\/.*)/;0===e.indexOf(b)&&(e=e.replace(b,""));g.exec(e)||(d=(e=g.exec(d))?e[1]:d);this.$$path=d;this.$$compose()};this.$$compose=function(){var c=Yb(this.$$search),e=this.$$hash?
"#"+tb(this.$$hash):"";this.$$url=qc(this.$$path)+(c?"?"+c:"")+e;this.$$absUrl=b+(this.$$url?a+this.$$url:"")};this.$$rewrite=function(a){if(Xa(b)==Xa(a))return a}}function uc(b,a){this.$$html5=!0;Jb.apply(this,arguments);var c=Hb(b);this.$$rewrite=function(d){var e;if(b==Xa(d))return d;if(e=oa(c,d))return b+a+e;if(c===d+"/")return c}}function jb(b){return function(){return this[b]}}function vc(b,a){return function(c){if(z(c))return this[b];this[b]=a(c);this.$$compose();return this}}function ud(){var b=
"",a=!1;this.hashPrefix=function(a){return B(a)?(b=a,this):b};this.html5Mode=function(b){return B(b)?(a=b,this):a};this.$get=["$rootScope","$browser","$sniffer","$rootElement",function(c,d,e,g){function f(a){c.$broadcast("$locationChangeSuccess",h.absUrl(),a)}var h,m=d.baseHref(),k=d.url();a?(m=k.substring(0,k.indexOf("/",k.indexOf("//")+2))+(m||"/"),e=e.history?tc:uc):(m=Xa(k),e=Jb);h=new e(m,"#"+b);h.$$parse(h.$$rewrite(k));g.on("click",function(a){if(!a.ctrlKey&&!a.metaKey&&2!=a.which){for(var b=
A(a.target);"a"!==x(b[0].nodeName);)if(b[0]===g[0]||!(b=b.parent())[0])return;var e=b.prop("href");X(e)&&"[object SVGAnimatedString]"===e.toString()&&(e=ya(e.animVal).href);var f=h.$$rewrite(e);e&&(!b.attr("target")&&f&&!a.isDefaultPrevented())&&(a.preventDefault(),f!=d.url()&&(h.$$parse(f),c.$apply(),Z.angular["ff-684208-preventDefault"]=!0))}});h.absUrl()!=k&&d.url(h.absUrl(),!0);d.onUrlChange(function(a){h.absUrl()!=a&&(c.$evalAsync(function(){var b=h.absUrl();h.$$parse(a);c.$broadcast("$locationChangeStart",
a,b).defaultPrevented?(h.$$parse(b),d.url(b)):f(b)}),c.$$phase||c.$digest())});var l=0;c.$watch(function(){var a=d.url(),b=h.$$replace;l&&a==h.absUrl()||(l++,c.$evalAsync(function(){c.$broadcast("$locationChangeStart",h.absUrl(),a).defaultPrevented?h.$$parse(a):(d.url(h.absUrl(),b),f(a))}));h.$$replace=!1;return l});return h}]}function vd(){var b=!0,a=this;this.debugEnabled=function(a){return B(a)?(b=a,this):b};this.$get=["$window",function(c){function d(a){a instanceof Error&&(a.stack?a=a.message&&
-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=c.console||{},e=b[a]||b.log||w;a=!1;try{a=!!e.apply}catch(m){}return a?function(){var a=[];q(arguments,function(b){a.push(d(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),debug:function(){var c=e("debug");return function(){b&&c.apply(a,arguments)}}()}}]}function ea(b,
a){if("constructor"===b)throw za("isecfld",a);return b}function Ya(b,a){if(b){if(b.constructor===b)throw za("isecfn",a);if(b.document&&b.location&&b.alert&&b.setInterval)throw za("isecwindow",a);if(b.children&&(b.nodeName||b.on&&b.find))throw za("isecdom",a);}return b}function kb(b,a,c,d,e){e=e||{};a=a.split(".");for(var g,f=0;1<a.length;f++){g=ea(a.shift(),d);var h=b[g];h||(h={},b[g]=h);b=h;b.then&&e.unwrapPromises&&(ra(d),"$$v"in b||function(a){a.then(function(b){a.$$v=b})}(b),b.$$v===r&&(b.$$v=
{}),b=b.$$v)}g=ea(a.shift(),d);return b[g]=c}function wc(b,a,c,d,e,g,f){ea(b,g);ea(a,g);ea(c,g);ea(d,g);ea(e,g);return f.unwrapPromises?function(f,m){var k=m&&m.hasOwnProperty(b)?m:f,l;if(null==k)return k;(k=k[b])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!a)return k;if(null==k)return r;(k=k[a])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!c)return k;if(null==k)return r;(k=k[c])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=
a})),k=k.$$v);if(!d)return k;if(null==k)return r;(k=k[d])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);if(!e)return k;if(null==k)return r;(k=k[e])&&k.then&&(ra(g),"$$v"in k||(l=k,l.$$v=r,l.then(function(a){l.$$v=a})),k=k.$$v);return k}:function(g,f){var k=f&&f.hasOwnProperty(b)?f:g;if(null==k)return k;k=k[b];if(!a)return k;if(null==k)return r;k=k[a];if(!c)return k;if(null==k)return r;k=k[c];if(!d)return k;if(null==k)return r;k=k[d];return e?null==k?r:k=k[e]:k}}function wd(b,
a){ea(b,a);return function(a,d){return null==a?r:(d&&d.hasOwnProperty(b)?d:a)[b]}}function xd(b,a,c){ea(b,c);ea(a,c);return function(c,e){if(null==c)return r;c=(e&&e.hasOwnProperty(b)?e:c)[b];return null==c?r:c[a]}}function xc(b,a,c){if(Kb.hasOwnProperty(b))return Kb[b];var d=b.split("."),e=d.length,g;if(a.unwrapPromises||1!==e)if(a.unwrapPromises||2!==e)if(a.csp)g=6>e?wc(d[0],d[1],d[2],d[3],d[4],c,a):function(b,g){var f=0,h;do h=wc(d[f++],d[f++],d[f++],d[f++],d[f++],c,a)(b,g),g=r,b=h;while(f<e);
return h};else{var f="var p;\n";q(d,function(b,d){ea(b,c);f+="if(s == null) return undefined;\ns="+(d?"s":'((k&&k.hasOwnProperty("'+b+'"))?k:s)')+'["'+b+'"];\n'+(a.unwrapPromises?'if (s && s.then) {\n pw("'+c.replace(/(["\r\n])/g,"\\$1")+'");\n if (!("$$v" in s)) {\n p=s;\n p.$$v = undefined;\n p.then(function(v) {p.$$v=v;});\n}\n s=s.$$v\n}\n':"")});var f=f+"return s;",h=new Function("s","k","pw",f);h.toString=$(f);g=a.unwrapPromises?function(a,b){return h(a,b,ra)}:h}else g=xd(d[0],d[1],c);else g=
wd(d[0],c);"hasOwnProperty"!==b&&(Kb[b]=g);return g}function yd(){var b={},a={csp:!1,unwrapPromises:!1,logPromiseWarnings:!0};this.unwrapPromises=function(b){return B(b)?(a.unwrapPromises=!!b,this):a.unwrapPromises};this.logPromiseWarnings=function(b){return B(b)?(a.logPromiseWarnings=b,this):a.logPromiseWarnings};this.$get=["$filter","$sniffer","$log",function(c,d,e){a.csp=d.csp;ra=function(b){a.logPromiseWarnings&&!yc.hasOwnProperty(b)&&(yc[b]=!0,e.warn("[$parse] Promise found in the expression `"+
b+"`. Automatic unwrapping of promises in Angular expressions is deprecated."))};return function(d){var e;switch(typeof d){case "string":if(b.hasOwnProperty(d))return b[d];e=new Lb(a);e=(new Za(e,c,a)).parse(d,!1);"hasOwnProperty"!==d&&(b[d]=e);return e;case "function":return d;default:return w}}}]}function zd(){this.$get=["$rootScope","$exceptionHandler",function(b,a){return Ad(function(a){b.$evalAsync(a)},a)}]}function Ad(b,a){function c(a){return a}function d(a){return f(a)}var e=function(){var h=
[],m,k;return k={resolve:function(a){if(h){var c=h;h=r;m=g(a);c.length&&b(function(){for(var a,b=0,d=c.length;b<d;b++)a=c[b],m.then(a[0],a[1],a[2])})}},reject:function(a){k.resolve(f(a))},notify:function(a){if(h){var c=h;h.length&&b(function(){for(var b,d=0,e=c.length;d<e;d++)b=c[d],b[2](a)})}},promise:{then:function(b,g,f){var k=e(),C=function(d){try{k.resolve((L(b)?b:c)(d))}catch(e){k.reject(e),a(e)}},y=function(b){try{k.resolve((L(g)?g:d)(b))}catch(c){k.reject(c),a(c)}},E=function(b){try{k.notify((L(f)?
f:c)(b))}catch(d){a(d)}};h?h.push([C,y,E]):m.then(C,y,E);return k.promise},"catch":function(a){return this.then(null,a)},"finally":function(a){function b(a,c){var d=e();c?d.resolve(a):d.reject(a);return d.promise}function d(e,g){var f=null;try{f=(a||c)()}catch(h){return b(h,!1)}return f&&L(f.then)?f.then(function(){return b(e,g)},function(a){return b(a,!1)}):b(e,g)}return this.then(function(a){return d(a,!0)},function(a){return d(a,!1)})}}}},g=function(a){return a&&L(a.then)?a:{then:function(c){var d=
e();b(function(){d.resolve(c(a))});return d.promise}}},f=function(c){return{then:function(g,f){var l=e();b(function(){try{l.resolve((L(f)?f:d)(c))}catch(b){l.reject(b),a(b)}});return l.promise}}};return{defer:e,reject:f,when:function(h,m,k,l){var n=e(),p,s=function(b){try{return(L(m)?m:c)(b)}catch(d){return a(d),f(d)}},C=function(b){try{return(L(k)?k:d)(b)}catch(c){return a(c),f(c)}},y=function(b){try{return(L(l)?l:c)(b)}catch(d){a(d)}};b(function(){g(h).then(function(a){p||(p=!0,n.resolve(g(a).then(s,
C,y)))},function(a){p||(p=!0,n.resolve(C(a)))},function(a){p||n.notify(y(a))})});return n.promise},all:function(a){var b=e(),c=0,d=K(a)?[]:{};q(a,function(a,e){c++;g(a).then(function(a){d.hasOwnProperty(e)||(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise}}}function Bd(){var b=10,a=F("$rootScope"),c=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$injector","$exceptionHandler","$parse","$browser",function(d,
e,g,f){function h(){this.$id=$a();this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this["this"]=this.$root=this;this.$$destroyed=!1;this.$$asyncQueue=[];this.$$postDigestQueue=[];this.$$listeners={};this.$$listenerCount={};this.$$isolateBindings={}}function m(b){if(p.$$phase)throw a("inprog",p.$$phase);p.$$phase=b}function k(a,b){var c=g(a);Qa(c,b);return c}function l(a,b,c){do a.$$listenerCount[c]-=b,0===a.$$listenerCount[c]&&
delete a.$$listenerCount[c];while(a=a.$parent)}function n(){}h.prototype={constructor:h,$new:function(a){a?(a=new h,a.$root=this.$root,a.$$asyncQueue=this.$$asyncQueue,a.$$postDigestQueue=this.$$postDigestQueue):(a=function(){},a.prototype=this,a=new a,a.$id=$a());a["this"]=a;a.$$listeners={};a.$$listenerCount={};a.$parent=this;a.$$watchers=a.$$nextSibling=a.$$childHead=a.$$childTail=null;a.$$prevSibling=this.$$childTail;this.$$childHead?this.$$childTail=this.$$childTail.$$nextSibling=a:this.$$childHead=
this.$$childTail=a;return a},$watch:function(a,b,d){var e=k(a,"watch"),g=this.$$watchers,f={fn:b,last:n,get:e,exp:a,eq:!!d};c=null;if(!L(b)){var h=k(b||w,"listener");f.fn=function(a,b,c){h(c)}}if("string"==typeof a&&e.constant){var m=f.fn;f.fn=function(a,b,c){m.call(this,a,b,c);Na(g,f)}}g||(g=this.$$watchers=[]);g.unshift(f);return function(){Na(g,f);c=null}},$watchCollection:function(a,b){var c=this,d,e,f=0,h=g(a),m=[],k={},l=0;return this.$watch(function(){e=h(c);var a,b;if(X(e))if(rb(e))for(d!==
m&&(d=m,l=d.length=0,f++),a=e.length,l!==a&&(f++,d.length=l=a),b=0;b<a;b++)d[b]!==e[b]&&(f++,d[b]=e[b]);else{d!==k&&(d=k={},l=0,f++);a=0;for(b in e)e.hasOwnProperty(b)&&(a++,d.hasOwnProperty(b)?d[b]!==e[b]&&(f++,d[b]=e[b]):(l++,d[b]=e[b],f++));if(l>a)for(b in f++,d)d.hasOwnProperty(b)&&!e.hasOwnProperty(b)&&(l--,delete d[b])}else d!==e&&(d=e,f++);return f},function(){b(e,d,c)})},$digest:function(){var d,f,g,h,k=this.$$asyncQueue,l=this.$$postDigestQueue,q,v,r=b,N,V=[],J,A,P;m("$digest");c=null;do{v=
!1;for(N=this;k.length;){try{P=k.shift(),P.scope.$eval(P.expression)}catch(B){p.$$phase=null,e(B)}c=null}a:do{if(h=N.$$watchers)for(q=h.length;q--;)try{if(d=h[q])if((f=d.get(N))!==(g=d.last)&&!(d.eq?ua(f,g):"number"==typeof f&&"number"==typeof g&&isNaN(f)&&isNaN(g)))v=!0,c=d,d.last=d.eq?aa(f):f,d.fn(f,g===n?f:g,N),5>r&&(J=4-r,V[J]||(V[J]=[]),A=L(d.exp)?"fn: "+(d.exp.name||d.exp.toString()):d.exp,A+="; newVal: "+qa(f)+"; oldVal: "+qa(g),V[J].push(A));else if(d===c){v=!1;break a}}catch(t){p.$$phase=
null,e(t)}if(!(h=N.$$childHead||N!==this&&N.$$nextSibling))for(;N!==this&&!(h=N.$$nextSibling);)N=N.$parent}while(N=h);if((v||k.length)&&!r--)throw p.$$phase=null,a("infdig",b,qa(V));}while(v||k.length);for(p.$$phase=null;l.length;)try{l.shift()()}catch(z){e(z)}},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this!==p&&(q(this.$$listenerCount,cb(null,l,this)),a.$$childHead==this&&(a.$$childHead=this.$$nextSibling),a.$$childTail==this&&
(a.$$childTail=this.$$prevSibling),this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling),this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling),this.$parent=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a){p.$$phase||p.$$asyncQueue.length||f.defer(function(){p.$$asyncQueue.length&&p.$digest()});this.$$asyncQueue.push({scope:this,expression:a})},$$postDigest:function(a){this.$$postDigestQueue.push(a)},
$apply:function(a){try{return m("$apply"),this.$eval(a)}catch(b){e(b)}finally{p.$$phase=null;try{p.$digest()}catch(c){throw e(c),c;}}},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){c[bb(c,b)]=null;l(e,1,a)}},$emit:function(a,b){var c=[],d,f=this,g=!1,h={name:a,targetScope:f,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=
!0},defaultPrevented:!1},m=[h].concat(va.call(arguments,1)),k,l;do{d=f.$$listeners[a]||c;h.currentScope=f;k=0;for(l=d.length;k<l;k++)if(d[k])try{d[k].apply(null,m)}catch(p){e(p)}else d.splice(k,1),k--,l--;if(g)break;f=f.$parent}while(f);return h},$broadcast:function(a,b){for(var c=this,d=this,f={name:a,targetScope:this,preventDefault:function(){f.defaultPrevented=!0},defaultPrevented:!1},g=[f].concat(va.call(arguments,1)),h,k;c=d;){f.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,
g)}catch(m){e(m)}else d.splice(h,1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}return f}};var p=new h;return p}]}function Cd(){var b=/^\s*(https?|ftp|mailto|tel|file):/,a=/^\s*(https?|ftp|file):|data:image\//;this.aHrefSanitizationWhitelist=function(a){return B(a)?(b=a,this):b};this.imgSrcSanitizationWhitelist=function(b){return B(b)?(a=b,this):a};this.$get=function(){return function(c,d){var e=d?a:b,g;if(!M||8<=
M)if(g=ya(c).href,""!==g&&!g.match(e))return"unsafe:"+g;return c}}}function Dd(b){if("self"===b)return b;if(D(b)){if(-1<b.indexOf("***"))throw sa("iwcard",b);b=b.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08").replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return RegExp("^"+b+"$")}if(ab(b))return RegExp("^"+b.source+"$");throw sa("imatcher");}function zc(b){var a=[];B(b)&&q(b,function(b){a.push(Dd(b))});return a}function Ed(){this.SCE_CONTEXTS=fa;var b=["self"],a=[];this.resourceUrlWhitelist=
function(a){arguments.length&&(b=zc(a));return b};this.resourceUrlBlacklist=function(b){arguments.length&&(a=zc(b));return a};this.$get=["$injector",function(c){function d(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var e=function(a){throw sa("unsafe");};c.has("$sanitize")&&(e=c.get("$sanitize"));
var g=d(),f={};f[fa.HTML]=d(g);f[fa.CSS]=d(g);f[fa.URL]=d(g);f[fa.JS]=d(g);f[fa.RESOURCE_URL]=d(f[fa.URL]);return{trustAs:function(a,b){var c=f.hasOwnProperty(a)?f[a]:null;if(!c)throw sa("icontext",a,b);if(null===b||b===r||""===b)return b;if("string"!==typeof b)throw sa("itype",a);return new c(b)},getTrusted:function(c,d){if(null===d||d===r||""===d)return d;var g=f.hasOwnProperty(c)?f[c]:null;if(g&&d instanceof g)return d.$$unwrapTrustedValue();if(c===fa.RESOURCE_URL){var g=ya(d.toString()),l,n,p=
!1;l=0;for(n=b.length;l<n;l++)if("self"===b[l]?Gb(g):b[l].exec(g.href)){p=!0;break}if(p)for(l=0,n=a.length;l<n;l++)if("self"===a[l]?Gb(g):a[l].exec(g.href)){p=!1;break}if(p)return d;throw sa("insecurl",d.toString());}if(c===fa.HTML)return e(d);throw sa("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function Fd(){var b=!0;this.enabled=function(a){arguments.length&&(b=!!a);return b};this.$get=["$parse","$sniffer","$sceDelegate",function(a,c,d){if(b&&c.msie&&8>c.msieDocumentMode)throw sa("iequirks");
var e=aa(fa);e.isEnabled=function(){return b};e.trustAs=d.trustAs;e.getTrusted=d.getTrusted;e.valueOf=d.valueOf;b||(e.trustAs=e.getTrusted=function(a,b){return b},e.valueOf=Ba);e.parseAs=function(b,c){var d=a(c);return d.literal&&d.constant?d:function(a,c){return e.getTrusted(b,d(a,c))}};var g=e.parseAs,f=e.getTrusted,h=e.trustAs;q(fa,function(a,b){var c=x(b);e[Ra("parse_as_"+c)]=function(b){return g(a,b)};e[Ra("get_trusted_"+c)]=function(b){return f(a,b)};e[Ra("trust_as_"+c)]=function(b){return h(a,
b)}});return e}]}function Gd(){this.$get=["$window","$document",function(b,a){var c={},d=S((/android (\d+)/.exec(x((b.navigator||{}).userAgent))||[])[1]),e=/Boxee/i.test((b.navigator||{}).userAgent),g=a[0]||{},f=g.documentMode,h,m=/^(Moz|webkit|O|ms)(?=[A-Z])/,k=g.body&&g.body.style,l=!1,n=!1;if(k){for(var p in k)if(l=m.exec(p)){h=l[0];h=h.substr(0,1).toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in k&&"webkit");l=!!("transition"in k||h+"Transition"in k);n=!!("animation"in k||h+"Animation"in
k);!d||l&&n||(l=D(g.body.style.webkitTransition),n=D(g.body.style.webkitAnimation))}return{history:!(!b.history||!b.history.pushState||4>d||e),hashchange:"onhashchange"in b&&(!f||7<f),hasEvent:function(a){if("input"==a&&9==M)return!1;if(z(c[a])){var b=g.createElement("div");c[a]="on"+a in b}return c[a]},csp:Ub(),vendorPrefix:h,transitions:l,animations:n,android:d,msie:M,msieDocumentMode:f}}]}function Hd(){this.$get=["$rootScope","$browser","$q","$exceptionHandler",function(b,a,c,d){function e(e,h,
m){var k=c.defer(),l=k.promise,n=B(m)&&!m;h=a.defer(function(){try{k.resolve(e())}catch(a){k.reject(a),d(a)}finally{delete g[l.$$timeoutId]}n||b.$apply()},h);l.$$timeoutId=h;g[h]=k;return l}var g={};e.cancel=function(b){return b&&b.$$timeoutId in g?(g[b.$$timeoutId].reject("canceled"),delete g[b.$$timeoutId],a.defer.cancel(b.$$timeoutId)):!1};return e}]}function ya(b,a){var c=b;M&&(Y.setAttribute("href",c),c=Y.href);Y.setAttribute("href",c);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,
""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function Gb(b){b=D(b)?ya(b):b;return b.protocol===Ac.protocol&&b.host===Ac.host}function Id(){this.$get=$(Z)}function Bc(b){function a(d,e){if(X(d)){var g={};q(d,function(b,c){g[c]=a(c,b)});return g}return b.factory(d+c,e)}var c="Filter";this.register=a;this.$get=["$injector",function(a){return function(b){return a.get(b+
c)}}];a("currency",Cc);a("date",Dc);a("filter",Jd);a("json",Kd);a("limitTo",Ld);a("lowercase",Md);a("number",Ec);a("orderBy",Fc);a("uppercase",Nd)}function Jd(){return function(b,a,c){if(!K(b))return b;var d=typeof c,e=[];e.check=function(a){for(var b=0;b<e.length;b++)if(!e[b](a))return!1;return!0};"function"!==d&&(c="boolean"===d&&c?function(a,b){return Ca.equals(a,b)}:function(a,b){b=(""+b).toLowerCase();return-1<(""+a).toLowerCase().indexOf(b)});var g=function(a,b){if("string"==typeof b&&"!"===
b.charAt(0))return!g(a,b.substr(1));switch(typeof a){case "boolean":case "number":case "string":return c(a,b);case "object":switch(typeof b){case "object":return c(a,b);default:for(var d in a)if("$"!==d.charAt(0)&&g(a[d],b))return!0}return!1;case "array":for(d=0;d<a.length;d++)if(g(a[d],b))return!0;return!1;default:return!1}};switch(typeof a){case "boolean":case "number":case "string":a={$:a};case "object":for(var f in a)(function(b){"undefined"!=typeof a[b]&&e.push(function(c){return g("$"==b?c:
vb(c,b),a[b])})})(f);break;case "function":e.push(a);break;default:return b}d=[];for(f=0;f<b.length;f++){var h=b[f];e.check(h)&&d.push(h)}return d}}function Cc(b){var a=b.NUMBER_FORMATS;return function(b,d){z(d)&&(d=a.CURRENCY_SYM);return Gc(b,a.PATTERNS[1],a.GROUP_SEP,a.DECIMAL_SEP,2).replace(/\u00A4/g,d)}}function Ec(b){var a=b.NUMBER_FORMATS;return function(b,d){return Gc(b,a.PATTERNS[0],a.GROUP_SEP,a.DECIMAL_SEP,d)}}function Gc(b,a,c,d,e){if(isNaN(b)||!isFinite(b))return"";var g=0>b;b=Math.abs(b);
var f=b+"",h="",m=[],k=!1;if(-1!==f.indexOf("e")){var l=f.match(/([\d\.]+)e(-?)(\d+)/);l&&"-"==l[2]&&l[3]>e+1?f="0":(h=f,k=!0)}if(k)0<e&&(-1<b&&1>b)&&(h=b.toFixed(e));else{f=(f.split(Hc)[1]||"").length;z(e)&&(e=Math.min(Math.max(a.minFrac,f),a.maxFrac));f=Math.pow(10,e);b=Math.round(b*f)/f;b=(""+b).split(Hc);f=b[0];b=b[1]||"";var l=0,n=a.lgSize,p=a.gSize;if(f.length>=n+p)for(l=f.length-n,k=0;k<l;k++)0===(l-k)%p&&0!==k&&(h+=c),h+=f.charAt(k);for(k=l;k<f.length;k++)0===(f.length-k)%n&&0!==k&&(h+=c),
h+=f.charAt(k);for(;b.length<e;)b+="0";e&&"0"!==e&&(h+=d+b.substr(0,e))}m.push(g?a.negPre:a.posPre);m.push(h);m.push(g?a.negSuf:a.posSuf);return m.join("")}function Mb(b,a,c){var d="";0>b&&(d="-",b=-b);for(b=""+b;b.length<a;)b="0"+b;c&&(b=b.substr(b.length-a));return d+b}function W(b,a,c,d){c=c||0;return function(e){e=e["get"+b]();if(0<c||e>-c)e+=c;0===e&&-12==c&&(e=12);return Mb(e,a,d)}}function lb(b,a){return function(c,d){var e=c["get"+b](),g=Ia(a?"SHORT"+b:b);return d[g][e]}}function Dc(b){function a(a){var b;
if(b=a.match(c)){a=new Date(0);var g=0,f=0,h=b[8]?a.setUTCFullYear:a.setFullYear,m=b[8]?a.setUTCHours:a.setHours;b[9]&&(g=S(b[9]+b[10]),f=S(b[9]+b[11]));h.call(a,S(b[1]),S(b[2])-1,S(b[3]));g=S(b[4]||0)-g;f=S(b[5]||0)-f;h=S(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));m.call(a,g,f,h,b)}return a}var c=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;return function(c,e){var g="",f=[],h,m;e=e||"mediumDate";e=b.DATETIME_FORMATS[e]||e;D(c)&&
(c=Od.test(c)?S(c):a(c));sb(c)&&(c=new Date(c));if(!La(c))return c;for(;e;)(m=Pd.exec(e))?(f=f.concat(va.call(m,1)),e=f.pop()):(f.push(e),e=null);q(f,function(a){h=Qd[a];g+=h?h(c,b.DATETIME_FORMATS):a.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function Kd(){return function(b){return qa(b,!0)}}function Ld(){return function(b,a){if(!K(b)&&!D(b))return b;a=S(a);if(D(b))return a?0<=a?b.slice(0,a):b.slice(a,b.length):"";var c=[],d,e;a>b.length?a=b.length:a<-b.length&&(a=-b.length);0<a?(d=0,
e=a):(d=b.length+a,e=b.length);for(;d<e;d++)c.push(b[d]);return c}}function Fc(b){return function(a,c,d){function e(a,b){return Pa(b)?function(b,c){return a(c,b)}:a}if(!K(a)||!c)return a;c=K(c)?c:[c];c=Rc(c,function(a){var c=!1,d=a||Ba;if(D(a)){if("+"==a.charAt(0)||"-"==a.charAt(0))c="-"==a.charAt(0),a=a.substring(1);d=b(a)}return e(function(a,b){var c;c=d(a);var e=d(b),g=typeof c,f=typeof e;g==f?("string"==g&&(c=c.toLowerCase(),e=e.toLowerCase()),c=c===e?0:c<e?-1:1):c=g<f?-1:1;return c},c)});for(var g=
[],f=0;f<a.length;f++)g.push(a[f]);return g.sort(e(function(a,b){for(var d=0;d<c.length;d++){var e=c[d](a,b);if(0!==e)return e}return 0},d))}}function ta(b){L(b)&&(b={link:b});b.restrict=b.restrict||"AC";return $(b)}function Ic(b,a){function c(a,c){c=c?"-"+db(c,"-"):"";b.removeClass((a?mb:nb)+c).addClass((a?nb:mb)+c)}var d=this,e=b.parent().controller("form")||ob,g=0,f=d.$error={},h=[];d.$name=a.name||a.ngForm;d.$dirty=!1;d.$pristine=!0;d.$valid=!0;d.$invalid=!1;e.$addControl(d);b.addClass(Ja);c(!0);
d.$addControl=function(a){xa(a.$name,"input");h.push(a);a.$name&&(d[a.$name]=a)};d.$removeControl=function(a){a.$name&&d[a.$name]===a&&delete d[a.$name];q(f,function(b,c){d.$setValidity(c,!0,a)});Na(h,a)};d.$setValidity=function(a,b,h){var n=f[a];if(b)n&&(Na(n,h),n.length||(g--,g||(c(b),d.$valid=!0,d.$invalid=!1),f[a]=!1,c(!0,a),e.$setValidity(a,!0,d)));else{g||c(b);if(n){if(-1!=bb(n,h))return}else f[a]=n=[],g++,c(!1,a),e.$setValidity(a,!1,d);n.push(h);d.$valid=!1;d.$invalid=!0}};d.$setDirty=function(){b.removeClass(Ja).addClass(pb);
d.$dirty=!0;d.$pristine=!1;e.$setDirty()};d.$setPristine=function(){b.removeClass(pb).addClass(Ja);d.$dirty=!1;d.$pristine=!0;q(h,function(a){a.$setPristine()})}}function pa(b,a,c,d){b.$setValidity(a,c);return c?d:r}function qb(b,a,c,d,e,g){if(!e.android){var f=!1;a.on("compositionstart",function(a){f=!0});a.on("compositionend",function(){f=!1})}var h=function(){if(!f){var e=a.val();Pa(c.ngTrim||"T")&&(e=ba(e));d.$viewValue!==e&&(b.$$phase?d.$setViewValue(e):b.$apply(function(){d.$setViewValue(e)}))}};
if(e.hasEvent("input"))a.on("input",h);else{var m,k=function(){m||(m=g.defer(function(){h();m=null}))};a.on("keydown",function(a){a=a.keyCode;91===a||(15<a&&19>a||37<=a&&40>=a)||k()});if(e.hasEvent("paste"))a.on("paste cut",k)}a.on("change",h);d.$render=function(){a.val(d.$isEmpty(d.$viewValue)?"":d.$viewValue)};var l=c.ngPattern;l&&((e=l.match(/^\/(.*)\/([gim]*)$/))?(l=RegExp(e[1],e[2]),e=function(a){return pa(d,"pattern",d.$isEmpty(a)||l.test(a),a)}):e=function(c){var e=b.$eval(l);if(!e||!e.test)throw F("ngPattern")("noregexp",
l,e,ga(a));return pa(d,"pattern",d.$isEmpty(c)||e.test(c),c)},d.$formatters.push(e),d.$parsers.push(e));if(c.ngMinlength){var n=S(c.ngMinlength);e=function(a){return pa(d,"minlength",d.$isEmpty(a)||a.length>=n,a)};d.$parsers.push(e);d.$formatters.push(e)}if(c.ngMaxlength){var p=S(c.ngMaxlength);e=function(a){return pa(d,"maxlength",d.$isEmpty(a)||a.length<=p,a)};d.$parsers.push(e);d.$formatters.push(e)}}function Nb(b,a){b="ngClass"+b;return function(){return{restrict:"AC",link:function(c,d,e){function g(b){if(!0===
a||c.$index%2===a){var d=f(b||"");h?ua(b,h)||e.$updateClass(d,f(h)):e.$addClass(d)}h=aa(b)}function f(a){if(K(a))return a.join(" ");if(X(a)){var b=[];q(a,function(a,c){a&&b.push(c)});return b.join(" ")}return a}var h;c.$watch(e[b],g,!0);e.$observe("class",function(a){g(c.$eval(e[b]))});"ngClass"!==b&&c.$watch("$index",function(d,g){var h=d&1;if(h!==g&1){var n=f(c.$eval(e[b]));h===a?e.$addClass(n):e.$removeClass(n)}})}}}}var x=function(b){return D(b)?b.toLowerCase():b},Ia=function(b){return D(b)?b.toUpperCase():
b},M,A,Da,va=[].slice,Rd=[].push,Ma=Object.prototype.toString,Oa=F("ng"),Ca=Z.angular||(Z.angular={}),Va,Ha,ka=["0","0","0"];M=S((/msie (\d+)/.exec(x(navigator.userAgent))||[])[1]);isNaN(M)&&(M=S((/trident\/.*; rv:(\d+)/.exec(x(navigator.userAgent))||[])[1]));w.$inject=[];Ba.$inject=[];var ba=function(){return String.prototype.trim?function(b){return D(b)?b.trim():b}:function(b){return D(b)?b.replace(/^\s\s*/,"").replace(/\s\s*$/,""):b}}();Ha=9>M?function(b){b=b.nodeName?b:b[0];return b.scopeName&&
"HTML"!=b.scopeName?Ia(b.scopeName+":"+b.nodeName):b.nodeName}:function(b){return b.nodeName?b.nodeName:b[0].nodeName};var Uc=/[A-Z]/g,Sd={full:"1.2.11-build.2186+sha.766b3d5",major:1,minor:2,dot:11,codeName:"cryptocurrency-hyperdeflation"},Sa=O.cache={},eb=O.expando="ng-"+(new Date).getTime(),Yc=1,Jc=Z.document.addEventListener?function(b,a,c){b.addEventListener(a,c,!1)}:function(b,a,c){b.attachEvent("on"+a,c)},Bb=Z.document.removeEventListener?function(b,a,c){b.removeEventListener(a,c,!1)}:function(b,
a,c){b.detachEvent("on"+a,c)},Wc=/([\:\-\_]+(.))/g,Xc=/^moz([A-Z])/,yb=F("jqLite"),Ga=O.prototype={ready:function(b){function a(){c||(c=!0,b())}var c=!1;"complete"===Q.readyState?setTimeout(a):(this.on("DOMContentLoaded",a),O(Z).on("load",a))},toString:function(){var b=[];q(this,function(a){b.push(""+a)});return"["+b.join(", ")+"]"},eq:function(b){return 0<=b?A(this[b]):A(this[this.length+b])},length:0,push:Rd,sort:[].sort,splice:[].splice},gb={};q("multiple selected checked disabled readOnly required open".split(" "),
function(b){gb[x(b)]=b});var gc={};q("input select option textarea button form details".split(" "),function(b){gc[Ia(b)]=!0});q({data:cc,inheritedData:fb,scope:function(b){return A(b).data("$scope")||fb(b.parentNode||b,["$isolateScope","$scope"])},isolateScope:function(b){return A(b).data("$isolateScope")||A(b).data("$isolateScopeNoTemplate")},controller:dc,injector:function(b){return fb(b,"$injector")},removeAttr:function(b,a){b.removeAttribute(a)},hasClass:Cb,css:function(b,a,c){a=Ra(a);if(B(c))b.style[a]=
c;else{var d;8>=M&&(d=b.currentStyle&&b.currentStyle[a],""===d&&(d="auto"));d=d||b.style[a];8>=M&&(d=""===d?r:d);return d}},attr:function(b,a,c){var d=x(a);if(gb[d])if(B(c))c?(b[a]=!0,b.setAttribute(a,d)):(b[a]=!1,b.removeAttribute(d));else return b[a]||(b.attributes.getNamedItem(a)||w).specified?d:r;else if(B(c))b.setAttribute(a,c);else if(b.getAttribute)return b=b.getAttribute(a,2),null===b?r:b},prop:function(b,a,c){if(B(c))b[a]=c;else return b[a]},text:function(){function b(b,d){var e=a[b.nodeType];
if(z(d))return e?b[e]:"";b[e]=d}var a=[];9>M?(a[1]="innerText",a[3]="nodeValue"):a[1]=a[3]="textContent";b.$dv="";return b}(),val:function(b,a){if(z(a)){if("SELECT"===Ha(b)&&b.multiple){var c=[];q(b.options,function(a){a.selected&&c.push(a.value||a.text)});return 0===c.length?null:c}return b.value}b.value=a},html:function(b,a){if(z(a))return b.innerHTML;for(var c=0,d=b.childNodes;c<d.length;c++)Ea(d[c]);b.innerHTML=a},empty:ec},function(b,a){O.prototype[a]=function(a,d){var e,g;if(b!==ec&&(2==b.length&&
b!==Cb&&b!==dc?a:d)===r){if(X(a)){for(e=0;e<this.length;e++)if(b===cc)b(this[e],a);else for(g in a)b(this[e],g,a[g]);return this}e=b.$dv;g=e===r?Math.min(this.length,1):this.length;for(var f=0;f<g;f++){var h=b(this[f],a,d);e=e?e+h:h}return e}for(e=0;e<this.length;e++)b(this[e],a,d);return this}});q({removeData:ac,dealoc:Ea,on:function a(c,d,e,g){if(B(g))throw yb("onargs");var f=la(c,"events"),h=la(c,"handle");f||la(c,"events",f={});h||la(c,"handle",h=Zc(c,f));q(d.split(" "),function(d){var g=f[d];
if(!g){if("mouseenter"==d||"mouseleave"==d){var l=Q.body.contains||Q.body.compareDocumentPosition?function(a,c){var d=9===a.nodeType?a.documentElement:a,e=c&&c.parentNode;return a===e||!!(e&&1===e.nodeType&&(d.contains?d.contains(e):a.compareDocumentPosition&&a.compareDocumentPosition(e)&16))}:function(a,c){if(c)for(;c=c.parentNode;)if(c===a)return!0;return!1};f[d]=[];a(c,{mouseleave:"mouseout",mouseenter:"mouseover"}[d],function(a){var c=a.relatedTarget;c&&(c===this||l(this,c))||h(a,d)})}else Jc(c,
d,h),f[d]=[];g=f[d]}g.push(e)})},off:bc,one:function(a,c,d){a=A(a);a.on(c,function g(){a.off(c,d);a.off(c,g)});a.on(c,d)},replaceWith:function(a,c){var d,e=a.parentNode;Ea(a);q(new O(c),function(c){d?e.insertBefore(c,d.nextSibling):e.replaceChild(c,a);d=c})},children:function(a){var c=[];q(a.childNodes,function(a){1===a.nodeType&&c.push(a)});return c},contents:function(a){return a.childNodes||[]},append:function(a,c){q(new O(c),function(c){1!==a.nodeType&&11!==a.nodeType||a.appendChild(c)})},prepend:function(a,
c){if(1===a.nodeType){var d=a.firstChild;q(new O(c),function(c){a.insertBefore(c,d)})}},wrap:function(a,c){c=A(c)[0];var d=a.parentNode;d&&d.replaceChild(c,a);c.appendChild(a)},remove:function(a){Ea(a);var c=a.parentNode;c&&c.removeChild(a)},after:function(a,c){var d=a,e=a.parentNode;q(new O(c),function(a){e.insertBefore(a,d.nextSibling);d=a})},addClass:Eb,removeClass:Db,toggleClass:function(a,c,d){z(d)&&(d=!Cb(a,c));(d?Eb:Db)(a,c)},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},
next:function(a){if(a.nextElementSibling)return a.nextElementSibling;for(a=a.nextSibling;null!=a&&1!==a.nodeType;)a=a.nextSibling;return a},find:function(a,c){return a.getElementsByTagName?a.getElementsByTagName(c):[]},clone:Ab,triggerHandler:function(a,c,d){c=(la(a,"events")||{})[c];d=d||[];var e=[{preventDefault:w,stopPropagation:w}];q(c,function(c){c.apply(a,e.concat(d))})}},function(a,c){O.prototype[c]=function(c,e,g){for(var f,h=0;h<this.length;h++)z(f)?(f=a(this[h],c,e,g),B(f)&&(f=A(f))):zb(f,
a(this[h],c,e,g));return B(f)?f:this};O.prototype.bind=O.prototype.on;O.prototype.unbind=O.prototype.off});Ta.prototype={put:function(a,c){this[Fa(a)]=c},get:function(a){return this[Fa(a)]},remove:function(a){var c=this[a=Fa(a)];delete this[a];return c}};var ad=/^function\s*[^\(]*\(\s*([^\)]*)\)/m,bd=/,/,cd=/^\s*(_?)(\S+?)\1\s*$/,$c=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ua=F("$injector"),Td=F("$animate"),Ud=["$provide",function(a){this.$$selectors={};this.register=function(c,d){var e=c+"-animation";
if(c&&"."!=c.charAt(0))throw Td("notcsel",c);this.$$selectors[c.substr(1)]=e;a.factory(e,d)};this.classNameFilter=function(a){1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null);return this.$$classNameFilter};this.$get=["$timeout",function(a){return{enter:function(d,e,g,f){g?g.after(d):(e&&e[0]||(e=g.parent()),e.append(d));f&&a(f,0,!1)},leave:function(d,e){d.remove();e&&a(e,0,!1)},move:function(a,c,g,f){this.enter(a,c,g,f)},addClass:function(d,e,g){e=D(e)?e:K(e)?e.join(" "):
"";q(d,function(a){Eb(a,e)});g&&a(g,0,!1)},removeClass:function(d,e,g){e=D(e)?e:K(e)?e.join(" "):"";q(d,function(a){Db(a,e)});g&&a(g,0,!1)},enabled:w}}]}],ja=F("$compile");jc.$inject=["$provide","$$sanitizeUriProvider"];var id=/^(x[\:\-_]|data[\:\-_])/i,pc=F("$interpolate"),Vd=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,td={http:80,https:443,ftp:21},Ib=F("$location");uc.prototype=Jb.prototype=tc.prototype={$$html5:!1,$$replace:!1,absUrl:jb("$$absUrl"),url:function(a,c){if(z(a))return this.$$url;var d=Vd.exec(a);
d[1]&&this.path(decodeURIComponent(d[1]));(d[2]||d[1])&&this.search(d[3]||"");this.hash(d[5]||"",c);return this},protocol:jb("$$protocol"),host:jb("$$host"),port:jb("$$port"),path:vc("$$path",function(a){return"/"==a.charAt(0)?a:"/"+a}),search:function(a,c){switch(arguments.length){case 0:return this.$$search;case 1:if(D(a))this.$$search=Xb(a);else if(X(a))this.$$search=a;else throw Ib("isrcharg");break;default:z(c)||null===c?delete this.$$search[a]:this.$$search[a]=c}this.$$compose();return this},
hash:vc("$$hash",Ba),replace:function(){this.$$replace=!0;return this}};var za=F("$parse"),yc={},ra,Ka={"null":function(){return null},"true":function(){return!0},"false":function(){return!1},undefined:w,"+":function(a,c,d,e){d=d(a,c);e=e(a,c);return B(d)?B(e)?d+e:d:B(e)?e:r},"-":function(a,c,d,e){d=d(a,c);e=e(a,c);return(B(d)?d:0)-(B(e)?e:0)},"*":function(a,c,d,e){return d(a,c)*e(a,c)},"/":function(a,c,d,e){return d(a,c)/e(a,c)},"%":function(a,c,d,e){return d(a,c)%e(a,c)},"^":function(a,c,d,e){return d(a,
c)^e(a,c)},"=":w,"===":function(a,c,d,e){return d(a,c)===e(a,c)},"!==":function(a,c,d,e){return d(a,c)!==e(a,c)},"==":function(a,c,d,e){return d(a,c)==e(a,c)},"!=":function(a,c,d,e){return d(a,c)!=e(a,c)},"<":function(a,c,d,e){return d(a,c)<e(a,c)},">":function(a,c,d,e){return d(a,c)>e(a,c)},"<=":function(a,c,d,e){return d(a,c)<=e(a,c)},">=":function(a,c,d,e){return d(a,c)>=e(a,c)},"&&":function(a,c,d,e){return d(a,c)&&e(a,c)},"||":function(a,c,d,e){return d(a,c)||e(a,c)},"&":function(a,c,d,e){return d(a,
c)&e(a,c)},"|":function(a,c,d,e){return e(a,c)(a,c,d(a,c))},"!":function(a,c,d){return!d(a,c)}},Wd={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},Lb=function(a){this.options=a};Lb.prototype={constructor:Lb,lex:function(a){this.text=a;this.index=0;this.ch=r;this.lastCh=":";this.tokens=[];var c;for(a=[];this.index<this.text.length;){this.ch=this.text.charAt(this.index);if(this.is("\"'"))this.readString(this.ch);else if(this.isNumber(this.ch)||this.is(".")&&this.isNumber(this.peek()))this.readNumber();
else if(this.isIdent(this.ch))this.readIdent(),this.was("{,")&&("{"===a[0]&&(c=this.tokens[this.tokens.length-1]))&&(c.json=-1===c.text.indexOf("."));else if(this.is("(){}[].,;:?"))this.tokens.push({index:this.index,text:this.ch,json:this.was(":[,")&&this.is("{[")||this.is("}]:,")}),this.is("{[")&&a.unshift(this.ch),this.is("}]")&&a.shift(),this.index++;else if(this.isWhitespace(this.ch)){this.index++;continue}else{var d=this.ch+this.peek(),e=d+this.peek(2),g=Ka[this.ch],f=Ka[d],h=Ka[e];h?(this.tokens.push({index:this.index,
text:e,fn:h}),this.index+=3):f?(this.tokens.push({index:this.index,text:d,fn:f}),this.index+=2):g?(this.tokens.push({index:this.index,text:this.ch,fn:g,json:this.was("[,:")&&this.is("+-")}),this.index+=1):this.throwError("Unexpected next character ",this.index,this.index+1)}this.lastCh=this.ch}return this.tokens},is:function(a){return-1!==a.indexOf(this.ch)},was:function(a){return-1!==a.indexOf(this.lastCh)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+
a):!1},isNumber:function(a){return"0"<=a&&"9">=a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdent:function(a){return"a"<=a&&"z">=a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,c,d){d=d||this.index;c=B(c)?"s "+c+"-"+this.index+" ["+this.text.substring(c,d)+"]":" "+d;throw za("lexerr",a,c,this.text);},readNumber:function(){for(var a="",c=this.index;this.index<this.text.length;){var d=
x(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var e=this.peek();if("e"==d&&this.isExpOperator(e))a+=d;else if(this.isExpOperator(d)&&e&&this.isNumber(e)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||e&&this.isNumber(e)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}a*=1;this.tokens.push({index:c,text:a,json:!0,fn:function(){return a}})},readIdent:function(){for(var a=this,c="",d=this.index,e,g,f,h;this.index<this.text.length;){h=
this.text.charAt(this.index);if("."===h||this.isIdent(h)||this.isNumber(h))"."===h&&(e=this.index),c+=h;else break;this.index++}if(e)for(g=this.index;g<this.text.length;){h=this.text.charAt(g);if("("===h){f=c.substr(e-d+1);c=c.substr(0,e-d);this.index=g;break}if(this.isWhitespace(h))g++;else break}d={index:d,text:c};if(Ka.hasOwnProperty(c))d.fn=Ka[c],d.json=Ka[c];else{var m=xc(c,this.options,this.text);d.fn=t(function(a,c){return m(a,c)},{assign:function(d,e){return kb(d,c,e,a.text,a.options)}})}this.tokens.push(d);
f&&(this.tokens.push({index:e,text:".",json:!1}),this.tokens.push({index:e+1,text:f,json:!1}))},readString:function(a){var c=this.index;this.index++;for(var d="",e=a,g=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),e=e+f;if(g)"u"===f?(f=this.text.substring(this.index+1,this.index+5),f.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+f+"]"),this.index+=4,d+=String.fromCharCode(parseInt(f,16))):d=(g=Wd[f])?d+g:d+f,g=!1;else if("\\"===f)g=!0;else{if(f===a){this.index++;
this.tokens.push({index:c,text:e,string:d,json:!0,fn:function(){return d}});return}d+=f}this.index++}this.throwError("Unterminated quote",c)}};var Za=function(a,c,d){this.lexer=a;this.$filter=c;this.options=d};Za.ZERO=function(){return 0};Za.prototype={constructor:Za,parse:function(a,c){this.text=a;this.json=c;this.tokens=this.lexer.lex(a);c&&(this.assignment=this.logicalOR,this.functionCall=this.fieldAccess=this.objectIndex=this.filterChain=function(){this.throwError("is not valid json",{text:a,
index:0})});var d=c?this.primary():this.statements();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);d.literal=!!d.literal;d.constant=!!d.constant;return d},primary:function(){var a;if(this.expect("("))a=this.filterChain(),this.consume(")");else if(this.expect("["))a=this.arrayDeclaration();else if(this.expect("{"))a=this.object();else{var c=this.expect();(a=c.fn)||this.throwError("not a primary expression",c);c.json&&(a.constant=!0,a.literal=!0)}for(var d;c=this.expect("(",
"[",".");)"("===c.text?(a=this.functionCall(a,d),d=null):"["===c.text?(d=a,a=this.objectIndex(a)):"."===c.text?(d=a,a=this.fieldAccess(a)):this.throwError("IMPOSSIBLE");return a},throwError:function(a,c){throw za("syntax",c.text,a,c.index+1,this.text,this.text.substring(c.index));},peekToken:function(){if(0===this.tokens.length)throw za("ueoe",this.text);return this.tokens[0]},peek:function(a,c,d,e){if(0<this.tokens.length){var g=this.tokens[0],f=g.text;if(f===a||f===c||f===d||f===e||!(a||c||d||e))return g}return!1},
expect:function(a,c,d,e){return(a=this.peek(a,c,d,e))?(this.json&&!a.json&&this.throwError("is not valid json",a),this.tokens.shift(),a):!1},consume:function(a){this.expect(a)||this.throwError("is unexpected, expecting ["+a+"]",this.peek())},unaryFn:function(a,c){return t(function(d,e){return a(d,e,c)},{constant:c.constant})},ternaryFn:function(a,c,d){return t(function(e,g){return a(e,g)?c(e,g):d(e,g)},{constant:a.constant&&c.constant&&d.constant})},binaryFn:function(a,c,d){return t(function(e,g){return c(e,
g,a,d)},{constant:a.constant&&d.constant})},statements:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.filterChain()),!this.expect(";"))return 1===a.length?a[0]:function(c,d){for(var e,g=0;g<a.length;g++){var f=a[g];f&&(e=f(c,d))}return e}},filterChain:function(){for(var a=this.expression(),c;;)if(c=this.expect("|"))a=this.binaryFn(a,c.fn,this.filter());else return a},filter:function(){for(var a=this.expect(),c=this.$filter(a.text),d=[];;)if(a=this.expect(":"))d.push(this.expression());
else{var e=function(a,e,h){h=[h];for(var m=0;m<d.length;m++)h.push(d[m](a,e));return c.apply(a,h)};return function(){return e}}},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary(),c,d;return(d=this.expect("="))?(a.assign||this.throwError("implies assignment but ["+this.text.substring(0,d.index)+"] can not be assigned to",d),c=this.ternary(),function(d,g){return a.assign(d,c(d,g),g)}):a},ternary:function(){var a=this.logicalOR(),c,d;if(this.expect("?")){c=this.ternary();
if(d=this.expect(":"))return this.ternaryFn(a,c,this.ternary());this.throwError("expected :",d)}else return a},logicalOR:function(){for(var a=this.logicalAND(),c;;)if(c=this.expect("||"))a=this.binaryFn(a,c.fn,this.logicalAND());else return a},logicalAND:function(){var a=this.equality(),c;if(c=this.expect("&&"))a=this.binaryFn(a,c.fn,this.logicalAND());return a},equality:function(){var a=this.relational(),c;if(c=this.expect("==","!=","===","!=="))a=this.binaryFn(a,c.fn,this.equality());return a},
relational:function(){var a=this.additive(),c;if(c=this.expect("<",">","<=",">="))a=this.binaryFn(a,c.fn,this.relational());return a},additive:function(){for(var a=this.multiplicative(),c;c=this.expect("+","-");)a=this.binaryFn(a,c.fn,this.multiplicative());return a},multiplicative:function(){for(var a=this.unary(),c;c=this.expect("*","/","%");)a=this.binaryFn(a,c.fn,this.unary());return a},unary:function(){var a;return this.expect("+")?this.primary():(a=this.expect("-"))?this.binaryFn(Za.ZERO,a.fn,
this.unary()):(a=this.expect("!"))?this.unaryFn(a.fn,this.unary()):this.primary()},fieldAccess:function(a){var c=this,d=this.expect().text,e=xc(d,this.options,this.text);return t(function(c,d,h){return e(h||a(c,d))},{assign:function(e,f,h){return kb(a(e,h),d,f,c.text,c.options)}})},objectIndex:function(a){var c=this,d=this.expression();this.consume("]");return t(function(e,g){var f=a(e,g),h=d(e,g),m;if(!f)return r;(f=Ya(f[h],c.text))&&(f.then&&c.options.unwrapPromises)&&(m=f,"$$v"in f||(m.$$v=r,m.then(function(a){m.$$v=
a})),f=f.$$v);return f},{assign:function(e,g,f){var h=d(e,f);return Ya(a(e,f),c.text)[h]=g}})},functionCall:function(a,c){var d=[];if(")"!==this.peekToken().text){do d.push(this.expression());while(this.expect(","))}this.consume(")");var e=this;return function(g,f){for(var h=[],m=c?c(g,f):g,k=0;k<d.length;k++)h.push(d[k](g,f));k=a(g,f,m)||w;Ya(m,e.text);Ya(k,e.text);h=k.apply?k.apply(m,h):k(h[0],h[1],h[2],h[3],h[4]);return Ya(h,e.text)}},arrayDeclaration:function(){var a=[],c=!0;if("]"!==this.peekToken().text){do{var d=
this.expression();a.push(d);d.constant||(c=!1)}while(this.expect(","))}this.consume("]");return t(function(c,d){for(var f=[],h=0;h<a.length;h++)f.push(a[h](c,d));return f},{literal:!0,constant:c})},object:function(){var a=[],c=!0;if("}"!==this.peekToken().text){do{var d=this.expect(),d=d.string||d.text;this.consume(":");var e=this.expression();a.push({key:d,value:e});e.constant||(c=!1)}while(this.expect(","))}this.consume("}");return t(function(c,d){for(var e={},m=0;m<a.length;m++){var k=a[m];e[k.key]=
k.value(c,d)}return e},{literal:!0,constant:c})}};var Kb={},sa=F("$sce"),fa={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},Y=Q.createElement("a"),Ac=ya(Z.location.href,!0);Bc.$inject=["$provide"];Cc.$inject=["$locale"];Ec.$inject=["$locale"];var Hc=".",Qd={yyyy:W("FullYear",4),yy:W("FullYear",2,0,!0),y:W("FullYear",1),MMMM:lb("Month"),MMM:lb("Month",!0),MM:W("Month",2,1),M:W("Month",1,1),dd:W("Date",2),d:W("Date",1),HH:W("Hours",2),H:W("Hours",1),hh:W("Hours",2,-12),h:W("Hours",
1,-12),mm:W("Minutes",2),m:W("Minutes",1),ss:W("Seconds",2),s:W("Seconds",1),sss:W("Milliseconds",3),EEEE:lb("Day"),EEE:lb("Day",!0),a:function(a,c){return 12>a.getHours()?c.AMPMS[0]:c.AMPMS[1]},Z:function(a){a=-1*a.getTimezoneOffset();return a=(0<=a?"+":"")+(Mb(Math[0<a?"floor":"ceil"](a/60),2)+Mb(Math.abs(a%60),2))}},Pd=/((?:[^yMdHhmsaZE']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|d+|H+|h+|m+|s+|a|Z))(.*)/,Od=/^\-?\d+$/;Dc.$inject=["$locale"];var Md=$(x),Nd=$(Ia);Fc.$inject=["$parse"];var Xd=$({restrict:"E",
compile:function(a,c){8>=M&&(c.href||c.name||c.$set("href",""),a.append(Q.createComment("IE fix")));if(!c.href&&!c.xlinkHref&&!c.name)return function(a,c){var g="[object SVGAnimatedString]"===Ma.call(c.prop("href"))?"xlink:href":"href";c.on("click",function(a){c.attr(g)||a.preventDefault()})}}}),Ob={};q(gb,function(a,c){if("multiple"!=a){var d=ma("ng-"+c);Ob[d]=function(){return{priority:100,link:function(a,g,f){a.$watch(f[d],function(a){f.$set(c,!!a)})}}}}});q(["src","srcset","href"],function(a){var c=
ma("ng-"+a);Ob[c]=function(){return{priority:99,link:function(d,e,g){g.$observe(c,function(c){c&&(g.$set(a,c),M&&e.prop(a,g[a]))})}}}});var ob={$addControl:w,$removeControl:w,$setValidity:w,$setDirty:w,$setPristine:w};Ic.$inject=["$element","$attrs","$scope"];var Kc=function(a){return["$timeout",function(c){return{name:"form",restrict:a?"EAC":"E",controller:Ic,compile:function(){return{pre:function(a,e,g,f){if(!g.action){var h=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1};Jc(e[0],
"submit",h);e.on("$destroy",function(){c(function(){Bb(e[0],"submit",h)},0,!1)})}var m=e.parent().controller("form"),k=g.name||g.ngForm;k&&kb(a,k,f,k);if(m)e.on("$destroy",function(){m.$removeControl(f);k&&kb(a,k,r,k);t(f,ob)})}}}}}]},Yd=Kc(),Zd=Kc(!0),$d=/^(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/,ae=/^[a-z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-z0-9-]+(\.[a-z0-9-]+)*$/i,be=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))\s*$/,Lc={text:qb,number:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);
e.$parsers.push(function(a){var c=e.$isEmpty(a);if(c||be.test(a))return e.$setValidity("number",!0),""===a?null:c?a:parseFloat(a);e.$setValidity("number",!1);return r});e.$formatters.push(function(a){return e.$isEmpty(a)?"":""+a});d.min&&(a=function(a){var c=parseFloat(d.min);return pa(e,"min",e.$isEmpty(a)||a>=c,a)},e.$parsers.push(a),e.$formatters.push(a));d.max&&(a=function(a){var c=parseFloat(d.max);return pa(e,"max",e.$isEmpty(a)||a<=c,a)},e.$parsers.push(a),e.$formatters.push(a));e.$formatters.push(function(a){return pa(e,
"number",e.$isEmpty(a)||sb(a),a)})},url:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);a=function(a){return pa(e,"url",e.$isEmpty(a)||$d.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},email:function(a,c,d,e,g,f){qb(a,c,d,e,g,f);a=function(a){return pa(e,"email",e.$isEmpty(a)||ae.test(a),a)};e.$formatters.push(a);e.$parsers.push(a)},radio:function(a,c,d,e){z(d.name)&&c.attr("name",$a());c.on("click",function(){c[0].checked&&a.$apply(function(){e.$setViewValue(d.value)})});e.$render=function(){c[0].checked=
d.value==e.$viewValue};d.$observe("value",e.$render)},checkbox:function(a,c,d,e){var g=d.ngTrueValue,f=d.ngFalseValue;D(g)||(g=!0);D(f)||(f=!1);c.on("click",function(){a.$apply(function(){e.$setViewValue(c[0].checked)})});e.$render=function(){c[0].checked=e.$viewValue};e.$isEmpty=function(a){return a!==g};e.$formatters.push(function(a){return a===g});e.$parsers.push(function(a){return a?g:f})},hidden:w,button:w,submit:w,reset:w},Mc=["$browser","$sniffer",function(a,c){return{restrict:"E",require:"?ngModel",
link:function(d,e,g,f){f&&(Lc[x(g.type)]||Lc.text)(d,e,g,f,c,a)}}}],nb="ng-valid",mb="ng-invalid",Ja="ng-pristine",pb="ng-dirty",ce=["$scope","$exceptionHandler","$attrs","$element","$parse",function(a,c,d,e,g){function f(a,c){c=c?"-"+db(c,"-"):"";e.removeClass((a?mb:nb)+c).addClass((a?nb:mb)+c)}this.$modelValue=this.$viewValue=Number.NaN;this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$name=d.name;var h=g(d.ngModel),
m=h.assign;if(!m)throw F("ngModel")("nonassign",d.ngModel,ga(e));this.$render=w;this.$isEmpty=function(a){return z(a)||""===a||null===a||a!==a};var k=e.inheritedData("$formController")||ob,l=0,n=this.$error={};e.addClass(Ja);f(!0);this.$setValidity=function(a,c){n[a]!==!c&&(c?(n[a]&&l--,l||(f(!0),this.$valid=!0,this.$invalid=!1)):(f(!1),this.$invalid=!0,this.$valid=!1,l++),n[a]=!c,f(c,a),k.$setValidity(a,c,this))};this.$setPristine=function(){this.$dirty=!1;this.$pristine=!0;e.removeClass(pb).addClass(Ja)};
this.$setViewValue=function(d){this.$viewValue=d;this.$pristine&&(this.$dirty=!0,this.$pristine=!1,e.removeClass(Ja).addClass(pb),k.$setDirty());q(this.$parsers,function(a){d=a(d)});this.$modelValue!==d&&(this.$modelValue=d,m(a,d),q(this.$viewChangeListeners,function(a){try{a()}catch(d){c(d)}}))};var p=this;a.$watch(function(){var c=h(a);if(p.$modelValue!==c){var d=p.$formatters,e=d.length;for(p.$modelValue=c;e--;)c=d[e](c);p.$viewValue!==c&&(p.$viewValue=c,p.$render())}return c})}],de=function(){return{require:["ngModel",
"^?form"],controller:ce,link:function(a,c,d,e){var g=e[0],f=e[1]||ob;f.$addControl(g);a.$on("$destroy",function(){f.$removeControl(g)})}}},ee=$({require:"ngModel",link:function(a,c,d,e){e.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),Nc=function(){return{require:"?ngModel",link:function(a,c,d,e){if(e){d.required=!0;var g=function(a){if(d.required&&e.$isEmpty(a))e.$setValidity("required",!1);else return e.$setValidity("required",!0),a};e.$formatters.push(g);e.$parsers.unshift(g);d.$observe("required",
function(){g(e.$viewValue)})}}}},fe=function(){return{require:"ngModel",link:function(a,c,d,e){var g=(a=/\/(.*)\//.exec(d.ngList))&&RegExp(a[1])||d.ngList||",";e.$parsers.push(function(a){if(!z(a)){var c=[];a&&q(a.split(g),function(a){a&&c.push(ba(a))});return c}});e.$formatters.push(function(a){return K(a)?a.join(", "):r});e.$isEmpty=function(a){return!a||!a.length}}}},ge=/^(true|false|\d+)$/,he=function(){return{priority:100,compile:function(a,c){return ge.test(c.ngValue)?function(a,c,g){g.$set("value",
a.$eval(g.ngValue))}:function(a,c,g){a.$watch(g.ngValue,function(a){g.$set("value",a)})}}}},ie=ta(function(a,c,d){c.addClass("ng-binding").data("$binding",d.ngBind);a.$watch(d.ngBind,function(a){c.text(a==r?"":a)})}),je=["$interpolate",function(a){return function(c,d,e){c=a(d.attr(e.$attr.ngBindTemplate));d.addClass("ng-binding").data("$binding",c);e.$observe("ngBindTemplate",function(a){d.text(a)})}}],ke=["$sce","$parse",function(a,c){return function(d,e,g){e.addClass("ng-binding").data("$binding",
g.ngBindHtml);var f=c(g.ngBindHtml);d.$watch(function(){return(f(d)||"").toString()},function(c){e.html(a.getTrustedHtml(f(d))||"")})}}],le=Nb("",!0),me=Nb("Odd",0),ne=Nb("Even",1),oe=ta({compile:function(a,c){c.$set("ngCloak",r);a.removeClass("ng-cloak")}}),pe=[function(){return{scope:!0,controller:"@",priority:500}}],Oc={};q("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var c=ma("ng-"+
a);Oc[c]=["$parse",function(d){return{compile:function(e,g){var f=d(g[c]);return function(c,d,e){d.on(x(a),function(a){c.$apply(function(){f(c,{$event:a})})})}}}}]});var qe=["$animate",function(a){return{transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(c,d,e,g,f){var h,m;c.$watch(e.ngIf,function(g){Pa(g)?m||(m=c.$new(),f(m,function(c){c[c.length++]=Q.createComment(" end ngIf: "+e.ngIf+" ");h={clone:c};a.enter(c,d.parent(),d)})):(m&&(m.$destroy(),m=null),h&&(a.leave(wb(h.clone)),
h=null))})}}}],re=["$http","$templateCache","$anchorScroll","$animate","$sce",function(a,c,d,e,g){return{restrict:"ECA",priority:400,terminal:!0,transclude:"element",controller:Ca.noop,compile:function(f,h){var m=h.ngInclude||h.src,k=h.onload||"",l=h.autoscroll;return function(f,h,q,r,y){var A=0,u,t,H=function(){u&&(u.$destroy(),u=null);t&&(e.leave(t),t=null)};f.$watch(g.parseAsResourceUrl(m),function(g){var m=function(){!B(l)||l&&!f.$eval(l)||d()},q=++A;g?(a.get(g,{cache:c}).success(function(a){if(q===
A){var c=f.$new();r.template=a;a=y(c,function(a){H();e.enter(a,null,h,m)});u=c;t=a;u.$emit("$includeContentLoaded");f.$eval(k)}}).error(function(){q===A&&H()}),f.$emit("$includeContentRequested")):(H(),r.template=null)})}}}}],se=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(c,d,e,g){d.html(g.template);a(d.contents())(c)}}}],te=ta({priority:450,compile:function(){return{pre:function(a,c,d){a.$eval(d.ngInit)}}}}),ue=ta({terminal:!0,priority:1E3}),ve=["$locale",
"$interpolate",function(a,c){var d=/{}/g;return{restrict:"EA",link:function(e,g,f){var h=f.count,m=f.$attr.when&&g.attr(f.$attr.when),k=f.offset||0,l=e.$eval(m)||{},n={},p=c.startSymbol(),s=c.endSymbol(),r=/^when(Minus)?(.+)$/;q(f,function(a,c){r.test(c)&&(l[x(c.replace("when","").replace("Minus","-"))]=g.attr(f.$attr[c]))});q(l,function(a,e){n[e]=c(a.replace(d,p+h+"-"+k+s))});e.$watch(function(){var c=parseFloat(e.$eval(h));if(isNaN(c))return"";c in l||(c=a.pluralCat(c-k));return n[c](e,g,!0)},function(a){g.text(a)})}}}],
we=["$parse","$animate",function(a,c){var d=F("ngRepeat");return{transclude:"element",priority:1E3,terminal:!0,$$tlb:!0,link:function(e,g,f,h,m){var k=f.ngRepeat,l=k.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?\s*$/),n,p,s,r,y,t,u={$id:Fa};if(!l)throw d("iexp",k);f=l[1];h=l[2];(l=l[3])?(n=a(l),p=function(a,c,d){t&&(u[t]=a);u[y]=c;u.$index=d;return n(e,u)}):(s=function(a,c){return Fa(c)},r=function(a){return a});l=f.match(/^(?:([\$\w]+)|\(([\$\w]+)\s*,\s*([\$\w]+)\))$/);if(!l)throw d("iidexp",
f);y=l[3]||l[1];t=l[2];var B={};e.$watchCollection(h,function(a){var f,h,l=g[0],n,u={},z,P,D,x,T,w,F=[];if(rb(a))T=a,n=p||s;else{n=p||r;T=[];for(D in a)a.hasOwnProperty(D)&&"$"!=D.charAt(0)&&T.push(D);T.sort()}z=T.length;h=F.length=T.length;for(f=0;f<h;f++)if(D=a===T?f:T[f],x=a[D],x=n(D,x,f),xa(x,"`track by` id"),B.hasOwnProperty(x))w=B[x],delete B[x],u[x]=w,F[f]=w;else{if(u.hasOwnProperty(x))throw q(F,function(a){a&&a.scope&&(B[a.id]=a)}),d("dupes",k,x);F[f]={id:x};u[x]=!1}for(D in B)B.hasOwnProperty(D)&&
(w=B[D],f=wb(w.clone),c.leave(f),q(f,function(a){a.$$NG_REMOVED=!0}),w.scope.$destroy());f=0;for(h=T.length;f<h;f++){D=a===T?f:T[f];x=a[D];w=F[f];F[f-1]&&(l=F[f-1].clone[F[f-1].clone.length-1]);if(w.scope){P=w.scope;n=l;do n=n.nextSibling;while(n&&n.$$NG_REMOVED);w.clone[0]!=n&&c.move(wb(w.clone),null,A(l));l=w.clone[w.clone.length-1]}else P=e.$new();P[y]=x;t&&(P[t]=D);P.$index=f;P.$first=0===f;P.$last=f===z-1;P.$middle=!(P.$first||P.$last);P.$odd=!(P.$even=0===(f&1));w.scope||m(P,function(a){a[a.length++]=
Q.createComment(" end ngRepeat: "+k+" ");c.enter(a,null,A(l));l=a;w.scope=P;w.clone=a;u[w.id]=w})}B=u})}}}],xe=["$animate",function(a){return function(c,d,e){c.$watch(e.ngShow,function(c){a[Pa(c)?"removeClass":"addClass"](d,"ng-hide")})}}],ye=["$animate",function(a){return function(c,d,e){c.$watch(e.ngHide,function(c){a[Pa(c)?"addClass":"removeClass"](d,"ng-hide")})}}],ze=ta(function(a,c,d){a.$watch(d.ngStyle,function(a,d){d&&a!==d&&q(d,function(a,d){c.css(d,"")});a&&c.css(a)},!0)}),Ae=["$animate",
function(a){return{restrict:"EA",require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(c,d,e,g){var f,h,m=[];c.$watch(e.ngSwitch||e.on,function(d){for(var l=0,n=m.length;l<n;l++)m[l].$destroy(),a.leave(h[l]);h=[];m=[];if(f=g.cases["!"+d]||g.cases["?"])c.$eval(e.change),q(f,function(d){var e=c.$new();m.push(e);d.transclude(e,function(c){var e=d.element;h.push(c);a.enter(c,e.parent(),e)})})})}}}],Be=ta({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,
c,d,e,g){e.cases["!"+d.ngSwitchWhen]=e.cases["!"+d.ngSwitchWhen]||[];e.cases["!"+d.ngSwitchWhen].push({transclude:g,element:c})}}),Ce=ta({transclude:"element",priority:800,require:"^ngSwitch",link:function(a,c,d,e,g){e.cases["?"]=e.cases["?"]||[];e.cases["?"].push({transclude:g,element:c})}}),De=ta({controller:["$element","$transclude",function(a,c){if(!c)throw F("ngTransclude")("orphan",ga(a));this.$transclude=c}],link:function(a,c,d,e){e.$transclude(function(a){c.empty();c.append(a)})}}),Ee=["$templateCache",
function(a){return{restrict:"E",terminal:!0,compile:function(c,d){"text/ng-template"==d.type&&a.put(d.id,c[0].text)}}}],Fe=F("ngOptions"),Ge=$({terminal:!0}),He=["$compile","$parse",function(a,c){var d=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,e={$setViewValue:w};return{restrict:"E",require:["select","?ngModel"],controller:["$element","$scope",
"$attrs",function(a,c,d){var m=this,k={},l=e,n;m.databound=d.ngModel;m.init=function(a,c,d){l=a;n=d};m.addOption=function(c){xa(c,'"option value"');k[c]=!0;l.$viewValue==c&&(a.val(c),n.parent()&&n.remove())};m.removeOption=function(a){this.hasOption(a)&&(delete k[a],l.$viewValue==a&&this.renderUnknownOption(a))};m.renderUnknownOption=function(c){c="? "+Fa(c)+" ?";n.val(c);a.prepend(n);a.val(c);n.prop("selected",!0)};m.hasOption=function(a){return k.hasOwnProperty(a)};c.$on("$destroy",function(){m.renderUnknownOption=
w})}],link:function(e,f,h,m){function k(a,c,d,e){d.$render=function(){var a=d.$viewValue;e.hasOption(a)?(x.parent()&&x.remove(),c.val(a),""===a&&w.prop("selected",!0)):z(a)&&w?c.val(""):e.renderUnknownOption(a)};c.on("change",function(){a.$apply(function(){x.parent()&&x.remove();d.$setViewValue(c.val())})})}function l(a,c,d){var e;d.$render=function(){var a=new Ta(d.$viewValue);q(c.find("option"),function(c){c.selected=B(a.get(c.value))})};a.$watch(function(){ua(e,d.$viewValue)||(e=aa(d.$viewValue),
d.$render())});c.on("change",function(){a.$apply(function(){var a=[];q(c.find("option"),function(c){c.selected&&a.push(c.value)});d.$setViewValue(a)})})}function n(e,f,g){function h(){var a={"":[]},c=[""],d,k,r,t,v;t=g.$modelValue;v=A(e)||[];var C=n?Pb(v):v,F,I,z;I={};r=!1;var E,H;if(s)if(w&&K(t))for(r=new Ta([]),z=0;z<t.length;z++)I[m]=t[z],r.put(w(e,I),t[z]);else r=new Ta(t);for(z=0;F=C.length,z<F;z++){k=z;if(n){k=C[z];if("$"===k.charAt(0))continue;I[n]=k}I[m]=v[k];d=p(e,I)||"";(k=a[d])||(k=a[d]=
[],c.push(d));s?d=B(r.remove(w?w(e,I):q(e,I))):(w?(d={},d[m]=t,d=w(e,d)===w(e,I)):d=t===q(e,I),r=r||d);E=l(e,I);E=B(E)?E:"";k.push({id:w?w(e,I):n?C[z]:z,label:E,selected:d})}s||(y||null===t?a[""].unshift({id:"",label:"",selected:!r}):r||a[""].unshift({id:"?",label:"",selected:!0}));I=0;for(C=c.length;I<C;I++){d=c[I];k=a[d];x.length<=I?(t={element:D.clone().attr("label",d),label:k.label},v=[t],x.push(v),f.append(t.element)):(v=x[I],t=v[0],t.label!=d&&t.element.attr("label",t.label=d));E=null;z=0;for(F=
k.length;z<F;z++)r=k[z],(d=v[z+1])?(E=d.element,d.label!==r.label&&E.text(d.label=r.label),d.id!==r.id&&E.val(d.id=r.id),E[0].selected!==r.selected&&E.prop("selected",d.selected=r.selected)):(""===r.id&&y?H=y:(H=u.clone()).val(r.id).attr("selected",r.selected).text(r.label),v.push({element:H,label:r.label,id:r.id,selected:r.selected}),E?E.after(H):t.element.append(H),E=H);for(z++;v.length>z;)v.pop().element.remove()}for(;x.length>I;)x.pop()[0].element.remove()}var k;if(!(k=t.match(d)))throw Fe("iexp",
t,ga(f));var l=c(k[2]||k[1]),m=k[4]||k[6],n=k[5],p=c(k[3]||""),q=c(k[2]?k[1]:m),A=c(k[7]),w=k[8]?c(k[8]):null,x=[[{element:f,label:""}]];y&&(a(y)(e),y.removeClass("ng-scope"),y.remove());f.empty();f.on("change",function(){e.$apply(function(){var a,c=A(e)||[],d={},h,k,l,p,t,u,v;if(s)for(k=[],p=0,u=x.length;p<u;p++)for(a=x[p],l=1,t=a.length;l<t;l++){if((h=a[l].element)[0].selected){h=h.val();n&&(d[n]=h);if(w)for(v=0;v<c.length&&(d[m]=c[v],w(e,d)!=h);v++);else d[m]=c[h];k.push(q(e,d))}}else if(h=f.val(),
"?"==h)k=r;else if(""===h)k=null;else if(w)for(v=0;v<c.length;v++){if(d[m]=c[v],w(e,d)==h){k=q(e,d);break}}else d[m]=c[h],n&&(d[n]=h),k=q(e,d);g.$setViewValue(k)})});g.$render=h;e.$watch(h)}if(m[1]){var p=m[0];m=m[1];var s=h.multiple,t=h.ngOptions,y=!1,w,u=A(Q.createElement("option")),D=A(Q.createElement("optgroup")),x=u.clone();h=0;for(var v=f.children(),F=v.length;h<F;h++)if(""===v[h].value){w=y=v.eq(h);break}p.init(m,y,x);s&&(m.$isEmpty=function(a){return!a||0===a.length});t?n(e,f,m):s?l(e,f,m):
k(e,f,m,p)}}}}],Ie=["$interpolate",function(a){var c={addOption:w,removeOption:w};return{restrict:"E",priority:100,compile:function(d,e){if(z(e.value)){var g=a(d.text(),!0);g||e.$set("value",d.text())}return function(a,d,e){var k=d.parent(),l=k.data("$selectController")||k.parent().data("$selectController");l&&l.databound?d.prop("selected",!1):l=c;g?a.$watch(g,function(a,c){e.$set("value",a);a!==c&&l.removeOption(c);l.addOption(a)}):l.addOption(e.value);d.on("$destroy",function(){l.removeOption(e.value)})}}}}],
Je=$({restrict:"E",terminal:!0});(Da=Z.jQuery)?(A=Da,t(Da.fn,{scope:Ga.scope,isolateScope:Ga.isolateScope,controller:Ga.controller,injector:Ga.injector,inheritedData:Ga.inheritedData}),xb("remove",!0,!0,!1),xb("empty",!1,!1,!1),xb("html",!1,!1,!0)):A=O;Ca.element=A;(function(a){t(a,{bootstrap:Zb,copy:aa,extend:t,equals:ua,element:A,forEach:q,injector:$b,noop:w,bind:cb,toJson:qa,fromJson:Vb,identity:Ba,isUndefined:z,isDefined:B,isString:D,isFunction:L,isObject:X,isNumber:sb,isElement:Qc,isArray:K,
version:Sd,isDate:La,lowercase:x,uppercase:Ia,callbacks:{counter:0},$$minErr:F,$$csp:Ub});Va=Vc(Z);try{Va("ngLocale")}catch(c){Va("ngLocale",[]).provider("$locale",sd)}Va("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:Cd});a.provider("$compile",jc).directive({a:Xd,input:Mc,textarea:Mc,form:Yd,script:Ee,select:He,style:Je,option:Ie,ngBind:ie,ngBindHtml:ke,ngBindTemplate:je,ngClass:le,ngClassEven:ne,ngClassOdd:me,ngCloak:oe,ngController:pe,ngForm:Zd,ngHide:ye,ngIf:qe,ngInclude:re,
ngInit:te,ngNonBindable:ue,ngPluralize:ve,ngRepeat:we,ngShow:xe,ngStyle:ze,ngSwitch:Ae,ngSwitchWhen:Be,ngSwitchDefault:Ce,ngOptions:Ge,ngTransclude:De,ngModel:de,ngList:fe,ngChange:ee,required:Nc,ngRequired:Nc,ngValue:he}).directive({ngInclude:se}).directive(Ob).directive(Oc);a.provider({$anchorScroll:dd,$animate:Ud,$browser:fd,$cacheFactory:gd,$controller:jd,$document:kd,$exceptionHandler:ld,$filter:Bc,$interpolate:qd,$interval:rd,$http:md,$httpBackend:od,$location:ud,$log:vd,$parse:yd,$rootScope:Bd,
$q:zd,$sce:Fd,$sceDelegate:Ed,$sniffer:Gd,$templateCache:hd,$timeout:Hd,$window:Id})}])})(Ca);A(Q).ready(function(){Tc(Q,Zb)})})(window,document);!angular.$$csp()&&angular.element(document).find("head").prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 * angular-elastic v2.3.0
 * (c) 2013 Monospaced http://monospaced.com
 * License: MIT
 */

angular.module('monospaced.elastic', [])

  .constant('msdElasticConfig', {
    append: ''
  })

  .directive('msdElastic', ['$timeout', '$window', 'msdElasticConfig', function($timeout, $window, config) {
    'use strict';

    return {
      require: 'ngModel',
      restrict: 'A, C',
      link: function(scope, element, attrs, ngModel){

        // cache a reference to the DOM element
        var ta = element[0],
            $ta = element;

        // ensure the element is a textarea, and browser is capable
        if (ta.nodeName !== 'TEXTAREA' || !$window.getComputedStyle) {
          return;
        }

        // set these properties before measuring dimensions
        $ta.css({
          'overflow': 'hidden',
          'overflow-y': 'hidden',
          'word-wrap': 'break-word'
        });

        // force text reflow
        var text = ta.value;
        ta.value = '';
        ta.value = text;

        var appendText = attrs.msdElastic || config.append,
            append = appendText === '\\n' ? '\n' : appendText,
            $win = angular.element($window),
            mirrorStyle = 'position: absolute; top: -999px; right: auto; bottom: auto; left: 0 ;' +
                          'overflow: hidden; -webkit-box-sizing: content-box;' +
                          '-moz-box-sizing: content-box; box-sizing: content-box;' +
                          'min-height: 0 !important; height: 0 !important; padding: 0;' +
                          'word-wrap: break-word; border: 0;',
            $mirror = angular.element('<textarea tabindex="-1" ' +
                                      'style="' + mirrorStyle + '"/>').data('elastic', true),
            mirror = $mirror[0],
            taStyle = getComputedStyle(ta),
            resize = taStyle.getPropertyValue('resize'),
            borderBox = taStyle.getPropertyValue('box-sizing') === 'border-box' ||
                        taStyle.getPropertyValue('-moz-box-sizing') === 'border-box' ||
                        taStyle.getPropertyValue('-webkit-box-sizing') === 'border-box',
            boxOuter = !borderBox ? {width: 0, height: 0} : {
                          width:  parseInt(taStyle.getPropertyValue('border-right-width'), 10) +
                                  parseInt(taStyle.getPropertyValue('padding-right'), 10) +
                                  parseInt(taStyle.getPropertyValue('padding-left'), 10) +
                                  parseInt(taStyle.getPropertyValue('border-left-width'), 10),
                          height: parseInt(taStyle.getPropertyValue('border-top-width'), 10) +
                                  parseInt(taStyle.getPropertyValue('padding-top'), 10) +
                                  parseInt(taStyle.getPropertyValue('padding-bottom'), 10) +
                                  parseInt(taStyle.getPropertyValue('border-bottom-width'), 10)
                        },
            minHeightValue = parseInt(taStyle.getPropertyValue('min-height'), 10),
            heightValue = parseInt(taStyle.getPropertyValue('height'), 10),
            minHeight = Math.max(minHeightValue, heightValue) - boxOuter.height,
            maxHeight = parseInt(taStyle.getPropertyValue('max-height'), 10),
            mirrored,
            active,
            copyStyle = ['font-family',
                         'font-size',
                         'font-weight',
                         'font-style',
                         'letter-spacing',
                         'line-height',
                         'text-transform',
                         'word-spacing',
                         'text-indent'];

        // exit if elastic already applied (or is the mirror element)
        if ($ta.data('elastic')) {
          return;
        }

        // Opera returns max-height of -1 if not set
        maxHeight = maxHeight && maxHeight > 0 ? maxHeight : 9e4;

        // append mirror to the DOM
        if (mirror.parentNode !== document.body) {
          angular.element(document.body).append(mirror);
        }

        // set resize and apply elastic
        $ta.css({
          'resize': (resize === 'none' || resize === 'vertical') ? 'none' : 'horizontal'
        }).data('elastic', true);

        /*
         * methods
         */

        function initMirror(){
          mirrored = ta;
          // copy the essential styles from the textarea to the mirror
          taStyle = getComputedStyle(ta);
          angular.forEach(copyStyle, function(val){
            mirrorStyle += val + ':' + taStyle.getPropertyValue(val) + ';';
          });
          mirror.setAttribute('style', mirrorStyle);
        }

        function adjust() {
          var taHeight,
              mirrorHeight,
              width,
              overflow;

          if (mirrored !== ta) {
            initMirror();
          }

          // active flag prevents actions in function from calling adjust again
          if (!active) {
            active = true;

            mirror.value = ta.value + append; // optional whitespace to improve animation
            mirror.style.overflowY = ta.style.overflowY;

            taHeight = ta.style.height === '' ? 'auto' : parseInt(ta.style.height, 10);

            // update mirror width in case the textarea width has changed
            width = parseInt(getComputedStyle(ta).getPropertyValue('width'), 10) - boxOuter.width;
            mirror.style.width = width + 'px';

            mirrorHeight = mirror.scrollHeight;

            if (mirrorHeight > maxHeight) {
              mirrorHeight = maxHeight;
              overflow = 'scroll';
            } else if (mirrorHeight < minHeight) {
              mirrorHeight = minHeight;
            }
            mirrorHeight += boxOuter.height;

            ta.style.overflowY = overflow || 'hidden';

            if (taHeight !== mirrorHeight) {
              ta.style.height = mirrorHeight + 'px';
              scope.$emit('elastic:resize', $ta);
            }

            // small delay to prevent an infinite loop
            $timeout(function(){
              active = false;
            }, 1);

          }
        }

        function forceAdjust(){
          active = false;
          adjust();
        }

        /*
         * initialise
         */

        // listen
        if ('onpropertychange' in ta && 'oninput' in ta) {
          // IE9
          ta['oninput'] = ta.onkeyup = adjust;
        } else {
          ta['oninput'] = adjust;
        }

        $win.bind('resize', forceAdjust);

        scope.$watch(function(){
          return ngModel.$modelValue;
        }, function(newValue){
          forceAdjust();
        });

        /*
         * destroy
         */

        scope.$on('$destroy', function(){
          $mirror.remove();
          $win.unbind('resize', forceAdjust);
        });
      }
    };

  }]);

/*
 AngularJS v1.2.8-build.2094+sha.b6c42d5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E,p,F){'use strict';p.module("ngAnimate",["ng"]).config(["$provide","$animateProvider",function(R,L){function f(f){for(var l=0;l<f.length;l++){var h=f[l];if(h.nodeType==W)return h}}var q=p.noop,l=p.forEach,aa=L.$$selectors,W=1,h="$$ngAnimateState",C="ng-animate",k={running:!0};R.decorator("$animate",["$delegate","$injector","$sniffer","$rootElement","$timeout","$rootScope","$document",function(w,E,G,s,M,m,N){function F(a){if(a){var d=[],b={};a=a.substr(1).split(".");(G.transitions||G.animations)&&
a.push("");for(var e=0;e<a.length;e++){var g=a[e],f=aa[g];f&&!b[g]&&(d.push(E.get(f)),b[g]=!0)}return d}}function r(a,d,b,e,g,k,m){function p(a){u();if(!0===a)v();else{if(a=b.data(h))a.done=v,b.data(h,a);s(t,"after",v)}}function s(e,f,g){var n=f+"End";l(e,function(l,h){var c=function(){a:{var c=f+"Complete",a=e[h];a[c]=!0;(a[n]||q)();for(a=0;a<e.length;a++)if(!e[a][c])break a;g()}};"before"!=f||"enter"!=a&&"move"!=a?l[f]?l[n]=B?l[f](b,d,c):l[f](b,c):c():c()})}function w(){m&&M(m,0,!1)}function u(){u.hasBeenRun||
(u.hasBeenRun=!0,k())}function v(){if(!v.hasBeenRun){v.hasBeenRun=!0;var a=b.data(h);a&&(B?D(b):(a.closeAnimationTimeout=M(function(){D(b)},0,!1),b.data(h,a)));w()}}var n,z,r=f(b);r&&(n=r.className,z=n+" "+d);if(r&&O(z)){z=(" "+z).replace(/\s+/g,".");e||(e=g?g.parent():b.parent());z=F(z);var B="addClass"==a||"removeClass"==a;g=b.data(h)||{};if(Q(b,e)||0===z.length)u(),v();else{var t=[];B&&(g.disabled||g.running&&g.structural)||l(z,function(e){if(!e.allowCancel||e.allowCancel(b,a,d)){var f=e[a];"leave"==
a?(e=f,f=null):e=e["before"+a.charAt(0).toUpperCase()+a.substr(1)];t.push({before:e,after:f})}});0===t.length?(u(),w()):(e=" "+n+" ",g.running&&(M.cancel(g.closeAnimationTimeout),D(b),I(g.animations),g.beforeComplete?(g.done||q)(!0):B&&!g.structural&&(e="removeClass"==g.event?e.replace(g.className,""):e+g.className+" ")),n=" "+d+" ","addClass"==a&&0<=e.indexOf(n)||"removeClass"==a&&-1==e.indexOf(n)?(u(),w()):(b.addClass(C),b.data(h,{running:!0,event:a,className:d,structural:!B,animations:t,done:p}),
s(t,"before",p)))}}else u(),v()}function J(a){a=f(a);l(a.querySelectorAll("."+C),function(a){a=p.element(a);var b=a.data(h);b&&(I(b.animations),D(a))})}function I(a){l(a,function(d){a.beforeComplete||(d.beforeEnd||q)(!0);a.afterComplete||(d.afterEnd||q)(!0)})}function D(a){f(a)==f(s)?k.disabled||(k.running=!1,k.structural=!1):(a.removeClass(C),a.removeData(h))}function Q(a,d){if(k.disabled)return!0;if(f(a)==f(s))return k.disabled||k.running;do{if(0===d.length)break;var b=f(d)==f(s),e=b?k:d.data(h),
e=e&&(!!e.disabled||!!e.running);if(b||e)return e;if(b)break}while(d=d.parent());return!0}s.data(h,k);m.$$postDigest(function(){m.$$postDigest(function(){k.running=!1})});var K=L.classNameFilter(),O=K?function(a){return K.test(a)}:function(){return!0};return{enter:function(a,d,b,e){this.enabled(!1,a);w.enter(a,d,b);m.$$postDigest(function(){r("enter","ng-enter",a,d,b,q,e)})},leave:function(a,d){J(a);this.enabled(!1,a);m.$$postDigest(function(){r("leave","ng-leave",a,null,null,function(){w.leave(a)},
d)})},move:function(a,d,b,e){J(a);this.enabled(!1,a);w.move(a,d,b);m.$$postDigest(function(){r("move","ng-move",a,d,b,q,e)})},addClass:function(a,d,b){r("addClass",d,a,null,null,function(){w.addClass(a,d)},b)},removeClass:function(a,d,b){r("removeClass",d,a,null,null,function(){w.removeClass(a,d)},b)},enabled:function(a,d){switch(arguments.length){case 2:if(a)D(d);else{var b=d.data(h)||{};b.disabled=!0;d.data(h,b)}break;case 1:k.disabled=!a;break;default:a=!k.disabled}return!!a}}}]);L.register("",
["$window","$sniffer","$timeout",function(h,k,G){function s(c,a){G.cancel(V);T.push(a);var y=f(c);c=p.element(y);U.push(c);y=c.data(n);P=Math.max(P,(y.maxDelay+y.maxDuration)*R*B);y.animationCount=t;V=G(function(){l(T,function(c){c()});var c=[],a=t;l(U,function(a){c.push(a)});G(function(){M(c,a);c=null},P,!1);T=[];U=[];V=null;H={};P=0;t++},10,!1)}function M(c,a){l(c,function(c){(c=c.data(n))&&c.animationCount==a&&(c.closeAnimationFn||q)()})}function m(c,a){var y=a?H[a]:null;if(!y){var b=0,d=0,f=0,
g=0,n,k,m,p;l(c,function(c){if(c.nodeType==W){c=h.getComputedStyle(c)||{};m=c[e+X];b=Math.max(N(m),b);p=c[e+S];n=c[e+Z];d=Math.max(N(n),d);k=c[x+Z];g=Math.max(N(k),g);var a=N(c[x+X]);0<a&&(a*=parseInt(c[x+u],10)||1);f=Math.max(a,f)}});y={total:0,transitionPropertyStyle:p,transitionDurationStyle:m,transitionDelayStyle:n,transitionDelay:d,transitionDuration:b,animationDelayStyle:k,animationDelay:g,animationDuration:f};a&&(H[a]=y)}return y}function N(c){var a=0;c=p.isString(c)?c.split(/\s*,\s*/):[];
l(c,function(c){a=Math.max(parseFloat(c)||0,a)});return a}function L(c){var a=c.parent(),b=a.data(v);b||(a.data(v,++Y),b=Y);return b+"-"+f(c).className}function r(c,a){var b=L(c),d=b+" "+a,g={},$=H[d]?++H[d].total:0;if(0<$){var h=a+"-stagger",g=b+" "+h;(b=!H[g])&&c.addClass(h);g=m(c,g);b&&c.removeClass(h)}c.addClass(a);d=m(c,d);h=Math.max(d.transitionDelay,d.animationDelay);b=Math.max(d.transitionDuration,d.animationDuration);if(0===b)return c.removeClass(a),!1;var k="";0<d.transitionDuration?f(c).style[e+
S]="none":f(c).style[x]="none 0s";l(a.split(" "),function(c,a){k+=(0<a?" ":"")+c+"-active"});c.data(n,{className:a,activeClassName:k,maxDuration:b,maxDelay:h,classes:a+" "+k,timings:d,stagger:g,ii:$});return!0}function J(c){var a=e+S;c=f(c);c.style[a]&&0<c.style[a].length&&(c.style[a]="")}function I(c){var a=x;c=f(c);c.style[a]&&0<c.style[a].length&&(c.style[a]="")}function D(c,a,d){function e(b){c.off(u,h);c.removeClass(r);b=c;b.removeClass(a);b.removeData(n);b=f(c);for(var d in q)b.style.removeProperty(q[d])}
function h(a){a.stopPropagation();var c=a.originalEvent||a;a=c.$manualTimeStamp||c.timeStamp||Date.now();c=parseFloat(c.elapsedTime.toFixed(z));Math.max(a-w,0)>=v&&c>=s&&d()}var k=c.data(n),l=f(c);if(-1!=l.className.indexOf(a)&&k){var m=k.timings,p=k.stagger,s=k.maxDuration,r=k.activeClassName,v=Math.max(m.transitionDelay,m.animationDelay)*B,w=Date.now(),u=C+" "+g,t=k.ii,A="",q=[];if(0<m.transitionDuration){var x=m.transitionPropertyStyle;-1==x.indexOf("all")&&(A+=b+"transition-property: "+x+";",
A+=b+"transition-duration: "+m.transitionDurationStyle+";",q.push(b+"transition-property"),q.push(b+"transition-duration"))}0<t&&(0<p.transitionDelay&&0===p.transitionDuration&&(A+=b+"transition-delay: "+Q(m.transitionDelayStyle,p.transitionDelay,t)+"; ",q.push(b+"transition-delay")),0<p.animationDelay&&0===p.animationDuration&&(A+=b+"animation-delay: "+Q(m.animationDelayStyle,p.animationDelay,t)+"; ",q.push(b+"animation-delay")));0<q.length&&(m=l.getAttribute("style")||"",l.setAttribute("style",
m+" "+A));c.on(u,h);c.addClass(r);k.closeAnimationFn=function(){e();d()};return e}d()}function Q(a,b,d){var e="";l(a.split(","),function(a,c){e+=(0<c?",":"")+(d*b+parseInt(a,10))+"s"});return e}function K(a,b){if(r(a,b))return function(d){d&&(a.removeClass(b),a.removeData(n))}}function O(a,b,d){if(a.data(n))return D(a,b,d);a.removeClass(b);a.removeData(n);d()}function a(a,b,d){var e=K(a,b);if(e){var f=e;s(a,function(){J(a);I(a);f=O(a,b,d)});return function(a){(f||q)(a)}}d()}function d(a,b){var d=
"";a=p.isArray(a)?a:a.split(/\s+/);l(a,function(a,c){a&&0<a.length&&(d+=(0<c?" ":"")+a+b)});return d}var b="",e,g,x,C;E.ontransitionend===F&&E.onwebkittransitionend!==F?(b="-webkit-",e="WebkitTransition",g="webkitTransitionEnd transitionend"):(e="transition",g="transitionend");E.onanimationend===F&&E.onwebkitanimationend!==F?(b="-webkit-",x="WebkitAnimation",C="webkitAnimationEnd animationend"):(x="animation",C="animationend");var X="Duration",S="Property",Z="Delay",u="IterationCount",v="$$ngAnimateKey",
n="$$ngAnimateCSS3Data",z=3,R=1.5,B=1E3,t=0,H={},Y=0,T=[],U=[],V,P=0;return{allowCancel:function(a,b,e){var g=(a.data(n)||{}).classes;if(!g||0<=["enter","leave","move"].indexOf(b))return!0;var k=a.parent(),h=p.element(f(a).cloneNode());h.attr("style","position:absolute; top:-9999px; left:-9999px");h.removeAttr("id");h.empty();l(g.split(" "),function(a){h.removeClass(a)});h.addClass(d(e,"addClass"==b?"-add":"-remove"));k.append(h);a=m(h);h.remove();return 0<Math.max(a.transitionDuration,a.animationDuration)},
enter:function(c,b){return a(c,"ng-enter",b)},leave:function(c,b){return a(c,"ng-leave",b)},move:function(c,b){return a(c,"ng-move",b)},beforeAddClass:function(a,b,e){if(b=K(a,d(b,"-add")))return s(a,function(){J(a);I(a);e()}),b;e()},addClass:function(a,b,e){return O(a,d(b,"-add"),e)},beforeRemoveClass:function(a,b,e){if(b=K(a,d(b,"-remove")))return s(a,function(){J(a);I(a);e()}),b;e()},removeClass:function(a,b,e){return O(a,d(b,"-remove"),e)}}}])}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

// Version 0.0.2
// AngularJS simple hash-tag scroll alternative
// this directive uses click event to scroll to the target element
//
// <div ng-app="app">
//   <div ng-controller="myCtrl">
//     <a scroll-to="section1">Section 1</a>
//   </div>
//   ...
//   <div id="section1">
//      <h2>Section1</h2>
//      <a scroll-to="">Back to Top</a>
//   </div>
//  ...
//   <div id="section1">
//      <h2>Section1</h2>
//      <a scroll-to="section1" offset="60">Section 1 with 60px offset</a>
//   </div>
// </div>
//
//  angular.module('app', ['ngScrollTo']);

angular.module("ngScrollTo",[])
  .directive("scrollTo", ["$window", function($window){
    return {
      restrict : "AC",
      compile : function(){

        var document = $window.document;
        
        function scrollInto(idOrName, offset) {//find element with the given id or name and scroll to the first element it finds
          if(!idOrName) //move to top if idOrName is not provided
            $window.scrollTo(0, 0);

          //check if an element can be found with id attribute
          var el = document.getElementById(idOrName);
          if(!el) {//check if an element can be found with name attribute if there is no such id
            el = document.getElementsByName(idOrName);

            if(el && el.length)
              el = el[0];
            else
              el = null;
          }

          if(el) { //if an element is found, scroll to the element
            if (offset) {
              var top = $(el).offset().top - offset;
              window.scrollTo(0, top);
            }
            else {
              el.scrollIntoView();
            }
          }
          //otherwise, ignore
        }

        return function(scope, element, attr) {
          element.bind("click", function(event){
            scrollInto(attr.scrollTo, attr.offset);
          });
        };
      }
    };
}]);

/*
 AngularJS v1.2.8-build.2094+sha.b6c42d5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(h,e,A){'use strict';function u(w,q,k){return{restrict:"ECA",terminal:!0,priority:400,transclude:"element",link:function(a,c,b,f,n){function y(){l&&(l.$destroy(),l=null);g&&(k.leave(g),g=null)}function v(){var b=w.current&&w.current.locals;if(e.isDefined(b&&b.$template)){var b=a.$new(),f=w.current;g=n(b,function(d){k.enter(d,null,g||c,function(){!e.isDefined(t)||t&&!a.$eval(t)||q()});y()});l=f.scope=b;l.$emit("$viewContentLoaded");l.$eval(h)}else y()}var l,g,t=b.autoscroll,h=b.onload||"";
a.$on("$routeChangeSuccess",v);v()}}}function z(e,h,k){return{restrict:"ECA",priority:-400,link:function(a,c){var b=k.current,f=b.locals;c.html(f.$template);var n=e(c.contents());b.controller&&(f.$scope=a,f=h(b.controller,f),b.controllerAs&&(a[b.controllerAs]=f),c.data("$ngControllerController",f),c.children().data("$ngControllerController",f));n(a)}}}h=e.module("ngRoute",["ng"]).provider("$route",function(){function h(a,c){return e.extend(new (e.extend(function(){},{prototype:a})),c)}function q(a,
e){var b=e.caseInsensitiveMatch,f={originalPath:a,regexp:a},h=f.keys=[];a=a.replace(/([().])/g,"\\$1").replace(/(\/)?:(\w+)([\?|\*])?/g,function(a,e,b,c){a="?"===c?c:null;c="*"===c?c:null;h.push({name:b,optional:!!a});e=e||"";return""+(a?"":e)+"(?:"+(a?e:"")+(c&&"(.+?)"||"([^/]+)")+(a||"")+")"+(a||"")}).replace(/([\/$\*])/g,"\\$1");f.regexp=RegExp("^"+a+"$",b?"i":"");return f}var k={};this.when=function(a,c){k[a]=e.extend({reloadOnSearch:!0},c,a&&q(a,c));if(a){var b="/"==a[a.length-1]?a.substr(0,
a.length-1):a+"/";k[b]=e.extend({redirectTo:a},q(b,c))}return this};this.otherwise=function(a){this.when(null,a);return this};this.$get=["$rootScope","$location","$routeParams","$q","$injector","$http","$templateCache","$sce",function(a,c,b,f,n,q,v,l){function g(){var d=t(),m=r.current;if(d&&m&&d.$$route===m.$$route&&e.equals(d.pathParams,m.pathParams)&&!d.reloadOnSearch&&!x)m.params=d.params,e.copy(m.params,b),a.$broadcast("$routeUpdate",m);else if(d||m)x=!1,a.$broadcast("$routeChangeStart",d,m),
(r.current=d)&&d.redirectTo&&(e.isString(d.redirectTo)?c.path(u(d.redirectTo,d.params)).search(d.params).replace():c.url(d.redirectTo(d.pathParams,c.path(),c.search())).replace()),f.when(d).then(function(){if(d){var a=e.extend({},d.resolve),c,b;e.forEach(a,function(d,c){a[c]=e.isString(d)?n.get(d):n.invoke(d)});e.isDefined(c=d.template)?e.isFunction(c)&&(c=c(d.params)):e.isDefined(b=d.templateUrl)&&(e.isFunction(b)&&(b=b(d.params)),b=l.getTrustedResourceUrl(b),e.isDefined(b)&&(d.loadedTemplateUrl=
b,c=q.get(b,{cache:v}).then(function(a){return a.data})));e.isDefined(c)&&(a.$template=c);return f.all(a)}}).then(function(c){d==r.current&&(d&&(d.locals=c,e.copy(d.params,b)),a.$broadcast("$routeChangeSuccess",d,m))},function(c){d==r.current&&a.$broadcast("$routeChangeError",d,m,c)})}function t(){var a,b;e.forEach(k,function(f,k){var p;if(p=!b){var s=c.path();p=f.keys;var l={};if(f.regexp)if(s=f.regexp.exec(s)){for(var g=1,q=s.length;g<q;++g){var n=p[g-1],r="string"==typeof s[g]?decodeURIComponent(s[g]):
s[g];n&&r&&(l[n.name]=r)}p=l}else p=null;else p=null;p=a=p}p&&(b=h(f,{params:e.extend({},c.search(),a),pathParams:a}),b.$$route=f)});return b||k[null]&&h(k[null],{params:{},pathParams:{}})}function u(a,c){var b=[];e.forEach((a||"").split(":"),function(a,d){if(0===d)b.push(a);else{var e=a.match(/(\w+)(.*)/),f=e[1];b.push(c[f]);b.push(e[2]||"");delete c[f]}});return b.join("")}var x=!1,r={routes:k,reload:function(){x=!0;a.$evalAsync(g)}};a.$on("$locationChangeSuccess",g);return r}]});h.provider("$routeParams",
function(){this.$get=function(){return{}}});h.directive("ngView",u);h.directive("ngView",z);u.$inject=["$route","$anchorScroll","$animate"];z.$inject=["$compile","$controller","$route"]})(window,window.angular);
//# sourceMappingURL=angular-route.min.js.map

/*
 AngularJS v1.2.8-build.2094+sha.b6c42d5
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(p,f,n){'use strict';f.module("ngCookies",["ng"]).factory("$cookies",["$rootScope","$browser",function(d,b){var c={},g={},h,k=!1,l=f.copy,m=f.isUndefined;b.addPollFn(function(){var a=b.cookies();h!=a&&(h=a,l(a,g),l(a,c),k&&d.$apply())})();k=!0;d.$watch(function(){var a,e,d;for(a in g)m(c[a])&&b.cookies(a,n);for(a in c)(e=c[a],f.isString(e))?e!==g[a]&&(b.cookies(a,e),d=!0):f.isDefined(g[a])?c[a]=g[a]:delete c[a];if(d)for(a in e=b.cookies(),c)c[a]!==e[a]&&(m(e[a])?delete c[a]:c[a]=e[a])});
return c}]).factory("$cookieStore",["$cookies",function(d){return{get:function(b){return(b=d[b])?f.fromJson(b):b},put:function(b,c){d[b]=f.toJson(c)},remove:function(b){delete d[b]}}}])})(window,window.angular);
//# sourceMappingURL=angular-cookies.min.js.map

//     Underscore.js 1.5.2
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,h=e.reduce,v=e.reduceRight,g=e.filter,d=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,w=Object.keys,_=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.2";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a=j.keys(n),u=0,i=a.length;i>u;u++)if(t.call(e,n[a[u]],a[u],n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduce===h)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduceRight===v)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:g&&n.filter===g?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:d&&n.every===d?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e},j.sample=function(n,t,r){return arguments.length<2||r?n[j.random(n.length-1)]:j.shuffle(n).slice(0,Math.max(0,t))};var k=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=k(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={},i=null==r?j.identity:k(r);return A(t,function(r,a){var o=i.call(e,r,a,t);n(u,o,r)}),u}};j.groupBy=F(function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)}),j.indexBy=F(function(n,t,r){n[t]=r}),j.countBy=F(function(n,t){j.has(n,t)?n[t]++:n[t]=1}),j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:k(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var M=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):M(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return M(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var R=function(){};j.bind=function(n,t){var r,e;if(_&&n.bind===_)return _.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));R.prototype=n.prototype;var u=new R;R.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u,i,a,o;return function(){i=this,u=arguments,a=new Date;var c=function(){var l=new Date-a;t>l?e=setTimeout(c,t-l):(e=null,r||(o=n.apply(i,u)))},l=r&&!e;return e||(e=setTimeout(c,t)),l&&(o=n.apply(i,u)),o}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=w||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},j.pairs=function(n){for(var t=j.keys(n),r=t.length,e=new Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},j.invert=function(n){for(var t={},r=j.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}).call(this);
//# sourceMappingURL=underscore-min.map
/*!
 * Bootstrap v3.0.3 (http://getbootstrap.com)
 * Copyright 2013 Twitter, Inc.
 * Licensed under http://www.apache.org/licenses/LICENSE-2.0
 */

if("undefined"==typeof jQuery)throw new Error("Bootstrap requires jQuery");+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return{end:b[c]}}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one(a.support.transition.end,function(){c=!0});var e=function(){c||a(d).trigger(a.support.transition.end)};return setTimeout(e,b),this},a(function(){a.support.transition=b()})}(jQuery),+function(a){"use strict";var b='[data-dismiss="alert"]',c=function(c){a(c).on("click",b,this.close)};c.prototype.close=function(b){function c(){f.trigger("closed.bs.alert").remove()}var d=a(this),e=d.attr("data-target");e||(e=d.attr("href"),e=e&&e.replace(/.*(?=#[^\s]*$)/,""));var f=a(e);b&&b.preventDefault(),f.length||(f=d.hasClass("alert")?d:d.parent()),f.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one(a.support.transition.end,c).emulateTransitionEnd(150):c())};var d=a.fn.alert;a.fn.alert=function(b){return this.each(function(){var d=a(this),e=d.data("bs.alert");e||d.data("bs.alert",e=new c(this)),"string"==typeof b&&e[b].call(d)})},a.fn.alert.Constructor=c,a.fn.alert.noConflict=function(){return a.fn.alert=d,this},a(document).on("click.bs.alert.data-api",b,c.prototype.close)}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d)};b.DEFAULTS={loadingText:"loading..."},b.prototype.setState=function(a){var b="disabled",c=this.$element,d=c.is("input")?"val":"html",e=c.data();a+="Text",e.resetText||c.data("resetText",c[d]()),c[d](e[a]||this.options[a]),setTimeout(function(){"loadingText"==a?c.addClass(b).attr(b,b):c.removeClass(b).removeAttr(b)},0)},b.prototype.toggle=function(){var a=this.$element.closest('[data-toggle="buttons"]'),b=!0;if(a.length){var c=this.$element.find("input");"radio"===c.prop("type")&&(c.prop("checked")&&this.$element.hasClass("active")?b=!1:a.find(".active").removeClass("active")),b&&c.prop("checked",!this.$element.hasClass("active")).trigger("change")}b&&this.$element.toggleClass("active")};var c=a.fn.button;a.fn.button=function(c){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==typeof c&&c;e||d.data("bs.button",e=new b(this,f)),"toggle"==c?e.toggle():c&&e.setState(c)})},a.fn.button.Constructor=b,a.fn.button.noConflict=function(){return a.fn.button=c,this},a(document).on("click.bs.button.data-api","[data-toggle^=button]",function(b){var c=a(b.target);c.hasClass("btn")||(c=c.closest(".btn")),c.button("toggle"),b.preventDefault()})}(jQuery),+function(a){"use strict";var b=function(b,c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=c,this.paused=this.sliding=this.interval=this.$active=this.$items=null,"hover"==this.options.pause&&this.$element.on("mouseenter",a.proxy(this.pause,this)).on("mouseleave",a.proxy(this.cycle,this))};b.DEFAULTS={interval:5e3,pause:"hover",wrap:!0},b.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this},b.prototype.getActiveIndex=function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},b.prototype.to=function(b){var c=this,d=this.getActiveIndex();return b>this.$items.length-1||0>b?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){c.to(b)}):d==b?this.pause().cycle():this.slide(b>d?"next":"prev",a(this.$items[b]))},b.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition.end&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this},b.prototype.next=function(){return this.sliding?void 0:this.slide("next")},b.prototype.prev=function(){return this.sliding?void 0:this.slide("prev")},b.prototype.slide=function(b,c){var d=this.$element.find(".item.active"),e=c||d[b](),f=this.interval,g="next"==b?"left":"right",h="next"==b?"first":"last",i=this;if(!e.length){if(!this.options.wrap)return;e=this.$element.find(".item")[h]()}this.sliding=!0,f&&this.pause();var j=a.Event("slide.bs.carousel",{relatedTarget:e[0],direction:g});if(!e.hasClass("active")){if(this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid.bs.carousel",function(){var b=a(i.$indicators.children()[i.getActiveIndex()]);b&&b.addClass("active")})),a.support.transition&&this.$element.hasClass("slide")){if(this.$element.trigger(j),j.isDefaultPrevented())return;e.addClass(b),e[0].offsetWidth,d.addClass(g),e.addClass(g),d.one(a.support.transition.end,function(){e.removeClass([b,g].join(" ")).addClass("active"),d.removeClass(["active",g].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger("slid.bs.carousel")},0)}).emulateTransitionEnd(600)}else{if(this.$element.trigger(j),j.isDefaultPrevented())return;d.removeClass("active"),e.addClass("active"),this.sliding=!1,this.$element.trigger("slid.bs.carousel")}return f&&this.cycle(),this}};var c=a.fn.carousel;a.fn.carousel=function(c){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c),g="string"==typeof c?c:f.slide;e||d.data("bs.carousel",e=new b(this,f)),"number"==typeof c?e.to(c):g?e[g]():f.interval&&e.pause().cycle()})},a.fn.carousel.Constructor=b,a.fn.carousel.noConflict=function(){return a.fn.carousel=c,this},a(document).on("click.bs.carousel.data-api","[data-slide], [data-slide-to]",function(b){var c,d=a(this),e=a(d.attr("data-target")||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"")),f=a.extend({},e.data(),d.data()),g=d.attr("data-slide-to");g&&(f.interval=!1),e.carousel(f),(g=d.attr("data-slide-to"))&&e.data("bs.carousel").to(g),b.preventDefault()}),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var b=a(this);b.carousel(b.data())})})}(jQuery),+function(a){"use strict";var b=function(c,d){this.$element=a(c),this.options=a.extend({},b.DEFAULTS,d),this.transitioning=null,this.options.parent&&(this.$parent=a(this.options.parent)),this.options.toggle&&this.toggle()};b.DEFAULTS={toggle:!0},b.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height"},b.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b=a.Event("show.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.$parent&&this.$parent.find("> .panel > .in");if(c&&c.length){var d=c.data("bs.collapse");if(d&&d.transitioning)return;c.collapse("hide"),d||c.data("bs.collapse",null)}var e=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[e](0),this.transitioning=1;var f=function(){this.$element.removeClass("collapsing").addClass("in")[e]("auto"),this.transitioning=0,this.$element.trigger("shown.bs.collapse")};if(!a.support.transition)return f.call(this);var g=a.camelCase(["scroll",e].join("-"));this.$element.one(a.support.transition.end,a.proxy(f,this)).emulateTransitionEnd(350)[e](this.$element[0][g])}}},b.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"),this.transitioning=1;var d=function(){this.transitioning=0,this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse")};return a.support.transition?(this.$element[c](0).one(a.support.transition.end,a.proxy(d,this)).emulateTransitionEnd(350),void 0):d.call(this)}}},b.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]()};var c=a.fn.collapse;a.fn.collapse=function(c){return this.each(function(){var d=a(this),e=d.data("bs.collapse"),f=a.extend({},b.DEFAULTS,d.data(),"object"==typeof c&&c);e||d.data("bs.collapse",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.collapse.Constructor=b,a.fn.collapse.noConflict=function(){return a.fn.collapse=c,this},a(document).on("click.bs.collapse.data-api","[data-toggle=collapse]",function(b){var c,d=a(this),e=d.attr("data-target")||b.preventDefault()||(c=d.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,""),f=a(e),g=f.data("bs.collapse"),h=g?"toggle":d.data(),i=d.attr("data-parent"),j=i&&a(i);g&&g.transitioning||(j&&j.find('[data-toggle=collapse][data-parent="'+i+'"]').not(d).addClass("collapsed"),d[f.hasClass("in")?"addClass":"removeClass"]("collapsed")),f.collapse(h)})}(jQuery),+function(a){"use strict";function b(){a(d).remove(),a(e).each(function(b){var d=c(a(this));d.hasClass("open")&&(d.trigger(b=a.Event("hide.bs.dropdown")),b.isDefaultPrevented()||d.removeClass("open").trigger("hidden.bs.dropdown"))})}function c(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent()}var d=".dropdown-backdrop",e="[data-toggle=dropdown]",f=function(b){a(b).on("click.bs.dropdown",this.toggle)};f.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=c(e),g=f.hasClass("open");if(b(),!g){if("ontouchstart"in document.documentElement&&!f.closest(".navbar-nav").length&&a('<div class="dropdown-backdrop"/>').insertAfter(a(this)).on("click",b),f.trigger(d=a.Event("show.bs.dropdown")),d.isDefaultPrevented())return;f.toggleClass("open").trigger("shown.bs.dropdown"),e.focus()}return!1}},f.prototype.keydown=function(b){if(/(38|40|27)/.test(b.keyCode)){var d=a(this);if(b.preventDefault(),b.stopPropagation(),!d.is(".disabled, :disabled")){var f=c(d),g=f.hasClass("open");if(!g||g&&27==b.keyCode)return 27==b.which&&f.find(e).focus(),d.click();var h=a("[role=menu] li:not(.divider):visible a",f);if(h.length){var i=h.index(h.filter(":focus"));38==b.keyCode&&i>0&&i--,40==b.keyCode&&i<h.length-1&&i++,~i||(i=0),h.eq(i).focus()}}}};var g=a.fn.dropdown;a.fn.dropdown=function(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new f(this)),"string"==typeof b&&d[b].call(c)})},a.fn.dropdown.Constructor=f,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=g,this},a(document).on("click.bs.dropdown.data-api",b).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation()}).on("click.bs.dropdown.data-api",e,f.prototype.toggle).on("keydown.bs.dropdown.data-api",e+", [role=menu]",f.prototype.keydown)}(jQuery),+function(a){"use strict";var b=function(b,c){this.options=c,this.$element=a(b),this.$backdrop=this.isShown=null,this.options.remote&&this.$element.load(this.options.remote)};b.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},b.prototype.toggle=function(a){return this[this.isShown?"hide":"show"](a)},b.prototype.show=function(b){var c=this,d=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(d),this.isShown||d.isDefaultPrevented()||(this.isShown=!0,this.escape(),this.$element.on("click.dismiss.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.backdrop(function(){var d=a.support.transition&&c.$element.hasClass("fade");c.$element.parent().length||c.$element.appendTo(document.body),c.$element.show(),d&&c.$element[0].offsetWidth,c.$element.addClass("in").attr("aria-hidden",!1),c.enforceFocus();var e=a.Event("shown.bs.modal",{relatedTarget:b});d?c.$element.find(".modal-dialog").one(a.support.transition.end,function(){c.$element.focus().trigger(e)}).emulateTransitionEnd(300):c.$element.focus().trigger(e)}))},b.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").attr("aria-hidden",!0).off("click.dismiss.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one(a.support.transition.end,a.proxy(this.hideModal,this)).emulateTransitionEnd(300):this.hideModal())},b.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.focus()},this))},b.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide()},this)):this.isShown||this.$element.off("keyup.dismiss.bs.modal")},b.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.removeBackdrop(),a.$element.trigger("hidden.bs.modal")})},b.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},b.prototype.backdrop=function(b){var c=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var d=a.support.transition&&c;if(this.$backdrop=a('<div class="modal-backdrop '+c+'" />').appendTo(document.body),this.$element.on("click.dismiss.modal",a.proxy(function(a){a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus.call(this.$element[0]):this.hide.call(this))},this)),d&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;d?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(a.support.transition.end,b).emulateTransitionEnd(150):b()):b&&b()};var c=a.fn.modal;a.fn.modal=function(c,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},b.DEFAULTS,e.data(),"object"==typeof c&&c);f||e.data("bs.modal",f=new b(this,g)),"string"==typeof c?f[c](d):g.show&&f.show(d)})},a.fn.modal.Constructor=b,a.fn.modal.noConflict=function(){return a.fn.modal=c,this},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(b){var c=a(this),d=c.attr("href"),e=a(c.attr("data-target")||d&&d.replace(/.*(?=#[^\s]+$)/,"")),f=e.data("modal")?"toggle":a.extend({remote:!/#/.test(d)&&d},e.data(),c.data());b.preventDefault(),e.modal(f,this).one("hide",function(){c.is(":visible")&&c.focus()})}),a(document).on("show.bs.modal",".modal",function(){a(document.body).addClass("modal-open")}).on("hidden.bs.modal",".modal",function(){a(document.body).removeClass("modal-open")})}(jQuery),+function(a){"use strict";var b=function(a,b){this.type=this.options=this.enabled=this.timeout=this.hoverState=this.$element=null,this.init("tooltip",a,b)};b.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},b.prototype.init=function(b,c,d){this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d);for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focus",i="hover"==g?"mouseleave":"blur";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this))}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b},b.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d)}),b},b.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?(c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show()},c.options.delay.show),void 0):c.show()},b.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type);return clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?(c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide()},c.options.delay.hide),void 0):c.hide()},b.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){if(this.$element.trigger(b),b.isDefaultPrevented())return;var c=this.tip();this.setContent(),this.options.animation&&c.addClass("fade");var d="function"==typeof this.options.placement?this.options.placement.call(this,c[0],this.$element[0]):this.options.placement,e=/\s?auto?\s?/i,f=e.test(d);f&&(d=d.replace(e,"")||"top"),c.detach().css({top:0,left:0,display:"block"}).addClass(d),this.options.container?c.appendTo(this.options.container):c.insertAfter(this.$element);var g=this.getPosition(),h=c[0].offsetWidth,i=c[0].offsetHeight;if(f){var j=this.$element.parent(),k=d,l=document.documentElement.scrollTop||document.body.scrollTop,m="body"==this.options.container?window.innerWidth:j.outerWidth(),n="body"==this.options.container?window.innerHeight:j.outerHeight(),o="body"==this.options.container?0:j.offset().left;d="bottom"==d&&g.top+g.height+i-l>n?"top":"top"==d&&g.top-l-i<0?"bottom":"right"==d&&g.right+h>m?"left":"left"==d&&g.left-h<o?"right":d,c.removeClass(k).addClass(d)}var p=this.getCalculatedOffset(d,g,h,i);this.applyPlacement(p,d),this.$element.trigger("shown.bs."+this.type)}},b.prototype.applyPlacement=function(a,b){var c,d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),a.top=a.top+g,a.left=a.left+h,d.offset(a).addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;if("top"==b&&j!=f&&(c=!0,a.top=a.top+f-j),/bottom|top/.test(b)){var k=0;a.left<0&&(k=-2*a.left,a.left=0,d.offset(a),i=d[0].offsetWidth,j=d[0].offsetHeight),this.replaceArrow(k-e+i,i,"left")}else this.replaceArrow(j-f,j,"top");c&&d.offset(a)},b.prototype.replaceArrow=function(a,b,c){this.arrow().css(c,a?50*(1-a/b)+"%":"")},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right")},b.prototype.hide=function(){function b(){"in"!=c.hoverState&&d.detach()}var c=this,d=this.tip(),e=a.Event("hide.bs."+this.type);return this.$element.trigger(e),e.isDefaultPrevented()?void 0:(d.removeClass("in"),a.support.transition&&this.$tip.hasClass("fade")?d.one(a.support.transition.end,b).emulateTransitionEnd(150):b(),this.$element.trigger("hidden.bs."+this.type),this)},b.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","")},b.prototype.hasContent=function(){return this.getTitle()},b.prototype.getPosition=function(){var b=this.$element[0];return a.extend({},"function"==typeof b.getBoundingClientRect?b.getBoundingClientRect():{width:b.offsetWidth,height:b.offsetHeight},this.$element.offset())},b.prototype.getCalculatedOffset=function(a,b,c,d){return"bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width}},b.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title)},b.prototype.tip=function(){return this.$tip=this.$tip||a(this.options.template)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},b.prototype.validate=function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},b.prototype.enable=function(){this.enabled=!0},b.prototype.disable=function(){this.enabled=!1},b.prototype.toggleEnabled=function(){this.enabled=!this.enabled},b.prototype.toggle=function(b){var c=b?a(b.currentTarget)[this.type](this.getDelegateOptions()).data("bs."+this.type):this;c.tip().hasClass("in")?c.leave(c):c.enter(c)},b.prototype.destroy=function(){this.hide().$element.off("."+this.type).removeData("bs."+this.type)};var c=a.fn.tooltip;a.fn.tooltip=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==typeof c&&c;e||d.data("bs.tooltip",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.tooltip.Constructor=b,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=c,this}}(jQuery),+function(a){"use strict";var b=function(a,b){this.init("popover",a,b)};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");b.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),b.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),b.prototype.constructor=b,b.prototype.getDefaults=function(){return b.DEFAULTS},b.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content")[this.options.html?"html":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide()},b.prototype.hasContent=function(){return this.getTitle()||this.getContent()},b.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content)},b.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow")},b.prototype.tip=function(){return this.$tip||(this.$tip=a(this.options.template)),this.$tip};var c=a.fn.popover;a.fn.popover=function(c){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==typeof c&&c;e||d.data("bs.popover",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.popover.Constructor=b,a.fn.popover.noConflict=function(){return a.fn.popover=c,this}}(jQuery),+function(a){"use strict";function b(c,d){var e,f=a.proxy(this.process,this);this.$element=a(c).is("body")?a(window):a(c),this.$body=a("body"),this.$scrollElement=this.$element.on("scroll.bs.scroll-spy.data-api",f),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||(e=a(c).attr("href"))&&e.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.offsets=a([]),this.targets=a([]),this.activeTarget=null,this.refresh(),this.process()}b.DEFAULTS={offset:10},b.prototype.refresh=function(){var b=this.$element[0]==window?"offset":"position";this.offsets=a([]),this.targets=a([]);var c=this;this.$body.find(this.selector).map(function(){var d=a(this),e=d.data("target")||d.attr("href"),f=/^#\w/.test(e)&&a(e);return f&&f.length&&[[f[b]().top+(!a.isWindow(c.$scrollElement.get(0))&&c.$scrollElement.scrollTop()),e]]||null}).sort(function(a,b){return a[0]-b[0]}).each(function(){c.offsets.push(this[0]),c.targets.push(this[1])})},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,d=c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(b>=d)return g!=(a=f.last()[0])&&this.activate(a);for(a=e.length;a--;)g!=f[a]&&b>=e[a]&&(!e[a+1]||b<=e[a+1])&&this.activate(f[a])},b.prototype.activate=function(b){this.activeTarget=b,a(this.selector).parents(".active").removeClass("active");var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy")};var c=a.fn.scrollspy;a.fn.scrollspy=function(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==typeof c&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=c,this},a(window).on("load",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);b.scrollspy(b.data())})})}(jQuery),+function(a){"use strict";var b=function(b){this.element=a(b)};b.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a")[0],f=a.Event("show.bs.tab",{relatedTarget:e});if(b.trigger(f),!f.isDefaultPrevented()){var g=a(d);this.activate(b.parent("li"),c),this.activate(g,g.parent(),function(){b.trigger({type:"shown.bs.tab",relatedTarget:e})})}}},b.prototype.activate=function(b,c,d){function e(){f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),b.addClass("active"),g?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu")&&b.closest("li.dropdown").addClass("active"),d&&d()}var f=c.find("> .active"),g=d&&a.support.transition&&f.hasClass("fade");g?f.one(a.support.transition.end,e).emulateTransitionEnd(150):e(),f.removeClass("in")};var c=a.fn.tab;a.fn.tab=function(c){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new b(this)),"string"==typeof c&&e[c]()})},a.fn.tab.Constructor=b,a.fn.tab.noConflict=function(){return a.fn.tab=c,this},a(document).on("click.bs.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(b){b.preventDefault(),a(this).tab("show")})}(jQuery),+function(a){"use strict";var b=function(c,d){this.options=a.extend({},b.DEFAULTS,d),this.$window=a(window).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(c),this.affixed=this.unpin=null,this.checkPosition()};b.RESET="affix affix-top affix-bottom",b.DEFAULTS={offset:0},b.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1)},b.prototype.checkPosition=function(){if(this.$element.is(":visible")){var c=a(document).height(),d=this.$window.scrollTop(),e=this.$element.offset(),f=this.options.offset,g=f.top,h=f.bottom;"object"!=typeof f&&(h=g=f),"function"==typeof g&&(g=f.top()),"function"==typeof h&&(h=f.bottom());var i=null!=this.unpin&&d+this.unpin<=e.top?!1:null!=h&&e.top+this.$element.height()>=c-h?"bottom":null!=g&&g>=d?"top":!1;this.affixed!==i&&(this.unpin&&this.$element.css("top",""),this.affixed=i,this.unpin="bottom"==i?e.top-d:null,this.$element.removeClass(b.RESET).addClass("affix"+(i?"-"+i:"")),"bottom"==i&&this.$element.offset({top:document.body.offsetHeight-h-this.$element.height()}))}};var c=a.fn.affix;a.fn.affix=function(c){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==typeof c&&c;e||d.data("bs.affix",e=new b(this,f)),"string"==typeof c&&e[c]()})},a.fn.affix.Constructor=b,a.fn.affix.noConflict=function(){return a.fn.affix=c,this},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var b=a(this),c=b.data();c.offset=c.offset||{},c.offsetBottom&&(c.offset.bottom=c.offsetBottom),c.offsetTop&&(c.offset.top=c.offsetTop),b.affix(c)})})}(jQuery);
/**
 * angular-strap
 * @version v2.0.0-beta.4 - 2014-01-20
 * @link http://mgcrea.github.io/angular-strap
 * @author Olivier Louvignes <olivier@mg-crea.com>
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function (window, document, undefined) {
  'use strict';
  angular.module('mgcrea.ngStrap', [
    'mgcrea.ngStrap.modal',
    'mgcrea.ngStrap.aside',
    'mgcrea.ngStrap.alert',
    'mgcrea.ngStrap.button',
    'mgcrea.ngStrap.select',
    'mgcrea.ngStrap.datepicker',
    'mgcrea.ngStrap.navbar',
    'mgcrea.ngStrap.tooltip',
    'mgcrea.ngStrap.popover',
    'mgcrea.ngStrap.dropdown',
    'mgcrea.ngStrap.typeahead',
    'mgcrea.ngStrap.scrollspy',
    'mgcrea.ngStrap.affix',
    'mgcrea.ngStrap.tab'
  ]);
  angular.module('mgcrea.ngStrap.affix', ['mgcrea.ngStrap.helpers.dimensions']).provider('$affix', function () {
    var defaults = this.defaults = { offsetTop: 'auto' };
    this.$get = [
      '$window',
      'dimensions',
      function ($window, dimensions) {
        var windowEl = angular.element($window);
        var bodyEl = angular.element($window.document.body);
        function AffixFactory(element, config) {
          var $affix = {};
          var options = angular.extend({}, defaults, config);
          var reset = 'affix affix-top affix-bottom', initialAffixTop = 0, initialOffsetTop = 0, affixed = null, unpin = null;
          var parent = element.parent();
          if (options.offsetParent) {
            if (options.offsetParent.match(/^\d+$/)) {
              for (var i = 0; i < options.offsetParent * 1 - 1; i++) {
                parent = parent.parent();
              }
            } else {
              parent = angular.element(options.offsetParent);
            }
          }
          var offsetTop = 0;
          if (options.offsetTop) {
            if (options.offsetTop === 'auto') {
              options.offsetTop = '+0';
            }
            if (options.offsetTop.match(/^[-+]\d+$/)) {
              initialAffixTop -= options.offsetTop * 1;
              if (options.offsetParent) {
                offsetTop = dimensions.offset(parent[0]).top + options.offsetTop * 1;
              } else {
                offsetTop = dimensions.offset(element[0]).top - dimensions.css(element[0], 'marginTop', true) + options.offsetTop * 1;
              }
            } else {
              offsetTop = options.offsetTop * 1;
            }
          }
          var offsetBottom = 0;
          if (options.offsetBottom) {
            if (options.offsetParent && options.offsetBottom.match(/^[-+]\d+$/)) {
              offsetBottom = $window.document.body.scrollHeight - (dimensions.offset(parent[0]).top + dimensions.height(parent[0])) + options.offsetBottom * 1 + 1;
            } else {
              offsetBottom = options.offsetBottom * 1;
            }
          }
          $affix.init = function () {
            initialOffsetTop = dimensions.offset(element[0]).top + initialAffixTop;
            windowEl.on('scroll', this.checkPosition);
            windowEl.on('click', this.checkPositionWithEventLoop);
            this.checkPosition();
            this.checkPositionWithEventLoop();
          };
          $affix.destroy = function () {
            windowEl.off('scroll', this.checkPosition);
            windowEl.off('click', this.checkPositionWithEventLoop);
          };
          $affix.checkPositionWithEventLoop = function () {
            setTimeout(this.checkPosition, 1);
          };
          $affix.checkPosition = function () {
            var scrollTop = $window.pageYOffset;
            var position = dimensions.offset(element[0]);
            var elementHeight = dimensions.height(element[0]);
            var affix = getRequiredAffixClass(unpin, position, elementHeight);
            if (affixed === affix)
              return;
            affixed = affix;
            element.removeClass(reset).addClass('affix' + (affix !== 'middle' ? '-' + affix : ''));
            if (affix === 'top') {
              unpin = null;
              element.css('position', options.offsetParent ? '' : 'relative');
              element.css('top', '');
            } else if (affix === 'bottom') {
              if (options.offsetUnpin) {
                unpin = -(options.offsetUnpin * 1);
              } else {
                unpin = position.top - scrollTop;
              }
              element.css('position', options.offsetParent ? '' : 'relative');
              element.css('top', options.offsetParent ? '' : bodyEl[0].offsetHeight - offsetBottom - elementHeight - initialOffsetTop + 'px');
            } else {
              unpin = null;
              element.css('position', 'fixed');
              element.css('top', initialAffixTop + 'px');
            }
          };
          function getRequiredAffixClass(unpin, position, elementHeight) {
            var scrollTop = $window.pageYOffset;
            var scrollHeight = $window.document.body.scrollHeight;
            if (scrollTop <= offsetTop) {
              return 'top';
            } else if (unpin !== null && scrollTop + unpin <= position.top) {
              return 'middle';
            } else if (offsetBottom !== null && position.top + elementHeight + initialAffixTop >= scrollHeight - offsetBottom) {
              return 'bottom';
            } else {
              return 'middle';
            }
          }
          $affix.init();
          return $affix;
        }
        return AffixFactory;
      }
    ];
  }).directive('bsAffix', [
    '$affix',
    'dimensions',
    function ($affix, dimensions) {
      return {
        restrict: 'EAC',
        link: function postLink(scope, element, attr) {
          var options = {
              scope: scope,
              offsetTop: 'auto'
            };
          angular.forEach([
            'offsetTop',
            'offsetBottom',
            'offsetParent',
            'offsetUnpin'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          var affix = $affix(element, options);
          scope.$on('$destroy', function () {
            options = null;
            affix = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.alert', []).run([
    '$templateCache',
    function ($templateCache) {
      var template = '' + '<div class="alert" tabindex="-1" ng-class="[type ? \'alert-\' + type : null]">' + '<button type="button" class="close" ng-click="$hide()">&times;</button>' + '<strong ng-bind="title"></strong>&nbsp;<span ng-bind-html="content"></span>' + '</div>';
      $templateCache.put('$alert', template);
    }
  ]).provider('$alert', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        prefixClass: 'alert',
        placement: null,
        template: '$alert',
        container: false,
        element: null,
        backdrop: false,
        keyboard: true,
        show: true,
        duration: false
      };
    this.$get = [
      '$modal',
      '$timeout',
      function ($modal, $timeout) {
        function AlertFactory(config) {
          var $alert = {};
          var options = angular.extend({}, defaults, config);
          $alert = $modal(options);
          if (!options.scope) {
            angular.forEach(['type'], function (key) {
              if (options[key])
                $alert.$scope[key] = options[key];
            });
          }
          var show = $alert.show;
          if (options.duration) {
            $alert.show = function () {
              show();
              $timeout(function () {
                $alert.hide();
              }, options.duration * 1000);
            };
          }
          return $alert;
        }
        return AlertFactory;
      }
    ];
  }).directive('bsAlert', [
    '$window',
    '$location',
    '$sce',
    '$alert',
    function ($window, $location, $sce, $alert) {
      var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
      return {
        restrict: 'EAC',
        scope: true,
        link: function postLink(scope, element, attr, transclusion) {
          var options = {
              scope: scope,
              element: element,
              show: false
            };
          angular.forEach([
            'template',
            'placement',
            'keyboard',
            'html',
            'container',
            'animation',
            'duration'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          angular.forEach([
            'title',
            'content',
            'type'
          ], function (key) {
            attr[key] && attr.$observe(key, function (newValue, oldValue) {
              scope[key] = newValue;
            });
          });
          attr.bsAlert && scope.$watch(attr.bsAlert, function (newValue, oldValue) {
            if (angular.isObject(newValue)) {
              angular.extend(scope, newValue);
            } else {
              scope.content = newValue;
            }
          }, true);
          var alert = $alert(options);
          element.on(attr.trigger || 'click', alert.toggle);
          scope.$on('$destroy', function () {
            alert.destroy();
            options = null;
            alert = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.aside', ['mgcrea.ngStrap.modal']).run([
    '$templateCache',
    function ($templateCache) {
      var template = '' + '<div class="aside" tabindex="-1" role="dialog">' + '<div class="aside-dialog">' + '<div class="aside-content">' + '<div class="aside-header" ng-show="title">' + '<button type="button" class="close" ng-click="$hide()">&times;</button>' + '<h4 class="aside-title" ng-bind="title"></h4>' + '</div>' + '<div class="aside-body" ng-show="content" ng-bind="content"></div>' + '<div class="aside-footer">' + '<button type="button" class="btn btn-default" ng-click="$hide()">Close</button>' + '</div>' + '</div>' + '</div>' + '</div>';
      $templateCache.put('$aside', template);
    }
  ]).provider('$aside', function () {
    var defaults = this.defaults = {
        animation: 'animation-fadeAndSlideRight',
        prefixClass: 'aside',
        placement: 'right',
        template: '$aside',
        container: false,
        element: null,
        backdrop: true,
        keyboard: true,
        html: false,
        show: true
      };
    this.$get = [
      '$modal',
      function ($modal) {
        function AsideFactory(config) {
          var $aside = {};
          var options = angular.extend({}, defaults, config);
          $aside = $modal(options);
          return $aside;
        }
        return AsideFactory;
      }
    ];
  }).directive('bsAside', [
    '$window',
    '$location',
    '$sce',
    '$aside',
    function ($window, $location, $sce, $aside) {
      var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
      return {
        restrict: 'EAC',
        scope: true,
        link: function postLink(scope, element, attr, transclusion) {
          var options = {
              scope: scope,
              element: element,
              show: false
            };
          angular.forEach([
            'template',
            'placement',
            'backdrop',
            'keyboard',
            'html',
            'container',
            'animation'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          angular.forEach([
            'title',
            'content'
          ], function (key) {
            attr[key] && attr.$observe(key, function (newValue, oldValue) {
              scope[key] = newValue;
            });
          });
          attr.bsAside && scope.$watch(attr.bsAside, function (newValue, oldValue) {
            if (angular.isObject(newValue)) {
              angular.extend(scope, newValue);
            } else {
              scope.content = newValue;
            }
          }, true);
          var aside = $aside(options);
          element.on(attr.trigger || 'click', aside.toggle);
          scope.$on('$destroy', function () {
            aside.destroy();
            options = null;
            aside = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.button', []).provider('$button', function () {
    var defaults = this.defaults = {
        activeClass: 'active',
        toggleEvent: 'click'
      };
    this.$get = function () {
      return { defaults: defaults };
    };
  }).directive('bsCheckboxGroup', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function postLink(element, attr) {
        element.attr('data-toggle', 'buttons');
        element.removeAttr('ng-model');
        var children = element[0].querySelectorAll('input[type="checkbox"]');
        angular.forEach(children, function (child) {
          var childEl = angular.element(child);
          childEl.attr('bs-checkbox', '');
          childEl.attr('ng-model', attr.ngModel + '.' + childEl.attr('value'));
        });
      }
    };
  }).directive('bsCheckbox', [
    '$button',
    function ($button) {
      var defaults = $button.defaults;
      var constantValueRegExp = /^(true|false|\d+)$/;
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function postLink(scope, element, attr, controller) {
          var options = defaults;
          var isInput = element[0].nodeName === 'INPUT';
          var activeElement = isInput ? element.parent() : element;
          var trueValue = angular.isDefined(attr.trueValue) ? attr.trueValue : true;
          if (constantValueRegExp.test(attr.trueValue)) {
            trueValue = scope.$eval(attr.trueValue);
          }
          var falseValue = angular.isDefined(attr.falseValue) ? attr.falseValue : false;
          if (constantValueRegExp.test(attr.falseValue)) {
            falseValue = scope.$eval(attr.falseValue);
          }
          var hasExoticValues = typeof trueValue !== 'boolean' || typeof falseValue !== 'boolean';
          if (hasExoticValues) {
            controller.$parsers.push(function (viewValue) {
              return viewValue ? trueValue : falseValue;
            });
            scope.$watch(attr.ngModel, function (newValue, oldValue) {
              controller.$render();
            });
          }
          controller.$render = function () {
            var isActive = angular.equals(controller.$modelValue, trueValue);
            if (isInput) {
              element[0].checked = isActive;
            }
            activeElement.toggleClass(options.activeClass, isActive);
          };
          element.bind(options.toggleEvent, function () {
            scope.$apply(function () {
              if (!isInput) {
                controller.$setViewValue(!activeElement.hasClass('active'));
              }
              if (!hasExoticValues) {
                controller.$render();
              }
            });
          });
        }
      };
    }
  ]).directive('bsRadioGroup', function () {
    return {
      restrict: 'A',
      require: 'ngModel',
      compile: function postLink(element, attr) {
        element.attr('data-toggle', 'buttons');
        element.removeAttr('ng-model');
        var children = element[0].querySelectorAll('input[type="radio"]');
        angular.forEach(children, function (child) {
          angular.element(child).attr('bs-radio', '');
          angular.element(child).attr('ng-model', attr.ngModel);
        });
      }
    };
  }).directive('bsRadio', [
    '$button',
    function ($button) {
      var defaults = $button.defaults;
      var constantValueRegExp = /^(true|false|\d+)$/;
      return {
        restrict: 'A',
        require: 'ngModel',
        link: function postLink(scope, element, attr, controller) {
          var options = defaults;
          var isInput = element[0].nodeName === 'INPUT';
          var activeElement = isInput ? element.parent() : element;
          var value = constantValueRegExp.test(attr.value) ? scope.$eval(attr.value) : attr.value;
          controller.$render = function () {
            var isActive = angular.equals(controller.$modelValue, value);
            if (isInput) {
              element[0].checked = isActive;
            }
            activeElement.toggleClass(options.activeClass, isActive);
          };
          element.bind(options.toggleEvent, function () {
            scope.$apply(function () {
              controller.$setViewValue(value);
              controller.$render();
            });
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.datepicker', ['mgcrea.ngStrap.tooltip']).provider('$datepicker', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        prefixClass: 'datepicker',
        placement: 'bottom-left',
        template: 'datepicker/datepicker.tpl.html',
        trigger: 'focus',
        container: false,
        keyboard: true,
        html: false,
        delay: 0,
        dateType: 'date',
        dateFormat: 'shortDate',
        autoclose: false,
        minDate: -Infinity,
        maxDate: +Infinity,
        startView: 0,
        minView: 0,
        weekStart: 0
      };
    this.$get = [
      '$window',
      '$document',
      '$rootScope',
      '$sce',
      '$locale',
      'dateFilter',
      'datepickerViews',
      '$tooltip',
      function ($window, $document, $rootScope, $sce, $locale, dateFilter, datepickerViews, $tooltip) {
        var bodyEl = angular.element($window.document.body);
        var isTouch = 'createTouch' in $window.document;
        if (!defaults.lang)
          defaults.lang = $locale.id;
        function DatepickerFactory(element, controller, config) {
          var $datepicker = $tooltip(element, angular.extend({}, defaults, config));
          var parentScope = config.scope;
          var options = $datepicker.$options;
          var scope = $datepicker.$scope;
          var pickerViews = datepickerViews($datepicker);
          $datepicker.$views = pickerViews.views;
          var viewDate = pickerViews.viewDate;
          $datepicker.$mode = options.startView;
          var $picker = $datepicker.$views[$datepicker.$mode];
          scope.$select = function (date) {
            $datepicker.select(date);
          };
          scope.$selectPane = function (value) {
            $datepicker.$selectPane(value);
          };
          scope.$toggleMode = function () {
            $datepicker.setMode(($datepicker.$mode + 1) % $datepicker.$views.length);
          };
          $datepicker.update = function (date) {
            if (!isNaN(date.getTime())) {
              var firstBuild = angular.isUndefined($datepicker.$date);
              $datepicker.$date = date;
              $picker.update.call($picker, date, firstBuild);
            }
          };
          $datepicker.select = function (date, keepMode) {
            if (!angular.isDate(date))
              date = new Date(date);
            if (!$datepicker.$mode || keepMode) {
              controller.$setViewValue(date);
              controller.$render();
              if (options.autoclose && !keepMode) {
                options.trigger === 'focus' ? element[0].blur() : $datepicker.hide();
              }
            } else {
              angular.extend(viewDate, {
                year: date.getUTCFullYear(),
                month: date.getUTCMonth(),
                date: date.getUTCDate()
              });
              $datepicker.setMode($datepicker.$mode - 1);
              $datepicker.$build();
            }
          };
          $datepicker.setMode = function (mode) {
            $datepicker.$mode = mode;
            $picker = $datepicker.$views[$datepicker.$mode];
            $datepicker.$build();
          };
          $datepicker.$build = function () {
            $picker.build.call($picker);
          };
          $datepicker.$updateSelected = function () {
            for (var i = 0, l = scope.rows.length; i < l; i++) {
              angular.forEach(scope.rows[i], updateSelected);
            }
          };
          $datepicker.$isSelected = function (date) {
            return $picker.isSelected(date);
          };
          $datepicker.$selectPane = function (value) {
            var steps = $picker.steps;
            var targetDate = new Date(Date.UTC(viewDate.year + (steps.year || 0) * value, viewDate.month + (steps.month || 0) * value, viewDate.date + (steps.day || 0) * value));
            angular.extend(viewDate, {
              year: targetDate.getUTCFullYear(),
              month: targetDate.getUTCMonth(),
              date: targetDate.getUTCDate()
            });
            $datepicker.$build();
          };
          $datepicker.$onMouseDown = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (isTouch) {
              var targetEl = angular.element(evt.target);
              targetEl.triggerHandler('click');
            }
          };
          $datepicker.$onKeyDown = function (evt) {
            if (!/(38|37|39|40|13)/.test(evt.keyCode))
              return;
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.keyCode === 13) {
              if (!$datepicker.$mode) {
                return options.trigger === 'focus' ? element[0].blur() : $datepicker.hide();
              } else {
                return scope.$apply(function () {
                  $datepicker.setMode($datepicker.$mode - 1);
                });
              }
            }
            $picker.onKeyDown(evt);
            parentScope.$digest();
          };
          function updateSelected(el) {
            el.selected = $datepicker.$isSelected(el.date);
          }
          var _init = $datepicker.init;
          $datepicker.init = function () {
            if (controller.$dateValue) {
              $datepicker.$date = controller.$dateValue;
              $datepicker.$build();
            }
            _init();
          };
          var _show = $datepicker.show;
          $datepicker.show = function () {
            _show();
            setTimeout(function () {
              $datepicker.$element.on(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
              if (options.keyboard) {
                element.on('keydown', $datepicker.$onKeyDown);
              }
            });
          };
          var _hide = $datepicker.hide;
          $datepicker.hide = function () {
            $datepicker.$element.off(isTouch ? 'touchstart' : 'mousedown', $datepicker.$onMouseDown);
            if (options.keyboard) {
              element.off('keydown', $datepicker.$onKeyDown);
            }
            _hide();
          };
          return $datepicker;
        }
        DatepickerFactory.defaults = defaults;
        return DatepickerFactory;
      }
    ];
  }).provider('$dateParser', [
    '$localeProvider',
    function ($localeProvider) {
      var proto = Date.prototype;
      function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
      var defaults = this.defaults = { format: 'shortDate' };
      this.$get = [
        '$locale',
        function ($locale) {
          if (!defaults.lang)
            defaults.lang = $locale.id;
          var DateParserFactory = function (options) {
            var $dateParser = {};
            window.$locale = $locale;
            var regExpMap = {
                '/': '[\\/]',
                '-': '[-]',
                '.': '[.]',
                ' ': '[\\s]',
                'EEEE': '((?:' + $locale.DATETIME_FORMATS.DAY.join('|') + '))',
                'EEE': '((?:' + $locale.DATETIME_FORMATS.SHORTDAY.join('|') + '))',
                'dd': '((?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1})))',
                'd': '((?:(?:[0-2]?[0-9]{1})|(?:[3][01]{1})))',
                'MMMM': '((?:' + $locale.DATETIME_FORMATS.MONTH.join('|') + '))',
                'MMM': '((?:' + $locale.DATETIME_FORMATS.SHORTMONTH.join('|') + '))',
                'MM': '((?:[0]?[1-9]|[1][012]))',
                'M': '((?:[0]?[1-9]|[1][012]))',
                'yyyy': '((?:(?:[1]{1}[0-9]{1}[0-9]{1}[0-9]{1})|(?:[2]{1}[0-9]{3}))(?![[0-9]]))',
                'yy': '((?:(?:[0-9]{1}[0-9]{1}))(?![[0-9]]))'
              };
            var setFnMap = {
                'dd': proto.setUTCDate,
                'd': proto.setUTCDate,
                'MMMM': function (value) {
                  return this.setUTCMonth($locale.DATETIME_FORMATS.MONTH.indexOf(value));
                },
                'MMM': function (value) {
                  return this.setUTCMonth($locale.DATETIME_FORMATS.SHORTMONTH.indexOf(value));
                },
                'MM': function (value) {
                  return this.setUTCMonth(1 * value - 1);
                },
                'M': function (value) {
                  return this.setUTCMonth(1 * value - 1);
                },
                'yyyy': proto.setUTCFullYear,
                'yy': function (value) {
                  return this.setUTCFullYear(2000 + 1 * value);
                },
                'y': proto.setUTCFullYear
              };
            var regex, setMap;
            $dateParser.init = function () {
              $dateParser.$format = $locale.DATETIME_FORMATS[options.format] || options.format;
              regex = regExpForFormat($dateParser.$format);
              setMap = setMapForFormat($dateParser.$format);
            };
            $dateParser.isValid = function (date) {
              if (angular.isDate(date))
                return !isNaN(date.getTime());
              return regex.test(date);
            };
            $dateParser.parse = function (value, baseDate) {
              if (angular.isDate(value))
                return value;
              var matches = regex.exec(value);
              if (!matches)
                return false;
              var date = baseDate || new Date(0);
              for (var i = 0; i < matches.length - 1; i++) {
                setMap[i] && setMap[i].call(date, matches[i + 1]);
              }
              return date;
            };
            function setMapForFormat(format) {
              var keys = Object.keys(setFnMap), i;
              var map = [], sortedMap = [];
              for (i = 0; i < keys.length; i++) {
                if ([
                    '/',
                    '.',
                    '-',
                    ' '
                  ].indexOf(keys[i]) !== -1)
                  continue;
                if (format.split(keys[i]).length > 1) {
                  var index = format.search(keys[i]);
                  format = format.split(keys[i]).join('');
                  if (setFnMap[keys[i]])
                    map[index] = setFnMap[keys[i]];
                }
              }
              angular.forEach(map, function (v) {
                sortedMap.push(v);
              });
              return sortedMap;
            }
            function regExpForFormat(format) {
              var keys = Object.keys(regExpMap), i;
              for (i = 0; i < keys.length; i++) {
                format = format.split(keys[i]).join('${' + i + '}');
              }
              for (i = 0; i < keys.length; i++) {
                format = format.split('${' + i + '}').join(regExpMap[keys[i]]);
              }
              return new RegExp('^' + format + '$', ['i']);
            }
            $dateParser.init();
            return $dateParser;
          };
          return DateParserFactory;
        }
      ];
    }
  ]).directive('bsDatepicker', [
    '$window',
    '$parse',
    '$q',
    '$locale',
    'dateFilter',
    '$datepicker',
    '$dateParser',
    '$timeout',
    function ($window, $parse, $q, $locale, dateFilter, $datepicker, $dateParser, $timeout) {
      var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
      var moment = window.moment;
      return {
        restrict: 'EAC',
        require: 'ngModel',
        link: function postLink(scope, element, attr, controller) {
          var options = {
              scope: scope,
              controller: controller
            };
          angular.forEach([
            'placement',
            'container',
            'delay',
            'trigger',
            'keyboard',
            'html',
            'animation',
            'template',
            'autoclose',
            'dateType',
            'dateFormat',
            'lang'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          var datepicker = $datepicker(element, controller, options);
          options = datepicker.$options;
          angular.forEach([
            'minDate',
            'maxDate'
          ], function (key) {
            attr[key] && attr.$observe(key, function (newValue, oldValue) {
              if (newValue === 'now' || newValue === 'today')
                newValue = null;
              datepicker.$options[key] = +new Date(newValue);
              angular.isDefined(oldValue) && requestAnimationFrame(function () {
                datepicker && datepicker.$build();
              });
            });
          });
          scope.$watch(attr.ngModel, function (newValue, oldValue) {
            datepicker.update(controller.$dateValue);
          });
          var dateParser = $dateParser({
              format: options.dateFormat,
              lang: options.lang
            });
          controller.$parsers.unshift(function (viewValue) {
            var parsedDate = dateParser.parse(viewValue, controller.$dateValue);
            if (!parsedDate || isNaN(parsedDate.getTime())) {
              controller.$setValidity('date', false);
              return;
            } else {
              var isValid = parsedDate.getTime() >= options.minDate && parsedDate.getTime() <= options.maxDate;
              controller.$setValidity('date', isValid);
            }
            controller.$dateValue = parsedDate;
            if (options.dateType === 'string') {
              return dateFilter(viewValue, options.dateFormat);
            } else if (options.dateType === 'number') {
              return controller.$dateValue.getTime();
            } else if (options.dateType === 'iso') {
              return controller.$dateValue.toISOString();
            } else {
              return controller.$dateValue;
            }
          });
          controller.$formatters.push(function (modelValue) {
            controller.$dateValue = angular.isDate(modelValue) ? modelValue : new Date(modelValue);
            return controller.$dateValue;
          });
          controller.$render = function () {
            element.val(controller.$isEmpty(controller.$viewValue) ? '' : dateFilter(controller.$viewValue, options.dateFormat));
          };
          scope.$on('$destroy', function () {
            datepicker.destroy();
            options = null;
            datepicker = null;
          });
        }
      };
    }
  ]).provider('datepickerViews', function () {
    var defaults = this.defaults = {
        dayFormat: 'dd',
        daySplit: 7
      };
    function split(arr, size) {
      var arrays = [];
      while (arr.length > 0) {
        arrays.push(arr.splice(0, size));
      }
      return arrays;
    }
    this.$get = [
      '$locale',
      '$sce',
      'dateFilter',
      function ($locale, $sce, dateFilter) {
        return function (picker) {
          var scope = picker.$scope;
          var options = picker.$options;
          var weekDaysMin = $locale.DATETIME_FORMATS.SHORTDAY;
          var weekDaysLabels = weekDaysMin.slice(options.weekStart).concat(weekDaysMin.slice(0, options.weekStart));
          var dayLabelHtml = $sce.trustAsHtml('<th class="dow text-center">' + weekDaysLabels.join('</th><th class="dow text-center">') + '</th>');
          var startDate = picker.$date || new Date();
          var viewDate = {
              year: startDate.getUTCFullYear(),
              month: startDate.getUTCMonth(),
              date: startDate.getUTCDate()
            };
          var views = [
              {
                format: 'dd',
                split: 7,
                height: 250,
                steps: { month: 1 },
                update: function (date, force) {
                  if (force || date.getUTCFullYear() !== viewDate.year || date.getUTCMonth() !== viewDate.month) {
                    angular.extend(viewDate, {
                      year: picker.$date.getUTCFullYear(),
                      month: picker.$date.getUTCMonth(),
                      date: picker.$date.getUTCDate()
                    });
                    picker.$build();
                  } else if (date.getUTCDate() !== viewDate.date) {
                    viewDate.date = picker.$date.getUTCDate();
                    picker.$updateSelected();
                  }
                },
                build: function () {
                  var days = [], day;
                  var firstDayOfMonth = new Date(Date.UTC(viewDate.year, viewDate.month, 1));
                  var firstDate = new Date(+firstDayOfMonth - (firstDayOfMonth.getUTCDay() + 1 - options.weekStart) * 86400000);
                  for (var i = 0; i < 35; i++) {
                    day = new Date(+firstDate + i * 86400000);
                    days.push({
                      date: day,
                      label: dateFilter(day, this.format),
                      selected: this.isSelected(day),
                      muted: day.getUTCMonth() !== viewDate.month,
                      disabled: this.isDisabled(day)
                    });
                  }
                  scope.title = dateFilter(firstDayOfMonth, 'MMMM yyyy');
                  scope.labels = dayLabelHtml;
                  scope.rows = split(days, this.split);
                  scope.width = 100 / this.split;
                  scope.height = (this.height - 75) / scope.rows.length;
                },
                isSelected: function (date) {
                  return date.getUTCFullYear() === picker.$date.getUTCFullYear() && date.getUTCMonth() === picker.$date.getUTCMonth() && date.getUTCDate() === picker.$date.getUTCDate();
                },
                isDisabled: function (date) {
                  return date.getTime() < options.minDate || date.getTime() > options.maxDate;
                },
                onKeyDown: function (evt) {
                  var actualTime = picker.$date.getTime();
                  if (evt.keyCode === 37)
                    picker.select(new Date(actualTime - 1 * 86400000), true);
                  else if (evt.keyCode === 38)
                    picker.select(new Date(actualTime - 7 * 86400000), true);
                  else if (evt.keyCode === 39)
                    picker.select(new Date(actualTime + 1 * 86400000), true);
                  else if (evt.keyCode === 40)
                    picker.select(new Date(actualTime + 7 * 86400000), true);
                }
              },
              {
                name: 'month',
                format: 'MMM',
                split: 4,
                height: 250,
                steps: { year: 1 },
                update: function (date) {
                  if (date.getUTCFullYear() !== viewDate.year) {
                    angular.extend(viewDate, {
                      year: picker.$date.getUTCFullYear(),
                      month: picker.$date.getUTCMonth(),
                      date: picker.$date.getUTCDate()
                    });
                    picker.$build();
                  } else if (date.getUTCMonth() !== viewDate.month) {
                    angular.extend(viewDate, {
                      month: picker.$date.getUTCMonth(),
                      date: picker.$date.getUTCDate()
                    });
                    picker.$updateSelected();
                  }
                },
                build: function () {
                  var months = [], month;
                  for (var i = 0; i < 12; i++) {
                    month = new Date(Date.UTC(viewDate.year, i, 1));
                    months.push({
                      date: month,
                      label: dateFilter(month, this.format),
                      selected: picker.$isSelected(month),
                      disabled: this.isDisabled(month)
                    });
                  }
                  scope.title = dateFilter(month, 'yyyy');
                  scope.labels = false;
                  scope.rows = split(months, this.split);
                  scope.width = 100 / this.split;
                  scope.height = (this.height - 50) / scope.rows.length;
                },
                isSelected: function (date) {
                  return date.getUTCFullYear() === picker.$date.getUTCFullYear() && date.getUTCMonth() === picker.$date.getUTCMonth();
                },
                isDisabled: function (date) {
                  var lastDate = +new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth() + 1, 0));
                  return lastDate < options.minDate || date.getTime() > options.maxDate;
                },
                onKeyDown: function (evt) {
                  var actualMonth = picker.$date.getUTCMonth();
                  if (evt.keyCode === 37)
                    picker.select(picker.$date.setMonth(actualMonth - 1), true);
                  else if (evt.keyCode === 38)
                    picker.select(picker.$date.setMonth(actualMonth - 4), true);
                  else if (evt.keyCode === 39)
                    picker.select(picker.$date.setMonth(actualMonth + 1), true);
                  else if (evt.keyCode === 40)
                    picker.select(picker.$date.setMonth(actualMonth + 4), true);
                }
              },
              {
                name: 'year',
                format: 'yyyy',
                split: 4,
                height: 250,
                steps: { year: 12 },
                update: function (date) {
                  if (parseInt(date.getUTCFullYear() / 20, 10) !== parseInt(viewDate.year / 20, 10)) {
                    angular.extend(viewDate, {
                      year: picker.$date.getUTCFullYear(),
                      month: picker.$date.getUTCMonth(),
                      date: picker.$date.getUTCDate()
                    });
                    picker.$build();
                  } else if (date.getUTCFullYear() !== viewDate.year) {
                    angular.extend(viewDate, {
                      year: picker.$date.getUTCFullYear(),
                      month: picker.$date.getUTCMonth(),
                      date: picker.$date.getUTCDate()
                    });
                    picker.$updateSelected();
                  }
                },
                build: function () {
                  var firstYear = viewDate.year - viewDate.year % (this.split * 3);
                  var years = [], year;
                  for (var i = 0; i < 12; i++) {
                    year = new Date(Date.UTC(firstYear + i, 0, 1));
                    years.push({
                      date: year,
                      label: dateFilter(year, this.format),
                      selected: picker.$isSelected(year),
                      disabled: this.isDisabled(year)
                    });
                  }
                  scope.title = years[0].label + '-' + years[years.length - 1].label;
                  scope.labels = false;
                  scope.rows = split(years, this.split);
                  scope.width = 100 / this.split;
                  scope.height = (this.height - 50) / scope.rows.length;
                },
                isSelected: function (date) {
                  return date.getUTCFullYear() === picker.$date.getUTCFullYear();
                },
                isDisabled: function (date) {
                  var lastDate = +new Date(Date.UTC(date.getUTCFullYear(), 1, 0));
                  return lastDate < options.minDate || date.getTime() > options.maxDate;
                },
                onKeyDown: function (evt) {
                  var actualYear = picker.$date.getUTCFullYear();
                  if (evt.keyCode === 37)
                    picker.select(picker.$date.setYear(actualYear - 1), true);
                  else if (evt.keyCode === 38)
                    picker.select(picker.$date.setYear(actualYear - 4), true);
                  else if (evt.keyCode === 39)
                    picker.select(picker.$date.setYear(actualYear + 1), true);
                  else if (evt.keyCode === 40)
                    picker.select(picker.$date.setYear(actualYear + 4), true);
                }
              }
            ];
          return {
            views: options.minView ? Array.prototype.slice.call(views, options.minView) : views,
            viewDate: viewDate
          };
        };
      }
    ];
  });
  angular.module('mgcrea.ngStrap.dropdown', ['mgcrea.ngStrap.tooltip']).run([
    '$templateCache',
    function ($templateCache) {
      var template = '' + '<ul tabindex="-1" class="dropdown-menu" role="menu">' + '<li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content" >' + '<a role="menuitem" tabindex="-1" href="{{item.href}}" ng-if="!item.divider" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a>' + '</li>' + '</ul>';
      $templateCache.put('$dropdown', template);
    }
  ]).provider('$dropdown', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        prefixClass: 'dropdown',
        placement: 'bottom-left',
        template: '$dropdown',
        trigger: 'click',
        container: false,
        keyboard: true,
        html: false,
        delay: 0
      };
    this.$get = [
      '$window',
      '$tooltip',
      function ($window, $tooltip) {
        var bodyEl = angular.element($window.document.body);
        var matchesSelector = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector;
        function DropdownFactory(element, config) {
          var $dropdown = {};
          var options = angular.extend({}, defaults, config);
          $dropdown = $tooltip(element, options);
          $dropdown.$onKeyDown = function (evt) {
            if (!/(38|40)/.test(evt.keyCode))
              return;
            evt.preventDefault();
            evt.stopPropagation();
            var items = angular.element($dropdown.$element[0].querySelectorAll('li:not(.divider) a'));
            if (!items.length)
              return;
            var index;
            angular.forEach(items, function (el, i) {
              if (matchesSelector && matchesSelector.call(el, ':focus'))
                index = i;
            });
            if (evt.keyCode === 38 && index > 0)
              index--;
            else if (evt.keyCode === 40 && index < items.length - 1)
              index++;
            else if (angular.isUndefined(index))
              index = 0;
            items.eq(index)[0].focus();
          };
          var show = $dropdown.show;
          $dropdown.show = function () {
            show();
            setTimeout(function () {
              options.keyboard && $dropdown.$element.on('keydown', $dropdown.$onKeyDown);
              bodyEl.on('click', onBodyClick);
            });
          };
          var hide = $dropdown.hide;
          $dropdown.hide = function () {
            options.keyboard && $dropdown.$element.off('keydown', $dropdown.$onKeyDown);
            bodyEl.off('click', onBodyClick);
            hide();
          };
          function onBodyClick(evt) {
            if (evt.target === element[0])
              return;
            return evt.target !== element[0] && $dropdown.hide();
          }
          return $dropdown;
        }
        return DropdownFactory;
      }
    ];
  }).directive('bsDropdown', [
    '$window',
    '$location',
    '$sce',
    '$dropdown',
    function ($window, $location, $sce, $dropdown) {
      return {
        restrict: 'EAC',
        scope: true,
        link: function postLink(scope, element, attr, transclusion) {
          var options = { scope: scope };
          angular.forEach([
            'placement',
            'container',
            'delay',
            'trigger',
            'keyboard',
            'html',
            'animation',
            'template'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          attr.bsDropdown && scope.$watch(attr.bsDropdown, function (newValue, oldValue) {
            scope.content = newValue;
          }, true);
          var dropdown = $dropdown(element, options);
          scope.$on('$destroy', function () {
            dropdown.destroy();
            options = null;
            dropdown = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.helpers.debounce', []).constant('debounce', function (func, wait, immediate) {
    var timeout, args, context, timestamp, result;
    return function () {
      context = this;
      args = arguments;
      timestamp = new Date();
      var later = function () {
        var last = new Date() - timestamp;
        if (last < wait) {
          timeout = setTimeout(later, wait - last);
        } else {
          timeout = null;
          if (!immediate)
            result = func.apply(context, args);
        }
      };
      var callNow = immediate && !timeout;
      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
      if (callNow)
        result = func.apply(context, args);
      return result;
    };
  }).constant('throttle', function (func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function () {
      previous = options.leading === false ? 0 : new Date();
      timeout = null;
      result = func.apply(context, args);
    };
    return function () {
      var now = new Date();
      if (!previous && options.leading === false)
        previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  });
  angular.module('mgcrea.ngStrap.helpers.dimensions', []).factory('dimensions', [
    '$document',
    '$window',
    function ($document, $window) {
      var jqLite = angular.element;
      var fn = {};
      var nodeName = fn.nodeName = function (element, name) {
          return element.nodeName && element.nodeName.toLowerCase() === name.toLowerCase();
        };
      fn.css = function (element, prop, extra) {
        var value;
        if (element.currentStyle) {
          value = element.currentStyle[prop];
        } else if (window.getComputedStyle) {
          value = window.getComputedStyle(element)[prop];
        } else {
          value = element.style[prop];
        }
        return extra === true ? parseFloat(value) || 0 : value;
      };
      fn.offset = function (element) {
        var boxRect = element.getBoundingClientRect();
        var docElement = element.ownerDocument;
        return {
          width: element.offsetWidth,
          height: element.offsetHeight,
          top: boxRect.top + (window.pageYOffset || docElement.documentElement.scrollTop) - (docElement.documentElement.clientTop || 0),
          left: boxRect.left + (window.pageXOffset || docElement.documentElement.scrollLeft) - (docElement.documentElement.clientLeft || 0)
        };
      };
      fn.position = function (element) {
        var offsetParentRect = {
            top: 0,
            left: 0
          }, offsetParentElement, offset;
        if (fn.css(element, 'position') === 'fixed') {
          offset = element.getBoundingClientRect();
        } else {
          offsetParentElement = offsetParent(element);
          offset = fn.offset(element);
          offset = fn.offset(element);
          if (!nodeName(offsetParentElement, 'html')) {
            offsetParentRect = fn.offset(offsetParentElement);
          }
          offsetParentRect.top += fn.css(offsetParentElement, 'borderTopWidth', true);
          offsetParentRect.left += fn.css(offsetParentElement, 'borderLeftWidth', true);
        }
        return {
          width: element.offsetWidth,
          height: element.offsetHeight,
          top: offset.top - offsetParentRect.top - fn.css(element, 'marginTop', true),
          left: offset.left - offsetParentRect.left - fn.css(element, 'marginLeft', true)
        };
      };
      var offsetParent = function offsetParentElement(element) {
        var docElement = element.ownerDocument;
        var offsetParent = element.offsetParent || docElement;
        if (nodeName(offsetParent, '#document'))
          return docElement.documentElement;
        while (offsetParent && !nodeName(offsetParent, 'html') && fn.css(offsetParent, 'position') === 'static') {
          offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || docElement.documentElement;
      };
      fn.height = function (element, outer) {
        var value = element.offsetHeight;
        if (outer) {
          value += fn.css(element, 'marginTop', true) + fn.css(element, 'marginBottom', true);
        } else {
          value -= fn.css(element, 'paddingTop', true) + fn.css(element, 'paddingBottom', true) + fn.css(element, 'borderTopWidth', true) + fn.css(element, 'borderBottomWidth', true);
        }
        return value;
      };
      fn.width = function (element, outer) {
        var value = element.offsetWidth;
        if (outer) {
          value += fn.css(element, 'marginLeft', true) + fn.css(element, 'marginRight', true);
        } else {
          value -= fn.css(element, 'paddingLeft', true) + fn.css(element, 'paddingRight', true) + fn.css(element, 'borderLeftWidth', true) + fn.css(element, 'borderRightWidth', true);
        }
        return value;
      };
      return fn;
    }
  ]);
  angular.module('mgcrea.ngStrap.helpers.parseOptions', []).provider('$parseOptions', function () {
    var defaults = this.defaults = { regexp: /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/ };
    this.$get = [
      '$parse',
      '$q',
      function ($parse, $q) {
        function ParseOptionsFactory(attr, config) {
          var $parseOptions = {};
          var options = angular.extend({}, defaults, config);
          $parseOptions.$values = [];
          var match, displayFn, valueName, keyName, groupByFn, valueFn, valuesFn;
          $parseOptions.init = function () {
            $parseOptions.$match = match = attr.match(options.regexp);
            displayFn = $parse(match[2] || match[1]), valueName = match[4] || match[6], keyName = match[5], groupByFn = $parse(match[3] || ''), valueFn = $parse(match[2] ? match[1] : valueName), valuesFn = $parse(match[7]);
          };
          $parseOptions.valuesFn = function (scope, controller) {
            return $q.when(valuesFn(scope, controller)).then(function (values) {
              $parseOptions.$values = values ? parseValues(values) : {};
              return $parseOptions.$values;
            });
          };
          function parseValues(values) {
            return values.map(function (match) {
              var locals = {}, label, value;
              locals[valueName] = match;
              label = displayFn(locals);
              value = valueFn(locals);
              if (angular.isObject(value))
                value = label;
              return {
                label: label,
                value: value
              };
            });
          }
          $parseOptions.init();
          return $parseOptions;
        }
        return ParseOptionsFactory;
      }
    ];
  });
  angular.module('mgcrea.ngStrap.modal', ['mgcrea.ngStrap.helpers.dimensions']).run([
    '$templateCache',
    '$modal',
    function ($templateCache, $modal) {
      var template = '' + '<div class="modal" tabindex="-1" role="dialog">' + '<div class="modal-dialog">' + '<div class="modal-content">' + '<div class="modal-header" ng-show="title">' + '<button type="button" class="close" ng-click="$hide()">&times;</button>' + '<h4 class="modal-title" ng-bind="title"></h4>' + '</div>' + '<div class="modal-body" ng-show="content" ng-bind="content"></div>' + '<div class="modal-footer">' + '<button type="button" class="btn btn-default" ng-click="$hide()">Close</button>' + '</div>' + '</div>' + '</div>' + '</div>';
      $templateCache.put('$modal', template);
    }
  ]).provider('$modal', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        prefixClass: 'modal',
        placement: 'top',
        template: '$modal',
        container: false,
        element: null,
        backdrop: true,
        keyboard: true,
        html: false,
        show: true
      };
    this.$get = [
      '$window',
      '$rootScope',
      '$compile',
      '$q',
      '$templateCache',
      '$http',
      '$animate',
      '$timeout',
      'dimensions',
      function ($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $timeout, dimensions) {
        var forEach = angular.forEach;
        var jqLite = angular.element;
        var trim = String.prototype.trim;
        var bodyElement = jqLite($window.document.body);
        var htmlReplaceRegExp = /ng-bind="/gi;
        var findElement = function (query, element) {
          return jqLite((element || document).querySelectorAll(query));
        };
        function ModalFactory(config) {
          var $modal = {};
          var options = angular.extend({}, defaults, config);
          $modal.$promise = $q.when($templateCache.get(options.template) || $http.get(options.template));
          var scope = $modal.$scope = options.scope && options.scope.$new() || $rootScope.$new();
          if (!options.element && !options.container) {
            options.container = 'body';
          }
          if (!options.scope) {
            forEach([
              'title',
              'content'
            ], function (key) {
              if (options[key])
                scope[key] = options[key];
            });
          }
          scope.$hide = function () {
            scope.$$postDigest(function () {
              $modal.hide();
            });
          };
          scope.$show = function () {
            scope.$$postDigest(function () {
              $modal.show();
            });
          };
          scope.$toggle = function () {
            scope.$$postDigest(function () {
              $modal.toggle();
            });
          };
          var modalLinker, modalElement;
          var backdropElement = jqLite('<div class="' + options.prefixClass + '-backdrop"/>');
          $modal.$promise.then(function (template) {
            if (angular.isObject(template))
              template = template.data;
            if (options.html)
              template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
            template = trim.apply(template);
            modalLinker = $compile(template);
            $modal.init();
          });
          $modal.init = function () {
            if (options.show) {
              scope.$$postDigest(function () {
                options.trigger === 'focus' ? element[0].focus() : $modal.show();
              });
            }
          };
          $modal.destroy = function () {
            if (modalElement) {
              modalElement.remove();
              modalElement = null;
            }
            if (backdropElement) {
              backdropElement.remove();
              backdropElement = null;
            }
            scope.$destroy();
          };
          $modal.show = function () {
            var parent = options.container ? findElement(options.container) : null;
            var after = options.container ? null : options.element;
            modalElement = $modal.$element = modalLinker(scope, function (clonedElement, scope) {
            });
            modalElement.css({ display: 'block' }).addClass(options.placement);
            if (options.animation) {
              if (options.backdrop) {
                backdropElement.addClass('animation-fade');
              }
              modalElement.addClass(options.animation);
            }
            if (options.backdrop) {
              $animate.enter(backdropElement, bodyElement, null, function () {
              });
            }
            $animate.enter(modalElement, parent, after, function () {
            });
            scope.$isShown = true;
            scope.$$phase || scope.$digest();
            $modal.focus();
            bodyElement.addClass(options.prefixClass + '-open');
            if (options.backdrop) {
              modalElement.on('click', hideOnBackdropClick);
              backdropElement.on('click', hideOnBackdropClick);
            }
            if (options.keyboard) {
              modalElement.on('keyup', $modal.$onKeyUp);
            }
          };
          $modal.hide = function () {
            $animate.leave(modalElement, function () {
              bodyElement.removeClass(options.prefixClass + '-open');
            });
            if (options.backdrop) {
              $animate.leave(backdropElement, function () {
              });
            }
            scope.$$phase || scope.$digest();
            scope.$isShown = false;
            if (options.backdrop) {
              modalElement.off('click', hideOnBackdropClick);
              backdropElement.off('click', hideOnBackdropClick);
            }
            if (options.keyboard) {
              modalElement.off('keyup', $modal.$onKeyUp);
            }
          };
          $modal.toggle = function () {
            scope.$isShown ? $modal.hide() : $modal.show();
          };
          $modal.focus = function () {
            modalElement[0].focus();
          };
          $modal.$onKeyUp = function (evt) {
            evt.which === 27 && $modal.hide();
          };
          function hideOnBackdropClick(evt) {
            if (evt.target !== evt.currentTarget)
              return;
            options.backdrop === 'static' ? $modal.focus() : $modal.hide();
          }
          return $modal;
        }
        return ModalFactory;
      }
    ];
  }).directive('bsModal', [
    '$window',
    '$location',
    '$sce',
    '$modal',
    function ($window, $location, $sce, $modal) {
      return {
        restrict: 'EAC',
        scope: true,
        link: function postLink(scope, element, attr, transclusion) {
          var options = {
              scope: scope,
              element: element,
              show: false
            };
          angular.forEach([
            'template',
            'placement',
            'backdrop',
            'keyboard',
            'html',
            'container',
            'animation'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          angular.forEach([
            'title',
            'content'
          ], function (key) {
            attr[key] && attr.$observe(key, function (newValue, oldValue) {
              scope[key] = newValue;
            });
          });
          attr.bsModal && scope.$watch(attr.bsModal, function (newValue, oldValue) {
            if (angular.isObject(newValue)) {
              angular.extend(scope, newValue);
            } else {
              scope.content = newValue;
            }
          }, true);
          var modal = $modal(options);
          element.on(attr.trigger || 'click', modal.toggle);
          scope.$on('$destroy', function () {
            modal.destroy();
            options = null;
            modal = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.navbar', []).provider('$navbar', function () {
    var defaults = this.defaults = {
        activeClass: 'active',
        routeAttr: 'data-match-route'
      };
    this.$get = function () {
      return { defaults: defaults };
    };
  }).directive('bsNavbar', [
    '$window',
    '$location',
    '$navbar',
    function ($window, $location, $navbar) {
      var defaults = $navbar.defaults;
      return {
        restrict: 'A',
        link: function postLink(scope, element, attr, controller) {
          var options = defaults;
          angular.forEach(Object.keys(defaults), function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          scope.$watch(function () {
            return $location.path();
          }, function (newValue, oldValue) {
            var liElements = element[0].querySelectorAll('li[' + options.routeAttr + ']');
            angular.forEach(liElements, function (li) {
              var liElement = angular.element(li);
              var pattern = liElement.attr(options.routeAttr);
              var regexp = new RegExp('^' + pattern.replace('/', '\\/') + '$', ['i']);
              if (regexp.test(newValue)) {
                liElement.addClass(options.activeClass);
              } else {
                liElement.removeClass(options.activeClass);
              }
            });
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.popover', ['mgcrea.ngStrap.tooltip']).run([
    '$templateCache',
    function ($templateCache) {
      var template = '' + '<div class="popover" tabindex="-1" ng-show="content" ng-class="{\'in\': $visible}">' + '<div class="arrow"></div>' + '<h3 class="popover-title" ng-bind="title" ng-show="title"></h3>' + '<div class="popover-content" ng-bind="content"></div>' + '</div>';
      $templateCache.put('$popover', template);
    }
  ]).provider('$popover', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        placement: 'right',
        template: '$popover',
        trigger: 'click',
        keyboard: true,
        html: false,
        title: '',
        content: '',
        delay: 0,
        container: false
      };
    this.$get = [
      '$tooltip',
      function ($tooltip) {
        function PopoverFactory(element, config) {
          var options = angular.extend({}, defaults, config);
          return $tooltip(element, options);
        }
        return PopoverFactory;
      }
    ];
  }).directive('bsPopover', [
    '$window',
    '$location',
    '$sce',
    '$popover',
    function ($window, $location, $sce, $popover) {
      var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
      return {
        restrict: 'EAC',
        scope: true,
        link: function postLink(scope, element, attr) {
          var options = { scope: scope };
          angular.forEach([
            'placement',
            'container',
            'delay',
            'trigger',
            'keyboard',
            'html',
            'animation',
            'template'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          angular.forEach([
            'title',
            'content'
          ], function (key) {
            attr[key] && attr.$observe(key, function (newValue, oldValue) {
              scope[key] = newValue;
              angular.isDefined(oldValue) && requestAnimationFrame(function () {
                popover && popover.$applyPlacement();
              });
            });
          });
          attr.bsPopover && scope.$watch(attr.bsPopover, function (newValue, oldValue) {
            if (angular.isObject(newValue)) {
              angular.extend(scope, newValue);
            } else {
              scope.content = newValue;
            }
            angular.isDefined(oldValue) && requestAnimationFrame(function () {
              popover && popover.$applyPlacement();
            });
          }, true);
          var popover = $popover(element, options);
          scope.$on('$destroy', function () {
            popover.destroy();
            options = null;
            popover = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.scrollspy', [
    'mgcrea.ngStrap.helpers.debounce',
    'mgcrea.ngStrap.helpers.dimensions'
  ]).provider('$scrollspy', function () {
    var spies = this.$$spies = {};
    var defaults = this.defaults = {
        debounce: 150,
        throttle: 100,
        offset: 100
      };
    this.$get = [
      '$window',
      '$document',
      '$rootScope',
      'dimensions',
      'debounce',
      'throttle',
      function ($window, $document, $rootScope, dimensions, debounce, throttle) {
        var windowEl = angular.element($window);
        var docEl = angular.element($document.prop('documentElement'));
        var bodyEl = angular.element($window.document.body);
        function nodeName(element, name) {
          return element[0].nodeName && element[0].nodeName.toLowerCase() === name.toLowerCase();
        }
        function ScrollSpyFactory(config) {
          var options = angular.extend({}, defaults, config);
          if (!options.element)
            options.element = bodyEl;
          var isWindowSpy = nodeName(options.element, 'body');
          var scrollEl = isWindowSpy ? windowEl : options.element;
          var scrollId = isWindowSpy ? 'window' : options.id;
          if (spies[scrollId]) {
            spies[scrollId].$$count++;
            return spies[scrollId];
          }
          var $scrollspy = {};
          var trackedElements = $scrollspy.$trackedElements = [];
          var sortedElements = [];
          var activeTarget;
          var debouncedCheckPosition;
          var throttledCheckPosition;
          var debouncedCheckOffsets;
          var viewportHeight;
          var scrollTop;
          $scrollspy.init = function () {
            this.$$count = 1;
            debouncedCheckPosition = debounce(this.checkPosition, options.debounce);
            throttledCheckPosition = throttle(this.checkPosition, options.throttle);
            scrollEl.on('click', this.checkPositionWithEventLoop);
            windowEl.on('resize', debouncedCheckPosition);
            scrollEl.on('scroll', throttledCheckPosition);
            debouncedCheckOffsets = debounce(this.checkOffsets, options.debounce);
            $rootScope.$on('$viewContentLoaded', debouncedCheckOffsets);
            $rootScope.$on('$includeContentLoaded', debouncedCheckOffsets);
            debouncedCheckOffsets();
            if (scrollId) {
              spies[scrollId] = $scrollspy;
            }
          };
          $scrollspy.destroy = function () {
            this.$$count--;
            if (this.$$count > 0) {
              return;
            }
            scrollEl.off('click', this.checkPositionWithEventLoop);
            windowEl.off('resize', debouncedCheckPosition);
            scrollEl.off('scroll', debouncedCheckPosition);
            $rootScope.$off('$viewContentLoaded', debouncedCheckOffsets);
            $rootScope.$off('$includeContentLoaded', debouncedCheckOffsets);
          };
          $scrollspy.checkPosition = function () {
            if (!sortedElements.length)
              return;
            scrollTop = (isWindowSpy ? $window.pageYOffset : scrollEl.prop('scrollTop')) || 0;
            viewportHeight = Math.max($window.innerHeight, docEl.prop('clientHeight'));
            if (scrollTop < sortedElements[0].offsetTop && activeTarget !== sortedElements[0].target) {
              return $scrollspy.$activateElement(sortedElements[0]);
            }
            for (var i = sortedElements.length; i--;) {
              if (angular.isUndefined(sortedElements[i].offsetTop) || sortedElements[i].offsetTop === null)
                continue;
              if (activeTarget === sortedElements[i].target)
                continue;
              if (scrollTop < sortedElements[i].offsetTop)
                continue;
              if (sortedElements[i + 1] && scrollTop > sortedElements[i + 1].offsetTop)
                continue;
              return $scrollspy.$activateElement(sortedElements[i]);
            }
          };
          $scrollspy.checkPositionWithEventLoop = function () {
            setTimeout(this.checkPosition, 1);
          };
          $scrollspy.$activateElement = function (element) {
            if (activeTarget) {
              var activeElement = $scrollspy.$getTrackedElement(activeTarget);
              if (activeElement) {
                activeElement.source.removeClass('active');
                if (nodeName(activeElement.source, 'li') && nodeName(activeElement.source.parent().parent(), 'li')) {
                  activeElement.source.parent().parent().removeClass('active');
                }
              }
            }
            activeTarget = element.target;
            element.source.addClass('active');
            if (nodeName(element.source, 'li') && nodeName(element.source.parent().parent(), 'li')) {
              element.source.parent().parent().addClass('active');
            }
          };
          $scrollspy.$getTrackedElement = function (target) {
            return trackedElements.filter(function (obj) {
              return obj.target === target;
            })[0];
          };
          $scrollspy.checkOffsets = function () {
            angular.forEach(trackedElements, function (trackedElement) {
              var targetElement = document.querySelector(trackedElement.target);
              trackedElement.offsetTop = targetElement ? dimensions.offset(targetElement).top : null;
              if (options.offset && trackedElement.offsetTop !== null)
                trackedElement.offsetTop -= options.offset * 1;
            });
            sortedElements = trackedElements.filter(function (el) {
              return el.offsetTop !== null;
            }).sort(function (a, b) {
              return a.offsetTop - b.offsetTop;
            });
            debouncedCheckPosition();
          };
          $scrollspy.trackElement = function (target, source) {
            trackedElements.push({
              target: target,
              source: source
            });
          };
          $scrollspy.untrackElement = function (target, source) {
            var toDelete;
            for (var i = trackedElements.length; i--;) {
              if (trackedElements[i].target === target && trackedElements[i].source === source) {
                toDelete = i;
                break;
              }
            }
            trackedElements = trackedElements.splice(toDelete, 1);
          };
          $scrollspy.activate = function (i) {
            trackedElements[i].addClass('active');
          };
          $scrollspy.init();
          return $scrollspy;
        }
        return ScrollSpyFactory;
      }
    ];
  }).directive('bsScrollspy', [
    '$rootScope',
    'debounce',
    'dimensions',
    '$scrollspy',
    function ($rootScope, debounce, dimensions, $scrollspy) {
      return {
        restrict: 'EAC',
        link: function postLink(scope, element, attr) {
          var options = { scope: scope };
          angular.forEach([
            'offset',
            'target'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          var scrollspy = $scrollspy(options);
          scrollspy.trackElement(options.target, element);
          scope.$on('$destroy', function () {
            scrollspy.untrackElement(options.target, element);
            scrollspy.destroy();
            options = null;
            scrollspy = null;
          });
        }
      };
    }
  ]).directive('bsScrollspyList', [
    '$rootScope',
    'debounce',
    'dimensions',
    '$scrollspy',
    function ($rootScope, debounce, dimensions, $scrollspy) {
      return {
        restrict: 'A',
        compile: function postLink(element, attr) {
          var children = element[0].querySelectorAll('li > a[href]');
          angular.forEach(children, function (child) {
            var childEl = angular.element(child);
            childEl.parent().attr('bs-scrollspy', '').attr('data-target', childEl.attr('href'));
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.select', [
    'mgcrea.ngStrap.tooltip',
    'mgcrea.ngStrap.helpers.parseOptions'
  ]).provider('$select', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        prefixClass: 'select',
        placement: 'bottom-left',
        template: 'select/select.tpl.html',
        trigger: 'focus',
        container: false,
        keyboard: true,
        html: false,
        delay: 0,
        multiple: false,
        sort: true,
        caretHtml: '&nbsp;<span class="caret"></span>',
        placeholder: 'Choose among the following...'
      };
    this.$get = [
      '$window',
      '$document',
      '$rootScope',
      '$tooltip',
      function ($window, $document, $rootScope, $tooltip) {
        var bodyEl = angular.element($window.document.body);
        var isTouch = 'createTouch' in $window.document;
        function SelectFactory(element, controller, config) {
          var $select = {};
          var options = angular.extend({}, defaults, config);
          $select = $tooltip(element, options);
          var parentScope = config.scope;
          var scope = $select.$scope;
          scope.$matches = [];
          scope.$activeIndex = 0;
          scope.$isMultiple = options.multiple;
          scope.$activate = function (index) {
            scope.$$postDigest(function () {
              $select.activate(index);
            });
          };
          scope.$select = function (index, evt) {
            scope.$$postDigest(function () {
              $select.select(index);
            });
          };
          scope.$isVisible = function () {
            return $select.$isVisible();
          };
          scope.$isActive = function (index) {
            return $select.$isActive(index);
          };
          $select.update = function (matches) {
            scope.$matches = matches;
            if (controller.$modelValue && matches.length) {
              if (options.multiple && angular.isArray(controller.$modelValue)) {
                scope.$activeIndex = controller.$modelValue.map(function (value) {
                  return $select.$getIndex(value);
                });
              } else {
                scope.$activeIndex = $select.$getIndex(controller.$modelValue);
              }
            } else if (scope.$activeIndex >= matches.length) {
              scope.$activeIndex = options.multiple ? [] : 0;
            }
          };
          $select.activate = function (index) {
            if (options.multiple) {
              scope.$activeIndex.sort();
              $select.$isActive(index) ? scope.$activeIndex.splice(scope.$activeIndex.indexOf(index), 1) : scope.$activeIndex.push(index);
              if (options.sort)
                scope.$activeIndex.sort();
            } else {
              scope.$activeIndex = index;
            }
            return scope.$activeIndex;
          };
          $select.select = function (index) {
            var value = scope.$matches[index].value;
            $select.activate(index);
            if (options.multiple) {
              controller.$setViewValue(scope.$activeIndex.map(function (index) {
                return scope.$matches[index].value;
              }));
            } else {
              controller.$setViewValue(value);
            }
            controller.$render();
            if (parentScope)
              parentScope.$digest();
            if (!options.multiple) {
              if (options.trigger === 'focus')
                element[0].blur();
              else if ($select.$isShown)
                $select.hide();
            }
            scope.$emit('$select.select', value, index);
          };
          $select.$isVisible = function () {
            if (!options.minLength || !controller) {
              return scope.$matches.length;
            }
            return scope.$matches.length && controller.$viewValue.length >= options.minLength;
          };
          $select.$isActive = function (index) {
            if (options.multiple) {
              return scope.$activeIndex.indexOf(index) !== -1;
            } else {
              return scope.$activeIndex === index;
            }
          };
          $select.$getIndex = function (value) {
            var l = scope.$matches.length, i = l;
            if (!l)
              return;
            for (i = l; i--;) {
              if (scope.$matches[i].value === value)
                break;
            }
            if (i < 0)
              return;
            return i;
          };
          $select.$onElementMouseDown = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if ($select.$isShown) {
              element[0].blur();
            } else {
              element[0].focus();
            }
          };
          $select.$onMouseDown = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
            if (isTouch) {
              var targetEl = angular.element(evt.target);
              targetEl.triggerHandler('click');
            }
          };
          $select.$onKeyDown = function (evt) {
            if (!/(38|40|13)/.test(evt.keyCode))
              return;
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.keyCode === 13) {
              return $select.select(scope.$activeIndex);
            }
            if (evt.keyCode === 38 && scope.$activeIndex > 0)
              scope.$activeIndex--;
            else if (evt.keyCode === 40 && scope.$activeIndex < scope.$matches.length - 1)
              scope.$activeIndex++;
            else if (angular.isUndefined(scope.$activeIndex))
              scope.$activeIndex = 0;
            scope.$digest();
          };
          var _init = $select.init;
          $select.init = function () {
            _init();
            element.on(isTouch ? 'touchstart' : 'mousedown', $select.$onElementMouseDown);
          };
          var _destroy = $select.destroy;
          $select.destroy = function () {
            _destroy();
            element.off(isTouch ? 'touchstart' : 'mousedown', $select.$onElementMouseDown);
          };
          var _show = $select.show;
          $select.show = function () {
            _show();
            if (options.multiple) {
              $select.$element.addClass('select-multiple');
            }
            setTimeout(function () {
              $select.$element.on(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
              if (options.keyboard) {
                element.on('keydown', $select.$onKeyDown);
              }
            });
          };
          var _hide = $select.hide;
          $select.hide = function () {
            $select.$element.off(isTouch ? 'touchstart' : 'mousedown', $select.$onMouseDown);
            if (options.keyboard) {
              element.off('keydown', $select.$onKeyDown);
            }
            _hide();
          };
          return $select;
        }
        SelectFactory.defaults = defaults;
        return SelectFactory;
      }
    ];
  }).directive('bsSelect', [
    '$window',
    '$parse',
    '$q',
    '$select',
    '$parseOptions',
    function ($window, $parse, $q, $select, $parseOptions) {
      var defaults = $select.defaults;
      return {
        restrict: 'EAC',
        require: 'ngModel',
        link: function postLink(scope, element, attr, controller) {
          var options = { scope: scope };
          angular.forEach([
            'placement',
            'container',
            'delay',
            'trigger',
            'keyboard',
            'html',
            'animation',
            'template',
            'placeholder',
            'multiple'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          var parsedOptions = $parseOptions(attr.ngOptions);
          var select = $select(element, controller, options);
          scope.$watch(parsedOptions.$match[7], function (newValue, oldValue) {
            parsedOptions.valuesFn(scope, controller).then(function (values) {
              select.update(values);
              controller.$render();
            });
          });
          controller.$render = function () {
            var selected, index;
            if (options.multiple && angular.isArray(controller.$modelValue)) {
              selected = controller.$modelValue.map(function (value) {
                index = select.$getIndex(value);
                return angular.isDefined(index) ? select.$scope.$matches[index].label : false;
              }).filter(angular.isDefined).join(', ');
            } else {
              index = select.$getIndex(controller.$modelValue);
              selected = angular.isDefined(index) ? select.$scope.$matches[index].label : false;
            }
            element.html((selected ? selected : attr.placeholder || defaults.placeholder) + defaults.caretHtml);
          };
          scope.$on('$destroy', function () {
            select.destroy();
            options = null;
            select = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.tab', []).run([
    '$templateCache',
    function ($templateCache) {
      $templateCache.put('$pane', '{{pane.content}}');
      var template = '<ul class="nav nav-tabs">' + '<li ng-repeat="pane in panes" ng-class="{active:$index==active}">' + '<a data-toggle="tab" ng-click="setActive($index, $event)" data-index="{{$index}}">{{pane.title}}</a>' + '</li>' + '</ul>' + '<div class="tab-content">' + '<div ng-repeat="pane in panes" class="tab-pane" ng-class="[$index==active?\'active\':\'\']" ng-include="pane.template || \'$pane\'"></div>' + '</div>';
      $templateCache.put('$tabs', template);
    }
  ]).provider('$tab', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        template: '$tabs'
      };
    this.$get = function () {
      return { defaults: defaults };
    };
  }).directive('bsTabs', [
    '$window',
    '$animate',
    '$tab',
    function ($window, $animate, $tab) {
      var defaults = $tab.defaults;
      return {
        restrict: 'EAC',
        scope: true,
        require: '?ngModel',
        templateUrl: function (element, attr) {
          return attr.template || defaults.template;
        },
        link: function postLink(scope, element, attr, controller) {
          var options = defaults;
          angular.forEach(['animation'], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          attr.bsTabs && scope.$watch(attr.bsTabs, function (newValue, oldValue) {
            scope.panes = newValue;
          }, true);
          element.addClass('tabs');
          if (options.animation) {
            element.addClass(options.animation);
          }
          scope.active = scope.activePane = 0;
          scope.setActive = function (index, ev) {
            scope.active = index;
            if (controller) {
              controller.$setViewValue(index);
            }
          };
          if (controller) {
            controller.$render = function () {
              scope.active = controller.$modelValue * 1;
            };
          }
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.tooltip', ['mgcrea.ngStrap.helpers.dimensions']).run([
    '$templateCache',
    function ($templateCache) {
      var template = '' + '<div class="tooltip" ng-show="title">' + '<div class="tooltip-arrow"></div>' + '<div class="tooltip-inner" custom-bind-html="title"></div>' + '</div>';
      $templateCache.put('$tooltip', template);
    }
  ]).provider('$tooltip', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        prefixClass: 'tooltip',
        container: false,
        placement: 'top',
        template: '$tooltip',
        trigger: 'hover focus',
        keyboard: false,
        html: false,
        show: false,
        title: '',
        type: '',
        delay: 0
      };
    this.$get = [
      '$window',
      '$rootScope',
      '$compile',
      '$q',
      '$templateCache',
      '$http',
      '$animate',
      '$timeout',
      'dimensions',
      function ($window, $rootScope, $compile, $q, $templateCache, $http, $animate, $timeout, dimensions) {
        var trim = String.prototype.trim;
        var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
        var htmlReplaceRegExp = /ng-bind="/gi;
        var findElement = function (query, element) {
          return angular.element((element || document).querySelectorAll(query));
        };
        function TooltipFactory(element, config) {
          var $tooltip = {};
          var options = $tooltip.$options = angular.extend({}, defaults, config);
          $tooltip.$promise = $q.when($templateCache.get(options.template) || $http.get(options.template));
          var scope = $tooltip.$scope = options.scope && options.scope.$new() || $rootScope.$new();
          if (options.delay && angular.isString(options.delay)) {
            options.delay = parseFloat(options.delay);
          }
          scope.$hide = function () {
            scope.$$postDigest(function () {
              $tooltip.hide();
            });
          };
          scope.$show = function () {
            scope.$$postDigest(function () {
              $tooltip.show();
            });
          };
          scope.$toggle = function () {
            scope.$$postDigest(function () {
              $tooltip.toggle();
            });
          };
          $tooltip.$isShown = false;
          var timeout, hoverState;
          var tipLinker, tipElement, tipTemplate;
          $tooltip.$promise.then(function (template) {
            if (angular.isObject(template))
              template = template.data;
            if (options.html)
              template = template.replace(htmlReplaceRegExp, 'ng-bind-html="');
            template = trim.apply(template);
            tipTemplate = template;
            tipLinker = $compile(template);
            $tooltip.init();
          });
          $tooltip.init = function () {
            if (options.delay && angular.isNumber(options.delay)) {
              options.delay = {
                show: options.delay,
                hide: options.delay
              };
            }
            var triggers = options.trigger.split(' ');
            for (var i = triggers.length; i--;) {
              var trigger = triggers[i];
              if (trigger === 'click') {
                element.on('click', $tooltip.toggle);
              } else if (trigger !== 'manual') {
                element.on(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
                element.on(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
              }
            }
            if (options.show) {
              scope.$$postDigest(function () {
                options.trigger === 'focus' ? element[0].focus() : $tooltip.show();
              });
            }
          };
          $tooltip.destroy = function () {
            var triggers = options.trigger.split(' ');
            for (var i = triggers.length; i--;) {
              var trigger = triggers[i];
              if (trigger === 'click') {
                element.off('click', $tooltip.toggle);
              } else if (trigger !== 'manual') {
                element.off(trigger === 'hover' ? 'mouseenter' : 'focus', $tooltip.enter);
                element.off(trigger === 'hover' ? 'mouseleave' : 'blur', $tooltip.leave);
              }
            }
            if (tipElement) {
              tipElement.remove();
              tipElement = null;
            }
            scope.$destroy();
          };
          $tooltip.enter = function () {
            clearTimeout(timeout);
            hoverState = 'in';
            if (!options.delay || !options.delay.show) {
              return $tooltip.show();
            }
            timeout = setTimeout(function () {
              if (hoverState === 'in')
                $tooltip.show();
            }, options.delay.show);
          };
          $tooltip.show = function () {
            var parent = options.container ? findElement(options.container) : null;
            var after = options.container ? null : element;
            tipElement = $tooltip.$element = tipLinker(scope, function (clonedElement, scope) {
            });
            tipElement.css({
              top: '0px',
              left: '0px',
              display: 'block'
            }).addClass(options.placement);
            if (options.animation)
              tipElement.addClass(options.animation);
            if (options.type)
              tipElement.addClass(options.prefixClass + '-' + options.type);
            $animate.enter(tipElement, parent, after, function () {
            });
            $tooltip.$isShown = true;
            scope.$$phase || scope.$digest();
            requestAnimationFrame($tooltip.$applyPlacement);
            if (options.keyboard) {
              if (options.trigger !== 'focus') {
                $tooltip.focus();
                tipElement.on('keyup', $tooltip.$onKeyUp);
              } else {
                element.on('keyup', $tooltip.$onFocusKeyUp);
              }
            }
          };
          $tooltip.leave = function () {
            clearTimeout(timeout);
            hoverState = 'out';
            if (!options.delay || !options.delay.hide) {
              return $tooltip.hide();
            }
            timeout = setTimeout(function () {
              if (hoverState === 'out') {
                $tooltip.hide();
              }
            }, options.delay.hide);
          };
          $tooltip.hide = function () {
            $animate.leave(tipElement, function () {
            });
            scope.$$phase || scope.$digest();
            $tooltip.$isShown = false;
            if (options.keyboard) {
              tipElement.off('keyup', $tooltip.$onKeyUp);
            }
          };
          $tooltip.toggle = function () {
            $tooltip.$isShown ? $tooltip.leave() : $tooltip.enter();
          };
          $tooltip.focus = function () {
            tipElement[0].focus();
          };
          $tooltip.$applyPlacement = function () {
            if (!tipElement)
              return;
            var elementPosition = getPosition();
            var tipWidth = tipElement.prop('offsetWidth'), tipHeight = tipElement.prop('offsetHeight');
            var tipPosition = getCalculatedOffset(options.placement, elementPosition, tipWidth, tipHeight);
            tipPosition.top += 'px';
            tipPosition.left += 'px';
            tipElement.css(tipPosition);
          };
          $tooltip.$onKeyUp = function (evt) {
            evt.which === 27 && $tooltip.hide();
          };
          $tooltip.$onFocusKeyUp = function (evt) {
            evt.which === 27 && element[0].blur();
          };
          function getPosition() {
            if (options.container === 'body') {
              return dimensions.offset(element[0]);
            } else {
              return dimensions.position(element[0]);
            }
          }
          function getCalculatedOffset(placement, position, actualWidth, actualHeight) {
            var offset;
            var split = placement.split('-');
            switch (split[0]) {
            case 'right':
              offset = {
                top: position.top + position.height / 2 - actualHeight / 2,
                left: position.left + position.width
              };
              break;
            case 'bottom':
              offset = {
                top: position.top + position.height,
                left: position.left + position.width / 2 - actualWidth / 2
              };
              break;
            case 'left':
              offset = {
                top: position.top + position.height / 2 - actualHeight / 2,
                left: position.left - actualWidth
              };
              break;
            default:
              offset = {
                top: position.top - actualHeight,
                left: position.left + position.width / 2 - actualWidth / 2
              };
              break;
            }
            if (!split[1]) {
              return offset;
            }
            if (split[0] === 'top' || split[0] === 'bottom') {
              switch (split[1]) {
              case 'left':
                offset.left = position.left;
                break;
              case 'right':
                offset.left = position.left + position.width - actualWidth;
              }
            } else if (split[0] === 'left' || split[0] === 'right') {
              switch (split[1]) {
              case 'top':
                offset.top = position.top - actualHeight;
                break;
              case 'bottom':
                offset.top = position.top + position.height;
              }
            }
            return offset;
          }
          return $tooltip;
        }
        return TooltipFactory;
      }
    ];
  }).directive('bsTooltip', [
    '$window',
    '$location',
    '$sce',
    '$tooltip',
    function ($window, $location, $sce, $tooltip) {
      var requestAnimationFrame = $window.requestAnimationFrame || $window.setTimeout;
      return {
        restrict: 'EAC',
        scope: true,
        link: function postLink(scope, element, attr, transclusion) {
          var options = { scope: scope };
          angular.forEach([
            'placement',
            'container',
            'delay',
            'trigger',
            'keyboard',
            'html',
            'animation',
            'type',
            'template'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          angular.forEach(['title'], function (key) {
            attr[key] && attr.$observe(key, function (newValue, oldValue) {
              scope[key] = newValue;
              angular.isDefined(oldValue) && requestAnimationFrame(function () {
                tooltip && tooltip.$applyPlacement();
              });
            });
          });
          attr.bsTooltip && scope.$watch(attr.bsTooltip, function (newValue, oldValue) {
            if (angular.isObject(newValue)) {
              angular.extend(scope, newValue);
            } else {
              scope.content = newValue;
            }
            angular.isDefined(oldValue) && requestAnimationFrame(function () {
              tooltip && tooltip.$applyPlacement();
            });
          }, true);
          var tooltip = $tooltip(element, options);
          scope.$on('$destroy', function () {
            tooltip.destroy();
            options = null;
            tooltip = null;
          });
        }
      };
    }
  ]);
  angular.module('mgcrea.ngStrap.typeahead', [
    'mgcrea.ngStrap.tooltip',
    'mgcrea.ngStrap.helpers.parseOptions'
  ]).run([
    '$templateCache',
    function ($templateCache) {
      var template = '' + '<ul tabindex="-1" class="typeahead dropdown-menu" ng-show="$isVisible()" role="select">' + '<li role="presentation" ng-repeat="match in $matches" ng-class="{active: $index == $activeIndex}">' + '<a role="menuitem" tabindex="-1" ng-click="$select($index, $event)" ng-bind="match.label"></a>' + '</li>' + '</ul>';
      $templateCache.put('$typeahead', template);
    }
  ]).provider('$typeahead', function () {
    var defaults = this.defaults = {
        animation: 'animation-fade',
        prefixClass: 'typeahead',
        placement: 'bottom-left',
        template: '$typeahead',
        trigger: 'focus',
        container: false,
        keyboard: true,
        html: false,
        delay: 0,
        minLength: 1,
        limit: 6
      };
    this.$get = [
      '$window',
      '$rootScope',
      '$tooltip',
      function ($window, $rootScope, $tooltip) {
        var bodyEl = angular.element($window.document.body);
        function TypeaheadFactory(element, config) {
          var $typeahead = {};
          var options = angular.extend({}, defaults, config);
          var controller = options.controller;
          $typeahead = $tooltip(element, options);
          var parentScope = config.scope;
          var scope = $typeahead.$scope;
          scope.$matches = [];
          scope.$activeIndex = 0;
          scope.$activate = function (index) {
            scope.$$postDigest(function () {
              $typeahead.activate(index);
            });
          };
          scope.$select = function (index, evt) {
            scope.$$postDigest(function () {
              $typeahead.select(index);
            });
          };
          scope.$isVisible = function () {
            return $typeahead.$isVisible();
          };
          $typeahead.update = function (matches) {
            scope.$matches = matches;
            if (scope.$activeIndex >= matches.length) {
              scope.$activeIndex = 0;
            }
          };
          $typeahead.activate = function (index) {
            scope.$activeIndex = index;
          };
          $typeahead.select = function (index) {
            var value = scope.$matches[index].value;
            if (controller) {
              controller.$setViewValue(value);
              controller.$render();
              if (parentScope)
                parentScope.$digest();
            }
            if (options.trigger === 'focus')
              element[0].blur();
            else if ($typeahead.$isShown)
              $typeahead.hide();
            scope.$activeIndex = 0;
            scope.$emit('$typeahead.select', value, index);
          };
          $typeahead.$isVisible = function () {
            if (!options.minLength || !controller) {
              return !!scope.$matches.length;
            }
            return scope.$matches.length && controller.$viewValue.length >= options.minLength;
          };
          $typeahead.$onMouseDown = function (evt) {
            evt.preventDefault();
            evt.stopPropagation();
          };
          $typeahead.$onKeyDown = function (evt) {
            if (!/(38|40|13)/.test(evt.keyCode))
              return;
            evt.preventDefault();
            evt.stopPropagation();
            if (evt.keyCode === 13) {
              return $typeahead.select(scope.$activeIndex);
            }
            if (evt.keyCode === 38 && scope.$activeIndex > 0)
              scope.$activeIndex--;
            else if (evt.keyCode === 40 && scope.$activeIndex < scope.$matches.length - 1)
              scope.$activeIndex++;
            else if (angular.isUndefined(scope.$activeIndex))
              scope.$activeIndex = 0;
            scope.$digest();
          };
          var show = $typeahead.show;
          $typeahead.show = function () {
            show();
            setTimeout(function () {
              $typeahead.$element.on('mousedown', $typeahead.$onMouseDown);
              if (options.keyboard) {
                element.on('keydown', $typeahead.$onKeyDown);
              }
            });
          };
          var hide = $typeahead.hide;
          $typeahead.hide = function () {
            $typeahead.$element.off('mousedown', $typeahead.$onMouseDown);
            if (options.keyboard) {
              element.off('keydown', $typeahead.$onKeyDown);
            }
            hide();
          };
          return $typeahead;
        }
        TypeaheadFactory.defaults = defaults;
        return TypeaheadFactory;
      }
    ];
  }).directive('bsTypeahead', [
    '$window',
    '$parse',
    '$q',
    '$typeahead',
    '$parseOptions',
    function ($window, $parse, $q, $typeahead, $parseOptions) {
      var defaults = $typeahead.defaults;
      return {
        restrict: 'EAC',
        require: 'ngModel',
        link: function postLink(scope, element, attr, controller) {
          var options = {
              scope: scope,
              controller: controller
            };
          angular.forEach([
            'placement',
            'container',
            'delay',
            'trigger',
            'keyboard',
            'html',
            'animation',
            'template',
            'limit',
            'minLength'
          ], function (key) {
            if (angular.isDefined(attr[key]))
              options[key] = attr[key];
          });
          var limit = options.limit || defaults.limit;
          var parsedOptions = $parseOptions(attr.ngOptions + ' | filter:$viewValue |\xa0limitTo:' + limit);
          var typeahead = $typeahead(element, options);
          scope.$watch(attr.ngModel, function (newValue, oldValue) {
            parsedOptions.valuesFn(scope, controller).then(function (values) {
              if (values.length > limit)
                values = values.slice(0, limit);
              typeahead.update(values);
            });
          });
          scope.$on('$destroy', function () {
            typeahead.destroy();
            options = null;
            typeahead = null;
          });
        }
      };
    }
  ]);
}(window, document));
angular.module("ngUpload",[]).directive("uploadSubmit",["$parse",function(t){function e(t,a){t=angular.element(t);var n=t.parent();return a=a.toLowerCase(),n&&n[0].tagName.toLowerCase()===a?n:n?e(n,a):null}return{restrict:"AC",link:function(a,n,o){var r={};r.enableControls=o.uploadOptionsEnableControls,o.hasOwnProperty("uploadOptionsConvertHidden")&&(r.convertHidden="false"!=o.uploadOptionsConvertHidden),o.hasOwnProperty("uploadOptionBeforeSubmit")&&(r.beforeSubmitCallback=o.uploadOptionBeforeSubmit);var i=e(n,"form"),l=t(o.uploadSubmit);if(!angular.isFunction(l)){var d="The expression on the ngUpload directive does not point to a valid function.";throw d+"\n"}n.bind("click",function(t){if(t&&t.preventDefault(),!n.attr("disabled")){if(void 0!==r.beforeSubmitCallback){var e=a.$apply(function(){return a[r.beforeSubmitCallback](a,t)});if(e===!1)return!1}var o=angular.element("<iframe id='upload_iframe' name='upload_iframe' border='0' width='0' height='0' style='width: 0px; height: 0px; border: none; display: none' />");i.parent().append(o),o.bind("load",function(){var t=o[0],e=t.contentDocument||t.contentWindow.document,r=e.body.innerText||e.body.textContent;try{r=JSON.parse(r)}catch(i){console&&console.log("WARN: XHR response is not valid json")}a.$$phase?l(a,{content:r,completed:!0}):a.$apply(function(){l(a,{content:r,completed:!0})}),""!==r&&setTimeout(function(){o.remove()},250),n.attr("disabled",null),n.attr("title","Click to start upload.")}),a.$$phase?l(a,{content:"Please wait...",completed:!1}):a.$apply(function(){l(a,{content:"Please wait...",completed:!1})});var d=!0;r.enableControls||(n.attr("disabled","disabled"),d=!1),n.attr("title",(d?"[ENABLED]: ":"[DISABLED]: ")+"Uploading, please wait..."),r.convertHidden&&angular.forEach(i.find("input"),function(t){t=angular.element(t),t.attr("ng-model")&&t.attr("type")&&"hidden"==t.attr("type")&&t.attr("value",a.$eval(t.attr("ng-model")))}),i[0].submit()}}).attr("title","Click to start upload.")}}}]).directive("ngUpload",["$parse","$document",function(t,e){function a(t){var a,n=e.find("head");return angular.forEach(n.find("meta"),function(e){e.getAttribute("name")===t&&(a=e)}),angular.element(a)}return{restrict:"AC",link:function(t,e,n){var o={};n.hasOwnProperty("uploadOptionsEnableRailsCsrf")&&(o.enableRailsCsrf="false"!=n.uploadOptionsEnableRailsCsrf),e.attr("target","upload_iframe"),e.attr("method","post");var r=-1==e.attr("action").indexOf("?")?"?":"&";if(e.attr("action",e.attr("action")+r+"_t="+(new Date).getTime()),e.attr("enctype","multipart/form-data"),e.attr("encoding","multipart/form-data"),o.enableRailsCsrf){var i=angular.element("<input />");i.attr("class","upload-csrf-token"),i.attr("type","hidden"),i.attr("name",a("csrf-param").attr("content")),i.val(a("csrf-token").attr("content")),e.append(i)}}}}]);
/*! URI.js v1.11.2 http://medialize.github.com/URI.js/ */
/* build contains: IPv6.js, punycode.js, SecondLevelDomains.js, URI.js, URITemplate.js */
(function(f,l){"object"===typeof exports?module.exports=l():"function"===typeof define&&define.amd?define(l):f.IPv6=l(f)})(this,function(f){var l=f&&f.IPv6;return{best:function(h){h=h.toLowerCase().split(":");var f=h.length,d=8;""===h[0]&&""===h[1]&&""===h[2]?(h.shift(),h.shift()):""===h[0]&&""===h[1]?h.shift():""===h[f-1]&&""===h[f-2]&&h.pop();f=h.length;-1!==h[f-1].indexOf(".")&&(d=7);var q;for(q=0;q<f&&""!==h[q];q++);if(q<d)for(h.splice(q,1,"0000");h.length<d;)h.splice(q,0,"0000");for(q=0;q<d;q++){for(var f=
h[q].split(""),l=0;3>l;l++)if("0"===f[0]&&1<f.length)f.splice(0,1);else break;h[q]=f.join("")}var f=-1,n=l=0,e=-1,u=!1;for(q=0;q<d;q++)u?"0"===h[q]?n+=1:(u=!1,n>l&&(f=e,l=n)):"0"==h[q]&&(u=!0,e=q,n=1);n>l&&(f=e,l=n);1<l&&h.splice(f,l,"");f=h.length;d="";""===h[0]&&(beststr=":");for(q=0;q<f;q++){d+=h[q];if(q===f-1)break;d+=":"}""===h[f-1]&&(d+=":");return d},noConflict:function(){f.IPv6===this&&(f.IPv6=l);return this}}});
(function(f){function l(a){throw RangeError(c[a]);}function h(a,b){for(var c=a.length;c--;)a[c]=b(a[c]);return a}function p(a){for(var b=[],c=0,d=a.length,k,g;c<d;)k=a.charCodeAt(c++),55296<=k&&56319>=k&&c<d?(g=a.charCodeAt(c++),56320==(g&64512)?b.push(((k&1023)<<10)+(g&1023)+65536):(b.push(k),c--)):b.push(k);return b}function d(a){return h(a,function(a){var b="";65535<a&&(a-=65536,b+=x(a>>>10&1023|55296),a=56320|a&1023);return b+=x(a)}).join("")}function q(a,b,c){var d=0;a=c?B(a/y):a>>1;for(a+=B(a/
b);a>k*m>>1;d+=g)a=B(a/k);return B(d+(k+1)*a/(a+s))}function A(a){var b=[],c=a.length,k,e=0,f=D,h=w,x,u,v,t,s;x=a.lastIndexOf(E);0>x&&(x=0);for(u=0;u<x;++u)128<=a.charCodeAt(u)&&l("not-basic"),b.push(a.charCodeAt(u));for(x=0<x?x+1:0;x<c;){u=e;k=1;for(v=g;;v+=g){x>=c&&l("invalid-input");t=a.charCodeAt(x++);t=10>t-48?t-22:26>t-65?t-65:26>t-97?t-97:g;(t>=g||t>B((C-e)/k))&&l("overflow");e+=t*k;s=v<=h?r:v>=h+m?m:v-h;if(t<s)break;t=g-s;k>B(C/t)&&l("overflow");k*=t}k=b.length+1;h=q(e-u,k,0==u);B(e/k)>C-
f&&l("overflow");f+=B(e/k);e%=k;b.splice(e++,0,f)}return d(b)}function n(a){var b,c,d,k,e,f,h,u,t,v=[],s,z,n;a=p(a);s=a.length;b=D;c=0;e=w;for(f=0;f<s;++f)t=a[f],128>t&&v.push(x(t));for((d=k=v.length)&&v.push(E);d<s;){h=C;for(f=0;f<s;++f)t=a[f],t>=b&&t<h&&(h=t);z=d+1;h-b>B((C-c)/z)&&l("overflow");c+=(h-b)*z;b=h;for(f=0;f<s;++f)if(t=a[f],t<b&&++c>C&&l("overflow"),t==b){u=c;for(h=g;;h+=g){t=h<=e?r:h>=e+m?m:h-e;if(u<t)break;n=u-t;u=g-t;v.push(x(t+n%u+22+75*(26>t+n%u)-0));u=B(n/u)}v.push(x(u+22+75*(26>
u)-0));e=q(c,z,d==k);c=0;++d}++c;++b}return v.join("")}var e="object"==typeof exports&&exports,u="object"==typeof module&&module&&module.exports==e&&module,v="object"==typeof global&&global;if(v.global===v||v.window===v)f=v;var z,C=2147483647,g=36,r=1,m=26,s=38,y=700,w=72,D=128,E="-",F=/^xn--/,a=/[^ -~]/,b=/\x2E|\u3002|\uFF0E|\uFF61/g,c={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},k=g-r,B=
Math.floor,x=String.fromCharCode,t;z={version:"1.2.3",ucs2:{decode:p,encode:d},decode:A,encode:n,toASCII:function(c){return h(c.split(b),function(b){return a.test(b)?"xn--"+n(b):b}).join(".")},toUnicode:function(a){return h(a.split(b),function(a){return F.test(a)?A(a.slice(4).toLowerCase()):a}).join(".")}};if("function"==typeof define&&"object"==typeof define.amd&&define.amd)define(function(){return z});else if(e&&!e.nodeType)if(u)u.exports=z;else for(t in z)z.hasOwnProperty(t)&&(e[t]=z[t]);else f.punycode=
z})(this);
(function(f,l){"object"===typeof exports?module.exports=l():"function"===typeof define&&define.amd?define(l):f.SecondLevelDomains=l(f)})(this,function(f){var l=f&&f.SecondLevelDomains,h=Object.prototype.hasOwnProperty,p={list:{ac:"com|gov|mil|net|org",ae:"ac|co|gov|mil|name|net|org|pro|sch",af:"com|edu|gov|net|org",al:"com|edu|gov|mil|net|org",ao:"co|ed|gv|it|og|pb",ar:"com|edu|gob|gov|int|mil|net|org|tur",at:"ac|co|gv|or",au:"asn|com|csiro|edu|gov|id|net|org",ba:"co|com|edu|gov|mil|net|org|rs|unbi|unmo|unsa|untz|unze",bb:"biz|co|com|edu|gov|info|net|org|store|tv",
bh:"biz|cc|com|edu|gov|info|net|org",bn:"com|edu|gov|net|org",bo:"com|edu|gob|gov|int|mil|net|org|tv",br:"adm|adv|agr|am|arq|art|ato|b|bio|blog|bmd|cim|cng|cnt|com|coop|ecn|edu|eng|esp|etc|eti|far|flog|fm|fnd|fot|fst|g12|ggf|gov|imb|ind|inf|jor|jus|lel|mat|med|mil|mus|net|nom|not|ntr|odo|org|ppg|pro|psc|psi|qsl|rec|slg|srv|tmp|trd|tur|tv|vet|vlog|wiki|zlg",bs:"com|edu|gov|net|org",bz:"du|et|om|ov|rg",ca:"ab|bc|mb|nb|nf|nl|ns|nt|nu|on|pe|qc|sk|yk",ck:"biz|co|edu|gen|gov|info|net|org",cn:"ac|ah|bj|com|cq|edu|fj|gd|gov|gs|gx|gz|ha|hb|he|hi|hl|hn|jl|js|jx|ln|mil|net|nm|nx|org|qh|sc|sd|sh|sn|sx|tj|tw|xj|xz|yn|zj",
co:"com|edu|gov|mil|net|nom|org",cr:"ac|c|co|ed|fi|go|or|sa",cy:"ac|biz|com|ekloges|gov|ltd|name|net|org|parliament|press|pro|tm","do":"art|com|edu|gob|gov|mil|net|org|sld|web",dz:"art|asso|com|edu|gov|net|org|pol",ec:"com|edu|fin|gov|info|med|mil|net|org|pro",eg:"com|edu|eun|gov|mil|name|net|org|sci",er:"com|edu|gov|ind|mil|net|org|rochest|w",es:"com|edu|gob|nom|org",et:"biz|com|edu|gov|info|name|net|org",fj:"ac|biz|com|info|mil|name|net|org|pro",fk:"ac|co|gov|net|nom|org",fr:"asso|com|f|gouv|nom|prd|presse|tm",
gg:"co|net|org",gh:"com|edu|gov|mil|org",gn:"ac|com|gov|net|org",gr:"com|edu|gov|mil|net|org",gt:"com|edu|gob|ind|mil|net|org",gu:"com|edu|gov|net|org",hk:"com|edu|gov|idv|net|org",id:"ac|co|go|mil|net|or|sch|web",il:"ac|co|gov|idf|k12|muni|net|org","in":"ac|co|edu|ernet|firm|gen|gov|i|ind|mil|net|nic|org|res",iq:"com|edu|gov|i|mil|net|org",ir:"ac|co|dnssec|gov|i|id|net|org|sch",it:"edu|gov",je:"co|net|org",jo:"com|edu|gov|mil|name|net|org|sch",jp:"ac|ad|co|ed|go|gr|lg|ne|or",ke:"ac|co|go|info|me|mobi|ne|or|sc",
kh:"com|edu|gov|mil|net|org|per",ki:"biz|com|de|edu|gov|info|mob|net|org|tel",km:"asso|com|coop|edu|gouv|k|medecin|mil|nom|notaires|pharmaciens|presse|tm|veterinaire",kn:"edu|gov|net|org",kr:"ac|busan|chungbuk|chungnam|co|daegu|daejeon|es|gangwon|go|gwangju|gyeongbuk|gyeonggi|gyeongnam|hs|incheon|jeju|jeonbuk|jeonnam|k|kg|mil|ms|ne|or|pe|re|sc|seoul|ulsan",kw:"com|edu|gov|net|org",ky:"com|edu|gov|net|org",kz:"com|edu|gov|mil|net|org",lb:"com|edu|gov|net|org",lk:"assn|com|edu|gov|grp|hotel|int|ltd|net|ngo|org|sch|soc|web",
lr:"com|edu|gov|net|org",lv:"asn|com|conf|edu|gov|id|mil|net|org",ly:"com|edu|gov|id|med|net|org|plc|sch",ma:"ac|co|gov|m|net|org|press",mc:"asso|tm",me:"ac|co|edu|gov|its|net|org|priv",mg:"com|edu|gov|mil|nom|org|prd|tm",mk:"com|edu|gov|inf|name|net|org|pro",ml:"com|edu|gov|net|org|presse",mn:"edu|gov|org",mo:"com|edu|gov|net|org",mt:"com|edu|gov|net|org",mv:"aero|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro",mw:"ac|co|com|coop|edu|gov|int|museum|net|org",mx:"com|edu|gob|net|org",my:"com|edu|gov|mil|name|net|org|sch",
nf:"arts|com|firm|info|net|other|per|rec|store|web",ng:"biz|com|edu|gov|mil|mobi|name|net|org|sch",ni:"ac|co|com|edu|gob|mil|net|nom|org",np:"com|edu|gov|mil|net|org",nr:"biz|com|edu|gov|info|net|org",om:"ac|biz|co|com|edu|gov|med|mil|museum|net|org|pro|sch",pe:"com|edu|gob|mil|net|nom|org|sld",ph:"com|edu|gov|i|mil|net|ngo|org",pk:"biz|com|edu|fam|gob|gok|gon|gop|gos|gov|net|org|web",pl:"art|bialystok|biz|com|edu|gda|gdansk|gorzow|gov|info|katowice|krakow|lodz|lublin|mil|net|ngo|olsztyn|org|poznan|pwr|radom|slupsk|szczecin|torun|warszawa|waw|wroc|wroclaw|zgora",
pr:"ac|biz|com|edu|est|gov|info|isla|name|net|org|pro|prof",ps:"com|edu|gov|net|org|plo|sec",pw:"belau|co|ed|go|ne|or",ro:"arts|com|firm|info|nom|nt|org|rec|store|tm|www",rs:"ac|co|edu|gov|in|org",sb:"com|edu|gov|net|org",sc:"com|edu|gov|net|org",sh:"co|com|edu|gov|net|nom|org",sl:"com|edu|gov|net|org",st:"co|com|consulado|edu|embaixada|gov|mil|net|org|principe|saotome|store",sv:"com|edu|gob|org|red",sz:"ac|co|org",tr:"av|bbs|bel|biz|com|dr|edu|gen|gov|info|k12|name|net|org|pol|tel|tsk|tv|web",tt:"aero|biz|cat|co|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel",
tw:"club|com|ebiz|edu|game|gov|idv|mil|net|org",mu:"ac|co|com|gov|net|or|org",mz:"ac|co|edu|gov|org",na:"co|com",nz:"ac|co|cri|geek|gen|govt|health|iwi|maori|mil|net|org|parliament|school",pa:"abo|ac|com|edu|gob|ing|med|net|nom|org|sld",pt:"com|edu|gov|int|net|nome|org|publ",py:"com|edu|gov|mil|net|org",qa:"com|edu|gov|mil|net|org",re:"asso|com|nom",ru:"ac|adygeya|altai|amur|arkhangelsk|astrakhan|bashkiria|belgorod|bir|bryansk|buryatia|cbg|chel|chelyabinsk|chita|chukotka|chuvashia|com|dagestan|e-burg|edu|gov|grozny|int|irkutsk|ivanovo|izhevsk|jar|joshkar-ola|kalmykia|kaluga|kamchatka|karelia|kazan|kchr|kemerovo|khabarovsk|khakassia|khv|kirov|koenig|komi|kostroma|kranoyarsk|kuban|kurgan|kursk|lipetsk|magadan|mari|mari-el|marine|mil|mordovia|mosreg|msk|murmansk|nalchik|net|nnov|nov|novosibirsk|nsk|omsk|orenburg|org|oryol|penza|perm|pp|pskov|ptz|rnd|ryazan|sakhalin|samara|saratov|simbirsk|smolensk|spb|stavropol|stv|surgut|tambov|tatarstan|tom|tomsk|tsaritsyn|tsk|tula|tuva|tver|tyumen|udm|udmurtia|ulan-ude|vladikavkaz|vladimir|vladivostok|volgograd|vologda|voronezh|vrn|vyatka|yakutia|yamal|yekaterinburg|yuzhno-sakhalinsk",
rw:"ac|co|com|edu|gouv|gov|int|mil|net",sa:"com|edu|gov|med|net|org|pub|sch",sd:"com|edu|gov|info|med|net|org|tv",se:"a|ac|b|bd|c|d|e|f|g|h|i|k|l|m|n|o|org|p|parti|pp|press|r|s|t|tm|u|w|x|y|z",sg:"com|edu|gov|idn|net|org|per",sn:"art|com|edu|gouv|org|perso|univ",sy:"com|edu|gov|mil|net|news|org",th:"ac|co|go|in|mi|net|or",tj:"ac|biz|co|com|edu|go|gov|info|int|mil|name|net|nic|org|test|web",tn:"agrinet|com|defense|edunet|ens|fin|gov|ind|info|intl|mincom|nat|net|org|perso|rnrt|rns|rnu|tourism",tz:"ac|co|go|ne|or",
ua:"biz|cherkassy|chernigov|chernovtsy|ck|cn|co|com|crimea|cv|dn|dnepropetrovsk|donetsk|dp|edu|gov|if|in|ivano-frankivsk|kh|kharkov|kherson|khmelnitskiy|kiev|kirovograd|km|kr|ks|kv|lg|lugansk|lutsk|lviv|me|mk|net|nikolaev|od|odessa|org|pl|poltava|pp|rovno|rv|sebastopol|sumy|te|ternopil|uzhgorod|vinnica|vn|zaporizhzhe|zhitomir|zp|zt",ug:"ac|co|go|ne|or|org|sc",uk:"ac|bl|british-library|co|cym|gov|govt|icnet|jet|lea|ltd|me|mil|mod|national-library-scotland|nel|net|nhs|nic|nls|org|orgn|parliament|plc|police|sch|scot|soc",
us:"dni|fed|isa|kids|nsn",uy:"com|edu|gub|mil|net|org",ve:"co|com|edu|gob|info|mil|net|org|web",vi:"co|com|k12|net|org",vn:"ac|biz|com|edu|gov|health|info|int|name|net|org|pro",ye:"co|com|gov|ltd|me|net|org|plc",yu:"ac|co|edu|gov|org",za:"ac|agric|alt|bourse|city|co|cybernet|db|edu|gov|grondar|iaccess|imt|inca|landesign|law|mil|net|ngo|nis|nom|olivetti|org|pix|school|tm|web",zm:"ac|co|com|edu|gov|net|org|sch"},has_expression:null,is_expression:null,has:function(d){return!!d.match(p.has_expression)},
is:function(d){return!!d.match(p.is_expression)},get:function(d){return(d=d.match(p.has_expression))&&d[1]||null},noConflict:function(){f.SecondLevelDomains===this&&(f.SecondLevelDomains=l);return this},init:function(){var d="",f;for(f in p.list)h.call(p.list,f)&&(d+="|("+("("+p.list[f]+")."+f)+")");p.has_expression=RegExp("\\.("+d.substr(1)+")$","i");p.is_expression=RegExp("^("+d.substr(1)+")$","i")}};p.init();return p});
(function(f,l){"object"===typeof exports?module.exports=l(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],l):f.URI=l(f.punycode,f.IPv6,f.SecondLevelDomains,f)})(this,function(f,l,h,p){function d(a,b){if(!(this instanceof d))return new d(a,b);void 0===a&&(a="undefined"!==typeof location?location.href+"":"");this.href(a);return void 0!==b?this.absoluteTo(b):this}function q(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,
"\\$1")}function A(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function n(a){return"Array"===A(a)}function e(a,b){var c,d;if(n(b)){c=0;for(d=b.length;c<d;c++)if(!e(a,b[c]))return!1;return!0}var g=A(b);c=0;for(d=a.length;c<d;c++)if("RegExp"===g){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function u(a,b){if(!n(a)||!n(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;
return!0}function v(a){return escape(a)}function z(a){return encodeURIComponent(a).replace(/[!'()*]/g,v).replace(/\*/g,"%2A")}var C=p&&p.URI,g=d.prototype,r=Object.prototype.hasOwnProperty;d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:d.duplicateQueryParameters,escapeQuerySpace:d.escapeQuerySpace}};d.duplicateQueryParameters=!1;d.escapeQuerySpace=!0;d.protocol_expression=/^[a-z][a-z0-9-+-]*$/i;
d.idn_expression=/[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.defaultPorts={http:"80",https:"443",ftp:"21",gopher:"70",ws:"80",wss:"443"};d.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;d.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",
iframe:"src",embed:"src",source:"src",track:"src",input:"src"};d.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();return"input"===b&&"image"!==a.type?void 0:d.domAttributes[b]}};d.encode=z;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=unescape};d.unicode=function(){d.encode=z;d.decode=decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=",
"%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}}};d.encodeQuery=function(a,b){var c=d.encode(a+"");return b?c.replace(/%20/g,"+"):c};d.decodeQuery=function(a,b){a+="";try{return d.decode(b?
a.replace(/\+/g,"%20"):a)}catch(c){return a}};d.recodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=d.encodePathSegment(d.decode(a[b]));return a.join("/")};d.decodePath=function(a){a=(a+"").split("/");for(var b=0,c=a.length;b<c;b++)a[b]=d.decodePathSegment(a[b]);return a.join("/")};var m={encode:"encode",decode:"decode"},s,y=function(a,b){return function(c){return d[b](c+"").replace(d.characters[a][b].expression,function(c){return d.characters[a][b].map[c]})}};for(s in m)d[s+
"PathSegment"]=y("pathname",m[s]);d.encodeReserved=y("reserved","encode");d.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=null,a=a.substring(2),a=d.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"file"===b.protocol?a=a.substring(c+
3):"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=d.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){var c=a.indexOf("/"),d;-1===c&&(c=a.length);"["===a.charAt(0)?(d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,c)||null):a.indexOf(":")!==a.lastIndexOf(":")?(b.hostname=a.substring(0,c)||null,b.port=null):(d=a.substring(0,c).split(":"),b.hostname=d[0]||null,b.port=d[1]||null);b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,
a="/"+a);return a.substring(c)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a.indexOf("/"),k=-1<c?a.lastIndexOf("@",c):a.indexOf("@");-1<k&&(-1===c||k<c)?(c=a.substring(0,k).split(":"),b.username=c[0]?d.decode(c[0]):null,c.shift(),b.password=c[0]?d.decode(c.join(":")):null,a=a.substring(k+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,
"");if(!a)return{};for(var c={},k=a.split("&"),g=k.length,e,f,h=0;h<g;h++)e=k[h].split("="),f=d.decodeQuery(e.shift(),b),e=e.length?d.decodeQuery(e.join("="),b):null,c[f]?("string"===typeof c[f]&&(c[f]=[c[f]]),c[f].push(e)):c[f]=e;return c};d.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+=
"?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)d.ip6_expression.test(a.hostname)?b=a.port?b+("["+a.hostname+"]:"+a.port):b+a.hostname:(b+=a.hostname,a.port&&(b+=":"+a.port));else return"";return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username),a.password&&(b+=":"+d.encode(a.password)),b+="@");return b};d.buildQuery=
function(a,b,c){var k="",g,e,f,h;for(e in a)if(r.call(a,e)&&e)if(n(a[e]))for(g={},f=0,h=a[e].length;f<h;f++)void 0!==a[e][f]&&void 0===g[a[e][f]+""]&&(k+="&"+d.buildQueryParameter(e,a[e][f],c),!0!==b&&(g[a[e][f]+""]=!0));else void 0!==a[e]&&(k+="&"+d.buildQueryParameter(e,a[e],c));return k.substring(1)};d.buildQueryParameter=function(a,b,c){return d.encodeQuery(a,c)+(null!==b?"="+d.encodeQuery(b,c):"")};d.addQuery=function(a,b,c){if("object"===typeof b)for(var k in b)r.call(b,k)&&d.addQuery(a,k,b[k]);
else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),n(c)||(c=[c]),a[b]=a[b].concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.removeQuery=function(a,b,c){var k;if(n(b))for(c=0,k=b.length;c<k;c++)a[b[c]]=void 0;else if("object"===typeof b)for(k in b)r.call(b,k)&&d.removeQuery(a,k,b[k]);else if("string"===typeof b)if(void 0!==c)if(a[b]===c)a[b]=void 0;else{if(n(a[b])){k=a[b];var g={},e,f;if(n(c))for(e=0,f=c.length;e<
f;e++)g[c[e]]=!0;else g[c]=!0;e=0;for(f=k.length;e<f;e++)void 0!==g[k[e]]&&(k.splice(e,1),f--,e--);a[b]=k}}else a[b]=void 0;else throw new TypeError("URI.addQuery() accepts an object, string as the first parameter");};d.hasQuery=function(a,b,c,k){if("object"===typeof b){for(var g in b)if(r.call(b,g)&&!d.hasQuery(a,g,b[g]))return!1;return!0}if("string"!==typeof b)throw new TypeError("URI.hasQuery() accepts an object, string as the name parameter");switch(A(c)){case "Undefined":return b in a;case "Boolean":return a=
Boolean(n(a[b])?a[b].length:a[b]),c===a;case "Function":return!!c(a[b],b,a);case "Array":return n(a[b])?(k?e:u)(a[b],c):!1;case "RegExp":return n(a[b])?k?e(a[b],c):!1:Boolean(a[b]&&a[b].match(c));case "Number":c=String(c);case "String":return n(a[b])?k?e(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),d;for(d=0;d<c;d++)if(a.charAt(d)!==
b.charAt(d)){d--;break}if(1>d)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(d)||"/"!==b.charAt(d))d=a.substring(0,d).lastIndexOf("/");return a.substring(0,d+1)};d.withinString=function(a,b){return a.replace(d.find_uri_expression,b)};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!f)throw new TypeError("Hostname '"+a+"' contains characters other than [A-Z0-9.-] and Punycode.js is not available");if(f.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError("Hostname '"+
a+"' contains characters other than [A-Z0-9.-]");}};d.noConflict=function(a){if(a)return a={URI:this.noConflict()},URITemplate&&"function"==typeof URITemplate.noConflict&&(a.URITemplate=URITemplate.noConflict()),l&&"function"==typeof l.noConflict&&(a.IPv6=l.noConflict()),SecondLevelDomains&&"function"==typeof SecondLevelDomains.noConflict&&(a.SecondLevelDomains=SecondLevelDomains.noConflict()),a;p.URI===this&&(p.URI=C);return this};g.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===
a||this._deferred_build)this._string=d.build(this._parts),this._deferred_build=!1;return this};g.clone=function(){return new d(this)};g.valueOf=g.toString=function(){return this.build(!1)._string};m={protocol:"protocol",username:"username",password:"password",hostname:"hostname",port:"port"};y=function(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}};for(s in m)g[s]=y(m[s]);m={query:"?",fragment:"#"};y=function(a,b){return function(c,
d){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!d);return this}};for(s in m)g[s]=y(s,m[s]);m={search:["?","query"],hash:["#","fragment"]};y=function(a,b){return function(c,d){var e=this[a](c,d);return"string"===typeof e&&e.length?b+e:e}};for(s in m)g[s]=y(m[s][1],m[s][0]);g.pathname=function(a,b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}this._parts.path=a?d.recodePath(a):
"/";this.build(!b);return this};g.path=g.pathname;g.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=d._parts();var k=a instanceof d,e="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(e=d.getDomAttribute(a),a=a[e]||"",e=!1);!k&&(e&&void 0!==a.pathname)&&(a=a.toString());if("string"===typeof a)this._parts=d.parse(a,this._parts);else if(k||e)for(c in k=k?a._parts:a,k)r.call(this._parts,c)&&(this._parts[c]=k[c]);else throw new TypeError("invalid input");
this.build(!b);return this};g.is=function(a){var b=!1,c=!1,k=!1,e=!1,g=!1,f=!1,u=!1,m=!this._parts.urn;this._parts.hostname&&(m=!1,c=d.ip4_expression.test(this._parts.hostname),k=d.ip6_expression.test(this._parts.hostname),b=c||k,g=(e=!b)&&h&&h.has(this._parts.hostname),f=e&&d.idn_expression.test(this._parts.hostname),u=e&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return m;case "absolute":return!m;case "domain":case "name":return e;case "sld":return g;
case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return k;case "idn":return f;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return u}return null};var w=g.protocol,D=g.port,E=g.hostname;g.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),a.match(/[^a-zA-z0-9\.+-]/)))throw new TypeError("Protocol '"+a+"' contains characters other than [A-Z0-9.+-]");return w.call(this,a,b)};g.scheme=g.protocol;
g.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError("Port '"+a+"' contains characters other than [0-9]");return D.call(this,a,b)};g.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};d.parseHost(a,c);a=c.hostname}return E.call(this,a,b)};g.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?
d.buildHost(this._parts):"";d.parseHost(a,this._parts);this.build(!b);return this};g.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";d.parseAuthority(a,this._parts);this.build(!b);return this};g.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.username)return"";var c=d.buildUserinfo(this._parts);return c.substring(0,c.length-1)}"@"!==a[a.length-1]&&(a+=
"@");d.parseUserinfo(a,this._parts);this.build(!b);return this};g.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=d.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;this.build(!b);return this};g.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,
c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=RegExp("^"+q(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);this.build(!b);return this};g.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;
c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=RegExp(q(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};g.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===
a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&h&&h.list[c.toLowerCase()]?h.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(h&&h.is(a))c=RegExp(q(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError("TLD '"+a+"' contains characters other than [A-Z0-9]");else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");
c=RegExp(q(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};g.directory=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-
this.filename().length;c=this._parts.path.substring(0,c);c=RegExp("^"+q(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=d.recodePath(a);this._parts.path=this._parts.path.replace(c,a);this.build(!b);return this};g.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?
d.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var k=RegExp(q(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(k,a);c?this.normalizePath(b):this.build(!b);return this};g.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),k=c.lastIndexOf(".");if(-1===k)return"";c=c.substring(k+1);c=/^[a-z0-9%]+$/i.test(c)?c:
"";return a?d.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())k=a?RegExp(q(c)+"$"):RegExp(q("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}k&&(a=d.recodePath(a),this._parts.path=this._parts.path.replace(k,a));this.build(!b);return this};g.segment=function(a,b,c){var d=this._parts.urn?":":"/",e=this.path(),g="/"===e.substring(0,1),e=e.split(d);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error("Bad segment '"+
a+"', must be 0-based integer");g&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===b)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(n(b)){e=[];a=0;for(var f=b.length;a<f;a++)if(b[a].length||e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(b[a])}else{if(b||"string"===typeof b)""===e[e.length-1]?e[e.length-1]=b:e.push(b)}else b||"string"===typeof b&&b.length?e[a]=b:e.splice(a,1);g&&e.unshift("");return this.path(e.join(d),c)};g.segmentCoded=function(a,b,c){var e,
g;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(n(a))for(e=0,g=a.length;e<g;e++)a[e]=d.decode(a[e]);else a=void 0!==a?d.decode(a):void 0;return a}if(n(b))for(e=0,g=b.length;e<g;e++)b[e]=d.decode(b[e]);else b="string"===typeof b?d.encode(b):b;return this.segment(a,b,c)};var F=g.query;g.query=function(a,b){if(!0===a)return d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace),
e=a.call(this,c);this._parts.query=d.buildQuery(e||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=d.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):F.call(this,a,b)};g.setQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("object"===typeof a)for(var g in a)r.call(a,g)&&(e[g]=a[g]);else if("string"===
typeof a)e[a]=void 0!==b?b:null;else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.addQuery(e,a,void 0===b?null:b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);
"string"!==typeof a&&(c=b);this.build(!c);return this};g.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.removeQuery(e,a,b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};g.hasQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return d.hasQuery(e,a,b,c)};g.setSearch=g.setQuery;g.addSearch=g.addQuery;g.removeSearch=
g.removeQuery;g.hasSearch=g.hasQuery;g.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};g.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};g.normalizeHostname=function(a){this._parts.hostname&&
(this.is("IDN")&&f?this._parts.hostname=f.toASCII(this._parts.hostname):this.is("IPv6")&&l&&(this._parts.hostname=l.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};g.normalizePort=function(a){"string"===typeof this._parts.protocol&&this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};g.normalizePath=function(a){if(this._parts.urn||!this._parts.path||"/"===this._parts.path)return this;
var b,c=this._parts.path,e,g;"/"!==c.charAt(0)&&(b=!0,c="/"+c);for(c=c.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");;){e=c.indexOf("/../");if(-1===e)break;else if(0===e){c=c.substring(3);break}g=c.substring(0,e).lastIndexOf("/");-1===g&&(g=e);c=c.substring(0,g)+c.substring(e+3)}b&&this.is("relative")&&(c=c.substring(1));c=d.recodePath(c);this._parts.path=c;this.build(!a);return this};g.normalizePathname=g.normalizePath;g.normalizeQuery=function(a){"string"===typeof this._parts.query&&
(this._parts.query.length?this.query(d.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=null,this.build(!a));return this};g.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};g.normalizeSearch=g.normalizeQuery;g.normalizeHash=g.normalizeFragment;g.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;this.normalize();d.encode=a;d.decode=b;return this};g.unicode=function(){var a=
d.encode,b=d.decode;d.encode=z;d.decode=unescape;this.normalize();d.encode=a;d.decode=b;return this};g.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&f?(b+=f.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&(a._parts.path&&"/"!==a._parts.path.charAt(0))&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",e=0,g=a._parts.query.split("&"),
h=g.length;e<h;e++){var u=(g[e]||"").split("="),c=c+("&"+d.decodeQuery(u[0],this._parts.escapeQuerySpace).replace(/&/g,"%26"));void 0!==u[1]&&(c+="="+d.decodeQuery(u[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=d.decodeQuery(a.hash(),!0)};g.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,g;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof d||(a=new d(a));
b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(e=0;g=c[e];e++)b._parts[g]=a._parts[g];c=["query","path"];for(e=0;g=c[e];e++)!b._parts[g]&&a._parts[g]&&(b._parts[g]=a._parts[g]);"/"!==b.path().charAt(0)&&(a=a.directory(),b._parts.path=(a?a+"/":"")+b._parts.path,b.normalizePath());b.build();return b};g.relativeTo=function(a){var b=this.clone().normalize(),c,e,g,f;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");
a=(new d(a)).normalize();c=b._parts;e=a._parts;g=b.path();f=a.path();if("/"!==g.charAt(0))throw Error("URI is already relative");if("/"!==f.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===e.protocol&&(c.protocol=null);if(c.username===e.username&&c.password===e.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===e.hostname&&c.port===e.port)c.hostname=null,c.port=null;else return b.build();if(g===f)return c.path="",b.build();
a=d.commonPath(b.path(),a.path());if(!a)return b.build();e=e.path.substring(a.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=e+c.path.substring(a.length);return b.build()};g.equals=function(a){var b=this.clone();a=new d(a);var c={},e={},g={},f;b.normalize();a.normalize();if(b.toString()===a.toString())return!0;c=b.query();e=a.query();b.query("");a.query("");if(b.toString()!==a.toString()||c.length!==e.length)return!1;c=d.parseQuery(c,this._parts.escapeQuerySpace);e=d.parseQuery(e,this._parts.escapeQuerySpace);
for(f in c)if(r.call(c,f)){if(!n(c[f])){if(c[f]!==e[f])return!1}else if(!u(c[f],e[f]))return!1;g[f]=!0}for(f in e)if(r.call(e,f)&&!g[f])return!1;return!0};g.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};g.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return d});
(function(f,l){"object"===typeof exports?module.exports=l(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],l):f.URITemplate=l(f.URI,f)})(this,function(f,l){function h(d){if(h._cache[d])return h._cache[d];if(!(this instanceof h))return new h(d);this.expression=d;h._cache[d]=this;return this}function p(d){this.data=d;this.cache={}}var d=l&&l.URITemplate,q=Object.prototype.hasOwnProperty,A=h.prototype,n={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encode"},
"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},"&":{prefix:"&",
separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};h._cache={};h.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;h.VARIABLE_PATTERN=/^([^*:]+)((\*)|:(\d+))?$/;h.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_]/;h.expand=function(d,f){var v=n[d.operator],l=v.named?"Named":"Unnamed",q=d.variables,g=[],r,m,s;for(s=0;m=q[s];s++)r=f.get(m.name),r.val.length?g.push(h["expand"+l](r,v,m.explode,m.explode&&v.separator||",",m.maxlength,m.name)):r.type&&g.push("");return g.length?v.prefix+g.join(v.separator):
""};h.expandNamed=function(d,h,v,l,q,g){var r="",m=h.encode;h=h.empty_name_separator;var s=!d[m].length,n=2===d.type?"":f[m](g),w,p,A;p=0;for(A=d.val.length;p<A;p++)q?(w=f[m](d.val[p][1].substring(0,q)),2===d.type&&(n=f[m](d.val[p][0].substring(0,q)))):s?(w=f[m](d.val[p][1]),2===d.type?(n=f[m](d.val[p][0]),d[m].push([n,w])):d[m].push([void 0,w])):(w=d[m][p][1],2===d.type&&(n=d[m][p][0])),r&&(r+=l),v?r+=n+(h||w?"=":"")+w:(p||(r+=f[m](g)+(h||w?"=":"")),2===d.type&&(r+=n+","),r+=w);return r};h.expandUnnamed=
function(d,h,l,q,n,g){g="";var r=h.encode;h=h.empty_name_separator;var m=!d[r].length,s,p,w,A;w=0;for(A=d.val.length;w<A;w++)n?p=f[r](d.val[w][1].substring(0,n)):m?(p=f[r](d.val[w][1]),d[r].push([2===d.type?f[r](d.val[w][0]):void 0,p])):p=d[r][w][1],g&&(g+=q),2===d.type&&(s=n?f[r](d.val[w][0].substring(0,n)):d[r][w][0],g+=s,g=l?g+(h||p?"=":""):g+","),g+=p;return g};h.noConflict=function(){l.URITemplate===h&&(l.URITemplate=d);return h};A.expand=function(d){var f="";this.parts&&this.parts.length||this.parse();
d instanceof p||(d=new p(d));for(var l=0,n=this.parts.length;l<n;l++)f+="string"===typeof this.parts[l]?this.parts[l]:h.expand(this.parts[l],d);return f};A.parse=function(){var d=this.expression,f=h.EXPRESSION_PATTERN,l=h.VARIABLE_PATTERN,q=h.VARIABLE_NAME_PATTERN,p=[],g=0,r,m,s;for(f.lastIndex=0;;){m=f.exec(d);if(null===m){p.push(d.substring(g));break}else p.push(d.substring(g,m.index)),g=m.index+m[0].length;if(!n[m[1]])throw Error('Unknown Operator "'+m[1]+'" in "'+m[0]+'"');if(!m[3])throw Error('Unclosed Expression "'+
m[0]+'"');r=m[2].split(",");for(var y=0,w=r.length;y<w;y++){s=r[y].match(l);if(null===s)throw Error('Invalid Variable "'+r[y]+'" in "'+m[0]+'"');if(s[1].match(q))throw Error('Invalid Variable Name "'+s[1]+'" in "'+m[0]+'"');r[y]={name:s[1],explode:!!s[3],maxlength:s[4]&&parseInt(s[4],10)}}if(!r.length)throw Error('Expression Missing Variable(s) "'+m[0]+'"');p.push({expression:m[0],operator:m[1],variables:r})}p.length||p.push(d);this.parts=p;return this};p.prototype.get=function(d){var f=this.data,
h={type:0,val:[],encode:[],encodeReserved:[]},l;if(void 0!==this.cache[d])return this.cache[d];this.cache[d]=h;f="[object Function]"===String(Object.prototype.toString.call(f))?f(d):"[object Function]"===String(Object.prototype.toString.call(f[d]))?f[d](d):f[d];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){l=0;for(d=f.length;l<d;l++)void 0!==f[l]&&null!==f[l]&&h.val.push([void 0,String(f[l])]);h.val.length&&(h.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(l in f)q.call(f,
l)&&(void 0!==f[l]&&null!==f[l])&&h.val.push([l,String(f[l])]);h.val.length&&(h.type=2)}else h.type=1,h.val.push([void 0,String(f)]);return h};f.expand=function(d,l){var n=(new h(d)).expand(l);return new f(n)};return h});

//! moment.js
//! version : 2.4.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com

(function (undefined) {

    /************************************
        Constants
    ************************************/

    var moment,
        VERSION = "2.4.0",
        round = Math.round,
        i,

        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6,

        // internal storage for language config files
        languages = {},

        // check for nodeJS
        hasModule = (typeof module !== 'undefined' && module.exports),

        // ASP.NET json date format regex
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i,
        aspNetTimeSpanJsonRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,

        // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
        // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
        isoDurationRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,

        // format tokens
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,

        // parsing token regexes
        parseTokenOneOrTwoDigits = /\d\d?/, // 0 - 99
        parseTokenOneToThreeDigits = /\d{1,3}/, // 0 - 999
        parseTokenThreeDigits = /\d{3}/, // 000 - 999
        parseTokenFourDigits = /\d{1,4}/, // 0 - 9999
        parseTokenSixDigits = /[+\-]?\d{1,6}/, // -999,999 - 999,999
        parseTokenDigits = /\d+/, // nonzero number of digits
        parseTokenWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, // any word (or two) characters or numbers including two/three word month in arabic.
        parseTokenTimezone = /Z|[\+\-]\d\d:?\d\d/i, // +00:00 -00:00 +0000 -0000 or Z
        parseTokenT = /T/i, // T (ISO seperator)
        parseTokenTimestampMs = /[\+\-]?\d+(\.\d{1,3})?/, // 123456789 123456789.123

        // preliminary iso regex
        // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000)
        isoRegex = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/,

        isoFormat = 'YYYY-MM-DDTHH:mm:ssZ',

        isoDates = [
            'YYYY-MM-DD',
            'GGGG-[W]WW',
            'GGGG-[W]WW-E',
            'YYYY-DDD'
        ],

        // iso time formats and regexes
        isoTimes = [
            ['HH:mm:ss.SSSS', /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
            ['HH:mm:ss', /(T| )\d\d:\d\d:\d\d/],
            ['HH:mm', /(T| )\d\d:\d\d/],
            ['HH', /(T| )\d\d/]
        ],

        // timezone chunker "+10:00" > ["10", "00"] or "-1530" > ["-15", "30"]
        parseTimezoneChunker = /([\+\-]|\d\d)/gi,

        // getter and setter names
        proxyGettersAndSetters = 'Date|Hours|Minutes|Seconds|Milliseconds'.split('|'),
        unitMillisecondFactors = {
            'Milliseconds' : 1,
            'Seconds' : 1e3,
            'Minutes' : 6e4,
            'Hours' : 36e5,
            'Days' : 864e5,
            'Months' : 2592e6,
            'Years' : 31536e6
        },

        unitAliases = {
            ms : 'millisecond',
            s : 'second',
            m : 'minute',
            h : 'hour',
            d : 'day',
            D : 'date',
            w : 'week',
            W : 'isoWeek',
            M : 'month',
            y : 'year',
            DDD : 'dayOfYear',
            e : 'weekday',
            E : 'isoWeekday',
            gg: 'weekYear',
            GG: 'isoWeekYear'
        },

        camelFunctions = {
            dayofyear : 'dayOfYear',
            isoweekday : 'isoWeekday',
            isoweek : 'isoWeek',
            weekyear : 'weekYear',
            isoweekyear : 'isoWeekYear'
        },

        // format function strings
        formatFunctions = {},

        // tokens to ordinalize and pad
        ordinalizeTokens = 'DDD w W M D d'.split(' '),
        paddedTokens = 'M D H h m s w W'.split(' '),

        formatTokenFunctions = {
            M    : function () {
                return this.month() + 1;
            },
            MMM  : function (format) {
                return this.lang().monthsShort(this, format);
            },
            MMMM : function (format) {
                return this.lang().months(this, format);
            },
            D    : function () {
                return this.date();
            },
            DDD  : function () {
                return this.dayOfYear();
            },
            d    : function () {
                return this.day();
            },
            dd   : function (format) {
                return this.lang().weekdaysMin(this, format);
            },
            ddd  : function (format) {
                return this.lang().weekdaysShort(this, format);
            },
            dddd : function (format) {
                return this.lang().weekdays(this, format);
            },
            w    : function () {
                return this.week();
            },
            W    : function () {
                return this.isoWeek();
            },
            YY   : function () {
                return leftZeroFill(this.year() % 100, 2);
            },
            YYYY : function () {
                return leftZeroFill(this.year(), 4);
            },
            YYYYY : function () {
                return leftZeroFill(this.year(), 5);
            },
            gg   : function () {
                return leftZeroFill(this.weekYear() % 100, 2);
            },
            gggg : function () {
                return this.weekYear();
            },
            ggggg : function () {
                return leftZeroFill(this.weekYear(), 5);
            },
            GG   : function () {
                return leftZeroFill(this.isoWeekYear() % 100, 2);
            },
            GGGG : function () {
                return this.isoWeekYear();
            },
            GGGGG : function () {
                return leftZeroFill(this.isoWeekYear(), 5);
            },
            e : function () {
                return this.weekday();
            },
            E : function () {
                return this.isoWeekday();
            },
            a    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), true);
            },
            A    : function () {
                return this.lang().meridiem(this.hours(), this.minutes(), false);
            },
            H    : function () {
                return this.hours();
            },
            h    : function () {
                return this.hours() % 12 || 12;
            },
            m    : function () {
                return this.minutes();
            },
            s    : function () {
                return this.seconds();
            },
            S    : function () {
                return toInt(this.milliseconds() / 100);
            },
            SS   : function () {
                return leftZeroFill(toInt(this.milliseconds() / 10), 2);
            },
            SSS  : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            SSSS : function () {
                return leftZeroFill(this.milliseconds(), 3);
            },
            Z    : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(a / 60), 2) + ":" + leftZeroFill(toInt(a) % 60, 2);
            },
            ZZ   : function () {
                var a = -this.zone(),
                    b = "+";
                if (a < 0) {
                    a = -a;
                    b = "-";
                }
                return b + leftZeroFill(toInt(10 * a / 6), 4);
            },
            z : function () {
                return this.zoneAbbr();
            },
            zz : function () {
                return this.zoneName();
            },
            X    : function () {
                return this.unix();
            }
        },

        lists = ['months', 'monthsShort', 'weekdays', 'weekdaysShort', 'weekdaysMin'];

    function padToken(func, count) {
        return function (a) {
            return leftZeroFill(func.call(this, a), count);
        };
    }
    function ordinalizeToken(func, period) {
        return function (a) {
            return this.lang().ordinal(func.call(this, a), period);
        };
    }

    while (ordinalizeTokens.length) {
        i = ordinalizeTokens.pop();
        formatTokenFunctions[i + 'o'] = ordinalizeToken(formatTokenFunctions[i], i);
    }
    while (paddedTokens.length) {
        i = paddedTokens.pop();
        formatTokenFunctions[i + i] = padToken(formatTokenFunctions[i], 2);
    }
    formatTokenFunctions.DDDD = padToken(formatTokenFunctions.DDD, 3);


    /************************************
        Constructors
    ************************************/

    function Language() {

    }

    // Moment prototype object
    function Moment(config) {
        checkOverflow(config);
        extend(this, config);
    }

    // Duration Constructor
    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;

        // store reference to input for deterministic cloning
        this._input = duration;

        // representation for dateAddRemove
        this._milliseconds = +milliseconds +
            seconds * 1e3 + // 1000
            minutes * 6e4 + // 1000 * 60
            hours * 36e5; // 1000 * 60 * 60
        // Because of dateAddRemove treats 24 hours as different from a
        // day when working around DST, we need to store them separately
        this._days = +days +
            weeks * 7;
        // It is impossible translate months into days without knowing
        // which months you are are talking about, so we have to store
        // it separately.
        this._months = +months +
            years * 12;

        this._data = {};

        this._bubble();
    }

    /************************************
        Helpers
    ************************************/


    function extend(a, b) {
        for (var i in b) {
            if (b.hasOwnProperty(i)) {
                a[i] = b[i];
            }
        }

        if (b.hasOwnProperty("toString")) {
            a.toString = b.toString;
        }

        if (b.hasOwnProperty("valueOf")) {
            a.valueOf = b.valueOf;
        }

        return a;
    }

    function absRound(number) {
        if (number < 0) {
            return Math.ceil(number);
        } else {
            return Math.floor(number);
        }
    }

    // left zero fill a number
    // see http://jsperf.com/left-zero-filling for performance comparison
    function leftZeroFill(number, targetLength) {
        var output = number + '';
        while (output.length < targetLength) {
            output = '0' + output;
        }
        return output;
    }

    // helper function for _.addTime and _.subtractTime
    function addOrSubtractDurationFromMoment(mom, duration, isAdding, ignoreUpdateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months,
            minutes,
            hours;

        if (milliseconds) {
            mom._d.setTime(+mom._d + milliseconds * isAdding);
        }
        // store the minutes and hours so we can restore them
        if (days || months) {
            minutes = mom.minute();
            hours = mom.hour();
        }
        if (days) {
            mom.date(mom.date() + days * isAdding);
        }
        if (months) {
            mom.month(mom.month() + months * isAdding);
        }
        if (milliseconds && !ignoreUpdateOffset) {
            moment.updateOffset(mom);
        }
        // restore the minutes and hours after possibly changing dst
        if (days || months) {
            mom.minute(minutes);
            mom.hour(hours);
        }
    }

    // check if is an array
    function isArray(input) {
        return Object.prototype.toString.call(input) === '[object Array]';
    }

    function isDate(input) {
        return  Object.prototype.toString.call(input) === '[object Date]' ||
                input instanceof Date;
    }

    // compare two arrays, return the number of differences
    function compareArrays(array1, array2, dontConvert) {
        var len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0,
            i;
        for (i = 0; i < len; i++) {
            if ((dontConvert && array1[i] !== array2[i]) ||
                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
                diffs++;
            }
        }
        return diffs + lengthDiff;
    }

    function normalizeUnits(units) {
        if (units) {
            var lowered = units.toLowerCase().replace(/(.)s$/, '$1');
            units = unitAliases[units] || camelFunctions[lowered] || lowered;
        }
        return units;
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedInput = {},
            normalizedProp,
            prop,
            index;

        for (prop in inputObject) {
            if (inputObject.hasOwnProperty(prop)) {
                normalizedProp = normalizeUnits(prop);
                if (normalizedProp) {
                    normalizedInput[normalizedProp] = inputObject[prop];
                }
            }
        }

        return normalizedInput;
    }

    function makeList(field) {
        var count, setter;

        if (field.indexOf('week') === 0) {
            count = 7;
            setter = 'day';
        }
        else if (field.indexOf('month') === 0) {
            count = 12;
            setter = 'month';
        }
        else {
            return;
        }

        moment[field] = function (format, index) {
            var i, getter,
                method = moment.fn._lang[field],
                results = [];

            if (typeof format === 'number') {
                index = format;
                format = undefined;
            }

            getter = function (i) {
                var m = moment().utc().set(setter, i);
                return method.call(moment.fn._lang, m, format || '');
            };

            if (index != null) {
                return getter(index);
            }
            else {
                for (i = 0; i < count; i++) {
                    results.push(getter(i));
                }
                return results;
            }
        };
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;

        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
            if (coercedNumber >= 0) {
                value = Math.floor(coercedNumber);
            } else {
                value = Math.ceil(coercedNumber);
            }
        }

        return value;
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate();
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365;
    }

    function isLeapYear(year) {
        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    }

    function checkOverflow(m) {
        var overflow;
        if (m._a && m._pf.overflow === -2) {
            overflow =
                m._a[MONTH] < 0 || m._a[MONTH] > 11 ? MONTH :
                m._a[DATE] < 1 || m._a[DATE] > daysInMonth(m._a[YEAR], m._a[MONTH]) ? DATE :
                m._a[HOUR] < 0 || m._a[HOUR] > 23 ? HOUR :
                m._a[MINUTE] < 0 || m._a[MINUTE] > 59 ? MINUTE :
                m._a[SECOND] < 0 || m._a[SECOND] > 59 ? SECOND :
                m._a[MILLISECOND] < 0 || m._a[MILLISECOND] > 999 ? MILLISECOND :
                -1;

            if (m._pf._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
                overflow = DATE;
            }

            m._pf.overflow = overflow;
        }
    }

    function initializeParsingFlags(config) {
        config._pf = {
            empty : false,
            unusedTokens : [],
            unusedInput : [],
            overflow : -2,
            charsLeftOver : 0,
            nullInput : false,
            invalidMonth : null,
            invalidFormat : false,
            userInvalidated : false,
            iso: false
        };
    }

    function isValid(m) {
        if (m._isValid == null) {
            m._isValid = !isNaN(m._d.getTime()) &&
                m._pf.overflow < 0 &&
                !m._pf.empty &&
                !m._pf.invalidMonth &&
                !m._pf.nullInput &&
                !m._pf.invalidFormat &&
                !m._pf.userInvalidated;

            if (m._strict) {
                m._isValid = m._isValid &&
                    m._pf.charsLeftOver === 0 &&
                    m._pf.unusedTokens.length === 0;
            }
        }
        return m._isValid;
    }

    function normalizeLanguage(key) {
        return key ? key.toLowerCase().replace('_', '-') : key;
    }

    /************************************
        Languages
    ************************************/


    extend(Language.prototype, {

        set : function (config) {
            var prop, i;
            for (i in config) {
                prop = config[i];
                if (typeof prop === 'function') {
                    this[i] = prop;
                } else {
                    this['_' + i] = prop;
                }
            }
        },

        _months : "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months : function (m) {
            return this._months[m.month()];
        },

        _monthsShort : "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort : function (m) {
            return this._monthsShort[m.month()];
        },

        monthsParse : function (monthName) {
            var i, mom, regex;

            if (!this._monthsParse) {
                this._monthsParse = [];
            }

            for (i = 0; i < 12; i++) {
                // make the regex if we don't have it already
                if (!this._monthsParse[i]) {
                    mom = moment.utc([2000, i]);
                    regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
                    this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._monthsParse[i].test(monthName)) {
                    return i;
                }
            }
        },

        _weekdays : "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays : function (m) {
            return this._weekdays[m.day()];
        },

        _weekdaysShort : "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort : function (m) {
            return this._weekdaysShort[m.day()];
        },

        _weekdaysMin : "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin : function (m) {
            return this._weekdaysMin[m.day()];
        },

        weekdaysParse : function (weekdayName) {
            var i, mom, regex;

            if (!this._weekdaysParse) {
                this._weekdaysParse = [];
            }

            for (i = 0; i < 7; i++) {
                // make the regex if we don't have it already
                if (!this._weekdaysParse[i]) {
                    mom = moment([2000, 1]).day(i);
                    regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
                    this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
                }
                // test the regex
                if (this._weekdaysParse[i].test(weekdayName)) {
                    return i;
                }
            }
        },

        _longDateFormat : {
            LT : "h:mm A",
            L : "MM/DD/YYYY",
            LL : "MMMM D YYYY",
            LLL : "MMMM D YYYY LT",
            LLLL : "dddd, MMMM D YYYY LT"
        },
        longDateFormat : function (key) {
            var output = this._longDateFormat[key];
            if (!output && this._longDateFormat[key.toUpperCase()]) {
                output = this._longDateFormat[key.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (val) {
                    return val.slice(1);
                });
                this._longDateFormat[key] = output;
            }
            return output;
        },

        isPM : function (input) {
            // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
            // Using charAt should be more compatible.
            return ((input + '').toLowerCase().charAt(0) === 'p');
        },

        _meridiemParse : /[ap]\.?m?\.?/i,
        meridiem : function (hours, minutes, isLower) {
            if (hours > 11) {
                return isLower ? 'pm' : 'PM';
            } else {
                return isLower ? 'am' : 'AM';
            }
        },

        _calendar : {
            sameDay : '[Today at] LT',
            nextDay : '[Tomorrow at] LT',
            nextWeek : 'dddd [at] LT',
            lastDay : '[Yesterday at] LT',
            lastWeek : '[Last] dddd [at] LT',
            sameElse : 'L'
        },
        calendar : function (key, mom) {
            var output = this._calendar[key];
            return typeof output === 'function' ? output.apply(mom) : output;
        },

        _relativeTime : {
            future : "in %s",
            past : "%s ago",
            s : "a few seconds",
            m : "a minute",
            mm : "%d minutes",
            h : "an hour",
            hh : "%d hours",
            d : "a day",
            dd : "%d days",
            M : "a month",
            MM : "%d months",
            y : "a year",
            yy : "%d years"
        },
        relativeTime : function (number, withoutSuffix, string, isFuture) {
            var output = this._relativeTime[string];
            return (typeof output === 'function') ?
                output(number, withoutSuffix, string, isFuture) :
                output.replace(/%d/i, number);
        },
        pastFuture : function (diff, output) {
            var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
            return typeof format === 'function' ? format(output) : format.replace(/%s/i, output);
        },

        ordinal : function (number) {
            return this._ordinal.replace("%d", number);
        },
        _ordinal : "%d",

        preparse : function (string) {
            return string;
        },

        postformat : function (string) {
            return string;
        },

        week : function (mom) {
            return weekOfYear(mom, this._week.dow, this._week.doy).week;
        },

        _week : {
            dow : 0, // Sunday is the first day of the week.
            doy : 6  // The week that contains Jan 1st is the first week of the year.
        },

        _invalidDate: 'Invalid date',
        invalidDate: function () {
            return this._invalidDate;
        }
    });

    // Loads a language definition into the `languages` cache.  The function
    // takes a key and optionally values.  If not in the browser and no values
    // are provided, it will load the language file module.  As a convenience,
    // this function also returns the language values.
    function loadLang(key, values) {
        values.abbr = key;
        if (!languages[key]) {
            languages[key] = new Language();
        }
        languages[key].set(values);
        return languages[key];
    }

    // Remove a language from the `languages` cache. Mostly useful in tests.
    function unloadLang(key) {
        delete languages[key];
    }

    // Determines which language definition to use and returns it.
    //
    // With no parameters, it will return the global language.  If you
    // pass in a language key, such as 'en', it will return the
    // definition for 'en', so long as 'en' has already been loaded using
    // moment.lang.
    function getLangDefinition(key) {
        var i = 0, j, lang, next, split,
            get = function (k) {
                if (!languages[k] && hasModule) {
                    try {
                        require('./lang/' + k);
                    } catch (e) { }
                }
                return languages[k];
            };

        if (!key) {
            return moment.fn._lang;
        }

        if (!isArray(key)) {
            //short-circuit everything else
            lang = get(key);
            if (lang) {
                return lang;
            }
            key = [key];
        }

        //pick the language from the array
        //try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
        //substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
        while (i < key.length) {
            split = normalizeLanguage(key[i]).split('-');
            j = split.length;
            next = normalizeLanguage(key[i + 1]);
            next = next ? next.split('-') : null;
            while (j > 0) {
                lang = get(split.slice(0, j).join('-'));
                if (lang) {
                    return lang;
                }
                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
                    //the next array item is better than a shallower substring of this one
                    break;
                }
                j--;
            }
            i++;
        }
        return moment.fn._lang;
    }

    /************************************
        Formatting
    ************************************/


    function removeFormattingTokens(input) {
        if (input.match(/\[[\s\S]/)) {
            return input.replace(/^\[|\]$/g, "");
        }
        return input.replace(/\\/g, "");
    }

    function makeFormatFunction(format) {
        var array = format.match(formattingTokens), i, length;

        for (i = 0, length = array.length; i < length; i++) {
            if (formatTokenFunctions[array[i]]) {
                array[i] = formatTokenFunctions[array[i]];
            } else {
                array[i] = removeFormattingTokens(array[i]);
            }
        }

        return function (mom) {
            var output = "";
            for (i = 0; i < length; i++) {
                output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            }
            return output;
        };
    }

    // format date using native date object
    function formatMoment(m, format) {

        if (!m.isValid()) {
            return m.lang().invalidDate();
        }

        format = expandFormat(format, m.lang());

        if (!formatFunctions[format]) {
            formatFunctions[format] = makeFormatFunction(format);
        }

        return formatFunctions[format](m);
    }

    function expandFormat(format, lang) {
        var i = 5;

        function replaceLongDateFormatTokens(input) {
            return lang.longDateFormat(input) || input;
        }

        localFormattingTokens.lastIndex = 0;
        while (i >= 0 && localFormattingTokens.test(format)) {
            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
            localFormattingTokens.lastIndex = 0;
            i -= 1;
        }

        return format;
    }


    /************************************
        Parsing
    ************************************/


    // get the regex to find the next token
    function getParseRegexForToken(token, config) {
        var a;
        switch (token) {
        case 'DDDD':
            return parseTokenThreeDigits;
        case 'YYYY':
        case 'GGGG':
        case 'gggg':
            return parseTokenFourDigits;
        case 'YYYYY':
        case 'GGGGG':
        case 'ggggg':
            return parseTokenSixDigits;
        case 'S':
        case 'SS':
        case 'SSS':
        case 'DDD':
            return parseTokenOneToThreeDigits;
        case 'MMM':
        case 'MMMM':
        case 'dd':
        case 'ddd':
        case 'dddd':
            return parseTokenWord;
        case 'a':
        case 'A':
            return getLangDefinition(config._l)._meridiemParse;
        case 'X':
            return parseTokenTimestampMs;
        case 'Z':
        case 'ZZ':
            return parseTokenTimezone;
        case 'T':
            return parseTokenT;
        case 'SSSS':
            return parseTokenDigits;
        case 'MM':
        case 'DD':
        case 'YY':
        case 'GG':
        case 'gg':
        case 'HH':
        case 'hh':
        case 'mm':
        case 'ss':
        case 'M':
        case 'D':
        case 'd':
        case 'H':
        case 'h':
        case 'm':
        case 's':
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'e':
        case 'E':
            return parseTokenOneOrTwoDigits;
        default :
            a = new RegExp(regexpEscape(unescapeFormat(token.replace('\\', '')), "i"));
            return a;
        }
    }

    function timezoneMinutesFromString(string) {
        var tzchunk = (parseTokenTimezone.exec(string) || [])[0],
            parts = (tzchunk + '').match(parseTimezoneChunker) || ['-', 0, 0],
            minutes = +(parts[1] * 60) + toInt(parts[2]);

        return parts[0] === '+' ? -minutes : minutes;
    }

    // function to convert string input to date
    function addTimeToArrayFromToken(token, input, config) {
        var a, datePartArray = config._a;

        switch (token) {
        // MONTH
        case 'M' : // fall through to MM
        case 'MM' :
            if (input != null) {
                datePartArray[MONTH] = toInt(input) - 1;
            }
            break;
        case 'MMM' : // fall through to MMMM
        case 'MMMM' :
            a = getLangDefinition(config._l).monthsParse(input);
            // if we didn't find a month name, mark the date as invalid.
            if (a != null) {
                datePartArray[MONTH] = a;
            } else {
                config._pf.invalidMonth = input;
            }
            break;
        // DAY OF MONTH
        case 'D' : // fall through to DD
        case 'DD' :
            if (input != null) {
                datePartArray[DATE] = toInt(input);
            }
            break;
        // DAY OF YEAR
        case 'DDD' : // fall through to DDDD
        case 'DDDD' :
            if (input != null) {
                config._dayOfYear = toInt(input);
            }

            break;
        // YEAR
        case 'YY' :
            datePartArray[YEAR] = toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
            break;
        case 'YYYY' :
        case 'YYYYY' :
            datePartArray[YEAR] = toInt(input);
            break;
        // AM / PM
        case 'a' : // fall through to A
        case 'A' :
            config._isPm = getLangDefinition(config._l).isPM(input);
            break;
        // 24 HOUR
        case 'H' : // fall through to hh
        case 'HH' : // fall through to hh
        case 'h' : // fall through to hh
        case 'hh' :
            datePartArray[HOUR] = toInt(input);
            break;
        // MINUTE
        case 'm' : // fall through to mm
        case 'mm' :
            datePartArray[MINUTE] = toInt(input);
            break;
        // SECOND
        case 's' : // fall through to ss
        case 'ss' :
            datePartArray[SECOND] = toInt(input);
            break;
        // MILLISECOND
        case 'S' :
        case 'SS' :
        case 'SSS' :
        case 'SSSS' :
            datePartArray[MILLISECOND] = toInt(('0.' + input) * 1000);
            break;
        // UNIX TIMESTAMP WITH MS
        case 'X':
            config._d = new Date(parseFloat(input) * 1000);
            break;
        // TIMEZONE
        case 'Z' : // fall through to ZZ
        case 'ZZ' :
            config._useUTC = true;
            config._tzm = timezoneMinutesFromString(input);
            break;
        case 'w':
        case 'ww':
        case 'W':
        case 'WW':
        case 'd':
        case 'dd':
        case 'ddd':
        case 'dddd':
        case 'e':
        case 'E':
            token = token.substr(0, 1);
            /* falls through */
        case 'gg':
        case 'gggg':
        case 'GG':
        case 'GGGG':
        case 'GGGGG':
            token = token.substr(0, 2);
            if (input) {
                config._w = config._w || {};
                config._w[token] = input;
            }
            break;
        }
    }

    // convert an array to a date.
    // the array should mirror the parameters below
    // note: all values past the year are optional and will default to the lowest possible value.
    // [year, month, day , hour, minute, second, millisecond]
    function dateFromConfig(config) {
        var i, date, input = [], currentDate,
            yearToUse, fixYear, w, temp, lang, weekday, week;

        if (config._d) {
            return;
        }

        currentDate = currentDateArray(config);

        //compute day of the year from weeks and weekdays
        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
            fixYear = function (val) {
                return val ?
                  (val.length < 3 ? (parseInt(val, 10) > 68 ? '19' + val : '20' + val) : val) :
                  (config._a[YEAR] == null ? moment().weekYear() : config._a[YEAR]);
            };

            w = config._w;
            if (w.GG != null || w.W != null || w.E != null) {
                temp = dayOfYearFromWeeks(fixYear(w.GG), w.W || 1, w.E, 4, 1);
            }
            else {
                lang = getLangDefinition(config._l);
                weekday = w.d != null ?  parseWeekday(w.d, lang) :
                  (w.e != null ?  parseInt(w.e, 10) + lang._week.dow : 0);

                week = parseInt(w.w, 10) || 1;

                //if we're parsing 'd', then the low day numbers may be next week
                if (w.d != null && weekday < lang._week.dow) {
                    week++;
                }

                temp = dayOfYearFromWeeks(fixYear(w.gg), week, weekday, lang._week.doy, lang._week.dow);
            }

            config._a[YEAR] = temp.year;
            config._dayOfYear = temp.dayOfYear;
        }

        //if the day of the year is set, figure out what it is
        if (config._dayOfYear) {
            yearToUse = config._a[YEAR] == null ? currentDate[YEAR] : config._a[YEAR];

            if (config._dayOfYear > daysInYear(yearToUse)) {
                config._pf._overflowDayOfYear = true;
            }

            date = makeUTCDate(yearToUse, 0, config._dayOfYear);
            config._a[MONTH] = date.getUTCMonth();
            config._a[DATE] = date.getUTCDate();
        }

        // Default to current date.
        // * if no year, month, day of month are given, default to today
        // * if day of month is given, default month and year
        // * if month is given, default only year
        // * if year is given, don't default anything
        for (i = 0; i < 3 && config._a[i] == null; ++i) {
            config._a[i] = input[i] = currentDate[i];
        }

        // Zero out whatever was not defaulted, including time
        for (; i < 7; i++) {
            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
        }

        // add the offsets to the time to be parsed so that we can have a clean array for checking isValid
        input[HOUR] += toInt((config._tzm || 0) / 60);
        input[MINUTE] += toInt((config._tzm || 0) % 60);

        config._d = (config._useUTC ? makeUTCDate : makeDate).apply(null, input);
    }

    function dateFromObject(config) {
        var normalizedInput;

        if (config._d) {
            return;
        }

        normalizedInput = normalizeObjectUnits(config._i);
        config._a = [
            normalizedInput.year,
            normalizedInput.month,
            normalizedInput.day,
            normalizedInput.hour,
            normalizedInput.minute,
            normalizedInput.second,
            normalizedInput.millisecond
        ];

        dateFromConfig(config);
    }

    function currentDateArray(config) {
        var now = new Date();
        if (config._useUTC) {
            return [
                now.getUTCFullYear(),
                now.getUTCMonth(),
                now.getUTCDate()
            ];
        } else {
            return [now.getFullYear(), now.getMonth(), now.getDate()];
        }
    }

    // date from string and format string
    function makeDateFromStringAndFormat(config) {

        config._a = [];
        config._pf.empty = true;

        // This array is used to make a Date, either with `new Date` or `Date.UTC`
        var lang = getLangDefinition(config._l),
            string = '' + config._i,
            i, parsedInput, tokens, token, skipped,
            stringLength = string.length,
            totalParsedInputLength = 0;

        tokens = expandFormat(config._f, lang).match(formattingTokens) || [];

        for (i = 0; i < tokens.length; i++) {
            token = tokens[i];
            parsedInput = (getParseRegexForToken(token, config).exec(string) || [])[0];
            if (parsedInput) {
                skipped = string.substr(0, string.indexOf(parsedInput));
                if (skipped.length > 0) {
                    config._pf.unusedInput.push(skipped);
                }
                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
                totalParsedInputLength += parsedInput.length;
            }
            // don't parse if it's not a known token
            if (formatTokenFunctions[token]) {
                if (parsedInput) {
                    config._pf.empty = false;
                }
                else {
                    config._pf.unusedTokens.push(token);
                }
                addTimeToArrayFromToken(token, parsedInput, config);
            }
            else if (config._strict && !parsedInput) {
                config._pf.unusedTokens.push(token);
            }
        }

        // add remaining unparsed input length to the string
        config._pf.charsLeftOver = stringLength - totalParsedInputLength;
        if (string.length > 0) {
            config._pf.unusedInput.push(string);
        }

        // handle am pm
        if (config._isPm && config._a[HOUR] < 12) {
            config._a[HOUR] += 12;
        }
        // if is 12 am, change hours to 0
        if (config._isPm === false && config._a[HOUR] === 12) {
            config._a[HOUR] = 0;
        }

        dateFromConfig(config);
        checkOverflow(config);
    }

    function unescapeFormat(s) {
        return s.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4;
        });
    }

    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
    function regexpEscape(s) {
        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
    }

    // date from string and array of format strings
    function makeDateFromStringAndArray(config) {
        var tempConfig,
            bestMoment,

            scoreToBeat,
            i,
            currentScore;

        if (config._f.length === 0) {
            config._pf.invalidFormat = true;
            config._d = new Date(NaN);
            return;
        }

        for (i = 0; i < config._f.length; i++) {
            currentScore = 0;
            tempConfig = extend({}, config);
            initializeParsingFlags(tempConfig);
            tempConfig._f = config._f[i];
            makeDateFromStringAndFormat(tempConfig);

            if (!isValid(tempConfig)) {
                continue;
            }

            // if there is any input that was not parsed add a penalty for that format
            currentScore += tempConfig._pf.charsLeftOver;

            //or tokens
            currentScore += tempConfig._pf.unusedTokens.length * 10;

            tempConfig._pf.score = currentScore;

            if (scoreToBeat == null || currentScore < scoreToBeat) {
                scoreToBeat = currentScore;
                bestMoment = tempConfig;
            }
        }

        extend(config, bestMoment || tempConfig);
    }

    // date from iso format
    function makeDateFromString(config) {
        var i,
            string = config._i,
            match = isoRegex.exec(string);

        if (match) {
            config._pf.iso = true;
            for (i = 4; i > 0; i--) {
                if (match[i]) {
                    // match[5] should be "T" or undefined
                    config._f = isoDates[i - 1] + (match[6] || " ");
                    break;
                }
            }
            for (i = 0; i < 4; i++) {
                if (isoTimes[i][1].exec(string)) {
                    config._f += isoTimes[i][0];
                    break;
                }
            }
            if (parseTokenTimezone.exec(string)) {
                config._f += "Z";
            }
            makeDateFromStringAndFormat(config);
        }
        else {
            config._d = new Date(string);
        }
    }

    function makeDateFromInput(config) {
        var input = config._i,
            matched = aspNetJsonRegex.exec(input);

        if (input === undefined) {
            config._d = new Date();
        } else if (matched) {
            config._d = new Date(+matched[1]);
        } else if (typeof input === 'string') {
            makeDateFromString(config);
        } else if (isArray(input)) {
            config._a = input.slice(0);
            dateFromConfig(config);
        } else if (isDate(input)) {
            config._d = new Date(+input);
        } else if (typeof(input) === 'object') {
            dateFromObject(config);
        } else {
            config._d = new Date(input);
        }
    }

    function makeDate(y, m, d, h, M, s, ms) {
        //can't just apply() to create a date:
        //http://stackoverflow.com/questions/181348/instantiating-a-javascript-object-by-calling-prototype-constructor-apply
        var date = new Date(y, m, d, h, M, s, ms);

        //the date constructor doesn't accept years < 1970
        if (y < 1970) {
            date.setFullYear(y);
        }
        return date;
    }

    function makeUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        if (y < 1970) {
            date.setUTCFullYear(y);
        }
        return date;
    }

    function parseWeekday(input, language) {
        if (typeof input === 'string') {
            if (!isNaN(input)) {
                input = parseInt(input, 10);
            }
            else {
                input = language.weekdaysParse(input);
                if (typeof input !== 'number') {
                    return null;
                }
            }
        }
        return input;
    }

    /************************************
        Relative Time
    ************************************/


    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
    function substituteTimeAgo(string, number, withoutSuffix, isFuture, lang) {
        return lang.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
    }

    function relativeTime(milliseconds, withoutSuffix, lang) {
        var seconds = round(Math.abs(milliseconds) / 1000),
            minutes = round(seconds / 60),
            hours = round(minutes / 60),
            days = round(hours / 24),
            years = round(days / 365),
            args = seconds < 45 && ['s', seconds] ||
                minutes === 1 && ['m'] ||
                minutes < 45 && ['mm', minutes] ||
                hours === 1 && ['h'] ||
                hours < 22 && ['hh', hours] ||
                days === 1 && ['d'] ||
                days <= 25 && ['dd', days] ||
                days <= 45 && ['M'] ||
                days < 345 && ['MM', round(days / 30)] ||
                years === 1 && ['y'] || ['yy', years];
        args[2] = withoutSuffix;
        args[3] = milliseconds > 0;
        args[4] = lang;
        return substituteTimeAgo.apply({}, args);
    }


    /************************************
        Week of Year
    ************************************/


    // firstDayOfWeek       0 = sun, 6 = sat
    //                      the day of the week that starts the week
    //                      (usually sunday or monday)
    // firstDayOfWeekOfYear 0 = sun, 6 = sat
    //                      the first week is the week that contains the first
    //                      of this day of the week
    //                      (eg. ISO weeks use thursday (4))
    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day(),
            adjustedMoment;


        if (daysToDayOfWeek > end) {
            daysToDayOfWeek -= 7;
        }

        if (daysToDayOfWeek < end - 7) {
            daysToDayOfWeek += 7;
        }

        adjustedMoment = moment(mom).add('d', daysToDayOfWeek);
        return {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        };
    }

    //http://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var d = new Date(Date.UTC(year, 0)).getUTCDay(),
            daysToAdd, dayOfYear;

        weekday = weekday != null ? weekday : firstDayOfWeek;
        daysToAdd = firstDayOfWeek - d + (d > firstDayOfWeekOfYear ? 7 : 0);
        dayOfYear = 7 * (week - 1) + (weekday - firstDayOfWeek) + daysToAdd + 1;

        return {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ?  dayOfYear : daysInYear(year - 1) + dayOfYear
        };
    }

    /************************************
        Top Level Functions
    ************************************/

    function makeMoment(config) {
        var input = config._i,
            format = config._f;

        if (typeof config._pf === 'undefined') {
            initializeParsingFlags(config);
        }

        if (input === null) {
            return moment.invalid({nullInput: true});
        }

        if (typeof input === 'string') {
            config._i = input = getLangDefinition().preparse(input);
        }

        if (moment.isMoment(input)) {
            config = extend({}, input);

            config._d = new Date(+input._d);
        } else if (format) {
            if (isArray(format)) {
                makeDateFromStringAndArray(config);
            } else {
                makeDateFromStringAndFormat(config);
            }
        } else {
            makeDateFromInput(config);
        }

        return new Moment(config);
    }

    moment = function (input, format, lang, strict) {
        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        return makeMoment({
            _i : input,
            _f : format,
            _l : lang,
            _strict : strict,
            _isUTC : false
        });
    };

    // creating with utc
    moment.utc = function (input, format, lang, strict) {
        var m;

        if (typeof(lang) === "boolean") {
            strict = lang;
            lang = undefined;
        }
        m = makeMoment({
            _useUTC : true,
            _isUTC : true,
            _l : lang,
            _i : input,
            _f : format,
            _strict : strict
        }).utc();

        return m;
    };

    // creating with unix timestamp (in seconds)
    moment.unix = function (input) {
        return moment(input * 1000);
    };

    // duration
    moment.duration = function (input, key) {
        var isDuration = moment.isDuration(input),
            isNumber = (typeof input === 'number'),
            duration = (isDuration ? input._input : (isNumber ? {} : input)),
            // matching against regexp is expensive, do it on demand
            match = null,
            sign,
            ret,
            parseIso,
            timeEmpty,
            dateTimeEmpty;

        if (isNumber) {
            if (key) {
                duration[key] = input;
            } else {
                duration.milliseconds = input;
            }
        } else if (!!(match = aspNetTimeSpanJsonRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            duration = {
                y: 0,
                d: toInt(match[DATE]) * sign,
                h: toInt(match[HOUR]) * sign,
                m: toInt(match[MINUTE]) * sign,
                s: toInt(match[SECOND]) * sign,
                ms: toInt(match[MILLISECOND]) * sign
            };
        } else if (!!(match = isoDurationRegex.exec(input))) {
            sign = (match[1] === "-") ? -1 : 1;
            parseIso = function (inp) {
                // We'd normally use ~~inp for this, but unfortunately it also
                // converts floats to ints.
                // inp may be undefined, so careful calling replace on it.
                var res = inp && parseFloat(inp.replace(',', '.'));
                // apply sign while we're at it
                return (isNaN(res) ? 0 : res) * sign;
            };
            duration = {
                y: parseIso(match[2]),
                M: parseIso(match[3]),
                d: parseIso(match[4]),
                h: parseIso(match[5]),
                m: parseIso(match[6]),
                s: parseIso(match[7]),
                w: parseIso(match[8])
            };
        }

        ret = new Duration(duration);

        if (isDuration && input.hasOwnProperty('_lang')) {
            ret._lang = input._lang;
        }

        return ret;
    };

    // version number
    moment.version = VERSION;

    // default format
    moment.defaultFormat = isoFormat;

    // This function will be called whenever a moment is mutated.
    // It is intended to keep the offset in sync with the timezone.
    moment.updateOffset = function () {};

    // This function will load languages and then set the global language.  If
    // no arguments are passed in, it will simply return the current global
    // language key.
    moment.lang = function (key, values) {
        var r;
        if (!key) {
            return moment.fn._lang._abbr;
        }
        if (values) {
            loadLang(normalizeLanguage(key), values);
        } else if (values === null) {
            unloadLang(key);
            key = 'en';
        } else if (!languages[key]) {
            getLangDefinition(key);
        }
        r = moment.duration.fn._lang = moment.fn._lang = getLangDefinition(key);
        return r._abbr;
    };

    // returns language data
    moment.langData = function (key) {
        if (key && key._lang && key._lang._abbr) {
            key = key._lang._abbr;
        }
        return getLangDefinition(key);
    };

    // compare moment object
    moment.isMoment = function (obj) {
        return obj instanceof Moment;
    };

    // for typechecking Duration objects
    moment.isDuration = function (obj) {
        return obj instanceof Duration;
    };

    for (i = lists.length - 1; i >= 0; --i) {
        makeList(lists[i]);
    }

    moment.normalizeUnits = function (units) {
        return normalizeUnits(units);
    };

    moment.invalid = function (flags) {
        var m = moment.utc(NaN);
        if (flags != null) {
            extend(m._pf, flags);
        }
        else {
            m._pf.userInvalidated = true;
        }

        return m;
    };

    moment.parseZone = function (input) {
        return moment(input).parseZone();
    };

    /************************************
        Moment Prototype
    ************************************/


    extend(moment.fn = Moment.prototype, {

        clone : function () {
            return moment(this);
        },

        valueOf : function () {
            return +this._d + ((this._offset || 0) * 60000);
        },

        unix : function () {
            return Math.floor(+this / 1000);
        },

        toString : function () {
            return this.clone().lang('en').format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
        },

        toDate : function () {
            return this._offset ? new Date(+this) : this._d;
        },

        toISOString : function () {
            return formatMoment(moment(this).utc(), 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]');
        },

        toArray : function () {
            var m = this;
            return [
                m.year(),
                m.month(),
                m.date(),
                m.hours(),
                m.minutes(),
                m.seconds(),
                m.milliseconds()
            ];
        },

        isValid : function () {
            return isValid(this);
        },

        isDSTShifted : function () {

            if (this._a) {
                return this.isValid() && compareArrays(this._a, (this._isUTC ? moment.utc(this._a) : moment(this._a)).toArray()) > 0;
            }

            return false;
        },

        parsingFlags : function () {
            return extend({}, this._pf);
        },

        invalidAt: function () {
            return this._pf.overflow;
        },

        utc : function () {
            return this.zone(0);
        },

        local : function () {
            this.zone(0);
            this._isUTC = false;
            return this;
        },

        format : function (inputString) {
            var output = formatMoment(this, inputString || moment.defaultFormat);
            return this.lang().postformat(output);
        },

        add : function (input, val) {
            var dur;
            // switch args to support add('s', 1) and add(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, 1);
            return this;
        },

        subtract : function (input, val) {
            var dur;
            // switch args to support subtract('s', 1) and subtract(1, 's')
            if (typeof input === 'string') {
                dur = moment.duration(+val, input);
            } else {
                dur = moment.duration(input, val);
            }
            addOrSubtractDurationFromMoment(this, dur, -1);
            return this;
        },

        diff : function (input, units, asFloat) {
            var that = this._isUTC ? moment(input).zone(this._offset || 0) : moment(input).local(),
                zoneDiff = (this.zone() - that.zone()) * 6e4,
                diff, output;

            units = normalizeUnits(units);

            if (units === 'year' || units === 'month') {
                // average number of days in the months in the given dates
                diff = (this.daysInMonth() + that.daysInMonth()) * 432e5; // 24 * 60 * 60 * 1000 / 2
                // difference in months
                output = ((this.year() - that.year()) * 12) + (this.month() - that.month());
                // adjust by taking difference in days, average number of days
                // and dst in the given months.
                output += ((this - moment(this).startOf('month')) -
                        (that - moment(that).startOf('month'))) / diff;
                // same as above but with zones, to negate all dst
                output -= ((this.zone() - moment(this).startOf('month').zone()) -
                        (that.zone() - moment(that).startOf('month').zone())) * 6e4 / diff;
                if (units === 'year') {
                    output = output / 12;
                }
            } else {
                diff = (this - that);
                output = units === 'second' ? diff / 1e3 : // 1000
                    units === 'minute' ? diff / 6e4 : // 1000 * 60
                    units === 'hour' ? diff / 36e5 : // 1000 * 60 * 60
                    units === 'day' ? (diff - zoneDiff) / 864e5 : // 1000 * 60 * 60 * 24, negate dst
                    units === 'week' ? (diff - zoneDiff) / 6048e5 : // 1000 * 60 * 60 * 24 * 7, negate dst
                    diff;
            }
            return asFloat ? output : absRound(output);
        },

        from : function (time, withoutSuffix) {
            return moment.duration(this.diff(time)).lang(this.lang()._abbr).humanize(!withoutSuffix);
        },

        fromNow : function (withoutSuffix) {
            return this.from(moment(), withoutSuffix);
        },

        calendar : function () {
            var diff = this.diff(moment().zone(this.zone()).startOf('day'), 'days', true),
                format = diff < -6 ? 'sameElse' :
                diff < -1 ? 'lastWeek' :
                diff < 0 ? 'lastDay' :
                diff < 1 ? 'sameDay' :
                diff < 2 ? 'nextDay' :
                diff < 7 ? 'nextWeek' : 'sameElse';
            return this.format(this.lang().calendar(format, this));
        },

        isLeapYear : function () {
            return isLeapYear(this.year());
        },

        isDST : function () {
            return (this.zone() < this.clone().month(0).zone() ||
                this.zone() < this.clone().month(5).zone());
        },

        day : function (input) {
            var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            if (input != null) {
                input = parseWeekday(input, this.lang());
                return this.add({ d : input - day });
            } else {
                return day;
            }
        },

        month : function (input) {
            var utc = this._isUTC ? 'UTC' : '',
                dayOfMonth;

            if (input != null) {
                if (typeof input === 'string') {
                    input = this.lang().monthsParse(input);
                    if (typeof input !== 'number') {
                        return this;
                    }
                }

                dayOfMonth = this.date();
                this.date(1);
                this._d['set' + utc + 'Month'](input);
                this.date(Math.min(dayOfMonth, this.daysInMonth()));

                moment.updateOffset(this);
                return this;
            } else {
                return this._d['get' + utc + 'Month']();
            }
        },

        startOf: function (units) {
            units = normalizeUnits(units);
            // the following switch intentionally omits break keywords
            // to utilize falling through the cases.
            switch (units) {
            case 'year':
                this.month(0);
                /* falls through */
            case 'month':
                this.date(1);
                /* falls through */
            case 'week':
            case 'isoWeek':
            case 'day':
                this.hours(0);
                /* falls through */
            case 'hour':
                this.minutes(0);
                /* falls through */
            case 'minute':
                this.seconds(0);
                /* falls through */
            case 'second':
                this.milliseconds(0);
                /* falls through */
            }

            // weeks are a special case
            if (units === 'week') {
                this.weekday(0);
            } else if (units === 'isoWeek') {
                this.isoWeekday(1);
            }

            return this;
        },

        endOf: function (units) {
            units = normalizeUnits(units);
            return this.startOf(units).add((units === 'isoWeek' ? 'week' : units), 1).subtract('ms', 1);
        },

        isAfter: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) > +moment(input).startOf(units);
        },

        isBefore: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) < +moment(input).startOf(units);
        },

        isSame: function (input, units) {
            units = typeof units !== 'undefined' ? units : 'millisecond';
            return +this.clone().startOf(units) === +moment(input).startOf(units);
        },

        min: function (other) {
            other = moment.apply(null, arguments);
            return other < this ? this : other;
        },

        max: function (other) {
            other = moment.apply(null, arguments);
            return other > this ? this : other;
        },

        zone : function (input) {
            var offset = this._offset || 0;
            if (input != null) {
                if (typeof input === "string") {
                    input = timezoneMinutesFromString(input);
                }
                if (Math.abs(input) < 16) {
                    input = input * 60;
                }
                this._offset = input;
                this._isUTC = true;
                if (offset !== input) {
                    addOrSubtractDurationFromMoment(this, moment.duration(offset - input, 'm'), 1, true);
                }
            } else {
                return this._isUTC ? offset : this._d.getTimezoneOffset();
            }
            return this;
        },

        zoneAbbr : function () {
            return this._isUTC ? "UTC" : "";
        },

        zoneName : function () {
            return this._isUTC ? "Coordinated Universal Time" : "";
        },

        parseZone : function () {
            if (typeof this._i === 'string') {
                this.zone(this._i);
            }
            return this;
        },

        hasAlignedHourOffset : function (input) {
            if (!input) {
                input = 0;
            }
            else {
                input = moment(input).zone();
            }

            return (this.zone() - input) % 60 === 0;
        },

        daysInMonth : function () {
            return daysInMonth(this.year(), this.month());
        },

        dayOfYear : function (input) {
            var dayOfYear = round((moment(this).startOf('day') - moment(this).startOf('year')) / 864e5) + 1;
            return input == null ? dayOfYear : this.add("d", (input - dayOfYear));
        },

        weekYear : function (input) {
            var year = weekOfYear(this, this.lang()._week.dow, this.lang()._week.doy).year;
            return input == null ? year : this.add("y", (input - year));
        },

        isoWeekYear : function (input) {
            var year = weekOfYear(this, 1, 4).year;
            return input == null ? year : this.add("y", (input - year));
        },

        week : function (input) {
            var week = this.lang().week(this);
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        isoWeek : function (input) {
            var week = weekOfYear(this, 1, 4).week;
            return input == null ? week : this.add("d", (input - week) * 7);
        },

        weekday : function (input) {
            var weekday = (this.day() + 7 - this.lang()._week.dow) % 7;
            return input == null ? weekday : this.add("d", input - weekday);
        },

        isoWeekday : function (input) {
            // behaves the same as moment#day except
            // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
            // as a setter, sunday should belong to the previous week.
            return input == null ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7);
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units]();
        },

        set : function (units, value) {
            units = normalizeUnits(units);
            if (typeof this[units] === 'function') {
                this[units](value);
            }
            return this;
        },

        // If passed a language key, it will set the language for this
        // instance.  Otherwise, it will return the language configuration
        // variables for this instance.
        lang : function (key) {
            if (key === undefined) {
                return this._lang;
            } else {
                this._lang = getLangDefinition(key);
                return this;
            }
        }
    });

    // helper for adding shortcuts
    function makeGetterAndSetter(name, key) {
        moment.fn[name] = moment.fn[name + 's'] = function (input) {
            var utc = this._isUTC ? 'UTC' : '';
            if (input != null) {
                this._d['set' + utc + key](input);
                moment.updateOffset(this);
                return this;
            } else {
                return this._d['get' + utc + key]();
            }
        };
    }

    // loop through and add shortcuts (Month, Date, Hours, Minutes, Seconds, Milliseconds)
    for (i = 0; i < proxyGettersAndSetters.length; i ++) {
        makeGetterAndSetter(proxyGettersAndSetters[i].toLowerCase().replace(/s$/, ''), proxyGettersAndSetters[i]);
    }

    // add shortcut for year (uses different syntax than the getter/setter 'year' == 'FullYear')
    makeGetterAndSetter('year', 'FullYear');

    // add plural methods
    moment.fn.days = moment.fn.day;
    moment.fn.months = moment.fn.month;
    moment.fn.weeks = moment.fn.week;
    moment.fn.isoWeeks = moment.fn.isoWeek;

    // add aliased format methods
    moment.fn.toJSON = moment.fn.toISOString;

    /************************************
        Duration Prototype
    ************************************/


    extend(moment.duration.fn = Duration.prototype, {

        _bubble : function () {
            var milliseconds = this._milliseconds,
                days = this._days,
                months = this._months,
                data = this._data,
                seconds, minutes, hours, years;

            // The following code bubbles up values, see the tests for
            // examples of what that means.
            data.milliseconds = milliseconds % 1000;

            seconds = absRound(milliseconds / 1000);
            data.seconds = seconds % 60;

            minutes = absRound(seconds / 60);
            data.minutes = minutes % 60;

            hours = absRound(minutes / 60);
            data.hours = hours % 24;

            days += absRound(hours / 24);
            data.days = days % 30;

            months += absRound(days / 30);
            data.months = months % 12;

            years = absRound(months / 12);
            data.years = years;
        },

        weeks : function () {
            return absRound(this.days() / 7);
        },

        valueOf : function () {
            return this._milliseconds +
              this._days * 864e5 +
              (this._months % 12) * 2592e6 +
              toInt(this._months / 12) * 31536e6;
        },

        humanize : function (withSuffix) {
            var difference = +this,
                output = relativeTime(difference, !withSuffix, this.lang());

            if (withSuffix) {
                output = this.lang().pastFuture(difference, output);
            }

            return this.lang().postformat(output);
        },

        add : function (input, val) {
            // supports only 2.0-style add(1, 's') or add(moment)
            var dur = moment.duration(input, val);

            this._milliseconds += dur._milliseconds;
            this._days += dur._days;
            this._months += dur._months;

            this._bubble();

            return this;
        },

        subtract : function (input, val) {
            var dur = moment.duration(input, val);

            this._milliseconds -= dur._milliseconds;
            this._days -= dur._days;
            this._months -= dur._months;

            this._bubble();

            return this;
        },

        get : function (units) {
            units = normalizeUnits(units);
            return this[units.toLowerCase() + 's']();
        },

        as : function (units) {
            units = normalizeUnits(units);
            return this['as' + units.charAt(0).toUpperCase() + units.slice(1) + 's']();
        },

        lang : moment.fn.lang,

        toIsoString : function () {
            // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
            var years = Math.abs(this.years()),
                months = Math.abs(this.months()),
                days = Math.abs(this.days()),
                hours = Math.abs(this.hours()),
                minutes = Math.abs(this.minutes()),
                seconds = Math.abs(this.seconds() + this.milliseconds() / 1000);

            if (!this.asSeconds()) {
                // this is the same as C#'s (Noda) and python (isodate)...
                // but not other JS (goog.date)
                return 'P0D';
            }

            return (this.asSeconds() < 0 ? '-' : '') +
                'P' +
                (years ? years + 'Y' : '') +
                (months ? months + 'M' : '') +
                (days ? days + 'D' : '') +
                ((hours || minutes || seconds) ? 'T' : '') +
                (hours ? hours + 'H' : '') +
                (minutes ? minutes + 'M' : '') +
                (seconds ? seconds + 'S' : '');
        }
    });

    function makeDurationGetter(name) {
        moment.duration.fn[name] = function () {
            return this._data[name];
        };
    }

    function makeDurationAsGetter(name, factor) {
        moment.duration.fn['as' + name] = function () {
            return +this / factor;
        };
    }

    for (i in unitMillisecondFactors) {
        if (unitMillisecondFactors.hasOwnProperty(i)) {
            makeDurationAsGetter(i, unitMillisecondFactors[i]);
            makeDurationGetter(i.toLowerCase());
        }
    }

    makeDurationAsGetter('Weeks', 6048e5);
    moment.duration.fn.asMonths = function () {
        return (+this - this.years() * 31536e6) / 2592e6 + this.years() * 12;
    };


    /************************************
        Default Lang
    ************************************/


    // Set default language, other languages will inherit from English.
    moment.lang('en', {
        ordinal : function (number) {
            var b = number % 10,
                output = (toInt(number % 100 / 10) === 1) ? 'th' :
                (b === 1) ? 'st' :
                (b === 2) ? 'nd' :
                (b === 3) ? 'rd' : 'th';
            return number + output;
        }
    });

    /* EMBED_LANGUAGES */

    /************************************
        Exposing Moment
    ************************************/

    function makeGlobal(deprecate) {
        var warned = false, local_moment = moment;
        /*global ender:false */
        if (typeof ender !== 'undefined') {
            return;
        }
        // here, `this` means `window` in the browser, or `global` on the server
        // add `moment` as a global object via a string identifier,
        // for Closure Compiler "advanced" mode
        if (deprecate) {
            this.moment = function () {
                if (!warned && console && console.warn) {
                    warned = true;
                    console.warn(
                            "Accessing Moment through the global scope is " +
                            "deprecated, and will be removed in an upcoming " +
                            "release.");
                }
                return local_moment.apply(null, arguments);
            };
        } else {
            this['moment'] = moment;
        }
    }

    // CommonJS module is defined
    if (hasModule) {
        module.exports = moment;
        makeGlobal(true);
    } else if (typeof define === "function" && define.amd) {
        define("moment", function (require, exports, module) {
            if (module.config().noGlobal !== true) {
                // If user provided noGlobal, he is aware of global
                makeGlobal(module.config().noGlobal === undefined);
            }

            return moment;
        });
    } else {
        makeGlobal();
    }
}).call(this);

/*
string.js - Copyright (C) 2012-2013, JP Richardson <jprichardson@gmail.com>
*/!function(){"use strict";function n(e,t){t!==null&&t!==undefined?typeof t=="string"?e.s=t:e.s=t.toString():e.s=t,e.orig=t,t!==null&&t!==undefined?e.__defineGetter__?e.__defineGetter__("length",function(){return e.s.length}):e.length=t.length:e.length=-1}function r(e){n(this,e)}function u(){for(var e in s)(function(e){var t=s[e];i.hasOwnProperty(e)||(o.push(e),i[e]=function(){return String.prototype.s=this,t.apply(this,arguments)})})(e)}function a(){for(var e=0;e<o.length;++e)delete String.prototype[o[e]];o.length=0}function c(){var e=h(),t={};for(var n=0;n<e.length;++n){var r=e[n],s=i[r];try{var o=typeof s.apply("teststring",[]);t[r]=o}catch(u){}}return t}function h(){var e=[];if(Object.getOwnPropertyNames)return e=Object.getOwnPropertyNames(i),e.splice(e.indexOf("valueOf"),1),e.splice(e.indexOf("toString"),1),e;var t={},n=[];for(var r in String.prototype)t[r]=r;for(var r in Object.prototype)delete t[r];for(var r in t)e.push(r);return e}function p(e){return new r(e)}function d(e,t){var n=[],r;for(r=0;r<e.length;r++)n.push(e[r]),t&&t.call(e,e[r],r);return n}var e="1.7.0",t={},i=String.prototype,s=r.prototype={between:function(e,t){var n=this.s,r=n.indexOf(e),i=n.indexOf(t),s=r+e.length;return new this.constructor(i>r?n.slice(s,i):"")},camelize:function(){var e=this.trim().s.replace(/(\-|_|\s)+(.)?/g,function(e,t,n){return n?n.toUpperCase():""});return new this.constructor(e)},capitalize:function(){return new this.constructor(this.s.substr(0,1).toUpperCase()+this.s.substring(1).toLowerCase())},charAt:function(e){return this.s.charAt(e)},chompLeft:function(e){var t=this.s;return t.indexOf(e)===0?(t=t.slice(e.length),new this.constructor(t)):this},chompRight:function(e){if(this.endsWith(e)){var t=this.s;return t=t.slice(0,t.length-e.length),new this.constructor(t)}return this},collapseWhitespace:function(){var e=this.s.replace(/[\s\xa0]+/g," ").replace(/^\s+|\s+$/g,"");return new this.constructor(e)},contains:function(e){return this.s.indexOf(e)>=0},count:function(e){var t=0,n=this.s.indexOf(e);while(n>=0)t+=1,n=this.s.indexOf(e,n+1);return t},dasherize:function(){var e=this.trim().s.replace(/[_\s]+/g,"-").replace(/([A-Z])/g,"-$1").replace(/-+/g,"-").toLowerCase();return new this.constructor(e)},decodeHtmlEntities:function(){var e=this.s;return e=e.replace(/&#(\d+);?/g,function(e,t){return String.fromCharCode(t)}).replace(/&#[xX]([A-Fa-f0-9]+);?/g,function(e,t){return String.fromCharCode(parseInt(t,16))}).replace(/&([^;\W]+;?)/g,function(e,n){var r=n.replace(/;$/,""),i=t[n]||n.match(/;$/)&&t[r];return typeof i=="number"?String.fromCharCode(i):typeof i=="string"?i:e}),new this.constructor(e)},endsWith:function(e){var t=this.s.length-e.length;return t>=0&&this.s.indexOf(e,t)===t},escapeHTML:function(){return new this.constructor(this.s.replace(/[&<>"']/g,function(e){return"&"+m[e]+";"}))},ensureLeft:function(e){var t=this.s;return t.indexOf(e)===0?this:new this.constructor(e+t)},ensureRight:function(e){var t=this.s;return this.endsWith(e)?this:new this.constructor(t+e)},humanize:function(){if(this.s===null||this.s===undefined)return new this.constructor("");var e=this.underscore().replace(/_id$/,"").replace(/_/g," ").trim().capitalize();return new this.constructor(e)},isAlpha:function(){return!/[^a-z\xC0-\xFF]/.test(this.s.toLowerCase())},isAlphaNumeric:function(){return!/[^0-9a-z\xC0-\xFF]/.test(this.s.toLowerCase())},isEmpty:function(){return this.s===null||this.s===undefined?!0:/^[\s\xa0]*$/.test(this.s)},isLower:function(){return this.isAlpha()&&this.s.toLowerCase()===this.s},isNumeric:function(){return!/[^0-9]/.test(this.s)},isUpper:function(){return this.isAlpha()&&this.s.toUpperCase()===this.s},left:function(e){if(e>=0){var t=this.s.substr(0,e);return new this.constructor(t)}return this.right(-e)},lines:function(){return this.replaceAll("\r\n","\n").s.split("\n")},pad:function(e,t){t==null&&(t=" ");if(this.s.length>=e)return new this.constructor(this.s);e-=this.s.length;var n=Array(Math.ceil(e/2)+1).join(t),r=Array(Math.floor(e/2)+1).join(t);return new this.constructor(n+this.s+r)},padLeft:function(e,t){return t==null&&(t=" "),this.s.length>=e?new this.constructor(this.s):new this.constructor(Array(e-this.s.length+1).join(t)+this.s)},padRight:function(e,t){return t==null&&(t=" "),this.s.length>=e?new this.constructor(this.s):new this.constructor(this.s+Array(e-this.s.length+1).join(t))},parseCSV:function(e,t,n,r){e=e||",",n=n||"\\",typeof t=="undefined"&&(t='"');var i=0,s=[],o=[],u=this.s.length,a=!1,f=this,l=function(e){return f.s.charAt(e)};if(typeof r!="undefined")var c=[];t||(a=!0);while(i<u){var h=l(i);switch(h){case n:if(a&&(n!==t||l(i+1)===t)){i+=1,s.push(l(i));break}if(n!==t)break;case t:a=!a;break;case e:a&&t?s.push(h):(o.push(s.join("")),s.length=0);break;case r:a?s.push(h):c&&(o.push(s.join("")),c.push(o),o=[],s.length=0);break;default:a&&s.push(h)}i+=1}return o.push(s.join("")),c?(c.push(o),c):o},replaceAll:function(e,t){var n=this.s.split(e).join(t);return new this.constructor(n)},right:function(e){if(e>=0){var t=this.s.substr(this.s.length-e,e);return new this.constructor(t)}return this.left(-e)},setValue:function(e){return n(this,e),this},slugify:function(){var e=(new r(this.s.replace(/[^\w\s-]/g,"").toLowerCase())).dasherize().s;return e.charAt(0)==="-"&&(e=e.substr(1)),new this.constructor(e)},startsWith:function(e){return this.s.lastIndexOf(e,0)===0},stripPunctuation:function(){return new this.constructor(this.s.replace(/[^\w\s]|_/g,"").replace(/\s+/g," "))},stripTags:function(){var e=this.s,t=arguments.length>0?arguments:[""];return d(t,function(t){e=e.replace(RegExp("</?"+t+"[^<>]*>","gi"),"")}),new this.constructor(e)},template:function(e,t,n){var r=this.s,t=t||p.TMPL_OPEN,n=n||p.TMPL_CLOSE,i=t.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$"),s=n.replace(/[-[\]()*\s]/g,"\\$&").replace(/\$/g,"\\$"),o=new RegExp(i+"(.+?)"+s,"g"),u=r.match(o)||[];return u.forEach(function(i){var s=i.substring(t.length,i.length-n.length);typeof e[s]!="undefined"&&(r=r.replace(i,e[s]))}),new this.constructor(r)},times:function(e){return new this.constructor((new Array(e+1)).join(this.s))},toBoolean:function(){if(typeof this.orig=="string"){var e=this.s.toLowerCase();return e==="true"||e==="yes"||e==="on"}return this.orig===!0||this.orig===1},toFloat:function(e){var t=parseFloat(this.s);return e?parseFloat(t.toFixed(e)):t},toInt:function(){return/^\s*-?0x/i.test(this.s)?parseInt(this.s,16):parseInt(this.s,10)},trim:function(){var e;return typeof i.trim=="undefined"?e=this.s.replace(/(^\s*|\s*$)/g,""):e=this.s.trim(),new this.constructor(e)},trimLeft:function(){var e;return i.trimLeft?e=this.s.trimLeft():e=this.s.replace(/(^\s*)/g,""),new this.constructor(e)},trimRight:function(){var e;return i.trimRight?e=this.s.trimRight():e=this.s.replace(/\s+$/,""),new this.constructor(e)},truncate:function(e,t){var n=this.s;e=~~e,t=t||"...";if(n.length<=e)return new this.constructor(n);var i=function(e){return e.toUpperCase()!==e.toLowerCase()?"A":" "},s=n.slice(0,e+1).replace(/.(?=\W*\w*$)/g,i);return s.slice(s.length-2).match(/\w\w/)?s=s.replace(/\s*\S+$/,""):s=(new r(s.slice(0,s.length-1))).trimRight().s,(s+t).length>n.length?new r(n):new r(n.slice(0,s.length)+t)},toCSV:function(){function u(e){return e!==null&&e!==""}var e=",",t='"',n="\\",i=!0,s=!1,o=[];typeof arguments[0]=="object"?(e=arguments[0].delimiter||e,e=arguments[0].separator||e,t=arguments[0].qualifier||t,i=!!arguments[0].encloseNumbers,n=arguments[0].escape||n,s=!!arguments[0].keys):typeof arguments[0]=="string"&&(e=arguments[0]),typeof arguments[1]=="string"&&(t=arguments[1]),arguments[1]===null&&(t=null);if(this.orig instanceof Array)o=this.orig;else for(var a in this.orig)this.orig.hasOwnProperty(a)&&(s?o.push(a):o.push(this.orig[a]));var f=n+t,l=[];for(var c=0;c<o.length;++c){var h=u(t);typeof o[c]=="number"&&(h&=i),h&&l.push(t);if(o[c]!==null&&o[c]!==undefined){var p=(new r(o[c])).replaceAll(t,f).s;l.push(p)}else l.push("");h&&l.push(t),e&&l.push(e)}return l.length=l.length-1,new this.constructor(l.join(""))},toString:function(){return this.s},underscore:function(){var e=this.trim().s.replace(/([a-z\d])([A-Z]+)/g,"$1_$2").replace(/[-\s]+/g,"_").toLowerCase();return(new r(this.s.charAt(0))).isUpper()&&(e="_"+e),new this.constructor(e)},unescapeHTML:function(){return new this.constructor(this.s.replace(/\&([^;]+);/g,function(e,t){var n;return t in v?v[t]:(n=t.match(/^#x([\da-fA-F]+)$/))?String.fromCharCode(parseInt(n[1],16)):(n=t.match(/^#(\d+)$/))?String.fromCharCode(~~n[1]):e}))},valueOf:function(){return this.s.valueOf()}},o=[],f=c();for(var l in f)(function(e){var t=i[e];typeof t=="function"&&(s[e]||(f[e]==="string"?s[e]=function(){return new this.constructor(t.apply(this,arguments))}:s[e]=t))})(l);s.repeat=s.times,s.include=s.contains,s.toInteger=s.toInt,s.toBool=s.toBoolean,s.decodeHTMLEntities=s.decodeHtmlEntities,s.constructor=r,p.extendPrototype=u,p.restorePrototype=a,p.VERSION=e,p.TMPL_OPEN="{{",p.TMPL_CLOSE="}}",p.ENTITIES=t,typeof module!="undefined"&&typeof module.exports!="undefined"?module.exports=p:typeof define=="function"&&define.amd?define([],function(){return p}):window.S=p;var v={lt:"<",gt:">",quot:'"',apos:"'",amp:"&"},m={};for(var g in v)m[v[g]]=g;t={amp:"&",gt:">",lt:"<",quot:'"',apos:"'",AElig:198,Aacute:193,Acirc:194,Agrave:192,Aring:197,Atilde:195,Auml:196,Ccedil:199,ETH:208,Eacute:201,Ecirc:202,Egrave:200,Euml:203,Iacute:205,Icirc:206,Igrave:204,Iuml:207,Ntilde:209,Oacute:211,Ocirc:212,Ograve:210,Oslash:216,Otilde:213,Ouml:214,THORN:222,Uacute:218,Ucirc:219,Ugrave:217,Uuml:220,Yacute:221,aacute:225,acirc:226,aelig:230,agrave:224,aring:229,atilde:227,auml:228,ccedil:231,eacute:233,ecirc:234,egrave:232,eth:240,euml:235,iacute:237,icirc:238,igrave:236,iuml:239,ntilde:241,oacute:243,ocirc:244,ograve:242,oslash:248,otilde:245,ouml:246,szlig:223,thorn:254,uacute:250,ucirc:251,ugrave:249,uuml:252,yacute:253,yuml:255,copy:169,reg:174,nbsp:160,iexcl:161,cent:162,pound:163,curren:164,yen:165,brvbar:166,sect:167,uml:168,ordf:170,laquo:171,not:172,shy:173,macr:175,deg:176,plusmn:177,sup1:185,sup2:178,sup3:179,acute:180,micro:181,para:182,middot:183,cedil:184,ordm:186,raquo:187,frac14:188,frac12:189,frac34:190,iquest:191,times:215,divide:247,"OElig;":338,"oelig;":339,"Scaron;":352,"scaron;":353,"Yuml;":376,"fnof;":402,"circ;":710,"tilde;":732,"Alpha;":913,"Beta;":914,"Gamma;":915,"Delta;":916,"Epsilon;":917,"Zeta;":918,"Eta;":919,"Theta;":920,"Iota;":921,"Kappa;":922,"Lambda;":923,"Mu;":924,"Nu;":925,"Xi;":926,"Omicron;":927,"Pi;":928,"Rho;":929,"Sigma;":931,"Tau;":932,"Upsilon;":933,"Phi;":934,"Chi;":935,"Psi;":936,"Omega;":937,"alpha;":945,"beta;":946,"gamma;":947,"delta;":948,"epsilon;":949,"zeta;":950,"eta;":951,"theta;":952,"iota;":953,"kappa;":954,"lambda;":955,"mu;":956,"nu;":957,"xi;":958,"omicron;":959,"pi;":960,"rho;":961,"sigmaf;":962,"sigma;":963,"tau;":964,"upsilon;":965,"phi;":966,"chi;":967,"psi;":968,"omega;":969,"thetasym;":977,"upsih;":978,"piv;":982,"ensp;":8194,"emsp;":8195,"thinsp;":8201,"zwnj;":8204,"zwj;":8205,"lrm;":8206,"rlm;":8207,"ndash;":8211,"mdash;":8212,"lsquo;":8216,"rsquo;":8217,"sbquo;":8218,"ldquo;":8220,"rdquo;":8221,"bdquo;":8222,"dagger;":8224,"Dagger;":8225,"bull;":8226,"hellip;":8230,"permil;":8240,"prime;":8242,"Prime;":8243,"lsaquo;":8249,"rsaquo;":8250,"oline;":8254,"frasl;":8260,"euro;":8364,"image;":8465,"weierp;":8472,"real;":8476,"trade;":8482,"alefsym;":8501,"larr;":8592,"uarr;":8593,"rarr;":8594,"darr;":8595,"harr;":8596,"crarr;":8629,"lArr;":8656,"uArr;":8657,"rArr;":8658,"dArr;":8659,"hArr;":8660,"forall;":8704,"part;":8706,"exist;":8707,"empty;":8709,"nabla;":8711,"isin;":8712,"notin;":8713,"ni;":8715,"prod;":8719,"sum;":8721,"minus;":8722,"lowast;":8727,"radic;":8730,"prop;":8733,"infin;":8734,"ang;":8736,"and;":8743,"or;":8744,"cap;":8745,"cup;":8746,"int;":8747,"there4;":8756,"sim;":8764,"cong;":8773,"asymp;":8776,"ne;":8800,"equiv;":8801,"le;":8804,"ge;":8805,"sub;":8834,"sup;":8835,"nsub;":8836,"sube;":8838,"supe;":8839,"oplus;":8853,"otimes;":8855,"perp;":8869,"sdot;":8901,"lceil;":8968,"rceil;":8969,"lfloor;":8970,"rfloor;":8971,"lang;":9001,"rang;":9002,"loz;":9674,"spades;":9824,"clubs;":9827,"hearts;":9829,"diams;":9830}}.call(this);
/**
 * Enhanced Select2 Dropmenus
 *
 * @AJAX Mode - When in this mode, your value will be an object (or array of objects) of the data used by Select2
 *     This change is so that you do not have to do an additional query yourself on top of Select2's own query
 * @params [options] {object} The configuration options passed to $.fn.select2(). Refer to the documentation
 */
angular.module('ui.select2', []).value('uiSelect2Config', {}).directive('uiSelect2', ['uiSelect2Config', '$timeout', function (uiSelect2Config, $timeout) {
  var options = {};
  if (uiSelect2Config) {
    angular.extend(options, uiSelect2Config);
  }
  return {
    require: 'ngModel',
    priority: 1,
    compile: function (tElm, tAttrs) {
      var watch,
        repeatOption,
        repeatAttr,
        isSelect = tElm.is('select'),
        isMultiple = angular.isDefined(tAttrs.multiple);

      // Enable watching of the options dataset if in use
      if (tElm.is('select')) {
        repeatOption = tElm.find('option[ng-repeat], option[data-ng-repeat]');

        if (repeatOption.length) {
          repeatAttr = repeatOption.attr('ng-repeat') || repeatOption.attr('data-ng-repeat');
          watch = jQuery.trim(repeatAttr.split('|')[0]).split(' ').pop();
        }
      }

      return function (scope, elm, attrs, controller) {
        // instance-specific options
        var opts = angular.extend({}, options, scope.$eval(attrs.uiSelect2));

        /*
        Convert from Select2 view-model to Angular view-model.
        */
        var convertToAngularModel = function(select2_data) {
          var model;
          if (opts.simple_tags) {
            model = [];
            angular.forEach(select2_data, function(value, index) {
              model.push(value.id);
            });
          } else {
            model = select2_data;
          }
          return model;
        };

        /*
        Convert from Angular view-model to Select2 view-model.
        */
        var convertToSelect2Model = function(angular_data) {
          var model = [];
          if (!angular_data) {
            return model;
          }

          if (opts.simple_tags) {
            model = [];
            angular.forEach(
              angular_data,
              function(value, index) {
                model.push({'id': value, 'text': value});
              });
          } else {
            model = angular_data;
          }
          return model;
        };

        if (isSelect) {
          // Use <select multiple> instead
          delete opts.multiple;
          delete opts.initSelection;
        } else if (isMultiple) {
          opts.multiple = true;
        }

        if (controller) {
          // Watch the model for programmatic changes
           scope.$watch(tAttrs.ngModel, function(current, old) {
            if (!current) {
              return;
            }
            if (current === old) {
              return;
            }
            controller.$render();
          }, true);
          controller.$render = function () {
            if (isSelect) {
              elm.select2('val', controller.$viewValue);
            } else {
              if (opts.multiple) {
                var viewValue = controller.$viewValue;
                if (angular.isString(viewValue)) {
                  viewValue = viewValue.split(',');
                }
                elm.select2(
                  'data', convertToSelect2Model(viewValue));
              } else {
                if (angular.isObject(controller.$viewValue)) {
                  elm.select2('data', controller.$viewValue);
                } else if (!controller.$viewValue) {
                  elm.select2('data', null);
                } else {
                  elm.select2('val', controller.$viewValue);
                }
              }
            }
          };

          // Watch the options dataset for changes
          if (watch) {
            scope.$watch(watch, function (newVal, oldVal, scope) {
              if (angular.equals(newVal, oldVal)) {
                return;
              }
              // Delayed so that the options have time to be rendered
              $timeout(function () {
                elm.select2('val', controller.$viewValue);
                // Refresh angular to remove the superfluous option
                elm.trigger('change');
                if(newVal && !oldVal && controller.$setPristine) {
                  controller.$setPristine(true);
                }
              });
            });
          }

          // Update valid and dirty statuses
          controller.$parsers.push(function (value) {
            var div = elm.prev();
            div
              .toggleClass('ng-invalid', !controller.$valid)
              .toggleClass('ng-valid', controller.$valid)
              .toggleClass('ng-invalid-required', !controller.$valid)
              .toggleClass('ng-valid-required', controller.$valid)
              .toggleClass('ng-dirty', controller.$dirty)
              .toggleClass('ng-pristine', controller.$pristine);
            return value;
          });

          if (!isSelect) {
            // Set the view and model value and update the angular template manually for the ajax/multiple select2.
            elm.bind("change", function (e) {
              e.stopImmediatePropagation();
              
              if (scope.$$phase || scope.$root.$$phase) {
                return;
              }
              scope.$apply(function () {
                controller.$setViewValue(
                  convertToAngularModel(elm.select2('data')));
              });
            });

            if (opts.initSelection) {
              var initSelection = opts.initSelection;
              opts.initSelection = function (element, callback) {
                initSelection(element, function (value) {
                  controller.$setViewValue(convertToAngularModel(value));
                  callback(value);
                });
              };
            }
          }
        }

        elm.bind("$destroy", function() {
          elm.select2("destroy");
        });

        attrs.$observe('disabled', function (value) {
          elm.select2('enable', !value);
        });

        attrs.$observe('readonly', function (value) {
          elm.select2('readonly', !!value);
        });

        if (attrs.ngMultiple) {
          scope.$watch(attrs.ngMultiple, function(newVal) {
            attrs.$set('multiple', !!newVal);
            elm.select2(opts);
          });
        }

        // Initialize the plugin late so that the injected DOM does not disrupt the template compiler
        $timeout(function () {
          elm.select2(opts);

          // Set initial value - I'm not sure about this but it seems to need to be there
          elm.val(controller.$viewValue);
          // important!
          controller.$render();

          // Not sure if I should just check for !isSelect OR if I should check for 'tags' key
          if (!opts.initSelection && !isSelect) {
            controller.$setViewValue(
              convertToAngularModel(elm.select2('data'))
            );
          }
        });
      };
    }
  };
}]);

/*!
angular-xeditable - 0.1.8
Edit-in-place for angular.js
Build date: 2014-01-10 
*/
/**
 * Angular-xeditable module 
 *
 */
angular.module('xeditable', [])


/**
 * Default options. 
 *
 * @namespace editable-options
 */
//todo: maybe better have editableDefaults, not options...
.value('editableOptions', {
  /**
   * Theme. Possible values `bs3`, `bs2`, `default`.
   * 
   * @var {string} theme
   * @memberOf editable-options
   */  
  theme: 'default',
  /**
   * Whether to show buttons for single editalbe element.  
   * Possible values `right` (default), `no`.
   * 
   * @var {string} buttons
   * @memberOf editable-options
   */    
  buttons: 'right',
  /**
   * Default value for `blur` attribute of single editable element.  
   * Can be `cancel|submit|ignore`.
   * 
   * @var {string} blurElem
   * @memberOf editable-options
   */
  blurElem: 'cancel',
  /**
   * Default value for `blur` attribute of editable form.  
   * Can be `cancel|submit|ignore`.
   * 
   * @var {string} blurForm
   * @memberOf editable-options
   */
  blurForm: 'ignore',
  /**
   * How input elements get activated. Possible values: `focus|select|none`.
   *
   * @var {string} activate
   * @memberOf editable-options
   */
  activate: 'focus'

});
/*
Angular-ui bootstrap datepicker
http://angular-ui.github.io/bootstrap/#/datepicker
*/
angular.module('xeditable').directive('editableBsdate', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableBsdate',
      inputTpl: '<input type="text">'
    });
}]);
/*
Angular-ui bootstrap editable timepicker
http://angular-ui.github.io/bootstrap/#/timepicker
*/
angular.module('xeditable').directive('editableBstime', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableBstime',
      inputTpl: '<timepicker></timepicker>',
      render: function() {
        this.parent.render.call(this);

        // timepicker can't update model when ng-model set directly to it
        // see: https://github.com/angular-ui/bootstrap/issues/1141
        // so we wrap it into DIV
        var div = angular.element('<div class="well well-small" style="display:inline-block;"></div>');

        // move ng-model to wrapping div
        div.attr('ng-model', this.inputEl.attr('ng-model'));
        this.inputEl.removeAttr('ng-model');

        // move ng-change to wrapping div
        if(this.attrs.eNgChange) {
          div.attr('ng-change', this.inputEl.attr('ng-change'));
          this.inputEl.removeAttr('ng-change');
        }

        // wrap
        this.inputEl.wrap(div);
      }
    });
}]);
//checkbox
angular.module('xeditable').directive('editableCheckbox', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableCheckbox',
      inputTpl: '<input type="checkbox">',
      render: function() {
        this.parent.render.call(this);
        if(this.attrs.eTitle) {
          this.inputEl.wrap('<label></label>');
          this.inputEl.after(angular.element('<span></span>').text(this.attrs.eTitle));
        }
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          setTimeout(function() {
            self.scope.$apply(function() {
              self.scope.$form.$submit();
            });
          }, 500);
        });
      }
    });
}]);
// checklist
angular.module('xeditable').directive('editableChecklist', [
  'editableDirectiveFactory',
  'editableNgOptionsParser',
  function(editableDirectiveFactory, editableNgOptionsParser) {
    return editableDirectiveFactory({
      directiveName: 'editableChecklist',
      inputTpl: '<span></span>',
      useCopy: true,
      render: function() {
        this.parent.render.call(this);
        var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
        var html = '<label ng-repeat="'+parsed.ngRepeat+'">'+
          '<input type="checkbox" checklist-model="$parent.$data" checklist-value="'+parsed.locals.valueFn+'">'+
          '<span ng-bind="'+parsed.locals.displayFn+'"></span></label>';

        this.inputEl.removeAttr('ng-model');
        this.inputEl.removeAttr('ng-options');
        this.inputEl.html(html);
      }
    });
}]);
/*
Input types: text|email|tel|number|url|search|color|date|datetime|time|month|week
*/

(function() {

  var types = 'text|email|tel|number|url|search|color|date|datetime|time|month|week'.split('|');

  //todo: datalist
  
  // generate directives
  angular.forEach(types, function(type) {
    var directiveName = 'editable'+type.charAt(0).toUpperCase() + type.slice(1);
    angular.module('xeditable').directive(directiveName, ['editableDirectiveFactory',
      function(editableDirectiveFactory) {
        return editableDirectiveFactory({
          directiveName: directiveName,
          inputTpl: '<input type="'+type+'">'
        });
    }]);
  });

  //`range` is bit specific
  angular.module('xeditable').directive('editableRange', ['editableDirectiveFactory',
    function(editableDirectiveFactory) {
      return editableDirectiveFactory({
        directiveName: 'editableRange',
        inputTpl: '<input type="range" id="range" name="range">',
        render: function() {
          this.parent.render.call(this);
          this.inputEl.after('<output>{{$data}}</output>');
        }        
      });
  }]);

}());


// radiolist
angular.module('xeditable').directive('editableRadiolist', [
  'editableDirectiveFactory',
  'editableNgOptionsParser',
  function(editableDirectiveFactory, editableNgOptionsParser) {
    return editableDirectiveFactory({
      directiveName: 'editableRadiolist',
      inputTpl: '<span></span>',
      render: function() {
        this.parent.render.call(this);
        var parsed = editableNgOptionsParser(this.attrs.eNgOptions);
        var html = '<label ng-repeat="'+parsed.ngRepeat+'">'+
          '<input type="radio" ng-model="$parent.$data" value="{{'+parsed.locals.valueFn+'}}">'+
          '<span ng-bind="'+parsed.locals.displayFn+'"></span></label>';

        this.inputEl.removeAttr('ng-model');
        this.inputEl.removeAttr('ng-options');
        this.inputEl.html(html);
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          setTimeout(function() {
            self.scope.$apply(function() {
              self.scope.$form.$submit();
            });
          }, 500);
        });
      }
    });
}]);
//select
angular.module('xeditable').directive('editableSelect', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableSelect',
      inputTpl: '<select></select>',
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          self.scope.$apply(function() {
            self.scope.$form.$submit();
          });
        });
      }
    });
}]);
//textarea
angular.module('xeditable').directive('editableTextarea', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableTextarea',
      inputTpl: '<textarea></textarea>',
      addListeners: function() {
        var self = this;
        self.parent.addListeners.call(self);
        // submit textarea by ctrl+enter even with buttons
        if (self.single && self.buttons !== 'no') {
          self.autosubmit();
        }
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('keydown', function(e) {
          if ((e.ctrlKey || e.metaKey) && (e.keyCode === 13)) {
            self.scope.$apply(function() {
              self.scope.$form.$submit();
            });
          }
        });
      }
    });
}]);

/**
 * EditableController class. 
 * Attached to element with `editable-xxx` directive.
 *
 * @namespace editable-element
 */
/*
TODO: this file should be refactored to work more clear without closures!
*/
angular.module('xeditable').factory('editableController', 
  ['$q', 'editableUtils',
  function($q, editableUtils) {

  //EditableController function
  EditableController.$inject = ['$scope', '$attrs', '$element', '$parse', 'editableThemes', 'editableOptions', '$rootScope', '$compile', '$q'];
  function EditableController($scope, $attrs, $element, $parse, editableThemes, editableOptions, $rootScope, $compile, $q) {
    var valueGetter;

    //if control is disabled - it does not participate in waiting process
    var inWaiting;

    var self = this;

    self.scope = $scope;
    self.elem = $element;
    self.attrs = $attrs;
    self.inputEl = null;
    self.editorEl = null;
    self.single = true;
    self.error = '';
    self.theme =  editableThemes[editableOptions.theme] || editableThemes['default'];
    self.parent = {};

    //to be overwritten by directive
    self.inputTpl = '';
    self.directiveName = '';

    // with majority of controls copy is not needed, but..
    // copy MUST NOT be used for `select-multiple` with objects as items
    // copy MUST be used for `checklist`
    self.useCopy = false;

    //runtime (defaults)
    self.single = null;

    /**
     * Attributes defined with `e-*` prefix automatically transfered from original element to
     * control.  
     * For example, if you set `<span editable-text="user.name" e-style="width: 100px"`>
     * then input will appear as `<input style="width: 100px">`.  
     * See [demo](#text-customize).
     * 
     * @var {any|attribute} e-*
     * @memberOf editable-element
     */ 

    /**
     * Whether to show ok/cancel buttons. Values: `right|no`.
     * If set to `no` control automatically submitted when value changed.  
     * If control is part of form buttons will never be shown. 
     * 
     * @var {string|attribute} buttons
     * @memberOf editable-element
     */    
    self.buttons = 'right'; 
    /**
     * Action when control losses focus. Values: `cancel|submit|ignore`.
     * Has sense only for single editable element.
     * Otherwise, if control is part of form - you should set `blur` of form, not of individual element.
     * 
     * @var {string|attribute} blur
     * @memberOf editable-element
     */     
    // no real `blur` property as it is transfered to editable form

    //init
    self.init = function(single) {
      self.single = single;

      self.name = $attrs.eName || $attrs[self.directiveName];
      /*
      if(!$attrs[directiveName] && !$attrs.eNgModel && ($attrs.eValue === undefined)) {
        throw 'You should provide value for `'+directiveName+'` or `e-value` in editable element!';
      }
      */
      if($attrs[self.directiveName]) {
        valueGetter = $parse($attrs[self.directiveName]);
      } else {
        throw 'You should provide value for `'+self.directiveName+'` in editable element!';
      }

      // settings for single and non-single
      if (!self.single) {
        // hide buttons for non-single
        self.buttons = 'no';
      } else {
        self.buttons = self.attrs.buttons || editableOptions.buttons;
      }

      //if name defined --> watch changes and update $data in form
      if($attrs.eName) {
        self.scope.$watch('$data', function(newVal){
          self.scope.$form.$data[$attrs.eName] = newVal;
        });
      }

      /**
       * Called when control is shown.  
       * See [demo](#select-remote).
       * 
       * @var {method|attribute} onshow
       * @memberOf editable-element
       */
      if($attrs.onshow) {
        self.onshow = function() {
          return self.catchError($parse($attrs.onshow)($scope));
        };
      }

      /**
       * Called when control is hidden after both save or cancel.  
       * 
       * @var {method|attribute} onhide
       * @memberOf editable-element
       */
      if($attrs.onhide) {
        self.onhide = function() {
          return $parse($attrs.onhide)($scope);
        };
      }

      /**
       * Called when control is cancelled.  
       * 
       * @var {method|attribute} oncancel
       * @memberOf editable-element
       */
      if($attrs.oncancel) {
        self.oncancel = function() {
          return $parse($attrs.oncancel)($scope);
        };
      }          

      /**
       * Called during submit before value is saved to model.  
       * See [demo](#onbeforesave).
       * 
       * @var {method|attribute} onbeforesave
       * @memberOf editable-element
       */
      if ($attrs.onbeforesave) {
        self.onbeforesave = function() {
          return self.catchError($parse($attrs.onbeforesave)($scope));
        };
      }

      /**
       * Called during submit after value is saved to model.  
       * See [demo](#onaftersave).
       * 
       * @var {method|attribute} onaftersave
       * @memberOf editable-element
       */
      if ($attrs.onaftersave) {
        self.onaftersave = function() {
          return self.catchError($parse($attrs.onaftersave)($scope));
        };
      }

      // watch change of model to update editable element
      // now only add/remove `editable-empty` class.
      // Initially this method called with newVal = undefined, oldVal = undefined
      // so no need initially call handleEmpty() explicitly
      $scope.$parent.$watch($attrs[self.directiveName], function(newVal, oldVal) {
        self.handleEmpty();
      });
    };

    self.render = function() {
      var theme = self.theme;

      //build input
      self.inputEl = angular.element(self.inputTpl);

      //build controls
      self.controlsEl = angular.element(theme.controlsTpl);
      self.controlsEl.append(self.inputEl);

      //build buttons
      if(self.buttons !== 'no') {
        self.buttonsEl = angular.element(theme.buttonsTpl);
        self.submitEl = angular.element(theme.submitTpl);
        self.cancelEl = angular.element(theme.cancelTpl);
        self.buttonsEl.append(self.submitEl).append(self.cancelEl);
        self.controlsEl.append(self.buttonsEl);
        
        self.inputEl.addClass('editable-has-buttons');
      }

      //build error
      self.errorEl = angular.element(theme.errorTpl);
      self.controlsEl.append(self.errorEl);

      //build editor
      self.editorEl = angular.element(self.single ? theme.formTpl : theme.noformTpl);
      self.editorEl.append(self.controlsEl);

      // transfer `e-*|data-e-*|x-e-*` attributes
      for(var k in $attrs.$attr) {
        if(k.length <= 1) {
          continue;
        }
        var transferAttr = false;
        var nextLetter = k.substring(1, 2);

        // if starts with `e` + uppercase letter
        if(k.substring(0, 1) === 'e' && nextLetter === nextLetter.toUpperCase()) {
          transferAttr = k.substring(1); // cut `e`
        } else {
          continue;
        }
        
        // exclude `form` and `ng-submit`, 
        if(transferAttr === 'Form' || transferAttr === 'NgSubmit') {
          continue;
        }

        // convert back to lowercase style
        transferAttr = transferAttr.substring(0, 1).toLowerCase() + editableUtils.camelToDash(transferAttr.substring(1));  

        // workaround for attributes without value (e.g. `multiple = "multiple"`)
        var attrValue = ($attrs[k] === '') ? transferAttr : $attrs[k];

        // set attributes to input
        self.inputEl.attr(transferAttr, attrValue);
      }

      self.inputEl.addClass('editable-input');
      self.inputEl.attr('ng-model', '$data');

      // add directiveName class to editor, e.g. `editable-text`
      self.editorEl.addClass(editableUtils.camelToDash(self.directiveName));

      if(self.single) {
        self.editorEl.attr('editable-form', '$form');
        // transfer `blur` to form
        self.editorEl.attr('blur', self.attrs.blur || (self.buttons === 'no' ? 'cancel' : editableOptions.blurElem));
      }

      //apply `postrender` method of theme
      if(angular.isFunction(theme.postrender)) {
        theme.postrender.call(self);
      }

    };

    // with majority of controls copy is not needed, but..
    // copy MUST NOT be used for `select-multiple` with objects as items
    // copy MUST be used for `checklist`
    self.setLocalValue = function() {
      self.scope.$data = self.useCopy ? 
        angular.copy(valueGetter($scope.$parent)) : 
        valueGetter($scope.$parent);
    };

    //show
    self.show = function() {
      // set value of scope.$data
      self.setLocalValue();

      /*
      Originally render() was inside init() method, but some directives polluting editorEl,
      so it is broken on second openning.
      Cloning is not a solution as jqLite can not clone with event handler's.
      */
      self.render();

      // insert into DOM
      $element.after(self.editorEl);

      // compile (needed to attach ng-* events from markup)
      $compile(self.editorEl)($scope);

      // attach listeners (`escape`, autosubmit, etc)
      self.addListeners();

      // hide element
      $element.addClass('editable-hide');

      // onshow
      return self.onshow();
    };

    //hide
    self.hide = function() {
      self.editorEl.remove();
      $element.removeClass('editable-hide');

      // onhide
      return self.onhide();
    };

    // cancel
    self.cancel = function() {
      // oncancel
      self.oncancel();
      // don't call hide() here as it called in form's code
    };

    /*
    Called after show to attach listeners
    */
    self.addListeners = function() {
      // bind keyup for `escape`
      self.inputEl.bind('keyup', function(e) {
          if(!self.single) {
            return;
          }

          // todo: move this to editable-form!
          switch(e.keyCode) {
            // hide on `escape` press
            case 27:
              self.scope.$apply(function() {
                self.scope.$form.$cancel();
              });
            break;
          }
      });

      // autosubmit when `no buttons`
      if (self.single && self.buttons === 'no') {
        self.autosubmit();
      }

      // click - mark element as clicked to exclude in document click handler
      self.editorEl.bind('click', function(e) {
        // ignore right/middle button click
        if (e.which !== 1) {
          return;
        }

        if (self.scope.$form.$visible) {
          self.scope.$form._clicked = true;
        }
      });
    };

    // setWaiting
    self.setWaiting = function(value) {
      if (value) {
        // participate in waiting only if not disabled
        inWaiting = !self.inputEl.attr('disabled') &&
                    !self.inputEl.attr('ng-disabled') &&
                    !self.inputEl.attr('ng-enabled');
        if (inWaiting) {
          self.inputEl.attr('disabled', 'disabled');
          if(self.buttonsEl) {
            self.buttonsEl.find('button').attr('disabled', 'disabled');
          }
        }
      } else {
        if (inWaiting) {
          self.inputEl.removeAttr('disabled');
          if (self.buttonsEl) {
            self.buttonsEl.find('button').removeAttr('disabled');
          }
        }
      }
    };

    self.activate = function() {
      setTimeout(function() {
        var el = self.inputEl[0];
        if (editableOptions.activate === 'focus' && el.focus) {
          el.focus();
        }
        if (editableOptions.activate === 'select' && el.select) {
          el.select();
        }
      }, 0);
    };

    self.setError = function(msg) {
      if(!angular.isObject(msg)) {
        $scope.$error = msg;
        self.error = msg;
      }
    };

    /*
    Checks that result is string or promise returned string and shows it as error message
    Applied to onshow, onbeforesave, onaftersave
    */
    self.catchError = function(result, noPromise) {
      if (angular.isObject(result) && noPromise !== true) {
        $q.when(result).then(
          //success and fail handlers are equal
          angular.bind(this, function(r) {
            this.catchError(r, true);
          }),
          angular.bind(this, function(r) {
            this.catchError(r, true);
          })
        );
      //check $http error
      } else if (noPromise && angular.isObject(result) && result.status &&
        (result.status !== 200) && result.data && angular.isString(result.data)) {
        this.setError(result.data);
        //set result to string: to let form know that there was error
        result = result.data;
      } else if (angular.isString(result)) {
        this.setError(result);
      }
      return result;
    };

    self.save = function() {
      valueGetter.assign($scope.$parent, angular.copy(self.scope.$data));

      // no need to call handleEmpty here as we are watching change of model value
      // self.handleEmpty();
    };

    /*
    attach/detach `editable-empty` class to element
    */
    self.handleEmpty = function() {
      var val = valueGetter($scope.$parent);
      var isEmpty = val === null || val === undefined || val === "" || (angular.isArray(val) && val.length === 0); 
      $element.toggleClass('editable-empty', isEmpty);
    };

    /*
    Called when `buttons = "no"` to submit automatically
    */
    self.autosubmit = angular.noop;

    self.onshow = angular.noop;
    self.onhide = angular.noop;
    self.oncancel = angular.noop;
    self.onbeforesave = angular.noop;
    self.onaftersave = angular.noop;
  }

  return EditableController;
}]);

/*
editableFactory is used to generate editable directives (see `/directives` folder)
Inside it does several things:
- detect form for editable element. Form may be one of three types:
  1. autogenerated form (for single editable elements)
  2. wrapper form (element wrapped by <form> tag)
  3. linked form (element has `e-form` attribute pointing to existing form)

- attach editableController to element

Depends on: editableController, editableFormFactory
*/
angular.module('xeditable').factory('editableDirectiveFactory',
['$parse', '$compile', 'editableThemes', '$rootScope', '$document', 'editableController', 'editableFormController',
function($parse, $compile, editableThemes, $rootScope, $document, editableController, editableFormController) {

  //directive object
  return function(overwrites) {
    return {
      restrict: 'A',
      scope: true,
      require: [overwrites.directiveName, '?^form'],
      controller: editableController,
      link: function(scope, elem, attrs, ctrl) {
        // editable controller
        var eCtrl = ctrl[0];

        // form controller
        var eFormCtrl;

        // this variable indicates is element is bound to some existing form, 
        // or it's single element who's form will be generated automatically
        // By default consider single element without any linked form.ß
        var hasForm = false;
     
        // element wrapped by form
        if(ctrl[1]) {
          eFormCtrl = ctrl[1];
          hasForm = true;
        } else if(attrs.eForm) { // element not wrapped by <form>, but we hane `e-form` attr
          var getter = $parse(attrs.eForm)(scope);
          if(getter) { // form exists in scope (above), e.g. editable column
            eFormCtrl = getter;
            hasForm = true;
          } else { // form exists below or not exist at all: check document.forms
            for(var i=0; i<$document[0].forms.length;i++){
              if($document[0].forms[i].name === attrs.eForm) {
                // form is below and not processed yet
                eFormCtrl = null;
                hasForm = true;
                break;
              }
            }
          }
        }

        /*
        if(hasForm && !attrs.eName) {
          throw 'You should provide `e-name` for editable element inside form!';
        }
        */

        //check for `editable-form` attr in form
        /*
        if(eFormCtrl && ) {
          throw 'You should provide `e-name` for editable element inside form!';
        }
        */

        // store original props to `parent` before merge
        angular.forEach(overwrites, function(v, k) {
          if(eCtrl[k] !== undefined) {
            eCtrl.parent[k] = eCtrl[k];
          }
        });

        // merge overwrites to base editable controller
        angular.extend(eCtrl, overwrites);

        // init editable ctrl
        eCtrl.init(!hasForm);

        // publich editable controller as `$editable` to be referenced in html
        scope.$editable = eCtrl;

        // add `editable` class to element
        elem.addClass('editable');

        // hasForm
        if(hasForm) {
          if(eFormCtrl) {
            scope.$form = eFormCtrl;
            if(!scope.$form.$addEditable) {
              throw 'Form with editable elements should have `editable-form` attribute.';
            }
            scope.$form.$addEditable(eCtrl);
          } else {
            // future form (below): add editable controller to buffer and add to form later
            $rootScope.$$editableBuffer = $rootScope.$$editableBuffer || {};
            $rootScope.$$editableBuffer[attrs.eForm] = $rootScope.$$editableBuffer[attrs.eForm] || [];
            $rootScope.$$editableBuffer[attrs.eForm].push(eCtrl);
            scope.$form = null; //will be re-assigned later
          }
        // !hasForm
        } else {
          // create editableform controller
          scope.$form = editableFormController();
          // add self to editable controller
          scope.$form.$addEditable(eCtrl);

          // if `e-form` provided, publish local $form in scope
          if(attrs.eForm) {
            scope.$parent[attrs.eForm] = scope.$form;
          }

          // bind click - if no external form defined
          if(!attrs.eForm) {
            elem.addClass('editable-click');
            elem.bind('click', function(e) {
              e.preventDefault();
              e.editable = eCtrl;
              scope.$apply(function(){
                scope.$form.$show();
              });
            });
          }
        }

      }
    };
  };
}]);

/*
Returns editableForm controller
*/
angular.module('xeditable').factory('editableFormController', 
  ['$parse', '$document', '$rootScope', 'editablePromiseCollection', 'editableUtils',
  function($parse, $document, $rootScope, editablePromiseCollection, editableUtils) {

  // array of opened editable forms
  var shown = [];

  // bind click to body: cancel|submit|ignore forms
  $document.bind('click', function(e) {
    // ignore right/middle button click
    if (e.which !== 1) {
      return;
    }

    var toCancel = [];
    var toSubmit = [];
    for (var i=0; i<shown.length; i++) {

      // exclude clicked
      if (shown[i]._clicked) {
        shown[i]._clicked = false;
        continue;
      }

      // exclude waiting
      if (shown[i].$waiting) {
        continue;
      }

      if (shown[i]._blur === 'cancel') {
        toCancel.push(shown[i]);
      }

      if (shown[i]._blur === 'submit') {
        toSubmit.push(shown[i]);
      }
    }

    if (toCancel.length || toSubmit.length) {
      $rootScope.$apply(function() {
        angular.forEach(toCancel, function(v){ v.$cancel(); });
        angular.forEach(toSubmit, function(v){ v.$submit(); });
      });
    }
  });
 

  var base = {
    $addEditable: function(editable) {
      //console.log('add editable', editable.elem, editable.elem.bind);
      this.$editables.push(editable);

      //'on' is not supported in angular 1.0.8
      editable.elem.bind('$destroy', angular.bind(this, this.$removeEditable, editable));

      //bind editable's local $form to self (if not bound yet, below form) 
      if (!editable.scope.$form) {
        editable.scope.$form = this;
      }

      //if form already shown - call show() of new editable
      if (this.$visible) {
        editable.catchError(editable.show());
      }
    },

    $removeEditable: function(editable) {
      //arrayRemove
      for(var i=0; i < this.$editables.length; i++) {
        if(this.$editables[i] === editable) {
          this.$editables.splice(i, 1);
          return;
        }
      }
    },

    /**
     * Shows form with editable controls.
     * 
     * @method $show()
     * @memberOf editable-form
     */
    $show: function() {
      if (this.$visible) {
        return;
      }

      this.$visible = true;

      var pc = editablePromiseCollection();

      //own show
      pc.when(this.$onshow());

      //clear errors
      this.$setError(null, '');

      //children show
      angular.forEach(this.$editables, function(editable) {
        pc.when(editable.show());
      });

      //wait promises and activate
      pc.then({
        onWait: angular.bind(this, this.$setWaiting), 
        onTrue: angular.bind(this, this.$activate), 
        onFalse: angular.bind(this, this.$activate), 
        onString: angular.bind(this, this.$activate)
      });

      // add to internal list of shown forms
      // setTimeout needed to prevent closing right after opening (e.g. when trigger by button)
      setTimeout(angular.bind(this, function() {
        // clear `clicked` to get ready for clicks on visible form
        this._clicked = false;
        if(editableUtils.indexOf(shown, this) === -1) {
          shown.push(this);
        }
      }), 0);      
    },

    /**
     * Sets focus on form field specified by `name`.
     * 
     * @method $activate(name)
     * @param {string} name name of field
     * @memberOf editable-form
     */
    $activate: function(name) {
      var i;
      if (this.$editables.length) {
        //activate by name
        if (angular.isString(name)) {
          for(i=0; i<this.$editables.length; i++) {
            if (this.$editables[i].name === name) {
              this.$editables[i].activate();
              return;
            }
          }
        }

        //try activate error field
        for(i=0; i<this.$editables.length; i++) {
          if (this.$editables[i].error) {
            this.$editables[i].activate();
            return;
          }
        }

        //by default activate first field
        this.$editables[0].activate();
      }
    },

    /**
     * Hides form with editable controls without saving.
     * 
     * @method $hide()
     * @memberOf editable-form
     */
    $hide: function() {
      if (!this.$visible) {
        return;
      }      
      this.$visible = false;
      // self hide
      this.$onhide();
      // children's hide
      angular.forEach(this.$editables, function(editable) {
        editable.hide();
      });

      // remove from internal list of shown forms
      editableUtils.arrayRemove(shown, this);
    },

    /**
     * Triggers `oncancel` event and calls `$hide()`.
     * 
     * @method $cancel()
     * @memberOf editable-form
     */
    $cancel: function() {
      if (!this.$visible) {
        return;
      }      
      // self cancel
      this.$oncancel();
      // children's cancel      
      angular.forEach(this.$editables, function(editable) {
        editable.cancel();
      });
      // self hide
      this.$hide();
    },    

    $setWaiting: function(value) {
      this.$waiting = !!value;
      // we can't just set $waiting variable and use it via ng-disabled in children
      // because in editable-row form is not accessible
      angular.forEach(this.$editables, function(editable) {
        editable.setWaiting(!!value);
      });
    },

    /**
     * Shows error message for particular field.
     * 
     * @method $setError(name, msg)
     * @param {string} name name of field
     * @param {string} msg error message
     * @memberOf editable-form
     */
    $setError: function(name, msg) {
      angular.forEach(this.$editables, function(editable) {
        if(!name || editable.name === name) {
          editable.setError(msg);
        }
      });
    },

    $submit: function() {
      if (this.$waiting) {
        return;
      } 

      //clear errors
      this.$setError(null, '');

      //children onbeforesave
      var pc = editablePromiseCollection();
      angular.forEach(this.$editables, function(editable) {
        pc.when(editable.onbeforesave());
      });

      /*
      onbeforesave result:
      - true/undefined: save data and close form
      - false: close form without saving
      - string: keep form open and show error
      */
      pc.then({
        onWait: angular.bind(this, this.$setWaiting), 
        onTrue: angular.bind(this, checkSelf, true), 
        onFalse: angular.bind(this, checkSelf, false), 
        onString: angular.bind(this, this.$activate)
      });

      //save
      function checkSelf(childrenTrue){
        var pc = editablePromiseCollection();
        pc.when(this.$onbeforesave());
        pc.then({
          onWait: angular.bind(this, this.$setWaiting), 
          onTrue: childrenTrue ? angular.bind(this, this.$save) : angular.bind(this, this.$hide), 
          onFalse: angular.bind(this, this.$hide), 
          onString: angular.bind(this, this.$activate)
        });
      }
    },

    $save: function() {
      // write model for each editable
      angular.forEach(this.$editables, function(editable) {
        editable.save();
      });

      //call onaftersave of self and children
      var pc = editablePromiseCollection();
      pc.when(this.$onaftersave());
      angular.forEach(this.$editables, function(editable) {
        pc.when(editable.onaftersave());
      });

      /*
      onaftersave result:
      - true/undefined/false: just close form
      - string: keep form open and show error
      */
      pc.then({
        onWait: angular.bind(this, this.$setWaiting), 
        onTrue: angular.bind(this, this.$hide), 
        onFalse: angular.bind(this, this.$hide), 
        onString: angular.bind(this, this.$activate)
      });
    },

    $onshow: angular.noop,
    $oncancel: angular.noop,
    $onhide: angular.noop,
    $onbeforesave: angular.noop,
    $onaftersave: angular.noop
  };

  return function() {
    return angular.extend({
      $editables: [],
      /**
       * Form visibility flag.
       * 
       * @var {bool} $visible
       * @memberOf editable-form
       */
      $visible: false,
      /**
       * Form waiting flag. It becomes `true` when form is loading or saving data.
       * 
       * @var {bool} $waiting
       * @memberOf editable-form
       */
      $waiting: false,
      $data: {},
      _clicked: false,
      _blur: null
    }, base);
  };
}]);

/**
 * EditableForm directive. Should be defined in <form> containing editable controls.  
 * It add some usefull methods to form variable exposed to scope by `name="myform"` attribute.
 *
 * @namespace editable-form
 */
angular.module('xeditable').directive('editableForm',
  ['$rootScope', '$parse', 'editableFormController', 'editableOptions',
  function($rootScope, $parse, editableFormController, editableOptions) {
    return {
      restrict: 'A',
      require: ['form'],
      //require: ['form', 'editableForm'],
      //controller: EditableFormController,
      compile: function() {
        return {
          pre: function(scope, elem, attrs, ctrl) {
            var form = ctrl[0];
            var eForm;

            //if `editableForm` has value - publish smartly under this value
            //this is required only for single editor form that is created and removed
            if(attrs.editableForm) {
              if(scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
                eForm = scope[attrs.editableForm];
                angular.extend(form, eForm);
              } else {
                eForm = editableFormController();
                scope[attrs.editableForm] = eForm;
                angular.extend(eForm, form);
              }
            } else { //just merge to form and publish if form has name
              eForm = editableFormController();
              angular.extend(form, eForm);
            }

            //read editables from buffer (that appeared before FORM tag)
            var buf = $rootScope.$$editableBuffer;
            var name = form.$name;
            if(name && buf && buf[name]) {
              angular.forEach(buf[name], function(editable) {
                eForm.$addEditable(editable);
              });
              delete buf[name];
            }
          },
          post: function(scope, elem, attrs, ctrl) {
            var eForm;

            if(attrs.editableForm && scope[attrs.editableForm] && scope[attrs.editableForm].$show) {
              eForm = scope[attrs.editableForm];
            } else {
              eForm = ctrl[0];
            }

            /**
             * Called when form is shown.
             * 
             * @var {method|attribute} onshow 
             * @memberOf editable-form
             */
            if(attrs.onshow) {
              eForm.$onshow = angular.bind(eForm, $parse(attrs.onshow), scope);
            }

            /**
             * Called when form hides after both save or cancel.
             * 
             * @var {method|attribute} onhide 
             * @memberOf editable-form
             */
            if(attrs.onhide) {
              eForm.$onhide = angular.bind(eForm, $parse(attrs.onhide), scope);
            }

            /**
             * Called when form is cancelled.
             * 
             * @var {method|attribute} oncancel
             * @memberOf editable-form
             */
            if(attrs.oncancel) {
              eForm.$oncancel = angular.bind(eForm, $parse(attrs.oncancel), scope);
            }

            /**
             * Whether form initially rendered in shown state.
             *
             * @var {bool|attribute} shown
             * @memberOf editable-form
             */
            if(attrs.shown && $parse(attrs.shown)(scope)) {
              eForm.$show();
            }

            /**
             * Action when form losses focus. Values: `cancel|submit|ignore`.
             * Default is `ignore`.
             * 
             * @var {string|attribute} blur
             * @memberOf editable-form
             */
            eForm._blur = attrs.blur || editableOptions.blurForm;

            // onbeforesave, onaftersave
            if(!attrs.ngSubmit && !attrs.submit) {
              /**
               * Called after all children `onbeforesave` callbacks but before saving form values
               * to model.  
               * If at least one children callback returns `non-string` - it will not not be called.  
               * See [editable-form demo](#editable-form) for details.
               * 
               * @var {method|attribute} onbeforesave
               * @memberOf editable-form
               * 
               */
              if(attrs.onbeforesave) {
                eForm.$onbeforesave = function() {
                  return $parse(attrs.onbeforesave)(scope, {$data: eForm.$data});
                };
              }

              /**
               * Called when form values are saved to model.  
               * See [editable-form demo](#editable-form) for details.
               * 
               * @var {method|attribute} onaftersave 
               * @memberOf editable-form
               * 
               */
              if(attrs.onaftersave) {
                eForm.$onaftersave = function() {
                  return $parse(attrs.onaftersave)(scope, {$data: eForm.$data});
                };
              }

              elem.bind('submit', function(event) {
                event.preventDefault();
                scope.$apply(function() {
                  eForm.$submit();
                });
              });
            }


            // click - mark form as clicked to exclude in document click handler
            elem.bind('click', function(e) {
              // ignore right/middle button click
              if (e.which !== 1) {
                return;
              }

              if (eForm.$visible) {
                eForm._clicked = true;
              }
            });   

          }
        };
      }
    };
}]);
/**
 * editablePromiseCollection
 *  
 * Collect results of function calls. Shows waiting if there are promises. 
 * Finally, applies callbacks if:
 * - onTrue(): all results are true and all promises resolved to true
 * - onFalse(): at least one result is false or promise resolved to false
 * - onString(): at least one result is string or promise rejected or promise resolved to string
 */
angular.module('xeditable').factory('editablePromiseCollection', ['$q', function($q) { 

  function promiseCollection() {
    return {
      promises: [],
      hasFalse: false,
      hasString: false,
      when: function(result, noPromise) {
        if (result === false) {
          this.hasFalse = true;
        } else if (!noPromise && angular.isObject(result)) {
          this.promises.push($q.when(result));
        } else if (angular.isString(result)){
          this.hasString = true;
        } else { //result === true || result === undefined || result === null
          return;
        }
      },
      //callbacks: onTrue, onFalse, onString
      then: function(callbacks) {
        callbacks = callbacks || {};
        var onTrue = callbacks.onTrue || angular.noop;
        var onFalse = callbacks.onFalse || angular.noop;
        var onString = callbacks.onString || angular.noop;
        var onWait = callbacks.onWait || angular.noop;

        var self = this;

        if (this.promises.length) {
          onWait(true);
          $q.all(this.promises).then(
            //all resolved       
            function(results) {
              onWait(false);
              //check all results via same `when` method (without checking promises)
              angular.forEach(results, function(result) {
                self.when(result, true);  
              });
              applyCallback();
            },
            //some rejected
            function(error) { 
              onWait(false);
              onString();
            }
          );
        } else {
          applyCallback();
        }

        function applyCallback() {
          if (!self.hasString && !self.hasFalse) {
            onTrue();
          } else if (!self.hasString && self.hasFalse) {
            onFalse();
          } else {
            onString();
          }
        }

      }
    };
  }

  return promiseCollection;

}]);

/**
 * editableUtils
 */
angular.module('xeditable').factory('editableUtils', [function() {
  return {
    indexOf: function (array, obj) {
      if (array.indexOf) return array.indexOf(obj);

      for ( var i = 0; i < array.length; i++) {
        if (obj === array[i]) return i;
      }
      return -1;
    },

    arrayRemove: function (array, value) {
      var index = this.indexOf(array, value);
      if (index >= 0) {
        array.splice(index, 1);
      }
      return value;
    },

    // copy from https://github.com/angular/angular.js/blob/master/src/Angular.js
    camelToDash: function(str) {
      var SNAKE_CASE_REGEXP = /[A-Z]/g;
      return str.replace(SNAKE_CASE_REGEXP, function(letter, pos) {
        return (pos ? '-' : '') + letter.toLowerCase();
      });
    },

    dashToCamel: function(str) {
      var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
      var MOZ_HACK_REGEXP = /^moz([A-Z])/;
      return str.
        replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
          return offset ? letter.toUpperCase() : letter;
        }).
        replace(MOZ_HACK_REGEXP, 'Moz$1');
    }
  };
}]);

/**
 * editableNgOptionsParser
 *
 * see: https://github.com/angular/angular.js/blob/master/src/ng/directive/select.js#L131
 */
angular.module('xeditable').factory('editableNgOptionsParser', [
  function() {
                        //0000111110000000000022220000000000000000000000333300000000000000444444444444444000000000555555555555555000000066666666666666600000000000000007777000000000000000000088888
  var NG_OPTIONS_REGEXP = /^\s*(.*?)(?:\s+as\s+(.*?))?(?:\s+group\s+by\s+(.*))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+(.*?)(?:\s+track\s+by\s+(.*?))?$/;
 
  function parser(optionsExp) {
    var match;

    if (! (match = optionsExp.match(NG_OPTIONS_REGEXP))) {
      throw 'ng-options parse error';
    }

    var 
        displayFn = match[2] || match[1],
        valueName = match[4] || match[6],
        keyName = match[5],
        groupByFn = match[3] || '',
        valueFn = match[2] ? match[1] : valueName,
        valuesFn = match[7],
        track = match[8],
        trackFn = track ? match[8] : null;

    var ngRepeat;
    if (keyName === undefined) { // array
      ngRepeat = valueName + ' in ' + valuesFn;
      if (track !== undefined) {
        ngRepeat += ' track by '+trackFn;
      }
    } else { // object
      ngRepeat = '('+keyName+', '+valueName+') in '+valuesFn;
    }
    
    // group not supported yet
    return {
      ngRepeat: ngRepeat,
      locals: {
        valueName: valueName,
        keyName: keyName,
        valueFn: valueFn,
        displayFn: displayFn
      }
    };
  }

  return parser;
}]);

/*
Editable themes:
- default
- bootstrap 2
- bootstrap 3

Note: in postrender() `this` is instance of editableController
*/
angular.module('xeditable').factory('editableThemes', function() {
  var themes = {
    //default
    'default': {
      formTpl:      '<form class="editable-wrap"></form>',
      noformTpl:    '<span class="editable-wrap"></span>',
      controlsTpl:  '<span class="editable-controls"></span>',
      inputTpl:     '',
      errorTpl:     '<div class="editable-error" ng-show="$error" ng-bind="$error"></div>',
      buttonsTpl:   '<span class="editable-buttons"></span>',
      submitTpl:    '<button type="submit">save</button>',
      cancelTpl:    '<button type="button" ng-click="$form.$cancel()">cancel</button>'
    },

    //bs2
    'bs2': {
      formTpl:     '<form class="form-inline editable-wrap" role="form"></form>',
      noformTpl:   '<span class="editable-wrap"></span>',
      controlsTpl: '<div class="editable-controls controls control-group" ng-class="{\'error\': $error}"></div>',
      inputTpl:    '',
      errorTpl:    '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"></div>',
      buttonsTpl:  '<span class="editable-buttons"></span>',
      submitTpl:   '<button type="submit" class="btn btn-primary"><span class="icon-ok icon-white"></span></button>',
      cancelTpl:   '<button type="button" class="btn" ng-click="$form.$cancel()">'+
                      '<span class="icon-remove"></span>'+
                   '</button>'

    },

    //bs3
    'bs3': {
      formTpl:     '<form class="form-inline editable-wrap" role="form"></form>',
      noformTpl:   '<span class="editable-wrap"></span>',
      controlsTpl: '<div class="editable-controls form-group" ng-class="{\'has-error\': $error}"></div>',
      inputTpl:    '',
      errorTpl:    '<div class="editable-error help-block" ng-show="$error" ng-bind="$error"></div>',
      buttonsTpl:  '<span class="editable-buttons"></span>',
      submitTpl:   '<button type="submit" class="btn btn-primary"><span class="glyphicon glyphicon-ok"></span></button>',
      cancelTpl:   '<button type="button" class="btn btn-default" ng-click="$form.$cancel()">'+
                     '<span class="glyphicon glyphicon-remove"></span>'+
                   '</button>',

      //bs3 specific prop to change buttons class: btn-sm, btn-lg
      buttonsClass: '',
      //bs3 specific prop to change standard inputs class: input-sm, input-lg
      inputClass: '',
      postrender: function() {
        //apply `form-control` class to std inputs
        switch(this.directiveName) {
          case 'editableText':
          case 'editableSelect':
          case 'editableTextarea':
          case 'editableEmail':
          case 'editableTel':
          case 'editableNumber':
          case 'editableUrl':
          case 'editableSearch':
          case 'editableDate':
          case 'editableDatetime':
          case 'editableTime':
          case 'editableMonth':
          case 'editableWeek':
            this.inputEl.addClass('form-control');
            if(this.theme.inputClass) {
              // don`t apply `input-sm` and `input-lg` to select multiple
              // should be fixed in bs itself!
              if(this.inputEl.attr('multiple') &&
                (this.theme.inputClass === 'input-sm' || this.theme.inputClass === 'input-lg')) {
                  break;
              }
              this.inputEl.addClass(this.theme.inputClass);
            }
          break;
        }

        //apply buttonsClass (bs3 specific!)
        if(this.buttonsEl && this.theme.buttonsClass) {
          this.buttonsEl.find('button').addClass(this.theme.buttonsClass);
        }
      }
    }
  };

  return themes;
});

!function(){"use strict";angular.module("tags-input",[]).directive("tagsInput",["$interpolate",function(a){function b(b,c){function d(d,e){return c[d]?a(c[d])(b.$parent):e}function e(a,b){var c=d(a,null);return c?parseInt(c,10):b}function f(a,b){var c=d(a,null);return c?"true"===c:b}b.options={cssClass:d("ngClass",""),placeholder:d("placeholder","Add a tag"),tabindex:e("tabindex",""),removeTagSymbol:d("removeTagSymbol",String.fromCharCode(215)),replaceSpacesWithDashes:f("replaceSpacesWithDashes",!0),minLength:e("minLength",3),maxLength:e("maxLength",""),addOnEnter:f("addOnEnter",!0),addOnSpace:f("addOnSpace",!1),addOnComma:f("addOnComma",!0),allowedTagsPattern:new RegExp(d("allowedTagsPattern","^[a-zA-Z0-9\\s]+$")),enableEditingLastTag:f("enableEditingLastTag",!1)}}return{restrict:"A,E",scope:{tags:"=ngModel"},replace:!1,template:'<div class="ngTagsInput ngTagsCustom {{ options.cssClass }}">  <ul>    <li ng-repeat="tag in tags" ng-class="getCssClass($index)">      <span>{{ tag }}</span>      <button type="button" ng-click="remove($index)">{{ options.removeTagSymbol }}</button>    </li>  </ul>  <input type="text" placeholder="{{ options.placeholder }}" size="{{ options.placeholder.length }}" maxlength="{{ options.maxLength }}" tabindex="{{ options.tabindex }}" ng-model="newTag"></div>',controller:["$scope","$attrs",function(a,c){b(a,c),a.newTag="",a.tags=a.tags||[],a.tryAdd=function(){var b=!1,c=a.newTag;return c.length>=a.options.minLength&&a.options.allowedTagsPattern.test(c)&&(a.options.replaceSpacesWithDashes&&(c=c.replace(/\s/g,"-")),-1===a.tags.indexOf(c)&&a.tags.push(c),a.newTag="",b=!0),b},a.tryRemoveLast=function(){var b=!1;return a.tags.length>0&&(a.options.enableEditingLastTag?a.newTag=a.tags.pop():a.shouldRemoveLastTag?(a.tags.pop(),a.shouldRemoveLastTag=!1):a.shouldRemoveLastTag=!0,b=!0),b},a.remove=function(b){a.tags.splice(b,1)},a.getCssClass=function(b){var c=b===a.tags.length-1;return a.shouldRemoveLastTag&&c?"selected":""},a.$watch(function(){return a.newTag.length>0},function(){a.shouldRemoveLastTag=!1})}],link:function(a,b){var c=13,d=188,e=32,f=8;b.find("input").bind("keydown",function(b){b.keyCode===c&&a.options.addOnEnter||b.keyCode===d&&a.options.addOnComma||b.keyCode===e&&a.options.addOnSpace?(a.tryAdd()&&a.$apply(),b.preventDefault()):b.keyCode===f&&0===this.value.length&&a.tryRemoveLast()&&(a.$apply(),b.preventDefault())}),b.find("div").bind("click",function(){b.find("input")[0].focus()})}}}])}();
'use strict';

angular.module('adjunct', [
        'ngRoute',
        'monospaced.elastic',
        'ngScrollTo',
        'ngCookies',
        //'ngResource',
        'ngAnimate',
//        'ngSanitize',
        'mgcrea.ngStrap',
        'ui.select2',
        'tags-input',
        'ngUpload',
        'xeditable',
        'adjunct.filters',
        'adjunct.services',
        'adjunct.directives',
        'adjunct.controllers'
    ]).
    config(['$routeProvider', '$locationProvider', '$sceDelegateProvider', '$sceProvider','$tooltipProvider', '$dropdownProvider', function ($routeProvider, $locationProvider, $sceDelegateProvider, $sceProvider,$tooltipProvider, $dropdownProvider) {
        $routeProvider.when('/', {templateUrl: '/partial/home', controller: 'HomeCtrl', accessLevel: 'public'});
        $routeProvider.when('/search-results/:searchTerm', {templateUrl: function(params) {  return '/partial/search-results/' + params.searchTerm; }, controller: 'SearchResultsCtrl', accessLevel: 'public'});
        $routeProvider.when('/search-results', {templateUrl: '/partial/search-results', controller: 'SearchResultsCtrl', accessLevel: 'public'});
        $routeProvider.when('/jobs', {templateUrl: '/partial/jobs', controller: 'JobsCtrl', accessLevel: 'public'});
        $routeProvider.when('/about',{templateUrl: '/partial/about', controller:'AboutCtrl', accessLevel: 'public'});
        $routeProvider.when('/contact-us', {templateUrl: '/partial/contact-us', controller: 'ContactUsCtrl', accessLevel: 'public'});
        $routeProvider.when('/job-profile/add', {templateUrl:  '/partial/job-profile', controller: 'JobProfileCtrl', accessLevel: 'public' });
        $routeProvider.when('/job-profile/:id', {templateUrl: function(params) {  return '/partial/job-profile/' + params.id; }, controller: 'JobProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/institutions-profile', {templateUrl: '/partial/institutions-profile', controller: 'InstitutionsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/institutions-profile/:id', {templateUrl: function(params) {  return '/partial/institutions-profile/' + params.id; }, controller: 'InstitutionsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/profile/edit', {templateUrl: '/partial/adjuncts-profile', controller: 'AdjunctsProfileCtrl', accessLevel: 'private'});
        $routeProvider.when('/profile/:id', {templateUrl: function(params) {  return '/partial/adjuncts-profile/' + params.id; }, controller: 'AdjunctsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/profile', {templateUrl: '/partial/adjuncts-profile', controller: 'AdjunctsProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/signup', {templateUrl: '/partial/signup', controller: 'SignupCtrl', accessLevel: 'public'});
        $routeProvider.when('/basic-profile', {templateUrl: '/partial/basic-profile', controller: 'BasicProfileCtrl', accessLevel: 'public'});
        $routeProvider.when('/confirm-email', {templateUrl: '/partial/confirm-email', controller: 'ConfirmEmailCtrl', accessLevel: 'public'});
        $routeProvider.otherwise({redirectTo: '/'});
        $locationProvider.html5Mode(true);
        $sceDelegateProvider.resourceUrlWhitelist(["http://www.youtube.com/embed/*", "self", "https://docs.google.com/*", "http://infolab.stanford.edu/*"]);
        $sceProvider.enabled(false);
        angular.extend($tooltipProvider.defaults, {
            html: false
        });
        angular.extend($dropdownProvider.defaults, {
            trigger: 'click'
        });
    }]).run(['editableOptions', 'editableThemes', function(editableOptions, editableThemes){
        editableOptions.theme = 'default';
        editableThemes['default'].submitTpl = '<button type="submit" style="float:right;"><i class="fa fa-check"></i></button>';

    }]);

angular.module('adjunct.filters', []);
angular.module('adjunct.services', []);
angular.module('adjunct.directives', []);
angular.module('adjunct.controllers', []);

'use strict';

/* Filters */

angular.module('adjunct.filters').
  filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    }
  }]).filter('newlines', function () {
    return function(text) {
        if(text)
            return text.replace(/\n/g, '<br/>');
        return '';
    }
});
'use strict';

angular.module('adjunct.services')
    .factory('WikiSummary', function(){
        return function(wikiPage, callback) {
            var callWikiApi = function(wikipediaPage) {
                $.getJSON('http://en.wikipedia.org/w/api.php?action=query&format=json&callback=?', { prop:'extracts', titles: wikipediaPage }, wikipediaHTMLResult);
            }

            function wikipediaHTMLResult(data) {
                var pages = data.query.pages;
                var page = pages[Object.keys(pages)[0]];
                var extract = page.extract;
                var readData = $(extract);

                // handle redirects
                var redirect = readData.find('li:contains("REDIRECT")').text().substr(8);
                if(redirect != '') {
                    callWikiApi(redirect);
                    return;
                }
                callback(readData.html());
            }

            callWikiApi(wikiPage);
        }
    });

'use strict';

/* Directives */

angular.module('adjunct.directives')
    .directive('ngBindHtmlUnsafe', ['$sce', function ($sce) {
        return {
            scope: {
                ngBindHtmlUnsafe: '='
            },
            template: "<div ng-bind-html='trustedHtml'></div>",
            link: function ($scope, iElm, iAttrs, controller) {
                $scope.updateView = function () {
                    $scope.trustedHtml = $sce.trustAsHtml($scope.ngBindHtmlUnsafe);
                }

                $scope.$watch('ngBindHtmlUnsafe', function (newVal, oldVal) {
                    $scope.updateView(newVal);
                });
            }
        };
    }]).directive('ngEnter',function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if (event.which === 13) {
                    scope.$apply(function () {
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    }).directive('pwCheck', [function () {
        return { require: 'ngModel', link: function (scope, elem, attrs, ctrl) {
            var firstPassword = '#' + attrs.pwCheck;
            elem.add(firstPassword).on('keyup', function () {
                scope.$apply(function () {
                    var v = elem.val() === $(firstPassword).val();
                    ctrl.$setValidity('pwmatch', v);
                });
            });
        } }
    }]).directive("passwordValidate",function () {
        return {
            require: 'ngModel',
            link: function (scope, elm, attrs, ctrl) {
                ctrl.$parsers.unshift(function (viewValue) {

                    scope.pwdValidLength = (viewValue && viewValue.length >= 8 ? 'valid' : undefined);
                    scope.pwdHasLetter = (viewValue && /[A-z]/.test(viewValue)) ? 'valid' : undefined;
                    scope.pwdHasNumber = (viewValue && /\d/.test(viewValue)) ? 'valid' : undefined;


                    if (scope.pwdValidLength && scope.pwdHasLetter && scope.pwdHasNumber) {
                        ctrl.$setValidity('pwd', true);
                        return viewValue;
                    } else {
                        ctrl.$setValidity('pwd', false);
                        return undefined;
                    }

                });
            }
        };
    }).directive('checkStrength',function () {

        return {
            replace: false,
            link: function (scope, iElement, iAttrs) {
                var strength = {
                    colors: ['#DDD', '#F00', '#F90', '#FF0', '#9F0', '#0F0'],
                    mesureStrength: function (p) {

                        if (!p) {
                            return 0;
                        }

                        var _force = 0;
                        var _regex = /[$-/:-?{-~!"^_`\[\]]/g;

                        var _lowerLetters = /[a-z]+/.test(p);
                        var _upperLetters = /[A-Z]+/.test(p);
                        var _numbers = /[0-9]+/.test(p);
                        var _symbols = _regex.test(p);

                        var _flags = [_lowerLetters, _upperLetters, _numbers, _symbols];
                        var _passedMatches = $.grep(_flags,function (el) {
                            return el === true;
                        }).length;

                        _force += 2 * p.length + ((p.length >= 10) ? 1 : 0);
                        _force += _passedMatches * 10;

                        // penality (short password)
                        _force = (p.length <= 6) ? Math.min(_force, 10) : _force;

                        // penality (poor variety of characters)
                        _force = (_passedMatches == 1) ? Math.min(_force, 10) : _force;
                        _force = (_passedMatches == 2) ? Math.min(_force, 20) : _force;
                        _force = (_passedMatches == 3) ? Math.min(_force, 40) : _force;

                        return _force;

                    },
                    getColor: function (s) {
                        var idx = 0;
                        if (s > 0) {
                            if (s <= 10) {
                                idx = 1;
                            }
                            else if (s <= 20) {
                                idx = 2;
                            }
                            else if (s <= 30) {
                                idx = 3;
                            }
                            else if (s <= 40) {
                                idx = 4;
                            }
                            else {
                                idx = 5;
                            }
                        }

                        return { idx: idx + 1, col: this.colors[idx] };

                    }
                };

                scope.$watch(iAttrs.checkStrength, function () {
                    var c = strength.getColor(strength.mesureStrength(scope.password));

                    iElement.css({ "display": "block"});
                    iElement.children('li')
                        .css({ "background": "#DDD" })
                        .slice(0, c.idx)
                        .css({ "background": c.col });

                    switch (c.idx) {
                        case 1:
                            scope.strength = "";
                            break;
                        case 2:
                            scope.strength = "Weak";
                            break;
                        case 3:
                            scope.strength = "Weak";
                            break;
                        case 4:
                            scope.strength = "Fair";
                            break;
                        case 5:
                            scope.strength = "Good";
                            break;
                        case 6:
                            scope.strength = "Excellent";
                            break;
                        default:
                            scope.strength = "";
                    }

                    if (!scope.password || scope.password.length > 0 && scope.password.length <= 6) {
                        scope.strength = "Too short";
                    }
                });

            },
            template: '<li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li><li class="point"></li>'
        };

    }).directive('customBindHtml', ['$compile', function ($compile) {
        return {
            link: function (scope, element, attr) {
                scope.$watch(attr.customBindHtml, function (value) {
                    element.html(value);
                    $compile(element.contents())(scope);
                });
            }
        };
    }]).directive('numbersOnly', function () {
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    // this next if is necessary for when using ng-required on your input.
                    // In such cases, when a letter is typed first, this parser will be called
                    // again, and the 2nd time, the value will be undefined
                    if (inputValue == undefined) return ''
                    var transformedInput = inputValue.replace(/[^0-9]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    return transformedInput;
                });
            }
        };
    }).directive('documentClick', ['$document', function($document) {
        return {
            link : function(scope, element, attrs) {
                $document.on('click', function (e) {
                    $('[bs-popover]').each(function () {
                        if (!$(".popover").is(e.target) && $(".popover").has(e.target).length === 0 && !$(".popoverButton").is(e.target) && $(".popover").length > 0) {
                            $("[bs-popover]").click();
                        }
                    });
                });
            }
        }
    }]).directive('progressBar',function () {
        return {
            restrict: 'EA',
            link: function (scope, iElement, iAttrs) {
                scope.$watch("pbProgress", function (newVal, oldVal) {
                    iElement.find('.progress-bar').css({ "width": newVal + "%"});

                    if (newVal) {
                        iElement.find('.percentage-title-badge-section').text(newVal + "%");
                    }
                    else {
                        iElement.find('.percentage-title-badge-section').text("0%");
                    }
                });
            },
            scope: {
               "class": "@",
               pbProgress:"=",
               pbTitle:"@"
            },
            template: '<div class="list-group-item-custom list-group-item-customize-left list-item-badge-section">' +
                '<div class="competency-title-badge-section">{{pbTitle}}</div>' +
                '<div class="percentage-title-badge-section"></div>' +
                '<div class="progress progress-custom progress-custom-badge-section">' +
                '<div class="progress-bar progress-bar-custom {{class}}" role="progressbar"  aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" />' +
                '</div>' +
                '</div>'
        }
    });
'use strict';

angular.module('adjunct.controllers')
    .controller('IndexCtrl', ['$scope', '$http', '$cookies', '$popover', function ($scope, $http, $cookies, $popover) {

        $scope.isSignedIn = $cookies._id != null;
        $scope.signinPopover = {title: 'Title', content: 'Hello Popover<br />This is a multiline message!'};

        if ($scope.isSignedIn) {
            $http.get('/api/get-adjuncts-profile/' + $cookies._id).then(function(response) { $scope.user = response.data; });
        }

        $scope.signout = function() {
            window.location.replace('/signout');
        }

        $scope.index = 0;

        $scope.profileDropdown = [
            {
                "text": "Edit Profile",
                "href": "/profile"
            },
            {
                "text": "Saved Jobs",
                "href": "/profile/saved-jobs"
            }
        ];

        $scope.jobsDropdown = [
            {
                "text": "View jobs",
                "href": "/jobs"
            },
            {
                "text": "Post a new job",
                "href": "/job-profile/add"
            },
            {
                "text": "View institutions",
                "href": "/institutions-profile"
            }

        ];

        $scope.openSignInModal = function () {
            if(!$scope.isSignedIn){
                $('#signin-modal').modal();
                $('.modal-backdrop').css({'background-color': '', 'opacity': '0'});
            }
        }

        $scope.openSignUpModal = function () {
                $('#signup-modal').modal();
                $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
        }
    }]);
'use strict';

angular.module('adjunct.controllers')
    .controller('AdjunctsProfileCtrl', ['$scope', '$http', '$cookies', '$q', '$location', '$filter','$templateCache', function ($scope, $http, $cookies, $q, $location, $filter,$templateCache) {

        var userId = $('#userId').html();

        if (!$cookies._id && !userId) {
            return;
        }

        $scope.canEdit = $cookies._id && !userId;

        $scope.isEditMode = false;
        $scope.isPositionShown = false;
        $scope.showAddDoc = false;
        $scope.showVid = false;
        $scope.maxNumberOfTagsToShow = 17;

        var isEditModeUrl = S($location.path()).endsWith('/edit') && $scope.canEdit;

        $scope.topCardTemplateUrl = isEditModeUrl ?  '/partial/adjuncts-profile-top-card-edit': '/partial/adjuncts-profile-top-card';
        $scope.bottomCardTemplateUrl = isEditModeUrl ? '/partial/adjuncts-profile-bottom-card-edit' : '/partial/adjuncts-profile-bottom-card';

        var adjunctProfile = $http.get('/api/get-adjuncts-profile/' + (userId ? userId : $cookies._id));
        var countries = $scope.canEdit ? $http.get('/api/countries') : null;
        var fieldGroups = $scope.canEdit ? $http.get('/api/fieldGroups') : null;
        var edDegrees = $scope.canEdit ? $http.get('/api/edDegrees') : null;
        var institutions = $scope.canEdit ? $http.get('/api/institutions') : null;
        var linkedinData = $scope.canEdit ? $http.get('/api/getLinkedinData') : null;


        $scope.$watch('user.country', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.countries, {id: $scope.user.country});
                if (selected)
                    $scope.user.countryName = selected.length ? selected[0].text : null;
            }
        });

        $scope.$watch('user.field', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.fieldGroups, {id: $scope.user.field});
                if (selected)
                    $scope.user.fieldName = selected.length ? selected[0].text : null;
            }
        });

        $scope.$watch('user.edDegree', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.edDegrees, {id: $scope.user.edDegree});
                if (selected)
                    $scope.user.edDegreeName = selected.length ? selected[0].text : null;
            }
        });

        $scope.$watch('user.institution', function(newVal, oldVal) {
            if (newVal !== oldVal) {
                var selected = $filter('filter')($scope.institutions, {id: $scope.user.institution});
                if (selected)
                    $scope.user.institutionName = selected.length ? selected[0].text : null;
            }
        });

        $q.all([adjunctProfile, countries, fieldGroups, edDegrees, institutions, linkedinData]).then(function (values) {
                $scope.user = values[0].data;
                $scope.countries = values[1] ? values[1].data : null;
                $scope.fieldGroups = values[2] ? values[2].data : null;
                $scope.edDegrees = values[3] ? values[3].data : null;
                $scope.institutions = values[4] ? values[4].data : null;
                var linkedinData = values[5] ? values[5].data : null;

                if (!$scope.user.survey)
                    $scope.user.survey = {};

                if (!$scope.user.fieldOfExpertises || $scope.user.fieldOfExpertises.length == 0)
                    $scope.user.fieldOfExpertises = [
                        { value: ''}
                    ];

                if (!$scope.user.resumePositions || $scope.user.resumePositions.length == 0)
                    $scope.user.resumePositions = [
                        { value: ''}
                    ];

                if (!$scope.user.expertiseTags) {
                    $scope.user.expertiseTags = [];
                }

                if ($scope.user.expertiseTags.length == 0 && linkedinData && linkedinData.skills) {
                    var skills = _.pluck(_.pluck(linkedinData.skills.values, 'skill'), 'name');
                    $scope.user.expertiseTags = skills;
                }

                if ($scope.user.jobs) {
                    var jobPromises = [$http.get('/api/positionTypes')];
                    for (var i = 0; i < $scope.user.jobs.length; i++) {
                        jobPromises.push($http.get('/api/get-job-profile/' + $scope.user.jobs[i]));
                    }
                    $q.all(jobPromises).then(function(values) {
                        var positionTypes = values[0].data;
                        var jobs = _.pluck(values.slice(1), 'data');
                        $scope.user.jobs = _.map(jobs, function(job) {
                            var positionType = _.findWhere(positionTypes, {_id: job.positionTypeId});
                            if (positionType) {
                                job.positionTypeDesc = positionType.name;
                            }
                            return job;
                        });
                    });
                }

                if (linkedinData && linkedinData.summary) {
                    $scope.user.personalSummary = linkedinData.summary;
                }

                if (linkedinData && linkedinData.positions) {
                    var positions = linkedinData.positions.values;
                    $scope.user.resumePositions = _.map(positions, function(position) {

                        return {
                            title: position.title,
                            institution: position.company.name,
                            startMonth: position.startDate.month,
                            startYear: position.startDate.year,
                            stillHere: position.isCurrent,
                            endMonth: position.isCurrent ? null : position.endDate.month,
                            endYear: position.isCurrent ? null : position.endDate.year,
                            location: position.location,
                            description: position.summary,
                            termsDate: getUniversityTerm(position.startDate.month, position.startDate.year,position.endDate,position.isCurrent)
                        }

                    });
                }

                $scope.filteredBadges = [];
                for (var badge in $scope.user.badges) {
                    var val = $scope.user.badges[badge];
                    if (val != false) {
                        $scope.filteredBadges.push(val);
                    }
                }

                $scope.document = {};

                $scope.isSummaryShown = $scope.user.personalSummary != null;

                if (!$scope.user.portfolioLinks)
                    $scope.user.portfolioLinks = [];


                if (!$scope.user.fieldOfExpertises)
                    $scope.user.fieldOfExpertises = [];

                if (!$scope.user.educationDegrees)
                    $scope.user.educationDegrees = [];
            },
            function (error) {
                console.log("get-adjuncts-profile-top-card didn't work", error);
            });



        $scope.months = [];
        var count = 0;
        while (count < 12) {
            $scope.months.push(moment().month(count++).format("MMMM"));
        }

        $scope.statuses = [
            {value: 1, text: 'Fall'},
            {value: 2, text: 'Winter'},
            {value: 3, text: 'Spring'},
            {value: 4, text: 'Summer'}
        ];

        $scope.editTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card-edit';
            $scope.isEditMode=true;
        }

        $scope.editBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card-edit';
        }

        $scope.showPersonalSummaryEdit = function(){
           $scope.restorePersonalSummary = angular.copy($scope.user.personalSummary);
           $scope.isPersonalSummaryShown = !$scope.isPersonalSummaryShown;
        }

        $scope.showResumePositionEdit = function(index) {
//            $scope.restoreResumePosition = angular.copy($scope.user.resumePosition);
            $scope.activePositionIndex = index;
        }

        $scope.isResumePositionShown = function(index){
            var shouldShow = $scope.activePositionIndex === index;
            return shouldShow;
        }

        $scope.showResumeSectionEdit = function (){
            $scope.isResumeSectionShown = !$scope.isResumeSectionShown;
        }

        $scope.restorePreviousPersonalSummary = function(){
           $scope.user.personalSummary = angular.copy($scope.restorePersonalSummary);
        }

        $scope.restorePreviousResumePosition = function(){
            $scope.user.resumePosition =angular.copy($scope.restoreResumePosition);
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/adjuncts-profile-top-card';
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
            $scope.isEditMode=false;
        }

        $scope.importLinkedin = function () {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

        $scope.saveBadgeCard = function () {
            $scope.filteredBadges = [];
            for (var badge in $scope.user.badges) {
                var val = $scope.user.badges[badge];
                if (val != false) {
                    $scope.filteredBadges.push(val);
                }
            }

            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.savePortfolioCard = function () {
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.saveBottomCard = function () {
            $scope.bottomCardTemplateUrl = '/partial/adjuncts-profile-bottom-card';
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        $scope.savePersonalSummary = function (){
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
            $scope.isPersonalSummaryShown = !$scope.isPersonalSummaryShown;
        }

        $scope.saveResumePositionEdit = function(){
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user':$scope.user}));
            $scope.activePositionIndex = -1;
        }

        $scope.addPortfolioLink = function () {
            $scope.user.portfolioLinks.push({type: 'Youtube', value: ''});
        }

        $scope.addPortfolioUpload = function () {
            $scope.user.portfolioLinks.push({type: 'PDF', value: ''});
        }

        $scope.removePortfolioLink = function (portfolioLink) {
            for (var i = 0, ii = $scope.user.portfolioLinks.length; i < ii; i++) {
                if (portfolioLink == $scope.user.portfolioLinks[i]) {
                    $scope.user.portfolioLinks.splice(i, 1);
                }
            }
        }

        $scope.addAFieldOfExpertise = function () {
            $scope.user.fieldOfExpertises.push({value: ''});
        }

        $scope.addAPersonalSummary = function(){
           $scope.isSummaryShown = !$scope.isSummaryShown;
        }

        $scope.addAEducationDegree = function () {
            $scope.user.educationDegrees.push({value: ''});
        }

        $scope.addAResumePosition = function () {
            $scope.user.resumePositions.push({value: ''});
        }

        $scope.removeAEducationDegree = function (educationDegree) {
            for (var i = 0, ii = $scope.user.educationDegrees.length; i < ii; i++) {
                if (educationDegree == $scope.user.educationDegrees[i]) {
                    $scope.user.educationDegrees.splice(i, 1);
                }
            }
        }

        $scope.removeAFieldOfExpertise = function (fieldOfExpertise) {
            for (var i = 0, ii = $scope.user.fieldOfExpertises.length; i < ii; i++) {
                if (fieldOfExpertise == $scope.user.fieldOfExpertises[i]) {
                    $scope.user.fieldOfExpertises.splice(i, 1);
                }
            }
        }

        $scope.removePositionAlert = function(resumePosition){
            $scope.selectedResumePosition = resumePosition;
            $('#alert-modal').modal();
        }

        $scope.removeAResumePosition = function (resumePosition) {
            for (var i = 0, ii = $scope.user.resumePositions.length; i < ii; i++) {
                if (resumePosition == $scope.user.resumePositions[i]) {
                    $scope.user.resumePositions.splice(i, 1);
                }
            }
        }

        $scope.openPictureUploadModal = function () {
            $('#upload-picture-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
        }

        $scope.openAttachmentUploadModal = function (competency) {
            $('#upload-attachment-competencies-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
            $scope.competency = competency;
        }

        $scope.openVideoModal = function (videoId) {
            $scope.frameUrl = "http://www.youtube.com/embed/" + videoId;
            $('#video-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.4'});
        }

        $scope.openDoc = function (url, docType, docTitle, docDescription) {
            $scope.frameUrl = url;
            $scope.docTitle = docTitle;
            $scope.docDescription = docDescription;
            $scope.showAddDoc = false;
        }

        $scope.openBadgeEditModal = function () {
            $('#badge-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openCompetencyPortfolioModal = function () {
            $('#competency-portfolio-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.openAddDoc = function () {
            $scope.showAddDoc = true;
        }

        $scope.closeAddDoc = function() {
            $scope.showAddDoc = false;
        }

        $scope.uploadComplete = function (content, completed) {
            $http.get('/api/get-adjuncts-profile/' + $cookies._id).success(function (data) {
                $scope.user.imageName = data.imageName;
                $("#upload-picture-modal").modal('hide');
            });
        };

        $scope.saveDocument = function() {
            var url;
            var thumbnail;

            if ($scope.document.type == 'Youtube') {
                var youtubeId = getYoutubeId($scope.document.value);
                url = 'https://www.youtube.com/embed/' + youtubeId;
                thumbnail = "http://img.youtube.com/vi/" + youtubeId + "/1.jpg";
            }
            else {
                url = $scope.document.value;
                thumbnail = "/img/PortfolioIconResume.png";
            }
            $scope.user.portfolioLinks.push({
               'category': $scope.document.category,
               'title': $scope.document.title,
               'description': $scope.document.description,
               'value': url,
                "thumbnail": thumbnail,
               'type': $scope.document.type,
               '$$hashKey': "HK" + $scope.user.portfolioLinks.length
            });
        }

        $scope.showMoreTags=function(){
          $scope.maxNumberOfTagsToShow=9999;
        }

        $scope.showLessTags=function(){
            $scope.maxNumberOfTagsToShow=17;
        }


        $scope.savePortfolio = function() {
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user}));
        }

        function getYoutubeId(url) {
            var regex = /(www.)?youtu(be\.com|\.be)\/(watch\?v=)?([A-Za-z0-9._%-]*)(\&\S+)?/
            var matches = url.match(regex);
            return matches[4];
        }

        function getUniversityTerm(startMonth, startYear, endDate, isStillHere){
            var universityTermStart;
            var universityTermEnd;
            switch(startMonth){
                case 1:
                case 2:
                    universityTermStart = "Winter";
                    break;
                case 3:
                case 4:
                case 5:
                    universityTermStart = "Spring";
                    break;
                case 6:
                case 7:
                case 8:
                    universityTermStart = "Summer";
                    break;
                case 9 :
                case 10 :
                case 11 :
                case 12 :
                    universityTermStart = "Fall";
                    break;

            }
            if(!isStillHere){
                switch(endDate.month){
                    case 1:
                    case 2:
                    case 3:
                        universityTermEnd = "Winter";
                        break;
                    case 4:
                    case 5:
                    case 6:
                        universityTermEnd = "Spring";
                        break;
                    case 7:
                    case 8:
                        universityTermEnd = "Summer";
                        break;
                    case 9 :
                    case 10 :
                    case 11 :
                    case 12 :
                        universityTermEnd = "Fall";
                        break;
                }
            }

            return isStillHere ? universityTermStart +" "+ startYear + " - Present" : universityTermStart +" "+ startYear + " - " + universityTermEnd +" "+ endDate.year ;

        }



        $scope.saveUser = function(data, id) {
            //$scope.user not updated yet
            angular.extend(data, {id: id});
            return $http.post('/saveUser', data);
        };

        // add user
        $scope.addUser = function() {
            $scope.inserted = {
                id: $scope.users.length+1,
                name: '',
                status: null,
                group: null
            };

            $scope.users.push($scope.inserted);
        }

        $scope.getCompetencyPercent = function(answer, category) {
            var competencyPercent = answer*20;

            var hasAttachedDocument = _.findWhere($scope.user.portfolioLinks, {'category': category }) != null;

            if (!hasAttachedDocument){
                competencyPercent -= 0.15 * competencyPercent;
            }

            return competencyPercent;
        }

        $scope.tabs = [
            {
                "title": "Summary",
                "template": "/partial/adjuncts-profile-summary"
            },
            {
                "title": "Questions",
                "template": "/partial/adjuncts-profile-questions"
            }
        ];

        $scope.tabs.activeTab = 0;
    }]);

'use strict';

angular.module('adjunct.controllers')
    .controller('JobProfileCtrl', ['$scope','$templateCache', '$http', '$cookies', '$q','$aside', function ($scope,$templateCache, $http, $cookies, $q, $aside ) {
        var jobId = $('#jobId').html();

        $scope.master = {};

        $scope.update = function(job) {
            $scope.master = angular.copy(job);
        };

        $scope.reset = function() {
            $scope.job = angular.copy($scope.master);
        };

        $scope.reset();



        $scope.job = {};
        $scope.canSaveJob = $cookies._id;

        if (jobId) {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card';
        }
        else {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.uploadJobPictureModalUrl = '/partial/upload-job-picture-modal';

        var jobPromise;

        if (jobId) {
            jobPromise = $http.get('/api/get-job-profile/' + jobId);
        }

        var positionTypesPromise = $http.get('/api/positionTypes');

        $q.all([jobPromise, positionTypesPromise]).then(function(values) {
            if (values[0]) {
                $scope.job = values[0].data;
                $scope.positionTypes = values[1].data;
                if ($scope.job) {
                    var positionType = _.findWhere($scope.positionTypes, {_id: $scope.job.positionTypeId});
                    if (positionType) {
                        $scope.job.positionTypeDesc = positionType.name;
                    }
                }

                if (!$scope.job.jobRequirements || $scope.job.jobRequirements.length == 0)
                    $scope.job.jobRequirements = [
                        { value: ''}
                    ];

                if(!$scope.job.jobRequirements)
                   $scope.job.jobRequirements=[];

                if(!$scope.job.additionalAssets)
                    $scope.job.additionalAssets=[];
            }
        });

        $http.get('/api/contractTypes').then(function(response) { $scope.contractTypes = response.data; });
        $http.get('/api/edDegrees').then(function(response) { $scope.edDegrees = response.data; });
        $http.get('/api/countries').then(function(response) { $scope.countries = _.map(response.data, function(item){return item.name; })});
        $http.get('/api/positionTypes').then(function(response){ $scope.positionTypes = _.map(response.data, function(item){return item.name; })});
        $http.get('/api/fieldGroups').then(function(response) { $scope.fieldGroups = _.map(response.data, function(item){return item.name})});
        $http.get('/api/institutions').then(function(response) { $scope.institutions = _.map(response.data, function(item){return item.name})});



        $scope.selected = undefined;
        $http.get('api/institutions').then(function(response) { $scope.institutions = _.map(response.data, function(item){return item.name + "(" + item.city + ", " + item.state + ")";});});


        $scope.selectedAddress = undefined;
        $scope.getAddress = function(viewValue) {
            var params = {address: viewValue, sensor: false};
            return $http.get('http://maps.googleapis.com/maps/api/geocode/json', {params: params})
                .then(function(res) {
                    console.log(res.data.results)
                    return res.data.results;
                });
        };

        $scope.aside = {
            "title": "Title",
            "content": "Hello Aside<br />This is a multiline message!"
        };


        $scope.editJobProfile = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card-edit';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card-edit';
        }

        $scope.addAJobRequirement = function () {
            $scope.job.jobRequirements.push({value: ''});
        }
        $scope.addAnAdditionalAsset = function(){
            $scope.job.additionalAssets.push({value:''});
        }

        $scope.removeAJobRequirement = function (jobRequirement) {
            for (var i = 0, ii = $scope.job.jobRequirements.length; i < ii; i++) {
                if (jobRequirement == $scope.job.jobRequirements[i]) {
                    $scope.job.jobRequirements.splice(i, 1);
                }
            }
        }

        $scope.removeAnAdditionalAsset = function (additionalAsset) {
            for (var i = 0, ii = $scope.job.additionalAssets.length; i < ii; i++) {
                if (additionalAsset == $scope.job.additionalAssets[i]) {
                    $scope.job.additionalAssets.splice(i, 1);
                }
            }
        }

        $scope.openJobPictureUploadModal = function() {
            $('#upload-job-picture-modal').modal();
            var action = $('#upload-job-picture-modal form').attr('action');
            action = action.replace('/upload-job', '/upload-job/' + jobId);
            $('#upload-job-picture-modal form').attr('action', action);
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
        }

        $scope.saveTopCard = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';
            $http.post('/api/save-job-profile/', JSON.stringify({'job': $scope.job}));
        }

        $scope.saveJobCard = function () {
            $scope.topCardJobTemplateUrl = '/partial/job-profile-top-card';
            $scope.bottomCardJobTemplateUrl = '/partial/job-profile-bottom-card';
            $http.post('/api/save-job-profile', JSON.stringify({'job': $scope.job}));
        }

        $scope.openBadgeEditModal = function () {
            $('#badge-edit-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.7'});
        }

        $scope.uploadComplete = function (content, completed) {
            $http.get('/api/get-job-profile/' + jobId).success(function(data) {
                $scope.user.imageName = data.imageName;
                $('#upload-job-picture-modal').modal('hide');
            });
        };

        $scope.saveJobForUser = function () {
            $http.post('/api/save-job-for-user', JSON.stringify({'jobId': jobId}));
        }
    }]);





'use strict';

angular.module('adjunct.controllers')
    .controller('InstitutionsProfileCtrl', ['$scope', '$http', 'WikiSummary',  function ($scope, $http, WikiSummary) {

        var institutionId = $('#institutionId').html();

        if (!institutionId) {
            return;
        }

        $scope.institutions = [];
        $scope.institution = {};
        $scope.topCardInstitutionTemplateUrl = '/partial/institutions-profile-top-card';
        $scope.bottomCardInstitutionTemplateUrl = '/partial/institutions-profile-bottom-card';

        //        $http.get('/api/get-job-profile/' + jobId).then(function(response) { $scope.job = response.data; });

        $http.get('/api/get-institutions-profile/' + institutionId).then(function(response) {
            $scope.institution = response.data;
            WikiSummary("Bay State College", function(wikiData) { $scope.institution.summary = wikiData; });
        });

        $scope.editTopCard = function () {
            $scope.topCardInstitutionTemplateUrl = '/partial/institutions-profile-top-card-edit';
        }

        $scope.saveTopCard = function () {
            $scope.topCardTemplateUrl = '/partial/institutions-profile-top-card';
            $http.post('/api/save-institutions-profile', JSON.stringify({'institution': $scope.institution}));
        }

        $http.get('/api/institutionTypes').then(function(response) { $scope.institutionTypes = response.data; });

        $scope.openPictureUploadModal = function() {
            $('#upload-picture-modal').modal();
            $('.modal-backdrop').css({'background-color': 'white', 'opacity': '0.1'});
        }

        $scope.uploadComplete = function (content, completed) {
            console.log(content);
            $http.get('/api/get-institutions-profile/' + institutionId).then(function(response) {
                $scope.institution.imageName = data.imageName;
                $('#upload-picture-modal').modal('hide');
            });
        };
    }]);





'use strict';

angular.module('adjunct.controllers')
    .controller('HomeCtrl', ['$scope', function ($scope) {

        $scope.bannerSignupFormUrl = '/partial/signup-home-banner';


        $scope.search = function () {
            window.location.href = '/search-results/' + $scope.searchBox;
        };

        $scope.init = function(){
        };

// ------------------------------------   Social logging------------------------------------------------------------------------

        $scope.facebookAuth = function () {
            window.location.href = '/auth/facebook';
            $("[bs-popover]").click();
        }

        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
            $("[bs-popover]").click();
        }

        $scope.googleAuth = function () {
            window.location.href = '/auth/google';
            $("[bs-popover]").click();
        }

        $scope.importLinkedIn = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

// ------------------------------------ End Social logging------------------------------------------------------------------------

        $scope.connectManually = function(){
            window.location.href = '/signup';
            $("[bs-popover]").click();
        }

        $scope.openSignInModal = function () {
            if(!$scope.isSignedIn){
                $('#signin-modal').modal();
                $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
            }
        }

        $scope.openSignUpModal = function () {
            $('#signup-modal').modal();
            $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
        }

        $scope.modal = {
            title: '<span style="text-align: left;"><strong>Password strength: {{strength}}</strong></span><ul style="display:block;"><div id="strength" check-strength="password" style="display:block;"></div></ul><span style="display:block;">Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name.</span>',
            "checked": false
        };

    }]);





'use strict';

angular.module('adjunct.controllers')
    .controller('BasicProfileCtrl', ['$scope', '$rootScope', '$http', function ($scope, $rootScope, $http) {

        $http.get('/api/countries').success(function(response) {
            angular.extend($scope.countrySelectOptions.data, response);
        });

        $http.get('/api/edDegrees').success(function(response) {
            angular.extend($scope.educationDegreeSelectOptions.data, response);
        });

        $scope.countrySelectOptions = {
            data: []
        };

        $scope.educationDegreeSelectOptions = {
            data: []
        };

        var getInstitutions = function (queryParams) {
            return $http.post('/api/institutions', queryParams.data).success(queryParams.success);
        }

        $scope.institutionSelectOptions = {
            minimumInputLength: 4,
            ajax: {
                data: function (term, page) {
                    return {
                        query: term
                    };
                },
                quietMillis: 600,
                transport: getInstitutions,
                results: function (response, page) {
                    return {
                        results: response
                    };
                }
            }
        };

        var getSpecialties = function (queryParams) {
            return $http.post('/api/fieldGroups', queryParams.data).success(queryParams.success);
        }

        $scope.specialtySelectOptions = {
            minimumInputLength: 1,
            ajax: {
                data: function (term, page) {
                    return {
                        query: term
                    };
                },
                quietMillis: 500,
                transport: getSpecialties,
                results: function (response, page) {
                    return {
                        results: response
                    };
                }
            }
        };

        $scope.manuallyCreateProf = function () {
            angular.extend($scope.user, $rootScope.user);
            $scope.user.educationDegree = $scope.user.educationDegree.id;
            $scope.user.country = $scope.user.country.id;
            $scope.user.field = $scope.user.field.id;
            $scope.user.institution = $scope.user.institution.id;
            $http.post('/api/save-adjuncts-profile', JSON.stringify({'user': $scope.user})).then(function () {
                window.location.replace(window.location.origin + "/profile");
                //$http.post('/api/signin', JSON.stringify({'email': $scope.user.email, 'password': $scope.user.password}));
            });
        }
    }]);





'use strict';

angular.module('adjunct.controllers')
    .controller('ConfirmEmailCtrl' ['$scope','$location',   function ($scope,$location) {
        $scope.confEmail=function(){
            $location.path( '/adjuncts-profile' );
        }
    }]);
'use strict';

angular.module('adjunct.controllers')
    .controller('SignupCtrl', ['$scope', '$rootScope', '$http', '$location', '$alert', function ($scope, $rootScope, $http, $location, $alert) {
        $scope.user = {};
        $scope.showRequiredError = false;

        $scope.connectManually = function () {

            if ($scope.user.email == null || $scope.password == null || $scope.user.firstName == null || $scope.user.lastName == null || $scope.passwordConfirm == null) {
                $('.alert').remove();
                $alert({
                    "content": "All fields are required",
                    "type": "danger",
                    "show": true,
                    "placement": "top",
                    "container": "#alerts-container"
                });

                return;
            }

            if ($scope.passwordConfirm != $scope.password) {
                $('.alert').remove();
                $alert({
                    "content": "Passwords do not match",
                    "type": "danger",
                    "show": true,
                    "placement": "top",
                    "container": "#alerts-container"
                });
                return;
            }

            $scope.showRequiredError = false;
            $scope.user.email = encodeURIComponent($scope.user.email);
            $scope.user.password = $scope.password;
            $http.post('/api/signup', JSON.stringify({'user': $scope.user})).then(function(response){
                $rootScope.user = response.data;
                $rootScope.user.password = $scope.password;
                $location.path('/basic-profile');
            });
        }

        $scope.tooltip = {
            title: '<span style="text-align: left;"><strong>Password strength: {{strength}}</strong></span><ul style="display:block;"><div id="strength" check-strength="password" style="display:block;"></div></ul><span style="display:block;">Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name.</span>',
            "checked": false
        };

        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
        }

        $scope.openSignInModal = function () {
            if(!$scope.isSignedIn){
                $('#signin-modal').modal();
                $('.modal-backdrop').css({'background-color': '', 'opacity': '0'});
            }
        }

    }]);



'use strict';

angular.module('adjunct.controllers')
    .controller('SearchResultsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.users = [];
        $scope.user = {};

        var searchTerm = $('#searchTerm').html();
        var all = $('#all').html();

        if (!searchTerm && !all) {
            return;
        }

        var url = all ? '/api/searchAll' : '/api/search';
        $http.post(url, JSON.stringify({'query': searchTerm})).then(function(response){
            if (response.data) {
                $scope.users = _.map(response.data.hits.hits, function(user) {
                    angular.extend(user, user._source);
                    return user;
                });

                $http.get('/api/institutions').then(function(response) {
                    var selected = $filter('filter')(response.data, {id: $scope.user.institution});
                    $scope.user.institutionName = selected && selected.length ? selected[0].text : null;
                });

            }
            else {
                $scope.message = "Search server is unreachable";
            }
        });
    }]);
'use strict';

angular.module('adjunct.controllers')
    .controller('SigninCtrl', ['$scope', '$location', function ($scope, $location) {

        $scope.facebookAuth = function () {
            window.location.href = '/auth/facebook';
        }

        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
        }

        $scope.googleAuth = function () {
            window.location.href = '/auth/google';
        }

        $scope.signUp = function () {
            $location.path('/signup');
            if ($scope.$hide)
                $scope.$hide();
        }
    }]);
'use strict';

angular.module('adjunct.controllers')
    .controller('JobsCtrl', ['$scope', '$http', '$q', function ($scope, $http, $q) {
        $scope.users = [];
        $scope.jobs = [];
        var jobs = $http.get('/api/jobs');
        var positionTypes = $http.get('/api/positionTypes');
//        $http.get('/api/jobs').then(function(response) { $scope.jobs = _.map(response.data, function(item){return item.name; })});
//        $http.get('/api/countries').then(function(response) { $scope.countries = _.map(response.data, function(item){return item.name; })});
//        $http.get('/api/countries').then(function(response) { $scope.countries = _.map(response.data, function(item){return item.name; })});
//        var countries = $http.get('/api/countries');

        $q.all([jobs, positionTypes]).then(function (values) {
            var jobs = values[0].data;
            var positionTypes = values[1].data;
            var countries = values[2].data;
            $scope.jobs = _.map(jobs, function(job) {
                var positionType = _.findWhere(positionTypes, {_id: job.positionTypeId});
                if (positionType) {
                    job.positionTypeDesc = positionType.name;
                }
                return job;

            });

        });
}]);
'use strict';

angular.module('adjunct.controllers')
    .controller('ContactUsCtrl', ['$scope', '$http', function ($scope, $http) {
        $scope.send = function() {
            $http.post('/send-email', JSON.stringify({'email': $scope.email})).then(function() {$scope.responseMessage = "Message sent!"; console.log("Hi");}, function() {$scope.responseMessage="Something failed!"});
        }
        // ------------------------------------   Social logging------------------------------------------------------------------------

        $scope.facebookAuth = function () {
            window.location.href = '/auth/facebook';
            $("[bs-popover]").click();
        }

        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
            $("[bs-popover]").click();
        }

        $scope.googleAuth = function () {
            window.location.href = '/auth/google';
            $("[bs-popover]").click();
        }

        $scope.importLinkedIn = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

// ------------------------------------ End Social logging------------------------------------------------------------------------

        $scope.connectManually = function(){
            window.location.href = '/signup';
            $("[bs-popover]").click();
        }

        $scope.openSignInModal = function () {
            if(!$scope.isSignedIn){
                $('#signin-modal').modal();
                $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
            }
        }

        $scope.openSignUpModal = function () {
            $('#signup-modal').modal();
            $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
        }

        $scope.modal = {
            title: '<span style="text-align: left;"><strong>Password strength: {{strength}}</strong></span><ul style="display:block;"><div id="strength" check-strength="password" style="display:block;"></div></ul><span style="display:block;">Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name.</span>',
            "checked": false
        };

    }]);
'use strict';

angular.module('adjunct.controllers')
    .controller('AboutCtrl', ['$scope', '$http', function ($scope, $http) {

        // ------------------------------------   Social logging------------------------------------------------------------------------

        $scope.facebookAuth = function () {
            window.location.href = '/auth/facebook';
            $("[bs-popover]").click();
        }

        $scope.linkedinAuth = function () {
            window.location.href = '/auth/linkedin';
            $("[bs-popover]").click();
        }

        $scope.googleAuth = function () {
            window.location.href = '/auth/google';
            $("[bs-popover]").click();
        }

        $scope.importLinkedIn = function() {
            window.location.replace(window.location.origin + "/api/linkedInAuth");
        }

// ------------------------------------ End Social logging------------------------------------------------------------------------

        $scope.connectManually = function(){
            window.location.href = '/signup';
            $("[bs-popover]").click();
        }

        $scope.openSignInModal = function () {
            if(!$scope.isSignedIn){
                $('#signin-modal').modal();
                $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
            }
        }

        $scope.openSignUpModal = function () {
            $('#signup-modal').modal();
            $('.modal-backdrop').css({'background-color': '#8b8bac', 'opacity': '0'});
        }

        $scope.modal = {
            title: '<span style="text-align: left;"><strong>Password strength: {{strength}}</strong></span><ul style="display:block;"><div id="strength" check-strength="password" style="display:block;"></div></ul><span style="display:block;">Use at least 8 characters. Don’t use a password from another site, or something too obvious like your pet’s name.</span>',
            "checked": false
        };
    }]);