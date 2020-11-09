import React, { Component } from "react";
import axios from "axios";

import "./style.less";

let Swiper = window.Swiper;
export class SecondPage extends Component {
  state = {
    textArr: [],
    textArrtwo: [],
  };
  componentDidMount() {
    this.swiperFun();
    axios({
      method: "get",
      url: "/textimg",
    }).then((res) => {
      // console.log(res.data);
      this.setState({
        textArr: res.data.data,
      });
    });
    axios({
      method: "get",
      url: "/textimg2",
    }).then((res) => {
      console.log(res.data.data);
      this.setState({
        textArrtwo: res.data.data,
      });
    });
  }
  swiperFun = () => {
    new Swiper(".swiper-container", {
      // direction: "vertical", // 垂直切换选项
      loop: true, // 循环模式选项
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });
  };
  // 点击放大图片
  imgBig = () => {};
  render() {
    const { textArr, textArrtwo } = this.state;
    console.log(textArr);
    // var url = require("../../static/image/sun.png").default;
    return (
      <div className="secondpage" style={{ height: "700px" }}>
        {/* 照片轮播图 */}
        <div
          className="picbanner"
          style={{ width: "100%", height: "200px", background: "yellowgreen" }}
        >
          <div className="swiper-container">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                slide1
                {/* <img src={require("../../static/image2/kenan.jpg").default} /> */}
              </div>
              <div className="swiper-slide">
                {" "}
                slide2
                {/* <img src={require("../../static/image2/modao.jpg").default} /> */}
              </div>
              <div className="swiper-slide">
                {" "}
                slide3
                {/* <img src={require("../../static/image2/andaji.png").default} /> */}
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* 分述栏 */}
        <div className="narrate">
          <div className="middle"></div>
          <div className="left">
            {textArr &&
              textArr.map((item, index) => {
                return (
                  <div key={index} className="textwrap">
                    {/* 文字 */}
                    <div className="text">{item.text}</div>
                    <div className="text">{item.text}</div>
                    <div className="imgwrap">
                      <img
                        onClick={() => this.imgBig()}
                        src={item.img}
                        width="30px"
                        height="30px"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="right">
            {textArrtwo &&
              textArrtwo.map((item, index) => {
                return (
                  <div key={index} className="textwrap">
                    {/* 文字 */}
                    <div className="text">{item.text}</div>
                    <div className="imgwrap">
                      <img
                        src={require("../../static/image/sun.png").default}
                        width="20px"
                        height="20px"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div
          style={{
            width: "100%",
            textAlign: "center",
            fontSize: "16px",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <span>To Be Continue</span>
        </div>
      </div>
    );
  }
}

export default SecondPage;
