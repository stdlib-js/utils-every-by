"use strict";var f=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var v=f(function(q,s){
var m=require('@stdlib/assert-is-collection/dist'),o=require('@stdlib/assert-is-function/dist'),i=require('@stdlib/error-tools-fmtprodmsg/dist');function g(e,r,t){var n,a,u;if(!m(e))throw new TypeError(i('1TfAh',e));if(!o(r))throw new TypeError(i('1Tf2H',r));for(a=e.length,u=0;u<a;u++){if(n=r.call(t,e[u],u,e),!n)return!1;a=e.length}return!0}s.exports=g
});var h=v();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
