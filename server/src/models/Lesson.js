import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Section',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    contentType: {
        type: String, // video, pdf, text
        required: true
    },
    contentUrl: {
        type: String,
        required: true
    },
    duration: {
        type: Number // in seconds or minutes
    },
    order: {
        type: Number,
        required: true
    }
}, { timestamps: true });

lessonSchema.index({ section: 1, order: 1 });

export default mongoose.model('Lesson', lessonSchema);
