row = 16;
sizeofUnit=45;

function gridLife() {
    for (var x = 0; x < row; x++) {
        for (var y = 0; y < row; y++) {
            //var unit = $("<div class='unit' style='positision: absolute'></div>")
            $("<div>").addClass("unit").appendTo("#container");
            console.log("square creator: loaded");
        }
    }
$('.unit').css({'width': sizeofUnit, 'height': sizeofUnit});
}
$(document).ready(function(){
    gridLife();
    $('.unit').on('mouseenter', function() {
        $(this).css('background-color', 'black');
    })
    console.log("ready function loaded")
})
$(document).ready(function() {
    $('button').click(function() {
        $('#container').empty();
        row = prompt("How mant squares do you want?")
        sizeofUnit = 720/row;
        gridLife();
        $('.unit').on('mouseenter', function() {
            $(this).css('background-color', 'black');
        })
    })
})