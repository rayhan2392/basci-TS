{
  //start of block scope
  //keyof generic constraints

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  //mannual process of combining them with union type

  type Owner = "bike" | "car" | "ship";

  //we can do the same with keyof operator

  type Owner2 = keyof Vehicle; //combining all the key of Vehicle type

  const user = {
    name: "Shawn",
    age: 22,
    address: "Comilla",
  };

  console.log(user["name"]);

  //get property value with a function
  const getPropertyValue = <x, y extends keyof x>(obj: x, key: y) => {
    return obj[key];
  };

  const property1 = getPropertyValue(user, "age");
  console.log(property1);

  //end of block scope
}
