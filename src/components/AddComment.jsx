import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import VenueReducer from "../services/VenueReducer";
import VenueDataService from "../services/VenueDataService";

const AddUpdateVenue = () => {
  const [venue, dispatchVenue] = useReducer(VenueReducer, {
    data: {},
    isLoading: false,
    isSuccess: false,
    isError: false,
  });

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      dispatchVenue({ type: 'FETCH_INIT' });

      try {
        const result = await VenueDataService.listJsonVenues();
        const selectedVenue = result.data.find((item) => item.id === parseInt(id));

        if (selectedVenue) {
          dispatchVenue({
            type: 'FETCH_SUCCESS',
            payload: selectedVenue,
          });
        } else {
          dispatchVenue({ type: 'FETCH_FAILURE' });
          console.error(`Venue with id ${id} not found.`);
        }
      } catch (error) {
        dispatchVenue({ type: 'FETCH_FAILURE' });
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {venue.isLoading && <p>Loading...</p>}
      {venue.isError && <p>Error loading data.</p>}
      {venue.isSuccess && (
        <div>
          <h1>{venue.data.name}</h1>
          <p>Address: {venue.data.address}</p>
          {/* Diğer bilgileri buraya ekleyebilirsiniz */}
        </div>
      )}
    </div>
  );
};

export default AddUpdateVenue;
