var selected = null;
var temp = { x: 0, y: 0 }

$('#add').click(function (event) {
    $('<div class="garbage c"></div>').appendTo('.parent');
})


$(document).on('mousedown', '.garbage', function (event) {
    // console.log(event);
    selected = this
    var rect = selected.getBoundingClientRect();
    temp.x = rect.top
    temp.y = rect.left
})

$(window).on('mousemove', function (event) {
    console.log(event);
    if (selected) {
        selected.style.top = event.clientY + 'px'
        selected.style.left = event.clientX + 'px'
    }

})

$(window).on('mouseup', function (event) {
    // console.log(event.target);
    console.log(temp);
    if (event.target != document.getElementById('bin')) {
        selected.style.top = temp.x + 'px'
        selected.style.left = temp.y + 'px'
        selected = null
    } else {
        $(selected).remove();
    }
})

