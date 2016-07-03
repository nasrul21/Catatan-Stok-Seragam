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
  Picker,
  TouchableHighlight,
  Modal,
  ToastAndroid,
  Dimensions
} from 'react-native';

import { Tab, TabLayout } from 'react-native-android-tablayout';
import Icon from 'react-native-vector-icons/Ionicons';
var viewpager;
var {height, width} = Dimensions.get('window');
class CatatanStokBarang extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      pagePosition: 0,
      modalVisible: false,
      selectedMenu: "Pakaian"
    };
  }

  _screenWidth(){
    return width;
  }


  render() {
    // ToastAndroid.show(height + " " + width, ToastAndroid.LONG);
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#0288d1" />
        <View style={styles.toolbar} >
          <Text style={styles.toolbarTitle}>Catatan Stok </Text>
          <TouchableHighlight
            onPress={this._setModalVisible.bind(this, true)}
            style={{borderRadius: 10, marginLeft: 5}}
            >
            <View style={{backgroundColor: '#0288d1', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                {this.state.selectedMenu} &nbsp;
                <Icon name="md-arrow-dropdown" size={19}/>
              </Text>

            </View>
          </TouchableHighlight>
        </View>
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
        <Modal transparent={true}
          animationType='slide'
          visible={this.state.modalVisible}
          onRequestClose={() => {this._setModalVisible(false)}}>
          <View style={{backgroundColor: 'rgba(0,0,0,0.5)', flex: 1, alignItems: 'flex-end',flexDirection: 'row'}}>
            <View style={{ flex: 1 , padding: 10}}>
              <TouchableHighlight
                underlayColor='lightgray'
                style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginVertical: 5}}
                onPress={this._setSelectedMenu.bind(this, "Pakaian")}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>
                    Pakaian
                  </Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor='lightgray'
                style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginVertical: 5}}
                onPress={this._setSelectedMenu.bind(this, "Celana")}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>
                    Celana
                  </Text>
              </TouchableHighlight>
              <TouchableHighlight
                underlayColor='lightgray'
                style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginVertical: 5}}
                onPress={this._setSelectedMenu.bind(this, "Rok")}>
                  <Text style={{textAlign: 'center', fontSize: 20}}>
                    Rok
                  </Text>
              </TouchableHighlight>
              <View style={[styles.divider,{marginVertical: 5}]} />
              <TouchableHighlight
                underlayColor='lightgray'
                style={{backgroundColor: 'white', padding: 10, borderRadius: 10, marginVertical: 5}}
                onPress={this._setModalVisible.bind(this, false)}>
                  <Text style={{color: 'red', textAlign: 'center', fontSize: 20}}>
                    Cancel
                  </Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
      </View>
    );
  }

  _setPagePosition(e:Event){
    const pagePosition = e.nativeEvent.position;
    this.setState({pagePosition});
    this.viewpager.setPage(pagePosition);
  }

  _setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  _setSelectedMenu(item){
    this.setState({selectedMenu: item});
    this._setModalVisible(false);
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
    backgroundColor: '#03a9f4',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
  toolbarTitle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  divider:{
    height: 1.5,
    opacity: 0.5,
    backgroundColor: 'lightgray'
  },
  modal: {

  }
});

AppRegistry.registerComponent('CatatanStokBarang', () => CatatanStokBarang);
