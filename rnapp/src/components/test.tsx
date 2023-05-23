import { Button, StyleSheet, Text, View } from 'react-native';
import useUserInfo from '../hooks/useUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../interface/AppState';
import { decrement, increment } from '../store/action';


const Test = () => {
  const count = useSelector((state: AppState) => state.count);
  const dispatch = useDispatch();
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const { isLoading, error, ApiData1,ApiData2, ApiData3 } = useUserInfo()
  console.log(ApiData1)

    return (
        <View style={styles.container}>
            <Text>{ApiData1 && ApiData1.name.last}</Text>
            {/* {ApiData1&&ApiData2&&ApiData3 ? 
            <Test ApiData1={ApiData1} ApiData2={ApiData2} ApiData3={ApiData3}/> 
            : <Test2 />} */}
            <Text style={{ fontSize: 24 }}>Count: {count}</Text>
            <Button title="Increment" onPress={handleIncrement} />
            <Button title="Decrement" onPress={handleDecrement} />
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

export default Test