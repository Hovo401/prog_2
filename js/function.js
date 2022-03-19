function generator(x=100,y=50,n1=300,n2=50,n3=20,n4=400){//glxavor maricayi mej random tvyalner spami function
		matrix=[];
	for (let i =0;i<y;i++) {
		matrix[i]=[];
		for (let g =0;g<x;g++) {
			
			//matrix[i][g]=Math.round( Math.random()*1.52);
			matrix[i][g]=0;
		}
	}
for (let i = 0;i<n1;i++) {
	matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=1;
}
for (let i = 0;i<n2;i++) {
	matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=2;
}
for (let i = 0;i<n3;i++) {
	matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=3;
}
matrix[user.y][user.x]=4;
for (let i = 0;i<n4;i++) {
	matrix[rand(0,matrix.length-1)][rand(0,matrix[0].length-1)]=5;
}
	spam_matric_object();
}

function spam_matric_object(){
	for(let i = 0; i < matrix.length; ++i){
	   for(let j = 0; j < matrix[i].length; j++){
	       if(matrix[i][j] == 1){
	           let GrassNew = new Grass(j,i,1);
	           grassArr.push(GrassNew);
	       }
	       else if(matrix[i][j] == 2){
	       		let GrassEaterNew = new GrassEater(j,i,2);
	           arrGrassEater.push(GrassEaterNew);
	       }
	       else if(matrix[i][j] == 3){
	       		let PredatorNew = new Predator(j,i,3);
	       		arrPredator.push(PredatorNew);
	       }
	        else if(matrix[i][j] == 5){
	       		let newSvin = new Svin(j,i);
	       		arrSvin.push(newSvin);
	       }	
	   }
	}
}

function rand(min, max) {
	return Math.round((max - min) * Math.random()) + min;
}
