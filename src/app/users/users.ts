import { Component } from '@angular/core';
import { RoleEnum } from './enums/role.enum';
import { UserInterface } from './interface/users.interface';

@Component({
  selector: 'app-users',
  standalone: false,
  templateUrl: './users.html',
  styleUrl: './users.less',
})
export class Users {
  users: UserInterface[] = [
    {
      name: 'Jan',
      surname: 'Kowalski',
      role: RoleEnum.admin,
      email: 'test1@test.pl',
    },
    {
      name: 'Karol',
      surname: 'Kowalski',
      role: RoleEnum.user,
      email: 'test2@test.pl',
    },
    {
      name: 'Monika',
      surname: 'Nowak',
      role: RoleEnum.user,
      email: 'test3@test.pl',
    },
  ];
}
