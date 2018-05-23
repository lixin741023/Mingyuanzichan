!function(n){
    var e=n.document;
    t=e.documentElement;
    i=375;
	d=i/100;
	o="orientationchange"in n?"orientationchange":"resize";
	a=function(){
		var n=t.clientWidth||320;n>720&&(n=720);
		t.style.fontSize=n/d+"px";
	};
	e.addEventListener&&(n.addEventListener(o,a,!1),e.addEventListener("DOMContentLoaded",a,!1));
}(window);

/*appTab选项卡控制*/
function appTab(){
	$('.appTab').on('click','span',function(){
		let appTab=$(this).parent().find('span');
		let appTab_class=$(this).parent().attr('data-appTab');
		let appTab_target=$(this).attr('id');
		let appTabContent=$(`.appTabContent[data-appTabContent=${appTab_class}]`);
		for(let i=0; i<appTabContent.length; i++){
			if(this==appTab[i]){
				appTab[i].classList.add('appTab_active');
			}else{
				appTab[i].classList.remove('appTab_active');
			};
			let appTabContent_target=$(appTabContent[i]).attr('id');
			if(appTab_target==appTabContent_target){
				appTabContent[i].classList.add('appTabContent_active');
			}else{
				appTabContent[i].classList.remove('appTabContent_active');
			}
		}
	})
};

/*股票代码正则*/
let stockReg=/^(((002|000|300|600)[\d]{3})|60[\d]{4})$/;
/*手机号码正则*/
let phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
/*全为数字验证*/
let numberReg=/^[\d\s]+$/;

/*底部提示信息*/
function tip(txt,time){
	if(time==undefined)time='short';
	mui.toast(txt,{ duration:time, type:'div' })
}



console.log('sid: '+localStorage.getItem('sid'))
console.log('token: '+localStorage.getItem('token'))
