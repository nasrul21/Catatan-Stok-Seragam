/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  StatusBar,
  ToolbarAndroid,
  ViewPagerAndroid,
  Picker
} from 'react-native';

import { Tab, TabLayout } from 'react-native-android-tablayout';
import Icon from 'react-native-vector-icons/Ionicons';
var viewpager;
class CatatanStokBarang extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pagePosition: 0
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0288d1" />
        <ToolbarAndroid style={styles.toolbar} 
          title='Catatan Stok Barang'
          titleColor='white'>
        </ToolbarAndroid>
        <View style={styles.divider} />
        <TabLayout style={{borderWidth: 5, borderColor: 'red', backgroundColor:'#eeeeee'}}
          selectedTabIndicatorColor='#03a9f4'
          selectedTab={this.state.pagePosition}
          onTabSelected={this._setPagePosition.bind(this)}
          tabMode='scrollable'>
          <Tab name="Putih"/>
          <Tab name="Merah"/>
          <Tab name="Biru"/>
          <Tab name="Abu"/>
          <Tab name="Pramuka"/>
          <Tab name="Hitam"/>
          <Tab name="Hijau"/>
        </TabLayout>
        <View style={styles.divider} />
        <ViewPagerAndroid 
          initialPage={0}
          style={{flex: 1}}
          ref={viewpager => {this.viewpager = viewpager;}}
          onPageSelected={this._setPagePosition.bind(this)}>
          <View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
          <View>
            <Text style={styles.welcome}>
              Welcome to React Native!
            </Text>
          </View>
        </ViewPagerAndroid>
      </View>
    );
  }

  _setPagePosition(e:Event){
    const pagePosition = e.nativeEvent.position;
    this.setState({pagePosition});
    this.viewpager.setPage(pagePosition);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: 'red',
    marginBottom: 5,
  },
  toolbar:{
    height: 56,
    backgroundColor: '#03a9f4'
  },
  divider:{
    height: 1.5,
    opacity: 0.5,
    backgroundColor: 'lightgray'
  }
});

AppRegistry.registerComponent('CatatanStokBarang', () => CatatanStokBarang);
