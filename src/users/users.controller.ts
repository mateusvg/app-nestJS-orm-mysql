import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user-entity';

@Controller('users')
export class UsersController {

    constructor(private service: UsersService) { }

    @Get(':id')
    get(@Param() params) {
        return this.service.getUser(params.id);
    }

    @Get()
    getUsers() {
        return this.service.getUsers();
    }

    @Post()
    create(@Body() user: User) {
        return this.service.createUser(user);
    }

    @Put()
    update(@Body() user: User) {
        return this.service.updateUser(user);
    }

    @Delete(':id')
    deleteUser(@Param() params) {
        return this.service.deleteUser(params.id);
    }
}

function Res(): (target: UsersController, propertyKey: "getUsers", parameterIndex: 0) => void {
    throw new Error('Function not implemented.');
}
