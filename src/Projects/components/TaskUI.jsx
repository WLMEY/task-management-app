// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useState, useEffect, useRef } from "react";

const Task = (props) => {
  // const ds=propes
  const inputRef = useRef(null);
  const [isActive, setIsActive] = useState(props.Active);
  const [isEdit, setIsEdit] = useState(false);
  const [isEditOn, setIsEditOn] = useState(false);
  const [data, setData] = useState(props.Data);
  const Id=props.id

  // Functoins 
  const clicked = () => {
    setIsActive(true);
  };



  

// Active Edit button
  useEffect(() => {
    console.log("isEditON : " + isEditOn);
    inputRef.current.focus();
    inputRef.current.select();
  }, [isEditOn]);
//  chack click out side Input field
  useEffect(() => {
    function handleClickOutside(e) {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        return setIsEditOn(false);
      } else {
        return setIsEditOn(true);
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);



  return (
    //  Task componant
    <div
      className="Task"
      onMouseLeave={() => setIsEdit(false)}
      onMouseEnter={() => setIsEdit(true)}
      key={Id}
    >
      {/* Edit icon */}
      <i
        style={{ display: isEdit ? "block" : "none" }}
        onClick={() => setIsEditOn(true)}
        className="fa-solid fa-pen-to-square edit"
      ></i>
      {/* Check Circle*/}
      <div
        onClick={clicked}
        className={isActive ? "PositiveCheckCircle" : "NegativeCheckCircle"}
      >

        <i
          style={{ display: isActive ? "flex" : "none" }}
          className="fa-solid fa-check"
        ></i>
      </div>

      {/* Input  */}
      <input
        ref={inputRef}
        // onFocus={!isEditOn}
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
