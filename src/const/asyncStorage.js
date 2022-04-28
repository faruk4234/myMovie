import AsyncStorage from '@react-native-async-storage/async-storage'

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('KE')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('KE', value)
  } catch (e) {
    // saving error
  }
}
