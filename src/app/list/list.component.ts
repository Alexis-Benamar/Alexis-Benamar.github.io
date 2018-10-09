import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

    list: any = [];

    constructor() {
        this.list = [
            {
                title: 'elem1',
                desc: "c'est l'elem1"
            },
            {
                title: 'elem2',
                desc: "bha c'est l'elem2"
            },
            {
                title: 'elem3',
                desc: "flemme"
            }
        ];
    }

    ngOnInit() {
    }

}
