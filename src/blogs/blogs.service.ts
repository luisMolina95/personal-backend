import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Blog } from './blog.schema';
import { Model } from 'mongoose';
import { CreateBlogDto } from './createBlog.dto';

@Injectable()
export class BlogsService {
    constructor(@InjectModel(Blog.name) private blogModel: Model<Blog>) {}

    async create(createCatDto: CreateBlogDto): Promise<Blog> {
      const createdBlog = new this.blogModel(createCatDto);
      return createdBlog.save();
    }
  
    async findAll(): Promise<Blog[]> {
      return this.blogModel.find().exec();
    }
}
