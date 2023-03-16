import { View, Image, ActivityIndicator, SafeAreaView, TouchableOpacity, Text } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { AntDesign } from '@expo/vector-icons';
const Item = ({ route }) => {
    const id = route?.params?.param;
    // console.log(id);

    const [isLoading, setIsLoading] = useState(false);

    return (
        <View className="flex-1 items-center justify-center bg-[#04020d] relative">
            {isLoading ? (<ActivityIndicator color="#ff0000" size="large" />) : (<>
                <Image source={{ uri: 'https://images.pexels.com/photos/3617500/pexels-photo-3617500.jpeg?auto=compress&cs=tinysrgb&w=600' }} className="w-full h-full object-cover" alt='background' />
                <SafeAreaView className="absolute z-10 inset-0 flex items-center justify-start mt-12">
                    <TouchableOpacity className="w-full flex px-4">
                        <Ionicons name="arrow-back-circle" size={32} color="white" />
                    </TouchableOpacity>
                    <View className="w-full h-full relative">
                        <View className="absolute bottom-12 inset-x-0 px-4">
                            <BlurView
                                className="p-4 flex-row items-center justify-between"
                                intensity={60}
                                tint="dark"
                            >
                                <View className="flex items-center justify-between gap-3">
                                    <Text className="text-2xl text-white font-bold">Sample Title</Text>
                                    <Text className="text-white font-bold">Sample Description</Text>
                                </View>
                                <TouchableOpacity>
                                <AntDesign name="clouddownloado" size={29} color="white" />
                                </TouchableOpacity>
                            </BlurView>
                        </View>
                    </View>
                </SafeAreaView>
            </>)}
        </View>
    )
}


export default Item;