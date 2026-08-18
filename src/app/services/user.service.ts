import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { user } from '../../data/user';
import { User } from '../models/user';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    updated = new EventEmitter()

    get() {
        const u = localStorage.getItem('@nws-user')

        if (!u) {
            localStorage.setItem('@nws-user', JSON.stringify(user))
        }

        return JSON.parse(localStorage.getItem('@nws-user')!)
    }

    update(data: User) {
        localStorage.setItem('@nws-user', JSON.stringify(data));
        this.updated.emit()
    }
}
