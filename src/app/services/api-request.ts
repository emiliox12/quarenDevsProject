import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //withCredentials: true
};

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private _httpClient: HttpClient) { }

  async callApi(serviceURL, requestData){
    const serviceRequestPromise = this._httpClient
        .post(serviceURL, JSON.stringify(requestData), httpOptions)
        .toPromise();
      const rawSrvResp: any = await serviceRequestPromise;
      return rawSrvResp;
  }

}
