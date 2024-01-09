import React from 'react';
import { View, Text } from 'react-native';
import Template from '~/components/Template';

const Home: React.FC = () => {
    return (
        <View>
            <Text>Welcome to the Home page!</Text>
            <Template title='This is a title'/>
        </View>
    );
};

export default Home;
