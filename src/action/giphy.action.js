import axios from 'axios';
import Swal from 'sweetalert2';
import { GIPHY_DATA,APP_URL } from './types';

export function setLoading(load) {
  return {
      type: GIPHY_DATA.LOADING,
      load
  };
}

export function setDatum(datum) {
    return {
        type: GIPHY_DATA.SET_DATA,
        datum
    };
}


export const FetchGiphy = (search = "", limit=9) => {
    return (dispatch) => {
        dispatch(setLoading(true));
        axios.get(`${APP_URL.API}?api_key=${APP_URL.APIKEY}&q=${search}&limit=${limit}`)
        .then(function (response) {
            // handle success
            const datum = response.data;
            dispatch(setLoading(false));
            dispatch(setDatum(datum.data));
        })
        .catch(function (error) {
            // handle error
            dispatch(setLoading(false));
            console.log(error);
            Swal.fire({
                title: 'Network Error.',
                text: error.response.data,
                icon: 'error',
                confirmButtonText: 'Cool'
            })

        })

    };
};