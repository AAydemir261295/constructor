export async function request(url) {

    try {
        const response = await fetch(url, { credentials: "include" });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        // let resp = await response.json();

        // console.log(url);
        // console.log(resp);
        
        // if (resp.result == false) {
        //     // window.location.replace("/login");
        // } else {
        //     return resp;
        // }


        return await response.json();
    } catch (error) {
        console.error(error.message);
    }
}
