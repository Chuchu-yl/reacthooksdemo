import React, { Component } from "react";
import moment from "moment";
import "./style.less";
export class FirstPage extends Component {
  state = { timer: null, andrOrios: null, imgsrc: null };
  async componentDidMount() {
    await this.timer();
    this.judgeIosAdr();
    let timecontrol = document.querySelector(".timecontrol");
    if (localStorage.getItem("src")) {
      timecontrol.style.background =
        "url(" + localStorage.getItem("src") + ") no-repeat ";
      timecontrol.style.backgroundSize = "cover";
      timecontrol.style.backgroundPosition = "center";
    }
  }
  judgeIosAdr = () => {
    var u = navigator.userAgent;
    //  var isAndroid = u.indexOf("Android") > -1 || u.indexOf("Adr") > -1; //android终端
    var isiOS1 = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端

    if (isiOS1) {
      this.setState({
        andrOrios: "ios",
      });
    } else {
      this.setState({
        andrOrios: "andr",
      });
    }
  };
  timer = () => {
    this.setState({
      timer: setInterval(() => {
        var date1 = "2018/04/02 00:00:00"; //开始时间
        var date2 = new Date(); //结束时间
        var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数
        //计算出相差天数
        var days = Math.floor(date3 / (24 * 3600 * 1000));

        //计算出小时数
        var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
        var hours = Math.floor(leave1 / (3600 * 1000));
        //计算相差分钟数
        var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
        var minutes = Math.floor(leave2 / (60 * 1000));
        //计算相差秒数
        var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
        var seconds = Math.round(leave3 / 1000);
        document.getElementById("day").innerHTML = days;
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("minu").innerHTML = minutes;
        document.getElementById("sec").innerHTML = seconds;
      }, 1000),
    });
  };
  componentWillUnmount() {
    clearInterval(this.state.timer);
  }
  getObjectURL = (file) => {
    var url = null;
    if (window.createObjectURL != undefined) {
      // basic
      url = window.createObjectURL(file);
    } else if (window.URL != undefined) {
      // mozilla(firefox)
      url = window.URL.createObjectURL(file);
    } else if (window.webkitURL != undefined) {
      // webkit or chrome
      url = window.webkitURL.createObjectURL(file);
    }
    return url;
  };
  inputChange = () => {
    let fileList = document.querySelector(".input").files;
    for (var i = 0; i < fileList.length; i++) {
      var imgSrc = this.getObjectURL(fileList[i]);
    }
    localStorage.setItem("src", imgSrc);
    let timecontrol = document.querySelector(".timecontrol");
    timecontrol.style.background =
      "url(" + localStorage.getItem("src") + ") no-repeat ";
    timecontrol.style.backgroundSize = "cover";
    timecontrol.style.backgroundPosition = "center";
  };

  render() {
    var date1 = "2018/04/02 00:00:00"; //开始时间
    var date2 = new Date(); //结束时间
    var date3 = date2.getTime() - new Date(date1).getTime(); //时间差的毫秒数
    //计算出相差天数
    var days = Math.floor(date3 / (24 * 3600 * 1000));
    //计算出小时数
    var leave1 = date3 % (24 * 3600 * 1000); //计算天数后剩余的毫秒数
    var hours = Math.floor(leave1 / (3600 * 1000));
    //计算相差分钟数
    var leave2 = leave1 % (3600 * 1000); //计算小时数后剩余的毫秒数
    var minutes = Math.floor(leave2 / (60 * 1000));
    //计算相差秒数
    var leave3 = leave2 % (60 * 1000); //计算分钟数后剩余的毫秒数
    var seconds = Math.round(leave3 / 1000);
    console.log(this.state.andrOrios);
    return (
      <div className="firstwrap">
        {/* 时间间隔文字 */}
        <div className="timecontrol">
          <div className="textwrap">
            <div>我们在一起</div>
            <br></br>
            <div style={{ width: "100%" }}>
              <img
                style={{ width: "10px", height: "10px", marginRight: "5px" }}
                src={require("../../static/image2/heart.png").default}
              />
              <span id="day">{days}</span>天<span id="hour">{hours}</span>时
              <span id="minu">{minutes}</span>分<span id="sec">{seconds}</span>
              秒
              <img
                style={{ width: "10px", height: "10px", marginLeft: "5px" }}
                src={require("../../static/image2/heart.png").default}
              />
            </div>
            <br></br>
            <div>2018-4-2</div>
          </div>
          {/* 更换背景图 */}
          <div className="changebackground">
            <div className="wrap">
              <input
                className="input"
                type="file"
                accept="image/*"
                onChange={() => this.inputChange()}
              />
              <div>
                <div>更换</div>
                <div>背景</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
