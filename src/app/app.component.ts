import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EnviaParametrosService } from './services/envia-parametros.service';
import { Parametros } from './models/parametros';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultado='';
 valorX=0;
 valorY=0;
 valorN=0;
 valorPrueba;

  constructor(private service: EnviaParametrosService ,
    private formBuilder: FormBuilder
    ){this.valorPrueba=this.formBuilder.group({x:0,y:0});
   }
 

  metodoPost(){
    let parametros={
      x:this.valorX,
      y:this.valorY,
      n:this.valorN
    } 
    console.log('parametros del form: '+parametros)
    this.service.consultaPost(parametros).subscribe(resul=> 
      {this.resultado=resul;
       });
  }

  metodoGet(){
    let x=this.valorX;
    let y=this.valorY;
    let n=this.valorN; 
    this.service.consultaGet(x,y,n).subscribe(resul=> 
      {this.resultado=resul;
       });
  }
}
