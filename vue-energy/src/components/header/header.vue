<template>
		<header>
				<div class="logo"></div>
				<div class="search">
						<input type="text" class="searchInput" placeholder="搜索">
						<button class="searchButton">全网搜</button>
				</div>
				<div class="optionList">
					<div class="icon"></div>
					<div class="icon"></div>
					<div class="icon"></div>
					<div class="icon"></div>
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
			height: 68px;
			width: 100%;
			border: 1px solid black;
			/*background: #666;*/
			display: flex;
			align-items: center;
			min-width:1200px;
			/*opacity: 0;*/
			.logo
				height: 36px;
				width: 135px;
				// border: 1px solid black;
				position: absolute;
				left: 80px;
				background: url(https://vm.gtimg.cn/tencentvideo/vstyle/web/v6/style/img/common/sprite_head_logo.svg) 0 -36px no-repeat;
			.search
				position: absolute;
				right: 40%;
				height:38px;
				width:360px;
				display:flex;
				border-radius: 20px;
				border: 1px solid grey;
				.searchInput
					border:none;
					border-radius: 20px 0 0 20px;
					outline:none;
					flex-grow:1;
					padding-left: 15px;
				.searchButton
					border-radius: 0 20px 20px 0;
					border:none;
			.optionList 
				height: 31px;
				width: 184px;
				overflow: hidden;
				position: absolute;
				right: 20px;
				border: 1px solid black;

</style>