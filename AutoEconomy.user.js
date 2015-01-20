// ==UserScript==
// @name	AutoEconomy
// @include	http://www.nicovideo.jp/watch/*
// @version	1.0
// @grant	none
// ==/UserScript==

var oldLocation = window.location.toString();

if (!/\?eco=1$/.test(oldLocation)) {
    window.location.replace(oldLocation + '?eco=1');
}
