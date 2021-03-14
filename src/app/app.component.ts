import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'moodBoardCreator';
  data = [
    {
      "name": "Dhaka",
      "destination": "Saarbrücker Str. 38, 10405 Berlin"
    },
    {
      "name": "Bangladesh",
      "destination": "Saarbrücker Str. 38, 10405 Berlin"
    }];
}
