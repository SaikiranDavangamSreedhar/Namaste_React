import { CDN_URL } from "../utils/constants";

const RestuarantCard = (props) => {
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwoString,
        deliveryTime
    } = resData?.data
    return (
        <div className="res-card" style={{
            backgroundColor: "#f0f0f0"}}>
                <img className="res-logo" alt ="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} Rating</h4>
            <h5>{costForTwoString}</h5>
            <h5>{deliveryTime} minutes</h5>
        </div>
    )
};


export default RestuarantCard;