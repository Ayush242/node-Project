import { useContext, useState } from "react";
import AvatarPreview from "./AvatarPreview";
import { CoinsContext } from "./CoinManager";
import PropTypes from "prop-types";

function AvatarEdit() {
  const { decreaseCoins } = useContext(CoinsContext);
  const [avatarSource, setAvatarSource] = useState("/src/assets/Male-1.png");
  const [equipStates, setEquipStates] = useState({
    button1: true,
    button2: true,
    button3: true,
    button4: true,
    button5: true,
    button6: true,
    button7: true,
    button8: true,
  });

  const currentBalance = JSON.parse(
    localStorage.getItem("balance")
  ).currentBalance;

  const handleRewardBtn = (price, buttonId) => {
    // const rewardInfo = {

    // }
    if (currentBalance > price) {
      console.log("Yes");
      decreaseCoins(price);
      setEquipStates((prevEquipStates) => ({
        ...prevEquipStates,
        [buttonId]: false,
      }));

      setAvatarSource(urlToPass(buttonId));
    } else console.log("No");
  };

  function RewardButton(props) {
    return (
      <button
        className={`rewardBtn ${props.buttonId}`}
        onClick={() => handleRewardBtn(props.price, props.buttonId)}
      >
        Reward Yourself
      </button>
    );
  }
  function EquipButton(props) {
    return <button disabled={equipStates[props.buttonId]}>Equip Now</button>;
  }

  RewardButton.propTypes = {
    price: PropTypes.number.isRequired,
    buttonId: PropTypes.string.isRequired,
  };
  EquipButton.propTypes = {
    buttonId: PropTypes.string.isRequired,
  };

  //function to get the url of the asset brought --prototype
  const urlToPass = (buttonId) => {
    const url = window.getComputedStyle(
      document.querySelector(`.${buttonId}`).parentElement.parentElement
        .previousSibling
    ).backgroundImage;

    return url.slice(26, url.length - 2);
  };
  return (
    <div className="mainStatus-container">
      <div className="todoStatus-container avatarList-container">
        <div className="todoStatus-box avatarList-box">
          <div className="avatar">
            <div className="avatar-img img1"></div>
            <div className="avatar-info">
              <p className="avatar-name">Female 1</p>
              <p className="avatar-price">
                <span>50</span> coins
              </p>
              <div className="avatar-buttons">
                <RewardButton price={50} buttonId="button1" />
                <EquipButton buttonId="button1" />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-img img2"></div>
            <div className="avatar-info">
              <p className="avatar-name">Female 2</p>
              <p className="avatar-price">
                50 <span>coins</span>
              </p>
              <div className="avatar-buttons">
                <RewardButton price={50} buttonId="button2" />
                <EquipButton buttonId="button2" />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-img img3"></div>
            <div className="avatar-info">
              <p className="avatar-name">Female 3</p>
              <p className="avatar-price">
                50 <span>coins</span>
              </p>
              <div className="avatar-buttons">
                <RewardButton price={100} buttonId="button3" />
                <EquipButton buttonId="button3" />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-img img4"></div>
            <div className="avatar-info">
              <p className="avatar-name">Female 4</p>
              <p className="avatar-price">
                50 <span>coins</span>
              </p>
              <div className="avatar-buttons">
                <RewardButton price={150} buttonId="button4" />
                <EquipButton buttonId="button4" />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-img img5"></div>
            <div className="avatar-info">
              <p className="avatar-name">Male 1</p>
              <p className="avatar-price">
                50 <span>coins</span>
              </p>
              <div className="avatar-buttons">
                <RewardButton price={100} buttonId="button5" />
                <EquipButton buttonId="button5" />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-img img6"></div>
            <div className="avatar-info">
              <p className="avatar-name">Male 2</p>
              <p className="avatar-price">
                50 <span>coins</span>
              </p>
              <div className="avatar-buttons">
                <RewardButton price={100} buttonId="button6" />
                <EquipButton buttonId="button6" />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-img img7"></div>
            <div className="avatar-info">
              <p className="avatar-name">Male 3</p>
              <p className="avatar-price">
                50 <span>coins</span>
              </p>
              <div className="avatar-buttons">
                <RewardButton price={150} buttonId="button7" />
                <EquipButton buttonId="button7" />
              </div>
            </div>
          </div>
          <div className="avatar">
            <div className="avatar-img img8"></div>
            <div className="avatar-info">
              <p className="avatar-name">Male 4</p>
              <p className="avatar-price">
                50 <span>coins</span>
              </p>
              <div className="avatar-buttons">
                <RewardButton price={150} buttonId="button8" />
                <EquipButton buttonId="button8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <AvatarPreview source={avatarSource} />
    </div>
  );
}

export default AvatarEdit;
