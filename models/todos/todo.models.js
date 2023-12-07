import mongoose from 'mongoose';

const todoScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Schema.types.ObjectID,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.types.ObjectID,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

export const Todo = mongoose.model('Todo', todoSchema);
