import mongoose from 'mongoose';

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
    },
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
