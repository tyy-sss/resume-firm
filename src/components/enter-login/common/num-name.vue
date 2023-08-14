<template>
  <div class="num-name">
    <div
      class="item"
      v-for="(item, index) in data"
      :key="index"
      :style="{ width: styleData.width,height: styleData.height }"
    >
      <div class="item-news" @click="handleTurnTo(item.router,item.isBlank)">
        <div class="num">{{ item.num }}</div>
        <div class="name">{{ item.name }}</div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router';
const props = defineProps({data:Array,styleData:Object,id:Number})
const data = props.data;
const styleData = props.styleData;

const router = useRouter();
// 跳转界面
const handleTurnTo =  (route,isBlank) =>{
  const href = router.resolve({
    path: route.path,
    query:{
      id: props.id
    },
  })
  if(isBlank){
    window.open(href.href,"_blank")
  }else{
    window.open(href.href,"_self")
  }
}
</script>
<style src="@/assets/css/card/enter-login/num-name.css" scoped>
</style>