import React, {Component} from 'react';
import {
  Modal,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import * as COLOR from '../../constant/Colors';
import * as Layout from '../../constant/Layout';
import {scaleModerate, scaleVertical} from '../../constant/Scale';
import {getString} from '../../res/values/String';
import {texts} from '../../constant/CommonStyles';

const {width, height} = Layout.window;

export default class ChooseNetwork extends Component {
  constructor(props) {
    super(props);
  }

  _close = () => this.props.close();

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.props.visible}
          onRequestClose={() => this._close()}>
          <TouchableOpacity activeOpacity={1} onPress={()=>this._close()} style={styles.container}>
            <TouchableOpacity activeOpacity={1} style={styles.contentArea}>
              <View style={styles.header}>
                <TouchableOpacity style={styles.closeButton} onPress={() => this._close()}>
                  <Text style={[texts.placeholder, {fontWeight: 'bold'}]}>{getString('CLOSE')}</Text>
                </TouchableOpacity>
                <Text style={texts.bold}>{getString('CHANGE_NETWORK')}</Text>
                <View style={styles.closeButton}>
                  <Text style={[texts.placeholder, {color:'transparent'}]}>{getString('CLOSE')}</Text>
                </View>
              </View>
              <View style={styles.separateLine}/>
              <View style={styles.note}>
                <Text style={texts.l_placeholder}>{getString('CHANGE_NETWORK_NOTE')}</Text>
              </View>
            </TouchableOpacity>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLOR.MODAL_BACKGROUND_LIGHT,
    justifyContent: 'flex-end',
  },
  contentArea: {
    width: width,
    paddingBottom: scaleVertical(10),
    backgroundColor: COLOR.BACKGROUND_COLOR,
    borderTopLeftRadius: scaleModerate(5),
    borderTopRightRadius: scaleModerate(5)
  },
  header: {
    height: height / 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scaleModerate(10),
  },
  separateLine:{
    height: scaleVertical(1),
    backgroundColor:COLOR.SEPARATE_LINE
  },
  closeButton: {
    height: height / 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  note: {
    paddingHorizontal: scaleModerate(10),
    paddingVertical: scaleVertical(10),
  },
});