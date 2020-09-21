import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Title from '../components/Title';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6E6EA',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 60,
  },
  content: {
    width: '100%',
    maxWidth: 480,
    paddingLeft: 32,
    paddingRight: 32,
  },
  item: {
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  friendsList: {
    marginTop: 8,
  },
  friend: {
    color: '#666',
  },
});

const ALL_USERS_QUERY = gql`
  query AllUsersQuery {
    users {
      id
      name
      age
      email
      friends {
        id
        name
        email
      }
    }
  }
`;

const Users = () => {
  const { loading, error, data } = useQuery(ALL_USERS_QUERY, {
    pollInterval: 5000,
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title>Users</Title>
        {loading && <Text>loading...</Text>}
        {error && <Text>Error: {JSON.stringify(error)}</Text>}
      </View>
      {!loading && data && data.users && (
        <FlatList
          style={styles.content}
          data={data.users}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.userName}>{item.name.toUpperCase()}</Text>
              <Text>Age: {item.age}</Text>
              <Text>Email: {item.email}</Text>
              <View style={styles.friendsList}>
                <Text>Friends:</Text>
                {item.friends.map((friend) => (
                  <Text
                    style={styles.friend}
                    key={`friend__${item.id}--${friend.id}`}>
                    {friend.name} | {friend.email}
                  </Text>
                ))}
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Users;
