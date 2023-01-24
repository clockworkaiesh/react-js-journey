import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";



// Filter Algorithm
function filterData(inputText, restaurants){
  const filteredData = restaurants.filter((restaurant) => restaurant.data.name.includes(inputText))
  return filteredData;
}




// props - properties (passing some data or properties into functional components)
// no key (not acceptable) <<<<<<<<< index key(last option) <<<< unique key (best practice)
const Body = () => {
  const [inputText, setInputText] = useState('') //two way data binding (reading n writing at the same time)
  const [restaurants, setRestaurants] = useState(restaurantList)
  function clearInput(){
    setInputText('')
  }
  
    return (
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
              onClick={clearInput}>
                x
            </button>
          </div>

            <button 
                className="btn btn-secondary" 
                onClick={() => {
                    //need to filter data on click of this search button
                   const data = filterData(inputText, restaurants)
                   setRestaurants(data)
                }}>
                Search
            </button>
        </div>
        <div className="restaurant-grid">
          {
            restaurants.map(restaurant => <RestaurantCard {...restaurant.data}/>)
          }
        </div>
      </main>
    );
  };

  export default Body;

  /*
    INTERVIEW QUESTION
    Q: Why do we need state variable when we have local vairables?
    A: Suppose we are using a local variable 
        let myNum = 23
       And someone updated this myNum variable at some point in the code, React would never know that it needs to update that value on the DOM. Because React does not keep a track of local variable and thus it does not sync them with the UI. That is why we create state variables using useState hook when we want React to keep a track of them and update it/render it on the UI accrodingly


*/