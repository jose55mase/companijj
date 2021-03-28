import { Component, OnInit,  Renderer2,
  ViewChild, ElementRef }                         from '@angular/core';
import { Router }                                 from '@angular/router';
import { Location}                                from '@angular/common';
import { MatBottomSheet }                         from '@angular/material/bottom-sheet';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

import { LoginService }                           from './../../service/login_service/login.service';
import { LoginComponent }                         from './../../component/login/login.component';
import { ROUTESNABAR }                            from '../../startApp';
import { User }                                   from 'app/models/user.model';
import { NotificationComponent }                  from 'app/component/buy/notification/notification.component';
import { BuyService }                             from 'app/service/buy_service/buy.service';

@Component({
    moduleId: module.id,
    selector: 'navbar-cmp',
    templateUrl: 'navbar.component.html'
})

export class NavbarComponent implements OnInit{
    private listTitles: any[];
    location: Location;
    public user = new User();
    private nativeElement: Node;
    public alertasAyudasConteo : number= 0;
    public alertasAyudasState : boolean= false;

    private toggleButton;
    private sidebarVisible: boolean;

    public isCollapsed = true;
    @ViewChild("navbar-cmp", {static: false}) button;
    getUserLogin(){
      this.user = JSON.parse(localStorage.getItem('user'))?JSON.parse(localStorage.getItem('user')):"";

    }

    constructor(location:Location, private renderer : Renderer2, private element : ElementRef,
      private router: Router, private _bottomSheet: MatBottomSheet,private loginService$ : LoginService,
      public dialog: MatDialog, private buyService$ :BuyService) {
        this.location = location;
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }


    abrirCerrarModal(): void {
      const dialogRef = this.dialog.open(NotificationComponent, {
        width: '750px',
        height: '400px',
        data: {state:true }
      });
      
    }


    public onClickShowLoginView(){
      //this.loginService$.loginStateView.emit(true);
      this._bottomSheet.open(LoginComponent)
    }

    ngOnInit(){
        this.getUserLogin()
        this.listTitles = ROUTESNABAR.filter(listTitle => listTitle);
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
        this.router.events.subscribe((event) => {
          this.sidebarClose();
       });
       this.buyService$.alertPurchase.subscribe(v=>{this.alertasAyudasConteo = v.length})
       if(localStorage.getItem("user")){
         this.alertasAyudasState = true;
       }
    }

    closeLogin(){
      localStorage.clear()
    }

    getTitle(){
      var titlee = this.location.prepareExternalUrl(this.location.path());
      if(titlee.charAt(0) === '#'){
          titlee = titlee.slice( 1 );
      }
      for(var item = 0; item < this.listTitles.length; item++){
          if(this.listTitles[item].path === titlee){
              return this.listTitles[item].title;
          }
      }
      return 'Dashboard';
    }

    sidebarToggle() {
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        } else {
            this.sidebarClose();
        }
    }
    sidebarOpen() {
        const toggleButton = this.toggleButton;
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        setTimeout(function(){
            toggleButton.classList.add('toggled');
        }, 500);

        html.classList.add('nav-open');
        if (window.innerWidth < 991) {
          mainPanel.style.position = 'fixed';
        }
        this.sidebarVisible = true;
    };
    sidebarClose() {
        const html = document.getElementsByTagName('html')[0];
        const mainPanel =  <HTMLElement>document.getElementsByClassName('main-panel')[0];
        if (window.innerWidth < 991) {
          setTimeout(function(){
            mainPanel.style.position = '';
          }, 500);
        }
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    collapse(){
      this.isCollapsed = !this.isCollapsed;
      const navbar = document.getElementsByTagName('nav')[0];
      console.log(navbar);
      if (!this.isCollapsed) {
        navbar.classList.remove('navbar-transparent');
        navbar.classList.add('bg-white');
      }else{
        navbar.classList.add('navbar-transparent');
        navbar.classList.remove('bg-white');
      }

    }

}
