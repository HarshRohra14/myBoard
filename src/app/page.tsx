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
      <div className="corner-actions">
        <UserButton />
      </div>
      <StorageTldraw />
    </Room>
  );
}
