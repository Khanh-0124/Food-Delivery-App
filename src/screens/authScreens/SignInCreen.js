import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState, useRef} from 'react';
import Header from '../../components/Header';
import {colors, title} from '../../global/Styles';
import {Icon} from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

export default function SignInCreen({type}) {
  const [textInput2Fossued, setTextInput2Fossued] = useState(false);
  const textInput1 = useRef(1);
  const textInput2 = useRef(2);
  return (
    <View style={styles.container}>
      <Header title="TÀI KHOẢN CỦA TÔI" type="arrow-left" />
      <View style={{marginTop: 10, marginLeft: 20}}>
        <Text style={[title]}>Đăng Nhập</Text>
      </View>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.text1}>Vui lòng nhập email và mật khẩu</Text>
        <Text style={styles.text1}>Đã đăng kí với tài khoản của bạn</Text>
      </View>
      <View style={{marginTop: 20}}>
        <View>
          <TextInput
            style={styles.TextInput1}
            placeholder="Email"
            ref={textInput1}></TextInput>
        </View>

        <View style={styles.TextInput2}>
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon name="lock" color={colors.grey3} type="material"></Icon>
          </Animatable.View>
          <TextInput
            style={{width: '80%'}}
            placeholder="Password"
            ref={textInput2}
            onFocus={() => {
              setTextInput2Fossued(false);
            }}
            onBlur={() => {
              setTextInput2Fossued(true);
            }}
          />
          <Animatable.View
            animation={textInput2Fossued ? '' : 'fadeInLeft'}
            duration={400}>
            <Icon
              style={{marginRight: 10}}
              name="visibility-off"
              color={colors.grey3}
              type="material"></Icon>
          </Animatable.View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text1: {
    color: colors.grey3,
    fontSize: 16,
  },
  TextInput1: {
    borderWidth: 1,
    borderColor: '#86939e',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
    paddingLeft: 15,
  },
  TextInput2: {
    borderWidth: 1,
    borderRadius: 12,
    marginHorizontal: 20,
    borderColor: '#86939e',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: 15,
    alignItems: 'center',
  },
});
