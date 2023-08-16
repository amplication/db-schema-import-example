import { EventWhereUniqueInput } from "../event/EventWhereUniqueInput";
import { TicketListRelationFilter } from "../ticket/TicketListRelationFilter";

export type AttendeeWhereInput = {
  event?: EventWhereUniqueInput;
  tikets?: TicketListRelationFilter;
};
