
var tl = new TimelineMax();

tl
	.to('body', .5, {backgroundColor: '#040e3e'})
	.staggerTo('#Stars polygon', .6, {opacity: 1}, .1, "-=0.3")
	.to('#Moon', .3, {opacity: 1}, "-=0.3")