import React from 'react'
import 'react-loading-skeleton/dist/skeleton.css' ;
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import SkeletonFoodCard from '../skeletons/SkeletonFoodCard';


// Filter Algorithm
function filterData(inputText, restaurants){
  const filteredData = restaurants.filter((restaurant) => restaurant?.data?.name?.toLowerCase()?.includes(inputText.toLowerCase()))
  return filteredData;
}
// props - properties (passing some data or properties into functional components)
// no key (not acceptable) <<<<<<<<< index key(last option) <<<< unique key (best practice)
const Body = () => {
  const [inputText, setInputText] = useState('') //two way data binding (reading n writing at the same time)
  const [allRestaurants, setAllRestaurants] = useState([])
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  /**
   * at any given point I want a list of all restaurants and also the filtered restaurants
   * so I need to maintain 2 separate lists of restaurants at all times
   *    -- all restro
   *    -- filtered restro
   */
  //empty dependency array => once after initial render
  //dependency array [searchText] => once after initial render + everytime after (my searchText changes)
  useEffect(() => {
    // API Call
      getRestaurant();
  }, []);
  // Async Await
  async function getRestaurant(){
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.29844139999999&lng=77.99313599999999&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()
    console.log(json)
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards)
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards)
  }

  // not render component (early return)
  if(!allRestaurants) return null;

  // Conditional rendering for shimmer UI or actual data UI
  // if my restaurant is empty => shimmer UI
  // if my restaurant has data => actual UI
    return  (
      <main>
        <div className="search-box">
          <div className="input-area">
            <input 
                type="text" 
                name="" 
                id="" 
                className="search-input" 
                value={inputText} 
                onChange= {(e)=>{setInputText(e.target.value)} }
            />
            <button 
              className="clear-btn"
              onClick={() => {
                //need to filter data on click of this search button
                setInputText('')
                const data = filterData(inputText, allRestaurants)
                setFilteredRestaurants(data)
            }}>
                x
            </button>
          </div>
            <button 
                className="btn btn-secondary" 
                onClick={() => {
                    //need to filter data on click of this search button
                   const data = filterData(inputText, allRestaurants)
                   setFilteredRestaurants(data)
                }}>
                Search
            </button>
        </div>
        <div className="restaurant-grid">

          {
            
            allRestaurants.length === 0 ?
            <>
            <SkeletonFoodCard/>
            <SkeletonFoodCard/>
            <SkeletonFoodCard/>
            <SkeletonFoodCard/>
            <SkeletonFoodCard/>
            <SkeletonFoodCard/>
            <SkeletonFoodCard/>
            <SkeletonFoodCard/>
            </>
            : 
            filteredRestaurants?.length === 0 ?  <h1>No restaurants found</h1> :
            filteredRestaurants.map(restaurant => <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>)
          }
        </div>
      </main>
    )
};

  export default Body;
  /*
    INTERVIEW QUESTION
    Q: Why do we need state variable when we have local vairables?
    A: Suppose we are using a local variable 
        let myNum = 23
       And someone updated this myNum variable at some point in the code, React would never know that it needs to update that value on the DOM. Because React does not keep a track of local variable and thus it does not sync them with the UI. That is why we create state variables using useState hook when we want React to keep a track of them and update it/render it on the UI accrodingly
*/