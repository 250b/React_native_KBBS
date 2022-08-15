import { StyleSheet, View, ScrollView } from 'react-native';
import {useState} from 'react';
import SignUpInput from '../login-signUp-component/SignUpInput';
import Topbar from '../login-signUp-component/Topbar';
import BirthInput from '../login-signUp-component/BirthInput';
import GenderInput from '../login-signUp-component/GenderInput';
import 'react-native-gesture-handler';

export const SignUpScreen=({navigation})=> {
  const[signUpId, setSignUpId] = useState('');
  const[signUpPw, setSignUpPw] = useState('');
  const[signUpName, setSignUpName] = useState('');
  const[signUpYear, setSignUpYear] = useState('');
  const[signUpMonth, setSignUpMonth] = useState('');
  const[signUpDay, setSignUpDay] = useState('');
  const[signUpGender, setSignUpGender] =useState('남');

  const GenderHandler=(gender)=>{
    setSignUpGender(gender)
  };
    
  const pressHandler=()=>{
    navigation.navigate('Login')
  };

    return (
      <View style={styles.container}>
        <Topbar
          button={"<"} text={"회원가입"}
          pressHandler={pressHandler}/>
          <ScrollView showsVerticalScrollIndicator={false}>
              <SignUpInput
                name={"아이디"}
                value={signUpId}
                setValue={setSignUpId}/>
              <SignUpInput
                name={"비밀번호"}
                value={signUpPw}
                setValue={setSignUpPw}/>
              <SignUpInput
                name={"닉네임"}
                value={signUpName}
                setValue={setSignUpName}/>
              <BirthInput
                name={"생년월일"}
                yearValue={signUpYear}
                setSignUpYear={setSignUpYear}
                monthValue={signUpMonth}
                setSignUpMonth={setSignUpMonth}
                dayValue={signUpDay}
                setSignUpDay={setSignUpDay}/>
              <GenderInput
                name={"성별"}
                selectedValue={signUpGender}
                leftValue={"남"} rightValue={"여"}
                setValue={GenderHandler}/>
          </ScrollView>
        <BottomButton
          text={"완료"} 
          pressHandler={pressHandler}/>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent: 'center'
    },
  })