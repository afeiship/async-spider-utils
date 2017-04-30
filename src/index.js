import cheerio from 'cheerio';
import request from 'request';


export const load = async (inUrl)=>{
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
