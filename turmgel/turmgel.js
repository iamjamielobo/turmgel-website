jQuery('document').ready(function(){
	jQuery("#testimonial-slick").slick({
	    dots: true,
	    speed: 300,
	    slidesToShow: 1,
	    arrows: true,
	    centerMode: true,
		prevArrow: '<span class="buttons prev" aria-label="Previous" tabindex="0" ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><use xlink:href="/icons/turmgel-icons.svg#icon-prev-arrow"></use></svg></span>',
		nextArrow: '<span class="buttons next" aria-label="Next" tabindex="0" ><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><use xlink:href="/icons/turmgel-icons.svg#icon-next-arrow"></use></svg></span>'
	});
});