import { Schema, model } from 'mongoose';
import { ISalesHistory } from './sales-history.interface';

const SalesHistorySchema = new Schema<ISalesHistory>(
  {
    productId: { type: Schema.Types.ObjectId, ref: 'Product' },
    quantity: { type: Number },
    buyerName: { type: String },
    buyDate: { type: Date },
  },
  { timestamps: true },
);

const SalesHistory = model<ISalesHistory>('SalesHistory', SalesHistorySchema);

export default SalesHistory;
