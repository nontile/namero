import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import { Icon } from 'react-native-elements'

const RoundButton = (props) => (
    <View style={styles.screen}>
      <TouchableOpacity
        onPress={props.onClick}
        style={styles.button}>
        <Icon style={styles.text}
            //   raised
            name='search'
            type='font-awesome'
            color='#fff' />
      </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    screen: {
      width: 70,
      height: 70,
      borderRadius: 35,
      backgroundColor: 'rgba(20,174,255,0.41)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      borderRadius: 25,
      backgroundColor: 'rgba(20,174,255,0.91)',
    },
    text: {
      color: '#fff',
      fontWeight: 'bold'
    }
})
export default RoundButton