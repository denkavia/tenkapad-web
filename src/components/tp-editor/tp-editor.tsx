"use client";

import {
  renderTpBlock,
  TpBlockType,
} from "@/components/tp-editor/tp-block-type";
import React from "react";

const initialDocumentBlockTree: TpBlockType[] = [
  {
    id: "initial-block-1",
    type: "tp-block-text",
    props: {
      content: "Write here...",
    },
    children: [],
  },
];

export default function TpEditor() {
  const [documentBlockTree, setDocumentBlockTree] = React.useState<
    TpBlockType[]
  >(initialDocumentBlockTree);

  const blockChangeHandler = (block: TpBlockType) => {
    setDocumentBlockTree((blockTree) => {
      console.log(block);

      const targetBlock = blockTree.find((block) => block.id === block.id);

      if (targetBlock != undefined) {
        targetBlock.props = block.props;
      }

      return blockTree;
    });
  };

  return (
    <div>
      <div className={`border`}>
        {documentBlockTree.map((block: TpBlockType) => {
          return renderTpBlock(block, blockChangeHandler);
        })}
      </div>
      <br />
      <div>
        <button onClick={() => console.log(documentBlockTree)}>Print</button>
      </div>
    </div>
  );
}
