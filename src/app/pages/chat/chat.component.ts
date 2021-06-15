import { Component, OnInit }                      from '@angular/core';
import * as SockJS                                from 'sockjs-client'
import { Client }                                 from '@stomp/stompjs';
import { Mensaje }                                from 'app/shared/fixedplugin/model/mesage';
import * as Push from 'push.js';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  private userChat : "chat@gmail.com";//string = JSON.parse(localStorage.getItem("user")).email
  public userChatList = [];
  mensaje: Mensaje = new Mensaje();
  mensajes: Mensaje[] = [];
  listMenssageState : boolean = false;
  private client: Client;

  constructor() {

  }

  ngOnInit(): void {
    console.log("[Inicimos Notificaciones]",)
    this.client = new Client();
    this.client.webSocketFactory = () => {
      return new SockJS("https://sodaci.herokuapp.com/chat-websocket");
      //return new SockJS("http://localhost:8181/chat-websocket");
    }
    this.client.onConnect = (frame) => {
      console.log('Conectados Chat: ' + this.client.connected + ' : ' + frame);
      this.getPurchases();
    }
    this.client.activate();// Meter en un metodo


  }

  getPurchases(){
    this.mensaje = {
      ...this.mensaje,
      usernameResponse : "chat@gmail.com"
    }
    console.log("tenemos me",this.mensaje);
    this.client.subscribe(`/chat/mensaje/${this.mensaje.usernameResponse}`, e => {
      let mensaje = JSON.parse(e.body) as Mensaje;
      this.mensajes.push(mensaje);
      if(!this.userChatList.includes(mensaje.usernameRequest)){
        this.userChatList.push(mensaje.usernameRequest);
        new Notification("SODACI",{
           body: "Tienes una nuevo chat",
           icon: './assets/company/logoDaci.svg'
        })
      }
    });
  }

  getItems(item) {
    return this.mensajes.filter((v)=>v.usernameRequest==item);
  }

  deleteItems(item) {
    this.mensajes = this.mensajes.filter((v)=>v.usernameRequest!=item);
    this.userChatList = this.userChatList.filter((v)=>v!=item);
    console.log(this.mensajes);
  }

  sendMessage(item){
    console.log(item);
    console.log(this.mensaje)
    this.mensaje = {
      ...this.mensaje,
      usernameRequest:item,
      tipo:"assets/company/logoDaci.svg"
    }
    this.client.publish({ destination: `/app/mensaje`,body:JSON.stringify(this.mensaje)});
    this.mensaje.texto = "";
  }
}
