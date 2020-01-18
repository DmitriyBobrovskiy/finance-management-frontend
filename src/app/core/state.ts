export enum State {
    None = 0,
    Fetching = 1,
    Completed = 2,

    SignedIn = 3,
    SigningIn = 4,
    SignedOff = 5,

    Error = 9,
    InvalidCredentials = 91,
}
