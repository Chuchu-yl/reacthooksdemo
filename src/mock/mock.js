import Mock from "mockjs";
Mock.mock("/textimg", {
  ret: 0,
  data: [
    {
      year: "1995-11-20",
      // text: "~",
      text: "靓哥出生啦~",
      img: require("../static/image2/f-liangBaby.jpg").default,
    },

    {
      year: "2018-4-2",
      text: "算是正式在一起了叭",
      img: require("../static/image2/f-together.jpg").default,
    },

    {
      year: "2018-11-5",
      text: "给靓哥过的第一个生日，哈尔滨",
      img: require("../static/image2/f-firstBirthday.jpg").default,
    },

    {
      year: "2019-4-8",
      text: "靓哥打工人生涯第二站，北京昌平区",
      img: require("../static/image2/f-beijing.jpg").default,
    },
    {
      year: "2019-10-25",
      text: "初初打工人生涯开启，第一站北京丰台区",
      img: require("../static/image2/f-fengtai.jpg").default,
    },
    {
      year: "2020-7-4",
      text: "一起取了天津玩耍，回来伤势就重了= =！",
      img: require("../static/image2/f-tianjin.jpg").default,
    },
  ],
});
Mock.mock("/textimg2", {
  ret: 0,
  data: [
    {
      year: "1997-2-7",
      text: "初初出生啦~",
      img: require("../static/image2/chubaby.jpg").default,
    },
    {
      year: "2018-10-30",
      text: "靓哥打工人的生涯开启，第一站沈阳",
      img: require("../static/image2/f-shenyang3.jpg").default,
    },
    {
      year: "2019-1-13",
      text: "一起去沈阳，玩了三天哦",
      img: require("../static/image2/f-shengyang2.jpg").default,
    },
    {
      year: "2019-4-14",
      text: "初初去北京学习啦~开启程序猿生涯",
      img: require("../static/image2/f-beijing2.jpg").default,
    },

    {
      year: "2020-5-15",
      text: "哎呀，靓哥摔倒了！！！",
      img: require("../static/image/sun.png").default,
    },

    {
      year: "2020-9-15",
      text: "庆祝靓哥第一次工资过万，O(∩_∩)O",
      img: require("../static/image2/f-target.jpg").default,
    },
  ],
});
Mock.mock("/getGoods", "post", (config) => {
  console.log(config);
  // return data;
});
