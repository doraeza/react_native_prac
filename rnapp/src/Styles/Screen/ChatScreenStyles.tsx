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
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 8,
    marginBottom: 8,
    borderRadius: 8,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 1
  },
  description: {
    flexWrap: 'wrap',
        flexDirection: 'row',
        // not
        borderWidth: 1,
        marginTop: 30,
  },
  plusminus: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartcard: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  cardelement: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'grey',
    padding: 10,
    borderRadius: 5,
  },
  cardtext: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardtextquantity: {
    color: 'blue',
    fontSize: 16,
    fontWeight: 'bold',
  }
});