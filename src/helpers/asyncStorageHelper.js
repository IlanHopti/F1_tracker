import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value, key) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

const getData = async key => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
  }
};

const removeData = async key => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // remove error
  }

  console.log('User removed.');
};

const checkUser = async () => {
  const user = await getData('user');
  return !!user;
};

const userExists = async (username, password) => {
  const user = await getData('user');
  if (!user) {
    return false;
  }

  if (user.username === username && user.password === password) {
    console.log('user exists');
    return true;
  }
};

const getKeys = async () => {
  try {
    return await AsyncStorage.getAllKeys();
  } catch (e) {
    console.log('error', e);
  }
};

const getMultiple = async keys => {
  try {
    const test = await AsyncStorage.multiGet(keys);
    return test.map(item => {
      return JSON.parse(item[1]);
    });
  } catch (e) {
    console.log('error', e);
  }
};

export {
  storeData,
  getData,
  removeData,
  checkUser,
  userExists,
  getKeys,
  getMultiple,
};
