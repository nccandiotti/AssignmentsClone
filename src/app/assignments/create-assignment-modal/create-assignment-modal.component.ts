import { Component, OnInit, Output, EventEmitter, Input, enableProdMode } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {AssignmentInterface} from "../AssignmentInterface"
import { AssignmentsService } from '../assignments.service';



@Component({
  selector: 'app-create-assignment-modal',
  templateUrl: './create-assignment-modal.component.html',
  styleUrls: ['./create-assignment-modal.component.css']
})
export class CreateAssignmentModalComponent implements OnInit {
  program_id:number =  parseInt(this.route.snapshot.params['id']) //taking the id from the route parameters and assigning it to variable
  @Input() showModal:boolean
  randomTestNumber = 5
  @Output() modalBtnClick = new EventEmitter()
  @Output() onAddAssignment: EventEmitter<AssignmentInterface> = new EventEmitter()



  modalForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    // does this have to be a form control since there's no user input? doesn't seem to work w/o form control
    program_id: new FormControl(this.program_id)
    // randomTestNumber: new FormControl(this.randomTestNumber),
  });
  charsRemaining:number=500


  constructor(private assignmentsService: AssignmentsService,
  private route: ActivatedRoute) { }

  ngOnInit(): void {
  }
  //click event for closing modal X button
  onClick(){
    this.modalBtnClick.emit()
  }

  submitModalForm(e:Event, value:AssignmentInterface){
    e.preventDefault()
    // this neeeds to take in an assignment
    this.onAddAssignment.emit({title: value.title, description: value.description, program_id: this.program_id})

    console.log(this.modalForm.value)
    console.log(this.program_id)
    console.log("form submitted")
    // reset values once form is submitted - is there a reset method on forms?
    // this.modalForm.reset()

    // closes modal once form is submitted
     this.modalBtnClick.emit()
  }
  // sets length for character limit
  setLength(event){
 this.charsRemaining = 500 - event.length}
  }
