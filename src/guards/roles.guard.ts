import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<number[]>('roles', context.getHandler());
    if (!roles) return true; // Si aucun rôle dans le decorateur j'autoriz l'acces
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (user && roles.includes(user.role_id)) {
      return true;
    }

    throw new ForbiddenException('touche pas à ça ptit con');
  }
}
