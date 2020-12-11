import React, { Component } from "react";
import axios from "axios";

import "./style.less";

let Swiper = window.Swiper;
export class SecondPage extends Component {
  state = {
    textArr: [],
    textArrtwo: [],
    picShow: false, // 点击图片的下标
    currentIndex: [],
    currentIndextwo: [],
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
      console.log(res);
      this.setState({
        textArrtwo: res.data.data,
      });
    });
    axios({
      method: "post",
      url: "/getGoods",
      data: {
        id: 2,
      },
    }).then((data) => {
      //成功的回调函数，返回的是增加的数据
      // console.log(data.data.data);
      //  this.url = data.data.data[0].goodsImg;
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
  imgBig = (e) => {
    let img = document.querySelectorAll(".imgOne")[e.target.dataset.value];
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.backgroundPosition = "center";
    img.style.position = "absolute";
    img.style.left = "0";
    img.style.right = "0";
    img.style.top = "0";
    img.style.bottom = "0";
    img.style.margin = "auto";
  };
  imgBig2 = (e) => {
    // this.state.currentIndextwo.push(e.target.dataset.value);
    let img = document.querySelectorAll(".imgTwo")[e.target.dataset.value];
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.backgroundPosition = "center";
    img.style.position = "absolute";
    img.style.left = "0";
    img.style.right = "0";
    img.style.top = "0";
    img.style.bottom = "0";
    img.style.margin = "auto";
    // console.log(img);
  };
  returnFun = () => {
    console.log("111111111111", this.state.currentIndex);
    let img = document.querySelectorAll(".imgOne");
    console.log(img);
    for (var i = 0; i < img.length; i++) {
      img[i].style.width = "30px";
      img[i].style.height = "30px";
      img[i].style.position = "";
      img[i].style.left = "";
      img[i].style.right = "";
      img[i].style.margin = "";
    }

    let imgtwo = document.querySelectorAll(".imgTwo");
    for (var j = 0; j < imgtwo.length; j++) {
      imgtwo[j].style.width = "30px";
      imgtwo[j].style.height = "30px";
      imgtwo[j].style.position = "";
      imgtwo[j].style.left = "";
      imgtwo[j].style.right = "";
      imgtwo[j].style.margin = "";
    }
  };

  render() {
    const { textArr, textArrtwo } = this.state;
    // console.log(textArr);

    return (
      <div
        className="secondpage"
        style={{ height: "700px" }}
        onClick={this.returnFun}
      >
        {/* 照片轮播图 */}
        <div className="picbanner" style={{ width: "100%", height: "250px" }}>
          <div className="swiper-container">
            <div className="swiper-wrapper">
              {/* <div className="swiper-slide">
               
                <img src={require("../../static/image2/one.png").default} />
              </div> */}
              {/* <div className="swiper-slide">
               
                <img src={require("../../static/image2/two.png").default} />
              </div> */}
              {/* <div className="swiper-slide">
                <img src={require("../../static/image2/four.png").default} />
              </div>
              <div className="swiper-slide">
                <img src={require("../../static/image2/three.png").default} />
              </div>
              <div className="swiper-slide">
                <img src={require("../../static/image2/five.png").default} />
              </div>

              <div className="swiper-slide">
                <img src={require("../../static/image2/seven.png").default} />
              </div>
              <div className="swiper-slide">
                <img src={require("../../static/image2/eight.png").default} />
              </div>
              <div className="swiper-slide">
                <img src={require("../../static/image2/nine.jpg").default} />
              </div> */}
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
                    <div className="text" style={{ color: "#666" }}>
                      {item.year}
                    </div>
                    <div
                      className="text"
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        margin: "5px 0",
                      }}
                    >
                      {item.text}
                    </div>
                    <div className="imgwrap">
                      <img
                        data-value={index}
                        className="imgOne"
                        onClick={(e) => {
                          return this.imgBig(e), e.stopPropagation();
                        }}
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
                    <div className="text" style={{ color: "#666" }}>
                      {item.year}
                    </div>
                    <div
                      className="text"
                      style={{
                        fontSize: "12px",
                        color: "#999",
                        margin: "5px 0",
                      }}
                    >
                      {item.text}
                    </div>
                    <div className="imgwrap">
                      <img
                        data-value={index}
                        className="imgTwo"
                        onClick={(e) => {
                          return this.imgBig2(e), e.stopPropagation();
                        }}
                        src={item.img}
                        width="30px"
                        height="30px"
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
