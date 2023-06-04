import { reactive } from "vue";

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

// 侧边菜单
const asideData = reactive([
  {
    menuName: "首页管理",
    path: "/home",
    icon: "house",
  },
  {
    menuName: "职位列表",
    path: "/post",
    icon: "guide",
  },
  {
    menuName: "人才列表",
    path: "/person",
    icon: "avatar",
  },
  {
    menuName: "面试安排",
    path: "/interview",
    icon: "school",
  },
  {
    menuName: "报表中心",
    path: "/report",
    icon: "promotion",
  },
  {
    menuName: "个人设置",
    path: "/personal-setting/self",
    icon: "user",
  },
]);

// 在切换中间路由的时候，修改侧边菜单的path值
const changePersonalSettingPath = (path, menuName) => {
  asideData.forEach((element) => {
    if (element.menuName === menuName) {
      element.path = path;
    }
  });
  console.log(asideData,"asideData")
};

export { asideData, personalAsideData, changePersonalSettingPath };
