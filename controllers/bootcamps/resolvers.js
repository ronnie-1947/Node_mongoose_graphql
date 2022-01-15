import * as Bootcamp from "./Bootcamp.js"

export default {
  Query: {
    bootcamps: async (_, args, {auth}) => await Bootcamp.bootcamps(args)
  },
  
  Mutation: {
    addBootcamp: async (_, args, {auth}) => await Bootcamp.addBootcamp(args, auth)
  }
}
