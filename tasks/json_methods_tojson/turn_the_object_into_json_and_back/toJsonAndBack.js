export function toJsonAndBack(obj) {
    const jsonObj = JSON.stringify(obj);
    const jsonObjDecoded = JSON.parse(jsonObj);

    return jsonObjDecoded;
}
