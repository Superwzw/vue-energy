<template>
	<div>
		<div class="place" v-if="!show">
			<Card class="fnCard"></Card>
		</div>
		<div class="homeSwiper" v-if="show">
			<div class="card-warper">
				<Card class="slideCard" @click.native="clickCard">
					<div style="text-align:center">
			            <img src="@/assets/logo1.png">
			            <h1 style="color: white;">能源出售</h1>
			        </div>
				</Card>
				<Card class="slideCard" @click.native="clickCard">
					<div style="text-align:center">
			            <img src="@/assets/logo1.png">
			            <h1 style="color: white;">能源购买</h1>
			        </div>
				</Card>
				<Card class="slideCard" @click.native="clickCard">
					<div style="text-align:center">
			            <img src="@/assets/logo1.png">
			            <h1 style="color: white;">余额充值</h1>
			        </div>
				</Card>
				<Card class="slideCard" @click.native="clickCard">
					<div style="text-align:center">
			            <img src="@/assets/logo1.png">
			            <h1 style="color: white;">记录查询</h1>
			        </div>
				</Card>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "homeSwiper",
		data: function(){
			return {
				show:true,
			}
		},
		methods:{
			clickCard: function(){
				this.show = false;
			}
		},
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles'
	.place
		height:500px;
		width:80%;
		padding:5px;
		display:flex;
		.fnCard
			flex-grow:1;
			background-color: rgba(0,0,0,0.4);
			// border:none;
	.homeSwiper
		height:500px;
		width:80%;
		padding:5px;
		position:relative;
		// border:5px solid black;	
		.card-warper
			height:100%;
			width:100%;
			display:flex;
			align-items:center;
			justify-content:space-around;
		.slideCard
			width: 23%;
			height:92%;
			background-color: rgba(0,0,0,0.4);
		.slideCard:hover
			transform:scale(1.1);
			background-color: rgba(0,0,0,0.6);
</style>