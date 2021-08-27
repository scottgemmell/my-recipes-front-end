import axios from "axios";

const baseUrl = url => `http://localhost:3001${url}`;

export const get = async (url) =>
	await axios.get(baseUrl(url));