import Geolocation from '@react-native-community/geolocation';
import * as actionTypes from './actionTypes';


  const getDriverPositionStart = () => {
    return {
        type: actionTypes.GET_DRIVERS_LOCATION_START
    }
}

 const getDriverPositionSuccess = (payload) => {
    return {
        type:actionTypes.GET_DRIVERS_LOCATION_SUCCESS,
        payload
    }
}

 const getDriverPositionFail = (payload) => {
    return {
        type: actionTypes.GET_DRIVERS_LOCATION_FAIL,
        payload
    };
};
 export const getDriversCurrentLocation = ()=>{

    return (dispatch) => {
        dispatch(getDriverPositionStart())
        Geolocation.getCurrentPosition((position)=>{
            setTimeout(()=>{
                dispatch(getDriverPositionSuccess(position.coords));
            }, 2000)
            
        },
        (error)=> dispatch(getDriverPositionFail(error)),
        {enableHightAccuracy: true, timeout: 2000, maximumAge: 1000})
    }
    
}
