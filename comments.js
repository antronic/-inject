var YOUR_NAME = 'Jirachai Chansivanon';
var YOUR_PROFILE_IMG = 'https://lh3.googleusercontent.com/-bXMJ22mKdL0/AAAAAAAAAAI/AAAAAAAAAAA/AFiYof3_tRXMtm69uV3gvUXGo7MzY21Ztg/s32-c-mo/photo.jpg';

var COMMENT_CLASSNAME = 'OnSI9b';
var COMMNET_AUTHOR_CLASSNAME = 'PGAhe';

function startInject() {
  document.querySelectorAll(COMMENT_CLASSNAME).forEach(function(e) {iE(e)});
}

function iE(el) {
	el.addEventListener('click', function() {
		cC(el);
  });
}

function cC(el) {
	el.childNodes.forEach(function (ele) {
		if (ele.nodeName === 'A') {
			ele.firstChild.src = YOUR_PROFILE_IMG;
    }
		if (ele.className === COMMNET_AUTHOR_CLASSNAME) {
			ele.firstChild.firstChild.innerHTML = YOUR_NAME;
    }
  });
}

function collectInformation() {
  COMMENT_CLASSNAME = '.' + (prompt('COMMENT_CLASSNAME', COMMENT_CLASSNAME.replace('.', '')) || COMMENT_CLASSNAME);
  COMMNET_AUTHOR_CLASSNAME = prompt('COMMNET_AUTHOR_CLASSNAME', COMMNET_AUTHOR_CLASSNAME);

  YOUR_NAME = prompt('YOUR_NAME', YOUR_NAME) || YOUR_NAME;
  YOUR_PROFILE_IMG = prompt('YOUR_PROFILE_IMG', YOUR_PROFILE_IMG) || YOUR_PROFILE_IMG;
  startInject();
}

(function() {
  collectInformation();
})();
