import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import firebase from 'firebase'
import SliderNativeComponent from 'react-native/Libraries/Components/Slider/SliderNativeComponent'

export default class Profile extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: 'light',
      name: 'Loading Name',
      image: '',
      fetchUser: 0,
    }
  }
  fetchUser = async () => {
    let image, name, theme
    let dataAvailable = false
    this.setState({ fetchUser: 1 })
    // alert('fetching User')
    await firebase
      .database()
      .ref('/users/' + firebase.auth().currentUser.uid)
      .on('value', function (x) {
        // alert('reading DB')
        theme = x.val().current_theme
        name = `${x.val().first_name} ${x.val().last_name}`
        image = x.val().profile_picture
        dataAvailable = true
      })
    // if (theme === 'light' || theme === 'dark') {
    //   alert('setting states')
    //   this.setState({
    //     theme: theme,
    //     name: name,
    //     image: image,
    //   })
    // }
    this.setState()

    return (data = { image: image, name: name, theme: theme })
  }

  setState = () => {
    var data = this.fetchUser()
    this.setState({ image: data.image, name: data.name })
  }

  runFetchUser = () => {
    if (this.state.fetchUser === 0) {
      this.fetchUser()
    } else {
      this.setState({ fetchUser: this.state.fetchUser + 1 })
    }
  }

  componentDidMount() {
    this.runFetchUser()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>{this.state.name}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  x: {
    backgroundColor: 'red',
  },
})
