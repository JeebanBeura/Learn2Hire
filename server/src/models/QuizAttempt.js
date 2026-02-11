import mongoose from 'mongoose';

const quizAttemptSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    quiz: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Quiz',
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    passed: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });

export default mongoose.model('QuizAttempt', quizAttemptSchema);
