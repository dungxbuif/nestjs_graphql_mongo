import { StudentService } from './../student/student.service';
import { Lesson } from './lesson.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { LessonResolver } from './leson.resolver';
import { LessonService } from './lesson.service';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson]), StudentService],
  providers: [LessonResolver, LessonService],
})
export class LessonModule {}
