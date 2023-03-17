import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';
import colors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgStyle: {
    height: moderateScale(200),
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    color: 'white',
    fontSize: scale(40),
    fontWeight: '600',
    fontFamily: 'sans',
    borderStyle: 'dashed',
    borderBottomWidth: 2,
    borderColor: 'red',
  },
  mainStyles: {
    paddingHorizontal: moderateScale(24),
    paddingVertical: moderateScale(44),
  },
  forgotView: {
    alignSelf: 'flex-end',
    marginVertical: moderateVerticalScale(24),
  },
  forgotText: {
    color: colors.themeColor,
    fontSize: scale(16),
    fontWeight: '600',
  },
});

export default styles;
