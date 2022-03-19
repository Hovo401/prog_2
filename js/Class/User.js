var user={
	x:5,
	y:5,
	w:false,
	s:false,
	a:false,
	d:false,
	clic:(elevn,on_off)=>{
		if (on_off) {
			if (event.code=="KeyW"){ user.w="w";}
			if (event.code=="KeyS"){ user.s="s";}
			if (event.code=="KeyA"){ user.a="a";}
			if (event.code=="KeyD"){ user.d="d";}
		}
		else{
			if (event.code=="KeyW"){ user.w=false;}
			if (event.code=="KeyS"){ user.s=false;}
			if (event.code=="KeyA"){ user.a=false;}
			if (event.code=="KeyD"){ user.d=false;}
		}
	},
	control_klav:()=>{
		if(user.w=="w"&&user.y>0){
			matrix[user.y][user.x]=0;
			user.y--;
			matrix[user.y][user.x]=4;
		}
		if(user.s=="s"&&user.y<matrix.length-1){
			matrix[user.y][user.x]=0;
			user.y++;
			matrix[user.y][user.x]=4;
		}
		if(user.a=="a"&&user.x>0){
			matrix[user.y][user.x]=0;
			user.x--;
			matrix[user.y][user.x]=4;
		}
		if(user.d=="d"&&user.x<matrix[0].length-1){
			matrix[user.y][user.x]=0;
			user.x++;
			matrix[user.y][user.x]=4;
		}
	
	}

}