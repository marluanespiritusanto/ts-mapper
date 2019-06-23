# TypeScript Automapper

Inspired by [MaDEiN83](https://github.com/MADEiN83) mapper

## Installation

```bash
$ npm install ts-mapper
```

## Usage

### Create map

To create a mapping between two objects, you must call the object method `createMap` of the TypeMapper class.

It takes two interfaces:

-  first interface must be the source interface
-  second interface must be the destination interface

So, if we have an object of type `ISource` and we want a object of type `IDestination`, we should create a new mapping like that:

```ts
import { TypeMapper } from "ts-mapper";
import { ISource, IDestination } = "../path/of/interfaces.ts";

export class Mapper extends TypeMapper {
   constructor() {
      super();
      this.config();
   }

   private config(): void {
      // put here your mapping configurations
      this.createMap<ISource, IDestination>();
   }
}

const mapper = new Mapper();

```

### Map fields

After we create a mapping between interfaces, we can now create all mappings between all wanted properties of our objects (source & destination).

For example, if we want to map the property `sourceObject.srcOther` to `destinationObjet.other`, we can define rule like that:

```ts
mapper.createMap<ISource, IDestination>();
  .map(src => src.srcProperty, dest => dest.destProperty)
  .map(src => src.srcOther, dest => dest.other);
```

-  `src` type is `ISource`
-  `dest` type is `IDestination`

You can chain your rules !

### Conditionnal mapping

`conditions` method allows you to check if the previous `map` will be analysed and mapped to the destination object.

Example:
We want to map the property `srcProperty` (source object) into `destProperty` (destination object) only if the property `visible` of the source object is `true`.

```ts
mapper.createMap<ISource, IDestination>();
  .map(src => src.srcProperty, dest => dest.destProperty)
  .conditions((s: ISource) => s.visible);
```

The `conditions` method takes two arguments:

-  the source object
-  the destination object

Examples:

```ts
mapper
   .createMap<ISource, IDestination>()
   .map(src => src.my_prop, dest => dest.myProp)
   .conditions((s: ISource, d: IDestination) => s.visible);

mapper
   .createMap<ISource, IDestination>()
   .map(src => src.my_prop, dest => dest.myProp)
   .conditions((s: ISource, d: IDestination) => s.visible !== d.visible);
```

### Fly and Casts

Sometime the source properties don't match the destination properties.

Example: `sourceObject.age` can be a `string` and `destinationObject.age` is a `number`.

To work with, you can cast property by chaining the `is` method after a `map`.

```ts
import { TypeMapper, AutoMapperTypes } from "ts-mapper";

mapper
   .createMap<ISource, IDestination>()
   .map(p => p.age, p => p.age)
   .is(AutoMapperTypes.NUMBER);
```

### Execution and Mapping

```ts
mapper
   .createMap<ISource, IDestination>()
   .map(p => p.name, p => p.name)
   .is(AutoMapperTypes.STRING);

const source: ISource = {
   name: "Marluan",
   email: "marluan@refactoring.com.do",
   password: "my_sup3r_s3cr3t_p455w0rd"
};

const destination: IDestination = { name: null };

mapper.map<ISource, IDestination>(source, destination);

console.log(destination);
// {
//    name: "Marluan";
// }
```
