import { Controller, Get, Param, Query, BadRequestException } from '@nestjs/common';  

@Controller('assignments')  
export class AssignmentsController {  
  @Get('fibonacci')  
  getFibonacci(@Query('n') n: string): number[] {  
    const num = this.parseInput(n);  
    return this.calculateFibonacci(num);  
  }  

  @Get('fibonacci/:n')  
  getFibonacciWithParam(@Param('n') n: string): number[] {  
    const num = this.parseInput(n);  
    return this.calculateFibonacci(num);  
  }  

  private parseInput(input: string): number {  
    const num = parseInt(input, 10);  
    if (isNaN(num) || num < 0 || num > 93) {  
      throw new BadRequestException('Invalid number. Please provide a non-negative integer up to 93.');  
    }  
    return num;  
  }  

  private calculateFibonacci(n: number): number[] {  
    const fibonacci: number[] = [];  

    if (n === 0) {  
      return fibonacci;  
    }  

    if (n === 1) {  
      return [0];  
    }  

    if (n === 2) {  
      return [0, 1];  
    }  

    let a = 0, b = 1;  
    fibonacci.push(a, b);  

    for (let i = 2; i < n; i++) {  
      const next = a + b;  
      fibonacci.push(next);  
      a = b;  
      b = next;  
    }  

    return fibonacci;  
  }  
}