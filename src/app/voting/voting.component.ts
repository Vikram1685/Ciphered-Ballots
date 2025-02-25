import { Component, OnInit } from '@angular/core';
import { VotingService } from './voting.service';

@Component({
  selector: 'app-voting',
  templateUrl: './voting.component.html',
  styleUrls: ['./voting.component.scss']
})
export class VotingComponent implements OnInit {

  users: any[]=[];
  seeVote:boolean=false;
  selectedUser: any={};
  selectedId=0;
  candidates:string[]=[];
  Voterchoice:any={};

  constructor(private votingService:VotingService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers()
  {
    this.votingService.getUsers().subscribe((response:any)=>{
      console.log(response)
      this.candidates=response[1]
      for(var i=0;i<response[0].length;i++)
      {
        var user=response[0][i]
        user.name=user.first_name+" "+user.last_name
        this.users.push(user)
      }
      var user_data=localStorage.getItem("User");
      if(user_data!=null && user_data!="" && user_data!= undefined)
      {
        this.selectedUser=JSON.parse(user_data);
        console.log("user in localstorage ",this.selectedUser);
        this.selectedId=this.selectedUser.voter_id;
        console.log(this.selectedId);
        this.UserSelected();
      }
    })
  }

  UserSelected()
  {
    this.seeVote=false;
    console.log(this.selectedId);
    var index=this.users.findIndex((user:any)=>user.voter_id===this.selectedId);
    this.selectedUser=this.users[index];
    this.votingService.getVoteStatus(this.selectedUser.voter_id).subscribe((response:any)=>{
      console.log(response);
      this.selectedUser["votestatus"]=response;
    })
    localStorage.setItem("User",JSON.stringify(this.selectedUser));
    localStorage.setItem("candidates",JSON.stringify(this.candidates));
  }

  CastVote()
  {
    console.log("vote for ", this.selectedUser)

  }

  setUser()
  {
    var user=localStorage.getItem("User");
    if(user!=null && user!="" && user!= undefined)
    {
      this.selectedUser=JSON.parse(user);
      console.log("user in localstorage ",this.selectedUser);
      this.selectedId=this.selectedUser.voter_id;
      console.log(this.selectedId)
    }
  }

  ViewVote()
  {
    this.votingService.getVote(this.selectedId).subscribe((result:any)=>{
      console.log(result)
      this.Voterchoice=result;
      this.seeVote=true;
    })
  }

  toString(data:any)
  {
    return String(data);
  }

}
