import StableDiffusionApi, { StableDiffusionApiConfig } from "stable-diffusion-api";
import { SdwConfig } from "./config";

export class MySdw {
    api: StableDiffusionApi;
    constructor(sdwConfig: SdwConfig) {
        this.api = new StableDiffusionApi(
            sdwConfig.sdwApi
        )
        this.api.setAuth(sdwConfig.security.username, sdwConfig.security.password)
      
    }
}
// const api = 
