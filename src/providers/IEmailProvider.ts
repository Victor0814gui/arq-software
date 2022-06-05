interface IAddess {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAddess;
    from: IAddess;
    subject: string;
    body: string;
}

export interface IEmailProvider {
    sendEmail(message:IMessage):Promise<void>
}