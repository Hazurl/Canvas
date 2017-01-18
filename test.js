window.onload = function()
{
    var can_ctx = InitCanvas();
}

function InitCanvas () {
    var _canvas = document.getElementById('mon_canvas');
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    var _context = canvas.getContext('2d');
    if(!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }

    return { canvas:_canvas, context:_context };
}