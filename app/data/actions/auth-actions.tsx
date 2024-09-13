"use server";
import {z} from 'zod';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';


export async function registerUserAction(prevState: any, formData=FormData){
    const validatedFields = schemaRegister.safeParse({
        username: formData.get('username'),
        password: formData.get('password'),
        email: formData.get('email'),
    });
    if (!validatedFields.success){
        return {
            ...prevState,
            zodErrors: 
        }
    }
}
}