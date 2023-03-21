import {StyleSheet} from 'react-native';
import {
  scale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
} from 'react-native-size-matters';

import colors from '../../styles/colors';
// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainStyles: {
    paddingHorizontal: moderateScale(10),
    paddingTop: moderateScale(10),
  },
  textMain: {
    textAlign: 'center',
    color: colors.orange,
    fontFamily: 'sans-serif',
    fontSize: moderateScale(20),
    fontWeight: '300',
  },
  topViewInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: moderateScale(20),
    marginBottom: moderateScale(30),
  },
  topViewInputField: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    fontSize: scale(12),
    flex: 1,
    padding: moderateScale(10),
  },
  ViewRowDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: moderateVerticalScale(10),
  },
  textRowDirection: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(15),
  },
  viewImage: {
    marginTop: moderateVerticalScale(50),
  },
  viewImages: {
    width: '100%',
    height: moderateScale(200),
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: moderateScale(10),
  },
});

export default styles;
