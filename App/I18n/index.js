import I18n from 'react-native-i18n'

// This function is a wrapper to avoid exception wich leads in a crash
const translateOrFallback = msg => {
  let localMsg = msg
  try{
    localMsg = I18n.t(msg)
  }catch(e){
    if(__DEV__){
      console.log(`translation "${msg}" does not exists in translations files`)
    }
  }

  return localMsg
}

export default {
  ...I18n,
  t: translateOrFallback
}
