import AsyncStorage from '@react-native-async-storage/async-storage'

// eslint-disable-next-line consistent-return
export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem('FAVORIES')
    return jsonValue != null ? JSON.parse(jsonValue) : null
  } catch (e) {
    // error reading value
  }
}

export const storeData = async (value) => {
  try {
    const jsonValue = JSON.stringify(value)
    await AsyncStorage.setItem('FAVORIES', jsonValue)
  } catch (e) {
    // saving error
  }
}
