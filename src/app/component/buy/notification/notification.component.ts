import { Component, OnInit,Inject }                      from '@angular/core';
import { User }                                   from 'app/models/user.model';
import { Product }                                from 'app/models/product.model';
import * as SockJS                                from 'sockjs-client';
import { Client }                                 from '@stomp/stompjs';
import { PurchaseModel }                          from 'app/models/purchase.model';
import { BuyService }                             from 'app/service/buy_service/buy.service';

export interface DialogData {
  state: boolean;
}

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  private client: Client;
  private purchaseModel = new PurchaseModel();
  private purchaseModels:PurchaseModel[] = []
  public showState = false;

  constructor(
    private buyService$ :BuyService) { }


  ngOnInit(): void {
    this.showState =JSON.parse(localStorage.getItem("user"))?true:false
    console.log("[Inicimos Notificaciones]",)
    this.client = new Client();
    this.client.webSocketFactory = () => {
      return new SockJS("http://localhost:8089/chat-websocket");
    }

    this.client.onConnect = (frame) => {
      console.log('Conectados: ' + this.client.connected + ' : ' + frame);
      this.getPurchases();

    }
    this.onConect();


  }

  onConect(){
    this.client.activate();
  }

  getPurchases(){
    const user = "jose@gmail.com"
    this.client.subscribe(`/chat/mensaje/${user}`, e => {
      let mensajes = JSON.parse(e.body) as PurchaseModel[];
      this.purchaseModels = mensajes.map((m)=>{
        return m
      })
      this.buyService$.alertPurchase.emit(this.purchaseModels)
    });
    this.client.publish({ destination: `/app/mensaje`,body:JSON.stringify(this.purchaseModel)});
  }

}
