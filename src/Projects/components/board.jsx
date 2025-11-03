import { useSelector } from "react-redux";
import List from "./ListUI";



const Board = () => {
    const data=useSelector(state=>state.Data.board.board1);
    console.log("data Board :  ",data)
    return ( <div className="Board">

        {
            data.map((list, index)=><List Index={index} />)
        }
        
            
        
    </div> );
}
 
export default Board;