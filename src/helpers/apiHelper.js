import axios from 'axios';

class DriversHelper {
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

export default DriversHelper;
