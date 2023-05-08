import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {
  const [ randonBG, setRandomBg ] = useState('#E6425E')

  const generateColor = () => {
    const hexColor = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += hexColor[Math.floor(Math.random() * 16)]
    }
    setRandomBg(color)
  }

  return (
    <>
      <StatusBar backgroundColor={"#000000"} />
      <View style={[styles.container, { backgroundColor: randonBG}]}>
        <TouchableOpacity onPress={ generateColor }>
          <View style={styles.action}>
            <Text style={styles.buttonText}>Press Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  action:{
    borderRadius: 12,
    backgroundColor: '#6a1b4d',
    paddingVertical: 10,
    paddingHorizontal: 40
  },
  buttonText:{
    fontSize: 24,
    color: '#ffffff',
    textTransform: 'uppercase'
  }
})