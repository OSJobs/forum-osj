define("confirm-new-email/confirm-new-email",["discourse/lib/webauthn"],function(e){"use strict";var t=document.getElementById("submit-security-key");t&&(t.onclick=function(t){t.preventDefault(),(0,e.getWebauthnCredential)(document.getElementById("security-key-challenge").value,document.getElementById("security-key-allowed-credential-ids").value.split(","),function(e){document.getElementById("security-key-credential").value=JSON.stringify(e),$(t.target).parents("form").submit()},function(e){document.getElementById("security-key-error").innerText=e})})});
//# sourceMappingURL=/assets/confirm-new-email/confirm-new-email-bdb5d7a6ac7e878466fcb1dfe7263d6e00441cce01b43f225baeb0a5d475db55.js.map