const findPassword=new Vue({
	data:{
		user:'18982497320',
		pas:'',
		code:'',
		getCheckCodeCD:120,
		show:true,
		hrefLoginCD:2
	},
	methods:{
		getCheckCode:function(){
			if(phoneReg.test(this.user)){/*通过手机正则验证
				/*调用->获取短信验证码接口:getCheckCodeAPI*/
				getCheckCodeAPI(this.user);
				let vue_=this;
				vue_.show^=1;
				let time=setInterval(function(){
					vue_.getCheckCodeCD--;
					if(vue_.getCheckCodeCD==-1){
						clearInterval(time);
						vue_.show^=1;
						vue_.getCheckCodeCD=120;
					};
				},1000)
			}else{
				tip('请输入合法的手机号码','long');
			}
		},
		findPassword:function(){
			if(phoneReg.test(this.user)){				 				    //1、通过手机正则验证*/
				if(this.pas==''){tip('密码不能为空');return};				    //2、通过密码不为空验证*/
				if(!findPasswordAPI(this.user,this.pas,this.code)){return}; //3、调用->register.findPassword.html数据接口:findPasswordAPI*/	
				$('.zzc1').fadeIn('slow');
				$('.findPasswordSuccess').fadeIn('slow');
				let vue_=this;
				let time=setInterval(function(){
					if(vue_.hrefLoginCD==-0){
						clearInterval(time);
						$('.findPasswordSuccessButton').trigger('click');
						return 
					};
					vue_.hrefLoginCD--;
				},1000);
			}else{
				tip('请输入合法的手机号码','long');
			}
		},
		href:function(){
			localStorage.setItem('user',this.user);
			window.location.href='login.html';
		}
	}
}).$mount('#findPassword');