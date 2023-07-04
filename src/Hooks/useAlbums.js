import {useEffect, useState} from "react";

const endpoint =`${process.env.REACT_APP_API_URL}Album`;

export function useAlbums(){
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