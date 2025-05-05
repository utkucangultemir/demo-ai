// /screens/InputScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,Image, ActivityIndicator,TouchableOpacity,FlatList } from 'react-native';
import { Chip } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { db } from '../services/firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import StatusChip from '../components/StatusChip';
import { LinearGradient } from 'expo-linear-gradient';

export default function InputScreen() {
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState(null); // null | 'processing' | 'done'
  const [docId, setDocId] = useState(null);
  const navigation = useNavigation();
  const data = [
    {
      id: 1,
      image: require('../assets/image(2).png'),
      desc: "No Style"
    },
    {
      id: 2,
      image: require('../assets/image(3).png'),
      desc: "Monogram"
    },
    {
      id: 3,
      image:  require('../assets/image(4).png'),
      desc: "Icon"
    },
    {
      id: 4,
      image:  require('../assets/image(5).png'),
      desc: "Abstract"
    },
    ]

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setStatus('processing');

    try {
      const docRef = await addDoc(collection(db, 'prompts'), {
        prompt,
        status: 'processing',
        createdAt: Timestamp.now(),
      });
      setDocId(docRef.id);

      // Simule edilen işlem süresi (30-60 saniye arası)
      const delay = Math.floor(Math.random() * (6 - 5 + 1) + 1) * 1000;

      setTimeout(() => {
        setStatus('done');
      }, delay);
    } catch (error) {
      console.error('Error saving prompt:', error);
    }
  };

  const handleChipPress = () => {
    if (status === 'done') {
      navigation.navigate('Output', { prompt, docId });
    }
  };

  return (
    <LinearGradient colors={['#1f1147', '#0f0f1a']}
       style={styles.container}>
        <Text style={styles.header}>AI Logo</Text>

        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: "space-between"}}>
          <Text style={styles.title}>Enter Your Prompt</Text>
          <Text style={styles.suprise}>Suprise me</Text>
        </View>

      <TextInput
        style={styles.input}
        placeholder="A blue leon logo reading 'HEXA' in bolt letters"
        value={prompt}
        onChangeText={setPrompt}
      />
        {status && (
            <StatusChip style={{ marginTop: 0 }} status={status} onPress={handleChipPress} />
            )}
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <TouchableOpacity style={{ marginBottom: 10, alignItems: "center", height: 100 }}>
            <Image
              source={item.image}
              style={{ width: 100, height: 100, borderRadius: 10, padding: 10, marginRight: 5 }}
            />
            <Text style={{ color: "white" }}>{item.desc}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
        <LinearGradient
          colors={['#943DFF', '#2938DC']}
          style={styles.buton}
        >
      <TouchableOpacity  onPress={handleGenerate}>

        <Text style={{ fontSize: 16, color: "white", textAlign: 'center', fontWeight: 'bold' }}>Create</Text>
      </TouchableOpacity>
        </LinearGradient>
    
      
    </LinearGradient>

  );
}

const styles = StyleSheet.create({
  container: { flex: 1,padding: 20, },
  header: { fontSize: 24,position: 'absolute', top: 80, left: 0, right: 0, fontWeight: 'bold', textAlign: 'center', marginBottom: 20, color: "white" },
  title: { fontSize: 20, marginBottom: 10, color: "white", fontWeight: 'bold', textAlign: 'center', marginTop: 100,  },
  suprise: { fontSize: 16, marginBottom: 10, color: "white",  textAlign: 'center', marginTop: 100, },
  input: {  padding: 10, marginBottom: 10, borderRadius: 5, backgroundColor: "grey", height: 150 },
  chip: { marginTop: 20, alignSelf: 'center' },
  buton: {  padding: 15, borderRadius: 25, width: '100%', alignItems: 'center', marginTop: 0 , position: 'absolute', bottom: 50, left: 20},
});
