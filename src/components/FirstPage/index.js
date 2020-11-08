import React, { Component } from "react";
import moment from "moment";
import "./style.less";
export class FirstPage extends Component {
  state = { timer: null };
  async componentDidMount() {
    // console.log(this.props);
    await this.timer();
    // this.props.location.pathname == "/first" && this.timer();
  }

  // timer = () => {};

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
        // console.log(
        //   "相差" +
        //     days +
        //     "天" +
        //     hours +
        //     "小时" +
        //     minutes +
        //     "分钟" +
        //     seconds +
        //     "秒"
        // );
      }, 1000),
    });
  };
  componentWillUnmount() {
    clearInterval(this.state.timer);
    // this.state.timer;
    // return this.timer();
  }
  render() {
    return (
      <div className="firstwrap">
        {/* 时间间隔文字 */}
        <div className="timecontrol">
          <div className="text">
          <div>我们在一起</div><br></br>
          <div>
           ❤ <span id="day"></span>天<span id="hour"></span>时
            <span id="minu"></span>分<span id="sec"></span>秒
            ❤
          </div>
          <br></br>
          <div>啦~</div>
          </div>
          
        </div>
      </div>
    );
  }
}

export default FirstPage;
