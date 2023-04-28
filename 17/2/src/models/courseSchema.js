import mongoose, { Schema } from "mongoose";

const courseCollection = 'courses';

const CourseSchema = new Schema({
  title: { type: Schema.Types.String, require: true },
  description: { type: Schema.Types.String, require: true },
  difficulty: { type: Schema.Types.Number, require: true },
  topics: { type: Schema.Types.Array, default: [] },
  profesor: { type: Schema.Types.String }
});

export default mongoose.model(courseCollection, CourseSchema);
