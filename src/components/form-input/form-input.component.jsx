import { FormInputLabel, Input, Group, TextArea } from "./form-input.styles";

export const FormInput = ({ label, ...otherProps }) => {
  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export const FormTextArea = ({ label, ...otherProps }) => {
  return (
    <Group>
      <TextArea {...otherProps} />
      {label && (
        <FormInputLabel shrink={otherProps.value}>{label}</FormInputLabel>
      )}
    </Group>
  );
};
