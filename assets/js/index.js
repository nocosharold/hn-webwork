$(document).ready(function() {
    $("body")
        AOS.init();
         // Get all section elements
        let sections = $('section');
        
        // Create an empty object to store the position of each section
        let sectionPositions = {};
        
        // Loop through each section and store its position relative to the document
        sections.each(function() {
            sectionPositions[$(this).attr('id')] = $(this).offset().top - 108;
        });
        
        // Add scroll event listener to window
        $(window).scroll(function() {
            // Get the current scroll position
            let scrollPosition = $(window).scrollTop();
            
            // Loop through each section and check if it's in view
            $.each(sectionPositions, function(key, value) {
            if (scrollPosition >= value) {
                // Add 'active' class to the corresponding nav item
                $('a[href="#' + key + '"]').parent().addClass('active').siblings().removeClass('active');

                // Check if the current section is the contact section
                // Add 'cssanimation typing sequence' class to the element you want to animate
                (key == "contact") ? $('.lets_code').addClass('cssanimation typing sequence') : $('.lets_code').removeClass('cssanimation typing sequence');
                
            }
            });
        });
});