$(function(){
var access = $.cookie('access')
if(!access){
    flag = true;
    $.cookie('access', false);
}else{
    flag = false	
}

//モーダル表示
$(".modal-open").modaal({
start_open:true, // ページロード時に表示するか
overlay_close:true,//モーダル背景クリック時に閉じるか
background: "#bcd1e7",
before_open:function(){// モーダルが開く前に行う動作
    $('html').css('overflow-y','hidden');/*縦スクロールバーを出さない*/
},
after_close:function(){// モーダルが閉じた後に行う動作
    $('html').css('overflow-y','scroll');/*縦スクロールバーを出す*/
}
});
});