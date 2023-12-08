import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './createBlog.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('blogs')
@UseInterceptors(CacheInterceptor)
export class BlogsController {
    constructor(private blogsService: BlogsService) {}
    

  @Post()
  create(@Body() createCatDto: CreateBlogDto): any {
    return this.blogsService.create(createCatDto);
  }

  @Get()
  findAll(): any {
    return this.blogsService.findAll();
  }
}
