export default {
  /** 
   * 教程一开始说过config.js如果设置了singular:true 那么相应的文件夹page就要命名为单数，
   * 实际上umi默认的就是复数pages、models的命名方法。
   * 所以根本不需要在config里加singular:true。就指直接把文件夹命名为pages、models不就没那么多问题了吗！
  */
  singular: true, // 启用单数模式的目录 
  // // 在 umi 中，约定的存放页面代码的文件夹是 pages，是复数，不过如果你喜欢单数的话你配置项中你可以添加 singular 为 true 来让 page 变为约定的文件夹
  // plugins: [
  //   ['umi-plugin-react', {
  //     antd: {}
  //     // 这里暂时还没有添加配置，该插件还不会有作用，我们会在后面的课程按照需求打开相应的配置
  //   }],
  // ],
  dva: {}, // 基于 redux、redux-saga 和 react-router 的轻量级前端框架及最佳实践沉淀
  antd: {},    
  routes: [{
    path: '/',
    component: '../layout',
    routes: [
      {
        path: 'puzzleCards',
        component: 'PuzzleCards'
      }
    ]

    // path: '/',
    // component: '../layout',
    // routes: [
    //   {
    //     path: '/',
    //     component: 'Helloworld',
    //   },
    //   {
    //     path: '/helloworld',
    //     component: 'Helloworld'
    //   },
    //   {
    //     path: '/dashboard',
    //     routes: [
    //       { path: '/dashboard/analysis', component: 'Dashboard/Analysis' },
    //       { path: '/dashboard/monitor', component: 'Dashboard/Monitor' },
    //       { path: '/dashboard/workplace', component: 'Dashboard/Workplace' }
    //     ]
    //   },
    // ],    
    // {
    //   path: '/',
    //   component: './HelloWorld',
    // },
    // {
    //   path: '/content',
    //   component: './Content',
    // },
    // {
    //   path: '/picture',
    //   component: './PictureContent',
    // },
    // {
    //   path: '/clock',
    //   component: './Clock',
    // },
    // {
    //   path: '/square',
    //   component: './Square',
    // },
    // {
    //   path: '/demo',
    //   component: './Demo',
    // },
    // {
    //   path: '/index',
    //   component: './layout/index',
    // }
  }],
}