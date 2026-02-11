import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job',
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    resumeUrl: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['applied', 'viewed', 'shortlisted', 'rejected', 'hired'],
        default: 'applied'
    }
}, { timestamps: true });

// Prevent multiple applications to the same job by same user
jobApplicationSchema.index({ job: 1, student: 1 }, { unique: true });

export default mongoose.model('JobApplication', jobApplicationSchema);
