// index.js
// 获取应用实例
const app = getApp();

Page({
  data: {
    searchValue: "&#xe86b;",
    carouselList: [
      "/assets/images/index/carousel-1.png",
      "/assets/images/index/carousel-2.png"
    ],
    menuList: [
      {
        path: "/assets/images/index/menu-1.png",
        label: "新人任务"
      },
      {
        path: "/assets/images/index/menu-2.png",
        label: "0元"
      },
      {
        path: "/assets/images/index/menu-3.png",
        label: "高提成"
      },
      {
        path: "/assets/images/index/menu-4.png",
        label: "地板价"
      },
    ],
    hotList: [
      {
        img: "/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
    ],
    groundList: [
      {
        img: "/assets/images/index/ground-1.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/ground-2.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/ground-1.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/ground-2.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/ground-1.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/assets/images/index/ground-2.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      }
    ]
  },
  onLoad() {
    this.getIconFont();
  },
  getIconFont: () => {
    wx.loadFontFace({
      global: true,
      family: "iconfont",
      source: "url('https://oss.flywen.top/iconfont.ttf')",
    })
  },
  handleMenuTap(e) {
    debugger;
    console.log("tap happend");
  }
});
