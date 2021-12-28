import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'

import PostCard from './PostCard'

let posts = require('./Posts.json')

export default class Feed extends React.Component {
  renderItem = ({ item: post }) => {
    return <PostCard post={post} navigation={this.props.navigation} />
  }

  keyExtractor = (item, index) => index.toString()

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <FlatList
          keyExtractor={this.keyExtractor}
          data={posts}
          renderItem={this.renderItem}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0.935,
    backgroundColor: '#2b2b2b',
  },
  droidSafeArea: {
    marginTop:
      Platform.OS === 'android' ? StatusBar.currentHeight : RFValue(35),
  },
})
