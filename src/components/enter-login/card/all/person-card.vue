<template>
  <div class="person-card" @click="handleCheckPerson">
    <div class="top">
      <person-top-news :data="userHeaderData" @hanlde-change-rate="handleChangeRate"/>
    </div>
    <div class="middle">
      <person-middle-news :data="userMiddleData"/>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import personTopNews from "@/components/enter-login/card/person-top-news.vue";
import personMiddleNews from "@/components/enter-login/card/person-middle-news.vue";
import { userHeaderData,userMiddleData } from "@/assets/js/data/person/user-data";

const router = useRouter();

// 修改打分
const handleChangeRate = (data) => {
    alert(data)
}
// 查看个人简历消息
const handleCheckPerson = () =>{
  const href = router.resolve({
    path: '/turn/person/standard-resume',
    query:{
      name: userMiddleData.name,
    }
  })
  window.open(href.href,'_blank')
}
</script>
<style scoped>
.person-card {
  background: #fff;
  padding: 15px;
  height: 140px;
  margin-bottom: 20px;
}
.person-card:hover {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(50, 50, 93, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
}
.top{
  margin-bottom: 10px;
}
</style>