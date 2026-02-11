import mongoose from 'mongoose';

const transactionLogSchema = new mongoose.Schema({
    orderId: {
        type: String // or ObjectId if linking strictly, but raw logs might use external strings
    },
    eventType: {
        type: String
    },
    rawResponse: {
        type: mongoose.Schema.Types.Mixed // Flexible storage for raw gateway responses
    }
}, { timestamps: true });

export default mongoose.model('TransactionLog', transactionLogSchema);
