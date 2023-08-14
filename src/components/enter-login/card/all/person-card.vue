<template>
  <div class="person-card" @click="handleCheckPerson" v-if="data.isCheck">
    <div class="top">
      <person-top-news :data="data.user.userHeaderData" />
    </div>
    <div class="middle">
      <person-middle-news :data="data.user.userMiddleData" />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import personTopNews from "@/components/enter-login/card/person-top-news.vue";
import personMiddleNews from "@/components/enter-login/card/person-middle-news.vue";
import {
  userHeaderData,
  userMiddleData,
} from "@/assets/js/data/person/user-data";
// 数据处理
import { handleResumeData } from "@/assets/js/views/person/person-card";
import { onMounted, reactive, watch } from "vue";
const router = useRouter();
const props = defineProps({ data: Object });
const data = reactive({
  user:{
    userHeaderData:"",
    userMiddleData:""
  },
  isCheck:false
})
// 查看个人简历消息
const handleCheckPerson = () => {
  const href = router.resolve({
    path: "/turn/person/standard-resume",
    query: {
      pkResumeId: props.data.pkResumeId,
    },
  });
  window.open(href.href, "_blank");
};
watch(
  () => props.data,
  (newValue, oldView) => {
    data.user = handleResumeData(newValue);
  }
);
onMounted(() => {
  data.user =  handleResumeData(props.data);
  data.isCheck = true;
});
</script>
<style scoped>
.person-card {
  background: #fff;
  padding: 15px;
  margin-bottom: 20px;
}
.person-card:hover {
  box-shadow: 0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(50, 50, 93, 0.15),
    0 5px 15px rgba(0, 0, 0, 0.1);
}
.top {
  margin-bottom: 20px;
}
</style>