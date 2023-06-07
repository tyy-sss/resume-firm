<template>
  <div class="person-middle-news">
    <div class="left">
      <div class="img">
        <img src="@/assets/images/user.png" />
      </div>
      <div class="information">
        <div class="top">
          <div class="name">{{ data.name }}</div>
          <div class="recommend" v-if="data.isRecommend === true">
            <div>荐</div>
          </div>
          <div>
            <label-person :data="data.labelList" />
          </div>
        </div>
        <div class="middle">
          <div class="experience">
            <div v-for="(item, index) in data.experienceList" :key="index">
              <div class="experience-item">
                <div>{{ item.value }}</div>
                <div
                  class="split"
                  v-if="index !== data.experienceList.length - 1"
                >
                  <span>|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="buttom">
          <div class="description">{{ data.description }}</div>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="timeline">
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in data.activities"
            :key="index"
            color="RGB(64,158,255)"
          >
            <div class="time-item" v-if="index <= 4">
              <div class="time" style="width: 150px">
                {{ activity.timestamp }}
              </div>
              <div class="content">{{ activity.content }}</div>
            </div>
            <div class="time-item" v-else-if="index === 5">
              <div class="time">. . . . . .</div>
            </div>
          </el-timeline-item>
        </el-timeline>
      </div>
    </div>
  </div>
</template>
<script setup>
import labelPerson from "@/components/common/label-person.vue";
const props = defineProps({ data: Object });
const data = props.data;
</script>
<style scoped>
.person-middle-news {
  display: flex;
}
.left {
  width: 65%;
  display: flex;
  margin-right: 100px;
  margin-left: 20px;
}
.left .img {
  margin-right: 20px;
}
.left .img img {
  width: 80px;
  height: 80px;
}
.left .information .top,
.experience-item,
.experience,
.time-item {
  display: flex;
}
.name {
  font-weight: bold;
  max-width: 60px;
}
.experience {
  max-width: 300px;
}
.description {
  margin-top: 10px;
  color: #89909e;
  font-weight: 300;
  height: 44px;
  display: -webkit-box;
  -webkit-text-size-adjust: 100%;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
}
.middle {
  margin: 10px 0 5px;
}
.experience {
  font-size: 13px;
  line-height: 18px;
  color: #414a60;
}
.split {
  padding-left: 10px;
  padding-right: 10px;
  color: RGB(0, 0, 0, 0.5);
}
.right {
  width: 35%;
}
.timeline {
  width: 90%;
  max-height: 120px;
}
.time-item {
  max-height: 20px;
}
.time-item > div {
  margin-right: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.time-item .time {
  font-size: 12px;
  color: RGB(144, 153, 164);
}
::v-deep .el-timeline > div {
  padding: 0;
  margin: 0;
}
::v-deep .el-timeline-item {
  max-height: 18px;
  padding: 0px;
}
.content {
  max-width: 200px;
}
/* 超过内容高度处理  */
.timeline {
  height: 110px;
  overflow: hidden;
}
/* 超过内容宽度处理 */
.name,
.experience,
.content {
  display: -webkit-box;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
<style src="@/assets/css/card/enter-login/person/recommend.css" scoped>
</style>
