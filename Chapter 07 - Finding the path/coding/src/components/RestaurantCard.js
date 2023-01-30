import { IMG_CDN_URL } from "../constants";
// object destructuring on the fly
const RestaurantCard = ({name, cuisines, cloudinaryImageId, lastMileTravelString}) => { //data destructuring instead of using props keyword
  return (
      <div className="card">
        <img src={IMG_CDN_URL+cloudinaryImageId} alt="" />
        <div className="content">
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{lastMileTravelString}...</h4>
        </div>
      </div>
    );
  };

export default RestaurantCard