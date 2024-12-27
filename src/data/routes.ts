export type Route = "home" | "about" | "work" | "writing";

export type Article = {
  date: string;
  title: string;
  summary: string;
};

export const routeStatus = {
  present: "home",
  past: "home",
};

export function updateRouteStatus(newRoute: Route) {
  routeStatus.past = routeStatus.present;
  routeStatus.present = newRoute;
}

export function transitTo(
  newRoute: Route,
  setSwapPage: (value: boolean) => void
) {
  updateRouteStatus(newRoute);
  setSwapPage(true);
}
