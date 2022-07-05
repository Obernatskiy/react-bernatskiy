import {useForm} from "react-hook-form";

import {createComment} from "../../services/Comment.service";

export default function Comments() {
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: {
                name: 'name',
                body: 'body',
                email: 'exampl@gmail.com'
            }
        });

    const submit = (obj) => {
        createComment(obj).then(({data}) => console.log(data));
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type='text'{...register('name', {required: true})}/>
                {
                    errors.name && <span> Field si required</span>
                }
                <input type='text'{...register('body')}/>
                <input type='text'{...register('email')}/>
                <input type="submit"/>
            </form>
        </div>
    );
}