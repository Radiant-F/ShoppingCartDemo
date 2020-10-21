import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import styles from '../screen/styles/container';

export class Products extends Component {
  renderProducts = (products) => {
    console.log(products);
    return products.map((item, index) => {
      return (
        <View style={styles.listProducts}>
          <View style={styles.viewProducts}>
            <View>
              <Text style={{fontSize: 12}}> {item.name} </Text>
              <Text>Rp. {item.price}</Text>
            </View>
          </View>
          <Image
            style={{
              height: 90,
              width: null,
            }}
            source={{
              uri: item.image,
            }}
          />
          <TouchableOpacity
            onPress={() => this.props.onPress(item)}
            style={{
              flex: 1,
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <Image
              style={{
                width: 25,
                height: 25,
              }}
              source={{
                uri:
                  'https://img.icons8.com/nolan/96/3498db/add-shopping-cart.png',
              }}
            />
            <Text style={{marginLeft: 10}}>Beli</Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  render() {
    return (
      <View style={style.container}>
        {this.renderProducts(this.props.products)}
      </View>
    );
  }
}

export default Products;

const style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
