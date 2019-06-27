<template>
  <div class="my-popup_box"  :style="{visibility:visible?'visible':'hidden'}">
    <div class="my-popup_mask" id="my-popup_mask" @click="close" :class="{[maskShowClass]:visible}"></div>
    <div class="my-popup_content" :class="{[positionShowClass]:visible,[positionClass]:true}"  @click.self="clickContentClose">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        currentST:0,//记录当前滚动条的位置
        positionShowClass:'',//当content显示的时候 添加的class
				maskShowClass:'',//当mask 显示的时候添加的 class
      }
    },
    props:{
      visible:{
        type:Boolean,
        required:true
      },
      position: {
        type: String,
        default: 'center'
      },
      closeOnClickModal:{
        default:true,
        type:Boolean,
      },
    },
    inheritAttrs:false,
    mounted(){
      //设置动画class  加个定时器 防止class主动加上 动画不起作用
      setTimeout(() => {
        this.positionShowClass = `popup_content_position_show_${this.position}`;
				this.maskShowClass = `my-popup_show_mask`;
      },);
      if(this.visible){
        this.setBodyNoScroll();
      }
    },
    
    destroyed(){
      this.setBodyCanScroll();
    },
    methods:{
      //设置body禁止滚动
      setBodyNoScroll(){
        this.currentST = document.body.scrollTop||document.documentElement.scrollTop;
        document.body.style.position = 'fixed';
        document.body.style.top = '-' + this.currentST + 'px';
      },
      //取消body禁止滚动
      setBodyCanScroll(){
        document.body.style.position = 'relative';
        document.body.style.top = 0;
        document.documentElement.scrollTop = this.currentST;
        document.body.scrollTop = this.currentST;
      },
			//点击 content 关闭 作用：当 position：left||right 时  需要content为width：100% height：100% 盖住了遮罩层
 			clickContentClose(){
				if(!this.closeOnClickModal&&this.position !== 'left'&&this.position !== 'right'&&this.position !== 'center') return;
				this.$emit('update:visible', false);
			},
			//点击遮罩层关闭 
      close(){
        //this.visible = false;
        if(!this.closeOnClickModal) return;
        this.$emit('update:visible', false);
      },
    },
    computed:{
      positionClass(){
        return `popup_content_position_${this.position}`
      },
    },
    watch:{
      visible(val){
        if(val){
          this.currentST = document.body.scrollTop||document.documentElement.scrollTop;
          document.body.style.position = 'fixed';
          document.body.style.top = '-' + this.currentST + 'px';
        }else{
          document.body.style.position = 'relative';
          document.body.style.top = 0;
          document.documentElement.scrollTop = this.currentST;
          document.body.scrollTop = this.currentST;
        }
      }
    }
  }
</script>

<style lang="less" scoped>

.my-popup_box{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
}
.my-popup_mask{
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	background: rgba(0, 0, 0, .5);
	transition: all .2s ease;
	opacity: 0;
}
.my-popup_show_mask{
	opacity:1
}

.my-popup_content{
  position: absolute;
  z-index: 2;
  width: 100%;
  height: auto;
  transition: all .2s ease;
}
.popup_content_position_center {
	height: 100%;
	width: 100%;
  opacity: 0;
}
.popup_content_position_bottom {
  transform: translateY(100%);
  bottom:0;
}
.popup_content_position_top {
  transform: translateY(-100%);
  top: 0
}
.popup_content_position_left {
	height: 100%;
	width: 100%;
  transform: translateX(-100%);
  left: 0
}
.popup_content_position_right {
	height: 100%;
	width: 100%;
  transform: translateX(100%);
  right: 0
}

.my-popup_box .popup_content_position_show_center {
  opacity: 1;
}
.my-popup_box .popup_content_position_show_bottom {
  transform: translateY(0%);
}
.my-popup_box .popup_content_position_show_top {
  transform: translateY(0);
}
.my-popup_box .popup_content_position_show_left {
  transform: translateX(0);
}
.my-popup_box .popup_content_position_show_right {
  transform: translateX(0);
}
</style>