import { AttendeeWhereUniqueInput } from "../attendee/AttendeeWhereUniqueInput";

export type TicketWhereInput = {
  attendee?: AttendeeWhereUniqueInput;
};
