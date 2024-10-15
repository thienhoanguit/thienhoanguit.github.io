import { WhereFilterOp } from "firebase/firestore";

export interface FilterModel  {
    fieldName: string;
    opStr: WhereFilterOp;
    value: string;
}