import { Injectable, Inject } from "@angular/core";

import { environment } from "src/environments/environment";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { from, Observable } from "rxjs";
import { tap } from "rxjs/operators";
// import { UniqueDeviceID } from "@ionic-native/unique-device-id/ngx";
// import { Storage } from "@ionic/storage";
import { UserLogin } from "./../interfaces/userlogin";
import { UserAccount, Accounts } from "./../interfaces/useraccount";
// import { EncryptDecrypt } from "./helper/encrpt-decrypt";
// import * as CryptoJS from "crypto-js";
// import { Store } from "@ngrx/store";
// import { AppState, getAllNotes } from "../../reducers";
// import * as NoteActions from "../../actions/note.action";

import { NavController } from "@ionic/angular";
import {Router} from '@angular/router'
import { GeneralService } from "./general/general.service";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  userAccount: UserAccount;

  userData;
  isLoggedIn: boolean = false;

  constructor(
    private http: HttpClient,
    private generalSrvc: GeneralService,
    private router:Router,
    // public storage: Storage,
    private navCtrl: NavController // private uniqueDeviceID: UniqueDeviceID, // private store: Store<AppState>
  ) {
    // this.store.select(getAllNotes).subscribe(note => {
    //   this.isLoggedIn = note;
    // });
  }

  // signUp(data): Observable<any> {
  //   console.log(data);
  //   return this.http.post(`${environment.baseURL}/api/register`, data);
  // }

//   login(token,user) {
// this.generalSrvc.setStorage("token",token);
// this.generalSrvc.setStorage("user",user);
// let intendedURL=this.generalSrvc.getStorage("intendedURL")
// if (intendedURL && intendedURL!=="/login"){
//   this.generalSrvc.removeStorage(intendedURL)
// this.router.navigateByUrl(intendedURL)

//  return;
// }

//   }

  async logout() {
    // window.setTimeout(() => {
    //   this.store.dispatch(new NoteActions.DeleteNote({ note: false }));
    // }, 100);

    // await this.storage.remove("customerNo");
    // await this.storage.remove("clientNo");
    // await this.storage.remove("rsapin");
    // await this.storage.remove("enrolleeNo");
    // await this.storage.remove("uuid");

    this.navCtrl.navigateRoot(["login"]);
  }

  // n    async clearLog() {
  //   this.store.dispatch(new NoteActions.DeleteNote({ note: false }));
  //   await this.storage.remove("customerNo");
  //   await this.storage.remove("clientNo");
  //   await this.storage.remove("rsapin");
  //   await this.storage.remove("enrolleeNo");
  //   await this.storage.remove("uuid");
  // }

  // forgotPassword(email: any) {
  //   return this.http.post(`${environment.baseURL}Accounts/user/create`, email);
  // }

  // fingerPrintApi() {
  //   this.uniqueDeviceID
  //     .get()
  //     .then((uuid: any) => {})
  //     .catch((error: any) => {});
  // }

  // setUserData(data) {
  //   const encryptedUserData = this.encrypt.encrptString(JSON.stringify(data));
  //   this.storage.set("userData", encryptedUserData);
  // }

  // getUserData(): Promise<any> {
  //   return this.storage.get("userData").then(res => {
  //     return JSON.parse(
  //       CryptoJS.AES.decrypt(res, this.salt).toString(CryptoJS.enc.Utf8)
  //     );
  //   });
  // }
  checkSession(err) {
    if (err.status == 401 || err.status == 403) {
      localStorage.setItem("intendedURL", location.pathname);
      this.logout();
      return true;
    }
    return false;
  }
}
