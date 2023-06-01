import { Translation } from '@salesapp/types';
import React from 'react';
import { Picker as NativePicker } from '@react-native-picker/picker';
import {
  Controller,
  useForm,
  Control,
  FieldValues,
  Path,
  FieldErrorsImpl,
  DeepRequired,
  DeepPartial,
  UseFormHandleSubmit,
  UseControllerProps,
} from 'react-hook-form';
import { Input } from '../Input/Input';
import { useTranslation } from '@salesapp/hooks';

type ChildrenParams<TFieldValues extends FieldValues> = {
  control: Control<TFieldValues>;
  errors: Partial<FieldErrorsImpl<DeepRequired<TFieldValues>>>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
};

type FormProps<TFieldValues extends FieldValues> = {
  formData: DeepPartial<TFieldValues>;
  children: ({
    control,
    errors,
    handleSubmit,
  }: ChildrenParams<TFieldValues>) => React.ReactNode;
};

type FieldProps<TFieldValues extends FieldValues> = {
  control?: Control<TFieldValues>;
  name: Path<TFieldValues>;
  error?: string;
  rules?: UseControllerProps<TFieldValues>['rules'];
  placeholder: Translation;
  formatter?: (input: string) => string;
  maxLength?: number;
};

type PickerOption = {
  label: Translation;
  value: string;
};

type PickerProps<TFieldValues extends FieldValues> = {
  control?: Control<TFieldValues>;
  name: Path<TFieldValues>;
  error?: string;
  rules?: UseControllerProps<TFieldValues>['rules'];
  options: PickerOption[];
};

const Form = <TFieldValues extends FieldValues>({
  formData,
  children,
}: FormProps<TFieldValues>) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });

  return <>{children({ control, errors, handleSubmit })}</>;
};

export const Picker = <TFieldValues extends FieldValues>({
  control,
  name,
  options,
}: PickerProps<TFieldValues>) => {
  const t = useTranslation();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <NativePicker onValueChange={onChange} selectedValue={value}>
          <NativePicker.Item label={t('common.pickAChoice')} value="" />
          {options.map((option, index) => (
            <NativePicker.Item
              key={index}
              label={t(option.label)}
              value={option.value}
            />
          ))}
        </NativePicker>
      )}
    />
  );
};

export const Field = <TFieldValues extends FieldValues>({
  control,
  name,
  error,
  rules,
  placeholder,
  maxLength,
  formatter,
}: FieldProps<TFieldValues>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onBlur, onChange, value } }) => (
        <Input
          placeholder={placeholder}
          state={{ value: formatter ? formatter(value) : value, error }}
          onChangeText={onChange}
          onBlur={onBlur}
          maxLength={maxLength}
        />
      )}
      name={name}
    />
  );
};

Form.Field = Field;
Form.Picker = Picker;

export default Form;
