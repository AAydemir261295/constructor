export async function request(url) {

    try {
        const response = await fetch(url, { credentials: "include" });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        let result = await response.json();
        console.log(result);
        return result;

        // return await response.json();
    } catch (error) {
        console.error(error.message);
    }
}
