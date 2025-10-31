"use client";

import { Room } from "@/app/Room";
import { StorageTldraw } from "@/components/StorageTldraw";
import { UserButton } from "@clerk/nextjs";

/**
 * IMPORTANT: LICENSE REQUIRED
 * To use tldraw commercially, you must first purchase a license
 * Learn more: https://tldraw.dev/community/license
 */

export default function Home() {
  return (
    <Room>
      <div style={{ position: "absolute", top: "1rem", right: "1rem", zIndex: 1000 }}>
        <UserButton />
      </div>
      <StorageTldraw />
    </Room>
  );
}
