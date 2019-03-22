<template>
		<header>
			<div class="optionList">
				<div class="iconfont homeIcon">&#xe60c;</div>
				<div class="iconfont homeIcon">&#xe603;</div>
				<div class="iconfont homeIcon">&#xe652;</div>
				<div class="iconfont homeIcon">&#xe613;</div>
			</div>
			<div class="logo">
				<div class="logo-img">
					<img class="logo-content" src="@/assets/logo.png">
				</div>
			</div>
<!-- 				<div class="search">
						<input type="text" class="searchInput" placeholder="                  请输入内容...">
						<button class="searchButton">
							<div class="iconfont homeIcon" style="display:inline-block;">&#xe688;</div>
							搜索
						</button>
				</div> -->
		</header>
</template>

<script>
	export default {
		name: "homeHeader",
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/styles/varibles'
		header
			margin-top:20px;
			height: 97px;
			width: 100%;
			display: flex;
			align-items: center;
			justify-content:space-between;
			min-width:1200px;
			background-color:rgba(247,247,247,0.03);
			.logo-img
					height: 97px;
					margin-right: 43px;
					.logo-content
						height:100%;
			// .search
			// 	// margin-left:300px;
			// 	height:48px;
			// 	width:460px;
			// 	display:flex;
			// 	border-radius: 25px;
			// 	.searchInput
			// 		border:none;
			// 		border-radius: 25px 0 0 25px;
			// 		outline:none;
			// 		flex-grow:1;
			// 		padding-left: 57px;
			// 		font-size:18px;
			// 	.searchButton
			// 		border-radius: 0 25px 25px 0;
			// 		font-size:15px;
			// 		color:white;
			// 		padding:0 15px;
			// 		background-color:$btnColor;
			// 		border:none;
			// 		outline:none;
			.optionList 
				height: 31px;
				width: 257px;
				margin-left: 33px;
				display:flex;
				justify-content:space-around;
				align-items:center;
				.homeIcon
					font-size:40px;

</style>