import { VStack, HStack, Heading, Image, Text, Icon } from 'native-base';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Entypo } from '@expo/vector-icons';

type Props = TouchableOpacityProps & {};
export function ExercisesCard({ ...rest }: Props) {
    return (
        <TouchableOpacity {...rest}>
            <HStack
                bg={'gray.500'}
                alignItems={'center'}
                p={2}
                pr={4}
                rounded={'md'}
                mb={3}
            >
                <Image
                    source={{
                        uri: 'data:image/jpeg;base64,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',
                    }}
                    alt="Exercise"
                    w={16}
                    h={16}
                    rounded={'md'}
                    mr={4}
                    resizeMode="cover"
                />

                <VStack flex={1}>
                    <Heading fontSize={'lg'} color={'white'}>
                        Unilateral row
                    </Heading>
                    <Text
                        fontSize={'sm'}
                        color={'gray.200'}
                        mt={1}
                        numberOfLines={2}
                    >
                        3 series x 15 repetitions
                    </Text>
                </VStack>
                <Icon
                    as={Entypo}
                    name="chevron-thin-right"
                    color={'gray.300'}
                />
            </HStack>
        </TouchableOpacity>
    );
}
