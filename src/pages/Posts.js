import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Title from '../components/Title';
import { gql, useQuery } from '@apollo/client';

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
    maxWidth: 480,
    paddingLeft: 32,
    paddingRight: 32,
  },
  item: {
    justifyContent: 'flex-start',
    marginBottom: 40,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  author: {
    color: '#666',
  },
});

const ALL_POSTS_QUERY = gql`
  query AllPostsQuery {
    posts {
      id
      title
      body
      author {
        name
        email
      }
    }
  }
`;

const Posts = () => {
  const { loading, error, data } = useQuery(ALL_POSTS_QUERY, {
    pollInterval: 5000,
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title>Posts</Title>
        {loading && <Text>loading...</Text>}
        {error && <Text>Error: {JSON.stringify(error)}</Text>}
      </View>
      {!loading && data && data.posts && (
        <FlatList
          style={styles.content}
          data={data.posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.title}>{item.title.toUpperCase()}</Text>
              <Text>{item.body}</Text>
              <Text style={styles.author}>
                {item.author.name} | {item.author.email}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Posts;
