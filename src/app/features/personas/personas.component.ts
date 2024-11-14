import { Component } from '@angular/core';
import { ApiPersonasService } from '../../core/services/api-personas.service';
import { Persona } from '../../core/models/persona.interface';
import { PersonaCreateEditComponent } from "../persona-create-edit/persona-create-edit.component";
import { error } from 'console';

@Component({
  selector: 'app-personas',
  standalone: true,
  imports: [PersonaCreateEditComponent],
  templateUrl: './personas.component.html',
  styleUrl: './personas.component.scss'
})
export class PersonasComponent {
  peopleData? : Persona[];
  toUpdate?:Persona | undefined;
  constructor(private apiService:ApiPersonasService){}

  deleteRecord(id:number){
    this.apiService.deletePerson(id).subscribe(
      (result)=>{
        console.log("ok")
      },(error)=>{
        console.error("No eliminó",error)
      }
    )
  }

  updateRecord(record:Persona){
    this.toUpdate = record
  }

  ngOnInit():void{
    this.apiService.getPeople().subscribe(
      (data)=>{
        this.peopleData = data.data
        
      },
    (error)=>{
      console.error("error")
    });
  }
}
