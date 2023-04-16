import Users from "../Components/Users";
import { BsCardList } from 'react-icons/bs';

function Alldata() {
    return (
      <div className="w-50 p-5 m-3 alldata-color">
        <h1><BsCardList/> ALL DATA</h1>
        <hr />
        <Users />    
      </div>
    );
  }
  
export default Alldata;