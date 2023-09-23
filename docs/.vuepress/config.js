module.exports = {
  themeConfig: {
    logo: "/assets/img/logo.png",
    displayAllHeaders: true,
    sidebar: [
      {
        title: "2023/September",
        collapsable: true,
        children: [
          "./2023/september/improve-performance-for-an-upwork-client-with-shopify",
        ]
      },
      {
        title: "2023/July",
        collapsable: true,
        children: [
          "./2023/july/learn-shopify-9-days-with-chatgpt",
          "./2023/july/dedicate-to-outcomes-for-a-shopify-client",
          "./2023/july/chathpt_roadmap_first_task_shopify_client",
          "./2023/july/chatgpt-roadmap-crossborder-payment"
        ]
      },
      {
        title: "2021/March",
        collapsable: true,
        children: [
          "./2021/march/vue-test-utils-best-practices"]
      },
      {
        title: "2021/February",
        collapsable: true,
        children: [
          "./2021/february/interesting-tech-stack-used-recently"]
      },
      {
        title: "2021/January",
        collapsable: true,
        children: ["/2021/january/health-supplemets-2021", 
        "/2021/january/avoid-vue-vscode-extensions-collisions",
        "/2021/january/deep-dive-how-routing-nuxt-works",
        "/2021/january/linked-list-why-do-i-need-to-know",
        "/2021/january/nuxt-prefetch-optimizations",
        "/2021/january/how-to-create-diff-text-output"]
      },
      {
        title: "2020/December",
        collapsable: true,
        children: ["/2020/december/nuxt-and-contentful-to-build-a-multilanguage-webapp"]
      },
      {
        title: "2020/November",
        collapsable: true,
        children: ["/2020/november/learned-2-courses-from-zero-to-mastery", "/2020/november/how-to-applybyapi"]
      },
      {
        title: "2020/July",
        collapsable: true,
        children: ["/2020/july/pic-in-pic-project"]
      },
      {
        title: "2020/March",
        collapsable: true,
        children: ["/2020/march/migrate-from-venezuela", "/2020/march/migrate-vuecli-nuxt"]
      },
      {
        title: "2019/August",
        collapsable: true,
        children: ["/2019/august/create-category-in-datocms"]
      },
      {
        title: "2019/April",
        collapsable: true,
        children: [
          "/2019/april/using-linux-recovery-files-from-android-device",
          "/2019/april/quick-guide-setup-lamp-workflow"
        ]
      },
      {
        title: "2019/March",
        collapsable: true,
        children: [
          "/2019/march/an-opinionated-ionic-vue-workflow-for-single-app",
          //"/2019/march/does-cordova-plugins-compatiable-with-capacitor",
          "/2019/march/ionic4-workflow-multiapp-project"
        ]
      },
      {
        title: "2019/February",
        collapsable: true,
        children: [
          "/2019/february/my-first-bash-script",
          "/2019/february/storage-firebase-with-nuxt",
          "/2019/february/last-interview-job-task-1",
          "/2019/february/last-interview-job-task-2"
        ]
      }
    ],
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Portfolio",
        link: "https://eulier1.github.io/quieneseulier1/"
      },
      {
        text: "Linkedin",
        link: "https://linkedin.com/in/eulier-gonzalez-69079096"
      },
      { text: "Github", link: "https://github.com/eulier1" },
      {
        text: "Stack Overflow",
        link: "https://stackoverflow.com/users/5692051/yoarthur"
      },
      { text: "Twitter", link: "https://twitter.com/arthard101" }
    ]
  },
  plugins: [
    [
      'google-gtag',
      {
        'ga': 'G-XWDCEQMTCQ' // UA-00000000-0
      }
    ]
  ]
}
