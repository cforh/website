import { visit } from "unist-util-visit";
import type { Root, Element } from "hast";

export function rehypeWrapTables() {
  return (tree: Root) => {
    visit(tree, "element", (node: Element, index, parent) => {
      if (node.tagName !== "table" || !parent || index == null) return;

      const wrapper: Element = {
        type: "element",
        tagName: "div",
        properties: { className: ["table-wrapper"] },
        children: [node],
      };

      parent.children.splice(index, 1, wrapper);
    });
  };
}
