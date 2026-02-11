import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    recruiter: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: {
        type: [String],
        default: []
    },
    jobType: {
        type: String,
        enum: ['full-time', 'part-time', 'contract', 'freelance', 'internship'],
        default: 'full-time'
    },
    location: {
        type: String,
        required: true
    },
    salaryRange: {
        type: String // e.g., "50k-80k"
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, { timestamps: true });

jobSchema.index({ title: 'text', skills: 1 });

export default mongoose.model('Job', jobSchema);
