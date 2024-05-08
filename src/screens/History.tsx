import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { SectionList, Heading, VStack, Text } from 'native-base';
import { useState } from 'react';

export function History() {
    const [exercises, setExercises] = useState([
        {
            title: '19.08.2022',
            data: ['Puxada Frontal', 'Remada Unilateral'],
        },
        {
            title: '01.01.2023',
            data: ['Puxada Frontal'],
        },
    ]);

    return (
        <VStack flex={1}>
            <ScreenHeader title="Exercises History" />
            <SectionList
                sections={exercises}
                keyExtractor={(item) => item}
                renderItem={({ item }) => <HistoryCard />}
                renderSectionHeader={({ section }) => (
                    <Heading color={'gray.200'} fontSize={'md'} mt={10} mb={3} fontFamily='heading'>
                        {section.title}
                    </Heading>
                )}
                px={8}
                contentContainerStyle={
                    exercises.length === 0 && {
                        flex: 1,
                        justifyContent: 'center',
                    }
                }
                ListEmptyComponent={() => (
                    <Text color={'gray.100'} textAlign={'center'}>
                        There are no exercises registered yet,{'\n'}
                        shall we do exercises?
                    </Text>
                )}
                showsVerticalScrollIndicator={false}
            />
        </VStack>
    );
}
