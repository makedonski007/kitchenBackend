import mongoose from 'mongoose';

const TableSchema = new mongoose.Schema(
  {
    number: {type: Number, required: true, unique: true},
    capacity: {type: Number, required: true},
    status: {type: String, enum: ["free", "occupied"], default: "free"},
  },
  {timestamps: true}
)

export default TableSchema;