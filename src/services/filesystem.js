import { SupportsFileSystemAPI } from "../Utilities/SupportsFileSystemApi.js";
import * as BrowserProvider from "./browserProvider.js";
import * as ServerProvider from "./serverProvider.js";

export async function readDirectories(path) {
	const supported = SupportsFileSystemAPI();
	console.log("SupportsFileSystemAPI() =", supported);
	if (supported) {
		return BrowserProvider.read_Directories();
	}
	return ServerProvider.read_Directories(path);
}