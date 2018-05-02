import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage} from "../tabs/tabs";
import { AuthServiceProvider} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  responseData: any;

  userData = {
    "username": "",
    "password": "",
    "name": "",
    "email": ""
  }

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public authserVice: AuthServiceProvider
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup()
  {
    this.authserVice.postData(this.userData,'user')
      .then((result)=>{
        this.responseData = result;
        if(this.responseData.data){
          console.log(this.responseData);
          this.navCtrl.push(TabsPage);
        }
        else{
          console.log('In else');
        }
      })


  }

}
