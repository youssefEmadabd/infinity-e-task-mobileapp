import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';
import ProfileView from "../components/profile-view";
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
export default function Profile({ navigation }) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <ProfileView></ProfileView>
      </SafeAreaView>
    </>
  )
}