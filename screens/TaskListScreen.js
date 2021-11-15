import { AntDesign } from '@expo/vector-icons'
import React, { useState } from 'react'
import { Keyboard, KeyboardAvoidingView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import COLORS from '../consts/colors'
import Task from './Components/Task'

const TaskListScreen = () => {
    const [task, setTask] = useState()
    const [taskItems, setTaskItems] = useState([])

    const handleAddText = () => {
        Keyboard.dismiss()
        setTaskItems([...taskItems, task])
        setTask('')
    }

    const completeTask = (index) => {
        let itemsCopy = [...taskItems]
        itemsCopy.splice(index, 1);
        setTaskItems(itemsCopy)
    }

    return (
        <View style={{ flex: 1 }}>
            <Text style={{ paddingTop: 30, paddingHorizontal: 20, fontSize: 30, fontFamily: 'Nunito_800ExtraBold' }}>Task List</Text>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <Task task="Task 1" />
                <Task task="Task 2" />
                {taskItems.map((items, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                            <Task task={items} />
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ position: 'absolute', bottom: 0, width: '100%', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 20,backgroundColor:"#fff",paddingTop:10,paddingBottom:10 }}
            >
                <TextInput
                    style={{ backgroundColor: COLORS.secondary, width: 270, paddingVertical: 7, padding: 10, borderRadius: 15 }}
                    placeholder="Write a task..."
                    value={task}
                    onChangeText={text => setTask(text)}
                />

                <TouchableOpacity onPress={() => handleAddText()}>
                    <AntDesign name="pluscircle" size={35} color={COLORS.primary} />
                </TouchableOpacity>
            </KeyboardAvoidingView>

        </View>
    )
}

export default TaskListScreen

