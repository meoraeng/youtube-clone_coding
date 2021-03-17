import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); // 이 메소드의 역할은 뭘까

mongoose.connect( // 이건 내 JS랑 DB를 연결시켜주는 역할같고
    process.env.MONGO_URL, //.env파일에 저장된 url 값을 가져오는 역할인데, process에 대한 교과서 내용 참고해서 포스팅
    {
        useNewUrlParser: true,
        useFindAndModify: false
    }
);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = (error) => console.log(`❌ Error on DB Connection: ${error}`)

db.once("open",handleOpen);//once 한번만 실행
db.on("error",handleError); // 이것도 mongoose.connection.on 을 다르게 표현한건데, on 메소드의 역할은 뭐길래 error처리가 가능하지 ?? 