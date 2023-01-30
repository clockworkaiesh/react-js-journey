import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants';
import SkeletonRestroDetailCard from '../skeletons/SkeletonRestroDetailCard';
const RestaurantMenu = () => {
    const params = useParams();
    const {id} = params

    const [restaurantMenu, setRestaurantMenu] = useState(null)
    useEffect(() => {
     getRestaurantInfo();
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch("https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId="+id)
        const json = await data.json()
        console.log(json)
        setRestaurantMenu(json.data)
    }
    // early return
  return  (
    <div className='page-container'>
      <div className='menu-grid'>
        {
          (!restaurantMenu) ?  
          <SkeletonRestroDetailCard/>
          :
          <>
          <div className='restro-details'>
            <h1>Restaurant id: {id}</h1>
            <div className="poster">
              <img src={IMG_CDN_URL+restaurantMenu?.cloudinaryImageId} alt="" />
              <h5 className='rating'>★ {restaurantMenu?.avgRating}/5</h5>
            </div>
            <div className="more-info">
            <h2>{restaurantMenu?.name}</h2>
              <ul>
                <li><b>Area :</b>  {restaurantMenu?.area}</li>
                <li></li>
                <li></li>
              </ul>
            </div>
          </div>
          <div className='menu'>
            <h2>Menu</h2>
            <ul className='menu-list'>
                {restaurantMenu?.menu?.items && Object.values(restaurantMenu?.menu?.items).map((item) => (
                  <li key={item?.id}> 
                    <span className='icon'>🍴︎</span> 
                    <span className='item-name'>{item?.name}</span>
                  </li>
                ))}
            </ul>
          </div>

          </>
        }
      </div> 
    </div>
  )
}

export default RestaurantMenu