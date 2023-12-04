// ==UserScript==
// @name         No Arma
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Disable Arma display
// @author       Biosha
// @updateURL    https://github.com/Biosha/userScripts/raw/master/noArma.user.js
// @downloadURL  https://github.com/Biosha/userScripts/raw/master/noArma.user.js
// @match        https://myhordes.eu/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=myhordes.eu
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    setTimeout(() => {
        document.getElementsByTagName("body")[0].attributes.removeNamedItem("data-theme-name")
    }, 750);
})();