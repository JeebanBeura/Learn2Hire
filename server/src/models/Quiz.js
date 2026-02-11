import mongoose from 'mongoose';

const questionSchema = new mongoose.Schema({
    question: { type: String, required: true },
    options: [{ type: String }],
    correctAnswer: { type: String, required: true } // Could be index or string
});

const quizSchema = new mongoose.Schema({
    course: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Course',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    questions: [questionSchema]
}, { timestamps: true });

export default mongoose.model('Quiz', quizSchema);
