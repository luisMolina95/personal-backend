import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type BlogDocument = HydratedDocument<Blog>;

@Schema()
export class Blog {
  @Prop()
  body: string;

  @Prop({default: Date.now})
  date: Date;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);