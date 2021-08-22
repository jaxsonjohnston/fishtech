export async function getAllData() {

    try{
        const response = await fetch('/backend/data');
        return await response.json();
    }catch(error) {
        return [];
    }

}