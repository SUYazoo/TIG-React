import { useContext } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import PageInfo, { PageProps } from '../components/PageInfo';
import { PageContext } from '../contexts/PageContext';


export default function PageScreen() {

  const {pageState} = useContext(PageContext)
  return (
    <View style={styles.container}>
        <PageInfo page={pageState}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 30
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});



