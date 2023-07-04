import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BookingServService } from '../booking-serv.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    phonwNo: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    dot: new FormControl(''),
    area: new FormControl(''),
    city: new FormControl(''),
    pin: new FormControl(''),
    flatType: new FormControl(''),
    state: new FormControl(''),
  });
  constructor(public bkServ: BookingServService) { }

  ngOnInit(): void {
    if (this.bkServ.selectedBookIndex != null) {
      const currentBookings = this.bkServ.allBookings[this.bkServ.selectedBookIndex];
      this.profileForm = new FormGroup({
        firstName: new FormControl(currentBookings.firstName),
        lastName: new FormControl(currentBookings.lastName),
        phonwNo: new FormControl(currentBookings.phonwNo),
        email: new FormControl(currentBookings.email),
        dob: new FormControl(currentBookings.dob),
        dot: new FormControl(currentBookings.dot),
        area: new FormControl(currentBookings.area),
        city: new FormControl(currentBookings.city),
        pin: new FormControl(currentBookings.pin),
        flatType: new FormControl(currentBookings.flatType),
        state: new FormControl(currentBookings.state),
      });
    }
  }

  onSubmit() {
    console.log(this.profileForm.value);
    if (this.bkServ.selectedBookIndex == null) {
      this.bkServ.setBookings(this.profileForm.value);
    } else {
      this.bkServ.allBookings[this.bkServ.selectedBookIndex] = this.profileForm.value;
      this.bkServ.selectedBookIndex = null;
    }
    this.profileForm = new FormGroup({
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      phonwNo: new FormControl(''),
      email: new FormControl(''),
      dob: new FormControl(''),
      dot: new FormControl(''),
      area: new FormControl(''),
      city: new FormControl(''),
      pin: new FormControl(''),
      flatType: new FormControl(''),
      state: new FormControl(''),
    });

  }


}
