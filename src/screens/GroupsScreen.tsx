import React, { useEffect } from 'react';
import { FlatList, ListRenderItem, StyleSheet, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getGroupData } from '../redux/groupChatsSlice';
import { IGroupChatData } from '../interfaces/chatItem';
import { ChatsScreenHeader } from '../components/ChatsScreenHeader';
import { NewChatButton } from '../components/NewChatButton';
import { GroupChatItem } from '../components/GroupChatItem';
import { colors } from '../assets/constants';
import { GROUPCHATSDATA } from '../mockData';

const renderItem: ListRenderItem<IGroupChatData> = ({ item }) => <GroupChatItem data={item} />;

export const GroupsScreen = () => {
  const { groups } = useAppSelector((state) => state.groups);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGroupData(GROUPCHATSDATA));
  }, []);

  return (
    <View style={styles.textContainer}>
      <ChatsScreenHeader title='Groups' />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={groups}
        renderItem={renderItem}
        keyExtractor={(item: IGroupChatData) => item.groupName}
        contentContainerStyle={{ flexDirection: 'column-reverse' }}
      />

      <NewChatButton routeName='NewGroup' />
    </View>
  );
};

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 18,
  },
  text: {
    fontSize: 24,
  },
});
