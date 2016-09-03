window.onload = function(){
	checkBox();
	deleteFuc();
	setone();
}

var checkBox = function (){
	var checkeBoxList = document.getElementsByClassName('jd-check-box');

	//循环添加事件
	for (var i = 0; i < checkeBoxList.length; i++) {
		checkeBoxList[i].onclick = function(){
			var hasChecked = this.getAttribute('checked');
			if (hasChecked != null) {
				this.removeAttribute('checked');
			}else{
				this.setAttribute('checked',' ');
			}
		}
	};
}

// 删除方法
var deleteFuc = function(){
	//删除按钮的集合
	var deleteList = document.getElementsByClassName("delete-box");

	// 弹出层
	var win = document.getElementsByClassName("jd-win")[0];
	// 弹出层子盒子;
	var winBox = document.getElementsByClassName("jd-win-box")[0];

	var up;

	for (var i = 0; i < deleteList.length; i++) {
		deleteList[i].onclick = function(){
			win.style.display = "block";
			winBox.className = "jd-win-box jumpOut"; 

			var deleteobj = this;

			up = deleteobj.getElementsByClassName("delete-box-top")[0];
			// console.log( up );

			up.style.transition = "all 1s ease 0s";
			up.style.webkitTransition = "all 1s ease 0s";

			up.style.transform = "translateY(-5px) ranslateX(-2px) rotate(-45deg)";
			up.style.webkitTransform = "translateY(-5px) translateX(-2px) rotate(-45deg)";
		}
	};

	winBox.getElementsByClassName("cancel")[0].onclick =function(){
		closewin();
	}

	win.onclick = function(){
		closewin();
	}
	var closewin = function(){
		win.style.display = "none";
		winBox.className = "jd-win-box";

		if (up) {
			up.style.transform = "translateY(0) ranslateX(0) rotate(0)";
			up.style.webkitTransform = "translateY(0) translateX(0) rotate(0)";
		};
	}
	 

}


var setone = function(){
	var input = document.getElementsByTagName('input');
	for (var i = 0; i < input.length; i++) {
		input[i].value = 1;
		// if (input[i].value<0) {
		// 	// this.value = 0;
		// 	console.log(000)
		// };
	};
}
	