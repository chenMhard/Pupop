<template>
	<div class="content">
		<div class="example-items">
			<h2>下面是几种常见的弹窗</h2>
			<ul>
				<li @click="handleShowPopup('bottomPopup')">从底部出现</li>
				<li @click="handleShowPopup('topPopup')">从顶部出现</li>
				<li @click="handleShowPopup('centerPopup')">从中间出现</li>
				<li @click="handleShowPopup('leftPopup')">从左边出现</li>
				<li @click="handleShowPopup('rightPopup')">从右边出现</li>
				<li @click="handleShowPopup('againUse')">二次封装</li>
			</ul>
		</div>
		<custom-popup :visible.sync='bottomPopup' position='bottom'>
			<ul class="bottom-items">
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
				<li>item6</li>
				<li>item7</li>
				<li>item8</li>
				<li>item9</li>
			</ul>
		</custom-popup>
		<custom-popup :visible.sync='topPopup' position='top'>
			<ul class="top-items">
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
				<li>item6</li>
				<li>item7</li>
				<li>item8</li>
				<li>item9</li>
			</ul>
		</custom-popup>
		<custom-popup :visible.sync='centerPopup' position='center'>
			<ul class="center-items">
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
				<li>item6</li>
				<li>item7</li>
				<li>item8</li>
				<li>item9</li>
				<li>item10</li>
				<li>item11</li>
				<li>item12</li>
				<li>item13</li>
				<li>item14</li>
				<li>item15</li>
				<li>item16</li>
				<li>item17</li>
				<li>item18</li>
				<li>item19</li>
			</ul>
		</custom-popup>
		<custom-popup :visible.sync='leftPopup' position='left'>
			<ul class="left-items">
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
				<li>item6</li>
				<li>item7</li>
				<li>item8</li>
				<li>item9</li>
				<li>item10</li>
				<li>item11</li>
				<li>item12</li>
				<li>item13</li>
				<li>item14</li>
				<li>item15</li>
				<li>item16</li>
				<li>item17</li>
				<li>item18</li>
				<li>item19</li>
			</ul>
		</custom-popup>
		<custom-popup :visible.sync='rightPopup' position='right'>
			<ul class="right-items">
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
				<li>item6</li>
				<li>item7</li>
				<li>item8</li>
				<li>item9</li>
				<li>item10</li>
				<li>item11</li>
				<li>item12</li>
				<li>item13</li>
				<li>item14</li>
				<li>item15</li>
				<li>item16</li>
				<li>item17</li>
				<li>item18</li>
				<li>item19</li>
				<li>item20</li>
				<li>item21</li>
				<li>item22</li>
				<li>item23</li>
				<li>item24</li>
				<li>item25</li>
				<li>item26</li>
				<li>item27</li>
				<li>item28</li>
				<li>item29</li>
				<li>item30</li>
				<li>item31</li>
				<li>item32</li>
				<li>item33</li>
				<li>item34</li>
				<li>item35</li>
				<li>item36</li>
				<li>item37</li>
				<li>item38</li>
				<li>item39</li>
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
				<li>item6</li>
				<li>item7</li>
				<li>item8</li>
				<li>item9</li>
				<li>item10</li>
				<li>item11</li>
				<li>item12</li>
				<li>item13</li>
				<li>item14</li>
				<li>item15</li>
				<li>item16</li>
				<li>item17</li>
				<li>item18</li>
				<li>item19</li>
				<li>item20</li>
				<li>item21</li>
				<li>item22</li>
				<li>item23</li>
				<li>item24</li>
				<li>item25</li>
				<li>item26</li>
				<li>item27</li>
				<li>item28</li>
				<li>item29</li>
				<li>item30</li>
				<li>item31</li>
				<li>item32</li>
				<li>item33</li>
				<li>item34</li>
				<li>item35</li>
				<li>item36</li>
				<li>item37</li>
				<li>item38</li>
				<li>item39</li>
			</ul>
		</custom-popup>
		<custom-popup :visible.sync='defaultPopup' position='center'>
			<ul class="center-items">
				<li>item1</li>
				<li>item2</li>
				<li>item3</li>
				<li>item4</li>
				<li>item5</li>
				<li>item6</li>
				<li>item7</li>
				<li>item8</li>
				<li>item9</li>
				<li>item10</li>
				<li>item11</li>
				<li>item12</li>
				<li>item13</li>
				<li>item14</li>
				<li>item15</li>
				<li>item16</li>
				<li>item17</li>
				<li>item18</li>
				<li>item19</li>
			</ul>
		</custom-popup>
		<persona-info :visible.sync='againUse' v-if="againUse"/>
	</div>
</template>

<script>
import customPopup from '../components/popup';
import personaInfo from '../components/personal-info.vue'
export default{
	components:{
		'custom-popup':customPopup,
		'persona-info':personaInfo,
	},
	data(){
		return{
			bottomPopup:false,
			topPopup:false,
			centerPopup:false,
			leftPopup:false,
			rightPopup:false,
			defaultPopup:false,
			againUse:false,
			asynAgainUse:false,
		}
	},
	mounted(){
	},
	methods:{
		handleShowPopup(position){
			this.bottomPopup = false;
			this.topPopup = false;
			this.centerPopup = false;
			this.leftPopup = false;
			this.rightPopup = false;
			this.againUse = false;
			this.asynAgainUse = false;
			this[position] = true;
		}
	}
}
</script>

<style lang="less" scoped>
.content{
	height: 1000px;
}
.example-items{
	width: 100%;
	min-height: 100%;
	background: #fff;
	h2{
		text-align: center;
		color: #000;
		line-height:1rem;
		font-size: 0.3rem;
	}
	ul{
		width: 100%;
		li{
			border-bottom: 1px solid #ddd;
			line-height: 1rem;
			padding: 0 0.5rem;
			font-size: 0.3rem;
		}
	}
}
.bottom-items,.top-items{
	width: 100%;
	background: #fff;
	height: 200px;
	overflow: auto;
	li{
		line-height: 0.5rem;
		padding-left:0.3rem;
		border-bottom: 1px solid #ddd;
	}
}
.center-items{
	position: absolute;
	width: 90%;
	height: 10%;
	top: 45%;
	left: 5%;
	background: #fff;
	overflow: auto;
}
.left-items{
	position: absolute;
	left: 0;
	width: 50%;
	height: 100%;
	background: #fff;
}
.right-items{
	position: absolute;
	right: 0;
	width: 50%;
	height: 100%;
	background: #fff;
	overflow: auto;
}
</style>
