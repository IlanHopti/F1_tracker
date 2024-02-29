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

const removeValue = async key => {
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

export {storeData, getData, removeValue, checkUser, userExists};
