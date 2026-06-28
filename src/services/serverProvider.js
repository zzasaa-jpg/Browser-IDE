import axios from "axios";

export async function read_Directories(path_) {
    try {
        const response = await axios.get("http://localhost:3000/read_directories", {
            method: "GET",
            params: {
                path: path_ != undefined ? path_ : "C://Users/zzsdr/Desktop/my-react-app"
            }
        });
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.error(err);
    } finally {
        console.log("Request completed");
    }
}
