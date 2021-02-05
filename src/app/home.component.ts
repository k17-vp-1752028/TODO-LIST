import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
    <div class="card mt-4">
        <div class="card-header bg-danger">
            {{ title }}
        </div>
        
        <div class="card-body">
            <div class="row justify-content-center photo">
                <img src="../assets/photo/gemma-evans-ZDD9vLxqGqY-unsplash.jpg" alt="my-photo">
            </div>
            
            <div class="row justify-content-center mt-3" style="color: brown; font-weight: bolder;">
                <label class="" for="">
                    Name: NGUYEN HOANG LONG
                </label>    
                
            </div>

            <div class="row justify-content-center" style="color: brown; font-style: italic;">
                <label for="" class="">
                    Position: Internship
                </label>
            </div>
            <div class="row justify-content-center" style="color: brown; font-weight: bolder; font-style: italic;">
                <label for="">Welcome to my TODO-LIST</label>
            </div>
        </div>
        
        <div class="card-footer">
            @copyright JayBee
        </div>
    </div>`,
    styleUrls: ['./app.component.css']
})

export class HomeComponent {
    title = 'HOME';
}
