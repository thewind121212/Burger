export const updateObject = (oldObject, updatedThing ) => {
    return {
        ...oldObject,
        ...updatedThing
    }
}