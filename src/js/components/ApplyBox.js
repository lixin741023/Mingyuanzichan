const ApplyBox=Vue.extend({
	template:`
		<div class="ApplyBox">
			<h3>认购确认</h3>
			<span class="mui-icon mui-icon-close"></span>
			<div class="ApplyBox_row">
				<span>股票名称：</span>
				<span>{{showData.sname}}</span>
			</div>
			<div class="ApplyBox_row">
				<span>股票代码：</span>
				<span>{{showData.scode}}</span>
			</div>
			<div class="ApplyBox_row ApplyBox_row_impor">
				<span>权利金比例：</span>
				<span>{{showData.qljbl}}</span>
			</div>
			<div class="ApplyBox_row">
				<span>权利金：</span>
				<span>{{showData.qlj}}</span>
			</div>
			<div class="ApplyBox_row">
				<span>名义本金：</span>
				<span>{{showData.mybj}}</span>
			</div>
			<div class="ApplyBox_row">
				<span>交易方式：</span>
				<span>市价成交</span>
			</div>
			<button class="ApplyBox_button" @click="startApply">确认</button>
		</div>
	`,
	data:()=>({}),
	props:['showData'],
	methods:{
		startApply:function(){
			/*调用->认购接口：startApplyAPI*/
			startApplyAPI(this.showData.id);
		}
	}
});
Vue.component('my-apply-box',ApplyBox);

