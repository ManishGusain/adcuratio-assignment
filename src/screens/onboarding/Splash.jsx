import { StyleSheet, Text, View } from "react-native";

export default function Splash() {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>Adcuratio</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6F61C0',
        flex: 1
    },
    label: {
        fontSize: 50,
        color: '#D5FFE4'
    }
});