import Header from "./Header"; 
import InputWithLabel from "./InputWithLabel"; 
import VenueList from "./VenueList"; 
import VenueReducer from "../services/VenueReducer"; 
import React from "react"; 
import VenueDataService from "../services/VenueDataService"; 
import Venue from "./Venue";  
import AdminButton from "./AdminButton";
import { NavLink, Navigate } from "react-router-dom"; 
 
 
  const Admin = () => { 
    

 
    const [venues,dispatchVenues] = React.useReducer(VenueReducer, { 
      data:[]   
    }); 
 
    React.useEffect(() => {
      const fetchData = async () => {
        dispatchVenues({ type: "FETCH_INIT" });
        try {
          const result = await VenueDataService.listJsonVenues();
      
          dispatchVenues({
            type: "FETCH_SUCCESS",
            payload: result.data 
          });
        } catch (error) {
          dispatchVenues({ type: "FETCH_FAILURE" });
          console.error("Error fetching data:", error);
        }
      };
  
      fetchData();
    }, []);
    
 
    
 
  return ( 
     
    <div > 
       
      <Header 
        headerText="Yönetici" 
        motto="Mekanlarınızı Yönetin!" 
      /> 
     
       
 
      <div> 
        
      <VenueList key={venues.id} venues={venues.data} admin={true} /> 
      </div> 
      <div>
      
      </div>
       
 
       
 
    </div> 
     
     
 
  ); 
} 
 
export default Admin;
