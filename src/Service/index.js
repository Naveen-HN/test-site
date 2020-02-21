export function getDataFromServer(apiPath, reqMethod, formBody) {
    let myHeaders = new Headers();
    myHeaders.append('content-Type', 'application/JSON');

    if (!reqMethod && reqMethod !== 'POST') {
        return fetch(apiPath, {
            method: "GET",
            headers: myHeaders
        })
    } else {
        if (formBody) {
            let fetchData = {
                method: "POST",
                body: JSON.stringify(formBody),
                headers: myHeaders
            }
            return fetch(apiPath, fetchData)
        }
    }
}