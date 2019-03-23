<template>
	<div class="nav">
		<div class="appMenu bigger">
			<div class="iconfont homeIcon" style="font-size: 30px;">&#xe719;</div>
			<h1 @click="clickMenu">功能菜单</h1>
		</div>
		<div class="Recommend">
		<div class="appRec bigger">
			<div class="iconfont homeIcon" style="font-size: 25px;">&#xe611;</div>
			<h1>推荐阅读</h1>
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
				
			},
		},
	}
</script>

<style lang="stylus" scoped>
	.nav
		float:right;
		width:20%;
		height:397px;
		background-color:rgba(27,27,27,0.1);
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
			color:rgb(244,208,0);
			transform: scale(1.1);
</style>