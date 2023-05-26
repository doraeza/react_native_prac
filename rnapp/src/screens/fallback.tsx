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
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'

  },
});

export default Fallback