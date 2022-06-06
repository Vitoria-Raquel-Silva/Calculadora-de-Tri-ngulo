import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react'
import { StyleSheet, Text, View, Button, TextInput, Image } from 'react-native';
import { SafeAreaView } from 'react-native-web';


export default function Calcular() {
  const [base, setBase] =  useState ('');
  const [altura, setAltura] = useState('');
  const [area, setArea] = useState('');

function calcularArea (){
  if (base > 0 && altura > 0 ) {
    setArea ((parseFloat(base) * parseFloat(altura)) /2 );
  } 
    else {
      setArea ('');
}
}




  return (
    <View style={styles.container}>


      
        <Text style={styles.posicao}>Base</Text>
          <TextInput
            onChangeText={setBase}
            value={base}
            style={styles.borda}
            placeholder="Base"
            keyboardType={"numeric"}
          />
        <Text style={styles.posicao}>Altura</Text>
          <TextInput
            onChangeText={setAltura}
            value={altura}
            style={styles.borda}
            placeholder="Altura"
            keyboardType={"numeric"}
          />

      <Button title="Calcular" onPress={calcularArea} />
      <Text>{area ? `Resultado: ${area}` : ""}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  borda: {
    borderWidth: 1,
    height: 30,
    width: 250,
    marginBottom: 15,
  },

});

