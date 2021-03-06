import { put, takeEvery } from 'redux-saga/effects'
import getAccountInfoAPI from '../fetchAPIs/getAccountInfoAPI'
import getCommonConfigAPI from '../fetchAPIs/getCommonConfigAPI'
import getRechargePhoneServiceAPI from '../fetchAPIs/getRechargePhoneServiceAPI'
import getTransferAPI from '../fetchAPIs/getTransferAPI'
import getNotificationAPI from '../fetchAPIs/getNotificationAPI'
//account
function* getAccountInfo(action) {
    try {
        console.log("token:" + action.payload)
        let accountInfoPayback = yield getAccountInfoAPI(action.payload);
        let accountData = accountInfoPayback;
        yield put({
            type: 'GET_ACCOUNT_INFO_SUCCESS',
            payload: { accountData }
        })
    } catch (error) {
        console.log(error.message)
        yield put({
            type: 'GET_ACCOUNT_INFO_FAIL',
            payload: {}
        })
    }
}
//services
function* getRechargePhoneService(action) {
    try {
        let servicePayback = yield getRechargePhoneServiceAPI(action.payload);
        phoneServiceData = servicePayback.data;
        yield put({
            type: 'GET_RECHARGE_PHONE_SERVICE_SUCCESS',
            payload: { phoneServiceData }
        })
    } catch{
        yield put({
            type: 'GET_RECHARGE_PHONE_SERVICE_FAIL',
            payload: {}
        })
    }
}
//common configs
function* getCommonConfig(action) {
    try {
        let commonConfigPayback = yield getCommonConfigAPI(action.payload);
        commonConfigData = commonConfigPayback;
        yield put({
            type: 'GET_COMMON_CONFIG_SUCCESS',
            payload: { commonConfigData }
        })
    } catch{
        yield put({
            type: 'GET_COMMON_CONFIG_FAIL',
            payload: {}
        })
    }
}
//transfer
function* getTransfer(action) {
    try {
        let transferPayback = yield getTransferAPI(action.payload);
        transferData = transferPayback;
        yield put({
            type: 'GET_TRANSFER_SUCCESS',
            payload: { transferData }
        })
    } catch{
        yield put({
            type: 'GET_TRANSFER_FAIL',
            payload: {}
        })
    }
}
//notification
function* getNotification(action) {
    try {
        let notiPayback = yield getNotificationAPI(action.payload);
        notiData = notiPayback;
        yield put({
            type: 'GET_NOTIFICATION_SUCCESS',
            payload: { notiData }
        })
    } catch{
        yield put({
            type: 'GET_NOTIFICATION_FAIL',
            payload: {}
        })
    }
}

export const homeSaga = [
    takeEvery('GET_ACCOUNT_INFO', getAccountInfo),
    takeEvery('GET_RECHARGE_PHONE_SERVICE', getRechargePhoneService),
    takeEvery('GET_COMMON_CONFIG', getCommonConfig),
    takeEvery('GET_TRANSFER', getTransfer),
    takeEvery('GET_NOTIFICATION', getNotification),
];

