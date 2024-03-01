import { Component } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent {
  files: Array<any> =[

  ];
  state = false;
  currentFile:any={};

  isFirstPlaying(){
    return false;
  }
  
  isLastPlaying(){
    return true;
  }
}
