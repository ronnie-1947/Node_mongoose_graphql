import fs from "fs"
import path from "path"

const basePath = path.join(process.cwd(), "controllers")

const base = fs.readFileSync(`${basePath}/base/typeDefs.graphql`, "utf-8")
const bootcamp = fs.readFileSync(`${basePath}/bootcamps/typeDefs.graphql`, "utf-8")



export default [base, bootcamp]
