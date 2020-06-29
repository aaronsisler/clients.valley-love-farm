import { CDN_URL } from "../config";

const getCdnUrl = (folder = "") => `${CDN_URL}${folder}`;

export default getCdnUrl;
