import React, {Component} from 'react';
import styles from './styles/container';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {books} from '../Data';
import Products from '../components/Products';
import ShoppingCartIcon from './ShoppingCartIcon';
import {connect} from 'react-redux';
import back from '../assets/back.png';

class BooksScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={styles.headerBok}>
          <View style={styles.subMainBook}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image source={back} style={styles.back} />
            </TouchableOpacity>
            <Text style={styles.headerText}> Book </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}>
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        <Products products={books} onPress={this.props.addItemToCart} />
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
export default connect(null, mapDispatchToProps)(BooksScreen);
