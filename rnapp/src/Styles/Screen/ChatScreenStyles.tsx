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
    marginBottom: 12,
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
    marginTop: 5
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  detailImage: {
    width: 200,
    height: 200,
    marginBottom: 8,
    resizeMode: 'cover',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  productList: {
    paddingHorizontal: 8,
  },
  productContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 16,
    paddingTop: 32,
  },
  description: {
    flexWrap: 'wrap',
        flexDirection: 'row',
        // not
        borderWidth: 1,
        marginTop: 30,
  }
});