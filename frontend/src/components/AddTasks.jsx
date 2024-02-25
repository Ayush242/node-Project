import { useEffect, useState } from "react"
import Card from "./Card";

export default function AddTasks() {
    const [isBtnClicked, setIsBtnClicked] = useState(false);
    const [isHabitClicked, setIsHabitClicked] = useState(false);
    const [isDailyClicked, setIsDailyClicked] = useState(false);
    const [isToDoClicked, setIsToDoClicked] = useState(false);
    const [isRewardClicked, setIsRewardClicked] = useState(false);
    
    function handleCancel() {
        setIsHabitClicked(false);
    }

  return (
    <div>
        <div className="button-container" onClick={() => {setIsBtnClicked(!isBtnClicked); setIsHabitClicked(false);}}>
            <button>Add Task</button>
        </div>
        {isBtnClicked && <div className="options">
            <div onClick={() => {setIsHabitClicked(true);}}>
                Habit
                {isHabitClicked && <Card type="Create Habit" handleCancel={handleCancel}/> }
            </div>
            <div onClick={() => setIsDailyClicked(true)}>
                Daily
                {isDailyClicked && <Card type="Create Daily"/>}
            </div>
            <div onClick={() => setIsToDoClicked(true)}>
                To Do
                {isToDoClicked && <Card type="Create To Do"/>}
            </div>
            <div onClick={() => setIsRewardClicked(true)}>
                Reward
                {isRewardClicked && <Card type="Create Reward"/>}
            </div>
        </div>}
    </div>
  )
}