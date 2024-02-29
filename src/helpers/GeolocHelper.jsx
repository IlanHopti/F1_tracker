import axios from 'axios';

const GetGeoloc = async (latitude, longitude) => {
  const res = await axios({
    method: 'get',
    url: `http://api.geonames.org/findNearbyPostalCodesJSON?lat=${latitude}&lng=${longitude}&username=chikendeath`,
  });

  return res.data;
};

export default {GetGeoloc};
