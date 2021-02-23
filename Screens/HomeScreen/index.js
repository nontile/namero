import React, { useState } from "react";
import { Alert, StyleSheet, Text,View, Modal, TouchableOpacity, Pressable, ScrollView } from "react-native";
import { Header } from "react-native-elements";
import Colors from "../../components/Colors";
import licenseText from "../../Config/lisence";
import explainText from "../../Config/explain";

const HomeScreen = () => {
  const [license, setLicense] = useState(false);
  const [explain, setExplain] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <Header
      backgroundColor={Colors.bluecolor}
      leftComponent={{
        icon: "menu",
        color: "#fff",
        onPress: () => setModalVisible(true),
      }}
      centerComponent={
        <View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ justifyContent: "flex-end" }}>
              <Text
                style={{ fontSize: 16, color: "white", fontWeight: "bold" }}
              >
                한글영어{" "}
              </Text>
            </View>
            <View style={{ justifyContent: "flex-start" }}>
              <Text
                style={{
                  fontSize: 20,
                  fontStyle: "italic",
                  color: Colors.yellowColor,
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                R
              </Text>
            </View>
            <View style={{ justifyContent: "flex-end" }}>
              <Text
                style={{
                  fontSize: 16,
                  fontStyle: "italic",
                  color: Colors.yellowColor,
                  textDecorationLine: "underline",
                  fontWeight: "bold",
                }}
              >
                o
              </Text>
            </View>
          </View>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.container}>
              <View style={styles.modalView}>
                <Pressable
                   style={[styles.button, styles.buttonOpen]}
                  onPress={() => {
                    setModalVisible(false);
                    setExplain(true);
                  }}
                >
                  <Text style={styles.textStyle}>설명</Text>
                </Pressable>

                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setModalVisible(false);
                    setLicense(true);
                  }}
                >
                  <Text style={styles.textStyle}>Open Source License</Text>
                </Pressable>
              </View>
            </View>
          </Modal>

          {license ? (
            
            <Modal
              animationType="slide"
              transparent={true}
              visible={license}
              onRequestClose={() => {
                Alert.alert("종료 됩니다.");
                setLicense(!license);
              }}
            >
              <ScrollView >
              <View style={styles.licenseView}>
              <Text >{licenseText}</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setLicense(!license)}
              >
              <Text style={styles.textStyle}>확인</Text>
              </Pressable>
            </View>
            </ScrollView>
            </Modal>
          ) : null}

          {explain ? (
            <Modal
              animationType="slide"
              // transparent={true}
              visible={explain}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setExplain(!explain);
              }}
            >
              <ScrollView >
              <View style={styles.licenseView}>
              <Text>{explainText}</Text>
              </View>
            </ScrollView>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setExplain(!explain)}
              >
              <Text style={styles.textStyle}>확인</Text>
              </Pressable>
            </Modal>
          ) : null}
        </View>
      }
    />
  );
};
const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    backgroundColor: "white",
    padding: 35,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 0.1,
  },
  buttonOpen: {
    backgroundColor: "#fff",
  },
  buttonClose: {
    backgroundColor: "#fff",
  },
 
  textStyle: {
    color: "black",
    fontSize: 20,
  },

  licenseView: {
    // flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: "white",
    padding: 15,
    
  }
 
});
export default HomeScreen;
