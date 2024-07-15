import { IsOptional, IsString } from 'class-validator';

export class FilterDto {
  @IsString()
  @IsOptional()
  region: string;

  @IsString()
  @IsOptional()
  page: string;
}
