import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../model/Item';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {

    constructor(private httpService: HttpClient){
    }

    getAll() : Observable<Item[]> {
        return this.httpService
            .get<Item[]>(`${environment.itemService.server}/Items`);
    }

    delete(id: string) : Observable<Item> {
        return this.httpService
            .delete<Item>(`${environment.itemService.server}/Items/${id}`);
    }
}