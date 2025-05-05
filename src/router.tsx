import {
  createRouter,
  createRootRoute,
  createRoute,
} from "@tanstack/react-router";
import App from "./App";
import Home from "./components/Home";
import Contact from "./components/Contact";

// Create the root route
const rootRoute = createRootRoute({
  component: App,
});

// Create child routes
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "contact",
  component: Contact,
});

// Register children
const routeTree = rootRoute.addChildren([homeRoute, contactRoute]);

// Create the router
const router = createRouter({ routeTree });

export default router;
