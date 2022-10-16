

function tm_animate_text(){
	
	"use strict";
	
	var animateSpan			= jQuery('.animation_text_word');
	
	animateSpan.typed({
		direction: "rtl",
		strings: ["برای تغییر جهان کمک کنید. عضوی از خیریه ما باشید ...", "برای تغییر جهان کمک کنید. عضوی از خیریه ما باشید ...", "برای تغییر جهان کمک کنید. عضوی از خیریه ما باشید ..."],
		loop: true,
		startDelay: 1e3,
		backDelay: 3e3
	});
}

jQuery(document).on('ready', function () {
	(function ($) {
		tm_animate_text();
	})(jQuery);
});