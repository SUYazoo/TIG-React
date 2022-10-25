import { FlatList, StyleSheet, Text, View, Image} from 'react-native';

export type PageProps = {
    nom: string,
    img: any,
    description: string,
};

export default function pageInfo({ page }: { page: PageProps }) {
    return (
        <View >
            <Text  onPress={() => {console.log(page.img)}}>{page.nom}</Text>
            <Image source={page.img} style={{ width: 200, height: 200 }} />
            <Text>{page.description}</Text>
        </View>
    )
}


  