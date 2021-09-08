import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../constants'

    const styles = StyleSheet.create({
    //Home 
        rootHomecontainer: {
            flex: 1,
            backgroundColor: COLORS.white,
          },
          rootHomeshadow: {
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
        }
});

export default styles
