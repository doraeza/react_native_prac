import { StyleSheet, Text, View } from 'react-native';


const Test = () => {
    return (
        <View style={styles.container}>
            <Text>Test!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Test