<template>
  <div class="interview">
    <div class="top">
      <div class="choose">
        <div>
          <select-custom
            :widthValue="200"
            :selectList="postSelectList"
            @handleCheckData="handleChoose"
          />
        </div>
        <br />
      </div>
    </div>
    <el-divider />
    <div class="middle">
      <div>
        <div v-for="(item, index) in interviewData" :key="index">
          <interview-card :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
// 界面
import selectCustom from "@/components/common/select-custom.vue";
import interviewCard from "@/components/enter-login/card/all/interview-card.vue";
import { postSelectList } from "@/assets/js/data/select-data/post-search-data.js";
import { interviewData } from "@/assets/js/data/interview/interview-data.js";

const drawer = ref(false);

const handleChoose = (data) => {
  console.log(data);
};
</script>
<style scoped>
.choose {
  display: flex;
}
.choose > div {
  margin-right: 20px;
}
.middle {
  display: flex;
  justify-content: center;
}
.middle > div {
  width: 97%;
}
</style>