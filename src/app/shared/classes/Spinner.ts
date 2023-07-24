import { SpinnerComponent } from "src/app/layout/main-layout/components/spinner/spinner.component";

export class Spinner {

    public static component: SpinnerComponent;

    public static show(){
        setTimeout(()=>this.component.counter++);
    }

    public static hide(){
        setTimeout(()=>this.component.counter--);
    }
    
}