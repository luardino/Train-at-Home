import { VStack, HStack, FlatList, Heading, Text } from 'native-base';
import { HomeHeader } from '@components/HomeHeader';
import { Group } from '@components/Group';
import { useState } from 'react';
import { ExercisesCard } from '@components/ExercisesCard';
import { useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';

export function Home() {
    const [groups, setGroups] = useState([
        'Back',
        'Shoulder',
        'Biceps',
        'Triceps',
    ]);
    const [exercises, setExercises] = useState([
        'Front Pull',
        'Bent over row',
        'Unilateral row',
        'Closed push-ups',
    ]);
    const [groupSelected, setGroupSelected] = useState('Costas');

    const navigation = useNavigation<AppNavigatorRoutesProps>();

    function handleOpenExerises() {
        navigation.navigate('exercise')
    }

    return (
        <VStack flex={1}>
            <HomeHeader />

            <FlatList
                data={groups}
                keyExtractor={(item) => item}
                renderItem={({ item }) => (
                    <Group
                        name={item}
                        isActive={
                            String(groupSelected).toUpperCase() ===
                            item.toUpperCase()
                        }
                        onPress={() => setGroupSelected(item)}
                    />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
                _contentContainerStyle={{ px: 8 }}
                my={10}
                maxH={10}
                minH={10}
            />

            <VStack flex={1} px={8}>
                <HStack justifyContent={'space-between'} marginBottom={5}>
                    <Heading color={'gray.200'} fontSize={'md'} fontFamily='heading'>
                        Exercises
                    </Heading>
                    <Text color={'gray.200'} fontSize={'sm'}>
                        {exercises.length}
                    </Text>
                </HStack>

                <FlatList
                    data={exercises}
                    keyExtractor={(item) => item}
                    renderItem={({ item }) => (
                        <ExercisesCard onPress={handleOpenExerises} />
                    )}
                    showsVerticalScrollIndicator={false}
                    _contentContainerStyle={{ paddingBottom: 20 }}
                />
            </VStack>
        </VStack>
    );
}
