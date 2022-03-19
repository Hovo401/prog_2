class Svin{
	constructor(x=10, y=10) {
		this.x=x;
		this.y=y;
		this.usX=user.x;
		this.usY=user.y;
		this.zagerjka=2;
		this.matrix_lengt_y=matrix.length;
		this.matrix_lengt_x=matrix[0].length;
	}
	 new_directions_8(x,y){
    return [
    	[x    , y    ],
        [x - 1, y - 1],
        [x    , y - 1],
        [x + 1, y - 1],
        [x - 1, y    ],
        [x + 1, y    ],
        [x - 1, y + 1],
        [x    , y + 1],
        [x + 1, y + 1]  ]
    }
    kord_heravorutyun(x,y,x1,y1){
    	return Math.sqrt((x-x1)**2+(y-y1)**2);
    }


    chooseCell(){
    	let kord_qayli=[] , her_dur;
let her;
    	for (var i of this.new_directions_8(this.x,this.y)) {

    		if(i[0]>=0&&i[1]>=0&&i[0]<this.matrix_lengt_x&&i[1]<this.matrix_lengt_y){

    			 her=this.kord_heravorutyun(i[0],i[1],this.usX,this.usY);

    			if (her>=1&&matrix[i[1]][i[0]]==0||her>=1&&i[1]==this.y&&i[0]==this.x) {
	    			

			    	if(kord_qayli[0]==undefined){
			    		kord_qayli=i; her_dur=her; continue;
			    	}
			

			    	if (her<her_dur) {kord_qayli=i;her_dur=her;}
				}

	    	}
    	}
    	
    	if(kord_qayli[0]!=undefined){
    	return kord_qayli;}
    }
    qayl(){
    	if (this.zagerjka<=0) {
    	this.usX=user.x;
		this.usY=user.y;
    	let kor=this.chooseCell();
    	if (kor!=undefined&&matrix[kor[1]][kor[0]]!=undefined&&matrix[kor[1]][kor[0]]==0) {

    	matrix[this.y][this.x]=0;
    	matrix[kor[1]][kor[0]]=5;
    	this.x=kor[0];
    	this.y=kor[1];
    	this.zagerjka+=0.4;

    	}
    	}
    	else{
    		this.zagerjka--;
    	}
    }
}