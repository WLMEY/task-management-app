import { useDispatch, useSelector } from "react-redux";

const AddCard = (props) => {
    const dispatch = useDispatch()
    // console.log(props.Listinfo.length)
    const ActivBoard=useSelector(state=>state.Data.ActivBoard)
    const AddACard = () => {
        dispatch({ type: 'ADD', ListIndex: props.ListIndex , boardName:ActivBoard });
    }

    return (<div className="AddCard" onClick={AddACard}>
        <i className="fa-solid fa-plus"></i>
        <span>Add a card</span>
    </div>);
}

export default AddCard;