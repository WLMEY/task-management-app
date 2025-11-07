import { useSelector } from "react-redux";
import List from "./ListUI";



const Board = () => {
    const activBoard=useSelector(state=>state.Data.ActivBoard);
    
    const data=useSelector(state=>state.Data.board[activBoard]);
    console.log("data Board :  ",data)
    console.log("activboard : " ,activBoard)
    return ( <div className="Board">

        {
            data.map((list, index)=><List key={index} Index={index}/>)
        }
        
            
        
    </div> );
}
 
export default Board;
