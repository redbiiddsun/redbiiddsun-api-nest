import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CheckThaiCitizenDto } from './dto/thaiID.dto';
import { ThaiIdService } from './thai-id.service';
import { ApiResponse } from '@nestjs/swagger';

@Controller('/api/thai-id')
export class ThaiIdController {
  constructor(private readonly thaiIdService: ThaiIdService) {}

  @Post()
  ValidateThaiIDPOST(@Body() CheckThaiCitizenDto: CheckThaiCitizenDto) {
    return this.thaiIdService.ValidateThaiID(CheckThaiCitizenDto.id);
  }

  @Get(':id')
  ValidateThaiIDGET(@Param('id') id: string) {
    return this.thaiIdService.ValidateThaiID(id);
  }

}
