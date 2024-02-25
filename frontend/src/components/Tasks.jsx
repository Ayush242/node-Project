import AddTasks from "./AddTasks";
import Collection from "./Collection";

export default function Tasks() {
    const types = ["Habits", "Dailies", "To Do's", "Rewards"];
    return (
        <>
            <h3>Tasks</h3>
            <AddTasks />
            {types.map((type, index) => {
                    return <Collection type={type} key={index} className=""/>
                }
            )}

        </>
    )
}