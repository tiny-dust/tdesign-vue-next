import { Ref, inject, computed, getCurrentInstance } from 'vue';
import { TdFormProps } from './type';

export interface FormDisabledProvider {
  disabled: Ref<TdFormProps['disabled']>;
}

/**
 * 用于实现 form 的全局禁用状态hook
 * @returns
 */
export function useFormDisabled() {
  const { props } = getCurrentInstance();
  const propsDisabled = computed(() => props.disabled as boolean);
  const { disabled } = inject<FormDisabledProvider>('formDisabled', Object.create(null));
  return computed(() => propsDisabled.value || disabled?.value);
}