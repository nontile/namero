import axios from 'axios';
import React from 'react';
import {View, StyleSheet, ImageBackground, Alert} from 'react-native';
import { SearchBar } from 'react-native-elements';
import RoundButton from '../RoundButton';
import ResultModal from '../ResultModal';


const NameTab = () => {
  const client_id = '0dsTBkLlilmreeuwFIsa';
  const client_secret = '90DBVZkFXR';

  const [show, setShow] = React.useState(false);
  const [value, onChangedText] = React.useState('');
  const [romanames, setRomanames] = React.useState([]);

  const onCloseResult = () => {
    setShow(false);
  }

  const onClick = () => {
    setShow(false);
    const regex = new RegExp(/^[가-힣]{2,4}$/);
    const isok = regex.test(value);
    if (!isok) {
      Alert.alert('한글 이름을 입력해 주세요');
    }else{
      getRomaWord();
    }
  }

  const getRomaWord = () => {
    axios({
      method: 'get',
      url: `https://openapi.naver.com/v1/krdict/romanization?query=${value}`,
      headers:{
        'X-Naver-Client-Id': client_id,
        'X-Naver-Client-Secret': client_secret
      }
    }).then((res) => {
        const rs = res.data.aResult[0];
        // console.log(rs)
        if (rs === undefined)
          Alert.alert('다른 이름으로 검색해 보세요')
        else{
          setRomanames(rs);
          setShow(true);
        }
    })
    .catch(e => Alert.alert("네트워크 상태가 좋지 않습니다.\n다시 시도해 주세요"))
  }

  return (
  <View>
    <ImageBackground source={require('../../assets/images/background3.jpg')} style={styles.bgImage}>
      <View style={styles.container}>
        <View style={styles.searchbarView}>
          <SearchBar
            lightTheme
            onChangeText={text => onChangedText(text)}
            onClear={()=> setShow(false)}
            value={value}
            color={'#000'}
            placeholder="홍길동"
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={{backgroundColor: 'white', borderRadius: 5}}
            inputContainerStyle={{backgroundColor: 'white'}}
          />
        </View>
      </View>
      {show ?
        <ResultModal
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
export default NameTab
