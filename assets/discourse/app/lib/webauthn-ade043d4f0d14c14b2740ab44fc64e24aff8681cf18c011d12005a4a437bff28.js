define("discourse/lib/webauthn",["exports"],function(e){"use strict";function o(e){for(var r=new ArrayBuffer(e.length),t=new Uint8Array(r),n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return r}function u(e){return btoa(String.fromCharCode.apply(String,function(e){if(Array.isArray(e)){for(var r=0,t=Array(e.length);r<e.length;r++)t[r]=e[r];return t}return Array.from(e)}(new Uint8Array(e))))}function c(){return"undefined"!=typeof PublicKeyCredential}Object.defineProperty(e,"__esModule",{value:!0}),e.stringToBuffer=o,e.bufferToBase64=u,e.isWebauthnSupported=c,e.getWebauthnCredential=function(e,t,n,i){if(!c())return i(I18n.t("login.security_key_support_missing_error"));var r=o(e),a=t.map(function(e){return{id:o(atob(e)),type:"public-key"}});navigator.credentials.get({publicKey:{challenge:r,allowCredentials:a,timeout:6e4,userVerification:"discouraged"}}).then(function(r){if(!t.some(function(e){return u(r.rawId)===e}))return i(I18n.t("login.security_key_no_matching_credential_error"));var e={signature:u(r.response.signature),clientData:u(r.response.clientDataJSON),authenticatorData:u(r.response.authenticatorData),credentialId:u(r.rawId)};n(e)}).catch(function(e){if("NotAllowedError"===e.name)return i(I18n.t("login.security_key_not_allowed_error"));i(e)})}});
//# sourceMappingURL=/assets/discourse/app/lib/webauthn-ade043d4f0d14c14b2740ab44fc64e24aff8681cf18c011d12005a4a437bff28.js.map