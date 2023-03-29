//import liraries
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import navigationString from '../../constants/navigationString';
import TextInputLabel from '../../components/textInputLabel';
import styles from './styles';
import imagePath from '../../constants/imagePath';
import ButtonComp from '../../components/ButtonComp';
// create a component
const Login = ({navigation}) => {
  const [isVisible, setVisible] = useState(true);
  const openSignUpPage = () => {
    navigation.navigate(navigationString.FIRST_STEP);
  };
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground
          source={{
            uri: 'https://cache3.pakwheels.com/system/car_generation_pictures/5076/original/toyota_supra.png?1571746232',
          }}
          style={styles.imgStyle}>
          <Text style={styles.logoText}>Login</Text>
        </ImageBackground>
        <View style={styles.mainStyles}>
          <TextInputLabel
            label="Email Address"
            placeholder="Enter your Email"
            inputStyle={{marginBottom: moderateScale(28)}}
            keyboardType="email-address"
          />
          <TextInputLabel
            label="Password"
            placeholder="Enter your Password"
            secureTextEntry={isVisible}
            rightIcon={isVisible ? imagePath.hideEye : imagePath.showEye}
            onPressRight={() => setVisible(!isVisible)}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.forgotView}>
            <Text style={styles.forgotText}>Forgot Password</Text>
          </TouchableOpacity>
          <ButtonComp btnText={'Login'} />
        </View>
        <View style={styles.bottomView}>
          <Text style={{color: 'red'}}>Not a member ?</Text>
          <TouchableOpacity onPress={openSignUpPage}>
            <Text>Join now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

//make this component available to the app
export default Login;
