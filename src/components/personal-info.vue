<template>
	<div class="personal-info">
		<custom-popup v-bind="$attrs" v-on="$listeners">
			<div class="personal-info-content">
				<p>
					姓名：chenM
				</p>
				<p>
					地址：上海
				</p>
				<p>
					姓名：chenM
				</p>
				<p>
					地址：上海
				</p>
				<p>
					姓名：chenM
				</p>
				<p>
					地址：上海
				</p>
				<p>
					姓名：chenM
				</p>
				<p>
					地址：上海
				</p>
				<p>
					姓名：chenM
				</p>
				<p>
					地址：上海
				</p>
			</div>
		</custom-popup>
	</div>
</template>

<script>
import customPopup from './popup/index.vue'
export default{
	data(){
		return{
			aa:true
		}
	},
	inheritAttrs:false,
	mounted(){
		console.log(1111)
	},
	components:{
		'custom-popup':customPopup,
	},
	
}
</script>

<style lang="less">
.personal-info-content{
	position: absolute;
	width: 80%;
	height: 50%;
	background: #fff;
	left: 10%;
	top: 25%;
	border-radius: 4px;
	box-shadow: 0px 0px 3px #999;
	overflow: auto;
	p{
		line-height: 1rem;
		color: #000;
		padding-left: 1rem;
	}
}
</style>
