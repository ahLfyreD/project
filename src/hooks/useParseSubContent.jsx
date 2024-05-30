/**
       * @param subContent {{
       *    data: {
       *      text?: string;
       *      style?: string;
       *      items?: string[];
       *    };
       *    type: string;
       * }}
       */
export function ParseSubContent(subContent, elemType = "p") {
    let subber = document.createElement(elemType);
    /**
     * @type {string}
     */
    let text;
    if (subContent.data && subContent.data.text) {
        text = subContent.data.text
    } else if (subContent.text) {
        text = subContent.text
    }
    if (text) {
        const tC = document.createElement("p");
        tC.textContent = text;
        subber.appendChild(tC);
    }
    let items;
    let style;
    if (
        subContent.data &&
        subContent.data.items &&
        Array.isArray(subContent.data.items)
    ) {
        style = subContent.data.style
        items = subContent.data.items;
    } else if (subContent.items && Array.isArray(subContent.items)) {
        items = subContent.items;
        style = subContent.style
    }

    if (items && Array.isArray(items)) {
        let midSubber
        if (style == "ordered") {
            midSubber = document.createElement("ol");
        } else {
            midSubber = document.createElement("ul");
        }

        items.forEach((item) => {
            if (typeof item == "string") {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                midSubber.appendChild(listItem);
            } else {
                const parsed = ParseSubContent(item, "li");
                if (!parsed) {
                    console.log({ parsed });
                } else {
                    midSubber.appendChild(parsed);
                }
            }

        });

        subber.appendChild(midSubber);
    }
    return subber;
}