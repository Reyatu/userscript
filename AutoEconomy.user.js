// ==UserScript==
// @name	AutoEconomy
// @include	http://www.nicovideo.jp/watch/sm*
// @version	1.0.2
// @grant	none
// ==/UserScript==

var oldLocation = window.location.toString();

if (!/[&\?]eco=1$/.test(oldLocation)) {
    if (~ oldLocation.indexOf('?')) {
	window.location.replace(oldLocation + '&eco=1');
    } else {
	window.location.replace(oldLocation + '?eco=1');
    }
}
