<template>
  <div class="post-sift-card">
    <div>
      <div class="top">
        <div>{{ props.data.title }}</div>
        <div>{{ props.data.num }}</div>
      </div>
      <div class="middle">
        <div class="list" v-if="props.data.list.length !== 0">
          <ul class="infinite-list" style="overflow: auto">
            <li
              class="infinite-list-item"
              v-for="(item, index) in props.data.list"
              :key="index"
            >
              <person-news-card :data="item"/>
            </li>
          </ul>
        </div>
        <div v-else class="list-middle">
          <div class="item">
            <img src="@/assets/images/no-information.png" />
            <div>暂无候选人</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import personNewsCard from "@/components/enter-login/card/person-news-card.vue";
const props = defineProps({data:Object})
</script>
<style scoped>
.post-sift-card {
  width: 300px;
  margin: 0 10px;
  min-height: 70vh;
  border: 3px solid RGB(227, 231, 237);
  background-color: RGB(247,248,250);
  border-radius: 1em;
}
.top {
  display: flex;
  justify-content: space-between;
  font-size: 18px;
  color: RGB(65,74,96);
  padding: 10px 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid RGB(227,231,237);
}
.middle {
  min-height: 620px;
  padding-top: 5px;
}
.middle img {
  width: 100px;
  height: 100px;
}
/* 数据为空 */
.list-middle {
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.list-middle > div {
  margin: 10px;
  color: #63676f;
}
.list-middle .item > div {
  display: flex;
  justify-content: center;
}
.person-news-card {
  margin-bottom: 10px;
}
/* 滚动条 */
.infinite-list {
  max-height: 595px;
  padding: 0;
  margin: 0;
  list-style: none;
}
.infinite-list .infinite-list-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>