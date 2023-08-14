 <template>
  <div class="recuitment-progress">
    <div class="top" v-if="data.step.isStep >= 1">
      <div class="step">
        <el-steps :active="data.step.isStep">
          <el-step />
          <el-step />
          <el-step />
          <el-step />
          <el-step />
        </el-steps>
      </div>
      <div class="progress">
        <div class="progress-item">
          <el-button class="first" type="primary" @click="handleTurnNextStep">{{
            data.step.text
          }}</el-button>
        </div>
      </div>
      <div class="interview" v-if="data.step.isStep === 2">
        <el-button @click="addInterview">添加面试</el-button>
        <el-drawer
          v-model="data.interview.drawer"
          :with-header="false"
          size="700px"
        >
          <div class="top">{{ data.interview.title }}</div>
          <el-divider border-style="dashed" />
          <div class="form">
            <el-form
              style="width: 650px"
              :model="data.form"
              label-width="120px"
            >
              <el-form-item label="面试日期：">
                <el-date-picker v-model="data.form.date" type="date" />
              </el-form-item>
              <el-form-item label="面试类型：">
                <select-custom
                  :select-list="interviewSelectList"
                  :width-value="250"
                />
              </el-form-item>
              <el-form-item label="面试地点：" style="width: 60%">
                <el-input />
              </el-form-item>
              <el-form-item class="interview-choose" label="面试：">
                <select-custom
                  :select-list="interviewLevelSelectList"
                  :width-value="100"
                />
                <el-time-select
                  v-model="data.form.interview.time"
                  start="06:00"
                  step="00:15"
                  end="22:00"
                  placeholder="面试时间"
                  style="width: 130px"
                />
                <select-custom
                  :select-list="interviewTimeSelectList"
                  :width-value="100"
                />
                <el-select
                  placeholder="面试人"
                  v-model="data.interview.person"
                  class="m-2"
                  style="width: 130px"
                >
                  <el-option
                    v-for="(item, index) in data.select.personList"
                    :key="index"
                    :label="item.userName"
                    :value="item"
                  />
                </el-select>
              </el-form-item>
              <el-form-item class="form-button" style="float: right">
                <el-button type="primary" @click="onSubmit">保存</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-drawer>
      </div>
      <div class="out">
        <el-button @click="handleOutResume">淘汰</el-button>
      </div>
    </div>
    <div clas="top" v-if="data.step.isStep === 0">
      <el-result icon="error" title="简历已淘汰" />
    </div>
    <div clas="top" v-if="data.step.isStep === -1">
      <el-result icon="warning" title="简历未选中" />
    </div>
    <div class="buttom">
      <div class="comment">
        <div class="comment-operate">
          <el-input
            class="comment-input"
            v-model="data.comment.newComment"
            :autosize="{ minRows: 4, maxRows: 6 }"
            type="textarea"
            placeholder="输入对该候选人的备注"
          />
          <div>
            <el-button class="add" type="primary" @click="handleAddComment"
              >添加</el-button
            >
          </div>
        </div>
        <div class="content-list">
          <el-scrollbar max-height="100px">
            <div>
              <div class="comment-item">
                <img
                  src="https://ats-image.xiaoxizn.com/website/avatar_6.png"
                />
                <div class="item-content">
                  <div class="title">小明</div>
                  <div class="content">面试效果很好</div>
                  <div class="time">2023-07-13</div>
                </div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { onMounted, reactive } from "vue";
import store from "@/store";
import selectCustom from "@/components/common/select-custom.vue";
// 下拉框数据
import {
  interviewSelectList,
  interviewLevelSelectList,
  interviewTimeSelectList,
} from "@/assets/js/data/select-data/post-search-data";
import { stepList } from "@/assets/js/data/recruit/recruitment-progress";
// 接口
import {
  getOneResume,
  changeResumeSate,
  phasedOutResume,
  remarkResume,
} from "@/api/resume";
// 处理数据
import {
  getProgressState,
  getProgressStateBack,
} from "@/assets/js/util/recruitment-progress";
import { handleResumeData } from "@/assets/js/views/person/person-card";
import { ElMessage, ElMessageBox } from "element-plus";
const props = defineProps({ pkResumeId: String });
const data = reactive({
  step: {
    isStep: "",
    text: "",
  },
  interview: {
    drawer: false,
    title: "安排面试给候选人 - 林国瑞",
  },
  comment: {
    newComment: null,
  },
  form: {
    date: "",
    interview: {
      time: "",
      person: "",
    },
  },
  select: {
    personList: "",
  },
  user: {},
});
// 进入下一个阶段
const handleTurnNextStep = () => {
  if (data.step.isStep <= 4) {
    changeResumeSate({
      positionId: data.user.positionId,
      positionName: data.user.positionName,
      resumeId: data.user.resumeId,
      preState: getProgressStateBack(data.step.isStep),
      targetState: getProgressStateBack(data.step.isStep + 1),
    }).then((res) => {
      if (res.data.code === store.state.global.success) {
        data.step.isStep += 1;
        data.step.text = stepList[data.step.isStep].text;
      }
    });
  }
};
// 淘汰简历
const handleOutResume = () => {
  ElMessageBox.prompt("请输入您的淘汰理由", "淘汰简历", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
  })
    .then(({ value }) => {
      phasedOutResume({
        positionId: data.user.positionId,
        positionName: data.user.positionName,
        resumeId: data.user.resumeId,
        preState: getProgressStateBack(data.step.isStep),
        targetState: getProgressStateBack(0),
        phasedOutCause: value,
      }).then((res) => {
        if (res.data.code === store.state.global.success) {
          data.step.isStep = 0;
        }
      });
    })
    .catch(() => {
      ElMessage({
        type: "info",
        message: "取消淘汰简历",
      });
    });
};
// 手动添加备注
const handleAddComment = () => {
  remarkResume({}).then((res) => {});
};
// 添加面试
const addInterview = () => {
  data.interview.drawer = true;
};
// 得到简历的消息
const getResume = () => {
  getOneResume(props.pkResumeId).then((res) => {
    if (res.data.code === store.state.global.success) {
      data.step.isStep = getProgressState(res.data.data.state);
      data.user = handleResumeData(res.data.data).userHeaderData;
      console.log(data.user, "用户数据");
    }
  });
};
onMounted(() => {
  getResume();
});
// 提交面试消息
const onSubmit = () => {};
</script>
<style scoped>
.top > div {
  margin-bottom: 20px;
}
.step {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 300px;
  background-color: RGB(227, 231, 237);
}
/* 设置进度条 */
.el-step {
  width: 43px;
}
::v-deep .el-step__icon {
  border-radius: 50%;
  background-color: #fff !important;
  color: RGB(137, 144, 158);
  border: 2px solid #fff;
}
::v-deep .el-step__line {
  position: absolute;
  border-color: inherit;
  background-color: #fff;
}
::v-deep .el-step__head.is-finish .el-step__line {
  background-color: RGB(79, 146, 255);
}
::v-deep .el-step__head.is-finish .el-step__icon {
  background-color: RGB(79, 146, 255) !important;
  color: #fff !important;
}
.out,
.interview,
.progress {
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-item .el-button:first-child {
  width: 260px !important;
}
/* 设置环节 */
.el-button + .el-button {
  margin-left: 1px !important;
}
.interview .el-button {
  width: 260px !important;
  border: 1px solid RGB(220, 223, 230) !important;
}
.out .el-button {
  width: 260px !important;
  color: RGB(230, 162, 60) !important;
  border: 1px solid RGB(230, 162, 60) !important;
}
.buttom {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1em;
}
.comment-operate {
  padding-bottom: 20px;
}
.comment-operate > div {
  padding-bottom: 20px;
}
.add {
  float: right;
  margin-right: 1em;
}
.comment-input {
  display: flex;
  justify-content: center;
  width: 260px;
}
.comment-item {
  display: flex;
  border-bottom: 1px solid RGB(227, 231, 237);
  width: 100%;
}
.comment-item img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 1em;
}
.comment-item .item-content {
  width: 100%;
}
.comment-item .item-content .title {
  margin-right: 1em;
  font-size: 16px;
  font-weight: 400;
  vertical-align: middle;
  color: #414a60;
}
.comment-item .item-content .content {
  font-size: 14px;
  line-height: 1.5715;
  color: #575d6a;
  overflow-wrap: break-word;
  white-space: pre-line;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
.comment-item .item-content .time {
  float: right;
  color: #89909e;
  font-size: 13px;
}
/* 面试 */
.interview-choose {
  display: flex;
}
.interview-choose ::v-deep .input-container {
  margin-right: 10px !important;
  margin-left: 10px !important;
}
/* 表格按钮 */
.form-button .el-button {
  width: 100px !important;
  margin-right: 2em !important;
}
::v-deep .el-form-item {
  margin-bottom: 5vh;
}
</style>  