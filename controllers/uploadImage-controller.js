
const url = 'http://localhost:8000';

export const uploadImage = (req,res)=>{
  
   console.log(req.file);
    if(!req.file){
        return res.status(404).json({message:'file not found'});
    }
    const imageUrl =`${url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);
}
