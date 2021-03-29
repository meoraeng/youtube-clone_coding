import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type: String,
        required: "Text is required"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    creator:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    creatorName: {
      type: String,
      ref: "User"
    }
})

const model = mongoose.model("Comment", CommentSchema);
// 몽구스 모델 메소드로 Comment라는 이름의 CommentSchema를 DB로 연결함
export default model;