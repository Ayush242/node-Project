import { useEffect, useState } from "react"
import "../style/cardStyle.css"

export default function Card({type, handleCancel}){
    let cancel = false;    
    return (
        <div className="card_wrapper" >
            <div className="card_container">
                <div className="card_header">
                    <div className="type">{type}</div>
                    <div className="card_buttons">
                        <button className="card_cancel" onClick={handleCancel}>Cancel</button>
                        <button className="card_create">Create</button>
                    </div>
                </div>
                <div className="card_content">
                    <div className="title">
                        <div>Title:</div>
                        <input type="text" placeholder="Add a title" />
                    </div>
                    <div className="desc">
                        <div>Description:</div>
                        <input type="text" placeholder="Add a description" />
                    </div>
                </div>
            </div>
        </div>
    )
}