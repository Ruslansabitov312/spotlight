import cls from './register.module.css';
import RegisterForm from '@/components/registerForm/registerForm';

const RegisterPage = () => {
    return (
        <div className={cls.container}>
            <div className={cls.wrapper}>
                <RegisterForm />
            </div>
        </div>
    );
};

export default RegisterPage;
