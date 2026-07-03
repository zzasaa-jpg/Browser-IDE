import { SupportsFileSystemAPI } from "../Utilities/SupportsFileSystemApi.js";

export async function CheckFileSystemAPI(path) {
	const supported = SupportsFileSystemAPI();
	console.log("SupportsFileSystemAPI() =", supported);
	if (supported) {
		return 49;
	}
	return 48;
}