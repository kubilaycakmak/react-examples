import React from 'react'


const PhotoList = ({resource}) => {

    const photos = resource.photos.read();

    return (
        <div>
            {
                photos.map(photo => (
                    <img style={{ width: 150, height: 150}} key={photo.id} src={photo.url}></img>
                ))
            }
        </div>
    );
}

export default PhotoList;
