import {
    HStack,
    Heading,
    Icon,
    Text,
    VStack,
    Image,
    Box,
    ScrollView,
} from 'native-base';
import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import BodySvg from '@assets/body.svg';
import SeriesSvg from '@assets/series.svg';
import RepetitionsSvg from '@assets/repetitions.svg';
import { Button } from '@components/button';

export function Exercise() {
    const navigation = useNavigation<AppNavigatorRoutesProps>();
    function handleGoBack() {
        navigation.goBack();
    }

    return (
        <VStack flex={1}>
            <VStack px={8} bg={'gray.600'} pt={12}>
                <TouchableOpacity onPress={handleGoBack}>
                    <Icon
                        as={Feather}
                        name="arrow-left"
                        color={'green.500'}
                        size={6}
                    />
                </TouchableOpacity>
                <HStack
                    justifyContent={'space-between'}
                    mt={4}
                    mb={8}
                    alignItems={'center'}
                >
                    <Heading color={'gray.100'} fontSize={'lg'} flexShrink={1} fontFamily='heading'>
                        Front Pull
                    </Heading>
                    <HStack alignItems={'center'}>
                        <BodySvg />
                        <Text
                            color={'gray.200'}
                            ml={1}
                            textTransform={'capitalize'}
                        >
                            Back
                        </Text>
                    </HStack>
                </HStack>
            </VStack>
            <ScrollView>
                <VStack p={8}>
                    <Image
                        w={'full'}
                        h={80}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxv9dNAaocinXfsor6uc1njCj0cElzhBrBuQ&s',
                        }}
                        alt="Name of exercise"
                        mb={3}
                        resizeMode="cover"
                        rounded={'lg'}
                    />
                    <Box bg={'gray.600'} rounded={'md'} pb={4} px={4}>
                        <HStack
                            alignItems={'center'}
                            justifyContent={'space-around'}
                            mt={5}
                            mb={5}
                        >
                            <HStack>
                                <SeriesSvg />
                                <Text color={'gray.200'} ml={2}>
                                    3 Series
                                </Text>
                            </HStack>
                            <HStack>
                                <RepetitionsSvg />
                                <Text color={'gray.200'} ml={2}>
                                    20 Repetitions
                                </Text>
                            </HStack>
                        </HStack>
                        <Button title="Done" />
                    </Box>
                </VStack>
            </ScrollView>
        </VStack>
    );
}
