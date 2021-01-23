import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import "rxjs/Rx";
import { environment } from "src/environments/environment";

import { Plugins } from "@capacitor/core";

const { Storage } = Plugins;

@Injectable({
  providedIn: "root",
})
export class GeneralService {
  // url: string = environment.url;
  // url_mobile: string = environment.baseURL;

  constructor(public http: HttpClient) {}

  // getCountries() {
  //   return this.http.get(`${this.url}/countries`);
  // }

  // getStates() {
  //   return this.http.get(`${this.url}/states`);
  // }

  // getGenders() {
  //   return this.http.get(`${this.url}/genders`);
  // }

  // getOccupations() {
  //   return this.http.get(`${this.url}/occupations`);
  // }

  // getWorkSectors() {
  //   return this.http.get(`${this.url}/work_sectors`);
  // }

  // getEducationSectors() {
  //   return this.http.get(`${this.url}/education_sectors`);
  // }

  // getDesignations() {
  //   return this.http.get(`${this.url}/designations`);
  // }

  // getBanks() {
  //   return this.http.get(`${this.url}/banks`);
  // }

  // getMaritalStatus() {
  //   return this.http.get(`${this.url}/marital_status`);
  // }

  // getLoanPurpose() {
  //   return this.http.get(`${this.url}/loan_purpose`);
  // }

  // getResidenceTypes() {
  //   return this.http.get(`${this.url}/residence_types`);
  // }

  // getLGA(id) {
  //   return this.http.get(`${this.url}/states/${id}/lgas`);
  // }

  // getSettings() {
  //   return this.http.get(`${this.url}/settings`);
  // }

  // getAmounts(data) {
  //   return this.http.post(`${this.url_mobile}/customer/loan/offers`, data);
  // }

  async setStorage(key, value) {
    await Storage.set({
      key,
      value,
    });
  }

  async getStorage(key) {
    const ret = await Storage.get({ key });
    return ret.value;
  }

  async removeStorage(key) {
    await Storage.remove({ key });
  }

  async clearStorage() {
    await Storage.clear();
  }
}
