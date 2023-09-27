import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Store } from './entities/store.entity';
import { RolesGuard } from 'src/guards/roles.guard';
import { Roles } from 'src/guards/roles.decorator';
import { RolesEnum } from 'src/guards/role.enum';

@ApiTags(`store`)
@Controller('store')
@UseGuards(AuthGuard('jwt'), RolesGuard)
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  @Roles(RolesEnum.User, RolesEnum.Admin)
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get('filter')
  @Roles(RolesEnum.User, RolesEnum.Admin)
  async getAllstore(): Promise<Store[]> {
    return this.storeService.findAll();
  }

  @Get('filter/:categoryId')
  @Roles(RolesEnum.User, RolesEnum.Admin)
  async getStores(@Param('categoryId') categoryId: string): Promise<Store[]> {
    return this.storeService.getStoresByCategory(categoryId);
  }

  @Get(':id')
  @Roles(RolesEnum.User, RolesEnum.Admin)
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(+id);
  }

  @Patch(':id')
  @Roles(RolesEnum.Admin)
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  @Roles(RolesEnum.Admin)
  remove(@Param('id') id: string) {
    return this.storeService.remove(+id);
  }
}
