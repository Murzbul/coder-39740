import mongoose, { Schema } from "mongoose";

const studentCollection = 'students';

const StudentSchema = new Schema({
  firstName: { type: Schema.Types.String, require: true },
  lastName: { type: Schema.Types.String, require: true },
  age: { type: Schema.Types.Number, require: true },
  dni: { type: Schema.Types.String, require: true },
  course: { type: Schema.Types.String, require: true },
  note: { type: Schema.Types.Number, require: true },
  enable: { type: Schema.Types.Boolean, default: true }
});

export default mongoose.model(studentCollection, StudentSchema);
