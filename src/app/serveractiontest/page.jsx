import { addPost, deletePost } from '@/lib/action'


const ServerActionTestPage = () => {

    return (
        <div>
            <form action={addPost}>
                <input type="text" name={"title"} placeholder={"title"} />
                <input type="text" name={"desc"} placeholder={"desc"} />
                <input type="text" name={"userId"} placeholder={"userId"} />
                <input type="text" name={"slug"} placeholder={"slug"} />
                <button>CREATE</button>
            </form>

            <form action={deletePost}>
                <input type="text" placeholder={"postId"} name={"id"} />
                <button>DELETE</button>
            </form>
        </div>
    )
}

export default ServerActionTestPage