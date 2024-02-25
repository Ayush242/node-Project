import { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

export default function Collection({type}){
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    return(
        <div>
            <h2>{type}</h2>
            <div className="wrapper">
                <div className="fields">
                    <input type="text" placeholder={`Add a ${type.slice(0, type.length - 1)}`} />
                    <button onClick={() => setCreate(true)}>
                        +
                        {create && <Card type={`Create ${type.slice(0, type.length - 1)}`}/>}
                    </button>
                    <button onClick={() => setEdit(true)}>
                        -
                        {edit && <Card type={`Edit ${type.slice(0, type.length - 1)}`}/>}
                    </button>
                    <button>Edit</button>
                </div>

            </div>

        </div>
    )
}