import { StyleSheet, Text, View } from 'react-native'


const Fallback = () => {
    return (
        <View style={styles.container}>
            <Text>Failed render</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'grey',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default Fallback