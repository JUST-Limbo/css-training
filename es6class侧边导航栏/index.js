// 采用面向对象的方式 es6的语法

// 更好的解决方式: bind() 
var that;
class AsideNav {
	constructor(className) {
		// 导航主区域
		this.main = document.querySelector(className);

		// li
		this.lis = this.main.querySelectorAll(".nav-list .item");

		// 父导航
		this.parentNavs = this.main.querySelectorAll(".nav-list .item .parentNav");
		that = this;
		// 绑定事件
		this.init();
	}

	init() {
		for (var i = 0; i < this.lis.length; i++) {
			// 注意:this的指向问题
			this.parentNavs[i].onclick = this.toggleNav;
		}
	}

	// 清除li的active类
	clearClass() {
		for (var i = 0; i < this.lis.length; i++) {
			this.lis[i].className = "item";
		}
	}

	// 切换
	toggleNav() {
		console.log(this)
		var li = this.parentNode;
		// 当点击的li是当前激活时的li时
		if(li.classList.contains("active")){
			li.classList.remove("active");
		}else{
			// 当点击的li不是当前激活时的li时
			that.clearClass();
			li.classList.add("active");
		}
	}
}
	var asideNav = new AsideNav(".aside-nav");
