import React, { Component } from "react";
import "./style.less";
export class SecondPage extends Component {
  render() {
    return (
      <div className="secondpage">
        {/* 照片轮播图 */}
        <div
          className="picbanner"
          style={{ width: "100%", height: "150px", background: "yellowgreen" }}
        ></div>
      </div>
    );
  }
}

export default SecondPage;
