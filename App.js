import React, { useRef, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Animated } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import Writer from './components/Writer'

const TamanhoDoCirculo = 100

const Circulo = ({ onPress, animatedValue }) => {
  const animatedBackground = animatedValue.interpolate({
    inputRange: [0, 0.0001, 0.5, 0.5001, 1],
    outputRange: ["#E6C2A3", "#BE8A70", "#C88260","#965032","#823B24"]
  })

  const animatedText = animatedValue.interpolate({
    inputRange:[0,0.5,1],
    outputRange:[20,35,20]
  })

  const animatedColor = animatedValue.interpolate({
    inputRange:[0,0.5,1],
    outputRange:["#823B24","#C88260","#E6C2A3"]
  })

  return (
    <Animated.View style={[StyleSheet.absoluteFillObject, styles.containerCirculo, { backgroundColor: animatedBackground }]}>
      <Text style={styles.titulo}>Animações em react Native</Text>
      <Writer />
      <Animated.Text 
        style={{
          fontSize:animatedText,
          color:animatedColor,
        }}> Frase Importante </Animated.Text>
      <Animated.View style={[styles.circulo, {
        transform: [{
          rotateY: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: ['0deg', '-90deg', '-180deg']
          })
        },
        {
          scale: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 5, 1]
          })
        },
        {
          translateX: animatedValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [0, 50, 0]
          })
        }
        ]
      }]}>
        <TouchableOpacity onPress={onPress}>
          <View style={[styles.circulo]}>
            <AntDesign name='arrowright' size={28} color={"#8c4227"} />
          </View>
        </TouchableOpacity>
      </Animated.View>
    </Animated.View >
  )
}

export default function App() {
  //useRef é um hook que retorna um objeto mutavel
  //com a propriedade current inicializada com o argumento passado
  //o objeto passado persistira durante todo o ciclo de vida do componente

  const animatedValue = useRef(new Animated.Value(0)).current
  const [indice, setIndice] = useState(0)

  const animation = (toValue) => Animated.timing(animatedValue,{
      toValue: toValue,
      timing: 3000,
      useNativeDriver: false
  })

  const onPress = () => {
    setIndice(indice===1? 0:1)
    animation(indice===1? 0:1).start()
  }
  return (
    <View style={styles.container}>
      <Circulo onPress={onPress} animatedValue={animatedValue} />
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
    padding: 10,
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
    margin: 10,
  },
})