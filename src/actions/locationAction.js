import {Dimensions, Text, View} from "react-native";
import Geocoder from "react-native-geocoding";
import Config from "react-native-config";

let {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;

const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;


const getCoordinatesOfCurrentLocation = () => {

    let promise = new Promise((resolve, reject) => {
        try {
            navigator.geolocation.getCurrentPosition(
                position => resolve(
                    {
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                        latitudeDelta: LATITUDE_DELTA,
                        longitudeDelta: LONGITUDE_DELTA
                    }
                ),
                (error) => reject(error.message),
                {enableHighAccuracy: false, timeout: 50000, maximumAge: 1000},
            );
        } catch (err) {
            console.log('error reject');
            reject()
        }


    });

    return promise;

};

const getAddressComponentOFType = (type, address_components) => {
    return address_components.find(component => {

        return component.types.findIndex(comType => comType == type) != -1
    });


}

const getAddressForCoordinates = (coordinates) => {
    console.log('coordinates for address', coordinates);

    let promise = new Promise((resolve, reject) => {
        try {
            Geocoder.init(Config.GOOGLE_API_KEY);
            Geocoder.from(coordinates.latitude, coordinates.longitude).then(
                response => {
                    let addressComponents = response.results[1].address_components;

                    resolve(
                        {
                            street: getAddressComponentOFType('route', addressComponents).long_name,
                            number: getAddressComponentOFType('street_number', addressComponents).long_name,
                            zipCode: getAddressComponentOFType('postal_code', addressComponents).long_name,
                            city: getAddressComponentOFType('locality', addressComponents).long_name

                        }
                    )
                },
                error => reject(error)
            )
            ;

        } catch (err) {
            console.log('error reject');
            reject()
        }


    });

    return promise;


};

export const getAddress = () => dispatch => {
    console.log('getAddress');
    return getCoordinatesOfCurrentLocation()
        .then((coordinates) => getAddressForCoordinates(coordinates))
        .then((address) => {
            console.log('got address', address);

            dispatch({
                payload: address,
                type: 'LOCATION_FETCH'
            })

        })
        .catch((error) => {
            // TODO: do good error handling
            console.error('get location failed', error);
        })

};

export const getCoordinates = () => dispatch => {
    console.log('getCoordinates');
    getCoordinatesOfCurrentLocation()
        .then((coordinates) => {
            console.log('got coordinates', coordinates);

            dispatch({
                payload: coordinates,
                type: 'COORDINATES_FETCH'
            })

        })
        .catch((error) => {
            // TODO: do good error handling
            console.error('get coordinates failed', error);
        })

};
const makeRemoteRequest = () => {
    fetch('https://my-json-server.typicode.com/SylviaGonschior/SmartAddress01/contacts')
        .then((response) => response.json())
        .then((contacts) => {
            this.setState({
                isLoading: false,
                contacts: contacts,
                refreshing: false
            })

        })

        .catch((error) => {
            this.setState({
                isLoading: false,
                error: error,
                refreshing: false
            })
        });


};

export const getContact =(contact) => dispatch => {
    console.log('getContact');
    dispatch({
        payload: contact,
        type: 'CONTACT_FETCH'
    })
};
