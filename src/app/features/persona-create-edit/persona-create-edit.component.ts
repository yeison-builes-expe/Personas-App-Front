import { Component, Input } from '@angular/core';
import {FormControl, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { ApiPersonasService } from '../../core/services/api-personas.service';
import { Persona } from '../../core/models/persona.interface';

@Component({
  selector: 'app-persona-create-edit',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './persona-create-edit.component.html',
  styleUrl: './persona-create-edit.component.scss'
})
export class PersonaCreateEditComponent {
  personaForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    nit: new FormControl(''),
    phoneNumber: new FormControl('')
  });

  @Input() personData?: Persona;

  constructor(private apiService:ApiPersonasService){}

  onSubmit(){
    const model : Persona = {
      nombre:this.personaForm.value["firstName"]!,
      apellido:this.personaForm.value["lastName"]!,
      cedula:this.personaForm.value["nit"]!,
      celular:this.personaForm.value["phoneNumber"]!,
    }
    if(this.personData){
      model.id = this.personData.id
      this.apiService.updatePerson(model).subscribe(
        (response)=>{
          console.log("actualizado")
        },
        (error)=>{
          console.error("error actualizar",error)
        }
      )
    }else{
      this.apiService.createPerson(model).subscribe(
        (response)=>{
          console.log("creado")
        },
        (error)=>{
          console.error("error creacion")
        }
      )
    }
  }

  ngOnChanges():void{
    if (this.personData) {
      this.personaForm.patchValue({
        firstName: this.personData.nombre,
        lastName: this.personData.apellido,
        nit: this.personData.cedula,
        phoneNumber: this.personData.celular
      });
    }
  }
}
