import {StyleSheet} from 'react-native';

export const ScreenStyles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
  },
  input: {
    width: '70%',
    borderWidth: 1,
    borderColor: 'black',
    padding: 10,
    marginRight: 30,
  },
  bottomContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    marginBottom: 80,
  },
  list: {
    height: '80%',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});