import AlbForm from "./AlbumForm";
import { useNavigate } from "react-router-dom";


function CreateAlbum(){
    const endpoint =`${process.env.REACT_APP_API_URL}Album`;
    const navigate=useNavigate()

    const handleSubmit =  (newAlbum) => {
        console.log(newAlbum);
        const request = fetch(endpoint, {
            method: 'POST',
            body: JSON.stringify(newAlbum),
            headers: {"Content-Type": "application/json"}
        });
   
        request.then((response) => {
            if(!response.ok) {
                console.error(response.statusText);
            } else {
                navigate("/album");
            }
        })
    };
    return(
        <div>
            <AlbForm onSubmit={handleSubmit}></AlbForm>
        </div>
    )
}

export default CreateAlbum;