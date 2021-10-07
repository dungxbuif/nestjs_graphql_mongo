import { Field, ID, ObjectType } from '@nestjs/graphql';

// Để đánh dấu 1 kiểu của graphql
@ObjectType('student') // StudentType sẽ là tên của của Student vì thế phải định nghĩa trong ObjectType
export class StudentType {
  @Field((type) => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
