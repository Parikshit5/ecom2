import argon2 from 'argon2';

export const hashPassword=async(password)=>{
    try {
        const saltRounds=10;
        const hashPassword=argon2.hash(password,saltRounds);
        return hashPassword;
    } catch (error) {
        console.log(error);
    }
}

export const comparePassword=async(password,hashedPassword)=>{
    return argon2.verify(hashedPassword,password);  
}