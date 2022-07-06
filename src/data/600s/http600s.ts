import { EStatusCodeGroup, IHttpStatusCode } from "../httpStatusCodes.types";

export const http600s: IHttpStatusCode[] = [{
  category: EStatusCodeGroup.MISC,
  statusCode: 666,
  title: "Oh no...",
  description: `
| || |    ,/  _____   .             
 _||_/    ||_/      _||             
  ||        _| . . |_/              
  ||         |  L  |                
 ,||         | === |                
 |>|      ___'>  -<'___             
 |>|     /                          
 |>|    /  ,    .    .  |           
  ||   /  /| .  |  . |  |           
  ||     / | ___|___ |  |           
(( ||'--'  | _______ |  |  )  ))  ( 
(  ) || ( )| - --- - | -| (  (    ))
( /  || )) | -- - -- |  | )) )   (( 
( ()||((( (|         |  |( (( () ))`,
moreLink: "https://en.wikipedia.org/wiki/Satan",
specLink: "https://en.wikipedia.org/wiki/Satan",
}]