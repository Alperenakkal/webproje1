import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Rating from "./Rating";
import FoodAndDrinkList from "./FoodAndDrinkList";
import Header from "./Header";
import HourList from "./HourList";
import CommentList from "./CommentList";
import VenueReducer from "../services/VenueReducer";
import VenueDataService from "../services/VenueDataService";
import React from "react";
import AdminButton from "./AdminButton"; 
 




function AddUpdateVenue() {

  const [venue, dispatchVenue] = React.useReducer(VenueReducer, {
    data: [],
    isLoading: false,
    isSuccess: false,
    isError: false,
  });
  const { id } = useParams();
  React.useEffect(() => {
    dispatchVenue({ type: "FETCH_INIT" });
    VenueDataService.listJsonVenues()
      .then((result) => {
        dispatchVenue({
          type: "FETCH_SUCCESS",
          payload: result.data,
        });
      })
      .catch(dispatchVenue({ type: "FETCH_FAILURE" }));
  }, [id]);
 

  const location = useLocation();
  const buttonText = location.state?.buttonText || "Default Button Text";
  if(buttonText=="Mekan Ekle"){
    return (
    
    <>
       <Header
      
        headerText={"Yeni mekan ekle"}
      />
        <div className="row">
          <div className="col-xs-12 col-md-10">
            <form
              className="form-horizontal"
              id="mekanekle"
             
            >
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Mekan Adı:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="mekanadı"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Mekan Adresi:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="mekanadresi"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  İmkanlar:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="imkanlar"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Enlem:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="enlem"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Boylam:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="boylam"
                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Günler-1:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="gunler-1"
                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Açılış-1:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="acilis-1"
                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapanış-1:
                </label>
                <div className="col-xs-12 col-sm-10 checkbox">
                  <input
                    className="form-control"
                    name="kapanis-1"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapalı-1:
                </label>
                <div className="col-xs-12 col-sm-9 checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="kapali2"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Gunler-2:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="gunler2"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Açılış 2 :
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="acilis2"
                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapanış-2:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="kapanis2"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapalı 2:
                </label>
                <div className="col-xs-12 col-sm-9 checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="kapali2"
                  />
                </div>
              </div>
            
              <div className="col-xs-12 col-sm-12">
          <div className="row">
            <div className="column pull-right">
              <AdminButton
                name="Mekanı Ekle"
                type="primary"
               
              />
            </div>
          </div>
        </div>
            
            </form>
          </div>
        </div>
    </>
  );}
  if (venue.isSuccess) {
  if(buttonText=="Güncelle"){
    return (
    
    <>
       <Header
      
      headerText={`${venue.data[id - 1].name} Mekanı Güncelle`}
        
      />
        <div className="row">
          <div className="col-xs-12 col-md-10">
            <form
              className="form-horizontal"
              id="mekanekle"
             
            >
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Mekan Adı:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="mekanadı"
                    value={venue.data[id-1].name}
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Mekan Adresi:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="mekanadresi"
                    value={venue.data[id-1].address}                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  İmkanlar:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="imkanlar"
                    value={venue.data[id-1].foodanddrink}                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Enlem:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="enlem"
                    value={venue.data[id-1].coordinates[0]}                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Boylam:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="boylam"
                    value={venue.data[id-1].coordinates[1]}                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Günler-1:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="gunler-1"
                    value={venue.data[id-1].hours[0].days}                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Açılış-1:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="acilis-1"
                    value={venue.data[id-1].hours[0].open}                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapanış-1:
                </label>
                <div className="col-xs-12 col-sm-10 checkbox">
                  <input
                    className="form-control"
                    name="kapanis-1"
                    value={venue.data[id-1].hours[0].close}                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapalı-1:
                </label>
                <div className="col-xs-12 col-sm-9 checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="kapali1"
                    defaultChecked={true}
                    
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Gunler-2:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="gunler2"
                    value={venue.data[id-1].hours[1].days}                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Açılış 2 :
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="acilis2"
                    value={venue.data[id-1].hours[1].open}                   
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapanış-2:
                </label>
                <div className="col-xs-12 col-sm-10">
                  <input
                    className="form-control"
                    name="kapanis2"
                    value={venue.data[id-1].hours[1].close}                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-xs-12 col-sm-2 control-label">
                  Kapalı 2:
                </label>
                <div className="col-xs-12 col-sm-9 checkbox">
                  <input
                    type="checkbox"
                    className="checkbox"
                    name="kapali2"
                  />
                </div>
              </div>
            
              <div className="col-xs-12 col-sm-12">
          <div className="row">
            <div className="column pull-right">
              <AdminButton
                name="Mekanı Ekle"
                type="primary"
               
              />
            </div>
          </div>
        </div>
            
            </form>
          </div>
        </div>
    </>
  );}}
  else return <Header/>;
  };
  
  export default AddUpdateVenue;
  