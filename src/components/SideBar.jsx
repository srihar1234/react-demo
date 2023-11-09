import { useNavigate } from "react-router-dom"

export default function SideBar(){
   const navigate = useNavigate();

    return(
       <div className="side-bar">
        <div>
            <ul className="actions">
                <li>
                    <button className="btn btn-warning"
                    onClick={()=>navigate("/state/page")}>USE MEMO</button>
                </li>
                <li>
                    <button className="btn btn-warning"
                    onClick={()=>navigate("/callback")}>CALLBACK</button>
                </li>
                <li>three</li>
                <li>four</li>
            </ul>
        </div>
       </div>
    )

} 