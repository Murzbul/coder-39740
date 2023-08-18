import mongoose, { Schema } from "mongoose";

const studentCollection = 'students';

const StudentSchema = new Schema({
  firstName: { type: Schema.Types.String, require: true },
  lastName: { type: Schema.Types.String, require: true },
  age: { type: Schema.Types.Number, require: true },
  dni: { type: Schema.Types.String, require: true },
  courses: [{ type: Schema.Types.ObjectId, index: true, ref: 'courses', default: [] }],
  note: { type: Schema.Types.Number, require: true },
  enable: { type: Schema.Types.Boolean, default: true }
});

StudentSchema.pre('find', function () {
  this.populate(['courses']);
});

StudentSchema.pre('findOne', function () {
  this.populate(['courses']);
});

export default mongoose.model(studentCollection, StudentSchema);
