import { StyleSheet, Text, View } from 'react-native';
import useUserInfo from '../hooks/useUserInfo';


const Test = () => {
  const { isLoading, error, ApiData1,ApiData2, ApiData3 } = useUserInfo()
  console.log(ApiData1)

    return (
        <View style={styles.container}>
            <Text>{ApiData1 && ApiData1.name.last}</Text>
            {/* {ApiData1&&ApiData2&&ApiData3 ? 
            <Test ApiData1={ApiData1} ApiData2={ApiData2} ApiData3={ApiData3}/> 
            : <Test2 />} */}
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