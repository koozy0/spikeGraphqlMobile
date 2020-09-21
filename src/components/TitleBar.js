import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#2AB7CA',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 12,
  },
  content: {
    width: '100%',
    maxWidth: 360,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  link: {
    color: '#F4F4F8',
    fontSize: 16,
  },
});

const TitleBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Link to="/users">
          <Text style={styles.link}>Users</Text>
        </Link>
        <Link to="/">
          <Text style={styles.link}>Home</Text>
        </Link>
        <Link to="/posts">
          <Text style={styles.link}>Posts</Text>
        </Link>
      </View>
    </View>
  );
};

export default TitleBar;
