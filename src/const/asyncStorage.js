import AsyncStorage from '@react-native-async-storage/async-storage'

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('KEY1')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}

export const storeData = async (value) => {
  try {
    await AsyncStorage.setItem('KEY1', value)
  } catch (e) {
    // saving error
  }
}
