import { handleGithubLogin } from '@/lib/action';
import LoginForm from '@/components/loginForm/loginForm';
import cls from './login.module.css';

const LoginPage = () => {
    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <form action={handleGithubLogin}>
                    <button className={cls.github}>
                        <img
                            height={15}
                            width={15}
                            src={'/github.png'}
                            alt={''}
                        />{' '}
                        Login with GitHub
                    </button>
                </form>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
