import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EvaluationService {
  constructor(private httpClient: HttpClient) {}

  private getAllEvaluationApi = 'http://localhost:8081/evaluations/';
  private updateStatusVerdictApi = 'http://localhost:8081/evaluations/updateStatusVerdict/';
   

  // gets evals
  public getAllEvaluation(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
         Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    console.log(this.httpClient.get(this.getAllEvaluationApi, httpOptions));
    return this.httpClient.get(this.getAllEvaluationApi, httpOptions);
  }

  // update status of eval
  public updateEvaluationStatus(id: number, evalStatus: string): Observable<any> {
    const updateUrl = `${this.getAllEvaluationApi}status/${id}?evalStatus=${evalStatus}`;    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.httpClient.patch(updateUrl, null, httpOptions);
  }
  updateEvaluationVerdict(evaluationId: number, evalVerdict: string): Observable<any> {
    const url = `http://localhost:8081/evaluations/verdict/${evaluationId}?evalVerdict=${evalVerdict}`;
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      }),
    };
    return this.httpClient.patch(url, null, httpOptions);
  }

  public updateStatusAndVerdict(evaluationId: number, evalStatus: string, evalVerdict: string): Observable<any> {
    const url = `${this.updateStatusVerdictApi}${evaluationId}`;
    const params = {
      evalStatus: evalStatus,
      evalVerdict: evalVerdict
    };
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: 'Bearer ' + localStorage.getItem('token')
      })
    };
    return this.httpClient.patch(url, null, { params, ...httpOptions });
  }
}