import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Modal,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { colors } from '../assets/constants';

interface Props {
  groupName: string;
  modalVisible: boolean;
  setGroupName: (text: string) => void;
  setModalVisible: (isVisible: boolean) => void;
  onCreateGroup: () => void;
}

export const CreateGroupModal = ({
  onCreateGroup,
  modalVisible,
  setModalVisible,
  groupName,
  setGroupName,
}: Props) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          keyboardVerticalOffset={Platform.OS === 'ios' ? -250 : 0}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Enter your group name:</Text>

              <TextInput
                style={styles.textInput}
                placeholder='Type a name...'
                value={groupName}
                onChangeText={(text) => setGroupName(text)}
                maxLength={20}
              />

              <View style={{ flexDirection: 'row', gap: 8, alignSelf: 'center' }}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={() => {
                    setModalVisible(false);
                    setGroupName('');
                  }}
                >
                  <Text style={[styles.textStyle, styles.textStyleCancel]}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.buttonCreate]}
                  onPress={onCreateGroup}
                >
                  <Text style={styles.textStyle}>Create</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    borderRadius: 20,
    padding: 30,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 14,
    padding: 8,
  },
  buttonCreate: {
    backgroundColor: colors.buttonColor,
  },
  textStyle: {
    color: colors.white,
    fontWeight: '600',
    textAlign: 'center',
  },
  textStyleCancel: {
    color: colors.textPrimary,
  },
  modalText: {
    textAlign: 'center',
    fontSize: 18,
  },

  textInput: {
    height: 40,
    borderWidth: 1,
    borderRadius: 14,
    paddingHorizontal: 10,
    borderColor: colors.borderColor,
  },
});
