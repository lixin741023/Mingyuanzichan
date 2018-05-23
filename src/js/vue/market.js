const market=new Vue({
	data:{
		bzdata:{
			cybz:{name:'',price:'',zde:'',zdf:''},
			szcz:{name:'',price:'',zde:'',zdf:''},
			szzs:{name:'',price:'',zde:'',zdf:''},
			zxbz:{name:'',price:'',zde:'',zdf:''}
		},/*4大扳指*/
		hydata:[
			{pname:'',pincrease:'',sname:'',sincrease:''},
			{pname:'',pincrease:'',sname:'',sincrease:''},
			{pname:'',pincrease:'',sname:'',sincrease:''}
		],/*行业数据*/
		gndata:[
			{pname:'',pincrease:'',sname:'',sincrease:''},
			{pname:'',pincrease:'',sname:'',sincrease:''},
			{pname:'',pincrease:'',sname:'',sincrease:''}
		] ,/*概念数据*/
		zfdata:'',/*涨幅榜*/
		dfdata:'',/*跌幅榜*/
		zxdata:'',/*自选股*/
	},
	filters:{
		bzdata_zde:function(val){
			let bol="";
			if(val>0){bol="+"};
			return bol+Number(val).toFixed(2);
		},
		bzdata_zdf:function(val){
			let bol="";
			if(val>0){bol='+'};
			return bol+val+'%';
		}
	}
}).$mount("#market");