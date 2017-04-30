import cheerio from 'cheerio';


export const html = async (inUrl)=>{
  return new Promise((resolve, reject) => {
    request(inUrl,(err,response,body)=>{
      if(!err){
        resolve( cheerio.load(body) );
      }else{
        reject(err);
      }
    });
  });
};
