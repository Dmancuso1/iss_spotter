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