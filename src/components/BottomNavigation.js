import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'react-router-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    height: 80,
    backgroundColor: '#2AB7CA',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.16,
    shadowRadius: 2.22,
    elevation: 1,
  },
  content: {
    width: '100%',
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
  navLink: {
    flex: 1,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  navItemText: {
    color: '#F4F4F8',
    fontSize: 12,
  },
});

const BottomNavigation = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Link to="/users" style={styles.navLink}>
          <View style={styles.navItem}>
            <Icon name="face" size={30} color="#F4F4F8" />
            <Text style={styles.navItemText}>Users</Text>
          </View>
        </Link>
        <Link to="/" style={styles.navLink}>
          <View style={styles.navItem}>
            <Icon name="home" size={30} color="#F4F4F8" />
            <Text style={styles.navItemText}>Home</Text>
          </View>
        </Link>
        <Link to="/posts" style={styles.navLink}>
          <View style={styles.navItem}>
            <Icon name="list" size={30} color="#F4F4F8" />
            <Text style={styles.navItemText}>Posts</Text>
          </View>
        </Link>
      </View>
    </View>
  );
};

export default BottomNavigation;
