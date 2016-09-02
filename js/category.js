window.onload = function(){
	leftCategory();

}

/*左边分类*/
var leftCategory = function(){
	// 父盒子
	var parentBox = document.getElementsByClassName("jd-category-left")[0];
	var childBox = parentBox.getElementsByClassName("category-left-box")[0];

	var childBoxList = childBox.getElementsByTagName("li");

	var height = parentBox.offsetHeight;
	var topHeight = document.getElementsByClassName("jd-topbar")[0].offsetHeight;

	// 

	var parentH = height - topHeight;
	var childH = childBox.offsetHeight;

	var startY = 0;
	var moveY = 0;
	var endY = 0;

	var currY = 0;
	// 上下晃动的距离
	var upDownY = 150;

	// 时间
	var startTime = 0, endTime = 0;

	//定义一个过渡函数
	var addTransition = function(){
		childBox.style.transition = "all .3s ease 0s";
		childBox.style.webkitTransition = "all .3s ease 0s";
	} 

	//去掉过渡函数
	var removeTransition = function(){
		childBox.style.transition = "none";
		childBox.style.webkitTransition = "none";
	} 

	//改变位置
	var setTransform = function(t){
		childBox.style.transform = "translateY("+t+"px)";
		childBox.style.webkitTransform = "translateY("+t+"px)";
	} 
	//触摸事件开始
	childBox.addEventListener('touchstart', function(e){
		// console.log('strat');
		// 记录开始的位置
		startTime = new Date().getTime();
		startY = e.touches[0].clientY;
	},false)

	//触摸滑动事件开始
	childBox.addEventListener('touchmove', function(e){

		// 清除默认的滚动事件
		e.preventDefault();
		// 记录开始的位置
		endY = e.touches[0].clientY;
		//记录移动的位置
		moveY = startY - endY;

		// 上下间距不大于upDownY
		if (currY - moveY < upDownY && currY - moveY > (-(childH - parentH) - upDownY )) {
		removeTransition();
		setTransform(currY - moveY);
		};




	},false);

	childBox.addEventListener('touchend', function(e){
		endTime = new Date().getTime();
		// 上面满足吸附的条件
		if ((currY - moveY) >= 0) {
			addTransition();
			setTransform(0);
			currY = 0;
		}else if ((currY - moveY) <= (-(childH - parentH) )) {// 下面满足吸附的条件
			addTransition();
			setTransform(-(childH - parentH));
			currY = currY - moveY;
		}else{
		// 当前滑动的位置
		currY = currY - moveY;

		}

		if (endTime - startTime < 150 && moveY == 0) {
			for (var i = 0; i < childBoxList.length; i++) {
				childBoxList[i].className = "";
				childBoxList[i].index = i;
			};
			 var li = e.target.parentNode;
			 li.className = "now";
			 // 移动的距离
			 var translateY = li.index *50;

			 console.log(translateY);

			 /*if (currY - translateY < -(childH - parentH)) {

			 }else{
			 	addTransition();
			 	setTransform(currY - translateY);
			 	// currY = currY - translateY;
			 }*/
		}



	},false)





}