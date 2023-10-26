import { StableDiffusionApiConfig, Txt2ImgOptions } from "stable-diffusion-api"

export type SdwConfig ={
    sdwApi:StableDiffusionApiConfig,
    security:{
        username:string,
        password:string
    },
    model:{
        name:string,
    }
}
export const sdwConfig:SdwConfig ={

    sdwApi: {
        host: "localhost",
        port: 7861,
        protocol: "http",
        timeout: 5 * 60 * 1000,// max time is 5 min
        // defaultSampler: "DPM++ 2M Karras",//Euler a
        // defaultStepCount: 20,
    },
    security:{
        username: "admin",
        password: "admin123"
    },
    model:{
        name:"darkSushiMixMix_225D"
    }

}
type PromptOption = {
    optionTitle:string,
    options:string[],
    defaultWeight?:number
}
type UserInput ={
    promptOptions:PromptOption[]
}
export const userInput:UserInput = {
    promptOptions:[
        {
            optionTitle:"gender",
            options:[
                '1boy','1girl'
            ],
            defaultWeight:2.1
        },
        {
            optionTitle:"background",
            options:[
                'cityscape','forest','beach','mountain','none'
            ],
            // default_weight:2.0
        },

        {
            optionTitle:"accessories",
            options:[
                'glasses','necklace','earrings','scarf','none'
            ]
        },
        // {
        //     option_title:"special holding",
        //     options:[
        //         'teddy bear','AK47','none'
        //     ]
        // },
        {
            optionTitle:"dress",
            options:[
                't-shirt','jacket','coat','skirt','shorts','jeans','trousers','none'
            ]
        },
        {
            optionTitle:"hat",
            options:[
                'red hat','blue hat','green hat','none'
            ]
        },
        {
            optionTitle:"pose",
            options:[
                'sitting','dancing','jumping'
            ]
        },
    ]
}
export const txt2img_input:Txt2ImgOptions ={
    prompt:  " masterpiece, best quality, (colorful),(delicate eyes and face), volumatic light,ray tracing, (bust shot:2.0) ,extremely detailed CG unity 8k wallpaper,",
        // + user_input.prompt.character_looks + user_input.prompt.character_dress + user_input.prompt.character_pose + user_input.prompt.environment,
    
    negative_prompt:  "sketch, duplicate, ugly, huge eyes, text, logo, monochrome, worst face, (bad and mutated hands:1.3), (worst quality:2.0), (low quality:2.0), (blurry:2.0), horror, geometry, bad_prompt, (bad hands), (missing fingers), multiple limbs, bad anatomy, (interlocked fingers:1.2), Ugly Fingers, (extra digit and hands and fingers and legs and arms:1.4), ((2person)), (deformed fingers:1.2), (long fingers:1.2),(bad-artist-anime), bad-artist, bad hand, extra legs",
    // denoising_strength:0.42,
    cfg_scale: 11,
    // seed: 4140751792,
    steps:20,
    sampler_name: "DPM++ 2M Karras",
    width: 512,
    height: 512,
}