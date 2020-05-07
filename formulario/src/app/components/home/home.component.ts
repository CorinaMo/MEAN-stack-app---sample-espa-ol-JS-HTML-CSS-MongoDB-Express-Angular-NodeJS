import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {

  usersData: any = [];
  userToDelete: any = [];
  constructor(private apiService: ApiService, private route: ActivatedRoute, private router: Router) { }

  public userList(){
    this.apiService.getUsers().subscribe( data => {
      this.usersData = data;
      return this.usersData;
    });
  }
  ngOnInit() {
    this.userList();
 }

public nuevoContacto() {
  this.router.navigate(['/form/']);
}
public actualizarContacto( _id: string) {
  this.router.navigate(['/form/'+ `${_id}`]);

}
public borrarContacto(_id: string) {
  this.apiService.deleteUser(_id).subscribe(data =>{
      this.userToDelete = data;
      return this.userToDelete && location.reload();        
      });    
  }  
}
  

