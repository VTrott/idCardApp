import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-account-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.css',
})

export class AccountInfoComponent {
  @Input() isEditing!:boolean;
  @Input() user!: User;
  @Output() userChange=new EventEmitter<User>();

    updateUser(field: keyof User, event: Event) {
      const inputElement = event?.target as HTMLInputElement
      this.user={ ...this.user,[field]:inputElement.value}
      this.userChange.emit(this.user);
    }
}