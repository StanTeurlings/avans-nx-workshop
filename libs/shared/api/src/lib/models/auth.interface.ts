/**
 * User information required for loggin in
 */
export interface IAdopterCredentials {
    emailAddress: string;
    password: string;
}

/**
 * User information required for registration
 */
export interface IAdopterRegistration extends IAdopterCredentials {
    firstName: string;
}

export interface IToken {
    token: string;
}
