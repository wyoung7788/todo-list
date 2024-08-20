

async function getData(): Promise<any>{
    const category: string = 'success';
    const apiKey: string= '0MSCbVMlFgP3VFOgUECOGw==c34iopAoJwEfrS4m';
    const options = {
        method:"GET",
        headers:{
            'X-Api-Key': apiKey,
        }
    }

    const response = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, options);
    if (!response.ok){
            throw new Error(`Error: ${response.statusText}`);
        }
        return await response.json();
    }


export default async function getQuote(){
    const data = await getData();
    return data;
}