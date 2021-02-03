// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

// Import Services
import { ClientService } from '../../services/client.service';
import { JobService } from '../../services/job.service';

// Import Models
import { Client } from '../../domain/svrsample1_db/client';
import { Job } from '../../domain/svrsample1_db/job';

// START - USED SERVICES
/**
* ClientService.create
*	@description CRUD ACTION create
*	@param Vendor obj Object to insert
*
* ClientService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id Vendor
*	@returns Vendor
*
* ClientService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* JobService.findByvendor
*	@description CRUD ACTION findByvendor
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a  Client
 */
@Component({
    selector: 'app-client-edit',
    templateUrl: 'client-edit.component.html',
    styleUrls: ['client-edit.component.css']
})
export class ClientEditComponent implements OnInit {
    item: any = {};
    itemDoc: AngularFirestoreDocument<Client>;
    isNew: Boolean = true;
    formValid: Boolean;

    

    externalJob_vendor: Job[];

    constructor(
        private clientService: ClientService,
        private jobService: JobService,
        private route: ActivatedRoute,
        private location: Location) {
        // Init list
        this.externalJob_vendor = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.isNew = false;
                this.itemDoc = this.clientService.get(id);
                this.itemDoc.valueChanges().subscribe(item => this.item = item);

                this.jobService.findByVendor(id).subscribe(list => this.externalJob_vendor = list);
            }
            // Get relations
        });
    }



    /**
     * Save Client
     *
     * @param {boolean} formValid Form validity check
     * @param Client item Client to save
     */
    save(formValid: boolean): void {
        this.formValid = formValid;
        if (formValid) {
            if (this.isNew) {
                // Create
                this.clientService.create(this.item);
                this.isNew = false;
            } else {
                // Update
                this.clientService.update(this.itemDoc, this.item);
            }
            this.goBack();
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }

}
