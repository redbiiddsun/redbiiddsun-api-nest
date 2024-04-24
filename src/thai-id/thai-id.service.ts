import { Injectable } from '@nestjs/common';
import isValidThaiID from 'src/lib/id-validator';
import { ReturnResponse } from 'src/types/responseTypes';

@Injectable()
export class ThaiIdService {
  ValidateThaiID(id: string): ReturnResponse<any> {
    return {
      statusCode: 200,
      message: 'Result of Thai Citizen Identity',
      data: isValidThaiID(id),
    };
  }
}
