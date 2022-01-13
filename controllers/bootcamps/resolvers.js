import * as Bootcamp from "./Bootcamp.js"

export default {
  Query: {
    bootcamps: async () => await Bootcamp.bootcamps()
  }
}
