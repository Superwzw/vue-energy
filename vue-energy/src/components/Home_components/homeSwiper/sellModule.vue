<template>
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
	      		</div>
			</Card>
			<div style="margin-right:140px;float: right;">
		        <Button size="large"type="primary" icon="ios-barcode-outline" style="font-size: 15px;">提交出售</Button>
		    </div>	
			<div style="margin-right:140px;float: right;">
		        <Button size="large"type="primary" icon="ios-arrow-back" style="font-size: 15px;" @click="backHome">返回</Button>
		    </div>		  
		</div>
	</div>
</template>

<script>
	export default {
		name: "sellModule",
		data: function(){
			return {
			
			}
		},
		methods:{
			backHome() {
				var arg = {
					num:0,
					type:true,
				}
				this.$store.dispatch('changeShow',arg);
			},
		},
	}
</script>

<style lang="stylus" scoped>
@import '~@/assets/styles/varibles'
	.sell-module
		height:460px;
		width:100%;
		margin:2px auto;
		display:flex;
		align-items:center;
		// background-color: rgba(255,255,255,0.1);
		// border:1px solid grey;
		.user-info
			height:90%;
			width:30%;
			// border:5px solid green;
			.sellc
				height:100%;
				background-color: rgba(0,0,0,0);
				display:flex;
				align-items:center;
				justify-content:center;
				color:white;
				border:none;	
		.sell-detail
			height:90%;
			flex-grow:1;
			// border:5px solid blue;
			.sellc
				height:80%;
				background-color: rgba(0,0,0,0);
				display:flex;
				align-items:center;
				justify-content:center;
				color:white;
				border:none;
</style>