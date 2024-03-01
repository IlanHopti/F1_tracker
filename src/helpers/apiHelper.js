import axios from 'axios';

export class DriversHelper {
  static async getDrivers() {
    try {
      return await axios
        .get('https://api.openf1.org/v1/drivers?session_key=7765')
        .then(response => {
          console.log('setting drivers api');
          console.log('api response', process.env.API_KEY);
          return response.data;
        });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getDriverDetails(driverLastName) {
    try {
      return await axios
        .get(
          `https://v1.formula-1.api-sports.io/drivers?search=${driverLastName}`,
          {
            headers: {
              'x-rapidapi-host': process.env.API_HOST,
              'x-rapidapi-key': process.env.API_KEY,
            },
          },
        )
        .then(response => {
          // console.log('setting drivers details api');
          // console.log('api response', process.env.API_KEY);
          return response.data.response;
        });
    } catch (error) {
      console.error(error);
      return [];
    }
  }

  static async getDriversRanking() {
    try {
      return await axios
        .get(
          'https://v1.formula-1.api-sports.io/rankings/drivers?season=2023',
          {
            headers: {
              'x-rapidapi-host': process.env.API_HOST,
              'x-rapidapi-key': process.env.API_KEY,
            },
          },
        )
        .then(response => {
          // console.log('setting drivers ranking api');
          // console.log('api response', process.env.API_KEY);
          return response.data.response;
        });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}

export class TeamsHelper {
  static async getTeams() {
    try {
      return await axios
        .get('https://v1.formula-1.api-sports.io/teams', {
          headers: {
            'x-rapidapi-host': process.env.API_HOST,
            'x-rapidapi-key': process.env.API_KEY,
          },
        })
        .then(response => {
          console.log('setting teams api');
          console.log('api response', process.env.API_KEY);
          return response.data.response;
        });
    } catch (error) {
      console.error(error);
      return [];
    }
  }
}
