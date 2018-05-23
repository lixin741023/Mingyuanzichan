const depotBox=Vue.extend({
	template:`
		<div class="depotBox">
			<h3>{{showData.sname}}<span>{{showData.scode}}</span></h3>
			<span class="mui-icon mui-icon-close"></span>
			<div class="depotBox_row">
			<span>现价：</span>
				<span>{{showData.stockinfo.price}}</span>
			</div>
			<div class="depotBox_row">
				<span>权利金：</span>
				<span>{{showData.qlj}}</span>
			</div>
			<div class="depotBox_row depotBox_row_impor">
				<span>成交价：</span>
				<span>{{showData.cjj}}</span>
				</div>
			<div class="depotBox_row">
				<span>成交日期：</span>
				<span>{{showData.deal_time}}</span>
			</div>
			<button class="depotBox_button" @click="selling" v-show="showData.status==2">平仓</button>
		</div>
	`,
	props:['showData'],
	methods:{
		selling:function(){
			/*调用->认购接口：sellingAPI*/
			sellingAPI(this.showData.id);
		}
	}
});
Vue.component('my-depot-box',depotBox);

			