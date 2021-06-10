import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';
import LoginForm  from '../components/login-form';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    width: '80%',
    alignItems: 'center',
  }
})
import { Button } from 'react-native-paper'
export default function Login({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.loginContainer}>
          <LoginForm navigation={navigation}/>
        </View>
        <Text>or</Text>
        <Button onPress={()=>navigation.navigate("Register")} mode="contained">Register</Button>
      </SafeAreaView>
    </>
  )
}