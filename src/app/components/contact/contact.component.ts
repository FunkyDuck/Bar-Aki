import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

function pseudoWithoutSpecialchar(control: AbstractControl): ValidationErrors | null {
  let valeur: string | null = control.value;
  if(valeur && (!valeur.includes('_') && !valeur.includes('-') && !valeur.includes('.'))){
    return null;
  }else{
    return { 'message': 'C\'est pas bon tout ça...'}
  }
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  form: FormGroup = new FormGroup({
    'pseudo': new FormControl(null, [Validators.required, Validators.maxLength(32), pseudoWithoutSpecialchar]),
    'destination': new FormControl('Patron'),
    'message': new FormControl()
  });

  services: string[] = ['Patron', 'Service', 'Cuisine'];

  constructor() { }

  ngOnInit(): void {
  }

}
