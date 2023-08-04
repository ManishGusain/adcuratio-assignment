import { Linking } from "react-native";

export const handleURL = async (url) => {
    const isSupported = await Linking.canOpenURL(url);
    if (isSupported) {
        try {
            await Linking.openURL(url);
        } catch (error) {
            console.error('Error opening URL:', error);
        }
    } else {
        console.warn('Linking is not supported on this device.');
    }
};