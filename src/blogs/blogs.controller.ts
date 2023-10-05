import { Body, Controller, Get, Post } from '@nestjs/common';
import { BlogsService } from './blogs.service';
import { CreateBlogDto } from './createBlog.dto';

@Controller('blogs')
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
