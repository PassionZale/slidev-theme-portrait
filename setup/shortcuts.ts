import type { NavOperations, ShortcutOptions } from "@slidev/types";
import { defineShortcutsSetup } from "@slidev/types";
import { useNav } from '@slidev/client'
import { useGuideLineStore } from "./useGuideLineStore";

const { toggleGuideLine } = useGuideLineStore();


export default defineShortcutsSetup(
  (_: NavOperations, base: ShortcutOptions[]) => {
	  const { isPresenter } = useNav()

    return [
      ...base,
      {
        key: "l",
        fn: () => isPresenter.value ? undefined : toggleGuideLine(),
        autoRepeat: true,
      },
    ];
  }
);
