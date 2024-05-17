import React, { useState } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

export default function AboutScreen() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>
      <Button title=" + " onPress={incrementCount} />
      <Text style={styles.text}>{count}</Text>    
      <Button title=" - " onPress={decrementCount} />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
 
});
