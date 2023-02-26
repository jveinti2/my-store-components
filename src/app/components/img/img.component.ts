import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss'],
})
export class ImgComponent {
  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>()
  imgDefault =
    'https://cdn.memegenerator.es/imagenes/memes/full/32/49/32495927.jpg';
  imgError() {
    this.img = this.imgDefault;
  }
  imgLoaded() {
    console.log('loaded child');
    this.loaded.emit(this.img)
  }
}
