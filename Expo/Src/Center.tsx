import { View } from 'react-native'
import React from 'react'

interface CenterProp{

}

const Center:React.FC<CenterProp> = ({children}) => {
  return (
    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    {children}
 </View>
  )
}

export default Center
