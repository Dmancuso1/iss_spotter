// https://web.compass.lighthouselabs.ca/days/w02d4/activities/895
// this will require and run our MAIN function.

// index.js


const { fetchMyIP } = require('./iss');


fetchMyIP((error, ip) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }
  console.log('It worked! Returned IP:' , ip);
});


// The code below is temporary and can be commented out.
const { fetchCoordsByIP } = require('./iss');

fetchCoordsByIP('184.146.103.194', (error, coords) => {
  if (error) {
    console.log("It didn't work!" , error);
    return;
  }

  console.log('It worked! Returned Coords:' , coords);
});


