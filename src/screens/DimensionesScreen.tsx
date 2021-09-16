import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';

// const {width, height} = Dimensions.get('window');

export const DimensionesScreen = () => {
  const {width, height} = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={styles.cajaMorada} />
      <View style={styles.cajaNaranja} />
      <Text style={styles.title}>
        width: {width} height: {height}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 600,
  },
  cajaMorada: {
    backgroundColor: '#5856D6',
    height: 100,
    width: '100%',
  },
  cajaNaranja: {
    backgroundColor: '#F0A23B',
    height: 100,
    width: '100%',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
  },
});
