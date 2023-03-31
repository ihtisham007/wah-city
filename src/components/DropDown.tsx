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
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <DropDownPicker
        items={items}
        open={isOpen}
        value={value}
        setOpen={() => setIsOpen(!isOpen)}
        setValue={setValue}
        maxHeight={height}
        autoScroll
        placeholder={placeholder}
        zIndex={9999}
        style={style}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: moderateScale(10),
  },
  label: {
    fontWeight: 'bold',
    marginBottom: moderateScale(5),
    color: 'white',
  },
});

export default Dropdown;
