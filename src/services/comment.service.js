import {axiosService} from "./axios.service";

import {urls} from "../constans";

const commentService ={
    getAll:() => axiosService.get(urls.comments)
}

export {commentService};

