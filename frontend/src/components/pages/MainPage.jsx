import "../../style/navbar.css";
import "../../style/mainTodo.css";
import { useNavigate } from "react-router-dom";
import AvatarPreview from "./AvatarPreview";

function MainPage() {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate("/avatar/edit", {
      state: {
        avatar: "",
      },
    });
  };
  return (
    <div className="mainStatus-container">
      <div className="todoStatus-container">
        <div className="todoStatus-box">
          <div className="todosDiv">
            <p className="todoHeading">Todo&rsquo;s</p>
            <p className="todoStatus">
              <span className="remaining">2</span> remaining
            </p>
          </div>
          <div className="habitsDiv">
            <p className="habitsHeading">Habits</p>
            <p className="habitsStatus">
              <span className="remaining">2</span> remaining
            </p>
          </div>
          <div className="dailiesDiv">
            <p className="dailiesHeading">Dailies</p>
            <p className="dailiesStatus">
              <span className="remaining">2</span> remaining
            </p>
          </div>
          <div className="rewardsDiv">
            <p className="rewardsHeading">Rewards</p>
            <p className="rewardsStatus">
              <span className="remaining">2</span> remaining
            </p>
          </div>
        </div>
        <div className="todoContinue-btn">
          <button>Continue Working Now --→</button>
        </div>
      </div>
      <AvatarPreview handle={handleEdit} source="/src/assets/Male-1.png" />
    </div>
  );
}

export default MainPage;
