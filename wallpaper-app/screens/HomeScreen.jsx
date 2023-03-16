import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import React, { useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import MasonryLayout from './MasonryLayout';

const HomeScreen = () => {
    const [categories, setCategories] = useState(null);

    const data = [
        { id: 1, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 2, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/775203/pexels-photo-775203.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 3, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/1612461/pexels-photo-1612461.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 4, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/4585185/pexels-photo-4585185.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 5, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/1585325/pexels-photo-1585325.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 6, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 7, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 8, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 9, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: 10, name: 'randomPic', imageURL: 'https://images.pexels.com/photos/2362002/pexels-photo-2362002.jpeg?auto=compress&cs=tinysrgb&w=600' },
    ]

    return (
        <View className="flex-1 items-center justify-center bg-[#04020d] relative">
            <SafeAreaView className="flex w-full h-full items-center justify-start gap-4 mt-3">
                <View className="w-full px-6 flex-row items-center justify-between">
                    <Text className="text-2xl text-gray-50 font-semibold">
                        8K Wallpapers
                    </Text>
                    <TouchableOpacity>
                        <Entypo name='dots-three-vertical' size={24} color="white" />
                    </TouchableOpacity>
                </View>
                <ScrollView className="w-full h-full px-4">
                    {data ?
                        (<>
                            <MasonryLayout data={data}/>

                        </>
                        ) :
                        (<>
                            <ActivityIndicator color="#ff0000" size="large" />
                        </>
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        </View>
    );
};


export default HomeScreen;