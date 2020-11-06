import React, { Component } from "react";
import { Route, Switch, Redirect, NavLink } from "react-router-dom";
import FirstPage from "../FirstPage";
import SecondPage from "../SecondPage";
import ThirdPage from "../ThirdPage";

import "./style.less";

export class Home extends Component {
  state = {
    active: 1,
  };
  activeFun = (num) => {
    this.setState({
      active: num,
    });
  };
  render() {
    const { active } = this.state;
    console.log(this.props);
    return (
      <div className="home">
        <div className="container">
          <div className="bannerwrap">
            {/* <div className="line"></div>
            <div className="bannerinner">
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
              <img src={require("../../static/image/bubble.png").default}></img>
            </div>
            <div className="bubble2">
              <img src={require("../../static/image/bubble.png").default}></img>
            </div>
            <div className="fireworks">
              <img src={require("../../static/image/fireworks.png").default} />
            </div>
            <div className="fireworks2">
              <img src={require("../../static/image/fireworks.png").default} />
            </div> */}
          </div>
          <div className="innerpage">
            <Switch>
              <Route exact path="/first" component={FirstPage}></Route>
              <Route path="/second" component={SecondPage}></Route>
              <Route path="/third" component={ThirdPage}></Route>
              <Redirect exact from="/" to="/first"></Redirect>
            </Switch>
          </div>
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
            <a className={active === 1 ? "active" : ""}>首页</a>
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
            <a className={active === 2 ? "active" : ""}>二页</a>
          </div>
          <div
            className="star"
            onClick={() => {
              return this.props.history.push("third"), this.activeFun(3);
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
            <a className={active === 3 ? "active" : ""}>末页</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
