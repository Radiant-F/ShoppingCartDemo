import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Products from '../components/Products';
import ShoppingCartIcon from './ShoppingCartIcon';
import {connect} from 'react-redux';
import styles from './styles/container';

export class CartScreen extends Component {
  render() {
    console.log(this.props.cartItems);
    return (
      <View style={{flex: 1}}>
        <View style={styles.mainBook}>
          <View style={styles.subMainBook}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
              <Image
                source={{
                  uri:
                    'https://toppng.com/uploads/preview/arrow-left-to-right-11550125569m6ffhoapdb.png',
                }}
                style={{height: 20, width: 20, marginLeft: 10}}
              />
            </TouchableOpacity>
            <Text style={styles.textBook}> Keranjang Saya </Text>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Cart')}>
            <ShoppingCartIcon />
          </TouchableOpacity>
        </View>
        {this.props.cartItems.length > 0 ? (
          <Products
            onPress={this.props.removeItem}
            products={this.props.cartItems}
          />
        ) : (
          <View style={style.container}>
            <Text style={style.textContainer}>Silakan Pilih Produk</Text>
          </View>
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartItems: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeItem: (product) =>
      dispatch({type: 'REMOVE_FROM_CART', payload: product}),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartScreen);

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    fontSize: 14,
    color: 'rgba(0,0,0,0.6)',
  },
});
