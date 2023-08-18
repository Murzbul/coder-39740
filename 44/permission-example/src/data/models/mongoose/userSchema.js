import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const userCollection = 'users';

const UserSchema = new Schema({
  firstName: { type: Schema.Types.String, required: true },
  lastName: { type: Schema.Types.String },
  email: { type: Schema.Types.String, unique: true, required: true },
  age: { type: Schema.Types.Number, default: 18 },
  role: { type: Schema.Types.ObjectId, index: true, ref: 'roles', default: null },
  isAdmin: { type: Schema.Types.Boolean, default: false },
  password: { type: Schema.Types.String }
});

UserSchema.plugin(paginate);

// UserSchema.pre('find', function () {
//   this.populate(['role']);
// });
//
// UserSchema.pre('findOne', function () {
//   this.populate(['role']);
// });

export default mongoose.model(userCollection, UserSchema);
