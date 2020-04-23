//���r�ĪG
ityped.init('#ityped', {
	strings:['MSc GIS student at the University of Edinburgh'],
	startDelay: 600,
	loop:true
});	

//������
$('.slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear',
	arrows: false
});

//chart

$(document).ready(function(){
		$('.html').animate({width:'55%'},2000);
		$('.oracle').animate({width:'65%'},2000);
		$('.python').animate({width:'65%'},2000);
		$('.java').animate({width:'55%'},2000);
		$('.r').animate({width:'50%'},2000);
			});