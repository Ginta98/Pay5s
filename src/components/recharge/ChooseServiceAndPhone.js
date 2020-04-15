import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList
} from 'react-native';
import * as COLOR from '../../constant/Colors';
import * as Layout from '../../constant/Layout';
import {scaleModerate, scaleVertical} from '../../constant/Scale';
import {getString} from '../../res/values/String';
import {texts} from '../../constant/CommonStyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const {width, height} = Layout.window;
const networkHeight = height / 14;

export default class ChooseServiceAndPhone extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {paddingHorizontal, note} = this.props;

    return (
      <View style={paddingHorizontal ? [styles.container, {paddingHorizontal: paddingHorizontal}] : styles.container}>
        <View style={styles.historyArea}>
          <Text style={[texts.h4, {fontWeight: 'bold'}]}>{getString('DEPOSIT_TO')}</Text>
          <TouchableOpacity>
            <Text style={[texts.normal, {color: COLOR.FACEBOOK}]}>{getString('WATCH_HISTORY')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.selectPhoneAndService}>
          <View style={styles.phoneArea}>
            <TextInput
              style={styles.phone}
              placeholder={getString('TYPE_PHONE_NUMBER')}
              keyboardType={'phone-pad'}
            />
            <TouchableOpacity style={styles.contact}>
              <Icon name={'account-circle'} color={COLOR.CONTACTS} size={scaleModerate(30)}/>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.network}>
            <Image
              style={{width: '100%', height: '100%'}}
              resizeMode={'contain'}
              source={require('../../res/images/recharge/logo_viettel.png')}/>
          </TouchableOpacity>
        </View>
        {
          note && <Text style={[texts.l_normal, {marginTop: scaleVertical(15)}]}>{note}</Text>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    backgroundColor: COLOR.BACKGROUND_COLOR,
    paddingHorizontal: scaleModerate(15),
    paddingVertical: scaleVertical(30),
  },
  historyArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  selectPhoneAndService: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: scaleVertical(10),
  },
  phoneArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.6,
    borderColor: COLOR.BORDER,
    borderRadius: scaleModerate(8),
    height: networkHeight,
    flex: 1,
    marginRight: scaleModerate(10),
  },
  phone: {
    flex: 1,
    paddingHorizontal: scaleModerate(10),
    justifyContent: 'center',
  },
  contact: {
    width: networkHeight,
    height: networkHeight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  network: {
    width: networkHeight,
    height: networkHeight,
    borderWidth: 0.6,
    borderColor: COLOR.BORDER,
    borderRadius: scaleModerate(8),
  },
});