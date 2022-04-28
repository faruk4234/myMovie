import AsyncStorage from '@react-native-async-storage/async-storage'

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('FAVORITES')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('FAVORITES', jsonValue)
  } catch (e) {
    // saving error
  }
}
