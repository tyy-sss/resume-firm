<template>
  <div class="report-card" @click="handleCheckExcel">
    <div class="left">
      <img src="@/assets/images/document.png" />
    </div>
    <div class="right">
      <div class="title">{{ data.title }}</div>
      <div class="create">
        <span>由</span>
        <span class="user">{{ data.user }}</span>
        <span>创建</span>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useRouter } from "vue-router";
  const router = useRouter();
const props = defineProps({ data: Object });
const data = props.data;

// 跳转界面
const handleCheckExcel = () => {
  const href = router.resolve({
    path: "/turn/excel",
    query:{
      title:data.title
    }
  });
  window.open(href.href,'_blank')
};
</script>
<style scoped>
.report-card {
  background: #fff;
  display: flex;
  align-items: center;
  width: 300px;
  padding: 10px 0;
}
.report-card:hover {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(50, 50, 93, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
}
.left img {
  width: 50px;
  height: 60px;
  margin-left: 30px;
  margin-right: 10px;
}
.title {
  font-size: 14px;
  font-weight: bold;
  line-height: 18px;
  color: #333;
}
.create {
  font-size: 12px;
  line-height: 14px;
  color: #9c9c9c;
  margin-top: 6px;
}
.user {
  margin-left: 10px;
  margin-right: 10px;
}
</style>