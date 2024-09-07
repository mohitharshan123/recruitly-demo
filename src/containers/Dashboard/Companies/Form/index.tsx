import React, { useEffect } from "react";

import { zodResolver } from "mantine-form-zod-resolver";
import { useForm } from "@mantine/form";
import {
  Button,
  Divider,
  Drawer,
  Group,
  Textarea,
  TextInput,
  Loader,
} from "@mantine/core";

import { useCreateOrUpdateCompany } from "../../../../hooks/api/useCompanyApi";
import {
  COMPANY_FORM_INITIAL_VALUES,
  COMPANY_VALIDATION_SCHEMA,
  FormValues,
} from "./constants";

const FormDrawer: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  selectedCompany: FormValues | null;
}> = ({ isOpen, onClose, selectedCompany }) => {
  const isEdit = !!selectedCompany;

  const form = useForm({
    initialValues: COMPANY_FORM_INITIAL_VALUES,
    validate: zodResolver(COMPANY_VALIDATION_SCHEMA),
  });

  const { mutate: createOrUpdateCompany, isLoading: isSubmitting } =
    useCreateOrUpdateCompany();

  useEffect(() => {
    // TODO: Initial values not setting in the form, might have to be fixed in mantine.
    if (!selectedCompany) {
      form.setValues(COMPANY_FORM_INITIAL_VALUES);
      return;
    }

    form.setValues(selectedCompany);
  }, [selectedCompany]);

  const handleSubmit = (values: FormValues) =>
    createOrUpdateCompany(values, {
      onSuccess: () => {
        form.reset();
        onClose();
      },
    });

  return (
    <Drawer
      opened={isOpen}
      onClose={onClose}
      title={`${isEdit ? "Edit" : "Add"} company`}
      overlayProps={{ backgroundOpacity: 0.5, blur: 4 }}
      size="lg"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          description="Name of the company"
          label="Company Name"
          key={form.key("name")}
          {...form.getInputProps("name")}
          mb="md"
          data-autofocus
        />
        <TextInput
          description="Url for the company image"
          label="Image URL"
          key={form.key("imageUrl")}
          {...form.getInputProps("imageUrl")}
          mb="md"
        />
        <TextInput
          label="Website"
          description="Company website"
          key={form.key("website")}
          {...form.getInputProps("website")}
          mb="md"
        />
        <TextInput
          label="Phone"
          description="Contact of the company"
          key={form.key("phone")}
          {...form.getInputProps("phone")}
          mb="md"
        />
        <TextInput
          label="Owner Name"
          description="Name of the CEO"
          key={form.key("ownerName")}
          {...form.getInputProps("ownerName")}
          mb="md"
        />
        <Textarea
          label="Description"
          description="Short description of the company"
          key={form.key("description")}
          {...form.getInputProps("description")}
          mb="md"
          minRows={3}
        />
        <Divider my="md" />
        <Group>
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button type="submit">
            {isSubmitting ? <Loader color="white" size={20} /> : "Save"}
          </Button>
        </Group>
      </form>
    </Drawer>
  );
};

export default FormDrawer;
