import axios from "axios";
import { Config } from "../types";

export const mock = (url: string, mockPath: string) => {
    return async (config: Config) => {
        return await axios.post(url + mockPath, config);
    }
}