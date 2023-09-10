import React, { useState } from "react";
import axios from "axios";

 export function Payment() {
    const [screenshot, setScreenshot] = useState({ image: null });
    const authtoken = localStorage.getItem('Token')
    const handleImageChange = (e) => {
        const file = (e.target.files[0]);
        setScreenshot((prev) => ({ ...prev, image: file }))

    };
    const handleImageUpload = () => {
        const data = { "image": screenshot.image.name }
        axios.post("http://127.0.0.1:8008/v1/api/upload", data, {
            headers: {
                Authorization: authtoken
            }
        })
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err.message))

    }
    return (
        <div>
            <h1>Image Upload</h1>
            <input type="file" name="image" className="form-control" onChange={handleImageChange} />
            <button onClick={handleImageUpload} className="btn btn-info">Upload Image</button>
        </div>
    );
}








