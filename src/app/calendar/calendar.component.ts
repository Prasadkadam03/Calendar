import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  monthNames: string[] = ["January", "February", "March", "April", "May", "June", 
                          "July", "August", "September", "October", "November", "December"];
  dayNames: string[] = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  currentMonth: number = new Date().getMonth();
  currentYear: number = new Date().getFullYear();
  dates: number[] = [];

  ngOnInit(): void {
    this.renderCalendar(this.currentMonth, this.currentYear);
  }

  renderCalendar(month: number, year: number): void {
    const firstDay = new Date(year, month, 1).getDay();
    const numDays = this.daysInMonth(month, year);

    this.dates = [];

    for (let i = 0; i < firstDay; i++) {
      this.dates.push(0); 
    }

    for (let i = 1; i <= numDays; i++) {
      this.dates.push(i);
    }
  }

  prevMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.renderCalendar(this.currentMonth, this.currentYear);
  }

  nextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.renderCalendar(this.currentMonth, this.currentYear);
  }

  daysInMonth(month: number, year: number): number {
    return new Date(year, month + 1, 0).getDate();
  }
}
