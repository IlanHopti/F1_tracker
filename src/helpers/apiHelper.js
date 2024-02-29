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
  static async GetGeoloc(latitude, longitude) {
    try {
      const res = await axios({
        method: 'get',
        url: `http://api.geonames.org/findNearbyPostalCodesJSON?lat=${latitude}&lng=${longitude}&username=chikendeath`,
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
          'x-rapidapi-host': x - rapidapi - host,
          'x-rapidapi-key': x - rapidapi - key,
        },
      });
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
