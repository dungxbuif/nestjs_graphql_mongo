import { CreateStudentInput } from './student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

@Resolver((of) => StudentType)
/* 
   Resolver dùng để tạo truy vấn hoặc mutation
   mutation dùng để create | edit
*/
export class StudentResolver {
  constructor(private studentService: StudentService) {}
  // Đinh nghĩa kiểu trả về cho query
  @Query((returns) => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudent(id);
  }

  @Query((returns) => [StudentType])
  students() {
    return this.studentService.getStudents();
  }

  @Mutation((returns) => StudentType)
  ceateStudent(
    @Args('createStudentInput') createStudentInput: CreateStudentInput,
  ) {
    return this.studentService.createStudent(createStudentInput);
  }
}
