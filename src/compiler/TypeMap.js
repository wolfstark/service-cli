/**
 * 怪异类型兼容
 */
const TypeMap = {
    /* number */
    integer: "number",
    int: "number",
    long: "number",
    longlong: "number",
    double: "number",
    float: "number",

    /* void */
    Void: "void",
    void: "void",

    /* ObjectMap is just like object  */
    object: "ObjectMap",
    Object: "ObjectMap",
    Map: "ObjectMap",
    map: "ObjectMap",

    /* Array */
    List: "Array",
    Collection: "Array",
};
module.exports = {
    TypeMap,
};
