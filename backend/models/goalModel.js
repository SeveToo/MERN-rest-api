import mongoose from 'mongoose';

const goalSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, 'Text is required'],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Goal', goalSchema);
