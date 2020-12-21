import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Home = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>
            Post
          </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
