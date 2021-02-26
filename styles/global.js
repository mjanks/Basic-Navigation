import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    conatainer: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'coral',
    },
    titleText: {
        fontSize: 18,
        color: 'blue',
    },
    paragaph: {
        marginVertical: 8,
        lineHeight: 20,
    },
    buttonContainer: {
        backgroundColor: '#222',
        borderRadius: 5,
        padding: 10,
        margin: 20
      },
      buttonText: {
        fontSize: 20,
        color: '#fff'
      },
      card: {
        width: 350,
        height: 100,
        borderRadius: 10,
        backgroundColor: '#101010',
        margin: 10,
        padding: 10,
        alignItems: 'center'
      },
      cardText: {
        fontSize: 18,
        color: '#ffd700',
        marginBottom: 5
      },
});