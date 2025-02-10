import { defineContextMenuSetup } from "@slidev/types";
import { computed } from "vue";
import { useNav } from '@slidev/client'
import IconGuideLine from '~icons/carbon/ibm-cloud-direct-link-1-dedicated'
import { useGuideLineStore } from "./useGuideLineStore";

const { toggleGuideLine } = useGuideLineStore();

export default defineContextMenuSetup((items) => {
  const { isPresenter } = useNav()

  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: IconGuideLine,
      label: "Toggle Guidelines",
      action: () => toggleGuideLine(),
			disabled: isPresenter.value
    },
  ]);
});
