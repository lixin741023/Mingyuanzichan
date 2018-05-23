const bottomNAV=Vue.extend({
	template:`
		<div class="bottomNAV">
			<a href="index.html">
				<span>首页</span>
				<span>Index</span>
			</a>
			<a href="market.html">
				<span>行情</span>
				<span>Markets</span>
			</a>
			<a href="trade.html">
				<span>交易</span>
				<span>Trade</span>
			</a>
			<a href="mine.html">
				<span>我的</span>
				<span>Mine</span>
			</a>
		</div>
	`
});
Vue.component('my-bottom-nav',bottomNAV);
			