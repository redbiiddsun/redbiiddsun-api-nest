import { Injectable } from '@nestjs/common';
import { ReturnResponse } from 'src/types/responseTypes';

@Injectable()
export class ThaiIdService {
  // Credit: https://github.com/jukbot/thai-citizen-id-validator
  isValidThaiID(id: string): boolean {
    if (!/^\d{13}$/.test(id)) {
      return false;
    }

    let sum = 0;
    for (let i = 0; i < 12; i++) {
      sum += Number(id[i]) * (13 - i);
    }
    const checkSum = (11 - (sum % 11)) % 10;

    return checkSum === Number(id[12]);
  }

  validateThaiID(id: string): ReturnResponse<any> {
    return {
      statusCode: 200,
      message: 'Result of Thai Citizen Identity',
      data: this.isValidThaiID(id),
    };
  }
}
