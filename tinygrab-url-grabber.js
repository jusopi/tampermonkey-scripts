// ==UserScript==
// @name         TinyGrab Image URL Source Grabber Util
// @namespace    http://your.homepage/
// @version      0.1
// @description  Opens a TinyGrab image source url minus the wrapping page content that is the default behavior.
// @author       jusopi
// @match        http://grab.by/*
// @grant        none
// @updateURL	 https://github.com/jusopi/tampermonkey-scripts.git
// ==/UserScript==

var elem = document.getElementById('thegrab')
if (elem && elem.src) window.location.href = elem.src; //window.open(url);