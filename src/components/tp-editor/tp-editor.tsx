"use client";

import {
  renderTpBlock,
  TpBlockType,
} from "@/components/tp-editor/tp-block-type";
import React, { useEffect, useState } from "react";

const initialDocumentBlockTree: TpBlockType[] = [
  {
    id: "initial-block-1",
    type: "tp-block-text",
    props: {
      content: "Write here...",
    },
    children: [],
  },
  {
    id: "initial-block-2",
    type: "tp-block-text",
    props: {
      content: "Write another here...",
    },
    children: [],
  },
];

export default function TpEditor() {
  const [focusedBlockId, setFocusedBlockId] = useState<string | null>(
    "initial-block-2",
  );

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

  useEffect(() => {
    if (focusedBlockId) {
      console.log("Focused block id: " + focusedBlockId);
      console.log(document.getElementById(focusedBlockId));
      document.getElementById(focusedBlockId)?.focus();
    }
  }, [focusedBlockId]);

  const onFocus = (blockId: string) => {
    if (focusedBlockId != blockId) {
      setFocusedBlockId(blockId);
    }
  };

  const onBlur = (blockId: string) => {
    if (focusedBlockId == blockId) {
      setFocusedBlockId(null);
    }
  };

  return (
    <div>
      <div className={`border`}>
        {documentBlockTree.map((block: TpBlockType) => {
          return renderTpBlock(block, blockChangeHandler, onFocus, onBlur);
        })}
      </div>
      <br />
      <div>
        <button onClick={() => console.log(documentBlockTree)}>Print</button>
      </div>
    </div>
  );
}
