import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  api_endpoint=""
  constructor(private http:HttpClient) {
    this.api_endpoint = 'http://127.0.0.1:8000';
  }

  getUsers():Observable<any>
  {
    return this.http.get(this.api_endpoint+"/get_users")
  }

  getVoteStatus(voter_id:number):Observable<any>
  {
    return this.http.get(this.api_endpoint+"/votestatus/"+voter_id)
  }

  submitVote(voteData:any):Observable<any>
  {
    return this.http.post(this.api_endpoint+"/vote",voteData)
  }

  results()
  {
    return this.http.get(this.api_endpoint+"/results");
  }

  getVote(voter_id:number):Observable<any>
  {
    return this.http.get(this.api_endpoint+"/vote/"+voter_id)
  }
}
