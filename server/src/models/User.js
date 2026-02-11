import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['student', 'instructor', 'recruiter', 'admin'],
        default: 'student',
    },
    permissions: {
        type: [String],
        default: []
    },
    avatar: {
        type: String,
    },
    isBlocked: {
        type: Boolean,
        default: false,
    },
    refreshToken: {
        type: String,
    },
}, { timestamps: true });

// Encrypt password using bcrypt
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// Match user entered password to hashed password in database
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Basic index for email search
userSchema.index({ email: 1 });

export default mongoose.model('User', userSchema);
