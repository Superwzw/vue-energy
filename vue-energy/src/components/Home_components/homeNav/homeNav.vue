<template>
	<div class="nav">
		<div class="appMenu">
			<div class="iconfont homeIcon" style="font-size: 30px;">&#xe719;</div>
			<h1>功能菜单</h1>
		</div>
		<div class="Recommend">
		<div class="appRec">
			<div class="iconfont homeIcon" style="font-size: 25px;">&#xe611;</div>
			<h1>推荐阅读</h1>
		</div>
		<ul class="recList" style="list-style-type: none;">
			<li class="recItem">1</li>
			<li class="recItem">2</li>
			<li class="recItem">3</li>
			<li class="recItem">4</li>
			<li class="recItem">5</li>
		</ul>
		</div>
	</div>
</template>

<script>
	export default {
		name: "homeNav",
	}
</script>

<style lang="stylus" scoped>
	.nav
		width:297px;
		height:397px;
		float:right;
		background-color:rgba(27,27,27,0.4);
		padding:20px;
		color:white;
		.homeIcon
			margin-right:10px;
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
				text-indent:4em;
				height:80%;
				.recItem
					display:flex;
					align-items:center;
					height:20%;
			
</style>