Page({
  data: {
    levelList: [
      "/resources/assets/images/million/level-1.jpg",
      "/resources/assets/images/million/level-2.jpg",
      "/resources/assets/images/million/level-3.jpg",
      "/resources/assets/images/million/level-4.jpg",
    ],
    profileList: [
      {
        value: 0,
        label: "今日收益"
      },
      {
        value: 0,
        label: "今日邀请"
      },
      {
        value: 0,
        label: "累计收益"
      },
      {
        value: 0,
        label: "累计邀请"
      }
    ],
    staticsList: [
      {
        index: 1,
        nickname: "夏小菊",
        value: 10.12,
        icon: ""
      },
      {
        index: 2,
        nickname: "夏小菊",
        value: 10.10
      },
      {
        index: 3,
        nickname: "夏小菊",
        value: 10.06
      },
      {
        index: 4,
        nickname: "夏小菊",
        value: 10.06
      },
      {
        index: 5,
        nickname: "夏小菊",
        value: 10.06
      }
    ],
    activeControl: 1,
  },
  onLoad: function (options) {

  },
  handleStaticsChange(e) {
    let index = e.currentTarget.dataset.index;
    switch (index) {
      case "1":
        this.setData({
          activeControl: ~~index,
          staticsList: [
            {
              index: 1,
              nickname: "夏小菊",
              value: 10.12,
              icon: ""
            },
            {
              index: 2,
              nickname: "夏小菊",
              value: 10.10
            },
            {
              index: 3,
              nickname: "夏小菊",
              value: 10.06
            },
            {
              index: 4,
              nickname: "夏小菊",
              value: 10.06
            },
            {
              index: 5,
              nickname: "夏小菊",
              value: 10.06
            }
          ]
        })
        break;
      case"2":
        this.setData({
          activeControl: ~~index,
          staticsList: []
        })
        break;
    }
  }
});
