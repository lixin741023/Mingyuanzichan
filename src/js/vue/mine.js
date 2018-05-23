const mine=new Vue({
	el:'#mine',
	methods:{
		signOut:function(){
			localStorage.removeItem('sid');
			localStorage.removeItem('token');
			window.location.href="login.html";
		}
	}
})
