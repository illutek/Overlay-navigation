/**
 * Created by Stefan on 27/03/2016.
 */

$( document ).ready(function() {
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});
