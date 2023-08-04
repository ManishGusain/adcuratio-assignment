import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import QuestionsScreen from "../screens/bottom-nav/QuestionsScreen";

export default function BottomTabs() {
    const [tag, setTag] = useState('react');

    const handleTag = (name) => {
        setTag(name);
    }

    return (
        <>
            <QuestionsScreen activeTag={tag} />

            <View style={styles.container}>
                <Pressable onPress={() => handleTag('react')}>
                    <Text style={{ color: tag === 'react' ? '#000' : '#fff' }}>React</Text>
                </Pressable>

                <Pressable onPress={() => handleTag('react-native')}>
                    <Text style={{ color: tag === 'react-native' ? '#000' : '#fff' }}>React Native</Text>
                </Pressable>

                <Pressable onPress={() => handleTag('node')}>
                    <Text style={{ color: tag === 'node' ? '#000' : '#fff' }}>Node</Text>
                </Pressable>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6F61C0',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 15,
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%'
    },
});