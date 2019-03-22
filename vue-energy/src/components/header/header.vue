<template>
		<header>
				<div class="logo"></div>
				<div class="search">
						<input type="text" class="searchInput" placeholder="搜索">
						<button class="searchButton">全网搜</button>
				</div>
				<div class="optionList">
					<div class="iconfont homeIcon">&#xe60d;</div>
					<div class="iconfont homeIcon">&#xe611;</div>
					<div class="iconfont homeIcon">&#xe619;</div>
					<div class="iconfont homeIcon">&#xe60b;</div>
				</div>
		</header>
</template>

<script>
	export default {
		name: "homeHeader",
	}
</script>

<style lang="stylus" scoped>
		header
			position: fixed;
			top:20px;
			height: 68px;
			width: 100%;
			// border: 1px solid black;
			display: flex;
			align-items: center;
			min-width:1200px;
			// opacity: 0;
			.logo
				height: 36px;
				width: 135px;
				position: absolute;
				left: 80px;
				background: url(https://vm.gtimg.cn/tencentvideo/vstyle/web/v6/style/img/common/sprite_head_logo.svg) 0 -36px no-repeat;
			.search
				margin:0 auto;
				height:48px;
				width:460px;
				display:flex;
				border-radius: 25px;
				border: 1px solid grey;
				.searchInput
					border:none;
					border-radius: 25px 0 0 25px;
					outline:none;
					flex-grow:1;
					padding-left: 20px;
				.searchButton
					border-radius: 0 25px 25px 0;
					border:none;
					outline:none;
			.optionList 
				height: 31px;
				width: 184px;
				overflow: hidden;
				position: absolute;
				right: 20px;
				// border: 1px solid black;
				display:flex;
				justify-content:space-around;
				align-items:center;
				// flex-grow:1;
				.homeIcon
					font-size:30px;

</style>