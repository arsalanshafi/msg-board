import { FontAwesomeIcon } from "react-fontawesome";
import { fa }  from "@fortawesome/fontawesome-free-solid";


function Input(){
    return(
        <div className="w-[50%] mx-auto">
            <input placeholder="enter your message" className="w-[50%] p-5 bg-gray-500 text-amber-300 rounded-2xl font-bold"></input>
            <button>
                <FontAwesomeIcon icon={fa-paper-plane}></FontAwesomeIcon>
            </button>
        </div>
    )
}


export default Input;