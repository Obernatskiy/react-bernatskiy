import {axiosService} from "./axios.service";

import {urls} from "../constans";

const postService = {
    getAll:() => axiosService.get(urls.posts)
};

export {postService};

