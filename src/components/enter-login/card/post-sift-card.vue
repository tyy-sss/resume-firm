<template>
  <div class="post-sift-card">
    <div>
      <div class="top">
        <div>{{ data.title }}</div>
        <div>{{ data.num }}</div>
      </div>
      <div class="middle">
        <div class="list" v-if="data.list.length !== 0">
          <ul
            class="infinite-list"
            style="overflow: auto"
          >
            <li
              class="infinite-list-item"
              v-for="(item, index) in data.list"
              :key="index"
            >
              <person-news-card />
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

const data = reactive({
  title: "初筛",
  num: 0,
  list: [{}, {}, {}, {}],
});
</script>
<style scoped>
.post-sift-card {
  min-width: 243px;
  border: 2px solid RGB(228,231,237);
  background: RGB(247,248,250);
  border-radius: 10px;
  min-height: 70vh;
}
.top {
  display: flex;
  justify-content: space-between;
  color: RGB(70,74,96);
  padding: 10px;
}
.middle{
  border-top: 1px solid RGB(228,231,237);
  padding-top: 5px;
}
.middle img {
  width: 100px;
  height: 100px;
}
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
  max-height: 480px;
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