async function getData(){
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
        }
    }


const category = 'success'
const response = fetch("https://api.api-ninjas.com/v1/quotes?category={}'.format(category")
.then((response) => response.json())
.catch((err)=> console.error(err));

return response;
}

export default async function getQuote(){
    const data = await getData();
    return data;
}