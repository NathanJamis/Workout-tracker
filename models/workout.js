const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now,
  },
  totalDuration: {
    type: Number,
    default: 0
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
      },
    },
  ],
});

workoutSchema.methods.calcDuration = function() {
  let duration = 0;
  for (var i = 0; i < this.exercises.length; i++) {
    duration += this.exercises[i].duration;
  };
  return duration;
};

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
