import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent {

  constructor(private studentServrice: StudentService) { }

  ngOnInit(): void {

    // Fetch All Students
    // This is an observable so we have to subscribe to an observable.
    // If we don't subscribe then no http calls will be made
    this.studentServrice.getStudents()
      .subscribe(
        (successResponse) => {
          console.log(successResponse[0].firstName)
          console.log(successResponse[0].lastName)
        }
      );
  }
}
