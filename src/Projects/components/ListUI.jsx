import {  useRef, useState } from "react";
import Task from "./TaskUI";
import AddCard from "./AddCard";
import { useSelector } from "react-redux";




const List = (props) => {
    const ActivBoard=useSelector(state=>state.Data.ActivBoard)

    const data=useSelector(state=>state.Data.board[ActivBoard][props.Index]);
    // console.log("data : ", data)
    const [listdata, setListdata] = useState({ Titel: "hallo tilte", isMinimize: false })
    const inputRef=useRef(null)

    function SelectTitle(){
        if (inputRef.current.focus())
        inputRef.current.select();
         
    }



    return (<div className="List">
        {/* Title */}
        <div className="Title">
            <input ref={inputRef} onChange={(e)=>setListdata(e.target.value)} onClick={()=>SelectTitle()} className="" type='text' value={listdata.Titel}/>
            
            <div className="icons">
                <i className="fa-solid fa-down-left-and-up-right-to-center"></i>

            </div>
        </div>
        {/* all Task */}
        <div className="Tasks">
            {
                data.map((task, index) => <Task key={index} listName={"listName1 !"} Id={task.id||index} Data={task.data} Active={task.isActive} />)
            }
        </div>
        {/* footer */}
        <div className="Footer">
            <AddCard ListIndex={props.Index} BoardIndex={props.BoardIxex}/>

        </div>




    </div>);
}

export default List;