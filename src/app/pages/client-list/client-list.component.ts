import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Import Services
import { ClientService } from '../../services/client.service';
// Import Models
import { Client } from '../../domain/svrsample1_db/client';

// START - USED SERVICES
/**
* ClientService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id Vendor
*
* ClientService.list
*	@description CRUD ACTION list
*	@returns ARRAY OF Vendor
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Client
 * @class ClientListComponent
 */
@Component({
    selector: 'app-client-list',
    templateUrl: './client-list.component.html',
    styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
    list: Observable<any[]>;
    search: any = {};
    idSelected: string;
    constructor(
        private clientService: ClientService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.list = this.clientService.list();
    }

    /**
     * Select Client to remove
     *
     * @param {string} id Id of the Client to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Client
     */
    deleteItem() {
        this.clientService.remove(this.idSelected);
    }

}
