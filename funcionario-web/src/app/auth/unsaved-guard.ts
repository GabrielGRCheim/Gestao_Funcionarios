import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';

export interface UnsavedChanges {
  hasUnsavedChanges(): boolean;
}

@Injectable({ providedIn: 'root' })
export class UnsavedGuard implements CanDeactivate<UnsavedChanges> {
  canDeactivate(
    component: UnsavedChanges
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (component.hasUnsavedChanges()) {
      return confirm('Você tem alterações não salvas. Deseja sair mesmo assim?');
    }
    return true;
  }
}
