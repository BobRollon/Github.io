
async function recup_data(file_name) {
    result = await fetch(file_name);
    let data = await result.json();
    return data;
}
