import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Products from '../components/Products';
import ShoppingCartIcon from './ShoppingCartIcon';
import {electronics} from '../Data';
import {connect} from 'react-redux';
import styles from './styles/container';
import back from '../assets/back.png';

class ElectronicsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerEle}>
          <View style={styles.subMainBook}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={back} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.headerText}>Elektronik</Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}>
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        <Products products={electronics} onPress={this.props.addItemToCart} />
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (product) =>
      dispatch({type: 'ADD_TO_CART', payload: product}),
  };
};

export default connect(null, mapDispatchToProps)(ElectronicsScreen);
