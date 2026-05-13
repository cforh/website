/* eslint-disable @typescript-eslint/no-explicit-any */
import { visit } from "unist-util-visit";

/**
 * Remark plugin that unwraps implicit paragraphs inside JSX flow elements.
 *
 * When text is placed on its own line inside a JSX element, MDX wraps it in a
 * paragraph node, which renders as an unwanted <p> element. This plugin hoists
 * the inline children of those paragraphs up to the JSX element directly.
 *
 * Explicit <p> elements written in MDX are unaffected because they are parsed
 * as mdxJsxFlowElement nodes, not mdast paragraph nodes.
 */
export function remarkUnwrapJsxParagraphs() {
  return (tree: any) => {
    visit(tree, "mdxJsxFlowElement", (node: any) => {
      node.children = node.children.flatMap((child: any) => {
        if (child.type === "paragraph") {
          return child.children;
        }
        return [child];
      });
    });
  };
}
