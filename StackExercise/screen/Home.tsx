import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const Home = ({ navigation }) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
          <Text>
            Home
          </Text>
          <Button
            title="Go to post"
            onPress={() =>
              navigation.navigate('Post')
            }
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
