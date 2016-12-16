
window.onload = function(){
	
	var listPage = {
	
	myScroll:null,
	//商品列表
	list:$("#list-page .pro-list"),
	//二级头部
	classList:$("#list-page .class-list"),
	//下拉刷新
	downText:$("#list-page .down-text"),
	
	
	
	page:0,
	classID:undefined,
	canReload:false,
	
	init:function(){
		var caodan = document.getElementById("list-wrapper")
		//创建一个iscroll
		this.myScroll = new IScroll(caodan,{
            scrollbars:true,
            fadeScrollbars:true,
            shrinkScrollbars:"scale",
            bounce:true,
            probeType:1,
            click:true
        });
		//获取商品的分类数据
		this.getClass();
		//先给页面填充数据
		this.addData();
		//给页面元素绑定事件
		this.bindEvent();
		
	},
	
	getClass:function(){
		
		$.get("http://datainfo.duapp.com/shopdata/getclass.php",function(data){
//			console.log(data)
			//分类的内容
			var str = ""
			for(var i=0;i<data.length;i++){
              str+='<li class="iconfont" data-id="'+data[i].classID+'">'+data[i].icon+'</li>'
			}
			this.classList.html(str)
		}.bind(this),"json")
		
	},
	
	
	addData:function(){},
	
	bindEvent:function(){}
	
	
	
	
	
	
	
};
//让页面初始化
listPage.init();

	
	
	
}







