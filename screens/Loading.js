import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import firebase from 'firebase'

export default class Loading extends React.Component {
  checkIfLogedIn = () => {
    alert('Checking')
    firebase.auth().onAuthStateChanged((user) => {
      alert('Checking If Logged In')
      if (user) {
        this.props.navigation.navigate('DashboardScreen')
      } else {
        this.props.navigation.navigate('LoginScreen')
      }
    })
  }

  componentDidMount() {
    this.checkIfLogedIn()
    // alert('Working')
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading.......</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
})
