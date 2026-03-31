function plotPoint(x0, y0, x, y) {
    console.log(x0, y0, x, y);

    document.getElementById("in1").innerHTML = x0 + " " + y0 + " " + x + " " + y;

    var point = document.createElement('div');  
    point.className = 'point';

    point.style.left = (x - x0 + 200 - 5) + 'px';
    point.style.bottom = (y - y0 + 200 - 5) + 'px';

    document.getElementById('coordinatePlane').appendChild(point);

    let output = document.getElementById("out1");

    if (x > x0 && y > y0){
        output.innerHTML = "NE";
    }
    else if (x < x0 && y < y0){
        output.innerHTML = "SO";
    }
    else if (x > x0 && y < y0){
        output.innerHTML = "SE";
    }
    else if (x < x0 && y > y0){
        output.innerHTML = "NO";
    }
    else{
        output.innerHTML = "divisa";
    }
}
