import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  visible: true;

  private nombre: string;
  private apellidos: string;
  private edad: number;
  private dni: string;
  private cumple: Date;
  private color: string;
  private sexo: string;
  private notas: string;

  userData: any[]=[];

  constructor(public apiService: ApiService, private route: ActivatedRoute, private router: Router) {
   
    let _id = this.route.snapshot.paramMap.get('_id'); 
    if (_id != null){
        this.apiService.getUser(_id).subscribe(data => {
           this.userData = data;         
           return this.userData.forEach(userd => {
              this.nombre = userd.nombre,
              this.apellidos = userd.apellidos,
              this.edad = userd.edad,
              this.dni = userd.dni, 
              this.cumple = userd.cumple,
              this.color = userd.color,
              this.sexo = userd.sexo,   
              this.notas = userd.notas  
           });           
        });
    }else{
            this.nombre = null;
            this.apellidos = null;
            this.edad = null;
            this.dni = null;
            this.cumple = new Date();
            this.color = null;
            this.sexo = "Otro";
            this.notas = null;
    }
}
    ngOnInit() {  }
 
  onSubmit() {
    //en apiService definido como objeto Persona (clase Persona / objeto desestructurado) para PUT y POST
    let userPersona={
       nombre: this.nombre, 
       apellidos: this.apellidos,
       edad: this.edad,
       dni: this.dni,
       cumple: this.cumple,
       color: this.color,
       sexo: this.sexo,
       notas: this.notas
      }      
      
    let _id = this.route.snapshot.paramMap.get('_id'); 

    if (_id != null) {     
     this.apiService.updateUser(_id, userPersona).subscribe(data => {
      userPersona = data;
      return userPersona && this.router.navigate(['']) && event.preventDefault(); 
    })

    } else {
     this.apiService.addUser(userPersona).subscribe(user => {
      userPersona = user;
      return user && this.router.navigate(['']) && event.preventDefault();  
     });
    } 
  }
 
  cerrar() {
    this.router.navigate(['']);
    event.preventDefault();
  }
}
