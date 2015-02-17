// ==UserScript==
// @name         TinyGrab Image URL Source Grabber Util
// @namespace    http://your.homepage/
// @version      0.1
// @description  Opens a TinyGrab image source url minus the wrapping page content that is the default behavior.
// @author       jusopi
// @match        http://grab.by/*
// @grant        GM_setClipboard
// @updateURL	 https://github.com/jusopi/tampermonkey-scripts.git
// ==/UserScript==

var elem = document.getElementById('thegrab');
if (elem && elem.src)
{
    //copy to clipboard
    GM_setClipboard(elem.src);
    
    //replace crnt tab
    //window.location.href = elem.src; 
    
    //open new tab
    //window.open(elem.src);
}