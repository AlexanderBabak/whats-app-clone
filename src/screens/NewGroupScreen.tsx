import React, { useLayoutEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { createGroupChat } from '../redux/groupChatsSlice';
import { ContactItem } from '../components/ContactItem';
import { CreateGroupHeader } from '../components/CreateGroupHeader';
import { CreateGroupModal } from '../components/CreateGroupModal';
import { RootStackParamList } from '../interfaces/navigation';
import { showNotification } from '../helpers/showNotification';
import { CONTACTS } from '../mockData';

type Props = NativeStackScreenProps<RootStackParamList, 'NewGroup'>;

export const NewGroupScreen: React.FC<Props> = ({ navigation }) => {
  const [contactsList, setContactsList] = useState(CONTACTS);
  const [groupName, setGroupName] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const { groups } = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  const checkedUsers = contactsList.filter((contact) => contact.isChecked);
  const isActiveNextBtn = checkedUsers.length > 1;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTitle: 'Create a new group',
      headerRight: () => (
        <CreateGroupHeader setModalVisible={setModalVisible} isActiveNextBtn={isActiveNextBtn} />
      ),
    });
  }, [isActiveNextBtn]);

  const handleCreateGroup = () => {
    const validGroupName = groupName.trim();

    const existingGroupNames: Array<string> = groups.map((group) => group.groupName);
    const isGroupExist = existingGroupNames.some(
      (groupName) => groupName.toLowerCase() === validGroupName.toLowerCase(),
    );

    if (!validGroupName) {
      showNotification('Enter group name');
      return;
    }

    if (isGroupExist) {
      showNotification('This group already exists');
      return;
    } else {
      dispatch(createGroupChat({ checkedUsers, groupName: validGroupName }));
      navigation.navigate('GroupChatItem', { groupName: validGroupName });
    }

    setModalVisible(false);
  };

  const toggleContactsChecked = (contactId: string) => {
    setContactsList(
      contactsList.map((contact) => {
        if (contact.contactId !== contactId) return contact;

        return {
          ...contact,
          isChecked: !contact.isChecked,
        };
      }),
    );
  };

  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          {contactsList.map((contact) => (
            <ContactItem
              key={contact.contactId}
              data={contact}
              isChecked={contact.isChecked}
              setChecked={toggleContactsChecked}
            />
          ))}
        </View>
      </ScrollView>
      <CreateGroupModal
        onCreateGroup={handleCreateGroup}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setGroupName={setGroupName}
        groupName={groupName}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
});
