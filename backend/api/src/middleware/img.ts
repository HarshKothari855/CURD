import multer, { diskStorage} from 'multer';

const imgUpload: any = multer({
    storage: diskStorage({
        filename: (req, file, cb) => {
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    })
}).single('singleImg')

export = imgUpload;