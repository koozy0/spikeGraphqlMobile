import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Title from '../components/Title';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6EA',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
    paddingBottom: 60,
  },
  content: {
    width: '100%',
    maxWidth: 380,
    paddingLeft: 16,
    paddingRight: 16,
  },
});

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title>Home</Title>
        <Text>
          Sample mobile app using @apollo/client to connect to GraphQL backend
        </Text>
      </View>
    </View>
  );
};

export default Home;
