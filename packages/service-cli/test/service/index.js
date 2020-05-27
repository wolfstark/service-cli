import { defs as api1Defs, api1 } from "./api1";

window.defs = {
    api1: api1Defs
};
window.API = {
    api1
};
api1.address.getQuery.fetch({ a: 3 }).then(res => {
    res;
});
