import React, {Component} from 'react';
import {
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import {connect} from 'react-redux';
import styles from './styles/container';

const ShoppingCartIcon = (props) => (
  <View style={{padding: 5}}>
    <View style={styles.shopCart}>
      <Text style={styles.shopCartText}>{props.cartItems.length}</Text>
    </View>
    <TouchableOpacity>
      <Image
        source={{
          uri: 'https://img.icons8.com/material-sharp/2x/shopping-cart.png',
        }}
        style={{height: 30, width: 30, tintColor: '#fff'}}
      />
    </TouchableOpacity>
  </View>
);

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

export default connect(mapStateToProps)(ShoppingCartIcon);
