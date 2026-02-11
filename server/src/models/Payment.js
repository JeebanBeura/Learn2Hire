import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
    order: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order',
        required: true
    },
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    paymentMethod: {
        type: String
    },
    transactionId: {
        type: String
    },
    paymentGateway: {
        type: String,
        enum: ['razorpay', 'stripe'],
        required: true
    },
    status: {
        type: String,
        enum: ['success', 'failed'],
        required: true
    },
    paidAt: {
        type: Date
    }
}, { timestamps: true });

export default mongoose.model('Payment', paymentSchema);
