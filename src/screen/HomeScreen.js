import React, {Component} from 'react';
import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles/container';
import ShoppingCartIcon from './ShoppingCartIcon';
import manga from '../assets/manga.jpg';

export class HomeScreen extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <View style={styles.header}>
            <Text style={styles.headerText}> Offline Shop </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Cart')}>
              <ShoppingCartIcon />
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', margin: 10}}>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={styles.textCategory}>Elektronik</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={styles.textCategory}>Manga</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.category}>
                <Text style={styles.textCategory}>Aksesoris</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={styles.list}
              onPress={() => this.props.navigation.navigate('Electronics')}>
              <Image
                source={{
                  uri:
                    'https://static.report.az/photo/3343215c-7d7a-4735-9150-8d168bf44797.jpg',
                }}
                style={styles.image}
              />
              <Text style={styles.textList}>Elektronika</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.list}
              onPress={() => this.props.navigation.navigate('Books')}>
              <Image source={manga} style={styles.image} />
              <Text style={styles.textList}>Manga</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default HomeScreen;
