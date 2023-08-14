<template>
  <div class="post">
    <div class="top">
      <div class="search">
        <div class="search-input">
          <el-input v-model="data.query.news" class="w-50 m-2">
            <template #suffix>
              <el-icon class="el-input__icon" @click="handleSearchPosts"
                ><Search
              /></el-icon>
            </template>
          </el-input>
        </div>
        <div class="select">
          <select-custom
            :width-value="150"
            :select-list="recruitTimeSelectList"
            @handle-check-data="handleCheckData"
          ></select-custom>
        </div>
      </div>
      <div v-if="isPermission(`addPosition`)">
        <el-button type="primary" @click="turnToAddPost">
          创建职位
        </el-button>
      </div>
    </div>
    <div class="middle">
      <div class="post-news">
        <div v-if="data.postList.length > 0">
          <div v-for="(item, index) in data.postList" :key="index">
            <post-card v-if="index<5" :post-data="item"/>
          </div>
          <div class="pages">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="data.pageNews.total"
              @current-change="handlePage"
              class="mt-4"
            />
          </div>
        </div>
        <div v-else>
          <el-empty :image-size="200" description="没有数据" />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
// 界面
import selectCustom from "@/components/common/select-custom.vue";
import postCard from "@/components/enter-login/card/all/post-card.vue";
import { Search } from "@element-plus/icons-vue";
// 数据
import { recruitTimeSelectList } from "@/assets/js/data/select-data/post-search-data";
import { getRecruitTimeValue } from "@/assets/js/views/post/post";
import { isPermission } from "@/assets/js/util/permissions";
// 接口
import { getPostsListByPage } from "@/api/posts";
import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import store from "@/store";
const router = useRouter();
const data = reactive({
  pageNews: {
    page: 0,
    total: 1,
  },
  query: {
    news: "",
    state: -1,
  },
  postList: "",
});
// 得到修改后的下拉框数据
const handleCheckData = (time) => {
  data.query.state = getRecruitTimeValue(time);
  console.log(data.query.state)
  handleSearchPosts();
};
// 搜索posts
const handleSearchPosts = () => {
  data.pageNews.page = 1;
  getPostsLists();
};
// 切换分页
const handlePage =(value)=>{
  data.pageNews.page = value;
  getPostsLists();
}
// 获得分页职位列表
const getPostsLists = () => {
  const postData = {
    query: data.query.news,
    state: data.query.state,
    page: data.pageNews.page,
    pageSize: data.pageNews.pageSize,
  };
  getPostsListByPage(postData).then((res) => {
    console.log(res,"分页展示职位");
    if (res.data.code === store.state.global.success) {
      data.pageNews.total = res.data.data.totalCount;
      data.postList = res.data.data.data;
    }
  });
};
// 打开新建职位界面
const turnToAddPost = () =>{
  const href = router.resolve({
    path:'/turn/post/post-news',
  })
  window.open(href.href,"_blank")
}
onMounted(() => {
  getPostsLists();
});
</script>
<style scoped>
.top {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}
.search {
  display: flex;
  justify-content: center;
  align-self: start;
}
.select {
  margin-left: 30px;
}
.pages {
  display: flex;
  justify-content: flex-end;
  margin: 0 10px;
}
.post-news {
  display: flex;
  justify-content: center;
  align-items: center;
}
.post-news > div {
  width: 97%;
  min-width: 800px;
}
/* 取消指定 router-link 元素的默认样式 */
.no-default-style {
  text-decoration: none;
  color: #fff;
}
</style>