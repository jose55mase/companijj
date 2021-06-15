export class Mensaje {
  id : string = new Date().getTime() + '-' + Math.random().toString(36).substr(2);
  texto: string = '';
  tipo:string;
  //fecha: Date;

  usernameRequest: string = new Date().getTime() + '-' + Math.random().toString(36).substr(2);
  usernameResponse : string = "";
}
