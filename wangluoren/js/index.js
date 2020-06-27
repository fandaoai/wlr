function ani(claname, type) {
	if(($(claname).offset().top - $(window).scrollTop()) < $(window).height()) {
		$(claname).addClass(type);
	};
	$(window).scroll(function() {
		if(($(claname).offset().top - $(window).scrollTop()) < $(window).height()) {
			$(claname).addClass(type);
		};
	});

};

ani('.ctt1 .c1','fadeInLeft');
ani('.ctt1 .c2','fadeInLeft');
ani('.ctt1 .c3','fadeInLeft');
ani('.ctt1 .c4','fadeInLeft');
// ani('.slideshow .title','fadeInUp');

// ani('.slideshow1 .p1','fadeInLeft');
// ani('.slideshow1 .p2','fadeInLeft');
// ani('.slideshow1 img','fadeInRight');

// ani('.slideshow2 .p1','fadeInLeft');
// ani('.slideshow2 .p2','fadeInLeft');
// ani('.slideshow2 .p3','fadeInLeft');
// ani('.slideshow2 img','fadeInDown');

// ani('.slideshow3 .p1','fadeInRight');
// ani('.slideshow3 .p2','fadeInRight');
// ani('.slideshow3 img','fadeInUp');

// ani('.slideshow4 .p1','fadeInRight');
// ani('.slideshow4 .p2','fadeInRight');
// ani('.slideshow4 img','fadeInUp');

// ani('.slideshow5 .p1','fadeInLeft');
// ani('.slideshow5 .p2','fadeInLeft');
// ani('.slideshow5 img','fadeInDown');

// ani('.slideshow6 .p1','fadeInRight');
// ani('.slideshow6 .p2','fadeInRight');
// ani('.slideshow6 img','fadeInUp');

// ani('.slideshow7 .p1','fadeInLeft');
// ani('.slideshow7 .p2','fadeInLeft');
// ani('.slideshow7 img','fadeInRight');

// ani('.cont-2 .dh1','bounceInUp');
// ani('.cont-2 .dh2','bounceInUp');
// ani('.cont-3 .dh1','fadeInLeft');
// ani('.cont-3 .dh2','fadeInLeft');
// ani('.cont-3 .dh3','fadeInLeft');
// ani('.cont-3 .dh4','fadeInLeft');
// ani('.cont-3 .dh5','fadeInLeft');
// ani('.cont-3 .grid-r .img','fadeInUp');
// ani('.cont-3 .grid-r .size','fadeInUp');
// ani('.cont-4 .dhu','zoomInUp');
// ani('.cont-4 .dhl','bounceInLeft');
// ani('.cont-4 .dhr','bounceInRight');
// ani('.cont-4 .dhl2','bounceInLeft');
// ani('.cont-4 .dhr2','bounceInRight');
// ani('.cont-5 .grid','fadeIn');
// ani('.cont-6 .yc','fadeInUp');
// ani('.cont-7 .nr-1','fadeInLeft');
// ani('.cont-7 .nr-2','fadeInUp');
// ani('.cont-7 .nr-3','fadeInDown');
// ani('.cont-7 .input','fadeInDown');

// var newshow=1;
// var maxshow=6;
// function show(){
// 	$('.slideshow'+newshow).css('display','none');
// 	$('.slideshow'+(newshow+1)).css('display','block');
// 	if(newshow==maxshow){
// 		$('.slideshow'+(newshow+1)).css('display','none');
// 		newshow=1;
// 		$('.slideshow'+newshow).css('display','block');
// 	}else{
// 		newshow++;
// 	}
// }
// setInterval(show,5000);