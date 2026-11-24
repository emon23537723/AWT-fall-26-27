import { IsEmail, IsIn, IsInt, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsString, Length, Matches, Max, Min } from "class-validator";
export class CreateUserDto{
@IsString()
@Length(3,undefined,{"message":"Enter name"})
@IsNotEmpty({"message":"Name cannot empty"})
name!:string;

@IsEmail()
@IsNotEmpty()
email!:string;

@IsString()
@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{"message":"Weak Password"})
@IsNotEmpty()
password!:string

@IsInt()
@Min(18)
@Max(60)
age!:number;


@IsString()
@Matches(/^01/,{"message":"valid no. need "})
@Length(11,11)
phone!:string;

@IsString()
@IsIn(["teacher","student"],{"message":"account type must teacher or student"})
accounttype!:string;

@IsOptional()
@IsString()
@Length(10,)
address!:string;

}

export class UpadateUserDto{
@IsOptional()
@IsString()
name!:string;


@IsOptional()
@IsEmail()
email!:string;

@IsOptional()
@IsString()
@Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,{"message":"Password must be match"})
password!:string

@IsOptional()
@IsInt()
@Min(18)
@Max(60)
age!:number;



@IsString()
@Matches(/^01/,{"message":"phone number must be valid"})
@Length(11,11)
phone!:string;

@IsOptional()
@IsString()
@IsIn(["teacher","student"],{"message":"account type must be teacher or student"})
accounttype!:string;

@IsOptional()
@IsString()
@Length(10,)
address!:string;

}

