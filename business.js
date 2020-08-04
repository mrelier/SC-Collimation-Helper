var r1 = 75;
var r2 = 15;
var r3 = 1;

function changeCircle(cercle, valeur) {
    switch (cercle) {
        case 1:
            r1 = valeur;
            break;
        case 2:
            r2 = valeur;
            break;
        case 3:
            r3 = valeur;
            break;
    }
    dessineCercles();
}

function load() {
    console.log("load");
    document.getElementById("circle1").value = r1;
    document.getElementById("circle2").value = r2;
    document.getElementById("circle3").value = r3;
    dessineCercles();
}

function dessineCercles() {
    var canvas = document.getElementById("canvasCercles");
    var ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    dessineCercle(r1, ctx);
    dessineCercle(r2, ctx);
    dessineCercle(r3, ctx);
}

function dessineCercle(r, ctx) {
    ctx.beginPath();
    ctx.arc(150, 150, r, 0, 2 * Math.PI);
    ctx.strokeStyle = "#DC2A2A";
    ctx.stroke();
}