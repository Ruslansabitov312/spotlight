'use client';

import cls from './adminPostForm.module.css';
import { useFormState } from 'react-dom';
import { addPost } from '@/lib/action';

const AdminPostForm = ({ userId }) => {
    const [state, formAction] = useFormState(addPost, undefined);

    return (
        <form action={formAction} className={cls.container}>
            <h1>Add new Post</h1>
            <input required type="hidden" name={'userId'} value={userId} />
            <input required type="text" name={'title'} placeholder={'Title'} />
            <input required type="text" name={'slug'} placeholder={'Slug'} />
            <input type="text" name={'img'} placeholder={'Image link'} />
            <textarea
                required
                name="desc"
                id="desc"
                rows={10}
                placeholder={'Text'}
            />
            <button>Add</button>
            {state?.error && <span className={cls.error}>{state?.error}</span>}
        </form>
    );
};

export default AdminPostForm;
