import { FaPaperPlane } from "react-icons/fa"


function clickHandler(){
    console.log("pressed")
}

function Input(){
    return(
        <div className="w-[50%] mx-auto flex">
            <input placeholder="enter your message" className="w-[90%] p-5 bg-gray-500 text-amber-300  rounded-bl-2xl font-bold"></input>
            <label htmlFor="sub"><FaPaperPlane size={70} className="bg-gray-500 p-4  rounded-br-2xl "/></label>
            <input type="submit" id="sub" className="hidden" onClick={clickHandler}></input>
            

        </div>
    )
}


function Icon({icon}){
    <div className=" bg-gray-500 rounded-br-2 rounded-tr-2xl">
        {icon}
    </div>
}

export default Input;