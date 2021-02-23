import React from 'react';
import {ScrollView, Text, Share } from 'react-native';
import { Icon, ListItem } from 'react-native-elements'

const ResultList = (props) => {
    const {romanames} = props;

    const onShare = async (l) => {
        try {
          const result = await Share.share({
            // title: ,
            message: l.korAddr + "\n" + l.roadAddr,
          });

          if (result.action === Share.sharedAction) {
            if (result.activityType) {
              // shared with activity type of result.activityType
            } else {
              // shared
            }
          } else if (result.action === Share.dismissedAction) {
            // showToast("// dismissed")
          }
        } catch (error) {
          alert(error.message);
        }
      };

    return(
            <ScrollView showsVerticalScrollIndicator={false}>
            {
                romanames.map((l, i) => (
                <ListItem key={i} bottomDivider onLongPress={() => onShare(l)}>
                    <ListItem.Content>
                        <ListItem.Title >{l.roadAddr}{' '}{l.zipNo}</ListItem.Title>
                        <ListItem.Subtitle >{l.korAddr}</ListItem.Subtitle>
                    </ListItem.Content>
                    <Text></Text>
                    
                        <Icon name='share-social-outline' type='ionicon' color="#ccc" />
                    
                </ListItem>
                ))
            }
            </ScrollView>
    )
}


export default ResultList;