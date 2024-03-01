import axios from 'axios';

export class DriversHelper {
  static async getDrivers() {
    try {
      return await axios
        .get('https://api.openf1.org/v1/drivers?session_key=latest')
        .then(response => {
          console.log('setting drivers api');
          // console.log('api response', response.data);
          return response.data;
        });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export class GeolocHelper {
  static async GetGeoloc(myLocation) {
    try {
      const res = await axios({
        method: 'get',
        url: `http://api.geonames.org/findNearbyPostalCodesJSON?lat=${myLocation.lat}&lng=${myLocation.long}&username=testeurdapi`,
      });
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async GetGeolocByName(name) {
    try {
      const res = await axios({
        method: 'get',
        url: `http://api.geonames.org/findNearbyPostalCodesJSON?placename=${name}&username=testeurdapi`,
      });
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export class FormulaHelper {
  static async GetRaces() {
    try {
      const res = await axios({
        method: 'get',
        url: 'https://v1.formula-1.api-sports.io/circuits',
        headers: {
          'x-rapidapi-host':
            'v1.formula-1.api-sports.io' /*process.env.API_HOST*/,
          'x-rapidapi-key':
            '72768840512e177b55720b201f61761c' /*process.env.API_KEY*/,
        },
      });
      return res.data?.response;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
