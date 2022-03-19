
class GrassEater {//___________________xotakeri class_________________________

    constructor(x,y,index=2,noteat_lim=5,eat_mull_lim=5) {
        this.x = x;
        this.y = y;
        this.index = index;
        this.noteat = 0;
        this.eat_mull =0;
      	this.directions = this.new_directions_8(this.x,this.y);
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
		for (var i in arrGrassEater) {
  		  if (this.x == arrGrassEater[i].x && this.y == arrGrassEater[i].y) {
    		    arrGrassEater.splice(i, 1);
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
    
    		matrix[y][x] = 2;
    		for (var i in grassArr) {
  		  if (x== grassArr[i].x && y == grassArr[i].y) {
    		    grassArr.splice(i, 1);
    		   break;
   		  }
		}
    }

    mull(new_x,new_y){
        let x=this.x,y=this.y;
        let object=new  GrassEater(x,y,2);
        this.eat(new_x,new_y);
        arrGrassEater.push(object);
        matrix[y][x]=2;
   }

    qayl() {
    	let newCellr;

    	if (this.chooseCell(1)[0]==undefined) {
    		newCellr = random(this.chooseCell(0));
    		this.eat_mull=0;
    		 this.noteat++;
    	}
    	else{
    		 newCellr =random( this.chooseCell(1));
    		 this.eat_mull++;
    		 this.noteat=0;
    	}

        if (this.eat_mull>=4) {
            this.eat_mull=0;

            this.mull(newCellr[0],newCellr[1]);
        }
        else if(this.noteat>=50){
            this.del();
        }
    	else if (newCellr!=undefined) {
    		this.eat(newCellr[0],newCellr[1]);
    	}    	
    	
    }

}
