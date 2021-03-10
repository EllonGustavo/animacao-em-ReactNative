import React from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Alert, Platform } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Writer from './components/Writer'

const TamanhoDoCirculo = 100

const Circulo = ({ onPress }) => {
  return (
    <View style={[StyleSheet.absoluteFillObject, styles.containerCirculo]}>
      <Text style={styles.titulo}>Animações em react Native</Text>
      <Writer/>
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.circulo]}>
          <AntDesign name='arrowright' size={28} color={"#8c4227"} />
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default function App() {

  const onPress = () => {
    let mensagem = "você clicou 👏"
    if (Platform.OS === 'web') {
      alert(mensagem)
    }
    else {
      Alert.alert(
        'Aviso', mensagem,
        [{
          text: "Cancelar",
          onPress: () => console.log("pressionou o cancelar"),
          style: "cancel"
        },
        {
          text: "OK",
          onPress: () => console.log("Pressionou o OK")
        }], {
        cancelable: false
      })
    }
  }
  return (
    <View style={styles.container}>
      <Circulo onPress={onPress} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2cdac",
    alignItems: 'center',
  },
  titulo: {
    fontSize: 25,
    color: "#099873",
    paddingTop: 20,
  },
  containerCirculo: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 100,
  },
  circulo: {
    backgroundColor: "#D99873",
    width: TamanhoDoCirculo,
    height: TamanhoDoCirculo,
    borderRadius: TamanhoDoCirculo / 2,
    justifyContent: "center",
    alignItems: "center",
  },
})