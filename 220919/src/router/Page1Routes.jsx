import { Page1DetailA } from "../../page1DetailA"
import { Page1DetailB } from "../../page1DetailB"
import { Page1 } from "../page1"

export const page1Routes = [
  {
    path: "/",
    exact: true,
    children:<Page1 />
  },
  {
    path: "/detailA",
    exact: false,
    children:<Page1DetailA />
  },
  {
    path: "/detailB",
    exact: false,
    children:<Page1DetailB />
  },
];