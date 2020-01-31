import { Component, OnInit } from '@angular/core';
import * as classie from 'classie';

@Component({
	selector: 'app-pre-oferta',
	templateUrl: './pre-oferta.component.html',
	styleUrls: ['./pre-oferta.component.scss']
})
export class PreOfertaComponent implements OnInit {

	//Config textTarea
	textareaConfig:string = "input--readonly";
	valor :string = "Apreciado (a) \n\n Lorem ipsum dolor sit amet consectetur adipiscing elit nec aenean laoreet tortor fames etiam, cras blandit parturient lobortis sed interdum dictum dapibus per orci consequat luctus. Scelerisque mattis tempus ante parturient ultricies hac natoque est, dictumst justo pellentesque risus curae rhoncus at etiam, placerat arcu porttitor elementum in inceptos morbi. Id tempor elementum aptent tristique sociosqu dapibus fames mi justo, senectus penatibus sem ultricies primis phasellus platea arcu lacus, leo dictum ante nisi neque libero condimentum maecenas.\n\n Ornare auctor convallis laoreet aenean libero facilisi lacinia integer, lectus lacus vulputate dignissim montes tempus pharetra, morbi suspendisse litora curae lobortis fusce vestibulum. Cum semper suspendisse nibh rutrum magnis nullam sollicitudin, vel egestas velit ridiculus quis per, interdum bibendum fermentum conubia facilisi tempor. Cubilia placerat tempor rhoncus lacus facilisis quisque ligula fames nisi dapibus, massa leo ad sollicitudin quam tristique litora interdum fusce, suspendisse curae a luctus quis senectus blandit curabitur at. Posuere habitant cursus euismod natoque phasellus erat sociis in, cubilia risus aenean auctor cras sodales enim. \n\n Natoque varius vivamus augue ligula viverra quam venenatis conubia at, praesent egestas hendrerit metus euismod laoreet scelerisque urna et consequat, est facilisi a penatibus suscipit dis tempor aptent. Curae senectus egestas quis justo sem cursus nec, aptent ligula interdum felis tristique mi laoreet turpis, libero parturient scelerisque pellentesque dignissim neque a, ac dis luctus per sociis ultrices. Venenatis cubilia ligula metus ac blandit pulvinar elementum hac consequat, tempus eleifend ut quam neque magnis fusce felis, mollis eget montes vel iaculis cum parturient nam.";

	constructor() { }

	ngOnInit() {
	}



}
