import mongoose from 'mongoose';

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    thumbnail: {
        type: String,
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    category: {
        type: String,
        required: true
    },
    level: {
        type: String,
        enum: ['beginner', 'intermediate', 'advanced'],
        default: 'beginner'
    },
    price: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 0
    },
    totalStudents: {
        type: Number,
        default: 0
    }
}, { timestamps: true });

courseSchema.index({ title: 'text', category: 1 });

export default mongoose.model('Course', courseSchema);
