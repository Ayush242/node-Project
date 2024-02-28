import { useState, useEffect } from "react";
import PropTypes from "prop-types";
function AvatarPreview(props) {
  const [avatar, setAvatar] = useState(props.source);
  useEffect(() => {
    setAvatar(props.source);
  }, [props.source]);

  const backgroundStyle = {
    backgroundImage: `url(${avatar})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "top",
    backgroundSize: "contain",
  };

  return (
    <div
      className="avatarPreview-container"
      style={backgroundStyle}
      onClick={props.handle}
    ></div>
  );
}

AvatarPreview.propTypes = {
  source: PropTypes.string.isRequired,
  handle: PropTypes.func,
};

export default AvatarPreview;
