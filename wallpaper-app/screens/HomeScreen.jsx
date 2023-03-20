import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, ActivityIndicator, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Entypo } from '@expo/vector-icons';
import MasonryLayout from './MasonryLayout';
import { getCategory } from '../sanity';
import "react-native-url-polyfill/auto";

const HomeScreen = () => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        getCategory().then(data => setCategories(data)).catch(err => alert(err));
    }, [])



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
                    {categories ?
                        (<>
                            <MasonryLayout data={categories} screen="ItemsScreen"/>

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