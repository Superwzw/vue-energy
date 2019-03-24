<template>
	<div class="nav">
		<div class="appMenu bigger" @click="clickMenu">
			<div class="iconfont homeIcon" style="font-size: 30px;">&#xe719;</div>
			<h1 style="font-size: 30px;">功能菜单</h1>
		</div>
		<div class="Recommend">
		<div class="appRec bigger">
			<div class="iconfont homeIcon" style="font-size: 25px;">&#xe611;</div>
			<h1 style="font-size: 30px;">推荐阅读</h1>
		</div>
		<ul class="recList" style="list-style-type: none;">
			<li class="recItem bigger">1</li>
			<li class="recItem bigger">2</li>
			<li class="recItem bigger">3</li>
			<li class="recItem bigger">4</li>
			<li class="recItem bigger">5</li>
		</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "homeNav",
		methods:{
			clickMenu: function () {
				var arg = {
					type: true,
					num:0,
				}
				this.$store.dispatch('changeShow', arg);
			},
		},
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles'
	.nav
		float:right;
		width:20%;
		height:490px;
		background-color:rgba(0,0,0,0.2);
		padding:25px;
		// margin-left:15px;
		color:white;
		// border:5px solid yellow;
		.homeIcon
			margin-right:5px;
		.appMenu
			display:flex;
			height:20%;
			align-items:center;
		.Recommend
			height:80%;
			.appRec
				display:flex;
				align-items:center;
				height:20%;
			.recList
				text-indent:2em;
				height:80%;
				font-size:20px;
				.recItem
					display:flex;
					align-items:center;
					height:20%;
		.bigger:hover 
			color:$hovColor;
			// color:black;
			transform: scale(1.1);
</style>