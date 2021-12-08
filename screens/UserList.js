import React, { useEffect, useState } from 'react'
import { View, Text, StatusBar, ScrollView, TextInput, TouchableOpacity, Button, Alert } from 'react-native'
import axios from 'axios';
import COLORS from '../consts/colors';
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons';
import { styles } from '../styles/styles';

const UserList = () => {


    const [users, setUsers] = useState([])
    const [state, setState] = useState(
        { username: '', id: null }
    )
    const [btnText, setBtnText] = useState('Add')

    async function deleteUser(id) {
        try {
            await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            setUsers([...users.filter(user => {
                return (user.id !== id)
            })])
        } catch (error) {
            console.error(error);
        }
    }

    async function fetchData() {
        try {
            const result = await axios.get("https://jsonplaceholder.typicode.com/users")
            setUsers(result.data);
        } catch (error) {
            console.error(error);
        }
    }

    async function onAdd() {
        try {
            if (state.id == null || state.id == undefined) {
                console.log(state.id)
                await axios.post("https://jsonplaceholder.typicode.com/users/", state).then((res) => {
                    setUsers((users) => [...users, { username: res.data.username }])
                }
                )
            }
            else {
                console.log(state.id)
                await axios.put(`https://jsonplaceholder.typicode.com/users/${state.id}`, state).then(res => setUsers((users) => [...users]))
            }

        } catch (error) {
            console.error(error);
        }
    }

    async function onEdit(list) {
        // alert({username:list.username,id: list.id})
        setState({ username: list.username, id: list.id })
        setBtnText('Update')
    }


    useEffect(() => {
        fetchData()
    }, [])


    return (
        <View style={{ flex: 1, marginVertical: 20, marginHorizontal: 10, }}>
            <StatusBar />
            <ScrollView>
                <View style={styles.loginInput}>
                    <TextInput
                        style={styles.TextInput}
                        value={state.username || ""}
                        onChangeText={(text) => setState({ ...state, username: text })}
                        placeholder="Name"
                        placeholderTextColor="#003f5c"
                    />
                </View>
                <View style={{ marginBottom: 20, }}>
                    <Button
                        color={`${COLORS.primary}`}
                        title={btnText}
                        onPress={onAdd}
                    />
                </View>
                {users.map((list, index) => {
                    return (
                        <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: `${COLORS.secondary}`, marginBottom: 10, padding: 10, borderRadius: 10 }}>
                            <Text>{list.username}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Entypo onPress={() => onEdit(list)} name="edit" size={24} color="black" color={COLORS.primary} />
                                <AntDesign onPress={() => deleteUser(list.id)} name="delete" size={24} color={COLORS.primary} />
                            </View>
                        </View>
                    )
                })}
            </ScrollView>
        </View>
    )
}

export default UserList
