import { Injectable, EventEmitter } from "@angular/core";
import {
  HttpHeaders,
  HttpClient,
  HttpEventType,
  HttpResponse,
} from "@angular/common/http";
import "rxjs";
import { AuthServiceService } from "./auth-service.service";
import { environment } from "./../../environments/environment";
// import "rxjs/add/operator/catch";
import { throwError } from "rxjs";
import { map } from "rxjs/operators";
import { GeneralService } from "./general/general.service";
@Injectable()
export class PayvueserviceService {
  private rootURL = environment.baseURL + "/api/";
  uploadPercent = new EventEmitter();
  isDone = new EventEmitter();
  data: any = 0;
  constructor(
    private http: HttpClient,
    private generalSrvc: GeneralService,
    private authservice: AuthServiceService // private socket: Socket, // private toast: ToastService
  ) {
    this.call_api();
  }

  options: any;

  getUser(): any {
    const userStr = localStorage.getItem("user");
    try {
      const user = JSON.parse(userStr);
      return user;
    } catch (error) {
      return null;
    }
  }

  async call_api() {
    return this.http
      .get("https://www.quandl.com/api/v3/datasets/11319870/data", {
        responseType: "json",
      })
      .subscribe((data) => {
        this.data = data;
        console.log(this.data);
      });
  }

  async apiCall(
    url,
    method = "get",
    data = {},
    isFormData = false,
    showProgress = false
  ): Promise<any> {
    // this.call_api();
    let apiURL = `${this.rootURL}${url}`;
    // if(isFormData) apiURL = `http://192.168.9.123:3000/${url}`
    // if(isFormData) apiURL = `http://23.239.0.110:8082/${url}`

    let userInfo = await this.generalSrvc.getStorage("user_details");

    let token;
    if (userInfo) {
      let details = JSON.parse(userInfo);
      token = details.token;
    }
    let headers = new HttpHeaders({
      Authorization: "Bearer token",
    });

    if (!isFormData) headers = headers.set("Content-Type", "application/json");

    headers = headers.set("Authorization", "Bearer " + token);
    this.options = { headers, reportProgress: false };
    // if (showProgress) {
    // let options = { headers, reportProgress: false, observe: <any>"" };

    //   options.reportProgress = true,
    //     options.observe = 'events'
    // }
    if (showProgress) {
      this.options = { headers, reportProgress: false, observe: "" };

      (this.options.reportProgress = true), (this.options.observe = "events");
    }

    let request: any;

    request = this.http[method](
      apiURL,
      "get delete".includes(method) ? this.options : data,
      this.options
    );

    return new Promise((resolve, reject) => {
      request.subscribe(
        (event) => {
          if (showProgress && event.type === HttpEventType.UploadProgress) {
            const percentDone = Math.round((100 * event.loaded) / event.total);
            this.uploadPercent.emit(percentDone);
          } else if (event instanceof HttpResponse) {
            const done = "File is completely uploaded!";
            this.isDone.emit(done);
          }
          if (event.type === HttpEventType.Response || !event.body) {
            resolve(event.body || event);
          }
        },
        (error) => {
          this.authservice.checkSession(error);
          console.log(error, "errors are happening");
          reject(error);
        }
      );
    });
  }

  // uploadurl = "http://45.56.126.19:3000/api/v1/merchants/file_upload";
  // doUpload(data) {
  //   return this.http.post(this.uploadurl, data).pipe(
  //     map((response: any) => {
  //       const uploaddata = response;
  //       return uploaddata;
  //     })
  //   );
  // }
}
