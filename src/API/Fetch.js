import {API} from '../API/Varibers';
import {Messages_API} from '../API/Varibers';

export const getFundation = (successCallback) => {
    fetch(`${API}/fundations`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
        })
        .catch(error => {
            console.log(error);
           
        });
}
export const getOrganization = (successCallback) => {
    fetch(`${API}/organizations`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
        })
        .catch(error => {
            console.log(error);
           
        });
}

export const getCharitable = (successCallback) => {
    fetch(`${API}/localCharities`)
        .then(response => response.json())
        .then(data => {
            successCallback(data);
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);
            }
        })
        .catch(error => {
            console.log(error);
           
        });
}
export const sendMessage = (messageData, successCallback) => {
    fetch(`${Messages_API}`, {
        headers: {
            "Authorization": API,
            "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(messageData)
    })
        .then(r => r.json())
        .then(data => {            
            if (data.error === false && typeof successCallback === "function") {
                successCallback(data);             
            }
        })
        .catch(err => console.log(err));
};

