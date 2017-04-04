let OUTSIDE_PARENT = "arbitrary value";

let Subject = (parameters) => {
  return {
    father: parameters.father || OUTSIDE_PARENT,
    mother: parameters.mother || OUTSIDE_PARENT,
    consanguinityWith: (subject) => 0
  }
}


module.exports = { OUTSIDE_PARENT, Subject };
