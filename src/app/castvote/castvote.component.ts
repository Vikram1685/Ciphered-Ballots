import { Component, OnInit } from '@angular/core';
import { VotingService } from '../voting/voting.service';

@Component({
  selector: 'app-castvote',
  templateUrl: './castvote.component.html',
  styleUrls: ['./castvote.component.scss']
})
export class CastvoteComponent implements OnInit {

  candidates_data:any[]=[];
  vote_casting_completed:boolean=false;
  vote_casting_status:boolean=false;
  vote_casting_message:any={};
  userdetails:any={};
  vote:any={
    voter_id:0,
    voter_name:"",
    voter_choice:""
  }
  constructor(private votingService:VotingService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails()
  {
    var user_data=localStorage.getItem("User");
    var candidates=localStorage.getItem("candidates");
    if(user_data!=null && user_data!="" && user_data!= undefined)
    {
      this.userdetails=JSON.parse(user_data);
      console.log(this.userdetails)
      this.vote.voter_id=this.userdetails.voter_id;
      this.vote.voter_name=this.userdetails.name;
    }
    if(candidates!=null && candidates!="" && candidates!=undefined)
    {
      JSON.parse(candidates).forEach((candidate:string)=>{
        this.candidates_data.push({"name":candidate,"value":candidate})
      });
    }
  }

  SubmitVote()
  {
    console.log(this.vote);
    this.votingService.submitVote(this.vote).subscribe((response:any)=>{
      console.log(response);
      this.vote_casting_completed=true;
      this.vote_casting_message=response;
    });
  }

}
