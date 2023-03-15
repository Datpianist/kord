import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [bars, setBars] = useState([
    { id: 1, value: '' },
    { id: 2, value: '' },
    { id: 3, value: '' },
    { id: 4, value: '' },

  ]);
  const [selectedBar, setSelectedBar] = useState(null);
  const [text, setText] = useState('');

  const handleBarPress = (bar) => {
    setSelectedBar(bar);
  };

  const handleTextChange = (value) => {
    setText(value);
  };

  const handleSave = () => {
    const updatedBars = [...bars];
    const index = updatedBars.findIndex((b) => b.id === selectedBar.id);
    updatedBars[index].value = text;
    setBars(updatedBars);
    setSelectedBar(null);
    setText('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.barContainer}>
        {bars.map((bar, index) => (
          <TouchableOpacity
            key={bar.id}
            style={[
              styles.bar,
              index === 0 && styles.firstBar,
              index === bars.length - 1 && styles.lastBar,
              selectedBar?.id === bar.id && styles.selectedBar,
            ]}
            onPress={() => handleBarPress(bar)}
          >
            <Text style={styles.barText}>{bar.value}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {selectedBar && (
        <View style={styles.textContainer}>
          <TextInput
            style={styles.textInput}
            value={text}
            onChangeText={handleTextChange}
            placeholder="Enter text..."
            autoFocus
          />
          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.buttonText}>Tamam</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: '70%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    flexDirection: 'row',
  },
  bar: {
    height: 45,
    width: 95.13,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderRightColor: 'black',
    borderLeftColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: -1,
    backgroundColor: '#d2691e'

  },
  firstBar: {
    borderLeftWidth: 3,
  },
  lastBar: {
    borderRightWidth: 3,
  },
  selectedBar: {
    backgroundColor: '#d2691e',
  },
  barText: {
    fontSize: 18,
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  textInput: {
    flex: 1,
    height: 30,
    borderWidth: 1,
    borderColor: 'black',
    marginRight: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: '#6a5acd',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  buttonText: {
    color: 'white',
  },
});