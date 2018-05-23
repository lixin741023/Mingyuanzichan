const searchStock=new Vue({
	data:{
		searchCode:'',
		searchResult:'',
		stockType:''
	},
	methods:{
		searchUP:function(){
			if(stockReg.test(this.searchCode)){
				/*调用->searchStock.html数据接口:searchStockAPI*/
				searchStockAPI(this.searchCode,this);
				if(this.searchCode[0]==6||this.searchCode==000001){
					this.stockType='沪A';//sh
				}else{
					this.stockType='深A';//sz
				};
			}else{
				this.searchResult='';	
			}
		},
		hrefStockDetail:function(){
			sessionStorage.setItem('stockCode',this.searchCode);
			sessionStorage.setItem('href',window.location.href);
			window.location.href='stockDetail.html';
		}
	}
}).$mount("#searchStock");