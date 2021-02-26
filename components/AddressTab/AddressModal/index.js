import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from "react-native";
import ResultList from '../ResultList'

const AddressModal = (props) => {
  const [modalVisible, setModalVisible] = useState(props.open);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("결과 창을 닫아 주세요");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ResultList romanames={props.romanames}/>
            <View style={styles.buttonView}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#00aced" }}
                onPress={() => {
                  setModalVisible(!modalVisible);
                  props.onCloseResult();
                }}
              >
                <Text style={styles.buttonText}>OK</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    padding: 10,    
    borderRadius: 20,
  },
  modalView: {
    width: '100%',
    height: '80%',
    backgroundColor: "white",
    borderRadius: 10,
    padding: 5,
  },
  buttonView: {
    padding: 10,
    alignItems: 'center'
  },
  openButton: {
    backgroundColor: "#F194FF",
    height: 60,
    width: 60,
    borderRadius: 30,
    paddingVertical: 18,
    elevation: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    // fontSize: 12
  }

});

export default AddressModal;