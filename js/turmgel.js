jQuery('document').ready(function() {

    jQuery("#testimonial-slick").slick({
        dots: true,
        speed: 300,
        slidesToShow: 1,
        arrows: true,
        centerMode: false,
        prevArrow: '<span class="buttons prev" aria-label="Previous" tabindex="0" ><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M72.7,0c1.9,0.1,3.6,1.2,4.6,3.3s0.7,4.2-0.8,6.1c-0.2,0.2-0.4,0.4-0.6,0.6c-5.1,5.1-10.2,10.2-15.3,15.4c-7,7-13.9,14-20.9,21c-2.2,2.2-2.2,5.2,0,7.4C51.8,65.9,63.8,77.9,75.9,90c1.3,1.3,2.1,2.7,2.1,4.5c-0.1,2.3-1.2,4.1-3.3,5c-2.1,1-4.1,0.6-5.9-0.8c-0.3-0.2-0.5-0.5-0.8-0.7C53.2,83.2,38.5,68.5,23.8,53.8c-2.4-2.4-2.3-5.2,0-7.6c4-4,7.9-8,11.9-12C44.5,25.4,53.3,16.6,62,7.8c2-2,4-4,6-6C69.2,0.7,70.6,0,72.7,0z"/></svg></span>',
        nextArrow: '<span class="buttons next" aria-label="Next" tabindex="0" ><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 100 100" xml:space="preserve"><path d="M29.6,95c-1.7-0.1-3.2-1.1-4.1-3c-0.9-1.9-0.6-3.8,0.7-5.5c0.2-0.2,0.4-0.4,0.5-0.5c4.6-4.6,9.2-9.2,13.8-13.9c6.3-6.3,12.5-12.6,18.8-18.9c2-2,2-4.7,0-6.7C48.4,35.7,37.6,24.9,26.7,14c-1.2-1.2-1.9-2.4-1.9-4c0.1-2.1,1.1-3.7,3-4.5c1.9-0.9,3.7-0.5,5.3,0.7c0.3,0.2,0.4,0.4,0.7,0.6c13.3,13.3,26.5,26.5,39.8,39.8c2.2,2.2,2.1,4.7,0,6.8C70,57,66.5,60.6,62.9,64.2C55,72.2,47,80.1,39.2,88c-1.8,1.8-3.6,3.6-5.4,5.4C32.7,94.4,31.5,95,29.6,95z"/></svg></span>'
    });
    // tabbed content
    // http://www.entheosweb.com/tutorials/css/tabss.asp
    $(".tab_content").hide();
    $(".tab_content:first").show();

    /* if in tab mode */
    $("ul.tabss li").click(function() {

        $(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();

        $("ul.tabss li").removeClass("active");
        $(this).addClass("active");

        $(".tab_drawer_heading").removeClass("d_active");
        $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

    });
    /* if in drawer mode */
    $(".tab_drawer_heading").click(function() {

        $(".tab_content").hide();
        var d_activeTab = $(this).attr("rel");
        $("#" + d_activeTab).fadeIn();

        $(".tab_drawer_heading").removeClass("d_active");
        $(this).addClass("d_active");

        $("ul.tabss li").removeClass("active");
        $("ul.tabss li[rel^='" + d_activeTab + "']").addClass("active");
    });
    /* if in drawer mode */
    $(".panel-heading").click(function() {
        var $this = $(this);
        $this.find("svg").toggleClass("_active");
    });

    $('#date').text(new Date().getFullYear());

    $("#know-more").click(function() {
        $('html, body').animate({
            scrollTop: $(".about").offset().top
        }, 1000);
    });

});
