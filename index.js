// https://web.compass.lighthouselabs.ca/days/w02d4/activities/895
// this will require and run our MAIN function.

// index.js


const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes  } = require('./iss');



// The code below is temporary (for testing) and can be commented out.

//////////////////////////////////////////////
fetchMyIP((error, ip) => {
  if (error) {
    console.log(`🚫It didn't work! ${error}`);
    return;
  }
  console.log('✅ Returned IP:' , ip);
});


// The code below is temporary (for testing) and can be commented out.

//////////////////////////////////////////////
const testIP = '184.146.103.194';
fetchCoordsByIP(testIP, (error, coords) => {
  if (error) {
    console.log(`🚫It didn't work! ${error}`);
    return;
  }

  console.log('✅ Returned Coords:' , coords);
});

// The code below is temporary (for testing) and can be commented out.

//////////////////////////////////////////////

const exampleCoords = { latitude: '43.6', longitude: '-79.3' };

fetchISSFlyOverTimes(exampleCoords, (error, issData) => {
  if (error) {
    console.log(`🚫It didn't work! , ${error}`);
    return;
  }

  console.log('✅ Returned Coords:' , issData);
});
