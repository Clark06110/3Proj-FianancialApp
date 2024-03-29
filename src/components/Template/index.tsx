import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface TemplateProps {
    title: string;
}

const Template: React.FC<TemplateProps> = ({ title }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Template;
