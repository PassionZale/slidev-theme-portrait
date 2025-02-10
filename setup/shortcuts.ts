import type { NavOperations, ShortcutOptions } from "@slidev/types";
import { defineShortcutsSetup } from "@slidev/types";
import { useGuideLineStore } from "./useGuideLineStore";

const { toggleGuideLine } = useGuideLineStore();

export default defineShortcutsSetup(
  (_: NavOperations, base: ShortcutOptions[]) => {
    return [
      ...base,
      {
        key: "l",
        fn: () => toggleGuideLine(),
        autoRepeat: true,
      },
    ];
  }
);
