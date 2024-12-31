
const axios = require('axios');
const { captainModel } = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API; // Make sure this environment variable is set
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

  try {
    const response = await axios.get(url);

    if (response.data.status === 'OK') {
      const location = response.data.results[0].geometry.location; // Corrected property access

      return {
        lat: location.lat, // Corrected property name
        lng: location.lng, // Corrected property name
      };
    } else {
      throw new Error(`Unable to fetch coordinates: ${response.data.status}`); // Include status for better debugging
    }
  } catch (error) {
    console.error(`Error fetching coordinates for address "${address}":`, error.message); // Improved logging
    throw error;
  }
};

module.exports.getDistanceTime = async (origin, destination) =>{
    if(!origin || !destination){
        throw new Error('Origin and destination are required');
    }
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try{
      const response = await axios.get(url);
      if(response.data.status === 'OK'){
        if(response.data.rows[0].elements[0].status === 'ZERO_RESULTS'){
            throw new Error('No routes found');
        }
        return response.data.rows[0].elements[0];
      }else{
        throw new Error('Unable to fetch distance and time');
      }
    }catch(err){
        throw err;
    }
}  

module.exports.getCaptainsInTheRadius = async (ltd,lng, radius) =>{
    const captains = await captainModel.find({
        location :{
            
            $geoWithin:{
                $centerSphere:[[ltd,lng], radius/6371]
            }

        }
    });
    return captains;
}
