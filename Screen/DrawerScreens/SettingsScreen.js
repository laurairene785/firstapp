import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
                     KlinKlin
            {'\n\n'}
           Una app para mensajes con seguridad y rapidez.
          </Text>
        </View>
        <Text
          style={{
            fontSize: 18,
            textAlign: 'center',
            color: 'purple',
          }}>
                 Empieza {'\n'} 
        </Text>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'orange',
          }}>
         Casa
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;