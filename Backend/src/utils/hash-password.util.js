import bscrypt from 'bcrypt';

export const handleHashPassword = async ({password,saltNumber =10})=>{
    //hashpassword
    const salt = await bscrypt.genSalt(saltNumber);
    const hashPassword = await bscrypt.hash(password, salt);

    return hashPassword;
}

export const  handleComparePassword = async ({password, hashPassword}) => {
    return await bscrypt.compare(password,hashPassword)
}