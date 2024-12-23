import { StackNavigationProp } from '@react-navigation/stack';


import { RouteProp } from '@react-navigation/native';

export type AuthParamList={
    Login:undefined;
    SignUp:undefined
}
export type AuthNavRoute<T extends keyof AuthParamList>={
    navigation:StackNavigationProp<AuthParamList,T >,route:RouteProp<AuthParamList,T>
  }