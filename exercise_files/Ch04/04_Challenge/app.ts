/*
Solution 1: use Record
    drawback: final type will have a | in it
-for type of query: make a Record type
    -1st par: prop names
        a) can be any keyof geeric
    -2nd par: types for the props
        a) a function: (_parName_: _parType_) => _outputType_
            i) _parType_ = generic at the key of generic (accessing value of the key of the generic type)
            ii) _outputType_ = boolean

Solution 2: use mapped Type
-type of query will be an object:
    a) key = prop of genericType (use [___ in keyof _genericType_])
    b) value = function
        i) (_parName_: _parType_) => _outputType_
            I)_parType_ = the generic type at the ___ index
            II) _outputType_ = boolean
*/

function query<T>(
    items: T[],
    query: {
        [Prop in keyof T] : (val: T[Prop]) => boolean
    }
) {
    return items.filter(item => {
        // iterate through each of the item's properties
        for (const property of Object.keys(item)) {

            // get the query for this property name
            const propertyQuery = query[property]

            // see if this property value matches the query
            if (propertyQuery && propertyQuery(item[property])) {
                return true
            }
        }

        // nothing matched so return false
        return false
    })
}

const matches = query(
    [
        { name: "Ted", age: 12 },
        { name: "Angie", age: 31 }
    ],
    {
        name: name => name === "Angie",
        age: age => age > 30
    })
