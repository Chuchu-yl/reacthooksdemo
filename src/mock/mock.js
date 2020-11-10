import Mock from "mockjs";
Mock.mock("/textimg", {
  ret: 0,
  data: [
    {
      year: "1995-11-20",
      text: "~",
      // text: "靓哥出生啦~",
      img: require("../static/image/sun.png").default,
    },

    {
      year: "2018-4-2",
      text: "",
      img: require("../static/image/sun.png").default,
    },

    {
      year: "2018-11-5",
      text: "",
      img: require("../static/image/sun.png").default,
    },

    {
      year: "2019-4-8",
      text: "",
      img: require("../static/image/sun.png").default,
    },
    {
      year: "2019-10-25",
      text: "",
      img: require("../static/image/sun.png").default,
    },
    {
      year: "2020-7-4",
      text: "",
      img: require("../static/image/sun.png").default,
    },
  ],
});
Mock.mock("/textimg2", {
  ret: 0,
  data: [
    {
      year: "1997-2-7",
      text: "~",
      // text: "初初出生啦~",
      img: require("../static/image/sun.png").default,
    },
    {
      year: "2018-10-30",
      text: "",
      img: require("../static/image/sun.png").default,
    },
    {
      year: "2019-1-13",
      text: "",
      img: require("../static/image/sun.png").default,
    },
    {
      year: "2019-4-14",
      text: "",
      img: require("../static/image/sun.png").default,
    },

    {
      year: "2020-5-15",
      text: "",
      img: require("../static/image/sun.png").default,
    },

    {
      year: "2020-9-15",
      text: "",
      img: require("../static/image/sun.png").default,
    },
  ],
});
