/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AttendeeListRelationFilter } from "../../attendee/base/AttendeeListRelationFilter";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { SessionListRelationFilter } from "../../session/base/SessionListRelationFilter";

@InputType()
class EventWhereInput {
  @ApiProperty({
    required: false,
    type: () => AttendeeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => AttendeeListRelationFilter)
  @IsOptional()
  @Field(() => AttendeeListRelationFilter, {
    nullable: true,
  })
  attendees?: AttendeeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => SessionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => SessionListRelationFilter)
  @IsOptional()
  @Field(() => SessionListRelationFilter, {
    nullable: true,
  })
  sessions?: SessionListRelationFilter;
}

export { EventWhereInput as EventWhereInput };
