import path from "path";
import DatauriParser from "datauri/parser";
const parser = new DatauriParser();

export const formatBufferTo64 = (file) =>
  parser.format(path.extname(file.originalname).toString(), file.buffer);
