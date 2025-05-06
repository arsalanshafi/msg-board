import { FaPaperPlane } from "react-icons/fa"
import { useState } from "react"




function Input() {

    const [message, setMessage] = useState("");

    function clickHandler(msg) {
        return (msg) => {
            setMessage(msg.target.value);
            // console.log(message)
        }
    }

    async function postMessage() {
        if (!message) {
            console.log("message is empty");
            return
        }
        console.log("sending message")

        var payload = { "body": `${message}` };
        // var data = new FormData();
        // data.append("json",JSON.stringify(payload));
        // data.append("json",payload);

        try {
            const result = await fetch("http://localhost:5000/msg/api/upload", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(payload),
            }
            )
            console.log(result);
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <div className="w-[50%] mx-auto flex">
            <input placeholder="enter your message" className="w-[90%] p-5 bg-gray-500 text-amber-300  rounded-bl-2xl font-bold" onChange={clickHandler(event)}></input>
            <label htmlFor="sub"><FaPaperPlane size={70} className="bg-gray-500 p-4  rounded-br-2xl " /></label>
            <input type="submit" id="sub" className="hidden" onClick={postMessage}></input>
        </div>
    )
}


// function Icon({icon}){
//     <div className=" bg-gray-500 rounded-br-2 rounded-tr-2xl">
//         {icon}
//     </div>
// }

export default Input;