import { ParseSubContent } from "./useParseSubContent";

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
    }[]}[]} data
 */
  export function ParseContent(data) {
        const article = document.createElement("article");
        
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
      
          const section = document.createElement("section");
          const subTitle = document.createElement("h2");
          subTitle.textContent = element.subtitle;
          section.appendChild(subTitle);
          subTitle.setAttribute("id", element.href)
          // if (element.href) {
          //   const link = document.querySelector(subTitle);
          //   link.setAttribute("id", element.href);
          //   section.appendChild(link);
          // }
      
          let hasChildren = false;
          const subContentWrapper = document.createElement("section");
          if (element.subcontent && Array.isArray(element.subcontent)) {
            element.subcontent.forEach((subC) => {
              hasChildren = true;
              const parsedSub = ParseSubContent(subC);
              subContentWrapper.appendChild(parsedSub);
            });
          }
          if (hasChildren) {
            section.appendChild(subContentWrapper);
          }
          article.appendChild(section);
        }
      
        return article;
      }