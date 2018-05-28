//let domain='hyu2581470001.my3w.com';
let domain='myzc010.com';

/*获取短信验证码接口:getCheckCodeAPI*/
function getCheckCodeAPI(user){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/user/getVC`;
	$.ajax({
		type:"post",
		url:dest,
		async:false,
		data:{
			mobile:user
		},
		dataType:'json',
		success:function(data){
			console.log('短信验证码数据：',data);
			if(data.errcode!=0){
				tip('网络超时，请稍后尝试','long');
			}else{
				tip('成功发送验证消息，请注意查收');
			}
		}
	});
};

/*register.html数据接口:registerAPI*/
function registerAPI(user,pas,code){
	let end='';
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/user/regist`;
	$.ajax({
		type:'post',
		url:dest,
		async:false,
		data:{
			mobile:user,
			password:pas,
			code:code
		},
		dataType:'json',
		success:function(data){
			console.log(data);
			if(data.errcode!=0){
				tip(data.errmsg,'long');
				end=false;
			}else{
				end=true; //tip('注册成功');
			}
		}
	});
	return end;
};

/*findPassword.html数据接口:findPasswordAPI*/
function findPasswordAPI(user,pas,code){
	let end='';
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/user/changePwd`;
	$.ajax({
		type:'post',
		url:dest,
		async:false,
		data:{
			mobile:user,
			password:pas,
			code:code
		},
		dataType:'json',
		success:function(data){
			console.log(data);
			if(data.errcode!=0){
				tip(data.errmsg,'long');
				end=false;
			}else{
				end=true; //tip('密码修改成功');
			}
		}
	});
	return end;
};

/*login.html数据接口:loginAPI*/
function loginAPI(){
	let end='';
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/user/login`;
	$.ajax({
		type:'post',
		url:dest,
		async:false,
		data:{
			mobile:login.user,
			password:login.pas
		},
		dataType:'json',
		success:function(data){
			console.log(data);
			if(data.errcode!=0){
				tip(data.errmsg,'long');
				end=false;
			}else{
				localStorage.setItem('sid',data.data.sid);
				localStorage.setItem('token',data.data.token);
				end=true;
			}
		}
	});
	return end;
};

/*market.html数据接口:marketAPI*/
function marketAPI(){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/market/allMarket`;
	$.ajax({
		type:'get',
		url:dest,
		data:{
			
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{console.log("所有数据: " ,data.data);
				market.bzdata=data.data.bzdata;
				console.log("创业扳指: " , data.data.bzdata.cybz );
				console.log("深证成指: " , data.data.bzdata.szcz );
				console.log("上证指数: " , data.data.bzdata.szzs );
				console.log("中小板指: " , data.data.bzdata.zxbz );
				market.zfdata=data.data.zfdata;
				console.log("涨幅榜: " , data.data.zfdata);
				market.dfdata=data.data.dfdata;
				console.log("跌幅榜: " , data.data.dfdata);
				market.zxdata=data.data.zxdata;
				console.log("自选股: " , data.data.zxdata);
				market.hydata=data.data.hydata;
				console.log("行业板块: " , data.data.hydata);
				market.gndata=data.data.gndata;
				console.log("概念板块: " , data.data.gndata);
			}
		}
	});
};

/*stockDetail.html数据接口：stockDetailAPI*/
function stockDetailAPI(){
	console.log('存储的code为： ',sessionStorage.getItem('stockCode'))
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/market/stockinfo`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			code:sessionStorage.getItem('stockCode')
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				stockDetail.Detail=data.data
				console.log('股票详细信息: ', data.data);
			}
		}
	});
};

/*hyList.html数据接口:hyListAPI*/
function hyListAPI(){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/market/bkMarket`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			type:'HY'
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				hyList.hyList=data.data
				console.log('行业板块: ', data.data);
			}
		}
	});
};

/*gnList.html数据接口:gnListAPI*/
function gnListAPI(){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/market/bkMarket`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			type:'GN'
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				gnList.gnList=data.data
				console.log('概念板块: ', data.data);
			}
		}
	});
};

/*股票搜索接口:searchStockAPI*/
function searchStockAPI(stockCode,vue_){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/market/stockinfo`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			code:stockCode
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				vue_.searchResult=data.data;
				console.log('搜索到的股票是: ', data.data);
			}
		}
	});
};

/*询价接口：askMoneyAPI*/
function askMoneyAPI(stockCode,time,mybj){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/trade/inquiry`;
		$.ajax({
		type:"get",
		url:dest,
		data:{
			sid:localStorage.getItem('sid'),
			token:localStorage.getItem('token'),
			code:stockCode,
			tgqx:time,
			mybj:mybj			
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long');
			}else{
				tip('询价成功');
				$('#trade').animate({
					'opacity':'0'
				},1050,function(){
					window.location.reload();
				})
			}
		}
	});
};

/*询价记录数据接口：recordAPI*/
function recordAPI(){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/trade/inquirylist`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			sid:localStorage.getItem('sid'),
			token:localStorage.getItem('token'),
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				console.log('询价记录数据： ',data);
				trade.recordList=data.data;
			}
		}
	});
};

/*认购接口：startApplyAPI*/
function startApplyAPI(id){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/trade/apply`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			sid:localStorage.getItem('sid'),
			token:localStorage.getItem('token'),
			iqid:id
		},
		dataType:'json',
		success:function(data){
			console.log('认购确认点击： ' , data);
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				tip('认购成功');
				$('#trade').animate({
					'opacity':'0'
				},850,function(){
					window.location.reload();
				})
			}
		}
	});
};

/*申购记录数据接口：ApplyAPI*/
function ApplyAPI(){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/trade/applylist`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			sid:localStorage.getItem('sid'),
			token:localStorage.getItem('token')
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				console.log('申购记录数据 ' ,data);
				trade.ApplyList=data.data;
			}
		}
	});
};

/*持仓记录数据接口：depotAPI*/
function depotAPI(){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/trade/positionlist`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			sid:localStorage.getItem('sid'),
			token:localStorage.getItem('token')
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				console.log('持仓记录数据 ' ,data);
				trade.depotList=data.data;
			}
		}
	});
};

/*平仓接口：sellingAPI*/
function sellingAPI(id){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/trade/selling`;
	$.ajax({
		type:"get",
		url:dest,
		data:{
			sid:localStorage.getItem('sid'),
			token:localStorage.getItem('token'),
			rid:id
		},
		dataType:'json',
		success:function(data){
			console.log('平仓点击： ' , data);
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				tip('成功提交平仓申请');
				$('#trade').animate({
					'opacity':'0'
				},850,function(){
					window.location.reload();
				})
			}
		}
	});
};

/*结算记录数据接口：settleAPI*/
function settleAPI(){
	let dest=`http://${domain}/UmsPHP/public/api.php/ots/trade/settlementlist`;
	$.ajax({
		type:'get',
		url:dest,
		data:{
			sid:localStorage.getItem('sid'),
			token:localStorage.getItem('token')
		},
		dataType:'json',
		success:function(data){
			if(data.errcode!=0){
				tip(data.errmsg,'long')
			}else{
				console.log('结算记录数据 ' ,data);
				trade.settleList=data.data;
			}
		}
	});
};
 