// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { wrap } from "motion";
import { useState, useEffect } from "react";

const Task = () => {
  // const data="Hallo, Mohammed Hussein kaml";

  const [isActive, setIsActive] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditOn, setIsEditOn] = useState(false);
  const [data, setData] = useState("");

  const clicked = () => {
    setIsActive(true);
    console.log("mouseclicked : true");
  };

  useEffect(() => {
    console.log("isEditON : " + isEditOn);
  }, [isEditOn]);

  return (
    <div
      className="Task"
      onMouseLeave={() => setIsEdit(false)}
      onMouseEnter={() => setIsEdit(true)}
    >
      <i
        style={{ display: isEdit ? "block" : "none" }}
        onClick={() => setIsEditOn(true)}
        class="fa-solid fa-pen-to-square edit"
      ></i>
      <div
        onClick={clicked}
        className={isActive ? "PositiveCheckCircle" : "NegativeCheckCircle"}
      >
        <i
          style={{ display: isActive ? "flex" : "none" }}
          
          class="fa-solid fa-check"
        ></i>
      </div>
      {/* <span style={{wordBreak:'break-word'}}>{data}</span> */}
      <input
        disabled={!isEditOn}
        onChange={(e) => {
          setData(e.target.value), console.log(isEditOn);
        }}
        type="text"
        name=""
        id=""
        value={data}
      />
    </div>
  );
};

export default Task;
