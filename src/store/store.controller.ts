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

@ApiTags(`store`)
@Controller('store')
@UseGuards(AuthGuard())
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  create(@Body() createStoreDto: CreateStoreDto) {
    return this.storeService.create(createStoreDto);
  }

  @Get('filter')
  async getAllstore(): Promise<Store[]> {
    return this.storeService.findAll();
  }

  @Get('filter/:categoryId')
  async getStores(@Param('categoryId') categoryId: string): Promise<Store[]> {
    console.log(
      'je suis dans le controller et je log categoryId : ',
      categoryId,
    );
    return this.storeService.getStoresByCategory(categoryId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStoreDto: UpdateStoreDto) {
    return this.storeService.update(+id, updateStoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storeService.remove(+id);
  }
}