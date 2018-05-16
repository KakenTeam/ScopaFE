import { DatePipe } from "@angular/common";
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'dateTimeVi'
})
export class DateTimeViPipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {

  }

  transform(value: any, args?: any): any {
    return moment(value).locale('vi').format('lll');
  }

}
