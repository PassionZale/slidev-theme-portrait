import { ref } from 'vue'

const isGuideLineActive = ref(false)

export const useGuideLineStore = () => {
  const toggleGuideLine = () => {
    isGuideLineActive.value = !isGuideLineActive.value
  }

  const setGuideLineValue = (value: boolean) => {
    isGuideLineActive.value = value
  }

  return {
    isGuideLineActive,
    toggleGuideLine,
    setGuideLineValue
  }
} 