import mongoose, { Schema } from "mongoose";
import paginate from "mongoose-paginate-v2";

const orderCollection = 'orders';

const OrderSchema = new Schema({
  name: { type: Schema.Types.String, require: true },
  size: { type: Schema.Types.String, enum: ['small', 'medium', 'large'], default: 'medium' },
  price: { type: Schema.Types.Number, require: true },
  quantity: { type: Schema.Types.Number, require: true },
  date: { type: Schema.Types.Date }
});

OrderSchema.plugin(paginate);
export default mongoose.model(orderCollection, OrderSchema);
