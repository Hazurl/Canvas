(function () {
var CANVAS;
var CTX;
var PLANET;

const SIZE = {
    width:500,
    height:500
};

const PLANET_PARAM = {
    numPts : 100,
    radius : 150,
    variant : 25
};

window.onload = function() {
    InitCanvas();
    GeneratePlanet(SIZE.width/2, SIZE.height/2, PLANET_PARAM.numPts, PLANET_PARAM.radius);
    RandomPlanet(PLANET_PARAM.variant);
    SmoothPlanet();
    CalculCoordPlanet();
    DisplayPlanet();
};

function InitCanvas () {
    CANVAS = document.getElementById('canvas');
    if(!CANVAS) {
        alert("Impossible de récupérer le canvas");
        return;
    }

    CTX = canvas.getContext('2d');
    if(!CTX) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }

    CANVAS.width = SIZE.width;
    CANVAS.height = SIZE.height;
}

function GeneratePlanet (x, y, numPts, radius) {
    PLANET = {};

    PLANET.x = x;
    PLANET.y = y;
    
    PLANET.points = new Array(numPts);
    PLANET.size = numPts;
    
    for (var i = PLANET.size - 1; i >= 0; i--)
        PLANET.points[i] = radius;
}

function RandomPlanet (variant) {
    for (var i = PLANET.size - 1; i >= 0; i--)
        PLANET.points[i] += variant * (Math.random() - 0.5) * 2
}

function SmoothPlanet () {

}

function CalculCoordPlanet () {
    PLANET.coordX = new Array (PLANET.size);
    PLANET.coordY = new Array (PLANET.size);

    for (var i = PLANET.size - 1; i >= 0; i--) {
        var rad = Math.PI * 2 * i / (PLANET.size - 1);
        var x = PLANET.x + PLANET.points[i] * Math.cos(rad);
        var y = PLANET.y + PLANET.points[i] * Math.sin(rad);

        PLANET.coordX[i] = x;
        PLANET.coordY[i] = y;
    }

    console.log(PLANET);

}

function DisplayPlanet () {
    console.log('Affichage planete ...');
    CTX.beginPath();
    CTX.moveTo(PLANET.coordX[0], PLANET.coordY[0]);

    for (var i = PLANET.size - 1; i >= 0; i--) {
        CTX.lineTo(PLANET.coordX[i], PLANET.coordY[i]);
    }

    CTX.stroke();
    CTX.closePath();
}

})();