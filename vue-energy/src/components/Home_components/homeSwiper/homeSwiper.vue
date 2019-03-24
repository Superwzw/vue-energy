<template>
	<div>
		<div class="place" v-if="!this.$store.state.show">
			<Card class="fnCard">
				<div class="sell-module">
					<div class="user-info">
						<Card class="info-content sellc">
							<div style="text-align: center;">
					            <img src="@/assets/logo1.png">
				            	<h1>用户名</h1>
				            	<h2 style="margin-top: 20px;">ID:15352330</h2>
				            	<h4 style="color: red;margin-top: 30px;">
				            		*请务必核对好您的基本信息，如有错误，请稍后再试
				            	</h4>
			          		</div>
						</Card>
					</div>
					<div class="sell-detail">
						<Card class="sell-content sellc">
							<div style="text-align: center;">
								<div style="display: flex;">
							        <h2 style="margin-right: 10px;">电量:</h2>
							        <Input size="large" prefix="ios-basket" placeholder="请输入电量,如： 100" clearable style="width: 400px;" />
							    </div>
								<div style="display: flex;margin-top: 20px;">
							        <h2 style="margin-right: 10px;">单价:</h2>
							        <Input size="large" prefix="logo-yen" placeholder="请输入单价,如：  0.5" clearable style="width: 400px;" />
							    </div>
								<div style="display: flex;margin-top: 20px;">
							        <h2 style="margin-right: 10px;">密码:</h2>
							        <Input type="password"size="large" prefix="ios-key" placeholder="请输入支付密码" clearable style="width: 400px;" />
							    </div>
								<div style="display: flex;margin-top:50px;">
							        <Button type="primary">确认出售</Button>
							    </div>							
			          		</div>
						</Card>
					</div>
				</div>
			</Card>
		</div>
		<div class="homeSwiper" v-if="this.$store.state.show">
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
				// show:true,
			}
		},
		methods:{
			clickCard: function(){
				this.$store.dispatch('changeShow', false);
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
			.sell-module
				height:460px;
				width:100%;
				margin:2px auto;
				display:flex;
				align-items:center;
				// border:5px solid red;
				.user-info
					height:90%;
					width:30%;
					// border:5px solid green;
				.sell-detail
					height:90%;
					flex-grow:1;
					// border:5px solid blue;
				.sellc
					height:100%;
					background-color: rgba(0,0,0,0.4);
					display:flex;
					align-items:center;
					justify-content:center;
					color:white;
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