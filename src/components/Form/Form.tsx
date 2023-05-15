import { Translation } from '@salesapp/types';
import React from 'react';
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

export const Field = <TFieldValues extends FieldValues>({
  control,
  name,
  error,
  rules,
  placeholder,
}: FieldProps<TFieldValues>) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({ field: { onBlur, onChange, value } }) => (
        <Input
          placeholder={placeholder as string}
          state={{ value, error }}
          onChangeText={onChange}
          onBlur={onBlur}
        />
      )}
      name={name}
    />
  );
};

Form.Field = Field;

export default Form;
