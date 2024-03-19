const search = document.getElementById("search");
const article = document.querySelector("article");

const treeWalker = document.createTreeWalker(article, NodeFilter.SHOW_TEXT);
const allTextNodes = [];
let currentNode = treeWalker.nextNode();
while (currentNode) {
    allTextNodes.push(currentNode);
    currentNode = treeWalker.nextNode();
}

search.addEventListener("input", () => {
    if (!CSS.highlights) {
        article.textContent = "CSS Custom Highlight API not supported";
        return;
    }

    CSS.highlights.clear();

    const str = search.value.trim().toLowerCase();
    if (!str) return;

    const ranges = allTextNodes
        .map((el) => {
            return { el, text: el.textContent.toLowerCase() };
        })
        .map(({ text, el }) => {
            const indices = [];
            let startPos = 0;
            while (startPos < text.length) {
                const index = text.indexOf(str, startPos);
                if (index === -1) break;
                indices.push(index);
                startPos = index + str.length;
            }

            return indices.map((index) => {
                const range = new Range();
                range.setStart(el, index);
                range.setEnd(el, index + str.length);
                console.log(range);
                return range;
            });
        });

    const searchResultsHighlight = new Highlight(...ranges.flat());

    CSS.highlights.set("search-results", searchResultsHighlight);
});
