// /screens/OutputScreen.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Icon } from 'react-native-paper';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function OutputScreen({ route }) {
  const { prompt } = route.params;

  return (
    <LinearGradient colors={['#1f1147', '#0f0f1a']} style={styles.container}>
      <Text style={styles.title}>Your Design</Text>
     
        <Image
        source={require('../assets/image(6).png')}
        style={styles.image}
      />
      <View style={{ height: 150, backgroundColor: "grey", marginTop: 20, borderRadius: 10, padding: 10 }}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.promptText}>Prompt</Text>
        <Text style={{ color: "#fff" }} >Copy</Text>
        </View>
        <Text style={{ ...styles.promptText, marginTop: 10 }}>{prompt}</Text>
       
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
  flex: 1,
  padding: 40,
  justifyContent: 'flex-start', 
  width: windowWidth,
  height: windowHeight,
  paddingTop: 60, 
},
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: "#fff" },
  prompt: { fontSize: 16, marginBottom: 20, textAlign: 'center', color: "red", width: '100%', padding: 10, borderRadius: 10, backgroundColor: '#eee' },
  image: { width: 310, height: 300, borderRadius: 10, backgroundColor: '#eee' },
  promptText: {color: "#fff"}
});
