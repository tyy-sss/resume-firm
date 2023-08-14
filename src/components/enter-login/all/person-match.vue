<template>
  <div class="person-match">
    <div class="left-position">
      <el-card class="box-card">
        <div class="position-item">
          <span class="title">选择职位</span>
          <div
            class="choose-position"
            v-for="(item, index) in data.positionList"
            :key="index"
          >
            <el-button
              round
              :type="item.type"
              @click="handleCheckPosition(item)"
              >{{ item.positionName }}</el-button
            >
          </div>
        </div>
      </el-card>
    </div>
    <div class="left">
      <el-card class="box-card position-card">
        <div class="position-item">
          <span class="title">职位名</span>
          <el-input
            class="input"
            v-model="data.position.positionName"
            disabled
          ></el-input>
        </div>
        <div class="position-item">
          <span class="title">职位描述</span>
          <el-input
            class="input"
            v-model="data.position.description"
            type="textarea"
            :rows="15"
          ></el-input>
        </div>
        <el-button type="primary" @click="getMatchResult">匹配</el-button>
      </el-card>
    </div>
    <div class="right">
      <ul class="infinite-list" style="overflow: auto">
        <div v-for="(item, index) in data.userList" :key="index">
          <el-popover
            :width="300"
            popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
          >
            <template #reference>
              <div class="person-item">
                <div class="top">
                  <div class="name">{{ item.userMiddleData.name }}</div>
                  <div>
                    <el-rate
                      v-model="item.userHeaderData.star"
                      allow-half
                      disabled
                    />
                  </div>
                  <div class="rate">{{ item.userHeaderData.rate }}</div>
                </div>
                <div class="middle">
                  <div class="experience">
                    <div
                      v-for="(it, index) in item.userMiddleData.experienceList"
                      :key="index"
                    >
                      <div class="experience-item">
                        <div>{{ it.value }}</div>
                        <div
                          class="split"
                          v-if="
                            index !==
                            item.userMiddleData.experienceList.length - 1
                          "
                        >
                          <span>|</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="button">
                  <label-person :data="item.userMiddleData.labelList" />
                </div>
              </div>
            </template>
            <template #default>
              <div class="position">
                <span class="text">所在职位：</span>
                <div>
                  <span v-if="item.userHeaderData.positionName">{{
                    item.userHeaderData.positionName
                  }}</span>
                  <span v-else>无</span>
                </div>
              </div>
              <div class="position" v-if="item.userHeaderData.positionName">
                <span class="text">职位阶段：</span>
                <span>{{ item.userHeaderData.state }}</span>
              </div>
              <div class="position" v-if="item.userHeaderData.positionName !==  data.position.positionName">
                <span class="text">移动职位到：</span>
                <span>{{ data.position.positionName }}</span>
              </div>
              <div class="position-button" v-if="item.userHeaderData.positionName !==  data.position.positionName">
                  <el-button type="primary" @click="handleRemoveResume(item.userHeaderData.resumeId)">确定移动</el-button>
                </div>
            </template>
          </el-popover>
        </div>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import store from "@/store";
// 界面
import labelPerson from "@/components/common/label-person.vue";
// 接口
import { getPostsListByPage } from "@/api/posts";
import { selectResumeByPage,removeResume } from "@/api/resume";
// 数据处理
import { handlePositionForMacth } from "@/assets/js/util/position";
import { handleResumeData } from "@/assets/js/views/person/person-card";
import { ElMessage } from "element-plus";
const data = reactive({
  page: {
    page: 10,
    total: 500,
  },
  // 职位
  position: {
    positionName: "",
    description: "",
    pkPositionId: "",
  },
  positionList: [],
  // 匹配人才列表
  userList: [],
});
// 人岗匹配选择职位
const handleCheckPosition = (position) => {
  // 展示职位消息
  data.position = position;
  // 获得人岗匹配结果
  getMatchResult();
};
// 获得人岗匹配结果
const getMatchResult = () => {
  selectResumeByPage(
    {
      state: -1,
      pageSize: 0,
      page: 0,
    },
    data.position.positionName + " " + data.position.description
  ).then((res) => {
    if (res.data.code === store.state.global.success) {
      console.log(res.data.data.data);
      data.userList = [];
      res.data.data.data.forEach((element) => {
        data.userList.push(handleResumeData(element));
      });
    }
  });
};
// 获得所有的职位消息
const getAllPositionNews = () => {
  getPostsListByPage({
    query: "",
    state: -1,
    pageSize: -1,
    page: -1,
  }).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.positionList = handlePositionForMacth(res.data.data.data);
    }
  });
};
// 确定移动简历到某个职位
const handleRemoveResume = (resumeId) =>{
  removeResume({
    positionId: data.position.pkPositionId,
      positionName: data.position.positionName,
      resumeId: resumeId,
  }).then((res)=>{
    if (res.data.code === store.state.global.success) {
      ElMessage.success("操作成功")
      getMatchResult();
    }
  })
}
onMounted(() => {
  getAllPositionNews();
});
</script>
<style scoped >
/* 匹配展示 */
.person-match {
  display: flex;
  justify-content: space-around;
}
/* 显示职位选择 */
.left-position {
  width: 300px;
  height: 500px;
}
.position-card {
  width: 310px !important;
}
.position-item .choose-position {
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
/* 显示职位信息 */
.position-item {
  padding: 0.5em;
}
.position-item .title {
  color: RGB(110, 111, 128);
  font-size: 15px;
  font-weight: 500;
}
.position-item .input {
  padding-top: 0.5em !important;
}
::v-deep .position-item .input .el-input__wrapper,
::v-deep .position-item .input .el-textarea__inner {
  background-color: RGB(240, 248, 255);
  box-shadow: none;
}
.box-card .el-button {
  float: right;
  margin-bottom: 1em;
}
/* 人才显示栏 */
.infinite-list {
  height: 600px;
  width: 650px;
  background-color: #fff;
}
/* 单个人才展示 */
.person-item {
  border: 1px solid rgb(232, 232, 232);
  padding: 10px;
  margin: 10px;
}
.person-item:hover {
  box-shadow: 3px 3px 2px #a5adba;
}
.person-item > div {
  margin-bottom: 0.8em;
}
.person-item .top {
  display: flex;
  align-items: center;
}
.name {
  font-weight: bold;
  font-size: 18px;
  max-width: 60px;
  margin-right: 1em;
}
.rate {
  align-items: center;
  color: #5a8bff;
  font-size: 13px;
}
.experience {
  max-width: 300px;
}
.middle {
  margin: 10px 0 5px;
}
.experience-item,
.experience {
  display: flex;
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
/* 切换职位 */
.position {
  display: flex;
}
.position .text {
  color: black;
  width: 100px;
  text-align: right;
  margin-bottom: 1em;
  margin-right: 1em;
}
.position-button{
  margin-left: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>