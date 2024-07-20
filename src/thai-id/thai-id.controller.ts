import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CheckThaiCitizenDto } from './dto/thaiID.dto';
import { ThaiIdService } from './thai-id.service';

@Controller('/thai-id')
export class ThaiIdController {
  constructor(private readonly thaiIdService: ThaiIdService) {}

  @Post()
  ValidateThaiIDWithBody(@Body() CheckThaiCitizenDto: CheckThaiCitizenDto) {
    return this.thaiIdService.validateThaiID(CheckThaiCitizenDto.id);
  }

  @Get(':id')
  ValidateThaiIDWithParam(@Param('id') id: string) {
    return this.thaiIdService.validateThaiID(id);
  }
}
