import {useEffect, useState} from "react";


export function useAlbum(id){
    const endpoint =`${process.env.REACT_APP_API_URL}Album/${id}`;
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const request = fetch(endpoint);
        console.log(endpoint)
        request
            .then((apiResponse) => {
                if (!apiResponse.ok) {
                    console.error(apiResponse.statusText);
                    return;
                }

                return apiResponse.json();
            })
            .then((apiResult) => {
                setAlbums(apiResult);
            });
    }, []);

    return albums;
};