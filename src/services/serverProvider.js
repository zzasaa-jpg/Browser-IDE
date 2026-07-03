import axios from "axios";

export async function read_Directories(path_) {
    try {
        const response = await axios.get("http://localhost:3000/read_directories", {
            method: "GET",
            params: {
                path: path_,
                // != undefined ? path_ : "C://Users/zzsdr/Desktop/my-react-app"
            }
        });
        if (!response.data.success) {
            return response.message;
        }
        console.log(response.data);
        return response.data;
    } catch (err) {
        if (err.response) {
            console.log(err.response.status);
            console.log(err.response.data);
            console.log(err.response.message);
            console.log("Network Error:", err.message);
            throw err.response.data;
        }
        console.error(err);
    } finally {
        console.log("Request completed");
    }
}
