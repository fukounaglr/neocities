function OpenWindow(a) {
    document.getElementById(a).style.display = 'block';
    //document.querySelector("tab_" + a).style.display = 'block';

}

function CloseWindow(a) {
    document.querySelector(a).style.display = 'none';
}


$('.draggable').click(function() {
    // set ohters element to the initial level
    $(this).siblings('.box').css('z-index', 10);
    // set clicked element to a higher level
    $(this).css('z-index', 11);
});

//$(function() {
//    // Change this selector to find whatever your 'boxes' are
//    var boxes = $("draggable");
//
//    // Set up click handlers for each box
//    boxes.click(function() {
//        var el = $(this), // The box that was clicked
//            max = 0;
//
//        // Find the highest z-index
//        boxes.each(function() {
//            // Find the current z-index value
//            var z = parseInt( $( this ).css( "z-index" ), 10 );
//            // Keep either the current max, or the current z-index, whichever is higher
//            max = Math.max( max, z );
//        });
//
//        // Set the box that was clicked to the highest z-index plus one
//        el.css("z-index", max + 1 );
//    });
//});