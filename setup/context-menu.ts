import { defineContextMenuSetup } from "@slidev/types";
import { computed } from "vue";
import IconGuideLine from '~icons/carbon/ibm-cloud-direct-link-1-dedicated'
import { useGuideLineStore } from "./useGuideLineStore";

const { toggleGuideLine } = useGuideLineStore();

export default defineContextMenuSetup((items) => {
  return computed(() => [
    ...items.value,
    {
      small: false,
      icon: IconGuideLine,
      label: "Toggle Guidelines",
      action: () => toggleGuideLine(),
    },
  ]);
});
