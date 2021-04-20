// index.js
import getNavHeight from "../../utils/getSystemInfo";
Page({
  data: {
    statusHeight: undefined,
    searchValue: "&#xe86b;",
    carouselList: [
      "/resources/assets/images/index/carousel-1.png",
      "/resources/assets/images/index/carousel-2.png"
    ],
    menuList: [
      {
        path: "/resources/assets/images/index/menu-1.png",
        label: "新人任务"
      },
      {
        path: "/resources/assets/images/index/menu-2.png",
        label: "0元"
      },
      {
        path: "/resources/assets/images/index/menu-3.png",
        label: "高提成"
      },
      {
        path: "/resources/assets/images/index/menu-4.png",
        label: "地板价"
      },
    ],
    hotList: [
      {
        img: "/resources/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/hot-1.jpg",
        title: "[ 高中复习 ] 有必要吗？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
    ],
    groundList: [
      {
        img: "/resources/assets/images/index/ground-1.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/ground-2.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/ground-1.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/ground-2.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/ground-1.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      },
      {
        img: "/resources/assets/images/index/ground-2.jpg",
        title: "[ 玻尿酸 ] 限时抢购中？",
        price: "199.00",
        hotPrice: "0.00",
        earning: "3.98"
      }
    ]
  },
  onLoad() {
  },
  onReady() {
    this.getStatusHeight();
  },
  getIconFont: () => {
    wx.loadFontFace({
      global: true,
      family: "iconfont",
      source: "url('https://oss.flywen.top/iconfont.ttf')",
    })
  },

  handleMenuTap(e) {
    console.log("tap happend");
  },

  getStatusHeight() {
    let a = getNavHeight();
    console.log(a);
    a.then(height => {
        console.log(height);
        this.setData({
          statusHeight: height + "px"
        })
      })
  }
});
