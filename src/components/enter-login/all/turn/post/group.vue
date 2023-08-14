<template>
  <div class="safe">
    <div class="top">
      <personal-setting-header :title="titleValue" />
    </div>
    <div class="buttom">
      <div v-for="(item, index) in data.positionTeamData" :key="index">
        <turn-position-team
          ref="turnPositionTeamRef"
          :position-data="item"
          :positionId="positionId"
          :list="data.selectList"
        />
      </div>
    </div>
  </div>
</template>
  <script setup>
import { onMounted, reactive, ref } from "vue";
import { useRoute } from "vue-router";
import store from "@/store";
// 界面
import personalSettingHeader from "@/components/enter-login/common/personal-setting-header.vue";
import turnPositionTeam from "@/components/enter-login/card/turn/turn-position-team.vue";
const titleValue = ref("团队设置");
// 数据
const route = useRoute();
import { positionTeamData } from "@/assets/js/data/post/position-team";
// 数据
const data = reactive({
  positionTeamData: positionTeamData,
});
const turnPositionTeamRef = ref(null);
const positionId = ref(route.query.positionId).value;
</script>
<style scoped>
.buttom {
  padding: 2em 3em;
}
</style>