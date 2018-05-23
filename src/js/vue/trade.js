const trade=new Vue({
	data:{
		/*询价项目*/
		searchCode:'',
		searchResult:'',
		project_time:'',
		project_mybj:'',
		/*询价记录*/
		recordList:'',
		/*申购确认框*/
		ApplyBox:'',
		ApplyBoxShow:false,
		/*申购记录*/
		ApplyList:'',
		/*持仓记录*/
		depotList:'',
		/*持仓详情框：*/
		depotBox:{stockinfo:''},
		depotBoxShow:false,
		/*结算记录*/
		settleList:''
	},
	methods:{
		searchStock:function(){
			if(stockReg.test(this.searchCode)){
				/*调用->股票搜索接口:searchStockAPI*/
				searchStockAPI(this.searchCode,this);
			}else{
				this.searchResult='';	
			}
		},
		askMoney:function(){//询价按钮
			if(!stockReg.test(this.searchCode)){tip('请输入合法的股票代码');return};
			if(this.project_time==''){tip('请选择投顾期限');return};
			if(!numberReg.test(this.project_mybj)){tip('请输入名义本金（单位：万元）');return};
			/*调用->询价接口：askMoneyAPI*/
			askMoneyAPI(this.searchCode,this.project_time,this.project_mybj);
		},
		recordButton:function(item){//认购按钮
			console.log('点击的recordList是： ', this.recordList[item]);
			this.ApplyBox=this.recordList[item];
			$('.zzc1').fadeIn('fast');
			this.ApplyBoxShow=true;
			this.depotBoxShow=false;	
		},
		depotDetail:function(item){//持仓详情弹出
			console.log('点击的depotList是： ',this.depotList[item]);
			this.depotBox=this.depotList[item];
			$('.zzc1').fadeIn('fast');
			this.depotBoxShow=true;
			this.ApplyBoxShow=false;
		}
	},
	filters:{
		recordList_state:function(val){
			switch (val){
				case '1':
					return '询价中';break;
				case '2':
					return '已报价';break;
				case '3':
					return '已过期';break;
				case '4':
					return '已申购';break;
			};
		},
		ApplyList_state:function(val){
			switch (val){
				case '1':
					return '申购中';break;
				case '2':
					return '未成交';break;
				case '3':
					return '持仓中';break;
				case '4':
					return '已结算';break;
			};
		},
		depotList_state:function(val){
			switch (val){
				case '1':
					return '持仓中';break;
				case '2':
					return '可结算';break;
				case '3':
					return '结算中';break;
			};
		}
	}
}).$mount('#trade');