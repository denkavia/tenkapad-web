"use client";

import Block, { BlockProps } from "@/components/block";
import React, { useEffect, useRef, useState } from "react";

export default function Editor() {
  const [blocks, setBlocks] = useState<BlockProps[]>([
    { uid: "initial-id", content: "Write here...", type: "text" },
  ]);
  const [activeBlockId, setActiveBlockId] = useState<string | null>(null);
  const pressedKeys = useRef<Set<string>>(new Set());

  const addNewBlock = () => {
    const uid = crypto.randomUUID();

    setBlocks((prev) => [
      ...prev,
      {
        uid,
        content: "",
        type: "text",
      },
    ]);

    setActiveBlockId(uid);
  };

  const keydownHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    pressedKeys.current.add(e.key);

    if (pressedKeys.current.has("Enter")) {
      if (!pressedKeys.current.has("Shift")) {
        e.preventDefault();
        addNewBlock();
      }
    }
  };

  const keyupHandler = (e: React.KeyboardEvent<HTMLDivElement>) => {
    pressedKeys.current.delete(e.key);
  };

  useEffect(() => {
    if (activeBlockId) {
      const targetElement = document.getElementById(activeBlockId);

      if (targetElement) {
        targetElement.focus();
      }
    }
  }, [activeBlockId, blocks]);

  return (
    <div
      className={`w-full border-2 p-4`}
      onKeyDown={keydownHandler}
      onKeyUp={keyupHandler}
    >
      <div id={`block-area`}>
        {blocks.map((block) => (
          <Block
            key={block.uid}
            uid={block.uid}
            content={block.content}
            type={block.type}
            childs={block.childs ?? []}
          />
        ))}
      </div>
    </div>
  );
}
