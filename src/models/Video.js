import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File URL is required'
    },//required가 파일이 있으면 에러메세지를 띄운다는건지 그 반대인지 모르겠네
    title: {
        type:String,
        required: "Title is required"
    },// 반대겠지? 제목이랑 url이 없으면 없다고 에러가 떠야하는 필수 항목
    description: String,
    views: {
        type: Number,
        default: 0 //비디오가 처음 생성되면 조회수는 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }],
    creator:{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
});

const model = mongoose.model("Video", VideoSchema);
export default model;