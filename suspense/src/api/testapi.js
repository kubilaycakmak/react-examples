import axios from 'axios'

const fetchPhotos = () => {
    return axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(({data}) => {
            return data;
        })
}

const wrapPromise = (promise) => {

    let status = 'pending';
    let result;

    let suspender = promise.then(
        (response) => {
        status = 'success';
        result = response;
    },
    (error) => {
        status = 'error';
        result = error;
    });


    return {
        read: () => {
            switch(status){
                case 'pending':
                    throw suspender;
                case 'error':
                    throw result;
                default:
                    return result;
            }
        }
    }
}

export const craeteResource = () => {
    let photoPromise = fetchPhotos();


    return {
        photos: wrapPromise(photoPromise)
    }
}