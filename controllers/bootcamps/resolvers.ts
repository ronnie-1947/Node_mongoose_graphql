import * as Bootcamp from "./Bootcamp.js"

export default {
  Query: {
    bootcamps: async () => await Bootcamp.bootcamps()
  },
  
  Mutation: {
    addBootcamp: async (_:any, args: any) => await Bootcamp.addBootcamp(args)
  }
}
