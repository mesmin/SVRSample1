/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE vendorBaseService PLEASE EDIT ../vendor.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';
import { AngularFireFunctions } from '@angular/fire/functions';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Vendor } from '../../domain/svrsample1_db/vendor';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Vendor.service.ts
 */

/*
 * SCHEMA DB Vendor
 *
	{
		VendorName: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class VendorBaseService {

    private vendorCollection: AngularFirestoreCollection<Vendor>;
    constructor(
        private afs: AngularFirestore,
        private fns: AngularFireFunctions
    ) {
        this.vendorCollection = afs.collection<Vendor>('vendor');
    }


    // CRUD METHODS

    /**
    * VendorService.create
    *   @description CRUD ACTION create
    *   @param Vendor obj Object to insert
    *
    */
    create(item: Vendor): Promise<DocumentReference> {
        return this.vendorCollection.add(item);
    }

    /**
    * VendorService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id Vendor
    *
    */
    remove(id: string) {
        const itemDoc: AngularFirestoreDocument<any> = this.vendorCollection.doc(id);
        itemDoc.delete();
    }

    /**
    * VendorService.findByVendorName
    *   @description CRUD ACTION findByVendorName
    *   @param Objectid key Id of the resource VendorName to search
    *
    */
    findByVendorName(id: string): Observable<any[]> {
        return this.afs.collection('vendor', ref => ref.where('VendorName', '', id)).snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Vendor;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * VendorService.list
    *   @description CRUD ACTION list
    *   @returns ARRAY OF Vendor
    *
    */
    list(): Observable<Vendor[]> {
        return this.afs.collection('vendor').snapshotChanges().pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Vendor;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );
    }

    /**
    * VendorService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id Vendor
    *   @returns Vendor
    *
    */
    update(itemDoc: AngularFirestoreDocument<Vendor>, item: Vendor): Promise<void> {
        return itemDoc.update(item);
    }


    // Custom APIs

}
