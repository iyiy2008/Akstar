import React from 'react';
import Header from './Header';
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';


const Signup = ({ signup, setSignup }) => {
  return (
    <>
      <div>
        <div className='flex justify-center items-center mb-10'>
          <div className='w-[450px] border-[#0B0B0B] rounded-lg show py-7 px-7'>
            <Card className='flex text-center' color="transparent" shadow={false}>
              <h2 className='font-bold text-2xl leading-8 text-[#242424]'>
                Регистрация
              </h2>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-4 flex flex-col gap-4">
                  <Input className='block' size="lg" label="Имя" required/>
                  <Input className='block' size="lg" label="Фамилия" required/>
                  <Input className='block' size="lg" type='number' label="Телефон" required/>
                  <Input className='block' size="lg" type='email' label="Почта" required/>
                  <Input className='block' type="password" size="lg" label="Пароль" required/>
                </div>
                <Button type='submit' className="mt-7 bg-[#1B37A3]" fullWidth>
                  Зарегистрироваться
                </Button>
                <Typography color="gray" className="mt-4 text-center font-normal">
                  <span>
                    Уже есть аккаунт?
                  </span>
                  <Link to={'/login'} className="font-medium logo ml-2">
                    Войти
                  </Link>
                </Typography>
              </form>
            </Card>
          </div>

        </div>
      </div>
    </>
  );
};

export default Signup;
