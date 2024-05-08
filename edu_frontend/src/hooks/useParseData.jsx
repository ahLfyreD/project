import { ParseContent } from "./useParseContent";

/**
 * @param {{
    subtitle: string;
    href: string;
    subcontent: ({
        type: string;
        data: {
            text: string;
            style?: undefined;
            items?: undefined;
        };
    }[]}[]} db
 */


export function ParseData(db) {
    const mainSection = document.createElement("main");
  
    db.forEach((content) => {
      const parsed = ParseContent(content);
  
      if (!parsed) {
        console.log("unparsed");
      } else {
        mainSection.appendChild(parsed);
      }
    });
  
    return mainSection;
  }