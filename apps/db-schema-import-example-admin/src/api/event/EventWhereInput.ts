import { AttendeeListRelationFilter } from "../attendee/AttendeeListRelationFilter";
import { SessionListRelationFilter } from "../session/SessionListRelationFilter";

export type EventWhereInput = {
  attendees?: AttendeeListRelationFilter;
  sessions?: SessionListRelationFilter;
};
