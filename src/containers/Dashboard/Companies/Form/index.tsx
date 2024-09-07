import React from "react";
import {
  Drawer,
  TextInput,
  Textarea,
  Button,
  Group,
  Divider,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { z } from "zod";
import { zodResolver } from "mantine-form-zod-resolver";
import {
  COMPANY_FORM_INITIAL_VALUES,
  COMPANY_VALIDATION_SCHEMA,
} from "./constants";

type FormValues = z.infer<typeof COMPANY_FORM_INITIAL_VALUES>;

const FormDrawer: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const form = useForm<FormValues>({
    initialValues: COMPANY_FORM_INITIAL_VALUES,
    validate: zodResolver(COMPANY_VALIDATION_SCHEMA),
  });

  const handleSubmit = (values: FormValues) => {
    console.log("Form submitted:", values);
    onClose();
  };

  return (
    <Drawer
      opened={isOpen}
      onClose={onClose}
      title="Add Company"
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      size="lg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Company Name"
          {...form.getInputProps("name")}
          mb="md"
        />
        <TextInput
          label="Image URL"
          {...form.getInputProps("imageUrl")}
          mb="md"
        />
        <TextInput label="Website" {...form.getInputProps("website")} mb="md" />
        <TextInput label="Phone" {...form.getInputProps("phone")} mb="md" />
        <TextInput
          label="Owner Name"
          {...form.getInputProps("ownerName")}
          mb="md"
        />
        <Textarea
          label="Description"
          {...form.getInputProps("description")}
          mb="md"
          minRows={3}
        />
        <Divider my="md" />
        <Group>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">Add Company</Button>
        </Group>
      </form>
    </Drawer>
  );
};

export default FormDrawer;
