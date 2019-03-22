<template>
	<div class="homeFooter">
		<div class="footer-img">
			<img class="footer-img-content" src="@/assets/bg_footer.png"></img>
		</div>
	</div>
</template>

<script>
	export default {
		name: "homeFooter",
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles'
	.homeFooter
		position:relative;
		overflow:hidden;
		height:250px;
		background-color:$btnColor;
		.footer-img
			position:absolute;
			top:10px;
			left:0;
			right:0;
			bottom:0;
			.footer-img-content
				height:100%;
			.footer-img-content:hover
				transform:scale(1.1);
</style>