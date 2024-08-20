async function getData(){
    const category = 'success';
    const apiUrl = 'https://api.api-ninjas.com/v1/quotes?category=${category}'

    const options = {
        method: "GET",
        headers: {
            'accept': "application/json",
            'X-Api-Key': '0MSCbVMlFgP3VFOgUECOGw==c34iopAoJwEfrS4m'
        }
    };

    try{
        const response = await fetch(apiUrl, options);
        const data = await response.json();
        return data;
    }   catch (err) {
        console.error(err);
    }
    }

export default async function getQuote(){
    const data = await getData();
    return data;
}