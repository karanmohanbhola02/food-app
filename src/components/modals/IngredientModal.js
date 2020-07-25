import React from 'react';
import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import FastImage from 'react-native-fast-image';
import Modal from './Modal';
import Button from '../buttons/Button';
import IngredientListItem from '../IngredientListItem';

import styles from './ingredientModal-styles';
import ModalHeader from './ModalHeader';

const IngredientModal = ({ isModalOpen, onRequestClose }) => {
    return (
        <Modal
            isModalOpen={isModalOpen}
            onRequestClose={onRequestClose}>
            <View style={{ flex: 1 }}>
                <ModalHeader title={'Ingredients'} onPress={onRequestClose} />
                <FlatList
                    style={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    data={[1,2,3,4,5,6, 7, 8, 9, 10]}
                    ItemSeparatorComponent={() => <View style={styles.separator} />}
                    renderItem={({ item, index }) => <IngredientListItem title={'Salt'} subTitle={'½ teaspoon'} onPress={() => {}} isSelected={false} />}
                    keyExtractor={(item, index) => `${index}`}
                />
                <View style={styles.buttonContainer}>
                    <Button title={'Add to Reminders'} />
                </View>
            </View>
        </Modal>
    )
};

export default IngredientModal;