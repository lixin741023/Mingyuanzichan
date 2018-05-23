const stockDetail=new Vue({
	data:{
		Detail:{},
		type:'',
		href:sessionStorage.getItem('href')
	},
	filters:{
		Detail_cjl:function(val){
			return (Number(val)/10000).toFixed(1)+'万手';
		},
		Detail_cje:function(val){
			return (Number(val)/10000).toFixed(1)+'亿元'	
		}
	},
	computed:{
		klass:function(){
			if(this.Detail.zde<0){
				return 'stock_down'
			}else{
				return 'stock_up'
			}
		}
	},
	updated:function(){
		if(this.Detail.code[0]==6||this.Detail.code==000001){
			this.type='sh';//沪A
		}else{
			this.type='sz';//深A
		}
	}
}).$mount('#stockDetail');