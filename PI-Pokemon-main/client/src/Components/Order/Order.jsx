
import { useDispatch } from "react-redux";
import { sortPoke } from "../../redux/actions";
import style from "./Order.module.css";
const Order = () => {
 
const  dispatch = useDispatch()
  
  return (
    <div>
      <select className={style.select} onChange={(e) => dispatch(sortPoke(e.target.value))}>
        <option className={style.option}  >No Sorting</option>
        <option className={style.option} value="ascending">Ascending Alphabetically</option>
        <option className={style.option} value="decending">Descending Alphabetically</option>
        <option className={style.option} value="ataqueMax"> + Attack</option>
        <option className={style.option} value="ataqueMin"> - Alttack</option>
       
      </select>
     
    </div>
  );
};

export default Order;