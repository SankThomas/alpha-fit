import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image} from 'react-native';

const Showcase = () => {
  return (
    <ScrollView style={styles.showcaseParent}>
      <View>
        <Image
          source={require('../assets/images/showcase.jpg')}
          height="400"
          style={styles.showcaseImage}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>AlphaFit</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  showcaseParent: {
    position: 'relative',
    flex: 1,
    // display: 'flex',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  showcaseImage: {
    width: 400,
    height: 300,
    resizeMode: 'cover',
  },
  textContainer: {
    position: 'absolute',
  },
  text: {
    color: '#fff',
    fontSize: 46,
  },
});

export default Showcase;
