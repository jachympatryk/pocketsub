import { UrlObject } from "url";

export interface NavLink {
  name: string;
  path: UrlObject | __next_route_internal_types__.RouteImpl<string>;
  icon: string;
}
