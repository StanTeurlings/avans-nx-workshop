/**
 * User information required for loggin in
 */
export interface IuserCredentials {
    emailAddress: string;
    password: string;
}

/**
 * User information required for registration
 */
export interface IuserRegistration extends IuserCredentials {
    name: string;
}

export interface IToken {
    token: string;
}
