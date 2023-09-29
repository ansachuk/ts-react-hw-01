import dataJson from "./data";
import friendsJson from "./friends";
import transactionsJson from "./transactions";
import userJson from "./user";

import { Data, Friend, Transaction, User } from "../types/types";

export const data: Data[] = dataJson;
export const friends: Friend[] = friendsJson;
export const transactions: Transaction[] = transactionsJson;
export const user: User = userJson;
