"use client";

import {
  renderTpBlock,
  TpBlockType,
} from "@/components/tp-editor/tp-block-type";
import React, { useEffect, useRef, useState } from "react";

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

  const cursorPlacement = useRef<"start" | "end">("start");

  const pressedKey = useRef<string[]>([]);

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

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!pressedKey.current.includes(e.key)) {
      pressedKey.current.push(e.key);
    }

    if (pressedKey.current.length == 1) {
      if (pressedKey.current[0] === "ArrowLeft") {
        const cursorData = window.getSelection();
        if (cursorData && (cursorData?.focusOffset ?? 0) == 0) {
          e.preventDefault();
          const blockIndex = documentBlockTree.findIndex(
            (block) => block.id === focusedBlockId,
          );

          if (blockIndex > 0) {
            cursorPlacement.current = "end";
            setFocusedBlockId(documentBlockTree[blockIndex - 1].id);
          }
        }
      }
      if (pressedKey.current[0] === "ArrowRight") {
        const cursorData = window.getSelection();

        if (cursorData && cursorData.focusNode?.nodeValue?.length) {
          if (cursorData.focusOffset >= cursorData.focusNode.nodeValue.length) {
            const blockIndex = documentBlockTree.findIndex(
              (block) => block.id === focusedBlockId,
            );

            if (blockIndex < documentBlockTree.length - 1) {
              cursorPlacement.current = "start";
              setFocusedBlockId(documentBlockTree[blockIndex + 1].id);
            }
          }
        }
      }
    }
  };

  const onKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (pressedKey.current.includes(e.key)) {
      pressedKey.current = pressedKey.current.filter((key) => e.key !== key);
    }
  };

  useEffect(() => {
    if (focusedBlockId) {
      const focusedElement = document.getElementById(focusedBlockId);

      if (!focusedElement) return;

      focusedElement.focus();
      const textNode = focusedElement.firstChild;
      const cursorData = window.getSelection();

      if (textNode && cursorData) {
        console.log(textNode);
        const length = textNode.textContent?.length ?? 0;
        const offset = cursorPlacement.current === "end" ? length : 0;
        const range = document.createRange();
        range.setStart(textNode, offset);
        range.collapse(true);
        cursorData.removeAllRanges();
        cursorData.addRange(range);
      }
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
      <div className={`border`} onKeyDown={onKeyDown} onKeyUp={onKeyUp}>
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
