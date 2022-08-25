import React from "react";
import Styles from "./MatchSection.module.css";

const MatchSection1 = ({ data, title }) => {
  return (
    <div className={Styles.main}>
      <div className={Styles.heading}>{title}</div>
      <div className={Styles.grid}>
        {data
          .filter(
            (el, index) => index % 5 == 0
          )
          .map((el) => (
            <div key={el.id} className={Styles.box}>
              <h4>{el.status}</h4>
              <img src={el.t1img} alt="" />
              <span>{el.t1}</span>
              <span>{el.t1s}</span>
              <br></br>
              <img src={el.t2img} alt="" />
              <span>{el.t2}</span>
              <span>{el.t2s}</span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MatchSection1;
