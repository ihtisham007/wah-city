import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import {moderateScale} from 'react-native-size-matters';

const Dropdown = ({
  label,
  items,
  value,
  setValue,
  height,
  placeholder,
  style = {},
  onChangeValueText = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={{}}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        items={items}
        open={isOpen}
        value={value}
        setOpen={() => setIsOpen(!isOpen)}
        setValue={setValue}
        placeholder={placeholder}
        style={{marginTop: isOpen ? 172 : 30}}
        autoScroll
        onChangeValue={onChangeValueText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    marginBottom: moderateScale(5),
    color: 'white',
  },
});

export default Dropdown;
