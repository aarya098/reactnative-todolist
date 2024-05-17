import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import useTodoStore from "./store";

/* Placeholder components for WhoIsHere and SomeoneIsTyping, since these are likely not native components */
const WhoIsHere = () => <Text>ADD YOUR TASK</Text>;
const SomeoneIsTyping = () => <Text>TASK TO BE DONE LIST</Text>;

export default function App() {
  const {
    todos,
    addTodo,
    removeTodo,
    toggleTodo,
  } = useTodoStore();

  const [draft, setDraft] = useState("");

  useEffect(() => {
    const enterRoom = () => {
      console.log("Entered room: zustand-todo-app");
    };
    const leaveRoom = () => {
      console.log("Left room: zustand-todo-app");
    };

    enterRoom();
    return () => {
      leaveRoom();
    };
  }, []);

  return (
    <View style={styles.container}>
      <WhoIsHere />
      <TextInput
        style={styles.input}
        placeholder="What needs to be done TODAY?"
        value={draft}
        onChangeText={setDraft}
        onSubmitEditing={() => {
          if (draft.trim()) {
            addTodo(draft);
            setDraft("");
          }
        }}
      />
      <SomeoneIsTyping />
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.todoContainer}>
            <TouchableOpacity onPress={() => toggleTodo(item.id)}>
              <Text style={[styles.todo, item.completed && styles.completed]}>
                {item.text}
              </Text>
            </TouchableOpacity>
            <Button
              title="✕"
              onPress={() => removeTodo(item.id)}
            />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 8,
  },
  todoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  todo: {
    fontSize: 18,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
