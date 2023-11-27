import { createTRPCReact } from "@trpc/react-query";
import { appRouterType } from ".";

export const trpc = createTRPCReact<appRouterType>({});