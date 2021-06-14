import { Component, OnInit ,Input, ViewChild,ElementRef } from '@angular/core';
import Chart from 'chart.js';
import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client';
import { SwPush  } from '@angular/service-worker';
import { ProductService } from './../../service/product.service';
import  Push from 'push.js'


import {MatMenuPanel} from '@angular/material/menu';

import { WebPushNotificationsService } from './web-push-notifications.service';


export class Mensaje {
  usuario : string = "";
  texto: string = '';
  fecha: Date;
}


@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html',
    styleUrls:['dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  @ViewChild('someInput') someInput: ElementRef;
  respuestaNotificacion:any
  estilosTest = "none";
  public kys = {
    "publicKey":"BPMv7ncUxiT16PP18_yPPxG1A87sLjluUkz7mR7IidJUHWd7CmvLYI0TpWjLw6j0vkaVFq4ptLZ-AyymXeGxX10",
    "privateKey":"9_nDXaZxbk_f9NWmAfpzHF7wyLQsErvlqtLGb6yKoIM"
  }

  endponf={
      "endpoint":"https://fcm.googleapis.com/fcm/send/cIvNdSV_dUY:APA91bHiSevndR_eq1w7F5EUNiuPYmcrPvvxYlh1bsbk1gDDO0u5zF_1u5HcxCbeiX2X7DB2coaV4TPiW7Ku2RoA1eTo9tyYQWq5rykMnlebnN_7HqHmV7croMly_mrAI6z13hGD0T5G",
      "expirationTime":null,
      "keys":{"p256dh":"BGoAnV8NwG6bgzPjxSsaCfWx0XV4_PP2B__h6xfQTcZx2lKLtsbKx_nJ_Fmaig_13GfizCWPquBOSgP04ktihKc",
      "auth":"-attWDWM7sD82AUvEr7Pjw"}
    }




  readonly VAPID_PUBLIC_KEY = "BPMv7ncUxiT16PP18_yPPxG1A87sLjluUkz7mR7IidJUHWd7CmvLYI0TpWjLw6j0vkaVFq4ptLZ-AyymXeGxX10";

  constructor(
    private swPush: SwPush
    , private productService$:ProductService
    ,private webPushNotificationsService: WebPushNotificationsService){
    //  this.creardata();
    
  }

  creardata(){
    Push.create("Hello world!", {
    body: "How's it hangin'?",
    icon: '/icon.png',
    timeout: 4000,
    onClick: function () {
        window.focus();
        this.close();
    }
});
  }

  subscribirseANotificaciones(){
    this.swPush.requestSubscription(
      {
        serverPublicKey: this.VAPID_PUBLIC_KEY
      }
    ).then(respusta => {
        this.respuestaNotificacion = respusta
        console.log("Ruta--->",JSON.stringify(this.respuestaNotificacion))
    })
     .catch(err => console.error("Could not subscribe to notifications", err));
  }
/*
  notificationClick(){
    console.log("[notificationClick-->]")
    this.swPush.subscription.subscribe(())
  }
*/
  enviarNotificacion(){

  }

  matMenuOpenMenu($event:any){
    $event.stopPropagation()
  }

  onOpenCard(){
    this.estilosTest = "block"
  }


  public items = [
    {collapse:"carlos",collapseIP:"#carlos"},
    {collapse:"jose",collapseIP:"#jose"},
    {collapse:"jose",collapseIP:"#jose"}
  ];
  public notificationAlert : number = 2;
  private client : Client;
  mensaje: Mensaje = new Mensaje();






  public ngOnInit(){

    if (Notification.permission == 'denied') {
      Notification.requestPermission(function (permission){
        if (permission === "granted") {
          var notification = new Notification("Gracias majo!");
        }
      })
    }

    this.webPushNotificationsService.requestPermission();

    this.client = new Client();
    this.client.webSocketFactory = () => {
      return new SockJS("http://localhost:8089/chat-websocket");
    }
    this.client.onConnect = (frame)=>{
      console.log("Usuario ------> ",this.mensaje.usuario)
      console.log("conectados:"+ this.client.connected + ' : ' + frame);
      this.client.subscribe(`/chat/mensaje/${this.mensaje.usuario}`, e => {
        let mensaje: Mensaje = JSON.parse(e.body) as Mensaje;
        mensaje.fecha = new Date(mensaje.fecha);
        this.mensaje = mensaje
        console.log(mensaje);
      });
    }

    this.client.onDisconnect = (frame) => {
      console.log('Desconectados: ' + !this.client.connected + ' : ' + frame);
    }

  }

  onConect(){
    this.client.activate();
  }

  onDesconect(){
    this.client.deactivate();
  }

  onSendMessage(){
    //this.mensaje.usuario = new Date().getTime().toString();
    this.client.publish({ destination: `/app/mensaje`, body: JSON.stringify(this.mensaje) });
  }
}
