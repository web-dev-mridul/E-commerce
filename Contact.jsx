import { useEffect, useState } from "react";

const Contact = () => {
    const [info, setInfo] = useState([]);
    useEffect (()=>{
        fetch("https://api.escuelajs.co/api/v1/users")
        .then((response)=>response.json())
        .then((data)=>{
            setInfo(data);
        })
    },[])

    return (
        <div className="grid grid-cols-3 gap-10 p-25">
            {info?.map((userInfo)=>(
                <div key={userInfo.id} className="border border-blue-700 rounded-lg flex flex-col items-center p-5">
                    <img src={userInfo.avatar} alt={userInfo.name} className="size-20 rounded-full border-3 border-blue-700"/>
                    <p className="mt-5">Name: {userInfo.name}</p>
                    <p>Email: {userInfo.email}</p>
                    <p>Status: {userInfo.role}</p>
                </div>
            ))}
        </div>
    );
};

export default Contact;