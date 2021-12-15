import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CounterScreen = () => {
    const [count, setCount] = useState(0);
    const [bgColor, setBgColor] = useState('#333')
    const colors = ['#f23b52', '#EDFF71', '#3C6E90', '#820263', '#04A777']

    const increment = () => {
        var randColor = colors[Math.floor(Math.random() * colors.length)];
        setCount(count + 1)
        setBgColor(randColor)
    }

    const decrement = () => {
        if (count <= 0) {
            return;
        } else {
            var randColor = colors[Math.floor(Math.random() * colors.length)];
            setCount(count - 1);
            setBgColor(randColor)
        }
    }

    return (
        <View style={styles.container}>
            <View style={{ height: 200, width: 200, backgroundColor: `${bgColor}` }}>

            </View>
            <View style={{ flexDirection: 'row', paddingVertical: 20, }}>
                <Button
                    onPress={increment}
                    title="Add"
                />
                <Text>{count}</Text>
                <Button
                    onPress={decrement}
                    title="Dec"
                />
            </View>
        </View>
    )
}

export default CounterScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
