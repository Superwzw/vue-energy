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
		.footer-img
			position:absolute;
			top:0;
			left:0;
			right:0;
			bottom:0;
			background-color:$bgColor;
			.footer-img-content
				height:100%;
</style>