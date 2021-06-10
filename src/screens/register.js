import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
} from 'react-native';
import RegisterForm  from '../components/register-form';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  registerContainer: {
    width: '80%',
    alignItems: 'center',
  }
})
export default function Register({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.registerContainer}>
          <RegisterForm navigation={navigation}/>
        </View>
      </SafeAreaView>
    </>
  )
}