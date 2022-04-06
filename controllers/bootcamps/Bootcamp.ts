import BootCamp from "../../models/Bootcamp.js"

export const bootcamps = async () => {
  const bootcamps = await BootCamp.find().limit(2).sort({ createdAt: 'desc' })

  return bootcamps
}

export const addBootcamp = async (args: Record<string, string>) => {
  const bootcamp = await BootCamp.create(args)
  return bootcamp
}
