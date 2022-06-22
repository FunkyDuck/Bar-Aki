import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';

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
    'message': new FormControl(null, [Validators.required, Validators.minLength(2)])
  });

  services: string[] = ['Patron', 'Service', 'Cuisine'];

  constructor(private _mService: MessageService, private _router: Router) { }

  ngOnInit(): void {
  }

  sendMessage(){
    if(this.form.valid){
      console.info(this.form.value)
      this._mService.sendMessage(this.form.value).subscribe(msg => {
        alert("Message envoyé");
        this._router.navigateByUrl("/home");
      })
    }
  }

}
