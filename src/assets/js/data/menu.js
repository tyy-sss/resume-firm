import { reactive } from "vue";
import store from "@/store";

// var asideData = store.state.gobal.menuData; 
 
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
  {
    menuName: "简历邮箱",
    path: "email",
    allPath: "/personal-setting/email",
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

export { personalAsideData, changePersonalSettingPath };
