import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Dimensions, StyleSheet } from 'react-native';
import Header from '../../components/common/Header';
import { scaleVertical, scaleModerate, scale } from '../../constant/Scale';
import { PRIMARY_COLOR } from '../../constant/Colors';
import Toast from 'react-native-simple-toast';
import { OTP_FORGET_PASSWORD } from '../../navigators/RouteName';
class ForgetPassword extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: '',
            password: '',
            repeatPassword: ''
        };
    }
    validatePhoneNumber(mobile) {
        var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
        if (vnf_regex.test(mobile)) {
            return 'OK'
        } else {
            return 'Số điện thoại không hợp lệ.'
        }
    }
    validatePassword(password, repeatPassword) {
        if (password == repeatPassword) {
            if (password.length >= 6) {
                return 'OK'
            } else {
                return 'Mật khẩu mới phải trên 6 ký tự'
            }
        } else {
            return 'Mật khẩu và mật khẩu xác nhận không khớp.'
        }
    }
    forgetPasswordFunction() {

        var validatePhoneNumber = this.validatePhoneNumber(this.state.mobile);
        var validatePassword = this.validatePassword(this.state.password, this.state.repeatPassword)
        if (validatePassword == 'OK' && validatePhoneNumber == 'OK') {
            this.props.navigation.navigate
            (OTP_FORGET_PASSWORD, {
               forgetPasswordData:{
                   mobile:this.state.mobile,
                   password:this.state.password
               }
            });
        } else {
            if (validatePhoneNumber == 'OK') {
                Toast.show(validatePassword)
            } else if (validatePassword == 'OK') {
                Toast.show(validatePhoneNumber)
            } else {
                Toast.show(validatePhoneNumber)
            }
        }
    }
    render() {
        return (
            <>
                <Header navigation={this.props.navigation} back={false} title={'Quên mật khẩu'} />
                <View style={{ flex: 1 }}></View>
                <View style={{ flex: 3.5, alignItems: "center", justifyContent: 'flex-start' }}>
                    <TextInput
                        onChangeText={(mobile) => this.setState({ mobile })}
                        style={styles.inputStyle}
                        keyboardType="number-pad"
                        placeholder={'Nhập số điện thoại'}
                    />
                    <TextInput
                        onChangeText={(password) => this.setState({ password })}
                        style={styles.inputStyle}
                        secureTextEntry={true}
                        placeholder={'Nhập mật khẩu mới'}
                    />
                    <TextInput
                        onChangeText={(repeatPassword) => this.setState({ repeatPassword })}
                        style={styles.inputStyle}
                        secureTextEntry={true}
                        placeholder={'Xác nhận mật khẩu'}
                    />
                </View>
                <View style={{ flex: 5, width: '100%', alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.forgetPasswordFunction()}
                    >
                        <View style={{
                            width: containerW * 0.4,
                            height: scale(45),
                            backgroundColor: PRIMARY_COLOR,
                            borderRadius: scaleModerate(10),
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: scaleModerate(14) }}>Lấy mã OTP</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                            onPress={() => this.props.navigation.pop()}
                        >
                            <Text style={{ color: PRIMARY_COLOR, fontWeight: 'bold', marginTop: scaleVertical(25), fontSize: scale(14) }}>Quay lại</Text>
                        </TouchableOpacity>
                </View>
            </>
        );
    }
}
const containerW = Dimensions.get('window').width;
const containerH = Dimensions.get('window').height;
const styles = StyleSheet.create({
    inputStyle: {
        marginTop: scaleVertical(20),
        borderColor: 'black',
        width: '80%',
        paddingVertical: scaleVertical(10),
        paddingHorizontal: scaleModerate(0),
        justifyContent: 'center',
        fontSize: scaleModerate(15),
        borderRadius: scale(10),
        borderLeftWidth: scale(0.7),
        borderTopWidth: scale(0.7),
        borderRightWidth: scale(0.7),
        borderBottomWidth: scale(0.7),
        borderColor: 'gray',
        paddingLeft: scale(10)
    }

})
export default ForgetPassword;