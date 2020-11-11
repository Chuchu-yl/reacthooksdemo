import React, { Component } from "react";
import moment from "moment";
import "./style.less";
export class FirstPage extends Component {
  state = { timer: null };
  async componentDidMount() {
    await this.timer();
  }

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
    return (
      <div className="firstwrap">
        {/* 时间间隔文字 */}
        <div className="timecontrol">
          <div className="textwrap">
            <div>你好呀</div>
            <br></br>
            <div>
              <span id="day">{days}</span>/<span id="hour">{hours}</span>/
              <span id="minu">{minutes}</span>/<span id="sec">{seconds}</span>
            </div>
            <br></br>
            <div>我不好</div>
          </div>
        </div>
      </div>
    );
  }
}

export default FirstPage;
