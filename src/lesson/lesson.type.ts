import { StudentType } from './../student/student.type';
import { Field, ID, ObjectType } from '@nestjs/graphql';

// Để đánh dấu 1 kiểu của graphql
@ObjectType('Lesson') // LessonType sẽ là tên của của lesson vì thế phải định nghĩa trong ObjectType
export class LessonType {
  @Field((type) => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  startDate: string;

  @Field()
  endDate: string;

  @Field((type) => StudentType)
  students: string[];
}
