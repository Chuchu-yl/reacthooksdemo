import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import FirstPage from "../FirstPage";
import SecondPage from "../SecondPage";
import ThirdPage from "../ThirdPage";
import { Toast } from "antd-mobile";

import "./style.less";
function offline() {
  Toast.offline("这是一个测试", 3);
}
export class Home extends Component {
  state = {
    active: 2,
    cakesShow: false,
  };
  activeFun = (num) => {
    this.setState({
      active: num,
    });
  };
  cakeShow = (e) => {
    // 两秒执行一次
    this.setState({
      cakesShow: true,
    });
    e.stopPropagation();
    setTimeout(() => {
      this.setState({
        cakesShow: false,
      });
    }, 3000);
  };

  render() {
    const { active, cakesShow } = this.state;
    // console.log(this.props.location.pathname);
    return (
      <div
        className="home"
        onClick={() => {
          return this.setState({
            cakesShow: false,
          });
        }}
      >
        <div className="container">
          {this.props.location.pathname == "/first" ? (
            ""
          ) : (
            <div className="bannerwrap">
              {/* <div className="line"></div> */}
              {/* <div className="bannerinner">
                <img
                  className="img1"
                  src={require("../../static/image/banner1.png").default}
                />
                <img
                  className="img2"
                  src={require("../../static/image/banner2.png").default}
                />
                <img
                  className="img3"
                  src={require("../../static/image/banner3.png").default}
                />
                <img
                  className="img4"
                  src={require("../../static/image/banner4.png").default}
                />
                <img
                  className="img5"
                  src={require("../../static/image/banner5.png").default}
                />
              </div>
              <ul className="text">
                <div className="textcontainer">
                  <span style={{ color: "#f2aa3f" }}>H</span>
                  <span style={{ color: "#46e7b2" }}>A</span>
                  <span style={{ color: "#79eeef" }}>P</span>
                  <span style={{ color: "#f65844" }}>P</span>
                  <span style={{ color: "#f0a3c6" }}>Y</span>
                </div>
              </ul>
              <div className="line2"></div>
              <div className="bannerinner2">
                <img
                  className="img1"
                  src={require("../../static/image/banner6.png").default}
                />
                <img
                  className="img2"
                  src={require("../../static/image/banner3.png").default}
                />
                <img
                  className="img3"
                  src={require("../../static/image/banner7.png").default}
                />
                <img
                  className="img4"
                  src={require("../../static/image/banner4.png").default}
                />
                <img
                  className="img5"
                  src={require("../../static/image/banner5.png").default}
                />
                <img
                  className="img5"
                  src={require("../../static/image/banner2.png").default}
                />
                <img
                  className="img5"
                  src={require("../../static/image/banner1.png").default}
                />
                <img
                  className="img5"
                  src={require("../../static/image/banner7.png").default}
                />
              </div>
              <ul className="text2">
                <div className="textcontainer">
                  <span style={{ color: "#c7ed4e" }}>B</span>
                  <span style={{ color: "#79eeef" }}>I</span>
                  <span style={{ color: "#f4ea29" }}>R</span>
                  <span style={{ color: "#f2aa3f" }}>T</span>
                  <span style={{ color: "#f0a3c6" }}>H</span>
                  <span style={{ color: "#46e7b2" }}>D</span>
                  <span style={{ color: "#f2aa3f" }}>A</span>
                  <span style={{ color: "#f4ea29" }}>Y</span>
                </div>
              </ul>
              <div className="bubble">
                <img
                  src={require("../../static/image/bubble.png").default}
                ></img>
              </div>
              <div className="bubble2">
                <img
                  src={require("../../static/image/bubble.png").default}
                ></img>
              </div>
              <div className="fireworks">
                <img
                  src={require("../../static/image/fireworks.png").default}
                />
              </div>
              <div className="fireworks2">
                <img
                  src={require("../../static/image/fireworks.png").default}
                />
              </div> */}
            </div>
          )}

          <div className="innerpage">
            <Switch>
              <Route exact path="/first" component={FirstPage}></Route>
              <Route path="/second" component={SecondPage}></Route>
              <Route path="/third" component={ThirdPage}></Route>
              <Redirect exact from="/" to="/second"></Redirect>
            </Switch>
          </div>
          {/* 蛋糕 */}
          {cakesShow && (
            <div className="cakes">
              <img
                width="100px"
                height="100px"
                src={require("../../static/image/cake1.png").default}
              />
            </div>
          )}
        </div>
        <div
          className="button"
          style={{
            width: "40px",
            height: "40px",
            // backgroundColor: "greenyellow",
            position: "absolute",
            bottom: "8%",
            right: "0px",
          }}
          onClick={this.cakeShow}
        >
          <img
            widt="40px"
            height="40px"
            src={require("../../static/image/cake2.png").default}
          />
        </div>
        <div className="footerbutton">
          <div
            className="moon"
            onClick={() => {
              return this.props.history.push("first"), this.activeFun(1);
            }}
          >
            {/* <span> */}
            <img
              src={
                active === 1
                  ? require("../../static/image/moon.png").default
                  : require("../../static/image/moon2.png").default
              }
            />
            {/* </span> */}
            <a className={active === 1 ? "active" : ""}>时间戳</a>
          </div>
          <div
            className="sun"
            onClick={() => {
              return this.props.history.push("second"), this.activeFun(2);
            }}
          >
            {/* <span> */}
            <img
              src={
                active === 2
                  ? require("../../static/image/sun.png").default
                  : require("../../static/image/sun2.png").default
              }
            />
            {/* </span> */}
            <a className={active === 2 ? "active" : ""}>我的</a>
          </div>
          <div
            className="star"
            onClick={() => {
              return (
                offline(),
                this.activeFun(3),
                setTimeout(() => {
                  this.props.location.pathname == "/first"
                    ? this.activeFun(1)
                    : this.activeFun(2);
                }, 3000)
              );
              // return this.props.history.push("third"), this.activeFun(3);
            }}
          >
            {/* <span> */}
            <img
              src={
                active === 3
                  ? require("../../static/image/star.png").default
                  : require("../../static/image/star2.png").default
              }
            />
            {/* </span> */}
            <a className={active === 3 ? "active" : ""}>别看</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
