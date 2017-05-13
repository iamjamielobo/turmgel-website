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
	
    $("#navToggle a").click(function(e){
        e.preventDefault();
		
        $("header > nav").slideToggle("medium");
        $("#logo").toggleClass("menuUp menuDown");
    });
    
    $(window).resize(function() {
        if($( window ).width() >= "600") {
            $("header > nav").css("display", "block");
            
            if($("#logo").attr('class') == "menuDown") {
                $("#logo").toggleClass("menuUp menuDown");
            }
        }
        else {
            $("header > nav").css("display", "none");
        }
    });
    
    $("header > nav > ul > li > a").click(function(e) {
        if($( window ).width() <= "600") {
            if($(this).siblings().size() > 0 ) {
                $(this).siblings().slideToggle("fast")
				$(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
});