import axios from 'axios';
import React from 'react';
import {View, StyleSheet, ImageBackground, Alert, Text} from 'react-native';
import { SearchBar } from 'react-native-elements';
import RoundButton from '../RoundButton';
import errController from './errController';
import qs from 'qs';
import AddressModal from './AddressModal';
import checkSearchedWord from '../common'

const AddressTab = () => {

  const api_key = 'U01TX0FVVEgyMDIxMDIwOTExMDA0NTExMDc5MzQ=';

  const [show, setShow] = React.useState(false);
  const [value, onChangedText] = React.useState('');
  const [romanames, setRomanames] = React.useState([]);

  const onCloseResult = () => {
    setShow(false);
  }

  const onClick = () => {
    setShow(false);
    const isok = checkSearchedWord(value);
    if (isok.err) {
      Alert.alert(isok.msg);
    }else{
      getRomaWord();
    }
  }

  const getRomaWord = () => {

    axios({
      method: 'post',
      url: 'https://www.juso.go.kr/addrlink/addrEngApiJsonp.do',
      data: qs.stringify({
        currentPage: '1',
        countPerPage: '10',
        resultType: 'json',
        confmKey: api_key,
        keyword: value,
      }),
      headers: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      }
    })
    .then( res => {
      var json = JSON.parse(res.data.slice(1, -1)).results
      const _status = errController(json.common.errorCode);
      if(_status.err){
        Alert.alert(_status.msg);
      }else{
        if(json.common.totalCount === '0'){
          Alert.alert("다른 주소로 검색해 보세요");
        }else{
          setRomanames(json.juso);
          setShow(true);
        }
      }
    })
    .catch(e => Alert.alert("연결 상태가 좋지 않습니다.\n다시 시도해 주세요"))
  }



  return (
  <View>
    <ImageBackground source={require('../../assets/images/road5.jpg')} style={styles.bgImage}>
      <View style={styles.container}>
        <View style={styles.searchbarView}>
          <SearchBar
            lightTheme
            onChangeText={text => onChangedText(text)}
            onClear={()=> setShow(false)}
            value={value}
            color={'#000'}
            placeholder="서울시 ..."
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderRadius: 5}}
            inputContainerStyle={{backgroundColor: 'white'}}
          />
        </View>
       
      </View>
      {show ? 
        <AddressModal
        onCloseResult={onCloseResult}
        open={true}
        romanames={romanames}
        />
        : 
        <View style={styles.buttonView}>
        <RoundButton onClick={onClick}/>
      </View>
        }
    </ImageBackground>
  </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 10,
    marginTop: 40,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgImage: {
    width: '100%', 
    height: '100%'
  },

})
export default AddressTab;
