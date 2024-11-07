import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { LayoutService } from "./service/app.layout.service";
import { AuthService } from '../auth/services/auth.service';

import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html'
})
export class AppTopBarComponent {

    items!: MenuItem[];

    @ViewChild('menubutton') menuButton!: ElementRef;

    @ViewChild('topbarmenubutton') topbarMenuButton!: ElementRef;

    @ViewChild('topbarmenu') menu!: ElementRef;

    constructor(
        public readonly layoutService: LayoutService,
        private readonly _authService: AuthService,
        private router: Router,
    ) { }

    logOut() {
        this._authService.logOut();
        this.router.navigate(['/auth/login']);
    }
}
