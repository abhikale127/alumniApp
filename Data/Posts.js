import { USERS } from "./Users";

export const POSTS = [

    {
        profile_img: USERS[0].profile_img,
        username: USERS[0].name,
        caption:"Hello,Glad to share this post with you",
        time: "Just Now",
        upload_img:"data:image/jpeg;base64,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",
        likes:"121",
        share:"11",
        comments:[
            {
                profile_img:USERS[4].profile_img,
                name: USERS[4].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[2].profile_img,
                name:USERS[2].name,
                comment:"wow"
            },
        ]
    },
   
    {
        profile_img: USERS[1].profile_img,
        username: USERS[1].name,
        time: "10 m.",
        caption:"Sharing new Opportunity",
        upload_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCRSTwEKgcbQDt1kLDUCQJ-mc6fN-bLz_tBFFixcFtkQ&usqp=CAU&ec=48600112",
        likes:"147",
        share:"7",
        comments:[
            {
                profile_img:USERS[0].profile_img,
                name:USERS[0].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[3].profile_img,
                name:USERS[3].name,
                comment:"wow"
            },
        ]
    },

    {
        profile_img: USERS[2].profile_img,
        username: USERS[2].name,
        time: "1 h.",
        caption:"",
        upload_img:"https://thumbs.dreamstime.com/b/job-vacancy-mechanical-engineer-design-companies-square-social-media-post-layout-hiring-banner-poster-background-te-211681047.jpg",
        likes:"1.2k",
        share:"7",
        comments:[
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[3].profile_img,
                name:USERS[3].name,
                comment:"wow"
            },
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"Beautifull"
            },
        ]
    },
    {
        profile_img: USERS[4].profile_img,
        username: USERS[4].name,
        time: "1 h.",
        caption:"",
        upload_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTurMqclBftOV0hRxyJ_fcXsyvk47LAcGry-GGlfYb4A&usqp=CAU&ec=48600112",
        likes:"147",
        share:"7",
        comments:[
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[3].profile_img,
                name:USERS[3].name,
                comment:"wow"
            },
            {
                profile_img:USERS[0].profile_img,
                name:USERS[0].name,
                comment:"Cute"
            },
        ]
    },

    {
        profile_img: USERS[3].profile_img,
        username: USERS[3].name,
        time: "1 D.",
        upload_img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREb6dXC-GZvWfsfJ6Hn-bYbGl4L8KVhmS8nhlXcMj11Q&usqp=CAU&ec=48600112",
        likes:"147",
        caption:"Love is beautiful",
        share:"7",
        comments:[
            {
                profile_img:USERS[0].profile_img,
                name:USERS[0].name,
                comment:"So Nice"
            },
            {
                profile_img:USERS[1].profile_img,
                name:USERS[1].name,
                comment:"wow"
            },
        ]
    },

]