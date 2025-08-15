//import react and usestate libraries
import React, {useEffect, useState} from "react";

//import axios to make HTTP requests with springboot axios is specifically to comm with springboot
import axios from "axios";

//Create functional component called RestaurantList:
const RestaurantList = () =>{

    //we create a state variable restaurant to store the data from backend
    // initially its an empty state
    const[restaurant, setRestaurant] = useState([]);

    //we use useEffect to fetch data from backend:
    useEffect( () =>{

        //axios GET request to '/restaurant' endpoint
        //calls localhost:8080/restaurant 
        axios.get("/restaurant").then(response =>{

            //take this as an if statement if success then:
            setRestaurant(response.data );
        })
        .catch(error =>{
            //ELSE
            console.error("Error fetching restaurants:", error);
        });
    } , []);
    


    //Now we return the JSX ui to render
    return(
        <div style={{padding:"1rem"}}>
            <h2>All Restaurants</h2>

            <ul>
                {restaurant.map( (res) =>(
                    //each li must have a unique key prop, so we use restaurant id

                    <li key = {res.id}>
                        <h3>{res.name}</h3>

                    </li>
                ) )}
            </ul>

        </div>
    );
}; export default RestaurantList;
