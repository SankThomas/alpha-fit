import React from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {homepage} from '../data/homepage';

const myIcon = <Icon name="rocket" size={30} color="#fff"></Icon>;

const Homepage = () => {
  // eslint-disable-next-line
  const [items, setItems] = React.useState(homepage);
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {items.map(({id, title}) => {
            return (
              <View key={id} style={styles.article}>
                <Text>
                  <Icon name="rocket" size={30} color="#fff"></Icon>
                </Text>
                <Text style={styles.text}>{title}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F59E0B',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingBottom: 20,
  },
  article: {
    width: 100,
    height: 100,
    backgroundColor: '#1F2937',
    margin: 3,
    padding: 10,
    borderRadius: 3,
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Homepage;
