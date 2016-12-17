
$(function(){
		$("#detail-page .add-cart").on("click",function () {
			console.log(1111)
            var sendData = {"userID":"lining","goodsID":detailPage.goodsID,"number":1};
            $.get("http://datainfo.duapp.com/shopdata/updatecar.php",sendData,function (data) {
                console.log(data)
            },"json")
        })
})

var detailPage = {
	goodsID:fnBase.request("goodsID"),
	btn1:$(".add-cart"),
	init:function(){
		 //先给页面填充数据
        this.addData();
        //给页面元素绑定事件
        this.bindEvent();
        
	},
	
	addData:function(){
		$.getJSON("http://datainfo.duapp.com/shopdata/getGoods.php?callback=?",{goodsID:this.goodsID},function (data){
//			console.log(data.imgsUrl)
			//data[0].imgsUrl 轮播图
            //goodsName
            //price
            //buynumber
            var picList = JSON.parse(data[0].imgsUrl);;
//          console.log(picList)
            var strPic = "";
            for(var i=0;i<picList.length;i++){
            	strPic+='<div class="swiper-slide"><img src="'+picList[i]+'"></div>'
            }
            //填充轮播图的内容
            $("#detail-page .swiper-wrapper").html(strPic);
            //轮播图内容确定 调用swiper
            var mySwiper = new Swiper ('.swiper-container', {
                loop: true,
                slidesPerView: 3,
                pagination: '.self-pagination',
            });
            //轮播图下面的信息
            $("#detail-page .pro-info").html(
                '<li class="pro-name">'+data[0].goodsName+'</li>' +
                '<li class="pro-price"><em>￥'+data[0].price+'</em><del>￥999</del></li>' +
                '<li class="pro-num">购买人数:'+data[0].buynumber+'</li>'
            )
		})
	},
	
	bindEvent:function(){
		console.log(2)
		 this.btn1.on("click",function(){
			console.log(1)
		})
	}
	
};

//页面初始化
detailPage.init()














