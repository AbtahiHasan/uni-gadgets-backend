import { Schema, model } from 'mongoose';
import { ISalesHistory } from './sales-history.interface';

const SalesHistorySchema = new Schema<ISalesHistory>(
  {
    phoneNumber: { type: String },
    buyerName: { type: String },
    buyDate: { type: Date },
  },
  { timestamps: true },
);

const SalesHistory = model<ISalesHistory>('SalesHistory', SalesHistorySchema);

export default SalesHistory;
