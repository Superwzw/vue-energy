<template>
	<div>
		<div class="place" v-if="!this.$store.state.show">
			<Card class="fnCard">
				<sell-module v-if="this.$store.state.num === 1"></sell-module>
				<recharge-module v-if="this.$store.state.num === 3"></recharge-module>
			</Card>
		</div>
		<div class="homeSwiper" v-if="this.$store.state.show">
			<div class="card-warper">
				<Card class="slideCard" @click.native="clickCard(1)">
					<div style="text-align:center">
			            <img src="@/assets/logo1.png">
			            <h1 style="color: white;">能源出售</h1>
			        </div>
				</Card>
				<Card class="slideCard" @click.native="clickCard(2)">
					<div style="text-align:center">
			            <img src="@/assets/logo1.png">
			            <h1 style="color: white;">能源购买</h1>
			        </div>
				</Card>
				<Card class="slideCard" @click.native="clickCard(3)">
					<div style="text-align:center">
			            <img src="@/assets/logo1.png">
			            <h1 style="color: white;">余额充值</h1>
			        </div>
				</Card>
				<Card class="slideCard" @click.native="clickCard(4)">
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
	import sellModule from '@/components/Home_components/homeSwiper/sellModule.vue'
	import rechargeModule from '@/components/Home_components/homeSwiper/rechargeModule.vue'
	export default {
		name: "homeSwiper",
		components:{
			sellModule,
			rechargeModule,
		},
		data: function(){
			return {
				// show:true,
			}
		},
		methods:{
			clickCard: function(num){
				var arg = {
					num,
					type:false,
				}
				this.$store.dispatch('changeShow', arg);
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
			background-color: rgba(0,0,0,0.6);
			border:none;
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