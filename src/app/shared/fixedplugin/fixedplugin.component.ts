import { Component, OnInit }                      from '@angular/core';
import { Mensaje }                                from 'app/shared/fixedplugin/model/mesage';
import * as SockJS                                from 'sockjs-client'
import { Client }                                 from '@stomp/stompjs';

@Component({
    moduleId: module.id,
    selector: 'fixedplugin-cmp',
    templateUrl: 'fixedplugin.component.html'
})

export class FixedPluginComponent implements OnInit{

  // Variables
  public sidebarColor: string = "white";
  public sidebarActiveColor: string = "danger";
  mensaje: Mensaje = new Mensaje();
  mensajes: Mensaje[] = [];
  listMenssageState : boolean = false;

  private client: Client;



  // Crear mensaje y activar lista de mensajes
  sendMessage(){
    if(this.mensaje.texto.length > 3 ){
      this.mensaje.tipo = "assets/user.svg";
      this.client.publish({ destination: `/app/mensaje`,body:JSON.stringify(this.mensaje)});
      this.mensaje.texto = "";
      this.listMenssageState = true
    }
  }

  ngOnInit(){
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
    }
    this.client.subscribe(`/chat/mensaje/${this.mensaje.usernameRequest}`, e => {
      let mensaje = JSON.parse(e.body) as Mensaje;
      this.mensajes.push(mensaje);
      new Notification("SODACI",{
         body: "Tienes una nuevo chat",
         icon: './assets/company/logoDaci.svg'
      })
    });
  }

}
