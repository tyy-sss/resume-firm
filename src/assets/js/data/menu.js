import { reactive } from "vue";
import store from "@/store";
// personal 菜单
const personalAsideData = reactive([
  {
    menuName: "个人设置",
    path: "self",
    allPath: "/personal-setting/self",
  },
  {
    menuName: "安全设置",
    path: "safe",
    allPath: "/personal-setting/safe",
  },
  {
    menuName: "公司设置",
    path: "company",
    allPath: "/personal-setting/company",
  },
  {
    menuName: "团队成员",
    path: "group",
    allPath: "/personal-setting/group",
  },
]);
// 职位的菜单信息
const postAsideMenuData = reactive([
  {
    menuName: "职位消息",
    path: "post-news",
    allPath: "/turn/post/post-news",
  },
  {
    menuName: "团队设置",
    path: "group",
    allPath: "/turn/post/group",
  },
]);

// 在切换中间路由的时候，修改侧边菜单的path值
const changePersonalSettingPath = (path, menuName) => {
  const menuData = store.state.menu.menuData;
  menuData.forEach((element) => {
    if (element.name === menuName) {
      element.path = path;
    }
  });
};

export { personalAsideData, changePersonalSettingPath, postAsideMenuData };
