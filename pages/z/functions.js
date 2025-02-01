// JavaScript Document
function ShowMed(m) {	
	w=700;
	h=450;
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	ls=window.open('data/ls/'+m+'.htm','ls','scrollbars=yes,width='+ w +',height='+h+',top='+wint+',left='+winl);
	ls.focus();
}


function ShowImage(m) {	
	w=840;
	h=630;
	var winl = (screen.width - w) / 2;
	var wint = (screen.height - h) / 2;
	cur_img=m;	
	ls=window.open('large_image.htm','ls','width='+ w +',height='+h+',top='+wint+',left='+winl);
	ls.focus();
}


function showRollTipAuth(msg, e) {
	showRollTip(authors[msg], e);
}

function showRollTip(msg, e) {
  if ( typeof RollTip == "undefined" || !RollTip.ready ) return;
  RollTip.reveal(msg, e);
}

function hideRollTip() {
  if ( typeof RollTip == "undefined" || !RollTip.ready ) return;
  RollTip.conceal();
}

