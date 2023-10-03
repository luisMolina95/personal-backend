import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CreateCatDto } from './createCat.dto';

@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}
    

  @Post()
  create(@Body() createCatDto: CreateCatDto): any {
    return this.catsService.create(createCatDto);
  }

  @Get()
  findAll(): any {
    return this.catsService.findAll();
  }
}
