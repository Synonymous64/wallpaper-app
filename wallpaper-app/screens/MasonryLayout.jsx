import { Image, TouchableOpacity } from 'react-native'
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';

const CardItem = ({ data }) => {
    const navigation = useNavigation();

    const handleClick = () => {
        navigation.navigate('Item', { param: data.id });
    }

    return (
        <TouchableOpacity style={{ height: Math.round(Math.random() * 100 + 200) }} className="bg-[#111] m-1 rounded-md relative overflow-hidden" onPress={handleClick}>
            <Image
                source={{ uri: data.imageURL }} alt="img" className="w-full h-full object-cover"
            />
        </TouchableOpacity>
    )
}

const MasonryLayout = ({ data }) => {
    return (
        <MasonryList
            data={data}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => <CardItem data={item} />}
        />
    )
}

export default MasonryLayout;