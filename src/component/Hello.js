import Welcome from "./Welcome";
import World from "./World";
import styles from "./Hello.module.css";
import {useState} from "react"

export default function Hello() {
    const [name,setName] = useState("Mike");


    return <div>
        <h1>state</h1>
        <h2 id="name">{name}</h2>
        <button onClick={()=>{
            setName(name === "Mike"? "Jane":"Mike")
        }}>Change</button>
    </div>
}

