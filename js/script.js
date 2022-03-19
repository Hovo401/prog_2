	
var matrix = [], //glaxavor matrica vory petx e artaxsvi  ekranin
	side =12,    //licheykayi chapsy px-ov

	grassArr = [],    //xotii objectneri zngvac
    arrGrassEater=[], //xotakerneri  objectneri zngvac
    arrPredator=[],
    arrSvin=[];

generator(100,50,0,0,0);

//for (var j = 12; j <=22; j++) {
for (var i = matrix[0].length - 1; i >= 0; i--) {
	matrix[20][i]=3;
}
// }

window.onkeypress=(event)=>{
	user.clic(event,true);
}
window.onkeyup=(event)=>{
	user.clic(event,false);
}







function setup() {
//  frameRate(1);
	createCanvas(matrix[0].length * side, matrix.length * side);
	//noStroke();
} 

function draw() {
background('#E7E7E7');
		for(var i in grassArr){
	       grassArr[i].mul();
	}

  	for(var j = arrGrassEater.length-1 ; j>=0 ;j--){
	       arrGrassEater[j].qayl();
	}
	for(var j = arrPredator.length-1 ; j>=0 ;j--){
	       arrPredator[j].qayl();
	}
		for(var i in arrSvin){
	       arrSvin[i].qayl();
	}
	user.control_klav();


   for (var y = 0; y < matrix.length; y++) {
	    for (var x = 0; x < matrix[y].length; x++) {
	    if (matrix[y][x] != 0) {

	        if (matrix[y][x] == 1) {
	            fill("green");
	        }
	        else if (matrix[y][x] == 2) {
	            fill("#FFDD00");
	        }
	        else if (matrix[y][x] == 3) {
	            fill("#AF001A");
	        }
	         else if (matrix[y][x] == 4) {
	            fill("#0000E4");
	        }
	        else
	         if (matrix[y][x] == 5) {
	            fill("#E1FF00");
	        }
	        
	        rect(x * side, y * side, side, side);
	    	}
		}
	}

}
