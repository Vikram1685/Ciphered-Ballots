import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting/voting.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  basicOptions:any={}
  basicData:any={}
  candidates:string[]=[]
  total_votes:any[]=[];
  results:any[]=[];
  constructor(private votingService:VotingService) {
    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
  };
  }


  ngOnInit(): void {
    this.getCandidatesData();
    this.getResults();
  }

  getCandidatesData()
  {
    var candidates=localStorage.getItem("candidates");
    if(candidates!=null && candidates!="" && candidates!=undefined)
    {
      this.candidates=JSON.parse(candidates);
      console.log(this.candidates);
    }
  }

  graphOption()
  {
    this.basicData = {
      labels: this.candidates,
      datasets: [
          {
              label: 'Votes',
              backgroundColor: '#42A5',
              data: this.total_votes
          }
      ],
  };
  }

  getResults()
  {
    this.votingService.results().subscribe((results:any)=>{
      this.results=results;
      let total_votes=0;
      this.results.forEach((cand:any)=>total_votes+=cand.total_votes)
      this.results.push({'candidate':"Total Votes Casted : ","total_votes":total_votes})
      results.forEach((candidate:any)=>this.total_votes.push(candidate.total_votes))
      this.graphOption()

    })
  }

}
