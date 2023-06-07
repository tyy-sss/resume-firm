import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path:"/",
    redirect:"/not-login-main"
  },
  {
    path: "/not-login-main",
    name: "not-login-main",
    component:() => import("../views/not-login/Main.vue"),
  },
  {
    path: "/",
    name:"main",
    component:() => import("../views/enter-login/enter/Main.vue"),
    children:[
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/enter-login/enter/detail/Home.vue'),
      },
      {
        path: 'post',
        name: 'post',
        component: () => import('../views/enter-login/enter/detail/Post.vue'),
      },
      {
        path: 'person',
        name: 'person',
        component: () => import('../views/enter-login/enter/detail/Person.vue'),
      },
      {
        path: 'interview',
        name: 'interview',
        component: () => import('../views/enter-login/enter/detail/Interview.vue'),
      },
      {
        path: 'report',
        name: 'report',
        component: () => import('../views/enter-login/enter/detail/Report.vue'),
      },
      {
        path: 'personal-setting',
        name: 'personal-setting',
        component: () => import('../views/enter-login/enter/detail/PersonalSetting.vue'),
        children:[
          {
            path: 'self',
            name: 'self',
            component: () => import('../views/enter-login/enter/detail/person-setting/Self.vue'),
          },
          {
            path: 'safe',
            name: 'safe',
            component: () => import('../views/enter-login/enter/detail/person-setting/Safe.vue'),
          },
          {
            path: 'company',
            name: 'company',
            component: () => import('../views/enter-login/enter/detail/person-setting/Company.vue'),
          },
          {
            path: 'group',
            name: 'group',
            component: () => import('../views/enter-login/enter/detail/person-setting/Group.vue'),
          },
          {
            path: 'email',
            name: 'email',
            component: () => import('../views/enter-login/enter/detail/person-setting/Email.vue'),
          },
        ]
      },
    ]
  },
  // 重开界面
  {
    path: "/turn",
    name:"turn",
    component:() => import("../views/enter-login/turn/Main.vue"),
    children:[
      {
        path: 'add-post',
        name: 'add-post',
        component: () => import('../views/enter-login/turn/detail/AddPost.vue'),
      },
      {
        path: 'excel',
        name: 'excel',
        component: () => import('../views/enter-login/turn/detail/Excel.vue'),
      },
      {
        path: 'recruit',
        name: 'recruit',
        component: () => import('../views/enter-login/turn/detail/Recruit.vue'),
      },
      {
        path: 'person',
        name: 'turn-person',
        component: () => import('../views/enter-login/turn/detail/Person.vue'),
        children:[
          {
            path: 'original-resume',
            name: 'original-resume',
            component: () => import('../views/enter-login/turn/detail/person/OriginalResume.vue'),
          },
          {
            path: 'standard-resume',
            name: 'standard-resume',
            component: () => import('../views/enter-login/turn/detail/person/StandardResume.vue'),
          },
          {
            path: 'candidate-portrait',
            name: 'candidate-portrait',
            component: () => import('../views/enter-login/turn/detail/person/CandidatePortrait.vue'),
          },
        ]
      },
    ],
  },
  //登录
  {
    path:'/login',
    name:'login',
    component:() => import('../views/prepare-login/Login.vue')
  },
  //注册
  {
    path:'/register',
    name:'register',
    component:() => import('../views/prepare-login/Register.vue')
  },
  // 修改密码
  {
    path:'/change-password',
    name:'change-password',
    component:() => import('../views/prepare-login/ChangePassword.vue')
  },
  {
    path:"/test",
    name:"test",
    component:() => import('../views/Test.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

//添加全局前置导航守卫
router.beforeEach((to, from, next) => {
  //判断token是否存在
  // const token = sessionStorage.getItem("token");
  // // console.log(token, "token");
  // if (!token) {
  //   //没有登录 可以注册，登录，忘记密码
  //   if (
  //     to.name !== "login"
  //   ) {
  //     next({ name: "login" });
  //   } else {
  //     next();
  //   }
  //   // next();
  // } else {
  //   next();
  // }
  next();
});
export default router;
