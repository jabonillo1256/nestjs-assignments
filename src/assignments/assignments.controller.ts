import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

@Controller('assignments')
export class AssignmentsController {
  @Get('prime/:number')
  determinePrimeStatus(@Param('number', ParseIntPipe) number: number): { isPrime: boolean } {
    return { isPrime: this.isNumberPrime(number) };
  }

  private isNumberPrime(num: number): boolean {
    if (num < 2) return false;
    for (let divisor = 2; divisor <= Math.sqrt(num); divisor++) {
      if (num % divisor === 0) return false;
    }
    return true;
  }
}
