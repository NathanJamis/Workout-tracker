const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter the type of workout",
      },
      name: {
        type: String,
        trim: true,
        required: "Enter the name of workout",
      },
      duration: {
        type: Number,
        required: "Enter the workout duration (in minutes)",
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
      distance: {
        type: Number,
      }
    },
  ],
},
{
  toJSON: { virtuals: true }
});

workoutSchema.virtual("totalDuration").get(function() {
  let totalDuration = this.exercises.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.duration;
  }, 0);
  return totalDuration;
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
