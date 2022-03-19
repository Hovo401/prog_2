
class Predator{//___________________xotakeri class_________________________

    constructor(x,y,index=3,noteat_lim=15,eat_mull_lim=2) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.noteat = 0;
        this.eat_mull =0;
      	this.directions = this.new_directions_8(this.x,this.y);
      	this.directions_16 = this.new_directions_16(this.x,this.y);
    }

    new_directions_8(x,y){
    return [
        [x - 1, y - 1],
        [x    , y - 1],
        [x + 1, y - 1],
        [x - 1, y    ],
        [x + 1, y    ],
        [x - 1, y + 1],
        [x    , y + 1],
        [x + 1, y + 1]  ]
    }
    new_directions_16(x,y){
    	 return [
        [x - 2, y - 2],
        [x    , y - 2],
        [x + 2, y - 2],
        [x - 2, y    ],
        [x + 2, y    ],
        [x - 2, y + 2],
        [x    , y + 2],
        [x + 2, y + 2],
        [x + 1, y - 2],
        [x - 1, y - 2],
        [x + 1, y + 2],
        [x - 1, y +	2],
        [x + 2, y - 1],
        [x - 2, y - 1],
        [x + 2, y + 1],
        [x - 2, y + 1] 
        ]
    }
    chooseCell_test() {
    	 var found = this.new_directions16(this.x,this.y);
		   for (var i in found) {
		   	matrix[found[i][1]][found[i][0]]=3;
		   }
    }

    chooseCell(character) {
    	 var found = [];
		   for (var i in this.directions) {
		       var x = this.directions[i][0];
		       var y = this.directions[i][1];
		       if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length){
		       if (matrix[y][x] == character) {
		           found.push(this.directions[i]);
		       }
		   }
		   }
		   return found;
    }

    del(){
		for (var i in arrPredator) {
  		  if (this.x == arrPredator[i].x && this.y == arrPredator[i].y) {
    		    arrPredator.splice(i, 1);
    		   break;
   		  }
		}	
		matrix[this.y][this.x] = 0;
    }

    eat(x,y){
        matrix[this.y][this.x]=0;
        this.x=x;
        this.y=y;
        this.directions = this.new_directions_8(this.x,this.y);
    
    		matrix[y][x] = this.index;
    		for (var i in arrGrassEater) {
  		  if (x== arrGrassEater[i].x && y == arrGrassEater[i].y) {
    		    arrGrassEater.splice(i, 1);
    		   break;
   		  }
		}
    }

    mull(new_x,new_y){
        let x=this.x,y=this.y;
        let object=new  Predator(x,y,this.index);
        this.eat(new_x,new_y);
        arrPredator.push(object);
        matrix[y][x]=this.index;
   }

    qayl() {
    	let newCellr;
    	if (this.chooseCell(2)[0]==undefined&&this.chooseCell(0)[0]==undefined) {
			this.noteat+=0.2;
    	}
    	else if(this.chooseCell(2)[0]!=undefined){
    		newCellr =random( this.chooseCell(2));
		    this.eat_mull++;
		    this.noteat=0;
    	}
    	else if(this.chooseCell(1)[0]!=undefined){
			this.noteat+=0.2;
    	}
    	else if(this.chooseCell(0)[0]!=undefined){
    		newCellr = random(this.chooseCell(0));
    		
    	 	this.noteat++;
    	}


        if (this.eat_mull>=5) {
            this.eat_mull=0;

            this.mull(newCellr[0],newCellr[1]);
        }
        else if(this.noteat>=10){
            this.del();
        }
    	else if (newCellr!=undefined) {
    		this.eat(newCellr[0],newCellr[1]);
    	}    	
    	
    }

}
