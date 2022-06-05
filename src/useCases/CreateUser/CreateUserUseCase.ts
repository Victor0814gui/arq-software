import { User } from "../../entities/Use";
import { IEmailProvider } from "../../providers/IEmailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";



class CreateUserUseCase {
    constructor(
        private usersRepository: IUsersRepository,
        private mailProvider: IEmailProvider
    ){}
    async execute(data:ICreateUserRequestDTO){
        const userAlreadyExists = await this.usersRepository.findByEmail(data.email)

        if(userAlreadyExists){
            throw new Error("user already exists")
        }

        const user = new User(data);

        await this.usersRepository.save(user)

        await this.mailProvider.sendEmail({
            to:{
                name: data.name,
                email: data.email, 
            },
            from: {
                name: "Equipe do meu app",
                email:"aqupedomeuapp@mail.com",
            },
            subject:"Seja bem vindo a plataforma",
            body:"<p>Você já pode acessar a plataforma</p>"
        })
    }
}

export { CreateUserUseCase };