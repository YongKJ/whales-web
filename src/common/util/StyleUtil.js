
import {LogUtil} from "@/common/util/LogUtil"

export class StyleUtil {
  
  static getGlobalStyle() {
    const screenWidth = document.documentElement.clientWidth;
    const screenHeight = document.documentElement.clientHeight;
    
    LogUtil.info("getGlobalStyle", "screenWidth", screenWidth);
    LogUtil.info("getGlobalStyle", "screenHeight", screenHeight);
    
    return {
      width: screenWidth + "px"
    }
  }
  
  static getBackImgStyle(imgSrc) {
    return {
      backgroundImage: "url(" + imgSrc + ")"
    }
  }
  
  static getArticleImgStye(imgSrc) {
        let img = new Image();
        img.src = imgSrc;

        LogUtil.info("getArticleImgStye", "img.width", img.width);
        LogUtil.info("getArticleImgStye", "img.height", img.height);

        let smallNum = img.width < img.height ? img.width : img.height;
        let bigNum = img.width > img.height ? img.width : img.height;

        let height = smallNum * 0.2;
        if (smallNum * 2 < bigNum) {
            height = bigNum * 0.2;
        }
        if (height > 400 || smallNum === 1080) {
            height = height / 2;
        }
        if (height < 170) {
          height = 170;
        }

        LogUtil.info("getArticleImgStye", "height", height);

        return {
          height: height + "px"
        }
  }
  
}