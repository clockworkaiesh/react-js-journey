import { useEffect,useState} from "react";
import {useParams} from "react-router-dom" 
import { IMG_CDN_URL } from "../config.js";
const RestaurantDetail=()=>{
    const params=useParams();
    const {id} =params; //how to read a dynamic URL params
 
    const [restaurant,setRestaurant]=useState({})
    useEffect(()=>{
        getRestaurantsInfo();
    },[]);
    async function getRestaurantsInfo(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=30.3355531&lng=76.3849589&menuId=101471")
        const json=await data.json()
        setRestaurant(json.data)
    }
    return (
        <>
        <h1> Welcome to restaurant :{id} </h1>
        <h2> {restaurant?.name} </h2>
        <img src={IMG_CDN_URL+restaurant?.cloudinaryImageId} />
        <h3> {restaurant?.area} </h3> 
        <h3> {restaurant?.avgRating} stars </h3>  
        <h3> {restaurant?.costForTwoMsg} </h3>      
        <div>
            <ul>
                {Object.values(restaurant?.menu?.items).map((item)=>(
                    <li key={item?.id}> {item?.name} </li>
                ))}
            </ul>
        </div>
        </>
    )
}
export default RestaurantDetail;