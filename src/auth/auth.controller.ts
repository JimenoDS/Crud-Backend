import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth') 
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register') 
  register(@Body() createUserDto: CreateUserDto) {
    return this.authService.register(createUserDto);
  }
}
