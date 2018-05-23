const login=new Vue({
	data:{
		user:localStorage.getItem('user'),
		pas:''
	},
	methods:{
		login:function(){
			if(phoneReg.test(this.user)){//通过手机正则验证
				if(!loginAPI()){return};/*调用->login.html数据接口：loginAPI*/
				$('#login').animate({
					'opacity':'0'
				},250,function(){
					window.location.href='index.html';					
				})
			}else{
				tip('请输入合法的手机号码','long');
			}
		},
		clear:function(){
			localStorage.removeItem('user');
			window.location.reload();
		}
	}
}).$mount('#login');

if(localStorage.getItem('sid')&&localStorage.getItem('token')){
	window.location.href='market.html';
}else{
	
};



